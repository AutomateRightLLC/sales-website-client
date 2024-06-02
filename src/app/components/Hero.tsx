'use client';

import Logo from '@/app/assets/img/logo.svg';
import PhoneIcon from '@/app/assets/img/phone.svg';
import EmailIcon from '@/app/assets/img/email.svg';

const Hero = (props: {
  handleServiceClick: (service: string) => void
}) => {
  return (
    <article id="hero">
      <section className="left">
        <Logo />
      </section>
      <section className="right">
        <h1>A Private Consulting & Advisory Group</h1>
        <p>
          Since 2018, Automate Right LLC has provided counsulting and advisory services to business of all sizes in the area of <button className="link" onClick={() => props.handleServiceClick('sd')}>software development</button>, <button className="link" onClick={() => props.handleServiceClick('ea')}>enterprise architecture</button>, <button className="link" onClick={() => props.handleServiceClick('ml')}>machine learning</button>, and <button className="link" onClick={() => props.handleServiceClick('qaa')}>quality assurance automation</button>. Our experienced and expert team can help your organization in achieving its digital transformational goals.
        </p>
        <div className="links">
          <a className="phone" href="tel:9548212434">
            <div className="icon">
              <PhoneIcon />
            </div>
            <span>(954) 821-2434</span>
          </a>
          <a className="email" href="mailto:sales@automateright.net">
            <div className="icon">
              <EmailIcon />
            </div>
            <span>sales@automateright.net</span>
          </a>
        </div>
      </section>
    </article>
  );
};

export default Hero;
