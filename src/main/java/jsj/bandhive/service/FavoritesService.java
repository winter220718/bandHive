package jsj.bandhive.service;

import jsj.bandhive.entity.Favorites;

public interface FavoritesService {

    void saveFav(Favorites favorites);

    void deleteFav(Favorites favorites);
}
