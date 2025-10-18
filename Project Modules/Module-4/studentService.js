import axios from "axios";

const API_URL = "http://localhost:8080/api/student";

const getEnrolledCourses = async (studentId) => {
  const response = await axios.get(`${API_URL}/courses/${studentId}`);
  return response.data;
};

const getResults = async (studentId) => {
  const response = await axios.get(`${API_URL}/results/${studentId}`);
  return response.data;
};

const submitExam = async (result) => {
  const response = await axios.post(`${API_URL}/submitExam`, result);
  return response.data;
};

export default { getEnrolledCourses, getResults, submitExam };
