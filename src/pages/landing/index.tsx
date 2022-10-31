import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { Table } from "../../components/table";
import { Icon, Button } from "@mui/material";
import { Dialog } from "./../../components/dialog/DialogWrapper/index";
import { styled } from "@mui/material";
import COLORS from "./../../assets/colors/index";
import { theme } from "../../utils/theme";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../../store/Actions/index";

export interface ShowDialogProps {
  id?: number;
  formType: string;
}

export interface ProjectItemProps {
  id: number;
  name: string;
  description: string;
  user: string;
}

export interface UserItemProps {
  id: number;
  name: string;
  email: string;
}

export interface StateProps {
  id: number;
  projectList: ProjectItemProps[];
  userList: UserItemProps[];
  dialog?: boolean;
  formType: string;
  error: boolean;
}

const Root = styled("div")(() => ({
  background: COLORS.lightGray,
  borderRadius: 8,
  padding: "40px 40px",
  width: "100%",
  height: "100vh",
  [theme.breakpoints.down("md")]: {
    padding: "12px 12px",
  },
}));

const ButtonContainer = styled("div")(() => ({
  display: "flex",
  width: "100%",
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
  const listOfProjects = useSelector((state: StateProps) => state.projectList);
  const dispatch = useDispatch();

  const editProject = (id?: number) => {
    showDialog({ formType: "project", id });
  };

  const showDialog = ({ formType, id }: ShowDialogProps) => {
    dispatch({ type: ActionTypes.SHOW_DIALOG, payload: { formType, id } });
  };

  const TableStyle = {
    background: COLORS.solid,
    color: COLORS.black,
    cursor: "pointer",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "5px",
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
      <Table
        title="Projects List"
        data={listOfProjects}
        options={{
          headerStyle: {
            background: COLORS.gray,
            color: COLORS.solid,
            fontWeight: "bold",
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

            //@ts-ignore
            render: ({ id }) => (
              <Icon
                onClick={() => {
                  editProject(id);
                }}
              >
                <EditIcon cursor="pointer" fontSize="small" />
              </Icon>
            ),
          },
        ]}
      />
    </Root>
  );
};
