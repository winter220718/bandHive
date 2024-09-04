package jsj.bandhive.repository;

import jsj.bandhive.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByMemberEmail(String memberEmail);

}
