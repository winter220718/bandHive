package jsj.bandhive.controller;

import jsj.bandhive.entity.Review;
import jsj.bandhive.service.ReviewServiceImpl;
import lombok.extern.slf4j.Slf4j;
import oracle.ucp.proxy.annotation.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
public class ReviewController {

    @Autowired
    ReviewServiceImpl reviewService;

    @PostMapping("/review/save")
    public String saveReview(@RequestBody Review review) {
        reviewService.saveReview(review);
        return "your review is saved";
    }

    @PostMapping("/review/update")
    public String updateReview(@RequestBody Review review){

        reviewService.updateReview(review);

        return "업데이트됨";
    }

    @PostMapping("/review/delete")
    public String deleteReview(@RequestParam Long reviewId) {

        reviewService.deleteReview(reviewId);

        return "삭제됨";
    }

    @PostMapping("/my-review")
    public List<Review> getReview(@RequestParam Long memberId) {
        return reviewService.getReview(memberId);
    }
}
