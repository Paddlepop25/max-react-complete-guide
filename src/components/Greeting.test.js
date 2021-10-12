import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('Greeting component test suite', () => {
  test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />);
    // screen.debug();

    // Act
    // ... nothing for this component

    // Assert (note the exact: false can be flexible when looking for Hello World)
    const helloWorldElement = screen.getByText('Hello 🌏 World', {
      exact: false,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  // {exact: false is not strict}
  test('text before button is clicked', () => {
    render(<Greeting />);
    const textBeforeClicked = screen.getByText('good to see ya', {
      exact: false,
    });
    expect(textBeforeClicked).toBeInTheDocument();
  });

  // Linda
  test('text change after button is clicked', () => {
    const { queryByTestId, queryByText, debug } = render(<Greeting />);
    const changeTextButton = queryByTestId('greeting__change-text-button');

    expect(changeTextButton).toHaveTextContent('Change Text');
    expect(queryByText("It's good to see ya!")).toBeInTheDocument();

    fireEvent.click(changeTextButton);

    expect(queryByText("It's good to see ya!")).not.toBeInTheDocument();
    expect(queryByText('Changed!')).toBeInTheDocument();
  });

  // Max
  test('text change to "Changed!" after button is clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });

  // Max
  test('text does not render "It\'s good to see ya!" after button is clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // getByText would throw error if not found so change to queryByText
    // queryByText would return null if not found
    const initialElement = screen.queryByText('good to see ya!', {
      exact: false,
    });
    // expect(initialElement).not.toBeInTheDocument(); // also works
    expect(initialElement).toBeNull();
  });
});
