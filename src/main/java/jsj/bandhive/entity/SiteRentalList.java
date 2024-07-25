package jsj.bandhive.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "SITE_RENTAL_LIST")
public class SiteRentalList {

    @Id
    @Column(name = "RENTAL_ID")
    private String rentalId;

    @Column(name = "ROOM_NAME")
    private String roomName;

    @Column(name = "LIMIT")
    private Integer limit;

    @Column(name = "DTL_CONTENT")
    private String dtlContent;

    @ManyToOne
    @JoinColumn(name = "POST_ID", referencedColumnName = "POST_ID")
    private SitePost sitePost;

    @Column(name = "PIC_GROUP_ID")
    private String picGroupId;



}
