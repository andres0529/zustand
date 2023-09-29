import { Button } from "@mui/material";
import { useQuestionsStore } from "./store/questions";

const LIMIT_QUESTIONS = 3;

export const Start = () => {
  const fetchQuestions = useQuestionsStore(state => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <Button onClick={() => handleClick()} variant="contained">
        Let's Play!
      </Button>
    </div>
  );
};
