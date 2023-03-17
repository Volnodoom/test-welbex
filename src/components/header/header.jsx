import * as S from "./header.style";

const Header = () => {
  return(
    <S.HeaderWrapper>
      <S.HeaderNavigation>
        <S.HeaderNavigationList>
          <S.HeaderNavigationItem>
            <S.HeaderNavigationTextLink href="#">Услуги</S.HeaderNavigationTextLink>
          </S.HeaderNavigationItem>

          <S.HeaderNavigationItem>
            <S.HeaderNavigationTextLink href="#">Виджеты</S.HeaderNavigationTextLink>
          </S.HeaderNavigationItem>

          <S.HeaderNavigationItem>
            <S.HeaderNavigationTextLink href="#">Интеграции</S.HeaderNavigationTextLink>
          </S.HeaderNavigationItem>

          <S.HeaderNavigationItem>
            <S.HeaderNavigationTextLink href="#">Кейсы</S.HeaderNavigationTextLink>
          </S.HeaderNavigationItem>
        </S.HeaderNavigationList>
      </S.HeaderNavigation>

      <S.HeaderLogo href="#"></S.HeaderLogo>

      <S.HeaderHiddenSpan className="visually-hidden">Контакты организации</S.HeaderHiddenSpan>
      <S.HeaderContacts>
        <li>
          <a href="tel:+7-555-555-55-55">+7-555-555-55-55</a>
        </li>
        <li>
          <span className="visually-hidden">Телеграм</span>
          <a href="#"></a>
        </li>
        <li>
          <span className="visually-hidden">Вайбер</span>
          <a href="#"></a>
        </li>
        <li>
          <span className="visually-hidden">Ватсап</span>
          <a href="#"></a>
        </li>
      </S.HeaderContacts>
    </S.HeaderWrapper>
  );
};

export default Header;
