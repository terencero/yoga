import * as React from 'react';
import { Link } from 'react-router';

class Practice extends React.Component {
    render() {
        return (
            <div className="class-schedules">
                <div className="classes">
                    <p>Title</p>
                    <p>Date and time</p>
                    <p>Where</p>
                    <p>About</p>
                </div>
                <div className="workshops">
                    <p>Title</p>
                    <p>Date and time</p>
                    <p>Where</p>
                    <p>About</p>
                </div>
            </div>
        )
    }
}

export { Practice };