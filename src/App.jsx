import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Sneaker from './pages/Sneaker';
import Order from '../src/features/order/Order';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import WomenSneakers from './pages/WomenSneakers';
import KidsSneakers from './pages/KidsSneakers';
import SneakerDetails from './pages/SneakerDetails';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './ui/ProtectedRoute';
import Users from './ui/Users';
import Accessories from './pages/Accessories';
import Sales from './pages/Sales';
import Favourites from './pages/Favourites';
import Checkout from './pages/Checkout';
import Success from './features/success/Success';

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
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/men" />} />
            <Route path="/men" element={<Sneaker />} />
            <Route path="/order" element={<Order />} />

            <Route path="/women" element={<WomenSneakers />} />
            <Route path="/kids" element={<KidsSneakers />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sneakers/:id" element={<SneakerDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route
              path="favourites"
              element={
                <ProtectedRoute>
                  <Favourites />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
