import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useEffect } from 'react';
import { useLocation } from 'wouter';

import Home from '@/pages/Home';
import About from '@/pages/About';
import PracticeAreas from '@/pages/PracticeAreas';
import Team from '@/pages/Team';
import Insights from '@/pages/Insights';
import InsightsArticle from '@/pages/InsightsArticle';
import Contact from '@/pages/Contact';
import PrivacyNotice from '@/pages/PrivacyNotice';
import LegalDisclaimer from '@/pages/LegalDisclaimer';
import NotFound from '@/pages/not-found';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const queryClient = new QueryClient();

// Scroll to top on route change component
function ScrollToTop() {
  const [pathname] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/practice-areas" component={PracticeAreas} />
      <Route path="/team" component={Team} />
      <Route path="/insights" component={Insights} />
      <Route path="/insights/:slug" component={InsightsArticle} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={PrivacyNotice} />
      <Route path="/disclaimer" component={LegalDisclaimer} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <ScrollToTop />
        <div className="flex flex-col min-h-[100dvh]">
          <Navbar />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
