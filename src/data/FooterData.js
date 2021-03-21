import indexiomLogo from '../images/logo.png';
import fbIcon from '../images/facebook.png';
import twIcon from '../images/twitter.png';
import lkIcon from "../images/linkedin.png";

export const FooterData = {
    logo : indexiomLogo,
    alt: 'indexiom',
    label:'Nous suivre',
    copyright: "<p>© Indexiom - Designed by Indexiom</p>",
    socialsIcon:[
        {
           path:'/',
           icon_ : fbIcon,
           alt:'facebook'
        },
        {
           path:'/',
           icon_ : twIcon,
           alt:'twitter'
        },
        {
           path:'/',
           icon_ : lkIcon,
           alt:'linkedin'
        }
    ]
}