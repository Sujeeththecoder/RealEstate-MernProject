
// import {BrowserRouter} from 'react-router-dom';


import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/SignIn' element={<SignIn />} />
    <Route path='/SignUp' element={<SignUp />} />
    <Route path='/about' element={<About />} />
    {/* <Route path='/search' element={<Search />} />
    <Route path='/listing/:listingId' element={<Listing />} /> */}

    <Route element={<PrivateRoute />}>
      <Route path='/profile' element={<Profile />} />
      {/* <Route path='/create-listing' element={<CreateListing />} />
      <Route
        path='/update-listing/:listingId'
        element={<UpdateListing />}
      /> */}
    </Route>
  </Routes>
</BrowserRouter>

  
}
