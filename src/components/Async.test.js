import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('test suite for Async component', () => {
  test('renders posts if request succeeds', async () => {
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
