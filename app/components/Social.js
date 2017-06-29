import * as React from 'react';
import * as axios from 'axios';

class Social extends React.Component {

    componentWillMount() {
        this.initializeState();
    }

    componentDidMount() {
        this.getInstagramPosts();

    }

    initializeState() {
        this.setState({
            instagramPost: []
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
        let instaPostMap = this.state.instagramPost.map((item, index) => {
            // logic to display image if video is null or undefined
            let image;
                    if (item.videos=== null || item.videos === undefined) {
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

            </div>
        );
    }
}

export { Social };