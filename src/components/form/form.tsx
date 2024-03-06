import { Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

function Form(prop:any){
    const [val,setVal] = useState('')

    const handelVal = (e:string) => {
        setVal(e)
    }

    return(
        <>
        <Box sx={{p:2}}>
            <Paper elevation={3} sx={{p:2,display:"flex",flexDirection:"row",gap:2}}>
                <TextField label="Enter the word you need to find" value={val} fullWidth onChange={(e) => handelVal(e.target.value)}></TextField>
                <Button variant="contained" color="secondary" onClick={() => {prop.handelTextState(val);setVal('')}}>Find</Button>
            </Paper>
        </Box>
        </>
    )
}

export default Form
