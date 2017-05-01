import * as React from 'react';
import * as axios from 'axios';

class Practice extends React.Component {

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
            return ( 
             <div key={index}>   
            <img width='450' src={item.images.standard_resolution.url} /> 
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

export { Practice };