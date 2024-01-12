import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';






let crudTwoFunction = () => {


    let [formData, setFormData] = useState({
        name: "",
        email: ""
    });
    
    let [tableDataa, setTableDataa] = useState([]);

    let addformData = () => {
        setTableDataa([...tableDataa, formData]);
        setFormData({
            name: "",
            email: ""
        })
    };

    let getFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]: value})
    }

    let removeData = (index) => {
        let arr = tableDataa;
        arr.splice(index, 1);
        setTableDataa([...arr]);
    };

    return (
        <>
            <br />
            <Container maxWidth="sm">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TextField 
                            name="name"
                            value={formData.name} 
                            onChange={getFormData} 
                            label="Name" 
                            variant="outlined" 
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField 
                            name="email"
                            value={formData.email} 
                            onChange={getFormData} 
                            label="Email" 
                            variant="outlined" 
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button onClick={addformData} variant="contained">Contained</Button>
                    </Grid>
                </Grid>
            </Container>


        {/* {JSON.stringify(tableDataa)} */}

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Remove</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableDataa.map((row, index) => (
                            <TableRow key={index} >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell component="th" scope="row">{row.email}</TableCell>

                                <TableCell>
                                    <IconButton aria-label="delete" onClick={ () => removeData(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default crudTwoFunction