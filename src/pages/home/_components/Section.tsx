import React, {PropsWithChildren} from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {responsive} from './responsive'

export interface SectionProps{
  darker?: boolean
}

const dark = {
  default: '#242526',
  darker: '#1C1E21'
}

export default function Section ({darker = false, children}: PropsWithChildren<SectionProps>) {
  return (
    <Box
      component='section'
      sx={[{
        backgroundColor: darker ? dark.darker : dark.default
      }, responsive('py', 0, 0, 8)]}
    >
      <Container maxWidth='xl' sx={{ padding: 1 }}>
        {children}
      </Container>
    </Box>
  )
}