// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import MuiCardContent from '@mui/material/CardContent'

// ** Third Party Imports
import axios from 'axios'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dxdpmgjttftkiqtlgcng.supabase.co'

const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function getData() {
  // Fetch data from the jobs table
  const { data, error } = await supabase.from('blogs').select(`
    *

  `)

  if (error) {
    console.error('Error fetching data:', error)

    return []
  }

  return data
}

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

const Pricing = ({ blogs }) => {
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
      {blogs.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CardWithCollapse
            title={item.title}
            thumbnail={item.thumbnail}
            category={item.category}
            description={item.description}
            updateddate={item.updateddate}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export const getStaticProps = async () => {
  const blogs = await getData()

  return {
    props: {
      blogs
    }
  }
}

export default Pricing
