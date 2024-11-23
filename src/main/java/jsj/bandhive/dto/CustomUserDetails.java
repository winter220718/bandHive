//package jsj.bandhive.dto;
//
//import jsj.bandhive.entity.User;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//
//import java.util.ArrayList;
//import java.util.Collection;
//
//public class CustomUserDetails implements UserDetails {
//
//    private final User userEntity;
//
//    public CustomUserDetails(User userEntity) {
//        this.userEntity = userEntity;
//    }
//
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//
//        Collection<GrantedAuthority> collection = new ArrayList<>();
//        collection.add(new GrantedAuthority() {
//            @Override
//            public String getAuthority() {
//                return userEntity.getJoinType();
//            }
//        });
//        return collection;
//    }
//
//    @Override
//    public String getPassword() {
//        return userEntity.getMemberPassword();
//    }
//
//    @Override
//    public String getUsername() {
//        return userEntity.getMemberEmail();
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }
//}
