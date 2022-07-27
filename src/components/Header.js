import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { Button } from "./styles/Button.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>馬上加入</Button>
        </Nav>
        <Flex>
          <div>
            <h1>建立屬於自己的社群平台!</h1>
            <p>
              想要尋找合適的平台經營自己的粉絲社群嗎？Huddle
              提供免費的雲端服務，為您的社群迅速打造方便的溝通平台，增進粉絲們間的交流並卓越壯大！
            </p>
            <Button bg="#ff0099" color="#fff">
              開始免費體驗
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
