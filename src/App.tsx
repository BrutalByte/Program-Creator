import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import ProjectInitialization from './components/ProjectInitialization'
import Dashboard from './components/Dashboard'
import SprintPlanning from './components/SprintPlanning'
import SprintExecution from './components/SprintExecution'
import ProjectConclusion from './components/ProjectConclusion'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '20px', color: 'white' }}>
        <h1>AI Project Manager</h1>
      </div>
      <Routes>
        <Route path="/" element={<ProjectInitialization />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sprint-planning" element={<SprintPlanning />} />
        <Route path="/sprint-execution" element={<SprintExecution />} />
        <Route path="/project-conclusion" element={<ProjectConclusion />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App