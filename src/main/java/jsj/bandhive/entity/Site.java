package jsj.bandhive.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "SITE")
public class Site {

    @Id
    @Column(name = "SITE_ID")
    private String siteId;

    @Column(name = "SITE_NAME")
    private String siteName;

    @Column(name = "SITE_ADDRESS")
    private String siteAddress;

    @Column(name = "SITE_CONTACT")
    private String siteContact;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID", referencedColumnName = "MEMBER_ID")
    private Users user;
}
