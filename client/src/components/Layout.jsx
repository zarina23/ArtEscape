import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <h1>Hello</h1>
      <Outlet />
    </>
  );
}
