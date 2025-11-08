package com.example.onlineplatform.service;

import com.example.onlineplatform.model.Course;
import com.example.onlineplatform.model.Exam;
import com.example.onlineplatform.repository.CourseRepository;
import com.example.onlineplatform.repository.ExamRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InstructorService {

    private final CourseRepository courseRepo;
    private final ExamRepository examRepo;

    public InstructorService(CourseRepository courseRepo, ExamRepository examRepo) {
        this.courseRepo = courseRepo;
        this.examRepo = examRepo;
    }

    public Course createCourse(Course course) {
        return courseRepo.save(course);
    }

    public Exam createExam(Exam exam) {
        return examRepo.save(exam);
    }

    public List<Course> getCoursesByInstructor(Long instructorId) {
        return courseRepo.findByInstructorId(instructorId);
    }
}
