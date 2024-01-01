import { setupServer } from "msw/node";
import { handlers } from "./api/handler";
import { http } from "msw";

export const server = setupServer(...handlers);
