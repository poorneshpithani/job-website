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

const router = createBrowserRouter([
 { element: <AppLayout />,
  children:[
    {
      path:'/',
      element:<LandingPage/>,
    },
    {
      path:'/onboarding',
      element:<OnBoarding/>,
    },
    {
      path:'/jobs',
      element:<JobListing/>,
    },
    {
      path:'/job:id',
      element:<JobPage/>,
    },
    {
      path:'/my-jobs',
      element:<MyJobs/>,
    },
    {
      path:'/job-posting',
      element:<PostingJobs/>,
    },
    {
      path:'/save-jobs',
      element:<SavedJobs/>,
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
