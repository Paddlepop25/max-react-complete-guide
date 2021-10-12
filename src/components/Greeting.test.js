import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

// do 3 things
/**
 * Arrange: set up test data, conditions and environment
 * Act: run the logic that should be tested, like execute function or click button
 * Assert: compare the execution results with expected results
 */

// different of FIND / GET / QUERY is if they throw errors and if they return promises or not
// FIND - will return a promise
// GET - will throw error if element not found
// QUERY - will NOT throw error if element not found

test('renders Hello World as a text', () => {
  // Arrange
  render(<Greeting />);
  screen.debug();

  // Act
  // ... nothing for this component

  // Assert (note the exact: false can be flexible when looking for Hello World)
  const helloWorldElement = screen.getByText('Hello World', {
    exact: false,
  });
  expect(helloWorldElement).toBeInTheDocument();
});
