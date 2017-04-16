import * as React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <ul>
                    <li><Link>
                        Main
                    </Link></li>
                    <li><Link>
                        Yoga
                    </Link></li>
                    <li><Link>
                        About
                    </Link></li>
                    <li><Link>
                        Notes
                    </Link></li>
                </ul>
            </div>
        );
    }
}

export { Header };