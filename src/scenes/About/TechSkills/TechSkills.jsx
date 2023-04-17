import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiAndroid,
  DiLinux,
  DiWindows,
  DiMsqlServer,
  DiNpm,
  DiCss3,
  DiHtml5,
  DiDatabase,
  DiVisualstudio,
  DiTerminal,
  
} from 'react-icons/di';
import {
  SiRedux,
  SiSocketdotio,
  SiCsharp,
  SiSap,
  SiAzuredevops,
  SiSignal,
  SiVisualstudiocode,
  SiPostman,
  SiShopify,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
        <li className={s.techIcon}>
        <SiCsharp></SiCsharp>
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiSap />
      </li>
      <li className={s.techIcon}>
        <SiAzuredevops />
      </li>
      <li className={s.techIcon}>
        <SiSignal />
      </li>
      <li className={s.techIcon}>
        <SiVisualstudiocode />
      </li>
     
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
   
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiPostman />
      </li>
      <li className={s.techIcon}>
        <SiShopify />
      </li>

      <li className={s.techIcon}>
        <SiSocketdotio />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiAndroid />
      </li>
      <li className={s.techIcon}>
        <DiLinux></DiLinux>
      </li>
      <li className={s.techIcon}>
        <DiWindows></DiWindows>
      </li>
      <li className={s.techIcon}>
        <DiMsqlServer></DiMsqlServer>
      </li>
      <li className={s.techIcon}>
        <DiNpm></DiNpm>
      </li>
      <li className={s.techIcon}>
        <DiCss3></DiCss3>
      </li>
      <li className={s.techIcon}>
        <DiHtml5></DiHtml5>
      </li>
      <li className={s.techIcon}>
        <DiDatabase></DiDatabase>
      </li>
      <li className={s.techIcon}>
        <DiVisualstudio></DiVisualstudio>
      </li>
      <li className={s.techIcon}>
        <DiTerminal></DiTerminal>
      </li>
    </ul>
  );
};

export default TechSkills;
