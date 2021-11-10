import butterfly from '../assets/butterfly.png';
import data from '../data/data.json';
import { useEffect, useState } from 'react';
import Image from '../components/Image';
import { Link } from 'react-router-dom';    
import LingerieCard from './LingerieCard';

const Lingerie = () => {

    return (
        <div className="lingerie">
            <h1>Lingerie</h1>
            <div className="lingerie-text">
                <img className="lingerie-text-image" src={butterfly} alt="black and white butterfly" />
                <p>We are all different in size and personal choices of what we like to wear.  Comfort is key.  There is nothing more frustrating than to have underwear that doesn't fit comfortably.  It is very important to have the perfect fitting lingerie for comfort all day long.</p>
            </div>
            <br />
            <p>At CompliChic we are made to order, so your special pieces are cost effective and good value for money.</p>
            <div className="lingerieGallery">
                <div className="lingerieCard">
                    <div className="lingeriePhoto">
                        <div className="lingeriePhoto-textbox">
                            <p>Daisy Bra</p>
                            <p>Lacy Undies</p>
                        </div>
                    </div>
                    <div className="lingerieCard-pricebox">
                        <p>price per set</p>
                        <p>small £00, med £00 large</p>
                        <p>price per bra</p>
                        <p>small £00 med £00 large £00</p> 
                        <p>price per undies</p>
                        <p>small £00 med £00 large £00</p>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Lingerie;