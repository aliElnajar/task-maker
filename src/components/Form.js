import { Box, Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
const Form = ({ setGoals }) => {
  const [details, setDetails] = useState("");
  const [header, setHeader] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [deadline, setDeadline] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newGoal = {
      header,
      details,
      id: Math.floor(Math.random() * 9999),
      color,
      deadline,
    };
    setGoals((prev) => [...prev, newGoal]);
    setHeader("");
    setDetails("");
    setColor("#ffffff");
    setDeadline(new Date());
  };

  const formRef = useRef();
  return (
    <Box>
      <form onSubmit={submitHandler}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            borderRadius: "10px",
            gap: "10px",
            m: "100px auto 50px",
            width: "400px",
            bgcolor: "white",
            boxShadow: "14px 10px 53px -9px rgba(0,0,0,0.78)",
          }}
        >
          <TextField
            label="goal header  "
            placeholder="enter goal summary"
            inputProps={{ style: { color: "black" } }}
            size="large"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            ref={formRef}
            required
          />
          <TextField
            label="goal"
            placeholder="enter goal details"
            inputProps={{ style: { color: "black" } }}
            size="large"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            multiline
            rows={4}
            required
          />
          <TextField
            type="date"
            label="goal deadline"
            onChange={(e) => setDeadline(new Date(e.target.value))}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Your note color"
            type="color"
            variant="standard"
            sx={{ width: "200px" }}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            value={color}
          />

          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{
              backgroundColor: "#6C63FF",
              ":hover": { backgroundColor: "#6C63FF" },
            }}
          >
            add
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;
