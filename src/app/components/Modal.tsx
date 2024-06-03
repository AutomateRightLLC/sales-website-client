'use client';

import {useEffect, useState} from 'react';

import CTA from './CTA';

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

  // useEffect(() => {
  //   if (props.service) {
  //     console.log(props.service);
  //     props.toggleShowModal();
  //   }
  // }, [props]);

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
        <CTA />
      </div>
    </div>
  );
}

export default Modal;
