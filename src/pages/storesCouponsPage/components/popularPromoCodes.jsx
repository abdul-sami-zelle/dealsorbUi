import React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function PopularPromoCodes({ topCoupons ,storeName}) {
  // Filter out only the coupons from the data array
  const coupons = topCoupons.filter(item => item.type === 'coupon');

  return (
    <div className='popularPromoCode'>
      <TableContainer sx={{ padding: '15px' }} component={Paper}>
        <div className="couponMainHeading">
          Popular {storeName} Promo Codes & Sales
        </div>
        <div style={{ height: '15px' }}></div>
        <Table aria-label="simple table">
          <TableHead sx={{ border: 'none' }}>
            <TableRow>
              <TableCell sx={{ color: '#434343', fontWeight: '750', fontSize: '14px' }} align="center">Discount</TableCell>
              <TableCell sx={{ color: '#434343', fontWeight: '750', fontSize: '14px' }} align="center">Coupon Code</TableCell>
              <TableCell sx={{ color: '#434343', fontWeight: '750', fontSize: '14px' }} align="center">Description</TableCell>
              <TableCell sx={{ color: '#434343', fontWeight: '750', fontSize: '14px' }} align="center">Expires</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coupons.map((coupon) => (
              <TableRow key={coupon._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{coupon.offer}</TableCell>
                <TableCell align="center">{coupon.couponCode}</TableCell>
                <TableCell align="center">
                  <a href={coupon.trackingUrl} target="_blank" rel="noopener noreferrer">
                    {coupon.title}
                  </a>
                </TableCell>
                <TableCell align="center">{coupon.expiresType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default PopularPromoCodes;
