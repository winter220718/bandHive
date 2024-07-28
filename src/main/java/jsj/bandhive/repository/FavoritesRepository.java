package jsj.bandhive.repository;

import jsj.bandhive.entity.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoritesRepository extends JpaRepository<Favorites, Long> {

    Favorites save(Favorites favorites);

    void deleteAllBySitePost_PostIdAndUser_MemberId(String postId, Long memberId);
}
