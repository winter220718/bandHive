package jsj.bandhive.service;

import jsj.bandhive.entity.Review;
import jsj.bandhive.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewServiceImpl implements ReviewService{
    @Autowired
    ReviewRepository reviewRepository;

    @Override
    public void saveReview(Review review) {
        reviewRepository.save(review);
    }

    @Override
    public void updateReview(Review review) {
        System.out.println(review.toString());
        reviewRepository.updateReviewByReviewId(review.getReviewId(), review.getReviewContent());
    }

    @Override
    public void deleteReview(Long reviewId) {
        reviewRepository.deleteById(reviewId);

    }
}
