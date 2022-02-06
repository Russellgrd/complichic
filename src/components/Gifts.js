import butterfly from '../assets/butterfly.png';
import coaster from '../assets/coaster.png';
import Giftbox from './Giftbox';

const Gifts = () => {

    return (
        <div className="gifts">
        <h1>Gifts</h1>
            <Giftbox coaster={coaster} />
        </div>
    )
};

export default Gifts;