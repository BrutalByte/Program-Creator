import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
} from '@mui/material'

const ProjectSchema = Yup.object().shape({
  projectName: Yup.string().required('Required'),
  projectDescription: Yup.string().required('Required'),
  targetPlatform: Yup.string().required('Required'),
  programmingLanguage: Yup.string().required('Required'),
})

const ProjectInitialization: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Project Initialization
      </Typography>
      <Formik
        initialValues={{
          projectName: '',
          projectDescription: '',
          targetPlatform: '',
          programmingLanguage: '',
        }}
        validationSchema={ProjectSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2))
            setSubmitting(false)
            navigate('/dashboard')
          }, 400)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box mb={2}>
              <Field
                name="projectName"
                as={TextField}
                label="Project Name"
                fullWidth
                error={touched.projectName && errors.projectName}
                helperText={touched.projectName && errors.projectName}
              />
            </Box>
            <Box mb={2}>
              <Field
                name="projectDescription"
                as={TextField}
                label="Project Description"
                fullWidth
                multiline
                rows={4}
                error={touched.projectDescription && errors.projectDescription}
                helperText={touched.projectDescription && errors.projectDescription}
              />
            </Box>
            <Box mb={2}>
              <Field
                name="targetPlatform"
                as={TextField}
                label="Target Platform"
                fullWidth
                error={touched.targetPlatform && errors.targetPlatform}
                helperText={touched.targetPlatform && errors.targetPlatform}
              />
            </Box>
            <Box mb={2}>
              <Field
                name="programmingLanguage"
                as={TextField}
                label="Programming Language"
                fullWidth
                error={touched.programmingLanguage && errors.programmingLanguage}
                helperText={touched.programmingLanguage && errors.programmingLanguage}
              />
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Initialize Project
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default ProjectInitialization