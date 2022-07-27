import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  const dateNow = new Date();
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <Flex>
          <ul>
            <li>
              此為 Styled Components 之 React App 練習實作，所有文案皆純屬虛構。
            </li>
            <li>+1-123-456-7890</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>關於我們</li>
            <li>服務介紹</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>工作機會</li>
            <li>最新資訊</li>
            <li>聯絡我們</li>
          </ul>
          <SocialIcons />
        </Flex>

        <p>
          &copy; {dateNow.getFullYear().toString()} Huddle. All rights reserved.
        </p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
