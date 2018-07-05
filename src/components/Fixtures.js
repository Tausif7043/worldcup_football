import React from 'react'

class Fixture extends React.Component {
    static defaultProps = {
        items: [{text: 'Some text1'},{text: 'Some text2'},{text: 'Some text3'}]
    }
    render() {
        return (
            <div>
                <div className="container-fluid bg-3 text-center">
                    <h3>Fixtures</h3><br />
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

export default Fixture