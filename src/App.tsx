import './App.css'
import { SaveProvider } from './context/Context'
import CustomRoutes from './routes'

function App() {

  return (
    <SaveProvider>
      <CustomRoutes />
    </SaveProvider>
  )
}

export default App
