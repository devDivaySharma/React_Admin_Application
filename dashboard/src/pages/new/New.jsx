import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h1>Add New User</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <AccountCircleIcon />
          </div>
          <div className='right'>
          <form>
            <div className='formInput'>
                <label htmlFor="userImage"><DriveFolderUploadIcon /></label>
                 Image :<input type="file" name="userImage" className='icon' id="userImage" style={{display:'none'}} />
              </div>
              <div className='formInput'>
                <label htmlFor="username">Username</label>
                <input type="text" name="usename" id="username" placeholder='John Doe' />
              </div>
              <div className='formInput'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder='John' />
              </div>
              <div className='formInput'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder='John Doe@test.com' />
              </div>
              <div className='formInput'>
                <label htmlFor="phone">Phone</label>
                <input type="tel" name="phone" id="phone" placeholder='+3-5444666' />
              </div>
              <div className='formInput'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
              </div>
              <div className='formInput'>
                <label htmlFor="confPassword">Confirm Password</label>
                <input type="password" name="confPassword" id="confPassword" />
              </div>
              <div className='formInput'>
                <label htmlFor="address">Adddress</label>
                <input type="textarea" name="address" id="address" placeholder='John Doe,sasasa' />
              </div>
              <button type='submit'>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New