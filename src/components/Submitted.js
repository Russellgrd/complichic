import { Link } from 'react-router-dom';

const Submitted = () => {

    return(
        <div className="submitted">
            <p className="submitted-text">Request has been submitted, thank you!  We will be intouch as soon as possible.</p>
            <Link className="submitted-button" to="/">Home</Link>
        </div>
    )
};

export default Submitted;