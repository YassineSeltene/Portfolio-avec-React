import React from 'react';
import JohnDoe from "./JohnDoe.jpg" ;


function Introsection ({nom}) {


return (
  <div>
<section id="intro-section" className="separation">
      <h2>
        Hello , i am <span className="text-important"> {nom}</span> , <br />
        and i make a horrible websites
      </h2>
      <img src= {JohnDoe} alt= {nom} />
    </section>
</div>
)
}
 export default Introsection;

