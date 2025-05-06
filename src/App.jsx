import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Blogs from './components/Blogs'



const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home /></>
  },
  {
    path: '/About',
    element: <><Navbar/> <About/> </>
  },
  {
    path : '/Contact',
    element :<><Navbar/> <Contact/> <Footer/></> 
  },
  {
    path : '/Blogs',
    element:<> <Navbar/> <Blogs/> </>
  }
  
])

function App() {
  return <RouterProvider router={router} />
}

export default App
