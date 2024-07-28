package jsj.bandhive.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "FAVORITES")
public class Favorites {

    @Id
    @Column(name = "FAV_ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "answer_seq")
    @SequenceGenerator(name = "answer_seq", sequenceName = "answer_id_seq", allocationSize = 1)
    private Long favId;

    @ManyToOne
    @JoinColumn(name = "POST_ID", referencedColumnName = "POST_ID")
    private SitePost sitePost;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID", referencedColumnName = "MEMBER_ID")
    private Users user;

}
