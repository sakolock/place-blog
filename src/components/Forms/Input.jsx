import React from 'react';
import { classNames } from '../../utils/index';
import { getButtonClasses } from '../Common/Button';

export const INPUTS = {
  textarea: 'textarea',
  text: 'text',
  password: 'password',
  email: 'email',
  submit: 'submit'
};

export const Input = React.forwardRef(({ inputType = INPUTS.text, reverse = false, label, ...rest }, ref) => {
  const baseClasses = 'block bg-transparent p-2 my-5 border border-blue-300 rounded-md w-full';
  const reverseClasses = 'border-white placeholder:text-white text-white';

  if (inputType === INPUTS.textarea) {
    return (
      <textarea
        className={classNames(baseClasses, reverse && reverseClasses)}
        placeholder={label}
        aria-label={label}
        {...rest}
        ref={ref}
      ></textarea>
    );
  }

  if (inputType === INPUTS.submit) {
    return (
      <input type={INPUTS.submit} value={label} className={getButtonClasses('', reverse)} ref={ref} />
    )
  }
  console.log('meh');

  return (
    <input
      type={inputType}
      placeholder={label}
      className={classNames(baseClasses, reverse && reverseClasses)}
      aria-label={label}
      {...rest}
      ref={ref}
    />
  )
})
