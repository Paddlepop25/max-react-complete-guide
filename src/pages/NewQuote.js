import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteForm) => {
    console.log(quoteForm);

    history.push('/');
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
