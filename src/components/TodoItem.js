import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { milToNormalTime } from "./helpers/DeadlineTimer";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TimerIcon from "@mui/icons-material/Timer";
const TodoItem = ({ item, setGoals }) => {
  const { header, details, id, color, deadline } = item;
  const [remainingTime, setRemainingTime] = useState("");
  const removeHandler = () => {
    setGoals((prev) => prev.filter((item) => item.id !== id));
  };
  useEffect(() => {
    if (!deadline) return;
    const timeLeft = setInterval(() => {
      const timing = Math.abs(deadline - new Date());
      setRemainingTime(milToNormalTime(timing));
    }, 1000);
    return () => clearInterval(timeLeft);
  }, [deadline]);

  return (
    <Box
      width="300px"
      textAlign="center"
      borderRadius="20px"
      position="relative"
      sx={{ padding: "30px" }}
    >
      <Paper elevation={4}>
        <Accordion height="100px" sx={{ backgroundColor: `${color}` }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack fontSize="18px" direction="row" alignItems="center">
              <Button
                size="large"
                color="error"
                sx={{
                  p: "0",
                  position: "absolute",
                  top: "-10 px",
                  left: "-15px",
                }}
                onClick={removeHandler}
              >
                x
              </Button>
              <Box>
                <Typography variant="h4" ml="40px" flexGrow="1">
                  {header}
                </Typography>
                <Divider />
              </Box>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography p={2} mb={2} variant="h5">
                {details}
              </Typography>
              <Divider />
              <Stack
                direction="row"
                gap={1}
                alignItems="center"
                justifyContent="flex-start"
              >
                <TimerIcon sx={{ width: "40px" }} />
                <Typography variant="h6">{remainingTime}</Typography>
              </Stack>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Box>
  );
};

export default TodoItem;
