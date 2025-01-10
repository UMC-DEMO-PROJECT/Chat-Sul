import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Example from './shared/ui/Input/example';
import Login from './pages/Login/Login';
import LostListPage from './pages/User/LostList/LostList';
import Layout from './Layout';
import ReserveSuccess from './pages/User/ReserveSuccess/ReserveSuccess';
import ReserveList from './pages/User/ReserveList/ReserveList';

/**
 * '/' : Landing Page, 지도 표시
 * '/register' : 회원 가입
 * '/login' : 로그인
 *
 * '/user' -> 손님 로그인 시 UI
 *   '/user/shop' : 가게 화면(유저용)
 *   '/user/reserve-list' : 대관 확인
 *   '/user/reserve-form' : 대관 신청
 *   '/user/menu' : 메뉴판
 *   '/user/lost-list' : 분실물 찾기(유저용)
 *   '/user/lost-item' : 분실물 찾기(유저용, 게시글)
 *
 * '/owner' -> 사장님 로그인 시 UI
 *   '/owner/shop' : 가게 화면(사장님용)
 *   '/owner/reserve' : 대관 확인
 *   '/owner/lost-list' : 분실물 찾기(사장님용)
 *   '/owner/lost-item' : 분실물 찾기(사장님용, 게시글)
 *   '/owner/lost-form' : 분실물 찾기(게시글 작성용)
 *
 */

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Example />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user">
            <Route index element={<App />} />
            <Route path="shop" element={<App />} />
            <Route path="reserve-list" element={<ReserveList />} />
            <Route path="reserve-form" element={<App />} />
            <Route path="reserve-success" element={<ReserveSuccess />} />
            <Route path="menu" element={<App />} />
            <Route path="lost-list" element={<LostListPage />} />
            <Route path="lost-item" element={<App />} />
          </Route>
          <Route path="/owner">
            <Route index element={<App />} />
            <Route path="shop" element={<App />} />
            <Route path="reserve" element={<App />} />
            <Route path="lost-list" element={<App />} />
            <Route path="lost-item" element={<App />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
