import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
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
            <Route path="/" element={<Sneaker />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order/new" element={<CreateOrder />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/women" element={<WomenSneakers />} />
            <Route path="/kids" element={<KidsSneakers />} />
            <Route path="/sneakers/:id" element={<SneakerDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ marginTop: '8px' }}
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
