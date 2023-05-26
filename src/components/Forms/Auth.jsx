import { useState } from 'react';
import Login from "./Login";
import SignUp from "./SignUp";
import Button from '../Common/Button';

export default function Auth() {
  const [showSignUp, setShowSignUp] = useState(false)

  const toggleShowSignUp = () => setShowSignUp(!showSignUp);

  return (
    <div className="md:w-6/12 mx-auto">
      {showSignUp ? (
        <SignUp />
      ) : (
        <Login />
      )}
      <Button reverse onClick={toggleShowSignUp}>{showSignUp ? 'Already have an account?' : 'Not yet registered?'}</Button>
    </div>
  )
}
