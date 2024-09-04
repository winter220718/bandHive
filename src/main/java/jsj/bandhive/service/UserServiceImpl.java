package jsj.bandhive.service;

import jsj.bandhive.entity.User;
import jsj.bandhive.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public Long save(User user) {
        try {
            if(userRepository.findByMemberEmail(user.getMemberEmail()) == null) {
                throw new IllegalArgumentException("이미 가입된 회원입니다.");
            };
        } catch (IllegalArgumentException e) {
            throw e;
        }

        return userRepository.save(user).getMemberId();
    }

    @Override
    public boolean authenticate(String memberEmail, String memberPassword) {
        User user = userRepository.findByMemberEmail(memberEmail);
        if (user != null) {
            return user.getMemberPassword().equals(memberPassword);
        }

        return false;
    }


}
