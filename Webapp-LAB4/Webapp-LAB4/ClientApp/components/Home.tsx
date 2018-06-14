import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h1>Quiz!</h1>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        
                        <p>1. Lorem ipsum dolor sit amet</p>
                        <p>2. Lorem ipsum dolor sit amet</p>
                        <p>3. Lorem ipsum dolor sit amet</p>
                        <p>4. Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <button className='btn btn-primary'> Awser nr1</button>
                    <button className='btn btn-success'> Awser nr3</button>
                </div>
                <div className='col'>
                    <button className='btn btn-secondary'> Awser nr2</button>
                    <button className='btn btn-danger'> Awser nr4</button>
                </div>
            </div>
        </div>;
    }
}
