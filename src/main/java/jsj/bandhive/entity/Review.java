package jsj.bandhive.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.lang.reflect.Member;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "REVIEW")
public class Review {
    @Id
    @Column(name = "REVIEW_ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_seq_gen")
    @SequenceGenerator(name = "review_seq_gen", sequenceName = "review_id_seq", allocationSize = 1)
    private Long reviewId;

    @Column(name = "REVIEW_CONTENT")
    private String reviewContent;

    @Column(name = "REVIEW_DATE", updatable = false)
    @CreationTimestamp
    private LocalDateTime reviewDate;

    @ManyToOne
    @JoinColumn(name = "POST_ID", referencedColumnName = "POST_ID")
    private SitePost sitePost;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID", referencedColumnName = "MEMBER_ID")
    private Users user;

}
