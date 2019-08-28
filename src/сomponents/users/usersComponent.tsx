import React from "react";
import { UsersState, UsersRequest } from "../../redux/users/types";
// import { dousers } from "./redux/users/actions";
// import HeaderContainer from "../../сontainers/headerContainer"
// import { error } from "../../redux/common/reducer";
// import { Error } from "../common/errorComponent"
import { RootState } from "../../redux/rootReducer";

import { makeStyles, lighten} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { any } from "prop-types";
import MaterialTable from 'material-table';


// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '80%',
//     marginTop: theme.spacing(3),
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 650,
//   },
// }));
// function desc(a:any, b:any, orderBy:any) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function createData(id:any, name:any, email:any, password:any, role:any) {
//   return { id, name, email, password, role };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// function stableSort(array:any[], cmp:any) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = cmp(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map(el => el[0]);
// }


// function getSorting(order:any, orderBy:any) {
//   return order === 'desc' ? (a:any, b:any) => desc(a, b, orderBy) : (a:any, b:any) => -desc(a, b, orderBy);
// }

// function EnhancedTableHead(props:any) {
//   const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//   // const createSortHandler:any = property => event => {
//   //   onRequestSort(event, property);
//   // };
//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ 'aria-label': 'select all desserts' }}
//           />
//         </TableCell>
//         {props.dataUsers.map((text:any, index:any) => (
//           <TableCell
//             key={index.id}
//             align={text.numeric ? 'right' : 'left'}
//             padding={text.disablePadding ? 'none' : 'default'}
//             sortDirection={orderBy === text.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === text.id}
//               direction={order}
//               // onClick={createSortHandler(text.id)}
//             >
//               {text.label}
//               {orderBy === text.id ? (
//                 <span className={classes.visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </span>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

export interface UsersProps {
  doUsers: () => object;
  isLog: boolean,
  error: string,
  dataUsers: any,
}


const UsersComponent: React.FC = (props:any) => {
  
 
  // const state: any = {
  //   // isLog: false,
  //   error: "",
  //   dataUsers: "",
  // };
  // const classes:any = useStyles();
  // const { doUsers } = props;
  
  if(props.dataUsers.length <= 0){
   const { doUsers } = props;
  doUsers();
  }
  // for class component 
  // function componentDidMount(){ 
  //   const { doUsers } = props;
  //   doUsers();
  // }

  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });





    console.log(props.dataUsers);
    console.log(props.isLog);
    console.log(props.dataUsers[0]);
    return (
      <div className="usersComponent">
        <div className="usersComponent-list">
        <h4 className="usersComponent-list-h4"></h4>
          {props.isLog && props.dataUsers.length > 0 ? 
          (
            // props.dataUsers.map((text:any, index:any) => 
            // <div className="usersComponent-list-user ">
            //   <p className="usersComponent-list-user-id" key={index.id}>Id: {text.id}</p>
            //   <p className="usersComponent-list-user-name" key={index.name}>Name: {text.name}</p>
            //   <p className="usersComponent-list-user-email" key={index.email}>E-mail: {text.email}</p>
            //   <p className="usersComponent-list-user-password" key={index.password}>Password: {text.password}</p>
            //   <p className="usersComponent-list-user-role" key={index.role}>Role: {text.role}</p>
            //   <br  />
            //   </div>
               <MaterialTable
            title="Editable Example"
            columns={state.columns}
            data={state.data}
            editable={{
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    const data = [...state.data];
                    data.push(newData);
                    setState({ ...state, data });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    const data = [...state.data];
                    data[data.indexOf(props.oldData)] = newData;
                    setState({ ...state, data });
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    const data = [...state.data];
                    data.splice(data.indexOf(oldData), 1);
                    setState({ ...state, data });
                  }, 600);
                }),
            }}
          />

      // <Paper className={classes.root}>
      //   <Table className={classes.table}>
      //     <TableHead>
      //       <TableRow>
      //         <TableCell align="right">Id</TableCell>
      //         <TableCell align="right">Name</TableCell>
      //         <TableCell align="right">Email</TableCell>
      //         <TableCell align="right">Password</TableCell>
      //       </TableRow>
      //     </TableHead>
      //     <TableBody>
      //       {props.dataUsers.map((text:any, index:any) => (
      //         <TableRow key={index.name}>
      //           <TableCell >{text.id}</TableCell>
      //           <TableCell align="right">{text.name}</TableCell>
      //           <TableCell align="right">{text.email}</TableCell>
      //           <TableCell align="right">{text.password}</TableCell>
      //         </TableRow>
      //       ))}
      //     </TableBody>
      //   </Table>
      // </Paper>
 
          ) : (console.log("isLog = false"))
          }
        </div>
      </div>
    );
}
export default UsersComponent;



{/* <div className= "Massage"> */}
 {/* {this.props.dataUsers.map((text:any, index:any) => 
   <p key={index.id}>{text.id} {text.name}</p>
   )}
</div> */}
