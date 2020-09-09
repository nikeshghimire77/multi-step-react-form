import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Names = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, nickName } = formData;
  console.log(firstName);
  return (
    <Container maxWidth='xs'>
      <h3>Names</h3>
      <TextField
        label='First Name'
        name='firstName'
        value={firstName}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />
      <TextField
        label='Last Name'
        name='lastName'
        value={lastName}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />
      <TextField
        label='Nick Name'
        name='nickName'
        value={nickName}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />
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

export default Names;
