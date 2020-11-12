import React from 'react';
import devweb from './devweb.jpg';



function Contact () {

return (
  
  <div>

  <form>
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Message</label>
        <textarea cols="40" row="5"></textarea>
        <button>Send</button>
      </form>
</div>
)
}
 export default Contact;

