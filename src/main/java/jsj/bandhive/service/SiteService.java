package jsj.bandhive.service;

import jsj.bandhive.entity.SitePost;
import jsj.bandhive.entity.SiteRentalList;

import java.util.List;

public interface SiteService {

    List<SitePost> getSitePosts();
    SitePost getSitePost(String postId);
    List<SiteRentalList> getSiteRentalList(String postId);
}
