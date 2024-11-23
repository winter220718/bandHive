package jsj.bandhive.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "CAUTIONS")
public class Cautions {

    @Id
    @Column(name = "CAUTION_ID")
    private Long cautionId;

    @Id
    @Column(name = "CAUTION_ORDER")
    private Long cautionOrder;

    @Column(name = "CAUTION_CONTENT")
    private String cautionContent;
}
