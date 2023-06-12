import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <h1>NAVBAR</h1>
      <Outlet />
    </>
  );
}
