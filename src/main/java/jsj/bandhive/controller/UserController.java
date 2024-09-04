package jsj.bandhive.controller;

import jsj.bandhive.entity.Favorites;
import jsj.bandhive.entity.User;
import jsj.bandhive.service.FavoritesServiceImpl;
import jsj.bandhive.service.UserServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
@Slf4j
@RestController
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private FavoritesServiceImpl favoritesService;

    /*
    * 회원가입
    * */
    @PostMapping("/singup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        Long memberId = userService.save(user);
        return new ResponseEntity<>(memberId, HttpStatus.OK);
    }

    @PostMapping("/login")
    public String login(@RequestParam String memberEmail, @RequestParam String memberPassword, Model model) {
        boolean isAuthenticated = userService.authenticate(memberEmail, memberPassword);

        if(isAuthenticated) {
            return "redirect:/home";
        } else {
            model.addAttribute("error", "login failed");
            return "loginFail";
        }


    }

    /*
    * 찜 기능
    * */
    @PostMapping("/makeFav/{onOff}")
    public String makeFav(@RequestBody Favorites favorites, @PathVariable int onOff) {

        if(onOff == 1) {
            log.info("찜 저장");
            favoritesService.saveFav(favorites);
            return "saved in your favorites";
        } else if (onOff == 0) {
            log.info("찜 해제");
            favoritesService.deleteFav(favorites);
            return "deleted in your favorites";
        }
    return "";
    }
}
