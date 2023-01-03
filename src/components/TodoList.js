import { Grid, Box, Typography, Stack } from "@mui/material";
import TodoItem from "./TodoItem";
import img from "../media/undraw_no_data_re_kwbl.svg";

const TodoList = ({ goals, setGoals }) => {
  if (!goals.length)
    return (
      <Stack direction="row" my={2} mx="auto" maxWidth="60vw" alignItems="center">
        <img src={img} width="400px" />
        <Box textAlign="center" mx="auto">
          <Typography variant="h3" mb={3}>
            There's no tasks yet
          </Typography>
        </Box>
      </Stack>
    );
  return (
    <Grid
      container
      rowGap="30px"
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      {goals.map((item) => (
        <Grid key={item.id} item xs={12} sm={3}>
          <TodoItem item={item} setGoals={setGoals} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoList;
