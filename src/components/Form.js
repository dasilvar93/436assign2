import React from 'react';
import { connect } from 'react-redux';
import { addToList } from '../actions';
import {postList} from "../server/Api";
import {replaceList} from "../actions";

class Form extends React.Component {

    constructor(props){
        super(props);
        //this.setState({value: ""});
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();

        postList({text: this.state.value})
            .then((response) => {
                this.props.replaceList(response.data)
            })

        //this.props.addToList(this.state.value);
        this.setState({value: ""})
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Message:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="submit" />
            </form>
        )
    }
}

// const mapDispatchToProps = dispatch => ({
//     items: value => dispatch(addToList(value))
// // })
// const mapStatesToProps = (state) => {
//     return {value: state.value}
// }

export default connect(null, {replaceList})(Form);
//export default Form;