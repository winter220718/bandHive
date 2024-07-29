package jsj.bandhive.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "RESERVATION")
public class Reservation {

    @Id
    @Column(name = "RSVT_ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rsvt_seq")
    @SequenceGenerator(name = "rsvt_seq", sequenceName = "rsvt_id_seq", allocationSize = 1)
    private Long rsvtId;

    @CreationTimestamp
    @Column(name = "RSVT_APLY_DATE") // 예약을 신청한 날
    private LocalDateTime rsvtAplyDate;

    @Column(name = "RSVT_DATE") // 합주실 이용일
    private LocalDateTime rsvtDate;

    @Column(name = "RSVT_CONFIRM_YN")
    private Integer rsvtConfirmYn;

    @Column(name = "RSVT_START_TIME")
    private LocalDateTime rsvtStartTime;

    @Column(name ="RSVT_END_TIME")
    private LocalDateTime rsvtEndTime;

    @Column(name = "RSVT_CANCEL_YN")
    private Integer rsvtCancelYn;

    @Column(name = "TOTAL_PRICE")
    private Integer totalPrice;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID", referencedColumnName = "MEMBER_ID")
    private Users user;

    @ManyToOne
    @JoinColumn(name = "SITE_ID", referencedColumnName = "SITE_ID")
    private Site site;

    @OneToOne
    @JoinColumn(name = "PRICING_RULE_ID", referencedColumnName = "PRICING_RULE_ID")
    private PricingRule pricingRule;

    @PrePersist
    protected void onCreate() {
        rsvtCancelYn = 0;
        rsvtConfirmYn = 0;
    }
}
