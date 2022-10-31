import { FormHelperText, styled } from "@mui/material";
import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import COLORS from "../../../assets/colors";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../../../store/Actions/index";
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
  width: "100%",
}));

const BottomContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  "> button": {
    color: COLORS.solid,
    background: COLORS.darkBlue,
    border: `2px solid ${COLORS.solid}`,
    borderRadius: 8,
    margin: "16px 0px",
    "&:hover": {
      background: COLORS.brown,
      fontWeight: 500,
    },
  },
}));

export const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [user, setUser] = useState("");

  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [selectErrorMessage, setSelectErrorMessage] = useState("");
  const [projectNameError, setProjectNameError] = useState(false);
  const [selectError, setSelectError] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();
  const listOfProjects = useSelector((state: StateProps) => state.projectList);
  const listOfUsers = useSelector((state: StateProps) => state.userList);
  const projectId = useSelector((state: StateProps) => state.id);

  useEffect(() => {
    if (listOfProjects.length > 0 && projectId) {
      const foundProject = listOfProjects.find(
        (project) => project.id === projectId
      );
      setProjectName(foundProject!.name);
      setProjectDescription(foundProject!.description);
      setUser(foundProject!.user);
    }
  }, [listOfProjects, projectId]);

  const validateFields = () => {
    let correct = true;
    if (projectName.length < 1) {
      correct = false;
      setProjectNameError(true);
      setNameErrorMessage("Project name needs to have at least 3 characters");
    }
    if (user.length < 1) {
      correct = false;
      setSelectError(true);
      setSelectErrorMessage("Please select a name");
    }
    return correct;
  };

  const hideAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
      hideDialog();
    }, 1000);
  };

  const createProject = () => {
    if (validateFields()) {
      dispatch({
        type: ActionTypes.ADD_PROJECT,
        payload: {
          id: listOfProjects.length + 1,
          name: projectName,
          description: projectDescription,
          user: user,
        },
      });
      setShowAlert(true);
      hideAlert();
    } else {
      dispatch({
        type: ActionTypes.ERROR,
        payload: true,
      });
    }
  };

  const hideDialog = () => {
    dispatch({ type: ActionTypes.HIDE_DIALOG });
  };

  const editProject = () => {
    dispatch({
      type: ActionTypes.EDIT_PROJECT,
      payload: {
        id: projectId,
        name: projectName,
        description: projectDescription,
        user: user,
      },
    });
    hideDialog();
  };

  return (
    <Container data-testid="project-form">
      <EditableContainer>
        <TextField
          value={projectName}
          required
          id="outlined-required"
          label="PROJECT NAME"
          placeholder="Please type your project name"
          error={projectNameError}
          helperText={nameErrorMessage}
          fullWidth
          onFocus={() => {
            dispatch({
              type: ActionTypes.ERROR,
              payload: false,
            });
            setProjectNameError(false);
            setNameErrorMessage("");
          }}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
          inputProps={{
            "aria-label": "project-name",
          }}
        />
        <TextField
          value={projectDescription}
          id="filled-multiline-static"
          label="DESCRIPTION"
          multiline
          rows={4}
          placeholder="Please give a brief description of your project"
          variant="filled"
          fullWidth
          onChange={(e) => {
            setProjectDescription(e.target.value);
          }}
          inputProps={{
            "aria-label": "project-description",
          }}
        />
        <FormControl fullWidth>
          <InputLabel>USERS</InputLabel>
          <Select
            value={user}
            required
            error={selectError}
            label="USERS"
            onFocus={() => {
              dispatch({
                type: ActionTypes.ERROR,
                payload: false,
              });
              setSelectError(false);
              setSelectErrorMessage("");
            }}
            onChange={(e) => {
              setSelectError(false);
              setUser(e.target.value);
            }}
            data-testid="user-select"
          >
            {listOfUsers.map((item) => (
              <MenuItem value={item.name}>{item.name}</MenuItem>
            ))}
          </Select>
          {selectError && (
            <FormHelperText style={{ color: COLORS.red }}>
              {selectErrorMessage}
            </FormHelperText>
          )}
        </FormControl>
      </EditableContainer>
      <BottomContainer>
        {projectId ? (
          <Button onClick={editProject}>CONFIRM</Button>
        ) : (
          <Button onClick={createProject}>CONFIRM</Button>
        )}
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
          You've created a new project!
        </Alert>
      )}
    </Container>
  );
};
