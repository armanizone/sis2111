import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ScanWebsite } from "./scan-website";
import { InjectionsDetector } from "./injections-detector";
import { HashPassword } from "./hash-password"; 
import { SafeInsctructions } from "./safe-insctructions";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <ScanWebsite />,
      },
      {
        path: "/injections-detector",
        element: <InjectionsDetector />,
      },
      {
        path: "/hash-password",
        element: <HashPassword />,
      },
      {
        path: "/safe-insctructions",
        element: <SafeInsctructions />,
      },
    ],
  },
]);
