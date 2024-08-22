import React, { useState } from 'react';
import Card from 'antd/es/card/Card';
import "./Contact.css"



const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      setError('Please fill in all fields');
    } else {
      // Send email to website owner using API or email service
      console.log('Sending email...');
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      setError(null);
    }
  };

  return (
<div className="contact-page" style={{display:"flex",justifyContent:"center",paddingTop:"30px"}}>
<Card  hoverable style={{ width: 300, marginBottom: 16 }}>

      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label className='lab'>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <br />
        <label className='lab'>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br /><br />
        <label className='lab'>
          Message: 
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <br /><br />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Send Message</button>
      </form>
   
</Card>

</div>
  );
 
};


export default Contact;