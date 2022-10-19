
import { FormGroup, FormControl, InputLabel, Input, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import {getSingleUser, editUser} from '../../services/Api';
import { useNavigate, useParams } from 'react-router-dom';
export default function EditUser(){
    const {id} = useParams();
    const navigate = useNavigate();
    const iniUser = {
        name: '',
        email: '', 
        phone: ''
    };
   
    useEffect(()=>{
         getUserData();
    }, []);
    const getUserData = async () => {
        let response = await getSingleUser(id);
        setUser(response.data);
        // console.log(response);
     }
    const [user, setUser] = useState(iniUser);
    const changeValue = (e) => {
        // console.log(e.target.name+' /// '+ e.target.value);
        setUser({...user, [e.target.name] : e.target.value});
    }
    const handleSubmit = async () => {
        // console.log(user);
       await editUser(user, id);
       navigate('/allUsers');
    }
    return(
        <div>
            <Typography variant='h3'>Edit User</Typography>
                <FormGroup style={{width: '60%', margin: 'auto' }}>
                    <FormControl style={{marginTop: '20px'}}>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" name="name" onChange={(e)=>{changeValue(e)}} value={user.name} />
                    </FormControl>
                    <FormControl style={{marginTop: '20px'}}>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input id="email" name='email' onChange={(e)=>{changeValue(e)}} value={user.email} />
                    </FormControl>
                    <FormControl style={{marginTop: '20px'}}>
                        <InputLabel htmlFor="phone">Phone Number</InputLabel>
                        <Input id="phone" name="phone" onChange={(e)=>{changeValue(e)}} value={user.phone} />
                    </FormControl>
                    <FormControl style={{marginTop: '20px'}}>
                        <Button variant="contained" onClick={handleSubmit}>Update</Button>
                    </FormControl>
                    
                    
            </FormGroup>
        </div>
    );
}