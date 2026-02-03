import { use } from "../../../infra/state";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const userState = use<User>();
