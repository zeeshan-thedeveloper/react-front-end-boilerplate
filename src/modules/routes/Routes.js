import { BrowserRouter } from "react-router-dom"
import { Route, Routes as ReactRoutes } from 'react-router'
import { AuthenticationPage } from "../auth"
import { RouteAuthChecker } from "./RouteAuthChecker"
import { DashboardPage } from "../dashboard"
export const Routes = () => {
  

    return <BrowserRouter>
        <ReactRoutes>
            <Route path="/auth" element={<RouteAuthChecker authenticationPath="/auth" path="/auth" component={<AuthenticationPage />} />} />
            <Route path="/dashboard" element={<RouteAuthChecker authenticationPath="/auth" path="/dashboard" component={<DashboardPage />} />} />
        </ReactRoutes>
    </BrowserRouter>
}