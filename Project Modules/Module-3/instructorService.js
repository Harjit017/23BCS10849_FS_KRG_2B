import axios from "axios";

const API_URL = "http://localhost:8080/api/instructor";

const addCourse = async (course) => {
  const response = await axios.post(`${API_URL}/addCourse`, course);
  return response.data;
};

const getCourses = async (instructorId) => {
  const response = await axios.get(`${API_URL}/courses/${instructorId}`);
  return response.data;
};

export default { addCourse, getCourses };
