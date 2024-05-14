import { ReactElement, useEffect, useState } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';

import ScrollToTop from 'hooks/useScrollTop';
import Layout from 'components/layout/layout';
import NotFound from 'components/not-found/not-found';
import Login from 'screen/auth/login';
import Dashboard from 'screen/dashboard/dashboard';
import Trading from 'screen/trading/trading';
import ForgotPassword from 'screen/auth/forgotPassword';
import CommingSoon from 'screen/comingsoon/comming-soon';

// Please read the README FILE

const App = (): ReactElement => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOut = async () => {
      if (loading) {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
      }
    };
    timeOut();
  }, [loading]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={`/login`} replace />} />
        <Route path="/login" element={<Login />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trading" element={<Trading />} />

        <Route path="/customer" element={<CommingSoon />} />
        <Route path="/suppliers" element={<CommingSoon />} />
        <Route path="/financial-institutions" element={<CommingSoon />} />
        <Route path="/products" element={<CommingSoon />} />
        <Route path="/sales" element={<CommingSoon />} />
        <Route path="/purchases" element={<CommingSoon />} />
        <Route path="/reports" element={<CommingSoon />} />
        <Route path="/faq" element={<CommingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ScrollToTop />

      <Backdrop
        open={loading}
        transitionDuration={{ exit: 0 }}
        sx={{
          background: '#E2F6FF',
          zIndex: theme => theme.zIndex.drawer + 1,
        }}>
        <CircularProgress color="secondary" role="presentation" />
      </Backdrop>
    </Layout>
  );
};

export default App;
