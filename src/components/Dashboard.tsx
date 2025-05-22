
import React, { useState } from 'react';
import { useRTL } from "@/lib/rtl-utils";
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Overview } from '../pages/Overview';
import { ContentCalendar } from '../pages/ContentCalendar';
import { SeoStrategy } from '../pages/SeoStrategy';
import { Sources } from '../pages/Sources';
import { Settings } from '../pages/Settings';
import { ContentMonitor } from '../pages/ContentMonitor';
import { useToast } from '@/hooks/use-toast';

type ActivePage = 'overview' | 'calendar' | 'strategy' | 'sources' | 'monitor' | 'settings';

export const Dashboard: React.FC = () => {
  useRTL(); // فعال کردن حالت RTL
  const [activePage, setActivePage] = useState<ActivePage>('overview');
  const { toast } = useToast();

  const renderActivePage = () => {
    switch (activePage) {
      case 'overview':
        return <Overview />;
      case 'calendar':
        return <ContentCalendar />;
      case 'strategy':
        return <SeoStrategy />;
      case 'sources':
        return <Sources />;
      case 'monitor':
        return <ContentMonitor />;
      case 'settings':
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    toast({
      title: "تغییر صفحه",
      description: `شما به صفحه جدید منتقل شدید`,
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col rtl">
      <Header />
      <div className="flex flex-1">
        <Sidebar activePage={activePage} onPageChange={handlePageChange} />
        <main className="flex-1 p-6 overflow-y-auto">
          {renderActivePage()}
        </main>
      </div>
    </div>
  );
};
