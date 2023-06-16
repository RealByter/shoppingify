import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/authentication/Login";
import { useSigninCheck } from "reactfire";

const RouteSwitch = () => {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <div>loading</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {signInCheckResult.signedIn ? (
          "Logged in"
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
