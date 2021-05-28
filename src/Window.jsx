import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div(
  {
    borderTopLeftRadius: "0.8rem",
    borderTopRightRadius: "0.8rem",
    overflow: "hidden",
    border: "1px solid rgba(0, 0, 0, .45)",
    maxHeight: "100vh",
    maxWidth: "100vw",
    position: "absolute",
    top: "50%",
    left: "50%",
    boxShadow: "0 0 1rem .3rem rgba(0, 0, 0, .3)"
  },
  ({ size, position }) => ({
    height: size.height,
    width: size.width,
    transform: `translate(calc(-50% + ${position.y}px), calc(-50% + ${position.x}px))`,
  })
);

const TitleBar = styled.header({
  backgroundColor: "#dedad7",
  color: "#2e3436",
  padding: "1.4rem",
  fontSize: "1.5rem",
  letterSpacing: 0,
  fontWeight: "bold",
  textAlign: "center",
  borderTopLeftRadius: "0.8rem",
  borderTopRightRadius: "0.8rem",
  borderBottom: "1px solid #bfb8b1",
  borderTop: "1px solid #f9f8f8",
});

const Content = styled.div({
  padding: 150,
});

const Window = ({ size = { height: 500, width: 500 } }) => {
  const [windowSize, setWindowSize] = useState(size);
  const [position, setPosition] = useState({ y: 0, x: 0 });

  return (
    <Wrapper size={windowSize} position={position}>
      <TitleBar>Fonts</TitleBar>
      <Content></Content>
    </Wrapper>
  );
};

export default Window;
