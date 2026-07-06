import { FaPlus, FaCalendarAlt, FaDownload } from "react-icons/fa";
import { CSVLink } from "react-csv";
import { useNavigate } from "react-router-dom";

function DashboardHeader({ leads }) {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const headers = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Phone", key: "phone" },
    { label: "Email", key: "email" },
    { label: "Status", key: "status" },
    { label: "Employee", key: "employee" },
    { label: "Created Date", key: "createdDate" },
  ];

  return (
    <div
      className="card border-0 shadow-lg mb-4"
      style={{
        borderRadius: "22px",
        background: "linear-gradient(135deg,#2563eb,#1d4ed8,#1e3a8a)",
        overflow: "hidden",
      }}
    >
      <div className="card-body p-4 p-lg-5">

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">

          {/* Left Side */}
          <div>
            <h1
              className="fw-bold text-white mb-2"
              style={{ fontSize: "2.2rem" }}
            >
              👋 Welcome Back, Admin
            </h1>

            <p
              className="mb-4"
              style={{
                color: "#dbeafe",
                fontSize: "18px",
                maxWidth: "600px",
              }}
            >
              Manage your leads efficiently, track customer
              progress and improve productivity with your
              ERP Lead Management System.
            </p>

            <div
              className="d-inline-flex align-items-center px-4 py-2"
              style={{
                background: "rgba(255,255,255,.15)",
                backdropFilter: "blur(10px)",
                borderRadius: "50px",
                color: "#fff",
                fontWeight: "500",
              }}
            >
              <FaCalendarAlt className="me-2" />
              {today}
            </div>
          </div>

          {/* Right Side */}
          <div className="mt-4 mt-lg-0 d-flex gap-3">

            <button
              className="btn btn-light btn-lg px-4 shadow"
              style={{
                borderRadius: "14px",
                fontWeight: "600",
              }}
              onClick={() => navigate("/add-lead")}
            >
              <FaPlus className="me-2" />
              Add Lead
            </button>

            <CSVLink
              data={leads}
              headers={headers}
              filename="ERP_Leads.csv"
              className="btn btn-success btn-lg px-4 shadow text-white"
              style={{
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              <FaDownload className="me-2" />
              Export CSV
            </CSVLink>

          </div>

        </div>

      </div>
    </div>
  );
}

export default DashboardHeader;