package jsj.bandhive.service;

import jsj.bandhive.entity.Reservation;
import jsj.bandhive.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService{

    @Autowired
    ReservationRepository reservationRepository;
    @Override
    public void save(Reservation reservation) {
        reservationRepository.save(reservation);
    }

    @Override
    public List<Reservation> findMyReservation(Long memberId) {
        return reservationRepository.findByUser_MemberId(memberId);
    }
}
