package jsj.bandhive.service;

import jsj.bandhive.entity.SitePost;
import jsj.bandhive.entity.SiteRentalList;
import jsj.bandhive.repository.SitePostRepository;
import jsj.bandhive.repository.SiteRentalListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SiteServiceImpl implements SiteService{

    @Autowired
    SitePostRepository sitePostRepository;

    @Autowired
    SiteRentalListRepository siteRentalListRepository;

    @Override
    public List<SitePost> getSitePosts() {
        return sitePostRepository.findAll();
    }

    @Override
    public SitePost getSitePost(String postId) {
        return sitePostRepository.findAllByPostId(postId);
    }

    @Override
    public List<SiteRentalList> getSiteRentalList(String postId) {
        return siteRentalListRepository.findBySitePost_PostId(postId);
    }
}
