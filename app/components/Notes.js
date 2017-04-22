import * as React from 'react';
import { Header } from './Header';

class Notes extends React.Component {
    render() {
        return (
            <div>
                <div className="notes">
                    Notes go here or journal?
                    Routines/challenges
                </div>
                <div className="comments">
                    comments box?
                </div>
            </div>
        );
    }
}

export { Notes };