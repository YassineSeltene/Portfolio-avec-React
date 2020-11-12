import React from 'react';
import Navbar from "./component/Navbar.js"
import Introsection from "./component/Inrosection.js";
import Projets from "./component/Projets";
import Contact from "./component/Contact";
import Footer from "./component/Footer"
import './App.css';



function App() {
  
  return (
    <div>
<Navbar nom = "Yassine Seltene"/>
<Introsection nom= "Yassine Seltene"/>
<section id="projects">
      <h2 class="text-important text-center">Projects</h2>
      <div class="projects-container">
<Projets alti="web" text="erggegegtrh" link="reghtrthr"/>
<Projets alti="web" text="erggegegtrh" link="reghtrthr"/>
<Projets alti="web" text="erggegegtrh" link="reghtrthr"/>
<Projets alti="web" text="erggegegtrh" link="reghtrthr"/>
<Projets alti="web" text="erggegegtrh" link="reghtrthr"/>
<Projets alti="web" text="erggegegtrh" link="reghtrthr"/>
</div>
</section>
<section id="contact-section">
      <h2 class="text-important text-center">Contact Me</h2>
<Contact/>
      </section>
      <Footer entreprise="GoMyCode"/>
</div>

  );
}


export default App;
