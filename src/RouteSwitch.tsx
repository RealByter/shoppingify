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
        {!signInCheckResult.signedIn && (
          <Route path="/login" element={<Login />} />
        )}
        {signInCheckResult.signedIn && (
          <Route path="/" element={<p>Logged in</p>} />
        )}
        <Route
          path="*"
          element={
            <Navigate to={signInCheckResult.signedIn ? "/" : "/login"} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
