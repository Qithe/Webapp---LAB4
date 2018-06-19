import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        let URL = 'https://jsonplaceholder.typicode.com/users'
        fetch(URL)
            .then((response) => {
                let myData = response.json()
                // return myData;
                this.setState({
                    data: myData
                })
            })
            .then((json) => {
                console.log('parsed json', json)
            })
            .catch((ex) => {
                console.log('parsing failed', ex)
            })
        console.log(this.state.data)
    } // end componentDidMount

    render() {
        return (
            <div className="App">
                {this.state.data}
            </div>
        );
    }
}

export default App;

/*class SignUp extends React.Component {
    state = {
        errorMessage: null,
    };

    onSubmit = () => {
        axios.get
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="SignUp">
                {this.state.errorMessage && (
                    <p>{this.state.errorMessage}</p>
                )}
                <input name="name" type="text" placeholder="Name" />
                <input name="email" type="text" placeholder="Email" />
                <input name="password" type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        )
    }
}*/

//export default class SignUp extends React.Component<RouteComponentProps<{}>, {}> {

/*
    public render() {
        return <div>
            <h2>View</h2>

            <h4>UserClass</h4>
            <hr />
            <div className='row'>
                <div className='col-md-4'>
                    <form asp-action='View'>
                        <div asp-validation-summary="ModelOnly" className='text-danger'></div>
                        <div className='Form-group'>
                            <label asp-for="Name" className='control-label'></label>
                            <input asp-for="Name" className='form-control' />
                            <span asp-validation-for="Name" className='text-danger'></span>
                        </div>
                        <div className='form-group'>
                            <label asp-for="Password" className='control-label'></label>
                            <input asp-for="Password" className='form-control' />
                            <span asp-validation-for="Password" className='text-danger'></span>
                        </div>
                        <div className='form-group'>
                            <input type="submit" value="Create" className='btn btn-default' />
                        </div>
                    </form>
                </div>
            </div>

            <div>
                <a asp-action="Index">Back to List</a>
            </div>
        </div>
    }
}
*/