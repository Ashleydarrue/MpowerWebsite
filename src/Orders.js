import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, email,  phone, registerDate, status) {
  return { id,  name, email, phone, registerDate, status };
}

const rows = [
  createData(1,  'Paul McCartney', 'paul@gmail.com', '12345678', '11/15/2019', '2-Day-Pass'),
  createData(2,  'Tom Scholz','tom@gmail.com', '12345678', '12/10/98', 'Vistor'),
  createData(0,  'Elvis Presley', 'elvis@gmail.com','12345678', '01/20/20', 'Member'),
  createData(4,  'Bruce Springsteen','bruce@gmail.com', '12345678', '06/07/08', 'Member'),
  createData(3,  'Michael Jackson', 'micheal@gmail.com','12345678', '01/01/10', 'Member'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Register Date</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.registerDate}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}