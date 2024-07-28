package jsj.bandhive.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "PRICING_RULE")
public class PricingRule {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pricing_seq")
    @SequenceGenerator(name = "pricing_seq", sequenceName = "pricing_id_seq", allocationSize = 1)
    @Column(name = "PRICING_RULE_ID")
    private Long pricingRuleId;

    @Column(name = "RULE_TYPE")
    private String ruleType;

    @Column(name = "START_TIME")
    private Integer startTime;

    @Column(name = "END_TIME")
    private Integer endTime;

    @Column(name = "DATE_RANGE_START")
    private LocalDateTime dateRangeStart;

    @Column(name = "DATE_RANGE_END")
    private LocalDateTime dateRangeEnd;

    @Column(name = "PRICE")
    private Integer price;

    @OneToOne
    @JoinColumn(name = "RENTAL_ID", referencedColumnName = "RENTAL_ID")
    private SiteRentalList siteRentalList;


}
