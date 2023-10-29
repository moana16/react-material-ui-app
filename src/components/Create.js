import { Edit } from '@mui/icons-material'
import { Box, Fab, IconButton, Modal, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Create() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
    <Tooltip title="Create"
        sx={{position : "fixed",
            bottom : 20,
            right : 30}}>
        <IconButton>
            <Fab color='secondary'>
                <Edit onClick={handleOpen} />
            </Fab>
        </IconButton>
    </Tooltip>
    <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title">
        <Box sx={style}>
            <Typography id="modal" variant='h6' component="h2">
                Text in a modal
            </Typography>
            <Typography sx={{mt : 2}}>
                !Hola! Buenos Dias, My Amigas~
                Gracias~
            </Typography>
        </Box>


    </Modal>
    </>
    
  )
}
const style = {
    position: 'absolute',
    top: '50%',
    left : '50%',
    transform : 'translate(-50%, -50%)',
    width : 400,
    bgcolor : 'background.paper',
    border : '2px solid #000',
    boxShadow : 24,
    p : 4,

};
