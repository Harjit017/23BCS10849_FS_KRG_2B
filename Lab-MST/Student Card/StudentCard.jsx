import React from "react";

// StudentCard is now fully reusable via props
const StudentCard = ({ name, roll, course, extraClass }) => {
  return (
    <div
      className={`bg-red-50 shadow-md rounded-lg p-6 w-64 m-4 hover:scale-105 transition-transform ${extraClass}`}
    >
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700">Roll Number: {roll}</p>
      <p className="text-gray-700">Course: {course}</p>
    </div>
  );
};

export default StudentCard;
