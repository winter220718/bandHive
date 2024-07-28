package jsj.bandhive.service;

import jakarta.transaction.Transactional;
import jsj.bandhive.entity.Favorites;
import jsj.bandhive.repository.FavoritesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FavoritesServiceImpl implements FavoritesService {

    @Autowired
    FavoritesRepository favoritesRepository;

    @Override
    public void saveFav(Favorites favorites) {
        favoritesRepository.save(favorites);
    }

    @Override
    @Transactional
    public void deleteFav(Favorites favorites) {
        favoritesRepository.deleteAllBySitePost_PostIdAndUser_MemberId(favorites.getSitePost().getPostId(), favorites.getUser().getMemberId());
    }
}
