

import './App.css'
import Home from './Component/Home'
import MovieDetailPage from './Component/MovieDetailPage'
import MovieList from './Component/MoviList'
import Navbar from './Component/Navbar'
import{BrowserRouter,Routes,Route}from "react-router-dom"
function App() {
 

  return (
    <>
     
     <BrowserRouter>
     <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='movie/:id' element={<MovieDetailPage/>}/>
    <Route path='movies/:type' element={<MovieList/>}/>
    
    </Routes>
     
  
     </BrowserRouter>

    </>
  )
}

export default App
