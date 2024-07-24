package jsj.bandhive.repository;

import jsj.bandhive.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
    Users findByMemberEmail(String memberEmail);

}
