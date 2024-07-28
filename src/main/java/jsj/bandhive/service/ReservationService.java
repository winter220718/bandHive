package jsj.bandhive.service;

import jsj.bandhive.entity.Reservation;

import java.util.List;

public interface ReservationService {

    void save(Reservation reservation);

    List<Reservation> findMyReservation(Long memberId);
}
