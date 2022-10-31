import { createStore } from "redux";
import { ActionTypes } from "./Actions/index";
import initialProjects from "./DataFiles/projectList.json";
import initialUsers from "./DataFiles/userList.json";

const INITIAL_STATE = {
  projectList: initialProjects,
  userList: initialUsers,
  dialog: false,
  formType: "project",
  id: 0,
  error: false,
};

const GlobalState = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_PROJECT:
      return {
        ...state,
        projectList: [...state.projectList, action.payload],
      };
    case ActionTypes.ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      };
    case ActionTypes.EDIT_PROJECT:
      const foundProject = state.projectList.find(
        (project) => project.id === state.id
      );
      foundProject!.name = action.payload.name;
      foundProject!.description = action.payload.description;
      foundProject!.user = action.payload.user;

      const newProjectList = state.projectList.filter(
        (project) => project.id !== state.id
      );
      return {
        ...state,
        projectList: [foundProject, ...newProjectList],
      };
    case ActionTypes.SHOW_DIALOG:
      return {
        ...state,
        dialog: true,
        formType: action.payload.formType,
        id: action.payload.id,
      };
    case ActionTypes.HIDE_DIALOG:
      return {
        ...state,
        dialog: false,
      };
    case ActionTypes.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(GlobalState);

export default store;
