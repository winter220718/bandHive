package jsj.bandhive.entity;


import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;
@Data
@Entity
@Table(name = "USERS")
public class Users {


    @Id
    @Column(name = "MEMBER_ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq_gen")
    @SequenceGenerator(name = "user_seq_gen", sequenceName = "user_seq", allocationSize = 1)
    private Long memberId;

    @Column(name = "MEMBER_EMAIL")
    private String memberEmail;

    @Column(name = "MEMBER_PASSWORD")
    private String memberPassword;

    @Column(name = "MEMBER_CONTACT")
    private String memberContact;

    @ColumnDefault("CURRENT_TIMESTAMP")
    @Column(name = "JOIN_DATE")
    private LocalDateTime joinDate;

    @Column(name ="JOIN_TYPE")
    private char joinType;

    @Column(name = "JOIN_SITE")
    private char joinSite;


}
