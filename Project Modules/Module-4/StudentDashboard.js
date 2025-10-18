import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="container mt-4">
      <h2>Student Dashboard</h2>
      <div className="mt-3">
        <Link to="/student/courses" className="btn btn-info m-2">View Enrolled Courses</Link>
        <Link to="/student/attempt-exam" className="btn btn-success m-2">Attempt Exam</Link>
        <Link to="/student/results" className="btn btn-primary m-2">View Results</Link>
      </div>
    </div>
  );
};

export default StudentDashboard;
