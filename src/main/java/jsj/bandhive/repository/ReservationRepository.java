package jsj.bandhive.repository;

import jakarta.transaction.Transactional;
import jsj.bandhive.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    @Modifying
    @Transactional
    @Query("UPDATE Reservation SET rsvtConfirmYn = 1 WHERE rsvtId = :rsvtId")
    void confirmReservation(Long rsvtId);

    @Modifying
    @Transactional
    @Query("UPDATE Reservation SET rsvtCancelYn = 1 WHERE rsvtId = :rsvtId")
    void cancelReservation(Long rsvtId);

    List<Reservation> findByUser_MemberId(Long memberId);
}
