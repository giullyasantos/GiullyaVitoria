import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contact.css';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y811s8f', 'template_3jas508', form.current, {
        publicKey: 'F4sUiUSf4AUcVE2zl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className='contactForm'> 
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder='Ex. Giullya Santos' />
        <label>Email</label>
        <input type="email" name="user_email" placeholder='Ex. giullyassantos12@gmail.com'/>
        <label>Message</label>
        <textarea name="message" placeholder='Ex. Hey! We should work together!'/>
        <button type="submit" value="" onClick={handleClick} className="icon-toggle">
            <div className={`icon-wrapper ${clicked ? 'rotate-check' : 'rotate-airplane'}`}>
                <div className='airplane'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                </div>
                <div className='checkBox'>
                    <svg viewBox="0 0 512 512" height="2vw" xmlns="http://www.w3.org/2000/svg">
                        <path fill='currentColor' d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"></path>
                    </svg>
                </div>
            </div>
            <span>{clicked ? '' : 'Send'}</span>
        </button>
        </form>
    </div>
  );
};