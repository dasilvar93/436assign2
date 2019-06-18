import React from 'react';
import {connect} from 'react-redux'
import {deleteList} from "../server/Api";
import {clearList} from "../actions";


function Clear({clearList}) {
    return <button className="clearButton" onClick={() => {
        deleteList().then(clearList)
    }
    }> Clear List </button>
}


export default connect(null, {clearList})(Clear)