import { RouterProvider } from "react-router-dom";
// import { Link, Route, Routes } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
