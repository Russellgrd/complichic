import {Link} from 'react-router-dom';

const Notfound = () => {

    return(
        <div className="notfound">
            <h3>page not found....</h3>
           <Link className="notfoundBtn" to="/">back home</Link> 
        </div>
    )
};

export default Notfound;