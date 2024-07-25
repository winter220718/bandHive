package jsj.bandhive.repository;

import jsj.bandhive.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    Question save(Question question);

    Question findByQuestionId(Long questionId);

    @Modifying
    @Query("UPDATE Question SET answerYn = 1 WHERE questionId = :questionId")
    void updateAnswerYn(Long questionId);
}
