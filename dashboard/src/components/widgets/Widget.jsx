import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShopingCart from '@mui/icons-material/ShoppingCart';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Widget = ({type}) => {

  let data;

  switch(type){
    case "user" : 
      data={
        title : "USERS",
        isMoney:false,
        link:"See all Users",
        icon: ( <PersonIcon className="icon" style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.25)"}} /> )
     };
     break;
     case "order" : 
      data={
        title : "ORDERS",
        isMoney:false,
        link:"See all Orders",
        icon: ( <ShopingCart className="icon" style={{color:"glodenrod",backgroundColor:"rgba(255,0,0,0.25)"}} /> )
     };
     break;
     case "products" : 
      data={
        title : "PRODUCTS",
        isMoney:false,
        link:"See all Products",
        icon: ( <AddBusinessIcon className="icon" style={{color:"green",backgroundColor:"rgba(0,128,0,0.25)"}} /> )
     };
     break;
     case "delivery" : 
      data={
        title : "DELIVERY",
        isMoney:false,
        link:"See all Delivery",
        icon: ( <LocalShippingIcon className="icon" style={{color:"purple",backgroundColor:"rgba(128,0,0,0.25)"}} /> )
     };
     break;
     default:
        break;
  }

  return (
    <div className="widget">
      <div className='left'>
        <span className='title'>{data?.title}</span>
        <span className='counter'>{data?.isMoney}</span>
        <span className='link'>{data?.link}</span>
        </div>
      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          20 %
          </div>
          {data?.icon}
        </div>
    </div>
  )
}

export default Widget