import s from './Education.module.css';

function Education() {
  return (
    <>
      <p className={s.university}>IT School GoIT</p>
      <p className={s.education}>Certificate Course in Full Stack Developer</p>
      <span className={s.time}>
        March 2020 - April 2021
        <span className={s.divider}> |</span> Ukraine
      </span>
      <p className={s.university}>
        National Academy of Internal Affairs of Ukraine
      </p>
      <p className={s.education}>jurisprudence</p>
      <span className={s.time}>
        Septermber 2010 - May 2015
        <span className={s.divider}> |</span> Ukraine
      </span>
    </>
  );
}

export default Education;
