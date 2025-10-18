package com.example.onlineplatform.controller;

import com.example.onlineplatform.model.Course;
import com.example.onlineplatform.model.Exam;
import com.example.onlineplatform.service.InstructorService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/instructor")
public class InstructorController {

    private final InstructorService instructorService;

    public InstructorController(InstructorService instructorService) {
        this.instructorService = instructorService;
    }

    @PostMapping("/addCourse")
    public Course addCourse(@RequestBody Course course) {
        return instructorService.createCourse(course);
    }

    @PostMapping("/addExam")
    public Exam addExam(@RequestBody Exam exam) {
        return instructorService.createExam(exam);
    }

    @GetMapping("/courses/{instructorId}")
    public List<Course> getCourses(@PathVariable Long instructorId) {
        return instructorService.getCoursesByInstructor(instructorId);
    }
}
