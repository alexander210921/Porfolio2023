import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
      <p>
            Este portafolio es una muestra de mi experiencia y habilidades como desarrollador Full Stack en el área de desarrollo web. Con habilidades sólidas tanto en el desarrollo Frontend como Backend, he trabajado en una amplia variedad de proyectos que van desde pequeñas aplicaciones web hasta complejos sistemas empresariales. <br /> <br />

En el Frontend, he trabajado con habilidad en React, React Native, ASP.NET para crear interfaces de usuario altamente atractivas y funcionales que proporcionan una experiencia de usuario excepcional. Desde el diseño de páginas web responsivas hasta la integración de aplicaciones de terceros, he demostrado mi capacidad para diseñar soluciones efectivas para cualquier desafío que se me presente.

<br /> <br /> En el Backend, he trabajado con habilidad en C# para crear sistemas escalables y seguros que manejan grandes volúmenes de datos y procesamiento de información. Desde el desarrollo de bases de datos hasta la integración de API, he demostrado habilidades técnicas sólidas y una comprensión completa del ciclo de vida del desarrollo de software.

<br /> <br />Pero no sólo tengo habilidades técnicas sólidas, también soy un comunicador efectivo y un miembro del equipo altamente colaborativo. He trabajado con diseñadores gráficos, otros desarrolladores Full Stack y miembros del equipo de proyectos para asegurarme de que todos los proyectos se completen en tiempo y forma, y para garantizar la satisfacción del cliente.

<br /> <br />A través de este portafolio, podrás ver algunos ejemplos de mi trabajo y ver cómo he aplicado mis habilidades para lograr resultados impresionantes en proyectos desafiantes. Ya sea que esté trabajando en proyectos personales o en equipo, siempre estoy enfocado en encontrar soluciones creativas y efectivas que lleven a los mejores resultados.
            </p>

      </p>

    

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
