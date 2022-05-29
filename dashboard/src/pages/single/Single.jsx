import React from 'react'
import Charts from '../../components/charts/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TableComp from '../../components/table/Table'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img src="https://picsum.photos/200/300" alt=""  className='itemImg' />
              <div className='details'>
                <h1 className='itemTitle'>Jane Doe</h1>
                <div className='detailItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>janedoe@gmail.com</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+91 - 51616161616</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>dadadadadadadavs adadadad</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>India</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
          <Charts />
        </div>
        </div>
        <div className='bottom'>
          <h1 className='title'>Last Transaction</h1>
          <TableComp />
        </div>
      </div>
    </div>
  )
}

export default Single