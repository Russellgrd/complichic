import butterfly from '../assets/butterfly.png';
import coaster1 from '../assets/coaster1.jpeg';
import coaster2 from '../assets/coaster2.jpeg';
import coaster3 from '../assets/coaster3.jpeg';
import coaster4 from '../assets/coaster4.jpeg';
import coaster5 from '../assets/coaster5.jpeg';
import coaster6 from '../assets/coaster6.jpeg';
import coaster7 from '../assets/coaster7.jpeg';
import coaster8 from '../assets/coaster8.jpeg';
import coaster9 from '../assets/coaster9.jpeg';
import coaster10 from '../assets/coaster10.jpeg';
import coaster11 from '../assets/coaster11.jpeg';
import coaster12 from '../assets/coaster12.jpeg';
import coaster13 from '../assets/coaster13.jpeg';
import coaster14 from '../assets/coaster14.jpeg';
import coaster15 from '../assets/coaster15.jpeg';
import coaster16 from '../assets/coaster16.jpeg';
import coaster17 from '../assets/coaster17.jpeg';
import Giftbox from './Giftbox';

const Gifts = () => {

    return (
        <div className="gifts">
        <h1>Gifts</h1>
            <Giftbox coasterArray={[
                [coaster1,1],
                [coaster2,2],
                [coaster3,3],
                [coaster4,4],
                [coaster5,5],
                [coaster6,6],
                [coaster7,7],
                [coaster8,8],
                [coaster9,9],
                [coaster10,10],
                [coaster11,11],
                [coaster12,12],
                [coaster13,13],
                [coaster14,14],
                [coaster15,15],
                [coaster16,16],
                [coaster17,17]
                ]} />
        </div>
    )
};

export default Gifts;