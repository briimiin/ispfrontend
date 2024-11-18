// InstallationProcess.js
import React from 'react';
import './InstallationProcess.css'; // Import custom styles

const InstallationProcess = () => {
  const steps = [
    {
      title: 'Step 1: Order Confirmation',
      description: 'Once you choose your plan and place your order, you will receive a confirmation email.',
    },
    {
      title: 'Step 2: Schedule Installation',
      description: 'Our team will contact you to schedule an installation date that works for you.',
    },
    {
      title: 'Step 3: Prepare for Installation',
      description: 'Ensure that you have access to the installation area and provide necessary information to the technician.',
    },
    {
      title: 'Step 4: Installation Day',
      description: 'A technician will arrive on the scheduled day to install your equipment and set up your service.',
    },
    {
      title: 'Step 5: Service Activation',
      description: 'After installation, your service will be activated, and you can start enjoying your internet connection.',
    },
    {
      title: 'Step 6: Support and Follow-Up',
      description: 'If you have any questions or issues, our support team is here to help you anytime.',
    },
  ];

  return (
    <div className="installation-process">
      <h2>Installation Process</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InstallationProcess;
