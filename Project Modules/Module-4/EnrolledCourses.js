import React, { useState, useEffect } from "react";
import studentService from "../../services/studentService";

const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    studentService.getEnrolledCourses(1).then(setCourses);
  }, []);

  return (
    <div className="container mt-4">
      <h3>Enrolled Courses</h3>
      <ul className="list-group">
        {courses.map((c) => (
          <li key={c.id} className="list-group-item">
            {c.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrolledCourses;
