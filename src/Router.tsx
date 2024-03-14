import { createBrowserRouter } from "react-router-dom";
import Main from "./screens/Main";
import ClubInfo from "./screens/ClubInfo";
import Event from "./screens/Event";
import App from "./App";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import MyPage from "./screens/Mypage";
import EventApply from "./screens/EventApply";
import Login from "./screens/Login";
import Register from "./screens/Regiser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "club_info",
        element: <ClubInfo />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "event",
        element: <Event />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "my_page",
        element: <MyPage />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "event_apply",
        element: <EventApply />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "login",
        element: <Login />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "register",
        element: <Register />,
        errorElement: <ErrorComponent />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
{
  /*
function Router() {
  return (
    <BrowserRouter>
      <Header />
      <NavTitle>
        <NavTitleText>메뉴 탭 이름</NavTitleText>
        =====================================================
        {MenusAPI.map((title) => (
          <NavTitleText className="NavTitleText__name" key={title}>
            {title}
          </NavTitleText>
        ))}
        ========백엔드에서 API 받으면 어떤 형식인지에 따라 맞추기=======
      </NavTitle>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/event" element={<Event />} />
        <Route path="/notice" element={<Post />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
*/
}

export default router;
