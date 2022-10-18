import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import Snorlax from './Snorlax.png'
import './index.css'

function Footer() {
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    const newLocal = <img

        src="https://avatars.githubusercontent.com/u/12770560?s=400&v=4"
        alt='Developer image'
        width="300px"
        className="devImage" />;
    return(
        <Box className="footer">
            <Box 
                className="leftSide"
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            >

                <img src={Snorlax} width="80%" className="image"/>
            </Box>

            <Box className="rigthSide">
                <Typography 
                    sx={{
                        mt: 2,
                        fontSize: 42,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    Developed by Арис Приянто
                </Typography>
                {newLocal}

                <Typography 
                    sx={{
                        mt: 2,
                        fontSize: 30,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://github.com/aris-presley-aja" target="_blank" rel="noreferrer">
                        <GitHubIcon /> Github    
                    </a>
                </Typography>

                <Typography 
                    sx={{
                        mt: 1,
                        fontSize: 30,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://www.linkedin.com/in/aris-priyanto/" target="_blank">
                        <LinkedInIcon /> Linkedin
                    </a>
                </Typography>

                <Typography 
                    sx={{
                        mt: 1,
                        fontSize: 30,
                        textAlign: 'center'
                    }}
                    className="footerTitle"
                >
                    <a href="https://pokeapi.co/" target="_blank">
                        <ArticleIcon />Pokemon Documentation
                    </a>
                </Typography>
                
            </Box>
        </Box>
    )
}

export default Footer