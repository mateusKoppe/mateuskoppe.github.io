import styled from "@emotion/styled";

const Button = styled.button({
  fontFamily: "'Cantarell', sans-serif",
  backgroundColor: "transparent",
  border: "none",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.4rem",
  letterSpacing: -0.4,
  transition: "background-color .1s ease",
  borderRadius: "1.2rem",
  padding: ".2rem 1.25rem .3rem 1.25rem",
  ":hover": {
    backgroundColor: "rgba(125, 125, 125, .5)",
  },
});

const TopBarItem = ({ children }) => <Button>{children}</Button>;

export default TopBarItem;
