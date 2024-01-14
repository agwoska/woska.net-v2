import React from 'react';
import {
  // RouterProvider,
  // createBrowserRouter,
  // Router,
  Routes,
  Route,
  Outlet,
  Link,
  BrowserRouter,
} from 'react-router-dom';
import Home from './Home';
import Test from './Test';
import '../css/style.css';
// import Publications from './app/publications';
// import About from './app/about'
// import Contact from './app/contact';


// for testing
// function App() {
//   return (
//     <div>
//       <h1>App</h1>
//       <br />
//       <p>hello there</p>
//     </div>
//   );
// }

// const router = createBrowserRouter({
//   routes: [
//     { path: '/', element: <Home /> },
//     { path: '/test', element: <Test /> },
//   ],
// });

// function App() {
//   // return (
//   //   <BrowserRouter>
//   //     <div>
//   //     <Switch>
//   //       <Route exact path="/" component={Home} />
//   //       {/* <Route exact path="/publications" component={Publications} />
//   //       <Route exact path="/about" component={About} />
//   //       <Route exact path="/contact" component={Contact} /> */}
//   //     </Switch>
//   //     </div>
//   //   </BrowserRouter>
//   // );
// }

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="/test" element={<Test />} />
        {/* Disable below in production as Nginx will handle it */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
    </BrowserRouter>
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
