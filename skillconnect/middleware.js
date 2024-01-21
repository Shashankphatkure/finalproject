import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

export const config = {
    matcher: [
        "/course/dashboard",
        "/course/instructor/dashboard",
        "/course/internship/Dashboard",
        "/jobs/Dashboard", 
        ]
  };