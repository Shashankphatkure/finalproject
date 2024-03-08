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
  const { data, error } = await supabase.from('jobs').select(`
     *,
     company:company!jobs_company_fkey (
       companyname,
       companylogo,
       rating
     )
  `)

  if (error) {
    console.error('Error fetching data:', error)

    return []
  }

  return data
}

// ** Demo Imports
import PricingCTA from 'src/views/pages/pricing/PricingCTA'
import PricingTable from 'src/views/pages/pricing/PricingTable'
import PricingPlans from 'src/views/pages/pricing/PricingPlans'
import PricingHeader from 'src/views/pages/pricing/PricingHeader'
import PricingFooter from 'src/views/pages/pricing/PricingFooter'
import CardUser from 'src/views/ui/cards/basic/CardUser'
import { Grid, Typography } from '@mui/material'
import CardImgTop from 'src/views/ui/cards/basic/CardImgTop'

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

const Pricing = ({ jobs }) => {
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
      {jobs.map((job, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <CardUser title={job.title} location={job.location} salary={job.salary} />
        </Grid>
      ))}
    </Grid>
  )
}

export const getStaticProps = async () => {
  const jobs = await getData()

  return {
    props: {
      jobs
    }
  }
}

export default Pricing
