import { Telegram } from "assets/svg/telegram";
import { Viber } from "assets/svg/viber";
import WhatsApp from "assets/svg/whatsapp";
import * as S from "./footer.style";

const MENU_ITEMS =  [
  {
    link: '#',
    name: 'Расчёт стоимости',
  },
  {
    link: '#',
    name: 'Благодарность клиентов',
  },
  {
    link: '#',
    name: 'Услуги',
  },
  {
    link: '#',
    name: 'Кейсы',
  },
  {
    link: '#',
    name: 'Виджеты',
  },
  {
    link: '#',
    name: 'Сертификаты',
  },
  {
    link: '#',
    name: 'Интеграции',
  },
  {
    link: '#',
    name: 'Блог на Youtube',
  },
  {
    link: '#',
    name: 'Наши клиенты',
  },
  {
    link: '#',
    name: 'Вопрос / Ответ',
  },
];

const Footer = () => {
  return(
    <S.FooterWrapper>
      <S.CompanyWrapper>
        <S.SubTitle>О компании</S.SubTitle>
        <S.FooterSimpleList>
          <S.SimpleListItem>
            <S.ItemLink href="">Партнёрская программа</S.ItemLink>
          </S.SimpleListItem>
          <S.SimpleListItem>
            <S.ItemLink href="">Вакансии</S.ItemLink>
          </S.SimpleListItem>
        </S.FooterSimpleList>
      </S.CompanyWrapper>

      <S.MenuWrapper>
        <S.SubTitle>Меню</S.SubTitle>
        <S.FooterGridList>
          {
            MENU_ITEMS.map(({link, name}, index) => (
              <li>
                <S.ItemLink href={link} key={index}>{name}</S.ItemLink>
              </li>
            ))
          }
        </S.FooterGridList>
      </S.MenuWrapper>

      <S.ContactsWrapper>
        <S.SubTitle>Контакты</S.SubTitle>
        <S.FooterContactsList>
          <S.PhoneItem>
            <span className="visually-hidden">Телефон</span>
            <a href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
          </S.PhoneItem>
          <S.TelegaItem>
            <span className="visually-hidden">Телеграм</span>
            <S.ContactItemLink href="#"><Telegram /></S.ContactItemLink>
          </S.TelegaItem>
          <S.ViberItem>
            <span className="visually-hidden">Вайбер</span>
            <S.ContactItemLink href="#"><Viber /></S.ContactItemLink>
          </S.ViberItem>
          <S.WhatsItem>
            <span className="visually-hidden">Ватсап</span>
            <S.ContactItemLink href="#"><WhatsApp /></S.ContactItemLink>
          </S.WhatsItem>
          <S.AddressItem>
            <span className="visually-hidden">Адрес</span>
            Москва, Путевой проезд 3с1, к 902
          </S.AddressItem>
        </S.FooterContactsList>
      </S.ContactsWrapper>

      <S.UserPoliceWrapper>
        <S.CopyRight>©WELBEX 2022. Все права защищены.</S.CopyRight>
        <S.UserPolicy href="#">Политика конфиденциальности</S.UserPolicy>
      </S.UserPoliceWrapper>
    </S.FooterWrapper>
  );
};

export default Footer;
