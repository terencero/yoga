import * as React from 'react';
import * as axios from 'axios';

class Yoga extends React.Component {

    componentWillMount() {
        axios.get('/yogaInstagram').then((response) => {
            console.log('instagram res', response);
        });
        }
    render() {
        return (
            <div>
                <div className="instagram">
                    instagram posts
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

export { Yoga };