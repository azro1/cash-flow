import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

// logo
import logo from '../piggybank.svg'

// styles
import styles from './Navbar.module.css'

const Navbar = () => {
const { logout } = useLogout()
const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
           <img src={logo} alt="piggy bank" />
           <h3>CashFlow</h3>
        </li>
        {!user && (
          <div className={styles.links}>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>      
          </div>
        )}

        {user && (
          <div className={styles['user-links']} >
            <li>hello, {user.displayName}</li>
            <li><button onClick={logout} >Logout</button></li>
          </div>
        )}

      </ul>
    </nav>
  );
};

export default Navbar
