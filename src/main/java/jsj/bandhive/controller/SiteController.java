package jsj.bandhive.controller;

import jsj.bandhive.entity.Site;
import jsj.bandhive.service.SiteService;
import jsj.bandhive.service.SiteServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SiteController {

    @Autowired
    private  SiteServiceImpl siteService;


    @GetMapping("/getAllSites")
    public List<Site> getAllSites(Model model) {


        return siteService.getSites();
    }
}
