import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

import Names from '../components/stepForm/Names';
import Address from '../components/stepForm/Address';
import Contact from '../components/stepForm/Contact';
import Review from '../components/stepForm/Review';
import Submit from '../components/stepForm/Submit';

const defaultData = {
  firstName: '',
  lastName: '',
  nickName: '',
};

const steps = [
  { id: 'names' },
  { id: 'address' },
  { id: 'contact' },
  { id: 'review' },
  { id: 'submit' },
];

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 2,
  });

  switch (step.id) {
    case 'names':
      return <Names />;
    case 'names':
      return <Names />;
    case 'address':
      return <Address />;
    case 'contact':
      return <Contact />;
    case 'review':
      return <Review />;
    case 'Submit':
      return <Submit />;
  }

  console.log(step);

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};

export default MultiStepForm;
