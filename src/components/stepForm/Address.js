import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Address = ({ formData, setForm, navigation }) => {
  const { address, city, state, zipcode } = formData;

  return (
    <Container maxWidth='xs'>
      <h3>Address</h3>
      <TextField
        label='Address'
        name='address'
        value={address}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />

      <TextField
        label='City'
        name='city'
        value={city}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />

      <TextField
        label='State'
        name='state'
        value={state}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />

      <TextField
        label='Zipcode'
        name='zipcode'
        type='number'
        value={zipcode}
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

export default Address;
