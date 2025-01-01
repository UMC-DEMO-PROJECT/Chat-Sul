import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';

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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<App />} />
        <Route path="/login" element={<App />} />
        <Route path="/user" element={<App />}>
          <Route path="/shop" element={<App />} />
          <Route path="/reserve-list" element={<App />} />
          <Route path="/reserve-form" element={<App />} />
          <Route path="/menu" element={<App />} />
          <Route path="/lost-list" element={<App />} />
          <Route path="/lost-item" element={<App />} />
        </Route>
        <Route path="/owner" element={<App />}>
          <Route path="/shop" element={<App />} />
          <Route path="/reserve" element={<App />} />
          <Route path="/lost-list" element={<App />} />
          <Route path="/lost-item" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
