package jsj.bandhive.service;

import jsj.bandhive.entity.Site;
import jsj.bandhive.repository.SiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class SiteServiceImpl implements SiteService{

    @Autowired
    SiteRepository siteRepository;

    @Override
    public List<Site> getSites() {
        return siteRepository.findAll();
    }
}
