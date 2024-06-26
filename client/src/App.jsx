
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import Listing from './pages/Listing';
import LocateMe from './pages/LocateMe';
export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/SignIn' element={<SignIn />} />
    <Route path='/sign-in' element={<SignIn />} />
    <Route path='/SignUp' element={<SignUp />} />
    <Route path='/about' element={<About />} />
    <Route path='/listing/:listingId' element={<Listing/>} />
    <Route path="/LocateMe" element={<LocateMe />} />


    <Route element={<PrivateRoute />}>
      <Route path='/profile' element={<Profile />} />
      <Route path='/create-listing' element={<CreateListing />} />
    </Route>
  </Routes>
</BrowserRouter>

  
}
