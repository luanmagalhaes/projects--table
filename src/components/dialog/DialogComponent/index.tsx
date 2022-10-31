import { styled } from "@mui/material";
import React from "react";
import COLORS from "../../../assets/colors";
import { useSelector } from "react-redux";
import { StateProps } from "../../../pages/landing";
interface DialogComponentProps {
  className?: string;
  children: React.ReactNode;
}

const Container = styled("div", {
  shouldForwardProp: (prop) => prop !== "error",
})<{ error: boolean }>(({ error, theme }) => ({
  alignItems: "center",
  background: error ? COLORS.pink : COLORS.solid,
  borderRadius: 8,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 40,
  zIndex: 4,
  maxWidth: 560,
  width: "100%",
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
