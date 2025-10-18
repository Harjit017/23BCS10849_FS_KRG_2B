package com.example.onlineplatform.controller;

import com.example.onlineplatform.model.Result;
import com.example.onlineplatform.service.StudentService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    private final StudentService studentService;
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/results/{studentId}")
    public List<Result> getResults(@PathVariable Long studentId) {
        return studentService.getResultsByStudent(studentId);
    }

    @PostMapping("/submitExam")
    public Result submitExam(@RequestBody Result result) {
        return studentService.saveResult(result);
    }
}
