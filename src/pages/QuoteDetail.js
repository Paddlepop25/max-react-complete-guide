import React from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Love React!' },
  { id: 'q2', author: 'Min', text: 'Learn more React!' },
  { id: 'q3', author: 'Mom', text: 'I will React!' },
];

const QuoteDetail = () => {
  const routeMatch = useRouteMatch();
  // console.log(routeMatch);
  /**
    path: "/quotes/:quoteId"
    url: "/quotes/q3
 */
  const params = useParams();
  // console.log(params); //{quoteId: 'the quote id'}

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found! 💀</p>;
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${routeMatch.path}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${routeMatch.url}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;

// /${match.path} == /quotes/${params.quoteId}
