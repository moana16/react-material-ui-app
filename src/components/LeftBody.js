import { Box } from '@mui/material'
import React from 'react'

export default function LeftBody() {
  return (
    <Box flex={1} p={2} sx={{
        display : {xs : 'none', sm : 'block'}
    }}>
        LeftBody
    </Box>
  )
}
