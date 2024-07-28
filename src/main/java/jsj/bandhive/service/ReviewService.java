package jsj.bandhive.service;

import jsj.bandhive.entity.Review;

public interface ReviewService {

    void saveReview(Review review);

    void updateReview(Review review);

    void deleteReview(Long reviewId);

}
