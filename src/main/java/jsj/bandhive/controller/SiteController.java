package jsj.bandhive.controller;

import jsj.bandhive.entity.Site;
import jsj.bandhive.entity.SitePost;
import jsj.bandhive.entity.SiteRentalList;
import jsj.bandhive.repository.SiteRentalListRepository;
import jsj.bandhive.service.SiteService;
import jsj.bandhive.service.SiteServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SiteController {

    @Autowired
    private  SiteServiceImpl siteService;



    @GetMapping("/getAllSitePosts")
    public List<SitePost> getAllSitePosts(Model model) {

        return siteService.getSitePosts();
    }

    @GetMapping("/post/{postId}")
    public List<SiteRentalList> getPostRentalList(@PathVariable String postId) {

        return siteService.getSiteRentalList(postId);
    }
}
