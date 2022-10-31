import { Button } from "@mui/material";
import { Dialog } from "./../../components/dialog/DialogWrapper/index";
import { styled } from "@mui/material";
import COLORS from "./../../assets/colors/index";
import { theme } from "../../utils/theme";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../store/Actions/index";
import { ShowDialogProps } from "../../utils/interface";
import { ProjectsTable } from "./ProjectsTable/index";

const Root = styled("div")(() => ({
  background: COLORS.lightGray,
  borderRadius: 8,
  height: "100vh",
  padding: "40px 40px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    padding: "12px 12px",
  },
}));

const ButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  paddingBottom: 12,
  width: "100%",
  "> button": {
    background: COLORS.brown,
    color: COLORS.solid,
  },
  "& > .MuiButtonBase-root": {
    color: COLORS.solid,
    "&:hover": {
      background: COLORS.darkBlue,
      color: COLORS.solid,
    },
  },
  [theme.breakpoints.down("sm")]: {
    gap: 4,
    "& > .MuiButtonBase-root": {
      fontSize: 12,
    },
  },
}));

export const Landing = () => {
  const dispatch = useDispatch();

  const showDialog = ({ formType, id }: ShowDialogProps) => {
    dispatch({ type: ActionTypes.SHOW_DIALOG, payload: { formType, id } });
  };

  return (
    <Root>
      <Dialog />
      <ButtonContainer>
        <Button
          onClick={() => {
            showDialog({ formType: "project", id: 0 });
          }}
          variant="text"
        >
          New Project
        </Button>
        <Button
          onClick={() => {
            showDialog({ formType: "user" });
          }}
          variant="text"
        >
          New User
        </Button>
      </ButtonContainer>
      <ProjectsTable />
    </Root>
  );
};
