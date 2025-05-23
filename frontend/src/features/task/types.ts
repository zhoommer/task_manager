
type CreatedBy = {
  id: string;
  name: string;
  createdAt: string;
}

type Assignment = {
  user: { name: string };
}

export type Task = {
  id: number;
  title: string;
  description: string;
  status: 'waiting' | 'inprogress' | 'test' | 'done';
  priority: 'low' | 'medium' | 'high' | 'critical';
  dueDate: string;
  projectId: number;
  createdById: string;
  createdBy: CreatedBy;
  createdAt: string;
  updatedAt: string;

  assignments: Assignment[];
}

export type Response = {
  message: string;
  data: Task[];
}

export type CreateTaskResponse = {
  id: number;
  title: string;
  description: string;
  status: 'waiting' | 'inprogress' | 'test' | 'done';
  priority: 'low' | 'medium' | 'high' | 'critical';
  dueDate: string;
  projectId: number;
  assignedUserId: string;
}

export type CreateTaskBody = {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  dueDate: Date;
  projectId: number;
  assignedUserId: string;
}

