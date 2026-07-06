import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Notes from "../components/lead/Notes";

import {
  FaArrowLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaUserTie,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaGlobe,
  FaEdit,
} from "react-icons/fa";

function LeadDetails() {
  const { id } = useParams();

  const [lead, setLead] = useState(null);

  useEffect(() => {
    const leads =
      JSON.parse(localStorage.getItem("leads")) || [];

    const selectedLead = leads.find(
      (item) => item.id === Number(id)
    );

    setLead(selectedLead);
  }, [id]);

  if (!lead) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">
          Lead not found.
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <Link
          to="/"
          className="btn btn-outline-primary"
        >
          <FaArrowLeft className="me-2" />
          Back
        </Link>

        <Link
          to={`/edit/${lead.id}`}
          className="btn btn-warning"
        >
          <FaEdit className="me-2" />
          Edit Lead
        </Link>

      </div>

      <div className="row">

        {/* Left Card */}

        <div className="col-lg-4">

          <div
            className="card border-0 shadow-lg"
            style={{
              borderRadius: "20px",
            }}
          >

            <div className="card-body text-center">

              <div
                style={{
                  width: 110,
                  height: 110,
                  margin: "auto",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#2563EB,#4F46E5)",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                {lead.name.charAt(0)}
              </div>

              <h3 className="mt-3 fw-bold">
                {lead.name}
              </h3>

              <p className="text-muted">
                Lead ID : {lead.id}
              </p>

              <span
                className={`badge bg-${
                  lead.status === "New"
                    ? "success"
                    : lead.status === "Contacted"
                    ? "warning"
                    : lead.status === "Qualified"
                    ? "primary"
                    : "danger"
                } px-4 py-2`}
              >
                {lead.status}
              </span>

            </div>

          </div>

        </div>

        {/* Right Card */}

        <div className="col-lg-8">

          <div
            className="card border-0 shadow-lg"
            style={{
              borderRadius: "20px",
            }}
          >

            <div className="card-body">

              <h4 className="fw-bold mb-4">
                Lead Information
              </h4>

              <div className="row">

                <div className="col-md-6 mb-4">

                  <div className="d-flex">

                    <FaPhoneAlt
                      className="text-success me-3 mt-1"
                    />

                    <div>

                      <small className="text-muted">
                        Mobile
                      </small>

                      <h6>{lead.phone}</h6>

                    </div>

                  </div>

                </div>

                <div className="col-md-6 mb-4">

                  <div className="d-flex">

                    <FaEnvelope
                      className="text-primary me-3 mt-1"
                    />

                    <div>

                      <small className="text-muted">
                        Email
                      </small>

                      <h6>{lead.email}</h6>

                    </div>

                  </div>

                </div>
                                <div className="col-md-6 mb-4">

                  <div className="d-flex">

                    <FaMapMarkerAlt
                      className="text-danger me-3 mt-1"
                    />

                    <div>

                      <small className="text-muted">
                        Address
                      </small>

                      <h6>
                        Coimbatore, Tamil Nadu
                      </h6>

                    </div>

                  </div>

                </div>

                <div className="col-md-6 mb-4">

                  <div className="d-flex">

                    <FaGraduationCap
                      className="text-warning me-3 mt-1"
                    />

                    <div>

                      <small className="text-muted">
                        Course Interested
                      </small>

                      <h6>
                        Full Stack Development
                      </h6>

                    </div>

                  </div>

                </div>

                <div className="col-md-6 mb-4">

                  <div className="d-flex">

                    <FaGlobe
                      className="text-primary me-3 mt-1"
                    />

                    <div>

                      <small className="text-muted">
                        Lead Source
                      </small>

                      <h6>Website</h6>

                    </div>

                  </div>

                </div>

                <div className="col-md-6 mb-4">

                  <div className="d-flex">

                    <FaUserTie
                      className="text-success me-3 mt-1"
                    />

                    <div>

                      <small className="text-muted">
                        Assigned Employee
                      </small>

                      <h6>{lead.employee}</h6>

                    </div>

                  </div>

                </div>

                <div className="col-md-6 mb-3">

                  <div className="d-flex">

                    <FaCalendarAlt
                      className="text-info me-3 mt-1"
                    />

                    <div>

                      <small className="text-muted">
                        Created Date
                      </small>

                      <h6>{lead.createdDate}</h6>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        {/* Notes Section */}
          <Notes leadId={lead.id} />
                  </div>

      </div>

    </div>
  );
}

export default LeadDetails;