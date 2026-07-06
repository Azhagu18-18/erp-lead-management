const asyncHandler = require("../utils/asyncHandler");

const getLeads = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Leads API Working",
    data: [],
  });
});

const getLead = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Single Lead API Working",
  });
});

const addLead = asyncHandler(async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Lead Added Successfully",
  });
});

const updateLead = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Lead Updated Successfully",
  });
});

const deleteLead = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Lead Deleted Successfully",
  });
});

module.exports = {
  getLeads,
  getLead,
  addLead,
  updateLead,
  deleteLead,
};