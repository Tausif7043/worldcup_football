import React from 'react'
import api from '../api'

class Players extends React.Component { 
    render() {
        return (
            <div> 
                <div className="container-fluid bg-3 text-center">
                    <h3>Home</h3><br />
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
            </div>
        )
    }
}

export default Players