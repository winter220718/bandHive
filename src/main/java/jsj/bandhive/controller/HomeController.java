package jsj.bandhive.controller;

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

import java.util.*;
import java.util.stream.Collectors;

@RestController
@ResponseBody
public class HomeController {

    private  SiteServiceImpl siteService;

    public HomeController(SiteServiceImpl siteService) {
        this.siteService = siteService;
    }

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
    public Map<String, Object> getPostRentalList(@PathVariable String postId) {
        System.out.println("여기!");
        Map<String, Object> response = new HashMap<>();

        SitePost st = siteService.getSitePost(postId);
        List<SiteRentalList> stl = siteService.getSiteRentalList(postId);

        response.put("sitePost", st);
        response.put("siteRentalList", stl);

        System.out.println("st = " + st);;
        System.out.println("stl = " + stl);

        return response;
    }
}
