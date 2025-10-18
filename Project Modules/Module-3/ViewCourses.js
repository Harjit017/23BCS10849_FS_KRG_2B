import React, { useEffect, useState } from "react";
import instructorService from "../../services/instructorService";

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    instructorService.getCourses(1).then((res) => setCourses(res));
  }, []);

  return (
    <div className="container mt-4">
      <h3>Your Courses</h3>
      <ul className="list-group mt-3">
        {courses.map((c) => (
          <li key={c.id} className="list-group-item">
            <strong>{c.title}</strong> – {c.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewCourses;
