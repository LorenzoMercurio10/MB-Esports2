import './Contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Nav } from 'react-bootstrap';

function Contact() {
    return (
    <>
        <section id="contact">
            <div className="contact-background">
                <div className="row justify-content-center contact-block">
                    <div className="col-xs-12 col-md-6 contact-text">
                        <h1 className="contact-header">CONTACT US</h1>
                        &nbsp;
                        <p className="contact-info">INFO</p>
                        <p className="mail">info@mbesport.com</p>  
                    <div className="col-xs-12 col-md-6 d-flex contact-socials">
                        <Nav.Link href="https://www.instagram.com/mb__esport/" target="_blank" className="instagram">
                            <img src="img/ig.png" alt="instagram" height="25" width="27"></img>
                        </Nav.Link>
                        <Nav.Link href="https://twitter.com/mb__esport" target="_blank" className="twitter">
                            <img src="img/twitter.png" alt="twitter" height="25" width="25"></img>
                        </Nav.Link>
                        <Nav.Link href="https://www.twitch.tv/cerbero_podcast" target="_blank" className="twitch">
                            <img src="img/twitch.png" alt="twitch" height="25" width="25"></img>
                        </Nav.Link>
                        <Nav.Link href="https://www.tiktok.com/@alessialanza" target="_blank" className="tiktok">
                            <img src="img/tiktok.png" alt="tiktok" height="25" width="25"></img>
                        </Nav.Link>
                    </div> 
                    <div className="col-xs-12 col-md-6 contact-policy">
                        <a href="https://docs.google.com/document/d/1zuHQ4WkFsiWA1raMRjK3BHBl99JdrFnmKAYUEeDID7U/edit?usp=sharing0">Privacy Policy</a>
                        &nbsp;
                        <a href="https://docs.google.com/document/d/1KMh72mMUBTtNDBoRmrFYzwKwz8BkBi_GQS5IpmBw9pc/edit?usp=sharing">Cookie Policy</a>
                    </div> 
                    </div> 
                     
                    <Form className="col-xs-12 col-md-6 form-contact" action="https://formsubmit.co/info@mbesport.com" method="POST">
                        <input type="hidden" name="_captcha" value="false" />
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Writer</Form.Label>
                                <Form.Control type="text" name="Writer" placeholder="Write here your name" style={{width:'auto'}} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" name="Email Address" placeholder="Write here your email address" style={{width:'auto'}} required/>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicText">
                            <Form.Label>Message</Form.Label>
                                <Form.Control type="text" name="Message" placeholder="Write here your message" style={{width:'auto'}} required/>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out if you have read the privacy and cookie policy" style={{width:'auto'}} required/>
                        </Form.Group>
                        <Button className="button-contact" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    </>
 )
}

export default Contact;