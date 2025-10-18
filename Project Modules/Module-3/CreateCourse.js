import React, { useState } from "react";
import instructorService from "../../services/instructorService";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const course = { title, description, instructor: { id: 1 } }; // Example instructor ID
    await instructorService.addCourse(course);
    alert("Course created successfully!");
  };

  return (
    <div className="container mt-4">
      <h3>Create Course</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control m-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="form-control m-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button className="btn btn-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateCourse;
