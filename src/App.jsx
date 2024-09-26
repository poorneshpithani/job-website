import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import AppLayout from './layout/AppLayout'
import LandingPage from './pages/LandingPage'
import OnBoarding from './pages/OnBoarding'
import { ThemeProvider } from './components/theme-provider'
import JobListing from './pages/JobListing'
import JobPage from './pages/JobPage'
import MyJobs from './pages/MyJobs'
import PostingJobs from './pages/PostingJobs'
import SavedJobs from './pages/SavedJobs'
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter([
 { element: <AppLayout />,
  children:[
    {
      path:'/',
      element:<LandingPage/>,
    },
    {
      path:'/onboarding',
      element:(
      <ProtectedRoute>
        <OnBoarding/>
      </ProtectedRoute>
      )
    },
    {
      path:'/jobs',
      element:
      (
        <ProtectedRoute>
          <JobListing/>
        </ProtectedRoute>
        )
    },
    {
      path:'/job:id',
      element:
      (
        <ProtectedRoute>
          <JobPage/>
        </ProtectedRoute>
        )
    },
    {
      path:'/my-jobs',
      element:
      (
        <ProtectedRoute>
          <MyJobs/>
        </ProtectedRoute>
        )
    },
    {
      path:'/job-posting',
      element:
      (
        <ProtectedRoute>
          <PostingJobs/>
        </ProtectedRoute>
        )
    },
    {
      path:'/saved-jobs',
      element:
      (
        <ProtectedRoute>
          <SavedJobs/>
        </ProtectedRoute>
        )
    },
  ]
 }

])

function App() {

  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
