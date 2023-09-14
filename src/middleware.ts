import { NextRequest, NextResponse } from "next/server";


function getUserStatus(token: string) {
  if (token === "admin") {
    return "admin";
  } else if (token === "user") {
    return "user";
  } else {
    return "guest";
  }
}

function getRequiredStatus(pathname: string) {
  if (pathname === "/admin") {
    return "admin";
  } else if (pathname === "/profile") {
    return "user";
  } else {
    return "guest";
  }
}

console.log("helooo");

export default function middleware(req: any) {
  console.log(req.cookies, 'req.cookiesreq.cookiesreq.cookies');
  const token = req.cookies.get("authToken")?.value;;
  let redirect = false;
  const url = req.nextUrl.clone();
  if(url.pathname.includes('/_next/static/')) return
  
  if (url.pathname === '/sign-in') {
    if(!token) return
    redirect = true;
    url.pathname = '/header';
  }

  if (!token) {
    redirect = true
    url.pathname = "/sign-in";
  }
  console.log(url.pathname, 'asdsajkhdjhsagdhsa');
  if(redirect) {
    return NextResponse.redirect(url);
  }
}
