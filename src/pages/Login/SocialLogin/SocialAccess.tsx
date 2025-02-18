import { useAuthContext } from '../../../context/AuthContext';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialAccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { setIsLogin } = useAuthContext();

  const accessToken = searchParams.get('access_token');
  const role = searchParams.get('role');
  const venueId = searchParams.get('venueId');

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }

    if (role) {
      if (role === 'TEMP') {
        navigate('/register/social');
      } else if (role === 'USER') {
        localStorage.setItem('role', role);
        setIsLogin(true);
        navigate('/user');
      } else if (role === 'OWNER' && venueId !== null) {
        localStorage.setItem('role', role);
        localStorage.setItem('ownerId', venueId);
        setIsLogin(true);
      }
    }
  }, [accessToken, role, navigate]);

  return null;
};

export default SocialAccess;
