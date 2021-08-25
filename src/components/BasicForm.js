import useInput from '../custom-hooks/use-input';

const inputValidation = (input) => input.trim() !== '';
const emailValidation = (input) => input.trim().includes('@') && input !== '';

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(inputValidation);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(inputValidation);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailValidation);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(enteredFirstName, enteredLastName, enteredEmail);

    if (!formIsValid) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={onFormSubmitHandler} autoComplete='off'>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            autoComplete='off'
            type='text'
            id='name'
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
            <p className='error-text'>Name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            autoComplete='off'
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className='error-text'>Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          autoComplete='off'
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>This is not a valid email address</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
