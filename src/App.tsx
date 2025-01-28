import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import LostListPage from './pages/User/LostList/LostList';
import LostItemPage from './pages/User/LostItem/LostItem';
import LostWritingPage from './pages/Owner/LostForm/LostWriting';
import Layout from './Layout';
import ReserveSuccess from './pages/User/ReserveSuccess/ReserveSuccess';
import ReserveList from './pages/User/ReserveList/ReserveList';
import Register from './pages/Register/Register';
import ReserveForm from './pages/User/ReserveForm/ReserveForm';
import LostListPage_Owner from './pages/Owner/LostList/LostList_Owner';
import LostItemPage_Owner from './pages/Owner/LostItem/LostItem_Owner';
import Validate from './pages/Validate/Validate';
// import ReserveListContainer from './components/Owner/ReserveList/ReserveList;
import LostModifyPage from './pages/Owner/LostModify/LostModify';
import SocialRegister from './pages/Register/SocialRegister/SocialRegister';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/register">
              <Route index element={<Register />} />
              <Route path="social" element={<SocialRegister />} />
            </Route>
            <Route path="/validate" element={<Validate />} />
            <Route path="/user">
              <Route index element={<App />} />
              <Route path="shop" element={<App />} />
              <Route path="reserve-list" element={<ReserveList />} />
              <Route path="reserve-form" element={<ReserveForm />} />
              <Route path="reserve-success" element={<ReserveSuccess />} />
              <Route path="menu" element={<App />} />
              <Route path="lost-list" element={<LostListPage />} />
              <Route path="lost-item/:id" element={<LostItemPage />} />
            </Route>
            <Route path="/owner">
              <Route index element={<App />} />
              <Route path="shop" element={<App />} />
              {/* <Route path="reserve-list" element={<ReserveListContainer />} /> */}
              <Route path="lost-list" element={<LostListPage_Owner />} />
              <Route path="lost-item/:id" element={<LostItemPage_Owner />} />
              <Route path="lost-form" element={<LostWritingPage />} />
              <Route path="lost-modify/:id" element={<LostModifyPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
