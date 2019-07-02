import React from 'react';
import {connect} from 'react-redux';

function List(props) {
    const items = props.list; 
    const listItems = items.map((item, index) =>
        <li key={index}>{item}</li>
    );
    return <ul className = "list">{listItems}</ul>;
}

const mapStateToProps = (state) => {
    const {list} = state;
    return {list};
}


export default connect(mapStateToProps)(List);