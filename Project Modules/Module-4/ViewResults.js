import React, { useEffect, useState } from "react";
import studentService from "../../services/studentService";

const ViewResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    studentService.getResults(1).then(setResults);
  }, []);

  return (
    <div className="container mt-4">
      <h3>Your Results</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Exam</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.id}>
              <td>{r.examTitle}</td>
              <td>{r.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewResults;
