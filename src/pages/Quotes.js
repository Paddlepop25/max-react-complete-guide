import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Love React!' },
  { id: 'q2', author: 'Min', text: 'Learn more React!' },
  { id: 'q3', author: 'Mom', text: 'I will React!' },
];

const Quotes = () => {
  return (
    <React.Fragment>
      <QuoteList quotes={DUMMY_QUOTES} />
    </React.Fragment>
  );
};

export default Quotes;
