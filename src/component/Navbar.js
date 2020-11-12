import React from 'react';



function Navbar ({nom}) {


return (
  <div>
<header className="separation">
      <h1>{nom}</h1>
      <ul className="navmenu">
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </header>
</div>
)
}
 export default Navbar;

