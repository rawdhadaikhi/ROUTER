import React from 'react';

const Header = ({text}) =>{
    return(
        <div className="header">
          
          <h2 className ="movie-title">{text}</h2>
        
        </div>
    )
}
export default Header;