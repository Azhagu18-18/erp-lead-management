import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSave,
  FaArrowLeft,
  FaUndo,
  FaUserPlus,
  FaBuilding,
  FaMapMarkerAlt,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaUserTie,
  FaStickyNote,
} from "react-icons/fa";
import { toast } from "react-toastify";

function AddLead() {
  const navigate = useNavigate();

  const initialForm = {
    name: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    source: "Website",
    course: "Full Stack Development",
    employee: "John",
    status: "New",
    notes: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full Name is required";
        if (!/^[A-Za-z ]+$/.test(value))
          return "Only alphabets are allowed";
        if (value.trim().length < 3)
          return "Minimum 3 characters required";
        return "";

      case "phone":
        if (!value.trim()) return "Phone Number is required";
        if (!/^[6-9]\d{9}$/.test(value))
          return "Enter valid 10 digit mobile number";
        return "";

      case "email":
        if (!value.trim()) return "Email Address is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Enter valid email address";
        return "";

      case "company":
        if (!value.trim()) return "Company Name is required";
        return "";

      case "address":
        if (!value.trim()) return "Address is required";
        return "";

      case "notes":
        if (!value.trim()) return "Notes are required";
        if (value.trim().length < 10)
          return "Minimum 10 characters required";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const resetForm = () => {
    setFormData(initialForm);
    setErrors({});
    toast.info("Form Reset Successfully");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) validationErrors[key] = error;
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) {
      toast.warning("Please correct highlighted fields");
      return;
    }

    setLoading(true);

    const leads =
      JSON.parse(localStorage.getItem("leads")) || [];

    const newLead = {
      id: Date.now(),
      ...formData,
      createdDate: new Date().toLocaleDateString("en-IN"),
    };

    leads.unshift(newLead);

    localStorage.setItem(
      "leads",
      JSON.stringify(leads)
    );

    setTimeout(() => {
      toast.success("Lead Added Successfully");
      setLoading(false);
      setFormData(initialForm);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="container py-4">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold text-primary">
            <FaUserPlus className="me-2" />
            Add New Lead
          </h2>

          <p className="text-muted">
            Create a new customer lead
          </p>
        </div>

        <button
          className="btn btn-outline-dark"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft className="me-2" />
          Back
        </button>

      </div>

      <div className="card shadow-lg border-0">

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">
                            {/* Full Name */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Full Name <span className="text-danger">*</span>
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaUserPlus />
                </span>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.name
                      ? "is-invalid"
                      : formData.name
                      ? "is-valid"
                      : ""
                  }`}
                />
              </div>

              {errors.name && (
                <div className="invalid-feedback d-block">
                  {errors.name}
                </div>
              )}
            </div>

            {/* Phone */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Phone Number <span className="text-danger">*</span>
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaPhone />
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.phone
                      ? "is-invalid"
                      : formData.phone
                      ? "is-valid"
                      : ""
                  }`}
                />
              </div>

              {errors.phone && (
                <div className="invalid-feedback d-block">
                  {errors.phone}
                </div>
              )}
            </div>

            {/* Email */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Email Address <span className="text-danger">*</span>
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.email
                      ? "is-invalid"
                      : formData.email
                      ? "is-valid"
                      : ""
                  }`}
                />
              </div>

              {errors.email && (
                <div className="invalid-feedback d-block">
                  {errors.email}
                </div>
              )}
            </div>

            {/* Company */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Company Name <span className="text-danger">*</span>
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaBuilding />
                </span>

                <input
                  type="text"
                  name="company"
                  placeholder="Enter Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.company
                      ? "is-invalid"
                      : formData.company
                      ? "is-valid"
                      : ""
                  }`}
                />
              </div>

              {errors.company && (
                <div className="invalid-feedback d-block">
                  {errors.company}
                </div>
              )}
            </div>
                        {/* Address */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Address <span className="text-danger">*</span>
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaMapMarkerAlt />
                </span>

                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.address
                      ? "is-invalid"
                      : formData.address
                      ? "is-valid"
                      : ""
                  }`}
                />
              </div>

              {errors.address && (
                <div className="invalid-feedback d-block">
                  {errors.address}
                </div>
              )}
            </div>

            {/* Lead Source */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Lead Source
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaGlobe />
                </span>

                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option>Website</option>
                  <option>Facebook</option>
                  <option>Instagram</option>
                  <option>LinkedIn</option>
                  <option>Reference</option>
                  <option>WhatsApp</option>
                </select>
              </div>
            </div>

            {/* Course */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Course / Service
              </label>

              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            {/* Assigned Employee */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Assigned Employee
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaUserTie />
                </span>

                <select
                  name="employee"
                  value={formData.employee}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option>John</option>
                  <option>David</option>
                  <option>Sarah</option>
                  <option>Michael</option>
                  <option>Priya</option>
                </select>
              </div>
            </div>

            {/* Status */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-select"
              >
                <option>New</option>
                <option>Contacted</option>
                <option>Qualified</option>
                <option>Proposal Sent</option>
                <option>Closed</option>
              </select>
            </div>
                        {/* Notes */}

            <div className="col-12 mb-4">
              <label className="form-label fw-semibold">
                Notes <span className="text-danger">*</span>
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaStickyNote />
                </span>

                <textarea
                  rows="5"
                  name="notes"
                  placeholder="Enter Lead Notes..."
                  value={formData.notes}
                  onChange={handleChange}
                  className={`form-control ${
                    errors.notes
                      ? "is-invalid"
                      : formData.notes
                      ? "is-valid"
                      : ""
                  }`}
                ></textarea>
              </div>

              {errors.notes && (
                <div className="invalid-feedback d-block">
                  {errors.notes}
                </div>
              )}

              <div className="text-end mt-2">
                <small className="text-muted">
                  {formData.notes.length}/500 Characters
                </small>
              </div>
            </div>

          </div>

          <hr />

          <div className="d-flex justify-content-end gap-3">

            <button
              type="button"
              className="btn btn-outline-secondary px-4"
              onClick={resetForm}
            >
              <FaUndo className="me-2" />
              Reset
            </button>

            <button
              type="submit"
              className="btn btn-primary px-5"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  ></span>
                  Saving...
                </>
              ) : (
                <>
                  <FaSave className="me-2" />
                  Save Lead
                </>
              )}
            </button>

          </div>

        </form>

      </div>

    </div>

  </div>
);

}

export default AddLead;