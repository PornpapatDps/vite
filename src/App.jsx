import './App.css'
import Leftsection from './sections/Leftsection'
import Rightsection from './sections/Rightsection'



function App() {
  return (
    <div className='mt-14 mx-auto max-w-6xl grid gap-5 lg:grid-cols-[40%_60%]'>
      <Leftsection />
      <Rightsection />
    </div>
  )
}
export default App 
