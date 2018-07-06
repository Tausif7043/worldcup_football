import React from 'react';
import Home from './Home';
import Teams from './Teams';
import Fixtures from './Fixtures';
import Groups from './Groups';
import Players from './Players';

const PageLoadComponent = () => {
    return (
        window.location.pathname === '/teams' ? <Teams /> 
        : (window.location.pathname === '/fixtures' ? <Fixtures /> 
        : (window.location.pathname === '/groups' ? <Groups /> 
        : (window.location.pathname === '/players' ? <Players /> 
        : <Home />)))
    )
}

class PageContent extends React.Component {
    componentDidMount () {}
    render() {
        return (
            <div>
                <PageLoadComponent />
            </div>
        )
    }
}

export default PageContent