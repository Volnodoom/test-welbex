import * as S from "./content.style";

const Content = () => {
  return(
    <S.ContentWrapper>
      <S.SubContentWrapper>
        <S.ContentTitle>
          Зарабатывайте<br/>
          больше<br/>
          <S.TitleSpecial>с WELBEX</S.TitleSpecial>
        </S.ContentTitle>
        <S.ContentTextOne>Развиваем и контролируем продажи за вас</S.ContentTextOne>
      </S.SubContentWrapper>

      <S.SubContentWrapper>
        <S.ContentTextTwo>Вместе с <S.TextSpecial>бесплатной</S.TextSpecial> <S.TextSpecial>консультацией</S.TextSpecial> мы дарим:</S.ContentTextTwo>

        <S.ContentListMobile>
          <S.ContentItem>Skype аудит</S.ContentItem>
          <S.ContentItem>30 виджетов</S.ContentItem>
          <S.ContentItem>Dashboard</S.ContentItem>
          <S.ContentItem>Месяц аmoCRM</S.ContentItem>
        </S.ContentListMobile>

        <S.ContentListDesktop>
          <S.ContentItem>Виджеты<S.ContentSubItem>30 готовых решений</S.ContentSubItem></S.ContentItem>
          <S.ContentItem>Dashboard<S.ContentSubItem>с показателями вашего бизнеса</S.ContentSubItem></S.ContentItem>
          <S.ContentItem>Skype Аудит<S.ContentSubItem>отдела продаж и CRM системы</S.ContentSubItem></S.ContentItem>
          <S.ContentItem>35 дней<S.ContentSubItem>использования CRM</S.ContentSubItem></S.ContentItem>
        </S.ContentListDesktop>

        <S.ContentConsultationButton>Получить консультацию</S.ContentConsultationButton>
      </S.SubContentWrapper>
    </S.ContentWrapper>
  );
};

export default Content;
