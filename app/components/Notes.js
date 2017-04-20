import * as React from 'react';
import { Header } from './Header';

class Notes extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    Notes go here or journal?
                </div>
            </div>
        );
    }
}