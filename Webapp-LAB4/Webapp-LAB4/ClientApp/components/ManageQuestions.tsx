import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as WeatherForecastsState from '../store/WeatherForecasts';

export default class ManageQuestons extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Frågan</th>
                        <th scope="col">Rätt svar</th>
                        <th scope="col">Fel svar 1</th>
                        <th scope="col">Fel svar 2</th>
                        <th scope="col">Fel svar 3</th>
                        <th scope="col">Modifiera</th>
                        <th scope="col">Ta bort</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Hur många ben har en häst?</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td><button className='btn btn-sm btn-disabled' disabled>Modifiera</button></td>
                        <td><button className='btn btn-sm btn-disabled' disabled>Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Hur många ben har en häst?</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td><button className='btn btn-sm btn-disabled' disabled>Modifiera</button></td>
                        <td><button className='btn btn-sm btn-disabled' disabled>Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Hur många ben har en häst?</td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>1</td>
                        <td><button className='btn btn-sm btn-disabled' disabled>Modifiera</button></td>
                        <td><button className='btn btn-sm btn-disabled' disabled>Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>;

    }    
}
