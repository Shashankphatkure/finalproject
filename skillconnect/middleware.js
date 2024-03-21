import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

export const config = {
  matcher: [
    "/auth/userprofile",
    "/course/dashboard",
    "/course/instructor/dashboard",
    "/jobs/Dashboard",
    "/internship/dashboard",
    "/course/view/",
    "/recruiter/addinternship",
    "/recruiter/addjob",
    "/chat",
    "/cart/wishlist",
  ],
};
