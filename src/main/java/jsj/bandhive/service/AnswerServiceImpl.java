package jsj.bandhive.service;

import jakarta.transaction.Transactional;
import jsj.bandhive.entity.Answer;
import jsj.bandhive.entity.Question;
import jsj.bandhive.repository.AnswerRepository;
import jsj.bandhive.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnswerServiceImpl implements AnswerService{

    @Autowired
    private AnswerRepository answerRepository;

    @Autowired
    private QuestionRepository questionRepository;
    @Transactional
    @Override
    public Answer createAnswer(Answer answer, Long questionId) {
        Question question = questionRepository.findByQuestionId(questionId);
        answer.setQuestion(question);
        questionRepository.updateAnswerYn(questionId);
        return answerRepository.save(answer);
    }
}
