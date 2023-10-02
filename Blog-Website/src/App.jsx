import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UpdatePage from './components/UpdatePage'
import CreatePost from './components/CreatePost'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='updatepost' element={<UpdatePage />} />
        <Route path="createpost" element={<CreatePost />}  />
      </Routes>


    </>
  )
}

export default App
