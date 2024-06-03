'use client';

import {useState} from 'react';
import CircleDraw from '@/app/components/CircleDraw';
import Hero from '@/app/components/Hero';
import Modal from '@/app/components/Modal';

const Home = () => {
  const [service, setService] = useState<string>('');
  const [showModal, setShowModal] = useState(false);

  const serviceClick = (service: string) => {
    setService(service);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <main>
      <CircleDraw />
      <div className="front">
        <Hero 
          handleServiceClick={(service: string) => serviceClick(service)}
        />
        <Modal 
          service={service}
          showModal={showModal}
          toggleShowModal={() => setShowModal(true)}
          closeModalClick={closeModal}
        />
      </div>
    </main>
  );
}

export default Home;
