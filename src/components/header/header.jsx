import { Logo } from "assets/svg/logo";
import { Telegram } from "assets/svg/telegram";
import { Viber } from "assets/svg/viber";
import WhatsApp from "assets/svg/whatsapp";
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

          <S.HeaderNavigationItem>
            <S.HeaderNavigationTextLink href="#">Сертификаты</S.HeaderNavigationTextLink>
          </S.HeaderNavigationItem>
        </S.HeaderNavigationList>
      </S.HeaderNavigation>

      <S.HeaderLogoWrapper>
        <S.HeaderLogo href="#"><Logo /></S.HeaderLogo>
        <S.HeaderLogoMessage>крупный интегратор CRM в Росcии и ещё 8 странах</S.HeaderLogoMessage>
      </S.HeaderLogoWrapper>

      <S.HeaderHiddenSpan className="visually-hidden">Контакты организации</S.HeaderHiddenSpan>
      <S.HeaderContacts>
        <S.PhoneItem>
          <span className="visually-hidden">Телефон</span>
          <a href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
        </S.PhoneItem>

        <S.ContactItem>
          <span className="visually-hidden">Телеграм</span>
          <a href="#"><Telegram width={20} height={20}/></a>
        </S.ContactItem>

        <S.ContactItem>
          <span className="visually-hidden">Вайбер</span>
          <a href="#"><Viber width={20} height={20}/></a>
        </S.ContactItem>

        <S.ContactItem>
          <span className="visually-hidden">Ватсап</span>
          <a href="#"><WhatsApp width={20} height={20}/></a>
        </S.ContactItem>
      </S.HeaderContacts>
    </S.HeaderWrapper>
  );
};

export default Header;
