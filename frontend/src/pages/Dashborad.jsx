// import { useEffect, useState } from "react";
// import API from "../api";

// export default function Dashboard() {
//   const [stats, setStats] = useState({ faculty: 0, classes: 0, lectures: 0 });

//   const fetchStats = async () => {
//     const [f, c, l] = await Promise.all([
//       API.get("/faculty"),
//       API.get("/class"),
//       API.get("/lecture"),
//     ]);
//     setStats({ faculty: f.data.length, classes: c.data.length, lectures: l.data.length });
//   };

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
//       <div className="grid grid-cols-3 gap-6">
//         <div className="bg-blue-100 p-6 rounded shadow">
//           <h3 className="text-lg font-semibold">Total Faculty</h3>
//           <p className="text-3xl font-bold text-blue-700">{stats.faculty}</p>
//         </div>
//         <div className="bg-green-100 p-6 rounded shadow">
//           <h3 className="text-lg font-semibold">Total Classes</h3>
//           <p className="text-3xl font-bold text-green-700">{stats.classes}</p>
//         </div>
//         <div className="bg-yellow-100 p-6 rounded shadow">
//           <h3 className="text-lg font-semibold">Total Lectures</h3>
//           <p className="text-3xl font-bold text-yellow-700">{stats.lectures}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import API from "../api";
// import { Grid, Paper, Typography } from "@mui/material";

// export default function Dashboard() {
//   const [stats, setStats] = useState({ faculty: 0, classes: 0, lectures: 0 });

//   const fetchStats = async () => {
//     const [f, c, l] = await Promise.all([
//       API.get("/faculty"),
//       API.get("/class"),
//       API.get("/lecture"),
//     ]);
//     setStats({ faculty: f.data.length, classes: c.data.length, lectures: l.data.length });
//   };

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   const cardData = [
//     { label: "Total Faculty", value: stats.faculty, color: "#1976d2" },
//     { label: "Total Classes", value: stats.classes, color: "#2e7d32" },
//     { label: "Total Lectures", value: stats.lectures, color: "#f9a825" },
//   ];

//   return (
//     <div>
//       <Typography variant="h5" fontWeight="bold" gutterBottom>
//         Admin Dashboard
//       </Typography>

//       <Grid container spacing={3}>
//         {cardData.map((item) => (
//           <Grid item xs={12} sm={6} md={4} key={item.label}>
//             <Paper sx={{ p: 3, borderLeft: `6px solid ${item.color}`, boxShadow: 3 }}>
//               <Typography variant="subtitle1" color="text.secondary">
//                 {item.label}
//               </Typography>
//               <Typography variant="h4" fontWeight="bold" color={item.color}>
//                 {item.value}
//               </Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import API from "../api";
import { Grid, Paper, Typography, Button, Box } from "@mui/material";
import Login from "./Login"; // 👈 Import the login component

export default function Dashboard() {
  const [stats, setStats] = useState({ faculty: 0, classes: 0, lectures: 0 });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check if admin token exists
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) setIsLoggedIn(true);
  }, []);

  // ✅ Fetch Dashboard Data
  const fetchStats = async () => {
    try {
      const [f, c, l] = await Promise.all([
        API.get("/faculty"),
        API.get("/class"),
        API.get("/lecture"),
      ]);
      setStats({
        faculty: f.data.length,
        classes: c.data.length,
        lectures: l.data.length,
      });
    } catch (err) {
      console.error("Error fetching stats:", err);
    }
  };

  useEffect(() => {
    if (isLoggedIn) fetchStats();
  }, [isLoggedIn]);

  // ✅ Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
  };

  const cardData = [
    { label: "Total Faculty", value: stats.faculty, color: "#1976d2" },
    { label: "Total Classes", value: stats.classes, color: "#2e7d32" },
    { label: "Total Lectures", value: stats.lectures, color: "#f9a825" },
  ];

  // ✅ If not logged in, show Login page
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  // ✅ Admin Dashboard UI
  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">
          Admin Dashboard
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      <Grid container spacing={3}>
        {cardData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.label}>
            <Paper sx={{ p: 3, borderLeft: `6px solid ${item.color}`, boxShadow: 3 }}>
              <Typography variant="subtitle1" color="text.secondary">
                {item.label}
              </Typography>
              <Typography variant="h4" fontWeight="bold" color={item.color}>
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
