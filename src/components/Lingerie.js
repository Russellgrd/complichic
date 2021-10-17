import butterfly from '../assets/butterfly.png';
import data from '../data/data.json';
import { useEffect, useState } from 'react';
import Image from '../components/Image';
import { Link } from 'react-router-dom';    

const Lingerie = () => {

    return (
        <div className="lingerie">
            <h1>Lingerie</h1>
            <div className="lingerie-text">
                <img className="lingerie-text-image" src={butterfly} alt="black and white butterfly" />
                <p>We are all different in size and personal choices of what we like to wear.  Comfort is key.  There is nothing more frustrating than to have underwear that doesn't fit comfortably.  It is very important to have the perfect fitting lingerie for comfort all day long.</p>
            </div>
            <p>At CompliChic we made to order your special pieces cost effective and good value for money.</p>
            <div className="lingerieGallery">
                { data && data.map((item) => (<img className="lingerGallery-img" src={['lingerie-gallery/' + item.name + ".jpeg" ]} alt="lingerie model"/>)) }
            </div>
        </div>
    )
};

export default Lingerie;