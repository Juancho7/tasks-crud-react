import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TasksProvider } from './context/Tasks.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TasksProvider>
    <App />
  </TasksProvider>
)
