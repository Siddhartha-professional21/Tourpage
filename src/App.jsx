import LeftBar from "./components/LeftBar"
import MainSection from "./components/MainSection"
import RightBar from './components/RightBar'


function App() {
  

  return (
    <>
      <div className="flex justify-between">
        <LeftBar/>
        <MainSection/>
        <RightBar/>
      </div>
    </>
  )
}

export default App
