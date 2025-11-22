// // import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// // import Dashboard from "./pages/Dashborad"
// // import Faculty from "./pages/Faculty";
// // import ClassPage from "./pages/Class";
// // import Lecture from "./pages/Lecture";

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <div className="flex h-screen">
// //         <aside className="w-64 bg-blue-600 text-white p-6 space-y-4">
// //           <h2 className="text-2xl font-bold">Lecture Reminder</h2>
// //           <nav className="space-y-2">
// //             <Link to="/" className="block hover:bg-blue-700 p-2 rounded">Dashboard</Link>
// //             <Link to="/faculty" className="block hover:bg-blue-700 p-2 rounded">Faculty</Link>
// //             <Link to="/class" className="block hover:bg-blue-700 p-2 rounded">Class</Link>
// //             <Link to="/lecture" className="block hover:bg-blue-700 p-2 rounded">Lecture</Link>
// //           </nav>
// //         </aside>

// //         <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
// //           <Routes>
// //             <Route path="/" element={<Dashboard />} />
// //             <Route path="/faculty" element={<Faculty />} />
// //             <Route path="/class" element={<ClassPage />} />
// //             <Route path="/lecture" element={<Lecture />} />
// //           </Routes>
// //         </main>
// //       </div>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Dashboard from "./pages/Dashborad"
// import Faculty from "./pages/Faculty";
// import ClassPage from "./pages/Class";
// import Lecture from "./pages/Lecture";
// import { Drawer, List, ListItemButton, ListItemText, Toolbar, Typography, Box } from "@mui/material";
// import SchoolIcon from "@mui/icons-material/School";

// function App() {
//   return (
//     <BrowserRouter>
//       <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f9fafb" }}>
//         <Drawer
//           variant="permanent"
//           sx={{
//             width: 240,
//             flexShrink: 0,
//             [`& .MuiDrawer-paper`]: {
//               width: 240,
//               boxSizing: "border-box",
//               bgcolor: "#1565c0",
//               color: "white",
//             },
//           }}
//         >
//           <Toolbar>
//             <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <SchoolIcon />
//               Lecture Reminder
//             </Typography>
//           </Toolbar>
//           <List>
//             <ListItemButton component={Link} to="/">
//               <ListItemText primary="Dashboard" />
//             </ListItemButton>
//             <ListItemButton component={Link} to="/faculty">
//               <ListItemText primary="Faculty" />
//             </ListItemButton>
//             <ListItemButton component={Link} to="/class">
//               <ListItemText primary="Class" />
//             </ListItemButton>
//             <ListItemButton component={Link} to="/lecture">
//               <ListItemText primary="Lecture" />
//             </ListItemButton>
//           </List>
//         </Drawer>

//         <Box component="main" sx={{ flexGrow: 1, p: 4, overflowY: "auto" }}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/faculty" element={<Faculty />} />
//             <Route path="/class" element={<ClassPage />} />
//             <Route path="/lecture" element={<Lecture />} />
//           </Routes>
//         </Box>
//       </Box>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Dashboard from "./pages/Dashborad";
// import Faculty from "./pages/Faculty";
// import ClassPage from "./pages/Class";
// import Lecture from "./pages/Lecture";
// import { Drawer, List, ListItemButton, ListItemText, Toolbar, Typography, Box } from "@mui/material";
// import SchoolIcon from "@mui/icons-material/School";
// import Footer from "./components/Footer"; // ✅ import footer

// function App() {
//   return (
//     <BrowserRouter>
//       <Box sx={{ display: "flex", height: "100vh", flexDirection: "column" }}>
//         <Box sx={{ display: "flex", flexGrow: 1, bgcolor: "#f9fafb" }}>
//           {/* Sidebar Navigation */}
//           <Drawer
//             variant="permanent"
//             sx={{
//               width: 240,
//               flexShrink: 0,
//               [`& .MuiDrawer-paper`]: {
//                 width: 240,
//                 boxSizing: "border-box",
//                 bgcolor: "#1565c0",
//                 color: "white",
//               },
//             }}
//           >
//             <Toolbar>
//               <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <SchoolIcon />
//                 Lecture Reminder
//               </Typography>
//             </Toolbar>
//             <List>
//               <ListItemButton component={Link} to="/">
//                 <ListItemText primary="Dashboard" />
//               </ListItemButton>
//               <ListItemButton component={Link} to="/faculty">
//                 <ListItemText primary="Faculty" />
//               </ListItemButton>
//               <ListItemButton component={Link} to="/class">
//                 <ListItemText primary="Class" />
//               </ListItemButton>
//               <ListItemButton component={Link} to="/lecture">
//                 <ListItemText primary="Lecture" />
//               </ListItemButton>
//             </List>
//           </Drawer>

//           {/* Main Content */}
//           <Box component="main" sx={{ flexGrow: 1, p: 4, overflowY: "auto" }}>
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/faculty" element={<Faculty />} />
//               <Route path="/class" element={<ClassPage />} />
//               <Route path="/lecture" element={<Lecture />} />
//             </Routes>
//           </Box>
//         </Box>

//         {/* ✅ Footer at the bottom of the page */}
//         <Footer />
//       </Box>
//     </BrowserRouter>
//   );
// }

// export default App;

// 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashborad";
import Faculty from "./pages/Faculty";
import ClassPage from "./pages/Class";
import Lecture from "./pages/Lecture";
import Footer from "./components/Footer";
import Login from "./pages/Login"; // ✅ Import Login Page
import { Drawer, List, ListItemButton, ListItemText, Toolbar, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check token on load
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) setIsLoggedIn(true);
  }, []);

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
  };

  // ✅ If not logged in, show only login page
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  // ✅ Main App with Sidebar + Footer (after login)
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: "border-box",
              bgcolor: "#1565c0",
              color: "white",
            },
          }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <SchoolIcon />
              Lecture Reminder
            </Typography>
          </Toolbar>
          <List>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton component={Link} to="/faculty">
              <ListItemText primary="Faculty" />
            </ListItemButton>
            <ListItemButton component={Link} to="/class">
              <ListItemText primary="Class" />
            </ListItemButton>
            <ListItemButton component={Link} to="/lecture">
              <ListItemText primary="Lecture" />
            </ListItemButton>

            {/* ✅ Logout button in Sidebar */}
            <ListItemButton onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </List>
        </Drawer>

        {/* Main content + footer */}
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          {/* Main scrollable content */}
          <Box component="main" sx={{ flex: 1, p: 4, bgcolor: "#f9fafb" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/class" element={<ClassPage />} />
              <Route path="/lecture" element={<Lecture />} />
            </Routes>
          </Box>

          {/* Footer */}
          <Footer />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
