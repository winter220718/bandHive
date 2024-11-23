package jsj.bandhive.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Table(name = "SITE_POST")
public class SitePost {

    @Id
    @Column(name = "POST_ID")
    private String postId;

    @Column(name = "POST_TITLE")
    private String postTitle;

    @Column(name = "POST_SUB_TITLE")
    private String postSubTitle;

    @Column(name = "POST_CONTENT")
    private String postContent;

    @Column(name = "POST_DATE")
    private LocalDateTime postDate;

    @Column(name = "POST_HIT")
    private Integer postHit;

    @Column(name = "USE_ENABLED")
    private Integer useEnabled;

    @Column(name = "ADDITIONAL_PERSON_FEE")
    private Integer additionalPersonFee;

    @ManyToOne
    @JoinColumn(name = "SITE_ID", referencedColumnName = "SITE_ID")
    private Site site;

    @Column(name = "PIC_GROUP_ID")
    private String picGroupId;

    @Column(name = "CAUTION_ID")
    private Long cautionId;

    @OneToMany
    @JoinColumn(name = "CAUTION_ID", referencedColumnName = "CAUTION_ID")
    @OrderBy("cautionOrder ASC")
    private List<Cautions> cautions;
}
