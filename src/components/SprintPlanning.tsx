import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material'

const SprintPlanning: React.FC = () => {
  const navigate = useNavigate()

  const tasks = [
    'Implement user authentication',
    'Create inventory database schema',
    'Develop RESTful API for inventory management',
    'Design and implement frontend dashboard',
    'Integrate NLP model for inventory queries',
  ]

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Sprint Planning
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Sprint Goals
        </Typography>
        <Typography variant="body1">
          Complete core functionality for inventory management and begin AI integration.
        </Typography>
      </Paper>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Sprint Backlog
        </Typography>
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index}>
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/sprint-execution')}
      >
        Start Sprint Execution
      </Button>
    </Container>
  )
}

export default SprintPlanning