
import MultiStepForm from './components/multi/multi';
import Index from './components/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='app overflow-hidden'>
        <Routes>

          <Route path="/" exact element={<Index />} />
          <Route path="/MultiStepForm" element={<MultiStepForm />} />

        </Routes>
      </div>
    </Router>

  )
}

export default App
