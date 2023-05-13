import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import imgDubai_1 from '../assets/imgDubai_1.png';
import imgDubai_2 from '../assets/AIN-dubai.png';
import imgDubai_3 from '../assets/cover.png';

let dataWelcome = {
    listSocial: {
        items: [
            {id: 1, faIcon: <FontAwesomeIcon icon={faFacebookF}/>},
            {id: 2, faIcon: <FontAwesomeIcon icon={faTwitter}/>},
            {id: 3, faIcon: <FontAwesomeIcon icon={faYoutube}/>},
            {id: 4, faIcon: <FontAwesomeIcon icon={faInstagram}/>},
            {id: 5, faIcon: <FontAwesomeIcon icon={faLinkedin}/>}                          
        ]
    },
    listImagesDubai: {
        items: [
            {id: 1, img: imgDubai_1, name: 'Dubai1'},
            {id: 2, img: imgDubai_2, name: 'Dubai2'},
            {id: 3, img: imgDubai_3, name: 'Dubai3'},                       
        ]
    }
}

export default dataWelcome;