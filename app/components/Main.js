import * as React from 'react';
import { Header } from '';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className='main-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export { Main };