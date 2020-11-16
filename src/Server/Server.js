import React from 'react';
import './Server.css'

const Server=(props)=>{
    return (
            <div className="Server">
                <label>Name</label>
                <input type="text" value={props.name}
                 onChange={props.nameChange}/>
                <br/>
                <label>Status</label>
                <input type="text" value={props.status} onChange={props.statusChange}/>
                <br/>
                <button type="submit" onClick={props.onSubmit}>Submit</button>
            </div>
    )
}

export default Server;