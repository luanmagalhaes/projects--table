import { styled } from "@mui/material";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import COLORS from "../../../assets/colors";

const Container = styled("div")(() => ({
  maxWidth: "380px",
  width: "100%",
}));

const EditableContainer = styled("div")(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: 22,
  width: "100%",
}));

const ProjectInput = styled(TextField)(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: 22,
  width: "100%",
}));

const BottomContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  "> button": {
    color: COLORS.solid,
    background: COLORS.lightBlue,
    border: `1px solid ${"#444444"}`,
    margin: "16px 40px",
    "&:hover": {
      background: COLORS.brown,
      fontWeight: 500,
    },
  },
}));

const FirstButton = styled(Button)(() => ({}));

const SecondButton = styled(Button)(({ theme }) => ({}));

export const ProjectForm = ({ error, text, setOpen }: any) => {
  const [projectName, setProjectName] = useState("");
  const [projectNameError, setProjectNameError] = useState("");
  console.log(projectName);
  return (
    <Container>
      <EditableContainer>
        <ProjectInput
          value={projectName}
          required
          id="outlined-required"
          label="PROJECT NAME"
          defaultValue="Please type your project name"
          error={projectName.length < 0}
          helperText="Incorrect entry."
          fullWidth
        />
        <TextField
          id="filled-multiline-static"
          label="DESCRIPTION"
          multiline
          rows={4}
          defaultValue="Please give a brief description of your project"
          variant="filled"
        />
        <FormControl fullWidth>
          <InputLabel>USERS</InputLabel>
          <Select value={""} label="USERS" onChange={() => {}}>
            <MenuItem value={10}>user 1</MenuItem>
            <MenuItem value={20}>user 2</MenuItem>
            <MenuItem value={30}>user 3</MenuItem>
          </Select>
        </FormControl>
      </EditableContainer>
      <BottomContainer>
        <FirstButton
          onClick={() => {
            setProjectName(projectName);
          }}
        >
          CONFIRM
        </FirstButton>
        <SecondButton
          onClick={() => {
            projectName.length < 0 && setProjectNameError("erro");
            setOpen(false);
          }}
        >
          CLOSE
        </SecondButton>
      </BottomContainer>
    </Container>
  );
};
