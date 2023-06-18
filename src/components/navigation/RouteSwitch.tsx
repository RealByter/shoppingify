import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
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
    <HashRouter basename={import.meta.env.DEV ? "/" : "/shoppingify/"}>
      <div className="flex">
        {signInCheckResult.signedIn && <NavBar />}
        <div className="grow">
          <Switch>
            {!signInCheckResult.signedIn && (
              <Route path="/login" component={Login} />
            )}
            {signInCheckResult.signedIn && <Route path="/" component={Items} />}
            <Route
              path="*"
              component={() => (
                <Redirect to={signInCheckResult.signedIn ? "/" : "/login"} />
              )}
            />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
};

export default RouteSwitch;
