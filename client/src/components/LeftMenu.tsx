import { Box, Stack, Typography, TextField, InputAdornment } from '@mui/material';
import React from 'react'
//import SearchIcon from '@mui/icons-material/Search';
import {SoldRedCircle} from "../components/svg/Red"
import { SoldGreenCircle } from './svg/Green';
import { SoldYellowCircle } from './svg/Yellow';
const LeftMenu = () => {
  return (
   <Stack bgcolor={"#443c9c"} height={"100%"} width={"30%"} border={"1px solid white"} borderRadius={"10px"} gap="10px" padding={"1rem"}>
<Box sx={{display:"flex", gap:'10px'}}>
<SoldRedCircle />
<SoldYellowCircle />
<SoldGreenCircle />
</Box>
<Typography color='white' fontSize={"1.2rem"} fontWeight={"600"}>
    Tickets
</Typography>
<TextField
      placeholder='Search'
      size='small'
      sx={{ borderRadius: "10px" }}
    //   InputProps={{
    //     startAdornment: (
    //     //   <InputAdornment position="start">
    //     //    // <SearchIcon />
    //     //   </InputAdornment>
    //     ),
    //   }}
    />
   </Stack>
  )
}

export default LeftMenu
