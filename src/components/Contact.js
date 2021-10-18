import { isPending } from 'q';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Contact = () => {

    let history = useHistory();
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [requestType, setRequestType] = useState('');
    let [requestBody, setRequestBody] = useState('');
    let [pending, setIsPending] = useState(false);

    let handleSubmit = function(e) {
        e.preventDefault();
        let newRequest = {
            name,
            email,
            requestType,
            requestBody
        };
        setIsPending(true)

        fetch('abc', {
            method:'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newRequest)
        })
        .then(() => {
            console.log('submitted')
            setIsPending(false);
            history.push('/');
        })

        console.log(newRequest);
    }

    return(
        <div className="contact">
            <h1>Contact</h1>
            <p>Get in touch with us:</p>
            <form className="contactForm"
                onSubmit={handleSubmit}
            >
                <div className="contactForm-group">
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
                <div>
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
                </div>
               { !pending &&  <button>Send Message</button> }
               { pending && <button disabled>Submitting....</button> }
            </form>
            <p>{name}</p>
            <p>{email}</p>
            <p>{requestBody}</p>
            <p>{requestType}</p>
        </div>
    )
};

export default Contact;