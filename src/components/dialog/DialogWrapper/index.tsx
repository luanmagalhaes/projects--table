import { styled } from "@mui/material";
import { motion } from "framer-motion";
import { DialogComponent } from "../DialogComponent";
import { fadeIn } from "../../../utils/animation";
import { ProjectForm } from "../../forms/ProjectForm";
import { UserForm } from "../../forms/UserForm";

interface DialogWrapperProps {
  className?: string;
  type?: any;
  open: any;
  setOpen: any;
}

const Container = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},
}));

const Layer = styled("div")(({ theme }) => ({
  height: "100vh",
  left: 0,
  position: "fixed",
  top: 0,
  width: "100vw",
  zIndex: 3,
  background: "rgba(0, 0, 0, 0.4)",
}));

const Banner = styled(motion.div)(({ theme }) => ({
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
  borderRadius: 4,
  zIndex: 3,
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("md")]: {},
}));

export const Dialog = ({
  className,
  type,
  open,
  setOpen,
}: DialogWrapperProps) => {
  const FormTypes = {
    PROJECT: <ProjectForm setOpen={setOpen} />,
    USER: <UserForm />,
  };
  return (
    open && (
      <Container className={className}>
        <>
          <Banner initial="initial" animate="animate" variants={fadeIn}>
            <Layer onClick={() => setOpen(false)} />
            <DialogComponent>
              <>{FormTypes.PROJECT}</>
            </DialogComponent>
          </Banner>
        </>
      </Container>
    )
  );
};
