import React from 'react';

function List(props) {
    const items = props.list; 
    const listItems = items.map((item, index) =>
    <li key={index}>{item}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const mapStateToProps = (state) =>{
    return {list: state.list};
  }

export default List;
//export default connect(mapStateToProps)(List);