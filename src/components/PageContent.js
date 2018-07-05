import React from 'react';
import Teams from './Teams';
import Fixtures from './Fixtures';
import Groups from './Groups';
import Players from './Players';

const pageLoadComponent = () => {
    const pathName = window.location.pathname
    console.log('pathName', pathName)
}

class PageContent extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-3 text-center">
                    <h3>Some of my Work</h3><br />
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Some text..</p>
                        </div>
                        <div className="col-sm-3">
                            <p>Some text..</p>
                        </div>
                        <div className="col-sm-3">
                            <p>Some text..</p>
                        </div>
                    </div>
                </div><br />
                <Fixtures />
            </div>
        )
    }
}

export default PageContent