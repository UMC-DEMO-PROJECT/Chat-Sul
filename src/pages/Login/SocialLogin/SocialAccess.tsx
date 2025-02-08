import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialAccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const accessToken = searchParams.get('access_token');
  const role = searchParams.get('role');

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }

    if (role) {
      if (role === 'TEMP') {
        navigate('/register/social');
      } else {
        localStorage.setItem('role', role);
        navigate('/user');
      }
    }
  }, [accessToken, role, navigate]);

  return null;
};

export default SocialAccess;
