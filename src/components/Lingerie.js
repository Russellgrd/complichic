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
                        <p>Wireless for comfort yet getting support where needed.  Unfortunately, the colours and fabric/lace will vary due to availability.  The lace undies are super comfy and seamless on the sides.  You can purchase a set or individual items of your choice</p>
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

                <div className="lingerieGallery-box lingerieGallery-mayabra-section">
                    <div className="lingerieGallery-box-photos">
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo5">
                                <div className="lingeriePhoto-textbox">
                                    <p>Maya Bra</p>
                                    <p>Ivy Panty</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo6">
                                <div className="lingeriePhoto-textbox">
                                    <p>Maya Bra</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo7">
                                <div className="lingeriePhoto-textbox">
                                    <p>Ivy Panty</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lingerieGallery-box-textandpricing">
                        <h3>Maya Bra</h3>
                        <p>With the underwire for support and style for comfort.  You have a choice if padded or non-padded, totally your personal preference.</p>
                        <p>Only available in size 36A at the moment</p>
                        <br/ >
                        <p>prices per set £40</p>
                        <p>Bra only £32</p>
                        <p>Ivy Panty: between £8 - £12 depending on lace and fabric used and availability.</p>
                        
                        <br/>
                        
                    </div>
                </div>

                <div className="lingerieGallery-box lingerieGallery-blackbeauty-section">
                    <div className="lingerieGallery-box-photos">
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo8">
                                <div className="lingeriePhoto-textbox">
                                    <p>Black Beauty Bra</p>
                                    <p>Franky Panty</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo9">
                                <div className="lingeriePhoto-textbox">
                                    <p>Black Beauty Bra</p>
                                    <p>Franky Panty</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo10">
                                <div className="lingeriePhoto-textbox">
                                    <p>Black Beauty Bra</p>
                                    <p>Franky Panty</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lingerieGallery-box-textandpricing">
                        <h3>Black Beauty Bra</h3>
                        <p>Padded with underwire and power bar for extra support and comfort.</p>
                        <p>It comes in sizes 28B to 40DD</p>
                        <p>Prices per set: from 28B - £35 to 40DD - £58 per set.</p>
                        <p>Black Beauty Bra only: from 28B - £27 to 40DD - £42 </p>
                        <br/ >
                        <h3>Franky Panties:</h3>
                        <p>XX small - £8</p>
                        <p>Small - £8</p>
                        <p>Medium - £10</p>
                        <p>Large - £12</p>
                        <p>X Large - £14</p>
                        <p>XX Large - £16</p>
                    </div>
                </div>
               
                <div className="lingerieGallery-box lingerieGallery-madalynne-section">
                    <div className="lingerieGallery-box-photos">
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo11">
                                <div className="lingeriePhoto-textbox">
                                    <p>Madalynne Bra</p>
                                    <p>Esme Panty</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo12">
                                <div className="lingeriePhoto-textbox">
                                    <p>Madalynne Bra</p>
                                    <p>Esme Panty</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo13">
                                <div className="lingeriePhoto-textbox">
                                    <p>Esme Panty</p>
                                </div>
                            </div>
                        </div>
                        <div className="lingerieCard">
                            <div className="lingeriePhoto photo14">
                                <div className="lingeriePhoto-textbox">
                                    <p>Esme Panty</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lingerieGallery-box-textandpricing">
                        <h3>Madalynne Bra</h3>
                        <p>Non-Padded with the underwire for softness and comfort fitting</p>
                        <p>Comes in sizes: 32A to 42dd - £17 to £38</p>
                        <br/ >
                        <p>prices per set: £25 to £52</p>
                        <p>Classic Panties:</p>
                        <p>X small - £8</p>
                        <p>Small - £8</p>
                        <p>Medium - £10</p>
                        <p>Large - £12</p>
                        <p>X-Large - £14</p>
                        <br/>
                        <h3>Esme Panties:</h3>
                        <p>X small - £9</p>
                        <p>Small - £9</p>
                        <p>Medium - £11</p>
                        <p>Large - £13</p>
                        <p>X-Large - £15</p>
                    </div>
                </div>
               
                
               
               

            </div>
        </div>
    )
};

export default Lingerie;