import React from 'react';
import API from '../api';

export default class Teams extends React.Component {
    state = {
        countries: []
    }
    componentDidMount() {
        API.get('?action=get_countries&APIkey=39eb2b62204d86c5b16da9acc8906058f1404c6af24a08d444e65ee38997d02c')
            .then(res => {
                this.setState({ countries: res.data });
            })
    }
    render() {
        return (
            <div>
                <div className="container-fluid bg-3 text-center">
                    <h3>Teams</h3><br />
                    <div className="row">
                        {this.state.countries.map((country, index) => <div className="col-sm-3" key={'team' + index}><p>{country.country_name}</p>
                        </div>)}
                    </div>
                </div><br />
            </div>
        )
    }
}