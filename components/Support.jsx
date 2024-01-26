import React, { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className='mx-5 p-3 border'>
      <h2>{title}</h2>
      {isVisible ? (
        <>
          <button onClick={setIsVisible}>Hide</button>
          <p>{description}</p>
        </>
      ) : (
        <button onClick={setIsVisible}>Show</button>
      )}
    </div>
  );
};

const Support = () => {
  const [visibleSection, setVisibleSection] = useState('');

  return (
    <>
      <Section
        title={'About'}
        description={
          'Car Nostalgia is a leading AutoTech company streamlining and revolutionising the sale, purchase, and financing of pre-owned cars in India, Australia, Thailand, and UAE. Leveraging a Smart AI Pricing Engine, and 140 quality checks, selling and buying pre-owned vehicles is seamless and transparent with CARS24. '
        }
        isVisible={visibleSection === 'about'}
        setIsVisible={() => setVisibleSection('about')}
      />
      <Section
        title={'Our Team'}
        description={
          'Vikram Chopra - Co-founder & CEO,  Gajendra Jangid - Co-founder & CMO'
        }
        isVisible={visibleSection === 'team'}
        setIsVisible={() => setVisibleSection('team')}
      />
      <Section
        title={'Careers'}
        description={
          'Join our dynamic and fast-growing team at CARS24! If you are passionate about transforming the way that Australia buys used cars, we’d love to hear from you. Visit our LinkedIn page to learn more about us'
        }
        isVisible={visibleSection === 'career'}
        setIsVisible={() => setVisibleSection('career')}
      />
    </>
  );
};

export default Support;
