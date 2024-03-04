// // // import { FaSearch } from "react-icons/fa";
// // // import { Link } from "react-router-dom";
// // // import { useSelector } from "react-redux";
// // // // import { useEffect, useState } from 'react';

// // // export default function Header() {
// // //   const { currentUser } = useSelector((state) => state.user);

// // //   return (
// // //     <header className="bg-slate-200 shadow-md">
// // //       <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
// // //         <Link to="/">
// // //           <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
// // //             <span className="text-slate-500">TVA</span>
// // //             <span className="text-slate-700">Estate</span>
// // //           </h1>
// // //         </Link>
// // //         <form className="bg-slate-100 p-3 rounded-lg flex items-center">
// // //           <input
// // //             type="text"
// // //             placeholder="Search..."
// // //             className="bg-transparent focus:outline-none w-24 sm:w-64"
// // //           />
// // //           <button>
// // //             <FaSearch className="text-slate-600" />
// // //           </button>
// // //         </form>
// // //         <ul className="flex gap-4">
// // //           <Link to="/">
// // //             <li className="hidden sm:inline text-slate-700 hover:underline">
// // //               Home
// // //             </li>
// // //           </Link>
// // //           <Link to="/about">
// // //             <li className="hidden sm:inline text-slate-700 hover:underline">
// // //               About
// // //             </li>
// // //           </Link>
// // //           <Link to="/profile">
// // //             {currentUser ? (
// // //               <img
// // //                 className="rounded-full h-7 w-7 object-cover"
// // //                 src={currentUser.avatar}
// // //                 alt="profile"
// // //               />
// // //             ) : (
// // //               <li className=" text-slate-700 hover:underline"> Sign in</li>
// // //             )}
// // //           </Link>
// // //         </ul>
// // //       </div>
// // //     </header>
// // //   );
// // // }

// // // import React, { useState } from 'react';

// // // function Header({ onSignIn }) {
// // //   const [username, setUsername] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [error, setError] = useState('');

// // //   const handleSignIn = () => {
// // //     // Perform sign-in validation (e.g., check credentials)
// // //     if (username === 'user' && password === 'password') {
// // //       onSignIn();
// // //     } else {
// // //       setError('Invalid username or password');
// // //     }
// // //   };

// // //   return (
// // //     <header className="bg-gray-800 p-4">
// // //       <div className="flex justify-between items-center">
// // //         <div className="text-white font-bold">Logo</div>
// // //         {!onSignIn && (
// // //           <nav className="space-x-4">
// // //             <a href="#" className="text-white hover:text-gray-400">Home</a>
// // //             <a href="#" className="text-white hover:text-gray-400">About</a>
// // //             <a href="#" className="text-white hover:text-gray-400">Services</a>
// // //             <a href="#" className="text-white hover:text-gray-400">Contact</a>
// // //           </nav>
// // //         )}
// // //         {onSignIn && (
// // //           <div className="flex space-x-4">
// // //             <input
// // //               type="text"
// // //               placeholder="Username"
// // //               className="px-4 py-2 rounded border bg-gray-200"
// // //               value={username}
// // //               onChange={(e) => setUsername(e.target.value)}
// // //             />
// // //             <input
// // //               type="password"
// // //               placeholder="Password"
// // //               className="px-4 py-2 rounded border bg-gray-200"
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //             />
// // //             <button
// // //               className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
// // //               onClick={handleSignIn}
// // //             >
// // //               Sign In
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //       {error && <p className="text-red-500">{error}</p>}
// // //     </header>
// // //   );
// // // }

// // // export default Header;

// // import React, { useState } from 'react';

// // function Header({ onSignIn }) {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const handleSignIn = () => {
// //     // Perform sign-in validation (e.g., check credentials)
// //     if (username === 'user' && password === 'password') {
// //       onSignIn();
// //     } else {
// //       setError('Invalid username or password');
// //     }
// //   };

// //   return (
// //     <header className="bg-gray-800 p-4 flex justify-between items-center">
// //       <div className="text-white font-bold">Logo</div>
// //       {!onSignIn ? (
// //         <nav className="hidden sm:flex space-x-4">
// //           <a href="#" className="text-white hover:text-gray-400">Home</a>
// //           <a href="#" className="text-white hover:text-gray-400">About</a>
// //           <a href="#" className="text-white hover:text-gray-400">Services</a>
// //           <a href="#" className="text-white hover:text-gray-400">Contact</a>
// //         </nav>
// //       ) : (
// //         <div className="flex space-x-4">
// //           <input
// //             type="text"
// //             placeholder="Username"
// //             className="px-4 py-2 rounded border bg-gray-200"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             className="px-4 py-2 rounded border bg-gray-200"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           <button
// //             className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
// //             onClick={handleSignIn}
// //           >
// //             Sign In
// //           </button>
// //         </div>
// //       )}
// //       {error && <p className="text-red-500">{error}</p>}
// //     </header>
// //   );
// // }

// // export default Header;

// import React, { useState } from 'react';

// function MenuButton() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         className="bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
//         onClick={toggleMenu}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           {isOpen ? (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           ) : (
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           )}
//         </svg>
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
//           <a
//             href="#"
//             className="block px-4 py-2 text-white hover:bg-gray-700"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-white hover:bg-gray-700"
//           >
//             About
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-white hover:bg-gray-700"
//           >
//             Services
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-white hover:bg-gray-700"
//           >
//             Contact
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// function Header() {
//   return (
//     <header className="bg-gray-800 p-4 flex justify-between items-center">
//       <div className="text-white font-bold">Logo</div>
//       <MenuButton />
//     </header>
//   );
// }

// export default Header;


import React, { useState } from 'react';

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-white hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

function Header() {
  const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = () => {
    setSignedIn(true);
  };

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white font-bold">Logo</div>
      {signedIn ? (
        <MenuButton />
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      )}
    </header>
  );
}

export default Header;
