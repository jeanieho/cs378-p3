import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ imageName, subheading1, subheading2 }) => {
    return (
        <div className='container'>
            <div class="header">
                <img class="logo" src={require(`../images/${imageName}`)} alt="logo"></img>
            </div>
            <div class="subheader">
                <div class="subheading">{subheading1} </div>
                <h1 style={ {color: '#808080'}}>{subheading2}</h1>
            </div>
        </div>
    );
};


export default Header;
