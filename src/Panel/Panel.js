import React from 'react';
import './Panel.css';

const Panel=(props)=>{

       const  statusColor=()=>{
            if(props.status==="Online")
            {
            return 'Online';
            }
            if(props.status==="Offline")
            {
                return 'Offline'
            }
            if(props.status==="Unknown")
            {
                return 'Unknown'
            }
           
        }
 
    

        return (
        <div  className="container">
            <div className="panelcont" >
                <div className="panelhead">
                    {props.name}
                </div>
    
                <div className="panelcontent">
                       <p> The server status is <span className={statusColor()}>{props.status}</span> </p>
                </div>
    
            </div>
            <div id="trash" onClick={props.clicked}>
            <i className="fa fa-trash-o"></i>
            </div>
            <br/>
            <div>
                <button type="button" onClick={props.setOnline}>Set to Online</button>
                <button type="button" onClick={props.setOffline}>Set to Offline</button>
                <button type="button" onClick={props.setUnknown}>Set to Unknown</button>
            </div>

        </div>


        )

    
        
    

  

}

export default Panel