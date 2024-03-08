// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Collapse from '@mui/material/Collapse'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CardWithCollapse = ({ title, thumbnail, category, description, updateddate }) => {
  // ** State
  const [collapse, setCollapse] = useState(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }

  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image={thumbnail} />
      <CardContent>
        <Typography variant='h5' sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {updateddate} {'>'} <b>Category: {category}</b>
        </Typography>
      </CardContent>
      <CardActions className='card-action-dense'>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Button onClick={handleClick}>Edit</Button>
          <IconButton size='small' onClick={handleClick}>
            <Icon fontSize='1.875rem' icon={collapse ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
          </IconButton>
        </Box>
      </CardActions>
      <Collapse in={collapse}>
        <Divider sx={{ m: '0 !important' }} />
        <CardContent>
          <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default CardWithCollapse
