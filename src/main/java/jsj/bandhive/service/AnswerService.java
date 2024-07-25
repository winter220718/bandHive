package jsj.bandhive.service;

import jsj.bandhive.entity.Answer;

public interface AnswerService {

    Answer createAnswer(Answer answer, Long questionId);
}
