import * as React from 'react';
import * as axios from 'axios';
import firebase from '../../controllers/firebase.js';

class Social extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      user: '',
      comments: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.initializeState();
  }

  componentDidMount() {
    this.getInstagramPosts();
    this.getYouTubePosts();
    const commentsRef = firebase.database().ref('comments');
    commentsRef.on('value', (snapshot) => {
      let comments = snapshot.val();
      let newState = [];
      for (let item in comments) {
        newState.push({
          id: item,
          comment: comments[item].comment,
          user: comments[item].user
        });
      }
      this.setState({
        comments: newState
      });
    });
  }

  initializeState() {
    this.setState({
      instagramPost: [],
      youTubePosts: []
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const commentsRef = firebase.database().ref('comments');
    const commentObj = {
      comment: this.state.comment,
      user: this.state.user
    }
    commentsRef.push(commentObj);
    this.setState({
      comment: '',
      user: ''
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  getInstagramPosts() {
    axios.get('/yogaInstagram').then((response) => {
      console.log('instagram res', response.data);
      this.setState({
        instagramPost: [response.data]
      });
    });
  }

  getYouTubePosts() {
    axios.get('/yogaYouTube').then((response) => {
      console.log('youtube res', response);
      this.setState({
        youTubePosts: [response.data]
      });
    }).catch((err) => { console.log(err) });
  }

  render() {
    const instaPostMap = this.state.instagramPost.map((item, index) => {
      // logic to display image if video is null or undefined
      let image;
      if (item.videos === null || item.videos === undefined) {
        image = <img height="293" width="293" src={item.images.standard_resolution.url} />;
      } else {
        image = <video autoPlay> <source src={item.videos.standard_resolution.url} type="video/mp4" />
        </video>;
      }
      return (
        <div className="card" key={index}>
          <div className="card-image">
            <figure className="image">
              {image}
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              {item.caption.text}
            </div>
          </div>
        </div>
      )
    });
    const commentsMap = this.state.comments.map((item) => {
      return (
        <li key={item.id}>
          <p>{item.user}</p>
          <p>{item.comment}</p>
        </li>
      )
    });
    const youTubeMap = this.state.youTubePosts.map((item, index) => {
      return (
        <div key={index}>
          <iframe src={`https://www.youtube.com/embed/${item.items[0].id}`} frameBorder="0" height="293" width="293"></iframe>
        </div>
      )
    })
    return (
      <div>
        <div className="columns">
          <div className="instagram column">
            {instaPostMap}
          </div>
          <div className="youtube column">
            {youTubeMap}
          </div>
        </div>
        <div className="columns">
          <div>
            <ul className="comments-display column">
              {commentsMap}
            </ul>
          </div>
          <form onSubmit={this.handleSubmit} >
            <div className="comments">
              <input type="text" name="user" placeholder="What's your name?" onChange={this.handleChange} value={this.state.user} />
              <label htmlFor="comment-input">Add comments here.</label>
              <textarea
                name="comment"
                id="comment-input"
                cols="30"
                rows="10"
                onChange={this.handleChange}
                value={this.state.comment} />

              <button id="add-comment" className="button is-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export { Social };