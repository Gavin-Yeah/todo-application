export default interface Todo extends TodoContent {
  _id: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoContent {
  title: string;
  description?: string;
}
