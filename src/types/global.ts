export interface IErrorResponse {
  statusCode: number;
  message: string;
  errorMessage: {
    path: string | number;
    message: string;
  }[];
}
// pagination meta info
export interface IMeta {
  pages: number;
  limits: number;
  total: number;
}
export interface IUser {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}
