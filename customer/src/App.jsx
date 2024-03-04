
// import { BrowserRouter , Routes , Route} from 'react-router-dom';
// import Home from "./pages/Home"
// import SignIn from "./pages/SignIn"
// import SignUp from "./pages/SignUp"
// import About from "./pages/About"
// import Profile from "./pages/Profile"
// import Header from './components/Header';
// import PrivateRoute from './components/PrivateRoute';

// export default function App() {
//   return <BrowserRouter>
//      <Header />
//     <Routes>
//     <Route path='/' element = {<Home/>} />
//     <Route path='/sign-in' element = {<SignIn/>} />
//     <Route path='/sign-up' element = {<SignUp/>} />
//     <Route  element = {<PrivateRoute/>} >
//       <Route path='/profile' element = {< Profile/>} />
//     </Route>
//     <Route path='/about' element = { <About/>} />
//   </Routes>
//   </BrowserRouter>
// }

// import React, { useState } from 'react';
// import Header from './components/Header';

// function App() {
//   const [signedIn, setSignedIn] = useState(false);

//   const handleSignIn = () => {
//     setSignedIn(true);
//   };

//   return (
//     <div className="App">
//       <Header onSignIn={signedIn ? null : handleSignIn} />
//       {/* Other content of your application */}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = () => {
    setSignedIn(true);
  };

  return (
    <div className="App">
      <Header onSignIn={signedIn ? null : handleSignIn} />
      {/* Other content of your application */}
      {signedIn && (
        <nav className="bg-gray-800 p-4 sm:hidden">
          <a href="#" className="text-white hover:text-gray-400">Home</a>
          <a href="#" className="text-white hover:text-gray-400">About</a>
          <a href="#" className="text-white hover:text-gray-400">Services</a>
          <a href="#" className="text-white hover:text-gray-400">Contact</a>
        </nav>
      )}
    </div>
  );
}

export default App;
