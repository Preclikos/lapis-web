import { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import keycloak from "./keycloak";
import Preloader from "./components/preloader";
import { ReactKeycloakProvider } from "@react-keycloak/web";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Signout = lazy(() => import("./pages/signout"));
const Error500 = lazy(() => import("./pages/error-500"));
const Error503 = lazy(() => import("./pages/error-503"));
const Error505 = lazy(() => import("./pages/error-505"));
const ErrorNotFound = lazy(() => import("./pages/error-404"));

const App: FC = () => {
    return (
        <ReactKeycloakProvider authClient={keycloak}>
            <Router>
                <Suspense fallback={<Preloader />}>
                    <Routes>
                        {/* Classic Routes */}

                        {/* Dashboard Routes */}
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/signout" element={<Signout />} />

                        {/* Error Pages */}

                        <Route path="/error-500" element={<Error500 />} />
                        <Route path="/error-503" element={<Error503 />} />
                        <Route path="/error-505" element={<Error505 />} />

                        {/* 404 Page Route */}
                        <Route path="*" element={<ErrorNotFound />} />
                    </Routes>
                </Suspense>
            </Router>
        </ReactKeycloakProvider>
    );
};

export default App;
