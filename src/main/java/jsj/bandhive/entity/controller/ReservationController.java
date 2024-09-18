package jsj.bandhive.entity.controller;

import jsj.bandhive.entity.Reservation;
import jsj.bandhive.service.ReservationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReservationController {

    @Autowired
    ReservationServiceImpl reservationService;

    @PostMapping("/reservation")
    public String saveReservation(@RequestBody Reservation reservation) {
        reservationService.save(reservation);
        return "ok";
    }

    @PostMapping("/my-reservation")
    public List<Reservation> findMyReservation(@RequestParam Long memberId) {

        return reservationService.findMyReservation(memberId);
    }


}
