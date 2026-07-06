import {
  FaSearch,
  FaTimes,
  FaSlidersH,
} from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div
      className="card border-0 shadow-sm mb-4"
      style={{
        borderRadius: "18px",
      }}
    >
      <div className="card-body">

        <div className="row align-items-center">

          <div className="col-lg-9">

            <div
              className="input-group"
              style={{
                border: "1px solid #E2E8F0",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >

              <span
                className="input-group-text bg-white border-0"
              >
                <FaSearch
                  className="text-primary"
                  size={18}
                />
              </span>

              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Search by Name, Mobile or Email..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                style={{
                  height: "55px",
                  fontSize: "15px",
                }}
              />

              {search && (
                <button
                  className="btn btn-light border-0"
                  onClick={() =>
                    setSearch("")
                  }
                >
                  <FaTimes />
                </button>
              )}

            </div>

          </div>

          <div className="col-lg-3 mt-3 mt-lg-0">

            <button
              className="btn btn-primary w-100"
              style={{
                height: "55px",
                borderRadius: "14px",
                fontWeight: "600",
              }}
            >
              <FaSlidersH className="me-2" />
              Advanced Search
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default SearchBar;