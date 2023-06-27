import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../authentication/Login";
import { useSigninCheck } from "reactfire";
import NavBar from "./NavBar";
import Items from "../items/Items";
import History from "../history/History";
import ListHistory from "../history/ListHistory";

const RouteSwitch = () => {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <div></div>;
  }

  return (
    <div className="flex">
      {signInCheckResult.signedIn && <NavBar />}
      <div className="grow">
        <Routes>
          {!signInCheckResult.signedIn && (
            <Route path="/login" element={<Login />} />
          )}
          {signInCheckResult.signedIn && (
            <>
              <Route path="/" element={<Items />} />
              <Route path="/history" element={<History />} />
              <Route path="/history/:listId" element={<ListHistory />} />
            </>
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
  );
};

export default RouteSwitch;
