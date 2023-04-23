import {Box, CircularProgress,Typography} from '@mui/material';

export function Circular(props:any) {


    

    return (
            <Box className={props.state == null ? "" : "inactive"} sx={{marginTop: "13px", display:"flex",justifyContent:"center"}}>
            <CircularProgress/>
            <Typography sx={{marginTop: "13px", paddingLeft:"20px",color:"rgb(255,0,0)"}} className={props.text == true ? "" : "inactive"}>This may take a few minutes.</Typography>
            </Box>
    );
  }
  