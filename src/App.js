import { Container } from "@mui/material";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [goals, setGoals] = useState([]);
  return (
    <Container maxWidth="1000px">
      <Form setGoals={setGoals} />
      <TodoList goals={goals} setGoals={setGoals} />
    </Container>
  );
}

export default App;
