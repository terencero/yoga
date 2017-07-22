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
            instagramPost: []
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
    render() {
        const instaPostMap = this.state.instagramPost.map((item, index) => {
            // logic to display image if video is null or undefined
            let image;
            if (item.videos === null || item.videos === undefined) {
                image = <img width="450" src={item.images.standard_resolution.url} />;
            } else {
                image = <video width="450" type="video/mp4" autoPlay> <source src="item.videos.standard_resolution.url" />
                </video>;
            }
            return (
                <div key={index}>
                    {image}
                    <p>{item.caption.text} </p>
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
        return (
            <div>
                <div className="instagram">
                    {instaPostMap}
                </div>
                <div className="workshops">
                    <p>Title</p>
                    <p>Date and time</p>
                    <p>Where</p>
                    <p>About</p>
                </div>
                <div>
                    <ul className="comments-display">
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

                    <button id="add-comment">Submit</button>
                </div>
                </form>
            </div>
        );
    }
}

export { Social };