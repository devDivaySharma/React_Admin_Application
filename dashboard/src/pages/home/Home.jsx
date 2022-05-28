import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import NavBar from '../../components/navbar/Navbar';
import Widget from '../../components/widgets/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/charts/Chart';

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <NavBar />
        <div className='widgets'>
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="products" />
        <Widget type="delivery" />
        </div>
        <div className='charts'>
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default Home