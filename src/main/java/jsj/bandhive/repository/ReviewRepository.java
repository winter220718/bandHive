package jsj.bandhive.repository;

import jakarta.transaction.Transactional;
import jsj.bandhive.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Modifying
    @Transactional
    @Query("UPDATE Review SET reviewContent = :reviewContent WHERE reviewId = :reviewId")
    void updateReviewByReviewId(Long reviewId, String reviewContent);
}
