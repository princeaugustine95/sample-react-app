import React, { Component } from 'react';
import Server from './Server/Server';
import Panel from './Panel/Panel';

import './App.css';

class App extends Component {

state={
  name:'',
  status:'',
  servers:[{id:1,name:'Host1',status:'Offline'},{id:2,name:'Host2',status:'Online'}],
  deleteId:''
}

nameChangeHandler=(event)=>{

  const servername=event.target.value;

  this.setState({
    name:servername
  })

}

statusChangeHandler=(event)=>{

  const serverstatus=event.target.value;
  this.setState({
    status:serverstatus
  })

}

submitHandler=()=>{
  const newid=this.state.servers.length+1;
  const newserver={id:newid,name:this.state.name,status:this.state.status}

  const newservers=[...this.state.servers];
  newservers.push(newserver);

  this.setState({
    servers:newservers
  })
}

deleteServerHandler=(id)=>{

  const newservers=[...this.state.servers];

  const serverIndex=this.state.servers.findIndex((server)=>{
    return server.id===id;
  })



  newservers.splice(serverIndex,1);

   this.setState({
     servers:newservers
   })

}

  render() {
    return (
      <div className="App">
        <h1>Server Management</h1>
        <Server name={this.state.name} status={this.state.status} 
        nameChange={(event)=>this.nameChangeHandler(event)} 
        statusChange={(event)=>this.statusChangeHandler(event)}
        onSubmit={this.submitHandler}
        />
        <hr/>

        <Panel servers={this.state.servers}  clicked={this.deleteServerHandler} />
      </div>
    );
  }
}

export default App;
