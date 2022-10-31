import EditIcon from "@material-ui/icons/Edit";
import { Icon } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import COLORS from "../../../assets/colors";
import { Table } from "../../../components/table";
import { ShowDialogProps, StateProps } from "../../../utils/interface";
import { ActionTypes } from "../../../store/Actions/index";

export const ProjectsTable = () => {
  const listOfProjects = useSelector((state: StateProps) => state.projectList);
  const dispatch = useDispatch();

  const showDialog = ({ formType, id }: ShowDialogProps) => {
    dispatch({ type: ActionTypes.SHOW_DIALOG, payload: { formType, id } });
  };

  const editProject = (id?: number) => {
    showDialog({ formType: "project", id });
  };

  const TableStyle = {
    background: COLORS.solid,
    color: COLORS.black,
    cursor: "pointer",
    padding: "5px 15px",
  };

  return (
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
  );
};
