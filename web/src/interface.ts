export interface IQueryResult {
  related?: string;
  answer?: string;
  contexts?: Record<string, any>[];
}

export interface ISelectOptions {
  name: string;
  value: string;
}

export type Role = 'user' | 'assistant'

export interface IMessage {
  role: Role;
  content: string;
}