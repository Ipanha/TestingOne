import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":id",
        element: <ProductDetails />,
      },
      {
        index: "service",
        element: <h2>Service</h2>,
      },
      {
        index: "accessories",
        element: <h2>Accessories</h2>,
      },
      {
        index: "about",
        element: <h2>About</h2>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
