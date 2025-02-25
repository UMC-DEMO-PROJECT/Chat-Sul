import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import LostListPage from './pages/User/LostList/LostList';
import LostItemPage from './pages/User/LostItem/LostItem';
import LostWritingPage from './pages/Owner/LostForm/LostWriting';
import Layout from './Layout';
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
import SocialAccess from './pages/Login/SocialLogin/SocialAccess';
import { AuthProvider, useAuthContext } from './context/AuthContext';

const queryClient = new QueryClient();

const OwnerRoute = ({ children }: PropsWithChildren) => {
  const { isRole } = useOwnerContext();
  if (isRole == 'USER') {
    alert('권한이 없습니다.');
    return <Navigate to="/user" replace />;
  }
  return children;
};
const AuthRoute = ({ children }: PropsWithChildren) => {
  const { isLogin } = useAuthContext();
  if (isLogin == false) {
    alert('로그인을 해주세요.');
    return <Navigate to="/" replace />;
  }
  return children;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <OwnerProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Login />} />
                <Route path="/register">
                  <Route index element={<Register />} />
                  <Route path="social" element={<SocialRegister />} />
                </Route>
                <Route path="/login/social" element={<SocialAccess />} />
                <Route
                  path="/validate"
                  element={
                    <AuthRoute>
                      <Validate />
                    </AuthRoute>
                  }
                />
                <Route path="/user">
                  <Route
                    index
                    element={
                      <AuthRoute>
                        <Main />
                      </AuthRoute>
                    }
                  />
                  <Route path="shop/:venueId">
                    <Route
                      index
                      element={
                        <AuthRoute>
                          <UserShop />
                        </AuthRoute>
                      }
                    />
                    <Route
                      path="reserve-list"
                      element={
                        <AuthRoute>
                          <ReserveList />
                        </AuthRoute>
                      }
                    />
                    <Route
                      path="reserve-form/:venueId"
                      element={
                        <AuthRoute>
                          <ReserveForm />
                        </AuthRoute>
                      }
                    />
                    <Route
                      path="menu"
                      element={
                        <AuthRoute>
                          <Menu />
                        </AuthRoute>
                      }
                    />
                    <Route
                      path="lost-list"
                      element={
                        <AuthRoute>
                          <LostListPage />
                        </AuthRoute>
                      }
                    />
                    <Route
                      path="lost-item/:id"
                      element={
                        <AuthRoute>
                          <LostItemPage />
                        </AuthRoute>
                      }
                    />
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
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
