package jsj.bandhive.controller;

import jsj.bandhive.entity.Answer;
import jsj.bandhive.entity.Question;
import jsj.bandhive.entity.SitePost;
import jsj.bandhive.entity.Users;
import jsj.bandhive.service.AnswerServiceImpl;
import jsj.bandhive.service.QuestionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
public class QuestionContoller {

    @Autowired
    private QuestionServiceImpl questionService;

    @Autowired
    private AnswerServiceImpl answerService;

    @PostMapping("/ask")
    public String createQuestion(@ModelAttribute Question question, RedirectAttributes redirectAttributes) {

        questionService.createQuestion(question);

        return "saved!";
    }

    @PostMapping("/answer/{questionId}")
    public String createAnswer(@ModelAttribute Answer answer, @PathVariable Long questionId, RedirectAttributes redirectAttributes) {

        answerService.createAnswer(answer, questionId);

        return "your answer has been successfully saved!";
    }
}
