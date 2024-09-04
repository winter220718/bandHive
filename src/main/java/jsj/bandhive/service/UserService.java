package jsj.bandhive.service;

import jsj.bandhive.entity.User;


public interface UserService {

    Long save(User user);

    boolean authenticate(String memberEmail, String memberPassword);

}
