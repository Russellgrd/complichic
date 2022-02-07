

const Giftbox = ({coaster}) => {

    return(
        <div className="giftbox">
            <div className="giftbox-left">   
                <h2 className="giftbox-heading">Hand crafted hedgehog coasters</h2>
                <p className="giftbox-description">
                    Pricing: Set of 4: £12 and individual coasters: £3.50 each. 
                </p>
            </div>
            <div className="giftbox-right">
                <img className="giftbox-image" src={coaster} alt="coaster" />
            </div>
        </div>
    )
}

export default Giftbox;