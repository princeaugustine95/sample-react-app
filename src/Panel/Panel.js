import React from 'react';
import './Panel.css';

const Panel=(props)=>{


 
    let panels=props.servers.map((server,index)=>{

        return (
        <div key={index} className="container">
            <div className="panelcont" >
                <div className="panelhead">
                    {server.name}
                </div>
    
                <div className="panelcontent">
                       <p> The server status is <span className={server.status==='Offline'?'Offline':'Online'}>{server.status}</span> </p>
                </div>
    
            </div>
            <div id="trash" onClick={props.clicked(server.id)}>
            <i className="fa fa-trash-o"></i>
            </div>

        </div>


        )

    })
        return panels
    

  

}

export default Panel