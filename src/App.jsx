import styled from "@emotion/styled";
import Window from "./Window"

const Wrapper = styled.div({
  padding: 60,
  height: "100vh"
})

const App = () => {
  return (
    <Wrapper>
      <Window />
    </Wrapper>
  );
}

export default App;
