import * as React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <ul>
                    <li><Link to='main' activeClassName='active'>
                        Main
                    </Link></li>
                    <li><Link to='yoga' activeClassName='active'>
                        Yoga
                    </Link></li>
                    <li><Link to='about' activeClassName='active'>
                        About
                    </Link></li>
                    <li><Link to='notes' activeClassName='active'>
                        Notes
                    </Link></li>
                </ul>
            </div>
        );
    }
}

export { Header };