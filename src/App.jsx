import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Sneaker from './pages/Sneaker';
import Order from './pages/Order';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import WomenSneakers from './pages/WomenSneakers';
import KidsSneakers from './pages/KidsSneakers';
import SneakerDetails from './pages/SneakerDetails';
import CreateOrder from './features/order/CreateOrder';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './ui/ProtectedRoute';
import Users from './ui/Users';
import Accessories from './pages/Accessories';
import Sales from './pages/Sales';
import Favourites from './pages/Favourites';

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
            <Route path="/order/:orderId" element={<Order />} />
            <Route path="/order/new" element={<CreateOrder />} />
            <Route path="/women" element={<WomenSneakers />} />
            <Route path="/kids" element={<KidsSneakers />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sneakers/:id" element={<SneakerDetails />} />
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
      <Toaster
        position="bottom-center"
        gutter={12}
        containerStyle={{ marginBottom: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '12px',
            maxWidth: '500px',
            padding: '12px 18px',
            backgroundColor: '##f5f5f4',
            color: '#44403c',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
