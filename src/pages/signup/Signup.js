import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// styles
import styles from './Signup.module.css';

const Signup = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, error, isPending } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password, displayName);
  };

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        <span>username:</span>
        <input
          type='text'
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>email:</span>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className='btn'>sign up</button>}
      {isPending && <button className="btn" disabled>loading...</button>}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Signup;
