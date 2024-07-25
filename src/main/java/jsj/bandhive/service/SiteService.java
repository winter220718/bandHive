package jsj.bandhive.service;

import jsj.bandhive.entity.SitePost;
import jsj.bandhive.entity.SiteRentalList;

import java.util.List;

public interface SiteService {

    List<SitePost> getSitePosts();

    List<SiteRentalList> getSiteRentalList(String postId);
}
