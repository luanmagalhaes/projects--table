import { styled } from "@mui/material";
import React from "react";
import COLORS from "../../../assets/colors";
interface DialogComponentProps {
  className?: string;
  children: React.ReactNode;
}

const Container = styled("div")(({ theme }) => ({
  alignItems: "center",
  background: COLORS.solid,
  borderRadius: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 40,
  zIndex: 4,
  maxWidth: 360,
  paddingTop: "40px",
  width: "100%",
  [theme.breakpoints.down("md")]: {},
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
  return (
    <Container className={className}>
      <InsideContainer>{children}</InsideContainer>
    </Container>
  );
};
