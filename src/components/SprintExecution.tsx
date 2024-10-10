import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  LinearProgress,
  Box,
} from '@mui/material'

const SprintExecution: React.FC = () => {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Implement user authentication', completed: false },
    { id: 2, name: 'Create inventory database schema', completed: false },
    { id: 3, name: 'Develop RESTful API for inventory management', completed: false },
    { id: 4, name: 'Design and implement frontend dashboard', completed: false },
    { id: 5, name: 'Integrate NLP model for inventory queries', completed: false },
  ])

  const handleToggle = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const progress = (tasks.filter(task => task.completed).length / tasks.length) * 100

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Sprint Execution
      </Typography>
      <Box mb={2}>
        <Typography variant="h6" gutterBottom>
          Sprint Progress
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="body2" color="textSecondary">
          {`${Math.round(progress)}% Complete`}
        </Typography>
      </Box>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} dense button onClick={() => handleToggle(task.id)}>
            <Checkbox
              edge="start"
              checked={task.completed}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={task.name} />
          </ListItem>
        ))}
      </List>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/dashboard')}
          style={{ marginRight: '10px' }}
        >
          Back to Dashboard
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            // Here you would typically save the sprint results
            console.log('Sprint completed:', tasks)
            navigate('/dashboard')
          }}
        >
          Complete Sprint
        </Button>
      </Box>
    </Container>
  )
}

export default SprintExecution