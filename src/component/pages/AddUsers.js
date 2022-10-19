
import { FormGroup, FormControl, InputLabel, Input, Typography, Button } from '@mui/material';
import { useState } from 'react';
import {addUser} from '../../services/Api';
import { useNavigate } from 'react-router-dom';
export default function AddUsers(){
    const navigate = useNavigate();
    const iniUser = {
        name: '',
        email: '', 
        phone: ''
    };
    const [user, setUser] = useState(iniUser);
    const changeValue = (e) => {
        // console.log(e.target.name+' /// '+ e.target.value);
        setUser({...user, [e.target.name] : e.target.value});
    }
    const handleSubmit = async () => {
        // console.log(user);
       await addUser(user);
       navigate('/allUsers');
    }
    return(
        <div>
            <Typography variant='h3'>Add User</Typography>
                <FormGroup style={{width: '60%', margin: 'auto' }}>
                    <FormControl style={{marginTop: '20px'}}>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" name="name" onChange={(e)=>{changeValue(e)}} />
                    </FormControl>
                    <FormControl style={{marginTop: '20px'}}>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input id="email" name='email' onChange={(e)=>{changeValue(e)}}  />
                    </FormControl>
                    <FormControl style={{marginTop: '20px'}}>
                        <InputLabel htmlFor="phone">Phone Number</InputLabel>
                        <Input id="phone" name="phone" onChange={(e)=>{changeValue(e)}}s  />
                    </FormControl>
                    <FormControl style={{marginTop: '20px'}}>
                        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    </FormControl>
                    
                    
            </FormGroup>
        </div>
    );
}