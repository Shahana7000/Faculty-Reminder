// import React, { useState } from "react";
// import axios from "axios";

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", {
//         email,
//         password,
//       });
//       if (res.data.success) {
//         localStorage.setItem("adminToken", res.data.token);
//         onLogin();
//       }
//     } catch (err) {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-2xl shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block mb-2">Email</label>
//           <input
//             type="email"
//             className="border p-2 w-full rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="admin@college.com"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block mb-2">Password</label>
//           <input
//             type="password"
//             className="border p-2 w-full rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="admin123"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Box,
//   Button,
//   Container,
//   Paper,
//   TextField,
//   Typography,
//   Alert,
//   Avatar,
// } from "@mui/material";
// import LockIcon from "@mui/icons-material/Lock";

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", {
//         email,
//         password,
//       });
//       if (res.data.success) {
//         localStorage.setItem("adminToken", res.data.token);
//         onLogin();
//       }
//     } catch (err) {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         bgcolor: "#f5f6fa",
//       }}
//     >
//       <Paper
//         elevation={6}
//         sx={{
//           p: 5,
//           borderRadius: 3,
//           width: "100%",
//           textAlign: "center",
//         }}
//       >
//         <Avatar
//           sx={{
//             bgcolor: "#1976d2",
//             mx: "auto",
//             mb: 2,
//             width: 56,
//             height: 56,
//           }}
//         >
//           <LockIcon fontSize="large" />
//         </Avatar>

//         <Typography variant="h5" fontWeight="bold" mb={3}>
//           Admin Login
//         </Typography>

//         {error && (
//           <Alert severity="error" sx={{ mb: 3 }}>
//             {error}
//           </Alert>
//         )}

//         <Box component="form" onSubmit={handleLogin}>
//           <TextField
//             label="Email"
//             type="email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="admin@college.com"
//           />
//           <TextField
//             label="Password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="admin123"
//           />

//           <Button
//             variant="contained"
//             color="primary"
//             type="submit"
//             fullWidth
//             size="large"
//             sx={{
//               mt: 3,
//               py: 1.5,
//               fontWeight: "bold",
//               borderRadius: 2,
//             }}
//           >
//             Login
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // ✅ Static credentials
//       if (email === "admin@college.com" && password === "admin123") {
//         localStorage.setItem("adminToken", "securetoken123");
//         onLogin();
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (err) {
//       setError("Something went wrong");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-2xl shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block mb-2">Email</label>
//           <input
//             type="email"
//             className="border p-2 w-full rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="admin@college.com"
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block mb-2">Password</label>
//           <input
//             type="password"
//             className="border p-2 w-full rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="admin123"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import {
//   Container,
//   Paper,
//   TextField,
//   Button,
//   Typography,
//   Avatar,
//   Alert,
//   Box,
// } from "@mui/material";
// import LockIcon from "@mui/icons-material/Lock";

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === "admin@college.com" && password === "admin123") {
//       localStorage.setItem("adminToken", "securetoken123");
//       onLogin();
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       className="d-flex align-items-center justify-content-center vh-100"
//       sx={{ bgcolor: "#f4f6f8" }}
//     >
//       <Paper elevation={6} sx={{ p: 5, borderRadius: 3, width: "100%" }}>
//         <Box textAlign="center" mb={3}>
//           <Avatar
//             sx={{
//               bgcolor: "#1976d2",
//               mx: "auto",
//               mb: 2,
//               width: 56,
//               height: 56,
//             }}
//           >
//             <LockIcon fontSize="large" />
//           </Avatar>
//           <Typography variant="h5" fontWeight="bold">
//             Admin Login
//           </Typography>
//         </Box>

//         {error && (
//           <Alert severity="error" sx={{ mb: 3 }}>
//             {error}
//           </Alert>
//         )}

//         <Box component="form" onSubmit={handleLogin}>
//           <TextField
//             label="Email"
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="admin@college.com"
//           />
//           <TextField
//             label="Password"
//             type="password"
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="admin123"
//           />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{
//               mt: 3,
//               py: 1.4,
//               fontWeight: "bold",
//               borderRadius: 2,
//               textTransform: "none",
//             }}
//           >
//             Login
//           </Button>
//         </Box>
//       </Paper>

//     </Container>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import {
//   Container,
//   Paper,
//   TextField,
//   Button,
//   Typography,
//   Avatar,
//   Alert,
//   Box,
// } from "@mui/material";
// import LockIcon from "@mui/icons-material/Lock";
// import Footer from "../components/Footer";

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === "admin@college.com" && password === "admin123") {
//       localStorage.setItem("adminToken", "securetoken123");
//       onLogin();
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <Container
//       maxWidth="sm"
//       sx={{
//         height: "100vh", // full viewport height
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         bgcolor: "#f4f6f8",
//       }}
//     >
//       <Paper
//         elevation={6}
//         sx={{
//           p: 5,
//           borderRadius: 3,
//           width: "100%",
//           maxWidth: 420, // keeps form size nice
//         }}
//       >
//         <Box textAlign="center" mb={3}>
//           <Avatar
//             sx={{
//               bgcolor: "#1976d2",
//               mx: "auto",
//               mb: 2,
//               width: 56,
//               height: 56,
//             }}
//           >
//             <LockIcon fontSize="large" />
//           </Avatar>
//           <Typography variant="h5" fontWeight="bold">
//             Admin Login
//           </Typography>
//         </Box>

//         {error && (
//           <Alert severity="error" sx={{ mb: 3 }}>
//             {error}
//           </Alert>
//         )}

//         <Box component="form" onSubmit={handleLogin}>
//           <TextField
//             label="Email"
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="admin@college.com"
//           />
//           <TextField
//             label="Password"
//             type="password"
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="admin123"
//           />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             sx={{
//               mt: 3,
//               py: 1.4,
//               fontWeight: "bold",
//               borderRadius: 2,
//               textTransform: "none",
//             }}
//           >
//             Login
//           </Button>
//           <Footer />
//         </Box>
//       </Paper>
//     </Container>
//   );
// };

// export default Login;

import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
  Alert,
  Box,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Footer from "../components/Footer";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@college.com" && password === "admin123") {
      localStorage.setItem("adminToken", "securetoken123");
      onLogin();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "#f4f6f8",
      }}
    >
      {/* Centered Login Box */}
      <Container
        maxWidth="sm"
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 5,
            borderRadius: 3,
            width: "100%",
            maxWidth: 420,
          }}
        >
          <Box textAlign="center" mb={3}>
            <Avatar
              sx={{
                bgcolor: "#1976d2",
                mx: "auto",
                mb: 2,
                width: 56,
                height: 56,
              }}
            >
              <LockIcon fontSize="large" />
            </Avatar>
            <Typography variant="h5" fontWeight="bold">
              Admin Login
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleLogin}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@college.com"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="admin123"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                py: 1.4,
                fontWeight: "bold",
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Login;
