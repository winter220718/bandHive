package jsj.bandhive.repository;

import jsj.bandhive.entity.SitePost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SitePostRepository extends JpaRepository<SitePost, Long> {

    SitePost findAllByPostId(String postId);

    List<SitePost> findAll();
}
