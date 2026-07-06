function LeadModal({ show, lead, onClose }) {
  if (!show || !lead) return null;

  return (
    <>
      <div
        className="modal fade show d-block"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-lg">

          <div className="modal-content">

            <div className="modal-header">

              <h5 className="modal-title">
                Lead Details
              </h5>

              <button
                className="btn-close"
                onClick={onClose}
              ></button>

            </div>

            <div className="modal-body">

              <div className="row">

                <div className="col-md-6 mb-3">
                  <strong>Name</strong>
                  <p>{lead.name}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Mobile</strong>
                  <p>{lead.phone}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Email</strong>
                  <p>{lead.email}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Address</strong>
                  <p>{lead.address?.city}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Course Interested</strong>
                  <p>React Full Stack</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Lead Source</strong>
                  <p>Website</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Assigned Employee</strong>
                  <p>{lead.employee}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Status</strong>
                  <p>{lead.status}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Created Date</strong>
                  <p>{lead.createdDate}</p>
                </div>

              </div>

            </div>

            <div className="modal-footer">

              <button
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default LeadModal;