import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LeadList from "./pages/LeadList";
import LeadDetails from "./pages/LeadDetails";
import EditLead from "./pages/EditLead";
import AddLead from "./pages/AddLead";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LeadList />} />
        <Route path="/lead/:id" element={<LeadDetails />} />
        <Route path="/edit/:id" element={<EditLead />} />
        <Route path="/add-lead" element={<AddLead />} />
      </Routes>
    </>
  );
}

export default App;