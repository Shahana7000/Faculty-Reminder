// import { useEffect, useState } from "react";
// import API from "../api";

// export default function Lecture() {
//   const [lectures, setLectures] = useState([]);
//   const [faculty, setFaculty] = useState([]);
//   const [classes, setClasses] = useState([]);
//   const [form, setForm] = useState({
//     facultyId: "",
//     classId: "",
//     subject: "",
//     day: "",
//     time: "",
//   });

//   const fetchData = async () => {
//     const [lecRes, facRes, classRes] = await Promise.all([
//       API.get("/lecture"),
//       API.get("/faculty"),
//       API.get("/class"),
//     ]);
//     setLectures(lecRes.data);
//     setFaculty(facRes.data);
//     setClasses(classRes.data);
//   };

//   const addLecture = async (e) => {
//     e.preventDefault();
//     await API.post("/lecture", form);
//     setForm({ facultyId: "", classId: "", subject: "", day: "", time: "" });
//     fetchData();
//   };

//   const deleteLecture = async (id) => {
//     await API.delete(`/lecture/${id}`);
//     fetchData();
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Lecture Management</h2>

//       <form onSubmit={addLecture} className="flex flex-wrap gap-2 mb-6">
//         <select className="border p-2" value={form.facultyId}
//                 onChange={(e) => setForm({ ...form, facultyId: e.target.value })}>
//           <option value="">Select Faculty</option>
//           {faculty.map((f) => (
//             <option key={f._id} value={f._id}>{f.name}</option>
//           ))}
//         </select>

//         <select className="border p-2" value={form.classId}
//                 onChange={(e) => setForm({ ...form, classId: e.target.value })}>
//           <option value="">Select Class</option>
//           {classes.map((c) => (
//             <option key={c._id} value={c._id}>{c.name} ({c.section})</option>
//           ))}
//         </select>

//         <input placeholder="Subject" className="border p-2"
//                value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />

//         <select className="border p-2" value={form.day}
//                 onChange={(e) => setForm({ ...form, day: e.target.value })}>
//           <option value="">Select Day</option>
//           {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((d) => (
//             <option key={d} value={d}>{d}</option>
//           ))}
//         </select>

//         <input type="time" className="border p-2" lang="en-GB"
//                value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />

//         <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Lecture</button>
//       </form>

//       <table className="w-full bg-white shadow rounded">
//         <thead>
//           <tr className="bg-blue-100 text-left">
//             <th className="p-2">Faculty</th>
//             <th>Class</th>
//             <th>Subject</th>
//             <th>Day</th>
//             <th>Time</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {lectures.map((l) => (
//             <tr key={l._id} className="border-t">
//               <td className="p-2">{l.facultyId?.name}</td>
//               <td>{l.classId?.name}</td>
//               <td>{l.subject}</td>
//               <td>{l.day}</td>
//               <td>{l.time}</td>
//               <td>
//                 <button onClick={() => deleteLecture(l._id)} className="text-red-500">Delete</button>
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
  Select,
  MenuItem,
  InputLabel,
  FormControl,
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
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

export default function Lecture() {
  const [lectures, setLectures] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [classes, setClasses] = useState([]);
  const [form, setForm] = useState({
    facultyId: "",
    classId: "",
    subject: "",
    day: "",
    time: "",
  });

  const fetchData = async () => {
    const [lecRes, facRes, classRes] = await Promise.all([
      API.get("/lecture"),
      API.get("/faculty"),
      API.get("/class"),
    ]);
    setLectures(lecRes.data);
    setFaculty(facRes.data);
    setClasses(classRes.data);
  };

  const addLecture = async (e) => {
    e.preventDefault();
    await API.post("/lecture", form);
    setForm({ facultyId: "", classId: "", subject: "", day: "", time: "" });
    fetchData();
  };

  const deleteLecture = async (id) => {
    await API.delete(`/lecture/${id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Lecture Management
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <form onSubmit={addLecture}>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <FormControl sx={{ minWidth: 180 }}>
              <InputLabel>Faculty</InputLabel>
              <Select
                value={form.facultyId}
                label="Faculty"
                onChange={(e) => setForm({ ...form, facultyId: e.target.value })}
              >
                <MenuItem value="">Select Faculty</MenuItem>
                {faculty.map((f) => (
                  <MenuItem key={f._id} value={f._id}>
                    {f.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 180 }}>
              <InputLabel>Class</InputLabel>
              <Select
                value={form.classId}
                label="Class"
                onChange={(e) => setForm({ ...form, classId: e.target.value })}
              >
                <MenuItem value="">Select Class</MenuItem>
                {classes.map((c) => (
                  <MenuItem key={c._id} value={c._id}>
                    {c.name} ({c.section})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />

            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel>Day</InputLabel>
              <Select
                value={form.day}
                label="Day"
                onChange={(e) => setForm({ ...form, day: e.target.value })}
              >
                <MenuItem value="">Select Day</MenuItem>
                {days.map((d) => (
                  <MenuItem key={d} value={d}>
                    {d}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              type="time"
              label="Time"
              InputLabelProps={{ shrink: true }}
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
            />

            <Button variant="contained" color="primary" type="submit" startIcon={<LibraryAddIcon />}>
              Add Lecture
            </Button>
          </Stack>
        </form>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>Faculty</TableCell>
              <TableCell sx={{ color: "white" }}>Class</TableCell>
              <TableCell sx={{ color: "white" }}>Subject</TableCell>
              <TableCell sx={{ color: "white" }}>Day</TableCell>
              <TableCell sx={{ color: "white" }}>Time</TableCell>
              <TableCell sx={{ color: "white" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lectures.map((l) => (
              <TableRow key={l._id}>
                <TableCell>{l.facultyId?.name}</TableCell>
                <TableCell>{l.classId?.name}</TableCell>
                <TableCell>{l.subject}</TableCell>
                <TableCell>{l.day}</TableCell>
                <TableCell>{l.time}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => deleteLecture(l._id)} startIcon={<DeleteIcon />}>
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
