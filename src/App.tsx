import './App.css'
import { HomePage } from './Pages/Home'
import Threads from './components/Threads'

function App() {
  return (
    <div className='bg-black' style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <Threads  color={[0.32,0.15,1]}
    />
      </div>

      {/* Foreground */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <HomePage />
      </div>
    </div>
  )
}

export default App