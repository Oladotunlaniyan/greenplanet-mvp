import {BrowserRouter, Routes, Route} from 'react-router-dom'



import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Market from './pages/marketplace/Market'
import Blog from './pages/blog/Blog'
import Account from './pages/account/Account'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='index' element = {<Home/>} />
        <Route path='explore' element = {<Explore/>} />
        <Route path='market' element = {<Market/>} />
        <Route path='blog' element = {<Blog/>} />
        <Route path='account' element = {<Account/>} />
        {/* <Route path='*' element = {<NotFound/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App