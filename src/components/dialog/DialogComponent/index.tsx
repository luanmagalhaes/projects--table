import { styled } from "@mui/material";
import COLORS from "../../../assets/colors";
import { useSelector } from "react-redux";
import { DialogComponentProps, StateProps } from "../../../utils/interface";

const Container = styled("div", {
  shouldForwardProp: (prop) => prop !== "error",
})<{ error: boolean }>(({ error, theme }) => ({
  alignItems: "center",
  background: error ? COLORS.pink : COLORS.solid,
  borderRadius: 8,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 560,
  padding: 40,
  width: "100%",
  zIndex: 4,
  [theme.breakpoints.down("md")]: {
    padding: 20,
    width: "80%",
  },
}));

const InsideContainer = styled("div")(() => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

export const DialogComponent = ({
  className,
  children,
}: DialogComponentProps) => {
  const error = useSelector((state: StateProps) => state.error);

  return (
    <Container error={error} className={className}>
      <InsideContainer>{children}</InsideContainer>
    </Container>
  );
};
