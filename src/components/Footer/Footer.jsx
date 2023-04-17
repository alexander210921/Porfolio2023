import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3></h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            
           
          
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
