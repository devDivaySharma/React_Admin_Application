import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


 const TableComp = () => {
  
      const rows = [
        {
            transactionId:"adadadadadadada1",
            product:"Acer",
            customer:"John",
            date:"1 March",
            amount:890,
            status:"Approved"
        },
        {
            transactionId:"adadadadadadada2",
            product:"Acer 1",
            customer:"John 1",
            date:"11 March",
            amount:90,
            status:"Rejected"
        },
        {
            transactionId:"adadadadadadada3",
            product:"Acer 2",
            customer:"John Smith",
            date:"1 March",
            amount:890,
            status:"Approved"
        },
        {
            transactionId:"adadadadadadada4",
            product:"Acer",
            customer:"John",
            date:"1 March",
            amount:890,
            status:"Pending"
        },
        {
            transactionId:"adadadadadadada5",
            product:"Acer 34",
            customer:"John 123",
            date:"1 March",
            amount:890332,
            status:"Approved"
        }
      ];
        

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Transaction ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.transactionId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.transactionId}
              </TableCell>
              <TableCell className='tableCell'>{row.product}</TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>
                  <span className={`status ${row.status}`}></span>{row.status}
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComp