
import Header from './components/header/Header'
import Brand from './components/brand/Brand'
import Community from './components/community/Community'
import Spot from './components/spot/Spot'
import Scale from './components/scale/Scale'
import Filter from './components/filter/filter'
import Footer from './components/footer/footer'
import MultiStepForm from './components/multi/multi'
function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Brand />
      <Community />
      <Spot />
      <Scale />
      <Filter />
      <Footer />
      <MultiStepForm />
    </div>

  )
}

export default App
