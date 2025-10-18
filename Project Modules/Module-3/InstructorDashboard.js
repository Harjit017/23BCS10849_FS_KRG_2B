import React from "react";
import { Link } from "react-router-dom";

const InstructorDashboard = () => {
  return (
    <div className="container mt-4">
      <h2>Instructor Dashboard</h2>
      <div className="mt-3">
        <Link to="/instructor/create-course" className="btn btn-primary m-2">Create Course</Link>
        <Link to="/instructor/create-exam" className="btn btn-success m-2">Create Exam</Link>
        <Link to="/instructor/view-courses" className="btn btn-info m-2">View Courses</Link>
      </div>
    </div>
  );
};

export default InstructorDashboard;
