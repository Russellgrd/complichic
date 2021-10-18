import butterfly from '../assets/butterfly.png';

const Gifts = () => {

    return (
        <div className="gifts">
        <h1>Gifts</h1>
            <div className="giftsBox">
                <h3 className="giftsBox-subHeading">Glass Engraving</h3>
                <div className="giftsBox-text">
                    <img className="giftsBox-text-img" src={butterfly} alt="butterly" />
                    <p className="giftsBox-text-p">
                        Find the hidden beauty in your old garments or bring your favourite outfit back to life again.  Why do we have to get rid of the old when there is a hidden promise hiding somewhere in the old to reveal the new and also the loyalty of life long joy.
                    </p>
                </div>
            </div>
            <div className="giftsBox">
                <h3 className="giftsBox-subHeading">Glass Etching</h3>
                <div className="giftsBox-text">
                    <img className="giftsBox-text-img" src={butterfly} alt="butterly" />
                    <p className="giftsBox-text-p">
                        Find the hidden beauty in your old garments or bring your favourite outfit back to life again.  Why do we have to get rid of the old when there is a hidden promise hiding somewhere in the old to reveal the new and also the loyalty of life long joy.
                    </p>
                </div>
            </div>
            <div className="giftsBox">
                <h3 className="giftsBox-subHeading">Wood Burning</h3>
                <div className="giftsBox-text">
                    <img className="giftsBox-text-img" src={butterfly} alt="butterly" />
                    <p className="giftsBox-text-p">
                        Find the hidden beauty in your old garments or bring your favourite outfit back to life again.  Why do we have to get rid of the old when there is a hidden promise hiding somewhere in the old to reveal the new and also the loyalty of life long joy.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Gifts;