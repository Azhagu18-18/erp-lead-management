import {
  FaUsers,
  FaUserPlus,
  FaCheckCircle,
  FaClipboardCheck,
} from "react-icons/fa";

function DashboardCards({ leads }) {
  const total = leads.length;

  const newLeads = leads.filter(
    (lead) => lead.status === "New"
  ).length;

  const qualified = leads.filter(
    (lead) => lead.status === "Qualified"
  ).length;

  const closed = leads.filter(
    (lead) => lead.status === "Closed"
  ).length;

  const cards = [
    {
      title: "Total Leads",
      value: total,
      icon: <FaUsers size={28} />,
      color: "#2563EB",
      bg: "#EFF6FF",
    },
    {
      title: "New Leads",
      value: newLeads,
      icon: <FaUserPlus size={28} />,
      color: "#16A34A",
      bg: "#ECFDF5",
    },
    {
      title: "Qualified",
      value: qualified,
      icon: <FaClipboardCheck size={28} />,
      color: "#EA580C",
      bg: "#FFF7ED",
    },
    {
      title: "Closed",
      value: closed,
      icon: <FaCheckCircle size={28} />,
      color: "#9333EA",
      bg: "#F5F3FF",
    },
  ];

  return (
    <div className="row g-4 mb-4">
      {cards.map((card) => (
        <div
          className="col-xl-3 col-md-6"
          key={card.title}
        >
          <div
            className="card border-0 shadow-sm h-100"
            style={{
              borderRadius: "18px",
              transition: ".3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 15px 35px rgba(0,0,0,.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
              e.currentTarget.style.boxShadow =
                "";
            }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">

              <div>

                <small
                  className="text-secondary fw-semibold"
                  style={{ letterSpacing: ".5px" }}
                >
                  {card.title}
                </small>

                <h2 className="fw-bold mt-2 mb-1">
                  {card.value}
                </h2>

                <span
                  className="text-success small fw-semibold"
                >
                  ↑ Active
                </span>

              </div>

              <div
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: "18px",
                  background: card.bg,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: card.color,
                }}
              >
                {card.icon}
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;