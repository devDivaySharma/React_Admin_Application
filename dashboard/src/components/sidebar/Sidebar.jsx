import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PieChartIcon from '@mui/icons-material/PieChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ComputerIcon from '@mui/icons-material/Computer';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{textDecoration:"none"}} >
            <span className='logo'>logo</span>
        </Link>
        </div><hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
          <Link to="/" style={{textDecoration:"none"}} >
            <span><DashboardIcon className='icon' />Dashboard</span>
            </Link>
            </li>
          <p className='title'>LISTS</p>
          <li>
          <Link to="/users" style={{textDecoration:"none"}} >
            <span><PeopleIcon className='icon' />Users</span>
            </Link>
            </li>
          <li>
          <Link to="/products" style={{textDecoration:"none"}} >
            <span><AddBusinessIcon className='icon' />Products</span>
            </Link>
            </li>
          <li>
          <Link to="/orders" style={{textDecoration:"none"}} >
            <span><CreditCardIcon className='icon' />Orders</span>
            </Link>
            </li>
          <li><span><LocalShippingIcon className='icon' />Delivery</span></li>
          <p className='title'>USEFUL</p>
          <li><span><PieChartIcon className='icon' />Stats</span></li>
          <li><span><NotificationsIcon className='icon' />Notifications</span></li>
          <p className='title'>SERVICE</p>
          <li><span><ComputerIcon className='icon' />System Health</span></li>
          <li><span><WysiwygIcon className='icon' />Logs</span></li>
          <li><span><SettingsApplicationsIcon className='icon' />Settings</span></li>
          <p className='title'>USER</p>
          <li><span><PersonIcon className='icon' />Profile</span></li>
          <li><span><LogoutIcon className='icon' />Logout</span></li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  )
}

export default Sidebar