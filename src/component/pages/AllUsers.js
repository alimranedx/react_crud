import {Table, TableHead, TableRow, TableCell, TableBody, Button, Grid, Item, Typography} from '@mui/material';
import { useEffect, useState } from 'react';
import {getUser, deleteUser} from '../../services/Api';
import { Link } from 'react-router-dom';
export default function AllUsers(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getAllUsers();
    }, []);
    const getAllUsers = async () => {
       let response =  await getUser();
       setUsers(response.data);
    //    console.log(response);
    }
    const deleteUserss = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }
    return(
        <div>
            
            <Grid container spacing={2}>
                <Grid item xs={8}>
                <Typography variant='h3' align='right' style={{color: '#1565C0', fontWeight: 'bold', margin: '20px 0 20px 20px'}}>All Usres List</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="contained" style={{margin: '35px 0 20px 43px'}} component={Link} to='/addUsers'>Add Users</Button>
                </Grid>
            </Grid>

            
            <Table style={{width: '80%', margin: 'auto'}}>
                <TableHead style={{background: 'black'}}>
                    <TableRow>
                        <TableCell style={{color: 'white'}}>ID</TableCell>
                        <TableCell style={{color: 'white'}}>Name</TableCell>
                        <TableCell style={{color: 'white'}}>Email</TableCell>
                        <TableCell style={{color: 'white'}}>Phone</TableCell>
                        <TableCell style={{color: 'white'}}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(user =>
                            (
                                <TableRow>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" component={Link} to={`/editUser/${user.id}`} size="small" style={{marginRight: '10px'}}>Edit</Button>
                                        <Button variant="contained" onClick={()=>{deleteUserss(user.id)}} size="small" color="secondary">Delete</Button>
                                    </TableCell>
                                    
                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>
        </div>
    );
}



