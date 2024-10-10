import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'

const ProjectConclusion: React.FC = () => {
  const navigate = useNavigate()

  const achievements = [
    'Completed all planned features',
    'Achieved 95% test coverage',
    'Successfully integrated AI-driven inventory prediction',
    'Optimized system performance, achieving <100ms response time',
  ]

  const nextSteps = [
    'Deploy to production environment',
    'Conduct user training sessions',
    'Set up monitoring and alerting systems',
    'Plan for future enhancements based on user feedback',
  ]

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Project Conclusion
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Project Achievements
        </Typography>
        <List>
          {achievements.map((achievement, index) => (
            <ListItem key={index}>
              <ListItemText primary={achievement} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Next Steps
        </Typography>
        <List>
          {nextSteps.map((step, index) => (
            <ListItem key={index}>
              <ListItemText primary={step} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
      >
        Start New Project
      </Button>
    </Container>
  )
}

export default ProjectConclusion