import { styled } from "@mui/material";
import { Alert, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import COLORS from "../../../assets/colors";
import { ActionTypes } from "../../../store/Actions";
import { useState } from "react";
import { StateProps } from "../../../utils/interface";

const Container = styled("div")(() => ({
  maxWidth: "380px",
  width: "100%",
}));

const EditableContainer = styled("div")(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: 22,
}));

const BottomContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  "> button": {
    background: COLORS.darkBlue,
    border: `2px solid ${COLORS.solid}`,
    borderRadius: 8,
    color: COLORS.solid,
    margin: "16px 0px",
    "&:hover": {
      background: COLORS.brown,
      fontWeight: 500,
    },
  },
}));

export const UserForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();
  const listOfUsers = useSelector((state: StateProps) => state.userList);

  const validateFields = () => {
    let correct = true;
    const foundEmail = listOfUsers.find(
      (project) => project.email === userEmail
    );
    if (foundEmail) {
      correct = false;
      setEmailError(true);
      setEmailErrorMessage("E-mail already exists");
    }
    if (userName.length < 3) {
      correct = false;
      setNameError(true);
      setNameErrorMessage("Please type your name");
    }
    if (userEmail.length < 5) {
      correct = false;
      setEmailError(true);
      setEmailErrorMessage("Please type a valid e-mail");
    }
    return correct;
  };

  const hideAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
      hideDialog();
    }, 1000);
  };

  const createUser = () => {
    if (validateFields()) {
      dispatch({
        type: ActionTypes.ADD_USER,
        payload: {
          id: listOfUsers.length + 1,
          name: userName,
          email: userEmail,
        },
      });
      setShowAlert(true);
      hideAlert();
    }
  };

  const hideDialog = () => {
    dispatch({ type: ActionTypes.HIDE_DIALOG });
  };

  return (
    <Container>
      <EditableContainer>
        <TextField
          required
          error={nameError}
          helperText={nameErrorMessage}
          label="NAME"
          placeholder="Please type your name"
          fullWidth
          onFocus={() => {
            setNameError(false);
            setNameErrorMessage("");
          }}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <TextField
          required
          error={emailError}
          helperText={emailErrorMessage}
          label="E-MAIL"
          placeholder="Please type your e-mail"
          fullWidth
          onFocus={() => {
            setEmailError(false);
            setEmailErrorMessage("");
          }}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
      </EditableContainer>
      <BottomContainer>
        <Button onClick={createUser}>CONFIRM</Button>
        <Button onClick={hideDialog}>CLOSE</Button>
      </BottomContainer>
      {showAlert && (
        <Alert
          sx={{
            "& .MuiAlert-message": {
              display: "flex",
              justifyContent: "center",
              width: "100%",
            },
          }}
          severity="success"
        >
          You've created a new user!
        </Alert>
      )}
    </Container>
  );
};
