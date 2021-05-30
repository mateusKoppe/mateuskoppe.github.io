import styled from "@emotion/styled";

import wallpaperImage from "../assets/adwaita-day.png";
import TopBarItem from "./TopBarItem";

const Wrapper = styled.div({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

const TopBar = styled.div({
  backgroundColor: "black",
  color: "white",
  padding: ".5rem .35rem",
  display: "grid",
  gridTemplateColumns: "40% 20% 40%",
  justifyContent: "space-between",
  fontWeight: "bold",
  fontSize: "1.4rem",
  letterSpacing: -0.4,
});

const Curtain = styled.div({
  backgroundColor: "black",
  flexGrow: 1,
  display: "flex",
  alignItems: "stretch",
});

const Background = styled.div({
  backgroundImage: `url(${wallpaperImage})`,
  backgroundSize: "cover",
  borderTopLeftRadius: "0.8rem",
  borderTopRightRadius: "0.8rem",
  flexGrow: 1,
});

const Session = ({ children }) => {
  return (
    <Wrapper>
      <TopBar>
        <div style={{ textAlign: "left" }}>
          <TopBarItem>Activities</TopBarItem>
        </div>
        <div style={{ textAlign: "center" }}>
          <TopBarItem>May 29 21:32</TopBarItem>
        </div>
        <div style={{ textAlign: "right" }}>
          <TopBarItem>Batery</TopBarItem>
        </div>
      </TopBar>
      <Curtain>
        <Background>{children}</Background>
      </Curtain>
    </Wrapper>
  );
};

export default Session;
