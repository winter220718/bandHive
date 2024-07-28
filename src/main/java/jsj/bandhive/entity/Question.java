package jsj.bandhive.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;


@Data
@Entity
@Table(name = "QUESTION")
public class Question {

    @Id
    @Column(name = "QUESTION_ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "question_seq")
    @SequenceGenerator(name = "question_seq", sequenceName = "question_id_seq", allocationSize = 1)
    private Long questionId;

    @Column(name = "QUESTION_CONTENT")
    private String questionContent;

    @Column(name = "QUESTION_TITLE")
    private String questionTitle;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "QUESTION_DATE")
    private LocalDateTime questionDate;

    @Column(name = "ANSWER_YN")
    private Integer answerYn;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID", referencedColumnName = "MEMBER_ID")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "POST_ID", referencedColumnName = "POST_ID")
    private SitePost sitePost;

    @PrePersist
    protected void onCreate() {
        answerYn = 0;
    }
}
