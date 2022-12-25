import { Autocomplete, Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Charmander from './charmander.png'
import api from '../../../services/api'
import Logo from './poke.png'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FormatColorResetIcon from '@mui/icons-material/FormatColorReset';
import SearchIcon from '@mui/icons-material/Search';
import PetsIcon from '@mui/icons-material/Pets';
import './index.css'

function Home() {
    // Nossa lista que sera preenchida pela requisição
    const [list, setList] = useState([]);
    const [inputValue, setValueInput] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        navigate(`/pokemon/${inputValue}`,);
    }

    // Chamando nossa função toda vez que o componente renderizar
    useEffect(() => {
        // Executar após essa requisição ser concluida, nos trazendo o data
        api.get().then(({data}) => {
            const listData = data.results.map((item) => ({...item, label: item.name}))
            
            setList(listData)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
            <Box className='header'>

                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: "auto",
                        p: 1,
                        mr: 1,
                        borderRadius: 1,
                    }}
                    component="form"
                    onSubmit={handleSubmit}
                    className="searchBox"
                >
                    <Typography variant="h8">
                    Search for/ Pokemon:
                    </Typography>

                    <Autocomplete
                        id="combo-box-demo"
                        options={list}
                        sx={{ width: '32ch' }}
                        onChange={(e, newEvent) => setValueInput(newEvent.name)}
                        renderInput={(params) =>                     
                        <TextField
                            id="filled-basic"
                            label="Search for your favorite pokemon"
                            variant="standard"
                            {...params}
                            sx={{
                                width: '32ch' 
                            }}
                        />}
                    />

                    <Button
                        variant="contained"
                        type="submit"
                    >
                        <SearchIcon />
                    </Button>
                </Box>
                <img 
                    src={Logo} 
                    alt="Pokemon-Logo"
                    width="10%"
                />
            </Box>

            <div className='home'>
                <div className='body'>
                    <div className="div1">
                        <h2>Charmander</h2>
                        
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <Button 
                                variant="contained" 
                                color="error" 
                                className='buttons'
                                startIcon={<PetsIcon />}
                            >
                                Category: Lizard
                            </Button>
                            <Button 
                                variant="contained" 
                                color="error" 
                                className='buttons'
                                startIcon={<LocalFireDepartmentIcon />}
                                sx = {{
                                    mt: 1,
                                }}
                            >
                                Evolves to: Charmeleon
                            </Button>
                            <Button 
                                variant="contained" 
                                color="error" 
                                className='buttons'
                                startIcon={<FormatColorResetIcon />}
                                sx = {{
                                    mt: 1,
                                }}
                            >
                                Weakness: Water
                            </Button>
                            
                            <Paper
                                sx = {{
                                    bgcolor: 'transparent',
                                    borderRadius: 3,
                                }}
                                className="paper"
                            >
                                <Typography 
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                    sx = {{
                                        m: 7,
                                    }}
                                    className='subTitles'
                                >
                                    Charmander is a Fire-type Pokémon and one of the catchable Pokémon in Pokémon Go. It evolves into Charmeleon at level 16 and into Charizard at level 36.
                                </Typography>
                            </Paper>
                        </Box>
                        
                    </div>
                    
                    <div className="div2">
                        <img 
                        src={Charmander} 
                        alt="Pokemon-Logo"
                        width="60%"
                        />
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Home