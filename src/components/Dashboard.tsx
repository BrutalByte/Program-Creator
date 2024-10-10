import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material'

const Dashboard: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Project Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Project Overview
            </Typography>
            <Typography variant="body1">
              Project Name: AI-Driven Inventory Management System
            </Typography>
            <Typography variant="body1">
              Current Phase: Sprint Execution
            </Typography>
            <Typography variant="body1">
              Sprint Progress: 3/12
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Key Metrics
            </Typography>
            <Typography variant="body1">
              Work Units Completed: 250/400
            </Typography>
            <Typography variant="body1">
              Test Coverage: 92%
            </Typography>
            <Typography variant="body1">
              Performance Score: 85/100
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => navigate('/sprint-planning')}
          >
            Sprint Planning
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => navigate('/sprint-execution')}
          >
            Sprint Execution
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={() => navigate('/project-conclusion')}
          >
            Project Conclusion
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard