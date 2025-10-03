import React from "react";
import StudentCard from "./StudentCard";

function App() {
  const students = [
    { name: "Harjit Singh", roll: "101", course: "B.Tech CS" },
    { name: "Simran Kaur", roll: "102", course: "B.Sc Math" },
    { name: "Amanpreet Singh", roll: "103", course: "B.A History" },
    { name: "Jasleen Kaur", roll: "104", course: "B.Com" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-start p-8">
      {students.map((student) => (
        <StudentCard
          key={student.roll}
          name={student.name}
          roll={student.roll}
          course={student.course}
        />
      ))}
    </div>
  );
}

export default App;
