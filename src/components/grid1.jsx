import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import CatName from './catName'
import 'aos/dist/aos.css'; // Import the AOS styles
import AOS from 'aos'; // Import the AOS library

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    React.useEffect(() => {
        AOS.init();
      }, []);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
               
                <Grid item lg={1} md={1} xs={0}></Grid>
                <Grid  item lg={5} md={5} xs={12}>
                    <Box sx={{
                        position: 'relative',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '630px',
                        backgroundColor: 'red',
                        backgroundImage: "url('https://i2-prod.mirror.co.uk/incoming/article22315296.ece/ALTERNATES/s615b/0_PlayStation-5-black-edition-concept.jpg')",
                        borderRadius: '5px',
                    }}>

                        <Box sx={{
                            position: 'absolute',
                            bottom: '2%',
                            left: '5%'


                        }}>
                            <Typography sx={{ fontSize: '22px', fontWeight: 'semi-bold', color: 'white' }}>
                                PlayStation 5
                            </Typography>
                            <Box sx={{width:'60%'}}>
                            <Typography sx={{ fontSize: '15px', fontWeight: 'normal', color: 'white' }}>
                                Black and White version of the PS5 coming out on sale.
                            </Typography>
                            </Box>
                            <div style={{ height: '10px' }}></div>
                            <Button sx={{
                                paddingX:'20px',
                                paddingY:'10px',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                color: 'white',
                                borderColor: 'white', // Set the border color here
                                '&:hover': {
                                    backgroundColor: 'white', // Set the hover color here
                                    color: 'black',
                                    borderColor: 'black',
                                },
                            }} variant="outlined">Shop Now</Button>

                        </Box>

                    </Box>
                </Grid>

                <Grid   item lg={5} md={5} xs={12}>

                    <Grid container spacing={4}>


                        <Grid item lg={12} md={12} xs={12}>
                            <Box sx={{
                                position: 'relative',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '300px',
                                backgroundColor: 'red',
                                backgroundImage: "url('https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?q=10&h=200')",
                                borderRadius: '5px',
                            }}>
                              <Box sx={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '5%'


                        }}>
                            <Typography sx={{ fontSize: '22px', fontWeight: 'semi-bold', color: 'white' }}>
                            Women’s Collections
                            </Typography>
                            <Box sx={{width:'60%'}}>
                            <Typography sx={{ fontSize: '15px', fontWeight: 'normal', color: 'white' }}>
                            Featured woman collections that give you another vibe.
                            </Typography>
                            </Box>
                            <div style={{ height: '10px' }}></div>
                            <Button sx={{
                                paddingX:'20px',
                                paddingY:'10px',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                color: 'white',
                                borderColor: 'white', // Set the border color here
                                '&:hover': {
                                    backgroundColor: 'white', // Set the hover color here
                                    color: 'black',
                                    borderColor: 'black',
                                },
                            }} variant="outlined">Shop Now</Button>

                        </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12} >
                            <Box sx={{
                                position: 'relative',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '300px',
                                backgroundColor: 'red',
                                backgroundImage: "url('https://www.axiomaudio.com/media/mageplaza/blog/post/2/0/5ccc39a029123.jpg')",
                                borderRadius: '5px',
                            }}>
                                <Box sx={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '5%'


                        }}>
                            <Typography sx={{ fontSize: '22px', fontWeight: 'semi-bold', color: 'white' }}>
                            Speakers
                            </Typography>
                            <Box sx={{width:'100%'}}>
                            <Typography sx={{ fontSize: '15px', fontWeight: 'normal', color: 'white' }}>
                             Amazon wireless speakers
                            </Typography>
                            </Box>
                            <div style={{ height: '10px' }}></div>
                            <Button sx={{
                                paddingX:'20px',
                                paddingY:'10px',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                color: 'white',
                                borderColor: 'white', // Set the border color here
                                '&:hover': {
                                    backgroundColor: 'white', // Set the hover color here
                                    color: 'black',
                                    borderColor: 'black',
                                },
                            }} variant="outlined">Shop Now</Button>

                        </Box> 
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <Box sx={{
                                position: 'relative',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '300px',
                                backgroundColor: 'red',
                                backgroundImage: "url('https://c1.wallpaperflare.com/preview/337/224/913/perfume-bottle-smell-light-thumbnail.jpg')",
                                borderRadius: '5px',
                            }}>
                                 <Box sx={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '5%'


                        }}>
                            <Typography sx={{ fontSize: '22px', fontWeight: 'semi-bold', color: 'white' }}>
                            Perfume
                            </Typography>
                            <Box sx={{width:'100%'}}>
                            <Typography sx={{ fontSize: '15px', fontWeight: 'normal', color: 'white' }}>
                            GUCCI INTENSE OUD EDP
                            </Typography>
                            </Box>
                            <div style={{ height: '10px' }}></div>
                            <Button sx={{
                                paddingX:'20px',
                                paddingY:'10px',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                color: 'white',
                                borderColor: 'white', // Set the border color here
                                '&:hover': {
                                    backgroundColor: 'white', // Set the hover color here
                                    color: 'black',
                                    borderColor: 'black',
                                },
                            }} variant="outlined">Shop Now</Button>

                        </Box>
                            </Box>
                        </Grid>
                    </Grid>


                </Grid>
                <Grid item lg={1} md={1} xs={0}></Grid>
            </Grid>
        </Box>
    );
}
