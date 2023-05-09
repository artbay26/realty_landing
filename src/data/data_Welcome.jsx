import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import imgDubai_1 from '../assets/imgDubai_1.jpg'


let dataWelcome = {
    listSocial: {
        items: [
            {faIcon: <FontAwesomeIcon icon={faFacebookF}/>},
            {faIcon: <FontAwesomeIcon icon={faTwitter}/>},
            {faIcon: <FontAwesomeIcon icon={faYoutube}/>},
            {faIcon: <FontAwesomeIcon icon={faInstagram}/>},
            {faIcon: <FontAwesomeIcon icon={faLinkedin}/>}                          
        ]
    },
    listImagesDubai: {
        items: [
            {imgDubai: imgDubai_1},
                                     
        ]
    }
}

export default dataWelcome;