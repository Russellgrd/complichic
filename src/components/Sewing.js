import butterfly from '../assets/butterfly.png';

const Sewing = () => {

    return (
        <div className="sewing">
            <h1>Sewing</h1>
            <div className="sewingBox">
                <h3 className="sewingBox-subHeading">Alterations</h3>
                <div className="sewingBox-text">
                    <img className="sewingBox-text-img" src={butterfly} alt="butterly" />
                    <p className="sewingBox-text-p">
                        Find the hidden beauty in your old garments or bring your favourite outfit back to life again.  Why do we have to get rid of the old when there is a hidden promise hiding somewhere in the old to reveal the new and also the loyalty of life long joy.
                    </p>
                </div>
            </div>
            <div className="sewingBox">
            <h3 className="sewingBox-subHeading">New</h3>
                <div className="sewingBox-text">
                    <img className="sewingBox-text-img" src={butterfly} alt="butterly" />
                    <p className="sewingBox-text-p">
                        Made to order items that are cost effective and good quality.
                    </p>
                </div>
            </div>
            <div className="sewingBox">
            <h3 className="sewingBox-subHeading">Curtains</h3>
                <div className="sewingBox-text">
                <img className="sewingBox-text-img" src={butterfly} alt="butterly" />
                    <p className="sewingBox-text-p">
                        Dress your home with unique curtains of your choice.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Sewing;