import { Container, Stack, Typography } from "@mui/material";
import "./App.css";
import JSLogo from "./components/JSLogo";
import { Start } from "./Start";
import { useQuestionsStore } from "./store/questions";

function App() {
  // Using the Zustand state
  const questions = useQuestionsStore(state => state.questions);
  console.log(questions);
  return (
    <main>
      <Container maxWidth="sm">
        <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
          <JSLogo />
          <Typography variant="h2" component="h1">
            Javascript Quiz
          </Typography>
        </Stack>
        <Start />
      </Container>
    </main>
  );
}

export default App;
