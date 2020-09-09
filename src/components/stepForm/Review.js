import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zipcode,
    phone,
    email,
  } = formData;

  return (
    <Container maxWidth='sm'>
      <h1>Review</h1>
      <RenderAccordion
        summary='Names'
        go={go}
        details={[
          { 'First Name': firstName },
          { 'Last Name': lastName },
          { 'Nick Name': nickName },
        ]}
      />

      <RenderAccordion
        summary='Address'
        go={go}
        details={[
          { Address: address },
          { City: city },
          { State: state },
          { 'Zip Code': zipcode },
        ]}
      />

      <RenderAccordion
        go={go}
        summary='Contact'
        details={[{ Phone: phone }, { Email: email }]}
      />

      <Button
        size='medium'
        fullWidth
        color='primary'
        variant='contained'
        style={{ marginTop: '1rem' }}
        onClick={() => go('submit')}
      >
        SUBMIT
      </Button>
    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </AccordionSummary>
    <AccordionDetail>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[objKey];
          return (
            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
          );
        })}
        <IconButton onClick={() => go(`${summary.toLowerCase()}`)}>
          {<EditIcon />}
        </IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
);
