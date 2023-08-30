/* eslint react/prop-types: 0 */
import Loader from './Loader';
import { useUser } from '../features/authentication/useUser';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //load the aunthenticated user
  const { isAuthenticated, isLoading } = useUser();
  //while loading, show a spinner
  //if the user is not authenticated, redirect to login page
  //since useNavigate is a hook, it can only be used inside a component, or in this case we used it inside useEffect
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isAuthenticated, isLoading, navigate]);
  //if the user is authenticated, render the app
  if (isLoading) return <Loader />;
  return children;
}

export default ProtectedRoute;
