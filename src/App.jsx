import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';
import { Suspense } from 'react';
import Loader from './ui/Loader';
const Sneaker = lazy(() => import('./pages/Sneaker'));
const Order = lazy(() => import('./pages/Order'));
const Checkout = lazy(() => import('./pages/Checkout'));
const KidsSneakers = lazy(() => import('./pages/KidsSneakers'));
const Accessories = lazy(() => import('./pages/Accessories'));
const Sales = lazy(() => import('./pages/Sales'));
const WomenSneakers = lazy(() => import('./pages/WomenSneakers'));
const Login = lazy(() => import('./pages/Login'));
const Success = lazy(() => import('./features/success/Success'));
const CreateOrderForm = lazy(() => import('./features/order/CreateOrder'));
const Favorites = lazy(() => import('./features/favorites/Favorites'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const ProtectedRoute = lazy(() => import('./ui/ProtectedRoute'));
const Cart = lazy(() => import('./features/cart/Cart'));
const Users = lazy(() => import('./ui/Users'));
const SneakerDetails = lazy(() => import('./pages/SneakerDetails'));
const AppLayout = lazy(() => import('./ui/AppLayout'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/men" />} />
              <Route path="/men" element={<Sneaker />} />
              <Route
                path="/orders"
                element={
                  <ProtectedRoute>
                    <Order />
                  </ProtectedRoute>
                }
              />

              <Route path="/women" element={<WomenSneakers />} />
              <Route path="/kids" element={<KidsSneakers />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sneakers/:id" element={<SneakerDetails />} />
              <Route
                path="/order/new"
                element={
                  <ProtectedRoute>
                    <CreateOrderForm />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/success"
                element={
                  <ProtectedRoute>
                    <Success />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/favorites"
                element={
                  <ProtectedRoute>
                    <Favorites />
                  </ProtectedRoute>
                }
              />
              <Route
                path="checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="login" element={<Login />} />
            <Route path="users" element={<Users />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
