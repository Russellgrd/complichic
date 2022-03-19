

const Giftbox = ({coasterArray}) => {



    return(
        <div className="giftbox">
            <div className="giftbox-left">   
                <h2 className="giftbox-heading">Hand crafted hedgehog coasters</h2>
                <p className="giftbox-description">
                    Pricing: 2.50 per coaster. 
                </p>
            </div>
            <div className="giftbox-right">
                {coasterArray.map((image) => (
                    <img className="giftbox-image" src={image[0]} alt="coaster" key={image[1]} />
                ))}
            </div>
        </div>
    )
}

export default Giftbox;

 