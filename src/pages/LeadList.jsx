import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import DashboardHeader from "../components/layout/DashboardHeader";
import SearchBar from "../components/lead/SearchBar";
import FilterBar from "../components/lead/FilterBar";
import LeadTable from "../components/lead/LeadTable";
import Pagination from "../components/lead/Pagination";
import LeadModal from "../components/lead/LeadModal";
import { getLeads } from "../services/leadService";
import { Link } from "react-router-dom";
import { FaEye, FaEdit } from "react-icons/fa";
import DashboardCards from "../components/dashboard/DashboardCards";
import { toast } from "react-toastify";
import LeadAnalytics from "../components/LeadAnalytics";

function LeadList() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [employee, setEmployee] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const [showModal, setShowModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

 useEffect(() => {
  const storedLeads = localStorage.getItem("leads");

  if (storedLeads) {
    setLeads(JSON.parse(storedLeads));
    setLoading(false);
  } else {
    fetchLeads();
  }
}, []);

  const fetchLeads = async () => {
    try {
      setLoading(true);

      const data = await getLeads();

      const formattedData = data.map((lead) => ({
        ...lead,
        status: "New",
        employee: "John",
        createdDate: new Date().toLocaleDateString(),
      }));

      const expandedData = Array.from({ length: 5 }, (_, i) =>
  formattedData.map((lead) => ({
    ...lead,
    id: lead.id + i * formattedData.length,
    name: `${lead.name} ${i + 1}`,
    phone: `98765${String(10000 + lead.id + i * 10)}`,
    email: `lead${lead.id + i * 10}@gmail.com`,
    employee: ["John", "David", "Sarah", "Michael", "Priya"][
      (lead.id + i) % 5
    ],
    status: ["New", "Contacted", "Qualified", "Closed"][
      (lead.id + i) % 4
    ],
    createdDate: new Date(
      2026,
      (lead.id + i) % 12,
      ((lead.id * 3 + i) % 28) + 1
    ).toLocaleDateString(),
  }))
).flat();

    setLeads(expandedData);

    localStorage.setItem(
      "leads",
      JSON.stringify(expandedData)
    );
    } catch (err) {
      setError("Failed to fetch leads.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this lead?"
  );

  if (!confirmDelete) return;

  const updatedLeads = leads.filter(
    (lead) => lead.id !== id
  );

  setLeads(updatedLeads);

  localStorage.setItem(
    "leads",
    JSON.stringify(updatedLeads)
  );

  toast.success("Lead Deleted Successfully");
};

  const resetFilters = () => {
    setSearch("");
    setStatus("");
    setEmployee("");
    setCurrentPage(1);
  };

const filteredLeads = leads.filter((lead) => {
  const matchesSearch =
    lead.name.toLowerCase().includes(search.toLowerCase()) ||
    lead.phone.toLowerCase().includes(search.toLowerCase()) ||
    lead.email.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    status === "" || lead.status === status;

  const matchesEmployee =
    employee === "" || lead.employee === employee;

  let matchesDate = true;

  if (fromDate && toDate) {
    const leadDate = new Date(lead.createdDate);
    const from = new Date(fromDate);
    const to = new Date(toDate);

    matchesDate =
      leadDate >= from &&
      leadDate <= to;
  }

  return (
    matchesSearch &&
    matchesStatus &&
    matchesEmployee &&
    matchesDate
  );
});

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = filteredLeads.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const totalPages = Math.ceil(
    filteredLeads.length / recordsPerPage
  );

  const handleView = (lead) => {
    setSelectedLead(lead);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedLead(null);
    setShowModal(false);
  };

  const headers = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Phone", key: "phone" },
  { label: "Email", key: "email" },
  { label: "Status", key: "status" },
  { label: "Employee", key: "employee" },
  { label: "Created Date", key: "createdDate" },
];

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container-fluid text-center mt-5">
          <div className="spinner-border text-primary"></div>
          <p className="mt-3">Loading Leads...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="container-fluid mt-5">
          <div className="alert alert-danger">
            {error}
          </div>
        </div>
      </>
    );
  }

  return (
    <>


      <div className="container-fluid mt-4">

       <div className="d-flex justify-content-between align-items-center mb-4">

            <DashboardHeader leads={filteredLeads} />

          </div>
        <DashboardCards leads={filteredLeads} />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <FilterBar
        status={status}
        setStatus={setStatus}
        employee={employee}
        setEmployee={setEmployee}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
        resetFilters={resetFilters}
      />

        <LeadTable
                leads={currentRecords}
                onView={handleView}
                 onDelete={handleDelete}
                currentPage={currentPage}
                recordsPerPage={recordsPerPage}
                />

        <Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  setCurrentPage={setCurrentPage}
  recordsPerPage={recordsPerPage}
  setRecordsPerPage={setRecordsPerPage}
  totalRecords={filteredLeads.length}
/>

        <LeadModal
          show={showModal}
          lead={selectedLead}
          onClose={handleClose}
        />

        <LeadAnalytics />

      </div>
    </>
  );
}

export default LeadList;