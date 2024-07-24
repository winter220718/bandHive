package jsj.bandhive.controller;

import jsj.bandhive.entity.Users;
import jsj.bandhive.service.UserService;
import jsj.bandhive.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/register")
    public Users registerUser(@RequestBody Users user) {
        return userService.save(user);
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
}
