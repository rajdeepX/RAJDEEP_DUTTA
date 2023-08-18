import { Route, Routes } from "react-router-dom";
import "./App.css";

import Notes from "./pages/Notes";
import Navbar from "./components/Navbar";
import MusicOverview from "./pages/MusicOverview";
import MusicClasses from "./pages/MusicClasses";
import MusicGrades from "./pages/MusicGrades";
import MusicTeachers from "./pages/MusicTeachers";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MusicOverview />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/class" element={<MusicClasses />} />
        <Route path="/grade" element={<MusicGrades />} />
        <Route path="/teacher" element={<MusicTeachers />} />
      </Routes>
    </>
  );
}

export default App;
