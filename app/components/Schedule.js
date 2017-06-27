import * as React from 'react';
import { Link } from 'react-router';

class Schedule extends React.Component {
    render() {
        return (
            <div className="class-schedules">
                <div className="classes">
                    <h1>Classes</h1>
                    <div className="la-fitness">
                        <h2>LA Fitness</h2>
                        <p>Vinyasa Yoga</p>
                        <p>Thursdays at 7pm</p>
                        <p>LA Fitness (add link to map or embed?)</p>
                        <p>Description of class</p>
                    </div>
                    <div className="northshore">
                        <h2>Northshore Yoga</h2>
                        <p></p>
                        <p>Mondays at 7pm</p>
                        <p>Evanston NorthShore Yoga Studio</p>
                        
                    </div>
                </div>
                <div className="workshops">
                    <h1>Workshops</h1>
                    <br />
                    <h3>Graceful Vinyasa Transitions</h3>
                    <br />
                    <p>When: Date and time</p>
                    <p>Where: Evanston NorthShore Yoga Studio</p>
                    <br />
                    <p><p>Learn how to flow and float with stability and fluidity in Surya Namaskara and other Vinyasa transitions. This class will begin with Vinyasa sequences designed to warm up an open up the body while focusing on the core. You will learn how to:</p>
                    <br />
                        <ul>
                            <li>Utilize energy in the arms and legs, and align your body correctly to cultivate the graceful transitions.</li>
                            <li>Use breath and bandha (internal lock/control of energy) to achieve stability and effortlessly move in and out of vinyasas.</li>
                        </ul>
                        <br />
                        <p>Some of the key transitions we will practice on are:</p>
                        <br />
                        <ul>
                            <li>Jumping back/press up to chaturanga</li>
                            <li>Jumping/floating forward to uttanasana</li>
                            <li>Bakasana: Jumping back to chaturanga and jumping in from downward dog</li>
                            <li>Marichyasana: A pick up and jump back</li>
                        </ul>
                        <br />
                        <p>It will be a well-rounded practice with plenty of instructions, demonstrations and opportunity to work and focus on each flow. Designed for all, but some experience in Vinyasa yoga is required. There will be modifications and use of props to suit all levels.</p></p>
                </div>
            </div>
        )
    }
}

export { Schedule };