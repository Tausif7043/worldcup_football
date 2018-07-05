import React from 'react';
import PageContent from './PageContent';
import Carousel from './Carousel';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Carousel />
                <PageContent />
            </div>
        );
    }
}

export default Navigation;

