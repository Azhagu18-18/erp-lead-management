import {
  FaFilter,
  FaUserTie,
  FaCalendarAlt,
  FaUndo,
} from "react-icons/fa";

function FilterBar({
  status,
  setStatus,
  employee,
  setEmployee,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  resetFilters,
}) {
  return (
    <div
      className="card border-0 shadow-sm mb-4"
      style={{ borderRadius: "18px" }}
    >
      <div className="card-body">

        <div className="d-flex align-items-center mb-3">

          <FaFilter
            className="me-2 text-primary"
            size={18}
          />

          <h5 className="mb-0 fw-bold">
            Advanced Filters
          </h5>

        </div>

        <div className="row g-3">

          {/* Status */}

          <div className="col-lg-3">

            <label className="form-label fw-semibold">
              Lead Status
            </label>

            <select
              className="form-select shadow-sm"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option value="">
                All Status
              </option>

              <option value="New">
                🟢 New
              </option>

              <option value="Contacted">
                🟡 Contacted
              </option>

              <option value="Qualified">
                🔵 Qualified
              </option>

              <option value="Closed">
                🔴 Closed
              </option>

            </select>

          </div>

          {/* Employee */}

          <div className="col-lg-3">

            <label className="form-label fw-semibold">

              <FaUserTie className="me-2" />

              Employee

            </label>

            <select
              className="form-select shadow-sm"
              value={employee}
              onChange={(e) =>
                setEmployee(e.target.value)
              }
            >

              <option value="">
                All Employees
              </option>

              <option>
                John
              </option>

              <option>
                David
              </option>

              <option>
                Sarah
              </option>

              <option>
                Michael
              </option>

              <option>
                Priya
              </option>

            </select>

          </div>

          {/* Date */}

          <div className="col-lg-3">
  <label className="form-label fw-semibold">
    From Date
  </label>

  <input
    type="date"
    className="form-control shadow-sm"
    value={fromDate}
    onChange={(e) =>
      setFromDate(e.target.value)
    }
  />
</div>

<div className="col-lg-3">
  <label className="form-label fw-semibold">
    To Date
  </label>

  <input
    type="date"
    className="form-control shadow-sm"
    value={toDate}
    onChange={(e) =>
      setToDate(e.target.value)
    }
  />
</div>

          {/* Reset */}

          <div className="col-lg-3 d-flex align-items-end">

            <button
              className="btn btn-danger w-100 shadow-sm"
              onClick={resetFilters}
            >

              <FaUndo className="me-2" />

              Reset Filters

            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default FilterBar;