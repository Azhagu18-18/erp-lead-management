import { useEffect, useState } from "react";
import { FaPlus, FaTrash, FaEdit, FaSave } from "react-icons/fa";

function Notes({ leadId }) {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const allNotes =
      JSON.parse(localStorage.getItem("leadNotes")) || {};

    if (allNotes[leadId]) {
      setNotes(allNotes[leadId]);
    }
  }, [leadId]);

  const saveNotes = (updatedNotes) => {
    const allNotes =
      JSON.parse(localStorage.getItem("leadNotes")) || {};

    allNotes[leadId] = updatedNotes;

    localStorage.setItem(
      "leadNotes",
      JSON.stringify(allNotes)
    );

    setNotes(updatedNotes);
  };

  const handleAddNote = () => {
    if (!note.trim()) return;

    const newNote = {
      id: Date.now(),
      text: note,
      createdAt: new Date().toLocaleString(),
    };

    saveNotes([...notes, newNote]);

    setNote("");
  };

  const handleDelete = (id) => {
    const updated = notes.filter(
      (item) => item.id !== id
    );

    saveNotes(updated);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setNote(item.text);
  };

  const handleUpdate = () => {
    if (!note.trim()) return;

    const updated = notes.map((item) =>
      item.id === editingId
        ? {
            ...item,
            text: note,
            updatedAt: new Date().toLocaleString(),
          }
        : item
    );

    saveNotes(updated);

    setEditingId(null);
    setNote("");
  };

  return (
    <div
      className="card shadow-lg border-0 mt-4"
      style={{ borderRadius: "20px" }}
    >
      <div className="card-body">

        <h4 className="fw-bold mb-3">
          Lead Notes
        </h4>

        <div className="input-group mb-4">

          <textarea
            rows="3"
            className="form-control"
            placeholder="Write a note..."
            value={note}
            onChange={(e) =>
              setNote(e.target.value)
            }
          />

          {editingId ? (
            <button
              className="btn btn-success"
              onClick={handleUpdate}
            >
              <FaSave />
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={handleAddNote}
            >
              <FaPlus />
            </button>
          )}
        </div>
                {notes.length === 0 ? (
          <div className="text-center text-muted py-4">
            No notes available.
          </div>
        ) : (
          notes
            .slice()
            .reverse()
            .map((item) => (
              <div
                key={item.id}
                className="border rounded p-3 mb-3"
              >
                <div className="d-flex justify-content-between align-items-start">

                  <div className="flex-grow-1">

                    <p className="mb-2">
                      {item.text}
                    </p>

                    <small className="text-muted">
                      Created : {item.createdAt}
                    </small>

                    {item.updatedAt && (
                      <>
                        <br />
                        <small className="text-success">
                          Updated : {item.updatedAt}
                        </small>
                      </>
                    )}

                  </div>

                  <div>

                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() =>
                        handleEdit(item)
                      }
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() =>
                        handleDelete(item.id)
                      }
                    >
                      <FaTrash />
                    </button>

                  </div>

                </div>

              </div>
            ))
        )}

      </div>
    </div>
  );
}

export default Notes;