import React from 'react';
import '../App.css';
import List from './List'
import Form from './Form'
import {connect} from 'react-redux';
import {getList} from "../server/Api";
import {replaceList} from '../actions';
import Clear from './Clear';


class App extends React.Component{

    componentDidMount() {
        getList().then(response => {
            console.log(response);
            this.props.replaceList(response.data)
        })
    }

    render(){
        return (
            <div>
                <Form/>
                <Clear/>
                <List  />
            </div>
        );

    }
}


//export default App;
export default connect(null, {replaceList})(App)
