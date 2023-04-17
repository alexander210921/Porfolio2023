import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaHackerrank,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          {/* <h1 className={s.title}>
            Sobre <span className={s.purple}> Mi </span>{' '}
            
          </h1> */}

          <div className={s.description}>
            {/* <p>
            Este portafolio es una muestra de mi experiencia y habilidades como desarrollador Full Stack en el área de desarrollo web. Con habilidades sólidas tanto en el desarrollo Frontend como Backend, he trabajado en una amplia variedad de proyectos que van desde pequeñas aplicaciones web hasta complejos sistemas empresariales. <br /> <br />

En el Frontend, he trabajado con habilidad en React, React Native, ASP.NET para crear interfaces de usuario altamente atractivas y funcionales que proporcionan una experiencia de usuario excepcional. Desde el diseño de páginas web responsivas hasta la integración de aplicaciones de terceros, he demostrado mi capacidad para diseñar soluciones efectivas para cualquier desafío que se me presente.

<br /> <br /> En el Backend, he trabajado con habilidad en C# para crear sistemas escalables y seguros que manejan grandes volúmenes de datos y procesamiento de información. Desde el desarrollo de bases de datos hasta la integración de API, he demostrado habilidades técnicas sólidas y una comprensión completa del ciclo de vida del desarrollo de software.

<br /> <br />Pero no sólo tengo habilidades técnicas sólidas, también soy un comunicador efectivo y un miembro del equipo altamente colaborativo. He trabajado con diseñadores gráficos, otros desarrolladores Full Stack y miembros del equipo de proyectos para asegurarme de que todos los proyectos se completen en tiempo y forma, y para garantizar la satisfacción del cliente.

<br /> <br />A través de este portafolio, podrás ver algunos ejemplos de mi trabajo y ver cómo he aplicado mis habilidades para lograr resultados impresionantes en proyectos desafiantes. Ya sea que esté trabajando en proyectos personales o en equipo, siempre estoy enfocado en encontrar soluciones creativas y efectivas que lleven a los mejores resultados.
            </p> */}

            {/* <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                  TypeScript, React, React Native,
                </b>
              </i>
              <br />
              and other relevant technologies. I have experience in
              integrating various <br />
              third-party libraries, API integration, push
              notifications and analytics.
            </p> */}

            {/* <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Technologies and Products</b>
              </i>
            </p> */}
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>Contáctame</h1>
        {/* <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p> */}
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/alexander210921"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li> 
          <li className={s.socialLink}>
            <a
              href="https://www.hackerrank.com/alexandersimali1"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaHackerrank />
            </a>
          </li>                  
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/franklin-alexander-simalij-yancoba-33a890200/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
