import Navbar from './components/Navbar'
import Bright from './components/Bright'
import New from './components/New'
import TopNews from './components/TopNews'
import './index.css'

function App() {

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="group">
          <Bright />
          <New />
        </div>
        <TopNews />
      </div>
    </>
  )
}

export default App
