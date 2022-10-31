import { styled } from "@mui/material";
import { motion } from "framer-motion";
import { DialogComponent } from "../DialogComponent";
import { fadeIn } from "../../../utils/animation";
import { ProjectForm } from "../../forms/ProjectForm";
import { UserForm } from "../../forms/UserForm";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../../../store/Actions/index";
import { StateProps } from "../../../utils/interface";

const Layer = styled("div")(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.4)",
  height: "100vh",
  left: 0,
  position: "fixed",
  top: 0,
  width: "100vw",
  zIndex: 3,
}));

const Banner = styled(motion.div)(({ theme }) => ({
  alignItems: "center",
  borderRadius: 4,
  bottom: 0,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
  display: "flex",
  left: 0,
  justifyContent: "center",
  position: "absolute",
  right: 0,
  top: 0,
  width: "100%",
  zIndex: 3,
  [theme.breakpoints.down("md")]: {},
}));

export const Dialog = () => {
  const open = useSelector((state: StateProps) => state.dialog);
  const formType = useSelector((state: StateProps) => state.formType);
  const dispatch = useDispatch();

  const hideDialog = () => {
    dispatch({ type: ActionTypes.HIDE_DIALOG });
  };

  const FormTypes = {
    PROJECT: <ProjectForm />,
    USER: <UserForm />,
  };

  return open ? (
    <Banner initial="initial" animate="animate" variants={fadeIn}>
      <Layer onClick={hideDialog} />
      <DialogComponent>
        {formType === "user" && FormTypes.USER}
        {formType === "project" && FormTypes.PROJECT}
      </DialogComponent>
    </Banner>
  ) : null;
};
