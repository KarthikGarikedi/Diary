import React from 'react';

const About = () => {
    return (
        <div className='container'>
            <h3>About this App</h3>
            <p className="my-1">
                This  is a full stack react app for managing your daily activities.
                <br></br>
                Consider it to be a note maker or a short diary.
                   
            </p>
            <p className="dark-bg "></p>
                <h4><strong className='dark-bg p'>version:</strong>1.00.01</h4>
            
            
       
        <div className="row">
            <div className="col s12">
        <h3 className='yellow-text text-darken-2'>Contact:</h3>
        <div className="main">
            <a href="https://www.instagram.com/starlord2k20"><i className="fa fa-instagram fa-2x" ></i> </a>&nbsp;
            
            <a href="https://github.com/karthikgarikedi"><i className="fa fa-github fa-2x" ></i></a>

        </div>
        </div>
        </div>
        </div>
    )
}

export default About
