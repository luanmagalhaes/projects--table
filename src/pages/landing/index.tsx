import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { Table } from "../../components/table";
import { Icon, Button } from "@mui/material";
import { Dialog } from "./../../components/dialog/DialogWrapper/index";
import { styled } from "@mui/material";
import COLORS from "./../../assets/colors/index";
import { theme } from "../../utils/theme";

interface ProjectProps {
  id: number;
  name: string;
  description: string;
  user: string;
}

const Root = styled("div")(() => ({
  margin: "60px auto",
  padding: "40px 80px 120px",
  maxWidth: 1200,
  width: "100vw",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
}));

const ButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  paddingBottom: 12,
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
  const [projectList, setProjectList] = useState<ProjectProps[]>([
    { id: 1, name: "mary", description: "aqui", user: "aqui" },
    { id: 2, name: "john", description: "aqui", user: "aqui" },
    { id: 3, name: "doe", description: "aqui", user: "aqui" },
    { id: 4, name: "aqui", description: "aqui", user: "aqui" },
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  const TableStyle = {
    background: COLORS.solid,
    color: COLORS.black,
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "5px",
  };

  const [open, setOpen] = useState(false);

  return (
    <Root>
      <Dialog open={open} setOpen={setOpen} />
      <ButtonContainer>
        <Button onClick={() => setOpen(true)} variant="text">
          New Project
        </Button>
        <Button variant="text">New User</Button>
      </ButtonContainer>
      <Table
        title="Projects List"
        data={projectList}
        options={{
          headerStyle: {
            background: COLORS.pink,
            color: COLORS.black,
            fontWeight: 500,
            zIndex: 0,
          },
        }}
        columns={[
          {
            title: "ID",
            field: "id",
            cellStyle: { ...TableStyle, width: "10%" },
          },
          {
            title: "NAME",
            field: "name",
            cellStyle: { ...TableStyle, width: "15%" },
          },
          {
            title: "DESCRIPTION",
            field: "description",
            cellStyle: { ...TableStyle, width: "25%" },
          },
          {
            title: "USER",
            field: "user",
            cellStyle: { ...TableStyle, width: "5%" },
          },
          {
            title: "EDIT",
            field: "id",
            cellStyle: {
              background: COLORS.solid,
              width: "5%",
            },
            render: () => (
              <Icon onClick={() => {}}>
                <EditIcon fontSize="small" />
              </Icon>
            ),
          },
        ]}
      />
    </Root>
  );
};
