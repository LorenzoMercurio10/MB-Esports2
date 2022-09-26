import './Contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
    return (
    <>
        <section id="contact">
            <div className="contact-block">
                <img className="contact-image-background" src="img/sfondocontact.png" alt="about-background" width="100%" ></img>
                <div className="contact-text">
                    <h1 className="contact-header">CONTACT US</h1>
                    &nbsp;
                    <p className="contact-info">INFO</p>
                    &nbsp;
                    <p className="mail">info@king___esport.com</p>    
                </div>
            </div>
        </section>
    <Form className="form-contact" action="https://formsubmit.co/lorenzo.mercurio@outlook.it" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Writer</Form.Label>
                <Form.Control type="text" name="Writer" placeholder="Write here your name" style={{width:'225%'}} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
                <Form.Control type="text" name="Email Address" placeholder="Write here your email address" style={{width:'225%'}} required/>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicText">
            <Form.Label>Message</Form.Label>
                <Form.Control type="text" name="Message" placeholder="Write here your message" style={{width:'225%'}} required/>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" required/>
        </Form.Group>
        <Button className="button-contact" variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    </>
 )
}

export default Contact;