import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar }  from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export const Featured = () => {
  return (
    <div className='featured'>
        <div className='top'>
            <h1 className='title'>Total Revenue</h1>
            <MoreVertIcon fontSize='small' />
        </div>
        <div className='bottom'>
            <div className='featuredChart'>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={3}/>
            </div>
            <p className='title'>Total Sales Today</p>
            <p className='amount'>$40</p>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='summary'>
                <div className='item'>
                    <div className='itemTitle'>Target</div>
                    <div className='itemResult positive'>
                        <KeyboardArrowUp fontSize='small'/>
                        <div className='resultAmount'>$12.34</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='itemTitle'>Target</div>
                    <div className='itemResult negative'>
                        <KeyboardArrowUp fontSize='small'/>
                        <div className='resultAmount'>$12.34</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='itemTitle'>Target</div>
                    <div className='itemResult positive'>
                        <KeyboardArrowDown fontSize='small'/>
                        <div className='resultAmount'>$12.34</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='itemTitle'>Target</div>
                    <div className='itemResult negative'>
                        <KeyboardArrowUp fontSize='small'/>
                        <div className='resultAmount'>$12.34</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured