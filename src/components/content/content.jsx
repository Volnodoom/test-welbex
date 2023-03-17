import * as S from "./content.style";

const Content = () => {
  return(
    <S.ContentWrapper>
      <S.ContentTitle>
        Зарабатывайте<br/>
        больше<br/>
        <S.TitleSpecial>с WELBEX</S.TitleSpecial>
      </S.ContentTitle>
      <S.ContentTextOne>Развиваем и контролируем продажи за вас</S.ContentTextOne>

      <S.ContentTextTwo>Вместе с <S.TextSpecial>бесплатной</S.TextSpecial> <S.TextSpecial>консультацией</S.TextSpecial> мы дарим:</S.ContentTextTwo>
      <S.ContentList>
        <S.ContentItem>Skype аудит</S.ContentItem>
        <S.ContentItem>30 виджетов</S.ContentItem>
        <S.ContentItem>Dashboard</S.ContentItem>
        <S.ContentItem>Месяц аmoCRM</S.ContentItem>
      </S.ContentList>
    </S.ContentWrapper>
  );
};

export default Content;
