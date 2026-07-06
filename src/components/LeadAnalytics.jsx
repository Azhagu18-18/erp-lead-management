import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

function LeadAnalytics() {
  const [statusData, setStatusData] = useState([]);
  const [sourceData, setSourceData] = useState([]);

  const COLORS = [
    "#0d6efd",
    "#198754",
    "#ffc107",
    "#dc3545",
    "#6f42c1",
    "#20c997",
    "#fd7e14",
  ];

  useEffect(() => {
    const leads = JSON.parse(localStorage.getItem("leads")) || [];

    // -----------------------------
    // Status Count
    // -----------------------------

    const statusCount = {};

    leads.forEach((lead) => {
      const status = lead.status || "Unknown";
      statusCount[status] = (statusCount[status] || 0) + 1;
    });

    const statusChart = Object.keys(statusCount).map((key) => ({
      name: key,
      value: statusCount[key],
    }));

    setStatusData(statusChart);

    // -----------------------------
    // Source Count
    // -----------------------------

    const sourceCount = {};

    leads.forEach((lead) => {
      const source = lead.source || "Other";
      sourceCount[source] = (sourceCount[source] || 0) + 1;
    });

    const sourceChart = Object.keys(sourceCount).map((key) => ({
      source: key,
      leads: sourceCount[key],
    }));

    setSourceData(sourceChart);
  }, []);

  return (
    <div className="container-fluid mt-4">

      <div className="row g-4">

        {/* ========================= */}
        {/* PIE CHART */}
        {/* ========================= */}

        <div className="col-lg-6">

          <div
            className="card border-0 shadow-lg rounded-4 h-100"
          >

            <div className="card-header bg-primary text-white rounded-top-4">

              <h5 className="mb-0 fw-bold">
                Lead Status Analytics
              </h5>

            </div>

            <div className="card-body">

              {statusData.length === 0 ? (
                <div
                  className="text-center text-muted py-5"
                >
                  No Data Available
                </div>
              ) : (
                <ResponsiveContainer
                  width="100%"
                  height={350}
                >
                  <PieChart>

                    <Pie
                      data={statusData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={120}
                      innerRadius={60}
                      paddingAngle={4}
                      label
                    >

                      {statusData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}

                    </Pie>

                    <Tooltip />

                    <Legend />

                  </PieChart>
                </ResponsiveContainer>
              )}

            </div>

          </div>

        </div>

        {/* ========================= */}
        {/* BAR CHART */}
        {/* ========================= */}

        <div className="col-lg-6">

          <div
            className="card border-0 shadow-lg rounded-4 h-100"
          >

            <div className="card-header bg-success text-white rounded-top-4">

              <h5 className="mb-0 fw-bold">
                Lead Source Analytics
              </h5>

            </div>

            <div className="card-body">

              {sourceData.length === 0 ? (
                <div
                  className="text-center text-muted py-5"
                >
                  No Data Available
                </div>
              ) : (

                <ResponsiveContainer
                  width="100%"
                  height={350}
                >

                  <BarChart
                    data={sourceData}
                  >

                    <CartesianGrid
                      strokeDasharray="3 3"
                    />

                    <XAxis
                      dataKey="source"
                    />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar
                      dataKey="leads"
                      radius={[8, 8, 0, 0]}
                      fill="#198754"
                    />

                  </BarChart>

                </ResponsiveContainer>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LeadAnalytics;