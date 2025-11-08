package com.example.onlineplatform.service;

import com.example.onlineplatform.model.Result;
import com.example.onlineplatform.repository.ResultRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentService {

    private final ResultRepository resultRepo;

    public StudentService(ResultRepository resultRepo) {
        this.resultRepo = resultRepo;
    }

    public List<Result> getResultsByStudent(Long studentId) {
        return resultRepo.findByStudentId(studentId);
    }

    public Result saveResult(Result result) {
        return resultRepo.save(result);
    }
}
