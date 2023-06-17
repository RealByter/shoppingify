import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../authentication/Login";
import { useSigninCheck } from "reactfire";
import NavBar from "./NavBar";
import Items from "../items/Items";

const RouteSwitch = () => {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <div></div>;
  }

  return (
    <BrowserRouter>
      <div className="flex">
        {signInCheckResult.signedIn && <NavBar />}
        <div className="grow">
          <Routes>
            {!signInCheckResult.signedIn && (
              <Route path="/login" element={<Login />} />
            )}
            {signInCheckResult.signedIn && (
              <Route path="/" element={<Items />} />
            )}
            <Route
              path="*"
              element={
                <Navigate to={signInCheckResult.signedIn ? "/" : "/login"} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
