import React from 'react';

const Help = props => {
    const onback = ()=>{
        props.history.push('/')
    }
    return (
        <div className="card  ">
        <div className="card-image waves-effect waves-block waves-light">
        </div>
        <div className="card-content">
          <span className="card-title activator  red-text text darken-4">Frozen Add Button        <i className='small material-icons' placeholder='add new'>add</i>
<i className="material-icons right">more_vert</i></span>
          <p>Refresh the home page after logging in .This will solve the problem.</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">More<i className="material-icons right">close</i></span>
          <p>suggestions accepted</p>
        </div>
          
            <div className='k'>
            <button    className="waves-effect waves-light btn-small right red" onClick={onback} >Back <i className="material-icons" >arrow_back</i></button>
            </div>
            </div> 
    )
}

export default Help;
