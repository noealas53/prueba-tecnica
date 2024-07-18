import { BrowserRouter } from 'react-router-dom'
import Navigation from './navigation'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <ToastContainer autoClose={700} />
    </BrowserRouter>
  )
}

export default App
