import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

import Names from '../components/stepForm/Names';
import Address from '../components/stepForm/Address';
import Contact from '../components/stepForm/Contact';
import { Review } from '../components/stepForm/Review';
import Submit from '../components/stepForm/Submit';

const defaultData = {
  firstName: '',
  lastName: '',
  nickName: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  phone: '',
  email: '',
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
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case 'names':
      return <Names {...props} />;
    case 'address':
      return <Address {...props} />;
    case 'contact':
      return <Contact {...props} />;
    case 'review':
      return <Review {...props} />;
    case 'submit':
      return <Submit {...props} />;
  }

  console.log(step);

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};

export default MultiStepForm;
