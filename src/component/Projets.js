import React from 'react';
import devweb from './devweb.jpg';



function Projets (props) {
const {alti, text, link}=props;

return (
  

   
    <div className="project-card">
      <img src={devweb} alt={alti} />
      <p>
        {text}
      </p>
      <p>Github <a href="#">{link}</a></p>
    </div>

)
}
 export default Projets;

