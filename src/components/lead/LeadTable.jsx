import { Link } from "react-router-dom";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaPhoneAlt,
  FaEnvelope,
  FaUserTie,
  FaCalendarAlt,
} from "react-icons/fa";

function LeadTable({
  leads,
  onView,
  onDelete,
  currentPage,
  recordsPerPage,
}) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "New":
        return "success";
      case "Contacted":
        return "warning";
      case "Qualified":
        return "primary";
      case "Closed":
        return "danger";
      default:
        return "secondary";
    }
  };

  return (
    <div
      className="card border-0 shadow-lg"
      style={{
        borderRadius: "18px",
      }}
    >
      <div className="card-body p-0">

        <div className="table-responsive">

          <table className="table align-middle mb-0">

            <thead
              style={{
                background: "#0F172A",
                color: "#fff",
              }}
            >
              <tr>

                <th className="py-3 px-4">#</th>

                <th className="py-3">Lead</th>

                <th className="py-3">Contact</th>

                <th className="py-3">Status</th>

                <th className="py-3">Employee</th>

                <th className="py-3">Created</th>

                <th className="py-3 text-center">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>

              {leads.length > 0 ? (

                leads.map((lead, index) => (

                  <tr
                    key={lead.id}
                    style={{
                      transition: ".3s",
                    }}
                  >

                    <td className="px-4 fw-bold">
                      {(currentPage - 1) *
                        recordsPerPage +
                        index +
                        1}
                    </td>

                    <td>

                      <div className="d-flex align-items-center">

                        <div
                          style={{
                            width: 52,
                            height: 52,
                            borderRadius: "50%",
                            background:
                              "linear-gradient(135deg,#2563EB,#4F46E5)",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "700",
                            fontSize: "18px",
                          }}
                        >
                          {lead.name
                            ?.charAt(0)
                            .toUpperCase()}
                        </div>

                        <div className="ms-3">

                          <div className="fw-bold">
                            {lead.name}
                          </div>

                          <small className="text-secondary">
                            Lead ID :
                            {" "}
                            {lead.id}
                          </small>

                        </div>

                      </div>

                    </td>

                    <td>

                      <div className="mb-2 d-flex align-items-center">

                        <FaPhoneAlt className="text-success me-2" />

                        <small>
                          {lead.phone}
                        </small>

                      </div>

                      <div className="d-flex align-items-center">

                        <FaEnvelope className="text-primary me-2" />

                        <small>
                          {lead.email}
                        </small>

                      </div>

                    </td>
                                        <td>

                      <span
                        className={`badge rounded-pill px-3 py-2 bg-${getStatusBadge(
                          lead.status
                        )}`}
                        style={{
                          fontSize: "13px",
                          minWidth: "110px",
                        }}
                      >
                        {lead.status}
                      </span>

                    </td>

                    <td>

                      <div className="d-flex align-items-center">

                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            background: "#FEF3C7",
                            color: "#D97706",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FaUserTie />
                        </div>

                        <div className="ms-2">

                          <div className="fw-semibold">
                            {lead.employee}
                          </div>

                          <small className="text-muted">
                            Sales Executive
                          </small>

                        </div>

                      </div>

                    </td>

                    <td>

                      <div className="d-flex align-items-center">

                        <FaCalendarAlt
                          className="text-danger me-2"
                        />

                        {lead.createdDate}

                      </div>

                    </td>

                    <td>

                      <div className="d-flex justify-content-center gap-2">

                        <button
                          className="btn btn-light border shadow-sm rounded-circle"
                          style={{
                            width: 42,
                            height: 42,
                          }}
                          title="View"
                          onClick={() => onView(lead)}
                        >
                          <FaEye className="text-primary" />
                        </button>

                        <Link
                          to={`/edit/${lead.id}`}
                          className="btn btn-light border shadow-sm rounded-circle"
                          style={{
                            width: 42,
                            height: 42,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          title="Edit"
                        >
                          <FaEdit className="text-warning" />
                        </Link>

                        <button
                          className="btn btn-light border shadow-sm rounded-circle"
                          style={{
                            width: 42,
                            height: 42,
                          }}
                          title="Delete"
                          onClick={() => onDelete(lead.id)}
                        >
                          <FaTrash className="text-danger" />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="7"
                    className="text-center py-5"
                  >

                    <h5 className="fw-bold text-secondary">
                      No Leads Found
                    </h5>

                    <small className="text-muted">
                      Try changing your search or filters.
                    </small>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default LeadTable;