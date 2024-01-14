import React from 'react';
import {
  // RouterProvider,
  // createBrowserRouter,
  // Router,
  Routes,
  Route,
  // Outlet,
  // Link,
  BrowserRouter,
  Outlet,
} from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import '../css/style.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Disable below in production as Nginx will handle it */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

// function Layout() {
//   return (
//     <>
//     <div id="sidebar">
//         <div>
//           <h1>Layout</h1>
//           <br />
//           <p>hello there</p>

//           <nav>
//             <ul>
//               <li>
//                 <a href="/">Home</a>
//               </li>
//               <li>
//                 <Link to="/test">Test</Link>
//               </li>
//               <li>
//                 <a href="/test">About</a>
//               </li>
//               <li>
//                 <a href="/contact">Contact</a>
//               </li>
//             </ul>
//           </nav>
//           <hr />
//           <Outlet />
//         </div>
//     </div>
//     </>
//   );
// }

export default App;
