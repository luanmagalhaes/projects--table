import { styled } from "@mui/material";
import { TextField } from "@mui/material";

const Container = styled("div")(() => ({
  width: "100%",
  "*": {},
}));

const EditableContainer = styled("div")(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: 22,
}));

export const UserForm = () => {
  return (
    <Container>
      <EditableContainer>
        <TextField
          required
          id="outlined-required"
          label="NAME"
          defaultValue="Please type your name"
        />
        <TextField
          required
          id="outlined-required"
          label="E-MAIL"
          defaultValue="Please type your e-mail"
        />
      </EditableContainer>
    </Container>
  );
};
