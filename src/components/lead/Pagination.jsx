import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  recordsPerPage,
  setRecordsPerPage,
  totalRecords,
}) {
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  return (
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mt-4 gap-3">

      {/* Showing Records */}
      <div className="fw-semibold text-secondary">
        Showing{" "}
        {(currentPage - 1) * recordsPerPage + 1}
        {" - "}
        {Math.min(currentPage * recordsPerPage, totalRecords)}
        {" of "}
        {totalRecords} Leads
      </div>

      {/* Pagination */}
      <div className="d-flex align-items-center gap-2">

        {/* First */}
        <button
          className="btn btn-light shadow-sm rounded-circle"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        >
          <FaAngleDoubleLeft />
        </button>

        {/* Previous */}
        <button
          className="btn btn-light shadow-sm rounded-circle"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <FaAngleLeft />
        </button>

        {/* First page */}
        {startPage > 1 && (
          <>
            <button
              className="btn btn-light rounded-circle"
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>

            {startPage > 2 && (
              <span className="px-1 fw-bold">...</span>
            )}
          </>
        )}

        {/* Current page window */}
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`btn rounded-circle ${
              currentPage === page
                ? "btn-primary"
                : "btn-light"
            }`}
            style={{
              width: 42,
              height: 42,
            }}
          >
            {page}
          </button>
        ))}

        {/* Last page */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="px-1 fw-bold">...</span>
            )}

            <button
              className="btn btn-light rounded-circle"
              onClick={() => setCurrentPage(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next */}
        <button
          className="btn btn-light shadow-sm rounded-circle"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <FaAngleRight />
        </button>

        {/* Last */}
        <button
          className="btn btn-light shadow-sm rounded-circle"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
        >
          <FaAngleDoubleRight />
        </button>

      </div>

      {/* Records Per Page */}
      <div className="d-flex align-items-center gap-2">
        <span className="fw-semibold">Show</span>

        <select
          className="form-select"
          style={{ width: 90 }}
          value={recordsPerPage}
          onChange={(e) => {
            setRecordsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>

    </div>
  );
}

export default Pagination;