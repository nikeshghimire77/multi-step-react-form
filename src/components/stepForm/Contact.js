import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;
  return (
    <Container maxWidth='xs'>
      <h3>Contact</h3>
      <TextField
        label='Phone'
        name='phone'
        type='number'
        onChange={setForm}
        value={phone}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />

      <TextField
        label='Email'
        name='email'
        type='email'
        value={email}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />

      <Button
        size='medium'
        fullWidth
        color='secondary'
        variant='contained'
        style={{ marginTop: '1rem' }}
        onClick={() => navigation.previous()}
      >
        Back
      </Button>
      <Button
        size='medium'
        fullWidth
        color='primary'
        variant='contained'
        style={{ marginTop: '1rem' }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};

export default Contact;
