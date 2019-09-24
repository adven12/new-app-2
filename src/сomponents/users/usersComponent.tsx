import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export interface UsersProps {
  doUsers: () => object;
  isLog: boolean,
  error: string,
  dataUsers: any,
  data: any
}


const UsersComponent: React.FC = (props: any) => {
  const classes: any = useStyles();
  console.log();
  
  return (
    <div className="usersComponent">
      {props.data.role === "admin" ?
        (props.dataUsers ? (
          <div>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Id</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Role</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.dataUsers.map((text: any, index: any) => (
                    <TableRow key={index}>
                      <TableCell align="left">{text._id}</TableCell>
                      <TableCell align="right">{text.name}</TableCell>
                      <TableCell align="right">{text.email}</TableCell>
                      <TableCell align="right">{text.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
        ) : null

        ) : (<Redirect to="/login" />)
      }
    </div>
  );
}
export default UsersComponent;

