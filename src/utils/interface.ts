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

export interface DialogComponentProps {
  className?: string;
  children: React.ReactNode;
}
