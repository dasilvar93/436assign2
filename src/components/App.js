import React from 'react';
import '../App.css';
import List from './List'
import Form from './Form'

const list = ["cookies and cream", "vanilla"];

function App() {
  return (
    <div>
      <Form/>
      <List list={list}/>
    </div>
    
  );
}



export default App;
//export default connect()
