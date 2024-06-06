import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";
import { authKey } from "./constant/constant";
import getDecodedToken from "./utlis/decodeJwtToken";
// roles routes types
interface IRoutesWithRoles {
  SUPER_ADMIN: RegExp[];
  ADMIN: RegExp[];
  BUDDY: RegExp[];
  [key: string]: RegExp[];
}

// routes start
const authRoutes = ["/login", "/register"];
// common routes for all user
const dashboardCommonRoutes = ["/dashbaord", "/dashboard/change-password"];
const routesWithRoles: IRoutesWithRoles = {
  SUPER_ADMIN: [/^\/dashboard\/super_admin/],
  ADMIN: [/^\/dashboard\/admin/],
  BUDDY: [/^\/dashboard\/buddy/],
};
// routes ends
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request?.nextUrl;
  // retrive accesss token from cookies
  const accessToken = cookies().get(authKey)?.value;
  // if any route match with travel-requset
  if (pathname.startsWith("/travel-request")) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }
  // if user without token then sent him to the login page
  if (!accessToken) {
    // if user without token try to go to the login or register page then do the process
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      // if user with without token want to go any othere route then send the user in the login page
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  //check if accesstoken and pathname include/match dashboardcommonroutes
  if (accessToken && dashboardCommonRoutes.includes(pathname)) {
    return NextResponse.next();
  }
  // decode the token and get the user role
  const { role } = getDecodedToken(accessToken);

  // check if role and routes with roles present
  if (role && routesWithRoles[role]) {
    const routes = routesWithRoles[role];
    // check if route is match with pathname
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/travel-request:path*",
    "/register",
    "/dashboard/:path*",
  ],
};
