package jsj.bandhive.service;

import jsj.bandhive.entity.Users;
import jsj.bandhive.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public Users save(Users user) {
        userRepository.save(user);
        return user;
    }

    @Override
    public boolean authenticate(String memberEmail, String memberPassword) {
        Users user = userRepository.findByMemberEmail(memberEmail);
        if (user != null) {
            return user.getMemberPassword().equals(memberPassword);
        }

        return false;
    }


}
