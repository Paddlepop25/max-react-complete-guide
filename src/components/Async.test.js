import { render, screen } from '@testing-library/react';
import Async from './Async';

/**
 * Note: in testing we don't want to actually send real requests to servers
 * because it may insert real data or create unnecessary network traffic or avoid if server is down.
 * So we mock the sending request
 */

describe('test suite for Async component', () => {
  test('renders posts if request succeeds', async () => {
    // mock fetch send request in Async.js and get back array with result
    window.fetch = jest.fn();

    // window.fetch should mock the fetch to get the resolved value that we use in Async.js to render out li
    // json because response.json(). it is a function that returns a promise (hence async) with values of id + title
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'first post' }],
    });

    render(<Async />);

    // https://www.w3.org/TR/html-aria/#docconformance
    const listItemElements = await screen.findAllByRole('listitem', {}, {}); // see from his attached document
    expect(listItemElements).not.toHaveLength(0);
  });
});

/* use *All* because there are more than 1 rendered list.
   if use queryBy.. getBy.. it will fail because this only looks for 1
   since this is asynchronous, we use findAllBy.. because it returns a promise.
   findAllBy.. takes 2 other arguments, the 2nd one can be {exact: false} and 3rd one is duration of timeout.
   by default if we leave it empty its 1sec so this test will keep trying till get a result
   can add async await to wait for result 
*/
