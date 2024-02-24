import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Recipes from './components/Recipes';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <HashRouter>
      <Nav />
      <div >
        <Routes>
          <Route path='/test/#/' element={<Home />} />
          <Route path='/test/#/contact' element={<Home />} />
          <Route path='/test/#/about' element={<Home />} />
          <Route path='/test/#/profile' element={<Profile />} />
          <Route path='/test/#/recipes' element={<Recipes />} />
          <Route path='/test/#/signIn' element={<SignIn />} />
          <Route path='/test/#/signUp' element={<SignUp />} />
          <Route path='/test/#/resetPassword' element={<ResetPassword />} />
          <Route path="/test/#/*" element={<NotFound/>} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;

