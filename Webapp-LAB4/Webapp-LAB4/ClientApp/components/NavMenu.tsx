import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>Webapp_LAB4</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink exact to={ '/' } activeClassName='active'>
                                <span className='glyphicon glyphicon-question-sign'></span> Quiz
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/highscore' } activeClassName='active'>
                                <span className='glyphicon glyphicon-header'></span> Highscore
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/manageQuestions' } activeClassName='active'>
                                <span className='glyphicon glyphicon-edit'></span> Administrera frågor
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/createuser'} activeClassName='active'>
                                <span className='glyphicon glyphicon-user'></span> Registrera/Logga in
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
