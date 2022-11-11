import { Grid } from '@mui/material'
import React from 'react'

function Cards() {
  return (
    <>
    <Grid container spacing={3} >
  <Grid xs = {12} md = {5}  >
    <div className="grid-1" style={{border: "1px solid black", height: "30vh", borderRadius: "30px"}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1439 319" style={{borderRadius:"30px"}}><path fill="#0099ff" fill-opacity="1" d="M0,32L34.3,32C68.6,32,137,32,206,69.3C274.3,107,343,181,411,213.3C480,245,549,235,617,208C685.7,181,754,139,823,122.7C891.4,107,960,117,1029,138.7C1097.1,160,1166,192,1234,186.7C1302.9,181,1371,139,1406,117.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
  
    </div>
  </Grid>
  <Grid md = {2}>

  </Grid>
  <Grid xs={12} md = {5} >
    <div className="grid-2" style={{border: "1px solid black", height: "30vh", borderRadius: "30px"}}>

    </div>
  </Grid>
</Grid>
<Grid container spacing={3}>
  <Grid xs = {0} md = {0} style={{boxShadow:"8px 11px 16px 4px rgba(0,0,0,0.61)", height: "30vh", borderRadius: "30px"}}>
    <div className="grid-1" style={{boxShadow:"8px 11px 16px 4px rgba(0,0,0,0.61)", height: "30vh", borderRadius: "30px"}}>

    </div>
  </Grid>
  <Grid xs={0} md = {6} style={{boxShadow:"8px 11px 16px 4px rgba(0,0,0,0.61)", height: "30vh", borderRadius: "30px"}}>
    <div className="grid-2" style={{boxShadow:"8px 11px 16px 4px rgba(0,0,0,0.61)", height: "30vh", borderRadius: "30px"}}>

    </div>
  </Grid>
  <Grid xs = {0} md = {0} style={{boxShadow:"8px 11px 16px 4px rgba(0,0,0,0.61)", height: "30vh", borderRadius: "30px"}}>
    <div className="grid-3" style={{boxShadow:"8px 11px 16px 4px rgba(0,0,0,0.61)", height: "30vh", borderRadius: "30px"}}>

    </div>
  </Grid>
</Grid>
</>
  )
}

export default Cards