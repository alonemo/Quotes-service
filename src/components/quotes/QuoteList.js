import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = props => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);


  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {


    history.push(
      `${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`
    ); 

    // MORE READABLE WAY FOR history.push() -----
    // also u can use alternative description of the destination (if u have more complex paths)
    // so besides using a string, u can also pass an object which describes the target's destination
    // this object wants a pathname, which is the path u wanna navigate to
    /* ------------------
    history.push({
      pathname: location.pathname,
      // and then here u can also add a 'search' key
      // and that allows u to add query parameters
      // search key simply wants a string where we still construct our query parameters
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
      // but now we split our path and our query param part into 2 different properties
      // and this here is a bit more readable
    });
    ------------------------- */
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map(quote => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
