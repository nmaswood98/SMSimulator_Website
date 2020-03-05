import React from 'react';
import './App.scss';
import SessionInitiation from './Components/sessioninitiation';
import EventInjection from './Components/eventinjection';
import { Link } from 'react-router-dom';
import Buy from './Components/buy';
import Sell from './Components/sell';
import SIState from './Components/sessioninitiation';
import Home from './HPage/home';
import {connect} from 'react-redux';

interface IAppComponentProps { 
    history: any
}
interface IAppComponentState { }

class App extends React.Component<IAppComponentProps, IAppComponentState> {
    constructor(props: any) {
        super(props);
    }

    callTestAPI() {
        fetch("https://thawing-shore-19302.herokuapp.com/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiTestResponse: res }))
            .catch(err => err);
    }

    createSession() {
        fetch("https://thawing-shore-19302.herokuapp.com/createSession")
            .then(res => res.text())
            .then(res => alert(res))
            .catch(err => err);
    }

    render() {
        return (
            <div className="App">
                { /* <SessionInitiation onSubmit={(formData: SIState)=>{
           this.createSession();
         }} />*/}
                <div>
                    <ul>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </div>
                <Home history={this.props.history}/>
            </div>
        );
    }
}

export default App;