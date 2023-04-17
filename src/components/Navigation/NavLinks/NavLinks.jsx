import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} end>
          <AiOutlineHome />
          INICIO
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUT}>
          <AiOutlineUser />
          SOBRE MÍ
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PROJECTS}>
          <AiOutlineFundProjectionScreen />
          PROYECTOS
        </NavLink>
      </li>


    </ul>
  );
};

export default NavLinks;
