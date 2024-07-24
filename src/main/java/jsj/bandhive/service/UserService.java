package jsj.bandhive.service;

import jsj.bandhive.entity.Users;
import org.springframework.stereotype.Service;


public interface UserService {

    Users save(Users user);

    boolean authenticate(String memberEmail, String memberPassword);

}
