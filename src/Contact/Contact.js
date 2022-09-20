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
    <Form className="form-contact">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                Scrivi qui la mail al quale vorrai essere ricontattato
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Messaggio:</Form.Label>
                <Form.Control type="password" placeholder="Componi il tuo messaggio" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="button-contact" variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    </>
 )
}

export default Contact;