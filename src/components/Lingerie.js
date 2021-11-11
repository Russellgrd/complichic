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
                <div className="lingerieGallery-box lingerieGallery-daisybra-section">
                    <div className="lingerieGallery-box-photos">
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo1">
                                <div className="lingeriePhoto-textbox">
                                    <p>Daisy Bra</p>
                                    <p>Lacy Undies</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo2">
                                <div className="lingeriePhoto-textbox">
                                    <p>Daisy Bra</p>
                                    <p>Lacy Undies</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo3">
                                <div className="lingeriePhoto-textbox">
                                    <p>Daisy Bra</p>
                                    <p>Lacy Undies</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo4">
                                <div className="lingeriePhoto-textbox">
                                    <p>Daisy Bra</p>
                                    <p>Lacy Undies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lingerieGallery-box-textandpricing">
                        <h3>Daisy Bra</h3>
                        <p>Wireless for comfort yet getting suppoert where needed.  Unforunately, the colours and fabric/lace will vary due to availability.  The lace undies are super comfy and seamless on the sides.  You can purchase a set or individual items of your choice</p>
                        <br/ >
                        <h3>prices per set:</h3>
                        <p>X small - £25</p>
                        <p>Small - £25</p>
                        <p>Medium - £29</p>
                        <p>Large - £33</p>
                        <br/>
                        <h3>Daisy Bra</h3>
                        <p>X small - £17</p>
                        <p>Small - £17</p>
                        <p>Medium - £19</p>
                        <p>Large - £21</p>
                        <br/>
                        <h3>Lacy Undies</h3>
                        <p>X Small - £8</p>
                        <p>Small - £8</p>
                        <p>Medium - £10</p>
                        <p>Large - £12</p>
                    </div>
                </div>


                <div className="lingerieGallery-box lingerieGallery-daisybra-section">
                    <div className="lingerieGallery-box-photos">
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo1">
                                <div className="lingeriePhoto-textbox">
                                    <p>Daisy Bra</p>
                                    <p>Lacy Undies</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo2">
                                <div className="lingeriePhoto-textbox">
                                    <p>Daisy Bra</p>
                                    <p>Lacy Undies</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo3">
                                <div className="lingeriePhoto-textbox">
                                    <p>Daisy Bra</p>
                                    <p>Lacy Undies</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo4">
                                <div className="lingeriePhoto-textbox">
                                    <p>Daisy Bra</p>
                                    <p>Lacy Undies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lingerieGallery-box-textandpricing">
                        <h3>Daisy Bra</h3>
                        <p>Wireless for comfort yet getting suppoert where needed.  Unforunately, the colours and fabric/lace will vary due to availability.  The lace undies are super comfy and seamless on the sides.  You can purchase a set or individual items of your choice</p>
                        <br/ >
                        <h3>prices per set:</h3>
                        <p>X small - £25</p>
                        <p>Small - £25</p>
                        <p>Medium - £29</p>
                        <p>Large - £33</p>
                        <br/>
                        <h3>Daisy Bra</h3>
                        <p>X small - £17</p>
                        <p>Small - £17</p>
                        <p>Medium - £19</p>
                        <p>Large - £21</p>
                        <br/>
                        <h3>Lacy Undies</h3>
                        <p>X Small - £8</p>
                        <p>Small - £8</p>
                        <p>Medium - £10</p>
                        <p>Large - £12</p>
                    </div>
                </div>

                <div className="lingerieGallery-box lingerieGallery-daisybra-section">
                    <div className="lingerieGallery-box-photos">
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo1">
                                <div className="lingeriePhoto-textbox">
                                    <p>Daisy Bra</p>
                                    <p>Lacy Undies</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo2">
                                <div className="lingeriePhoto-textbox">
                                    <p>Daisy Bra</p>
                                    <p>Lacy Undies</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo3">
                                <div className="lingeriePhoto-textbox">
                                    <p>Daisy Bra</p>
                                    <p>Lacy Undies</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo4">
                                <div className="lingeriePhoto-textbox">
                                    <p>Daisy Bra</p>
                                    <p>Lacy Undies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lingerieGallery-box-textandpricing">
                        <h3>Daisy Bra</h3>
                        <p>Wireless for comfort yet getting suppoert where needed.  Unforunately, the colours and fabric/lace will vary due to availability.  The lace undies are super comfy and seamless on the sides.  You can purchase a set or individual items of your choice</p>
                        <br/ >
                        <h3>prices per set:</h3>
                        <p>X small - £25</p>
                        <p>Small - £25</p>
                        <p>Medium - £29</p>
                        <p>Large - £33</p>
                        <br/>
                        <h3>Daisy Bra</h3>
                        <p>X small - £17</p>
                        <p>Small - £17</p>
                        <p>Medium - £19</p>
                        <p>Large - £21</p>
                        <br/>
                        <h3>Lacy Undies</h3>
                        <p>X Small - £8</p>
                        <p>Small - £8</p>
                        <p>Medium - £10</p>
                        <p>Large - £12</p>
                    </div>
                </div>
               
                
               
                
               
               

            </div>
        </div>
    )
};

export default Lingerie;