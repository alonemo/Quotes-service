import { Fragment, useEffect } from 'react';
import { Route, useParams, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';


import { useRouteMatch } from 'react-router-dom';
import LoadingSpinner from '../components/UI/LoadingSpinner';
// it's kind of similar to useLocation but it has more information about the currently loaded Route
// Not just about URL but about some internally managed data React Router is aware of

const QuoteDetail = () => {
  // fetching from firebase
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const match = useRouteMatch();

  const params = useParams();


  const { quoteId } = params;
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]); // and that's why I'm using object destructuring here
  // because in other way I would need to add whole params object here

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      {/* <Route path={`/quotes/${params.quoteId}/comments`}> --- instead of this 
     use this with match.object (path includes our placeholder -- /:quoteId): */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
