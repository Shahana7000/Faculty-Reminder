// import { useEffect, useState } from "react";
// import API from "../api";

// export default function ClassPage() {
//   const [classes, setClasses] = useState([]);
//   const [form, setForm] = useState({ name: "", year: "", section: "" });

//   const fetchClasses = async () => {
//     const res = await API.get("/class");
//     setClasses(res.data);
//   };

//   const addClass = async (e) => {
//     e.preventDefault();
//     await API.post("/class", form);
//     setForm({ name: "", year: "", section: "" });
//     fetchClasses();
//   };

//   const deleteClass = async (id) => {
//     await API.delete(`/class/${id}`);
//     fetchClasses();
//   };

//   useEffect(() => {
//     fetchClasses();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Class Management</h2>

//       <form onSubmit={addClass} className="flex flex-wrap gap-2 mb-6">
//         <input placeholder="Name" className="border p-2" value={form.name}
//                onChange={(e) => setForm({ ...form, name: e.target.value })} />
//         <input placeholder="Year" className="border p-2" value={form.year}
//                onChange={(e) => setForm({ ...form, year: e.target.value })} />
//         <input placeholder="Section" className="border p-2" value={form.section}
//                onChange={(e) => setForm({ ...form, section: e.target.value })} />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Class</button>
//       </form>

//       <table className="w-full bg-white shadow rounded">
//         <thead>
//           <tr className="bg-blue-100 text-left">
//             <th className="p-2">Name</th>
//             <th>Year</th>
//             <th>Section</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {classes.map((c) => (
//             <tr key={c._id} className="border-t">
//               <td className="p-2">{c.name}</td>
//               <td>{c.year}</td>
//               <td>{c.section}</td>
//               <td>
//                 <button onClick={() => deleteClass(c._id)} className="text-red-500">Delete</button>
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
import AddIcon from "@mui/icons-material/Add";

export default function ClassPage() {
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({ name: "", year: "", section: "" });

  const fetchClasses = async () => {
    const res = await API.get("/class");
    setClasses(res.data);
  };

  const addClass = async (e) => {
    e.preventDefault();
    await API.post("/class", form);
    setForm({ name: "", year: "", section: "" });
    fetchClasses();
  };

  const deleteClass = async (id) => {
    await API.delete(`/class/${id}`);
    fetchClasses();
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Class Management
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <form onSubmit={addClass}>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <TextField
              label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <TextField
              label="Year"
              value={form.year}
              onChange={(e) => setForm({ ...form, year: e.target.value })}
            />
            <TextField
              label="Section"
              value={form.section}
              onChange={(e) => setForm({ ...form, section: e.target.value })}
            />
            <Button variant="contained" color="primary" type="submit" startIcon={<AddIcon />}>
              Add Class
            </Button>
          </Stack>
        </form>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              <TableCell sx={{ color: "white" }}>Year</TableCell>
              <TableCell sx={{ color: "white" }}>Section</TableCell>
              <TableCell sx={{ color: "white" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {classes.map((c) => (
              <TableRow key={c._id}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.year}</TableCell>
                <TableCell>{c.section}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => deleteClass(c._id)} startIcon={<DeleteIcon />}>
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
