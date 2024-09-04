package jsj.bandhive.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "ANSWERS")
public class Answer {

    @Id
    @Column(name = "ANSWER_ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "answer_seq")
    @SequenceGenerator(name = "answer_seq", sequenceName = "answer_id_seq", allocationSize = 1)
    private Long answerId;

    private String answerContent;

    @CreationTimestamp
    private LocalDateTime answerDate;

    @ManyToOne
    @JoinColumn(name = "QUESTION_ID", referencedColumnName = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID", referencedColumnName = "MEMBER_ID")
    private User user;

}
