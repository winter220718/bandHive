package jsj.bandhive.service;

import jsj.bandhive.entity.Review;

import java.util.List;

public interface ReviewService {

    void saveReview(Review review);

    void updateReview(Review review);

    void deleteReview(Long reviewId);

    List<Review> getReview(Long memberId);

}
