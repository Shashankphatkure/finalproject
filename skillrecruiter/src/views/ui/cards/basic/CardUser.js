// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'

const CardUser = ({ title, location, salary }) => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Box
          sx={{
            mt: 5.75,
            mb: 8.75,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h5'>{title}</Typography>
            <Typography variant='body2'>{location}</Typography>
          </Box>
          <Button variant='contained'>View Candidates</Button>
        </Box>
        <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant='subtitle2' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
            USD ${salary}
          </Typography>
          <AvatarGroup max={4}>
            <Avatar src='/images/avatars/8.png' alt='Alice Cobb' />
            <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
            <Avatar src='/images/avatars/3.png' alt='Howard Lloyd' />
            <Avatar src='/images/avatars/2.png' alt='Bettie Dunn' />
            <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
            <Avatar src='/images/avatars/5.png' alt='Jimmy Hanson' />
            <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
          </AvatarGroup>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardUser
