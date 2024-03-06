import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';

function Navbar(){
    return(
        <>
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                <MenuBookIcon></MenuBookIcon>
                <Typography variant="h5">Dictionary</Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar