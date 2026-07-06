const getDashboard = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Dashboard API Working",
    data: {
      totalLeads: 0,
      activeLeads: 0,
      convertedLeads: 0,
      lostLeads: 0,
    },
  });
};

module.exports = {
  getDashboard,
};