import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import LostModifyPage from './pages/Owner/LostModify/LostModify';
import SocialRegister from './pages/Register/SocialRegister/SocialRegister';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReserveList_Owner from './pages/Owner/Reserve/ReserveList_Owner';
import Main from './pages/Main/kakao';
import UserShop from './pages/User/Shop/userShop';
import OwnerShop from './pages/Owner/Shop/OwnerShop';
import Menu from './pages/User/MenuList/Menu';
import MenuOwner from './pages/Owner/MenuList/Menu_Owner';
import { useOwnerContext, OwnerProvider } from './context/OwnerContext';
import { PropsWithChildren } from 'react';

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

const OwnerRoute = ({ children }: PropsWithChildren) => {
  const { isRole } = useOwnerContext();
  if (isRole == 'USER') {
    alert('권한이 없습니다.');
    return <Navigate to="/user" replace />;
  }
  return children;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <OwnerProvider>
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
                <Route index element={<Main />} />
                <Route path="shop/:id">
                  <Route index element={<UserShop />} />
                  <Route path="reserve-list" element={<ReserveList />} />
                  <Route path="reserve-form/:id" element={<ReserveForm />} />
                  <Route path="reserve-success" element={<ReserveSuccess />} />
                  <Route path="menu" element={<Menu />} />
                  <Route path="lost-list" element={<LostListPage />} />
                  <Route path="lost-item/:id" element={<LostItemPage />} />
                </Route>
              </Route>
              <Route path="/owner">
                <Route
                  index
                  element={
                    <OwnerRoute>
                      <OwnerShop />
                    </OwnerRoute>
                  }
                />
                <Route
                  path="reserve-list"
                  element={
                    <OwnerRoute>
                      <ReserveList_Owner />
                    </OwnerRoute>
                  }
                />
                <Route
                  path="lost-list"
                  element={
                    <OwnerRoute>
                      <LostListPage_Owner />
                    </OwnerRoute>
                  }
                />
                <Route
                  path="lost-item/:id"
                  element={
                    <OwnerRoute>
                      <LostItemPage_Owner />
                    </OwnerRoute>
                  }
                />
                <Route
                  path="lost-form"
                  element={
                    <OwnerRoute>
                      <LostWritingPage />
                    </OwnerRoute>
                  }
                />
                <Route
                  path="lost-modify/:id"
                  element={
                    <OwnerRoute>
                      <LostModifyPage />
                    </OwnerRoute>
                  }
                />
                <Route
                  path="menu"
                  element={
                    <OwnerRoute>
                      <MenuOwner />
                    </OwnerRoute>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </OwnerProvider>
    </QueryClientProvider>
  );
};

export default App;
