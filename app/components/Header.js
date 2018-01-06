import * as React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <nav className='header navbar is-fixed-top'>
        <ul>
          <li><Link to='about' activeClassName='active'>About</Link></li>
          <li><Link to='notes' activeClassName='active'>Notes from the Mat</Link></li>
          <li><Link to='social' activeClassName='active'>Social</Link></li>
          <li><Link to='yoga' activeClassName='active'>Yoga</Link></li>
          <li><Link to='schedule' activeClassName='active'>Schedule</Link></li>
        </ul>
      </nav>
    );
  }
}

export { Header };