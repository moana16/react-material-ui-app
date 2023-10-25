import { Box, Button, Stack, Typography } from '@mui/material';
import './App.css';
import { Delete } from '@mui/icons-material';
import styled from '@emotion/styled';
import { blue, green, red } from '@mui/material/colors';

function test() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Box sx={{width : 300, height : 300, backgroundColor : 'primary.main'}}/>
        <Box sx={{width : 300, height : 300, backgroundColor : 'primary.main'}}/>
        <Box sx={{width : 300, height : 300, backgroundColor : 'primary.main'}}/>
      </Stack>
      <Button sx={{backgroundColor : 'grey'}} variant='contained' startIcon = {<Delete/>}>Click</Button>

      <Typography variant='h1' color="secondary">Heading</Typography>

      <CustomButton>Hi</CustomButton>

      <Root>
        <Typography >down(md):Heading</Typography>
        <Typography >Heading</Typography>
        <Typography >Heading</Typography>
      </Root>
    </div>
    
  );
}

export default test;

const Root = styled('div')(({theme}) => ({
  padding : theme.spacing(1),
  [theme.breakpoints.down('md')] : {
    backgroundColor : red[500],
  },
  [theme.breakpoints.up('md')] : {
    backgroundColor : blue[500],
  },
  [theme.breakpoints.up('lg')] : {
    backgroundColor : green[500],
  },

}))

const CustomButton = styled(Button)(({theme}) => ({
  backgroundColor : theme.palette.primary.main,
  color : 'white',
  margin : 0,
  "&:hover" : {
    backgroundColor : 'black'
  },
}))