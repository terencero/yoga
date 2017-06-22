import * as React from 'react';
import { Link } from 'react-router';

class Practice extends React.Component {
    render() {
        return (
            <div className="class-schedules">
                <div className="classes">
                    <div className="la-fitness">
                        <p>Vinyasa Yoga</p>
                        <p>Thursdays at 7pm</p>
                        <p>LA Fitness (add link to map or embed?)</p>
                        <p>Description of class</p>
                    </div>
                    <div className="northshore">
                        <p>Vinyasa Flow</p>
                        <p>Mondays at 7pm</p>
                        <p>Evanston NorthShore Yoga Studio</p>
                        <p>Description of class</p>
                    </div>
                </div>
                <div className="workshops">
                    <p>Vinyasa Flow I</p>
                    <p>Date and time</p>
                    <p>Evanston NorthShore Yoga Studio</p>
                    <p>About</p>
                </div>
            </div>
        )
    }
}

export { Practice };