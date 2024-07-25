package jsj.bandhive.repository;

import jsj.bandhive.entity.SiteRentalList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SiteRentalListRepository extends JpaRepository<SiteRentalList, String> {

    List<SiteRentalList> findBySitePost_PostId(String postId);
}
