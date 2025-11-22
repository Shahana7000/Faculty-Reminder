// import { useEffect, useState } from "react";
// import API from "../api";

// export default function Faculty() {
//   const [faculty, setFaculty] = useState([]);
//   const [form, setForm] = useState({ name: "", email: "", phone: "", department: "" });

//   const fetchFaculty = async () => {
//     const res = await API.get("/faculty");
//     setFaculty(res.data);
//   };

//   const addFaculty = async (e) => {
//     e.preventDefault();
//     await API.post("/faculty", form);
//     setForm({ name: "", email: "", phone: "", department: "" });
//     fetchFaculty();
//   };

//   const deleteFaculty = async (id) => {
//     await API.delete(`/faculty/${id}`);
//     fetchFaculty();
//   };

//   useEffect(() => { fetchFaculty(); }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Faculty Management</h2>

//       <form onSubmit={addFaculty} className="flex flex-wrap gap-2 mb-6">
//         <input placeholder="Name" className="border p-2" value={form.name}
//                onChange={(e) => setForm({ ...form, name: e.target.value })} />
//         <input placeholder="Email" className="border p-2" value={form.email}
//                onChange={(e) => setForm({ ...form, email: e.target.value })} />
//         <input placeholder="Phone" className="border p-2" value={form.phone}
//                onChange={(e) => setForm({ ...form, phone: e.target.value })} />
//         <input placeholder="Department" className="border p-2" value={form.department}
//                onChange={(e) => setForm({ ...form, department: e.target.value })} />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Faculty</button>
//       </form>

//       <table className="w-full bg-white shadow rounded">
//         <thead>
//           <tr className="bg-blue-100 text-left">
//             <th className="p-2">Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Department</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {faculty.map((f) => (
//             <tr key={f._id} className="border-t">
//               <td className="p-2">{f.name}</td>
//               <td>{f.email}</td>
//               <td>{f.phone}</td>
//               <td>{f.department}</td>
//               <td>
//                 <button onClick={() => deleteFaculty(f._id)} className="text-red-500">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import API from "../api";
import {
  Button,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

export default function Faculty() {
  const [faculty, setFaculty] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", department: "" });

  const fetchFaculty = async () => {
    const res = await API.get("/faculty");
    setFaculty(res.data);
  };

  const addFaculty = async (e) => {
    e.preventDefault();
    await API.post("/faculty", form);
    setForm({ name: "", email: "", phone: "", department: "" });
    fetchFaculty();
  };

  const deleteFaculty = async (id) => {
    await API.delete(`/faculty/${id}`);
    fetchFaculty();
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  return (
    <div>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Faculty Management
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <form onSubmit={addFaculty}>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <TextField
              label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <TextField
              label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <TextField
              label="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <TextField
              label="Department"
              value={form.department}
              onChange={(e) => setForm({ ...form, department: e.target.value })}
            />
            <Button variant="contained" color="primary" type="submit" startIcon={<PersonAddAltIcon />}>
              Add Faculty
            </Button>
          </Stack>
        </form>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              <TableCell sx={{ color: "white" }}>Email</TableCell>
              <TableCell sx={{ color: "white" }}>Phone</TableCell>
              <TableCell sx={{ color: "white" }}>Department</TableCell>
              <TableCell sx={{ color: "white" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faculty.map((f) => (
              <TableRow key={f._id}>
                <TableCell>{f.name}</TableCell>
                <TableCell>{f.email}</TableCell>
                <TableCell>{f.phone}</TableCell>
                <TableCell>{f.department}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => deleteFaculty(f._id)} startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
