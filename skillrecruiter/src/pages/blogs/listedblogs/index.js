// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import MuiCardContent from '@mui/material/CardContent'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Imports
import { Grid, Typography } from '@mui/material'
import CardImgTop from 'src/views/ui/cards/basic/CardImgTop'
import CardEvent from 'src/views/ui/cards/basic/CardEvent'
import CardWithCollapse from 'src/views/ui/cards/basic/CardWithCollapse'

// ** Styled Components
const CardContent = styled(MuiCardContent)(({ theme }) => ({
  padding: `${theme.spacing(20, 36)} !important`,
  [theme.breakpoints.down('xl')]: {
    padding: `${theme.spacing(20)} !important`
  },
  [theme.breakpoints.down('sm')]: {
    padding: `${theme.spacing(10, 5)} !important`
  }
}))

const Pricing = ({ apiData }) => {
  // ** States
  const [plan, setPlan] = useState('annually')

  const handleChange = e => {
    if (e.target.checked) {
      setPlan('annually')
    } else {
      setPlan('monthly')
    }
  }

  const cardsArray = Array.from({ length: 9 })

  return (
    <Grid container spacing={6}>
      {cardsArray.map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CardWithCollapse />
        </Grid>
      ))}
    </Grid>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('/pages/pricing')
  const apiData = res.data

  return {
    props: {
      apiData
    }
  }
}

export default Pricing
