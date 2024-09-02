import styled from "styled-components";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}
const AppContainer = styled.div`
  width: 100%;
`;

export default App;
