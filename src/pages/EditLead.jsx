import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaSave, FaArrowLeft, FaUserEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

function EditLead() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    status: "New",
    employee: "John",
  });

  useEffect(() => {
    const leads = JSON.parse(localStorage.getItem("leads")) || [];

    const lead = leads.find((item) => item.id === Number(id));

    if (lead) {
      setFormData(lead);
    } else {
      alert("Lead not found");
      navigate("/");
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const leads = JSON.parse(localStorage.getItem("leads")) || [];

    const updatedLeads = leads.map((lead) =>
      lead.id === Number(id)
        ? {
            ...lead,
            ...formData,
          }
        : lead
    );

    localStorage.setItem("leads", JSON.stringify(updatedLeads));

    toast.success("Lead Updated Successfully", {
      icon: <FaCheckCircle />,
    });

    navigate("/");
  };

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card shadow-lg border-0 rounded-4">

            <div className="card-header bg-primary text-white py-3 rounded-top-4">

              <h3 className="mb-0">
                <FaUserEdit className="me-2" />
                Edit Lead
              </h3>

            </div>

            <div className="card-body p-4">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Phone
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Status
                  </label>

                  <select
                    className="form-select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Employee
                  </label>

                  <select
                    className="form-select"
                    name="employee"
                    value={formData.employee}
                    onChange={handleChange}
                  >
                    <option value="John">John</option>
                    <option value="David">David</option>
                    <option value="Sarah">Sarah</option>
                    <option value="Michael">Michael</option>
                    <option value="Priya">Priya</option>
                  </select>
                </div>

                <div className="d-flex gap-2">

                  <button
                    type="submit"
                    className="btn btn-success px-4"
                  >
                    <FaSave className="me-2" />
                    Update Lead
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary px-4"
                    onClick={() => navigate("/")}
                  >
                    <FaArrowLeft className="me-2" />
                    Back
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EditLead;