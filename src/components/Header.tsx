import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Header: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, mt: 1 }}
                >
                    Rainbow Six Siege Operator Randomizer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
