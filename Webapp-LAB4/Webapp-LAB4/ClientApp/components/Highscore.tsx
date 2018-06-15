import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
//import { ApplicationState }  from '../store';
//import * as CounterStore from '../store/Counter';
import * as WeatherForecasts from '../store/WeatherForecasts';

export default class Highscore extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className='contaner-fluid'>
            <div className='row'>
                <div className='col-xs-5'>
                    <h1>Highscore</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-sx-5'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Highscore</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Sven</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>22</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            

            
        </div>;
    }
}