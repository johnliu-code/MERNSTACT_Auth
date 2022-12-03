import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
        <div className="logo">
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/Register'>
                    <FaUser /> Register
                </Link>
            </li>
            <li>
                <Link to='/logout'>
                    <FaSignOutAlt /> Logout
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header