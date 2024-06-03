import Logo from '@/app/assets/img/logo.svg';

const CTA = () => {
  return (
    <div className="cta">
      <div className="image">
        {/* <div className="imagePlaceholder"></div> */}
        <Logo />
      </div>
      <div className="copy">
        <h3>Shift Left, Automate Right.</h3>
        <p> Contact us today to discover how our tailored automation strategies can transform your business, reduce costs, and give you a competitive edge.</p>
        <a className="btn" href="mailto:sales@automateright.net">Start Discovery</a>
      </div>
    </div>
  )
}

export default CTA;
