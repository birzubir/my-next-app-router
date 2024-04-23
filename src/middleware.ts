import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMddleware, [
  "/dashboard",
  "/profile",
  "/login",
  "/register",
]);
