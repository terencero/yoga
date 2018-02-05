import * as React from 'react';
import * as axios from 'axios';

class Yoga extends React.Component {

  componentWillMount() {
    this.initializeState();
  }

  componentDidMount() {
    this.getInstagramPosts();
  }

  initializeState() {
    this.setState({
      instagramPost: [],
    });
  }

  getInstagramPosts() {
    axios.get('/yogaInstagram').then((response) => {
      console.log('instagram res', response.data);
      this.setState({
        instagramPost: response.data
      });
    });
  }
  render() {
    const instaPostMap = this.state.instagramPost.map((item) => {
      // logic to display image if video is null or undefined
      let image;
      image = <a href={item.link}><img height="293" width="293" src={item.images.standard_resolution.url} /></a>;
      return (
        <div className="column">
          <figure className="image is-square column">
            {image}
          </figure>
        </div>
      )
    });

    return (
      <div>
        <div className="home-page">
          <div className="main-row banner">
            <h1 className="title">Yoga With Jiwoo</h1>
          </div>
          <div className="main-row bio">
            <p>Yoga is a practice of compassionate discipline, being present &amp; awakening energy through conscious breathing, meditation as well as performing asanas.</p>
          </div>
          <div className="main-row schedule">
            class:
          title:
          time:
          </div>
          <div className="main-row social">
            <div className="columns">
              {instaPostMap[0]}
              {instaPostMap[1]}
              {instaPostMap[2]}
            </div>
            <div className="columns">
              {instaPostMap[3]}
              {instaPostMap[4]}
              {instaPostMap[5]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Yoga };