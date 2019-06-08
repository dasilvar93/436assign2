import React from 'react';
import { connect } from 'react-redux';
import { ADD } from '../actions';


class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        dispatch(ADD(this.state.value))
        event.preventDefault();
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

const mapStatesToProps = (state) => {
    return {value: state.value}
}

export default connect(mapStatesToProps)(Form);
//export default Form;