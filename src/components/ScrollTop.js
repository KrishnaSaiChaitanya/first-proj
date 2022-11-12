import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button } from '@mui/material';

export default function ScrollTop({parent}) {
    console.log(parent);
  return (
        <Button onClick={() => parent.current.scrollIntoView({behavior: "smooth"})} style={{ borderRadius: "50%", width: "50px", height: "50px", position: "fixed", bottom: "5px", right: "50px", backgroundColor: "grey", zIndex: "1", minWidth: "0" }}>
        <KeyboardArrowUpIcon fontSize='large' />
        </Button>
  )
}
