import Homepage from './pages/Homepage';
import Singlepost from './pages/Singlepost';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App(){

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/posts/:id" element={<Singlepost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App