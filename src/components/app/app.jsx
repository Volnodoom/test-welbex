import Content from "components/content/content";
import Footer from "components/footer/footer";
import Header from "components/header/header";
import * as S from "./app.style";

function App() {
  return (
    <S.AppWrapper>
      <Header />
      <Content />
      <Footer />
    </S.AppWrapper>
  );
}

export default App;
