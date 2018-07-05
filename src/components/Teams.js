import React from 'react'

class Teams extends React.Component {
    static defaultProps = {
        items: [{text: 'Some text1'},{text: 'Some text2'},{text: 'Some text3'}]
    }
    render() {
        return (
            <div>
                <div class="container-fluid bg-3 text-center">
                    <h3>Some of my Work</h3><br />
                    <div class="row">
                        <div class="col-sm-3">
                            <p>Some text..</p>
                        </div>
                        <div class="col-sm-3">
                            <p>Some text..</p>
                        </div>
                        <div class="col-sm-3">
                            <p>Some text..</p>
                        </div>
                    </div>
                </div><br />
            </div>
        )
    }
}

export default Teams