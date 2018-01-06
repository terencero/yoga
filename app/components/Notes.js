import * as React from 'react';
import { Header } from './Header';

class Notes extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="notes section">
          Notes go here or journal?
                    Routines/challenges
                </div>
        <div className="comments section">
          comments box?
                </div>
      </div>
    );
  }
}

export { Notes };