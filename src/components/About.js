import butterfly from '../assets/butterfly.png';

const About = () => {
    
    return(
        <div className="about">
            <h1 className="about-header">About</h1>  
            <p className="about-p"><span>CompliChic</span> is all about elegant affordability</p>
            <div className="about-text">
                <img className="about-text-img" src={butterfly} alt="black and white butterfly" />
                <p className="about-text-p"> <span>CompliChic</span> focusses on adding finess to your wardrobe, house & special bespoke gifts.  The inspiration for CompliChic started in 2016 with a heartfilled passion to bring beauty into your home without the cost.  It was a very slow start, but with love and passion, I kept going with desire to share it with the world out there.</p>
            </div>
            <div className="about-text2">
                <h3>Future</h3>
                <p>We are also working on more pages with a wide selection of gifts and clothing.  Watch this space.</p>
                
                <br/>
                <p>Thank you for your patience and understanding.</p>
                <h3 className="aboutOwner">Theresa</h3>
                <h4 className="aboutTitle">Owner</h4>
                <p>theresa@complichic.co.uk</p>
            </div>
        </div>
    )
};

export default About;