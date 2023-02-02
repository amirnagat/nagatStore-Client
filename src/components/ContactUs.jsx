import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hnfnslg', 'template_jvjld02', form.current, 'ZInx0dxXWWEPPpLim')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  // const cardStyles = {
  //   boxShadow: '1px 2px 17px black',
  //   margin: '2em',
  //   padding: '1em',
  //   width: '22rem'
  // };
 

  return (
    <>
    <div className='container bg-dark p-4 text-dark bg-opacity-25 rounded'>
      <h1 className='text-center '>Contact Us</h1>
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="user_name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="user_email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicCheckbox">
        <Form.Control type="text-area" name="message" placeholder='Message....' style={{ height: '100px' }}   />
      </Form.Group>
      <Button className='mb-2 w-100 bg-black border border-0' type="submit" value="Send">
        Submit
      </Button>
    </Form>
    </div>
    </>
  
  );
};

