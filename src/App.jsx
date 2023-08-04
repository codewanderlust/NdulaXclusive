import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Sneaker from './pages/Sneaker';
import Order from './pages/Order';
import Cart from './pages/Cart';
import AppLayout from './ui/AppLayout';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import WomenSneakers from './pages/WomenSneakers';
import KidsSneakers from './pages/KidsSneakers';
import SneakerDetails from './pages/SneakerDetails';

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
            <Route path="/cart" element={<Cart />} />
            <Route path="/women" element={<WomenSneakers />} />
            <Route path="/kids" element={<KidsSneakers />} />
            <Route path="/sneakers/:id" element={<SneakerDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
