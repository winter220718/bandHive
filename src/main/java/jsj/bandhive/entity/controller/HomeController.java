package jsj.bandhive.entity.controller;

import jsj.bandhive.dto.CustomUserDetails;
import jsj.bandhive.entity.SitePost;
import jsj.bandhive.entity.SiteRentalList;
import jsj.bandhive.service.SiteServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@ResponseBody
public class HomeController {

    @Autowired
    private  SiteServiceImpl siteService;

    @GetMapping("/main")
    public String main() {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Iterator<? extends GrantedAuthority> iter = authorities.iterator();
        GrantedAuthority auth = iter.next();
        String role = auth.getAuthority();
        return "Main Controller" + name + role;
    }

    @GetMapping("/getTopSites")
    public List<SitePost> getTopSites(Model model) {
        List<SitePost> allSites = siteService.getSitePosts();

        Collections.shuffle(allSites);
        return  allSites.stream().limit(6).collect(Collectors.toList());
    }

    @GetMapping("/getAllSitePosts")
    public List<SitePost> getAllSitePosts(Model model) {

        return siteService.getSitePosts();
    }

    @GetMapping("/post/{postId}")
    public List<SiteRentalList> getPostRentalList(@PathVariable String postId) {

        return siteService.getSiteRentalList(postId);
    }
}
