import { isPending } from 'q';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import isValidEmail from 'pragmatic-email-regex';

const Contact = () => {

    let history = useHistory();
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [requestType, setRequestType] = useState('Sewing');
    let [requestBody, setRequestBody] = useState('');
    let [pending, setIsPending] = useState(false);
    let [formFeedback,setFormFeedback] = useState(false);

    let handleSubmit = function(e) {
        e.preventDefault();
       
        if(isValidEmail(email) && requestBody.length > 10) {
            let newRequest = {
                name,
                email,
                requestType,
                requestBody
            };
            setIsPending(true);
            fetch('https://complichic.herokuapp.com/', {
                method:'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(newRequest)
            })
            .then(() => {
                console.log('submitted')
                setIsPending(false);
                history.push('/submitted');
            })
            console.log(newRequest);
        }

        else {
            setFormFeedback(true);
        }
    }

    return(
        <div className="contact">
            <h1>Contact</h1>
            <p className="contact-text-p">Get in touch with us:</p>
            <form className="contactForm"
                onSubmit={handleSubmit}
            >
                <div className="contactForm-group">
                    <div className="contactForm-group1">
                        <div>
                            <label>Name</label>
                            <input
                            type="text" 
                            required
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            />
                        </div>                          
                        <div>
                            <label>Email</label>
                            <input 
                            type="text"  
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            />
                        </div>
                    </div>
                </div>
                    <label>How can we help?</label>
                    <select
                        value={requestType}
                        onChange={(e) => {
                            setRequestType(e.target.value);
                        }}
                    >   
                        <option value="Sewing">Sewing</option>
                        <option value="Etching">Etching</option>
                        <option value="Gifts">Gifts</option>
                        <option value="Lingerie">Lingerie</option>
                    </select>
                    <label>Message:</label>
                    <textarea 
                    cols="30" 
                    rows="10"
                    required
                    value={requestBody}
                    onChange={(e) => {
                            setRequestBody(e.target.value);
                        }}
                    >
                    </textarea>
                    { formFeedback && <p>please ensure you have completed all fields and use a valid email address</p>}
               { !pending &&  <button>Send Message</button> }
               { pending && <button disabled>Submitting....</button> }
            </form>
        </div>
    )
};

export default Contact;