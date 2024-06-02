'use client';

import {useEffect, useState} from 'react';

import EnterpriseArchitecture from './services/EnterpriseArchitecture';
import MachineLearning from './services/MachineLearning';
import QAAutomation from './services/QAAutomation';
import SoftwareDevelopment from './services/SoftwareDevelopment';

const Modal = (props: {
  service: string
  showModal: boolean
  toggleShowModal: () => void
  closeModalClick: () => void
}) => {
  // const [showModal, setShowModal] = useState(false);

  // const closeModal = () => {
  //   setShowModal(false);
  // }

  useEffect(() => {
    if (props.service) {
      console.log(props.service);
      props.toggleShowModal();
    }
  }, [props]);

  return (
    <div className={props.showModal ? 'modal show' : 'modal'}>
      <button className="close" onClick={props.closeModalClick}></button>
      <div className="modalCopyWrap">
        <div className="modalCopy">
          {props.service === 'ea' && (
            <EnterpriseArchitecture />
          )}
          {props.service === 'ml' && (
            <MachineLearning />
          )}
          {props.service === 'qaa' && (
            <QAAutomation />
          )}
          {props.service === 'sd' && (
            <SoftwareDevelopment />
          )}
        </div>
        <div className="cta">
          <div className="image">
            <div className="imagePlaceholder"></div>
          </div>
          <div className="copy">
            <h3>Shift Left to Automate Right.</h3>
            <p>Schedule a consultation and discover how we can accelerate your success.</p>
            <a className="btn" href="mailto:sales@automateright.net">Schedule Discovery</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
