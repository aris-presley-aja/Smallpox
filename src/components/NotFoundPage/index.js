import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Ghosts from './ghosts.png'
import './index.css'

function notFoundPage() {
    return (
        <Box className="notFoundPage">
            <>
                <Typography variant='h2' className='title'>
                Looking for ghosts? Wrong page!
                </Typography>
                <Typography variant='h6' className='title'>
                    <Link to={"/"}>
                    Redirect to home !
                    </Link>
                </Typography>
            </>
            

            <img src={Ghosts} width="500rem" alt='Fantasmas'/>
        </Box>
    )
}

export default notFoundPage