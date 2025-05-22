
import React from 'react';
import { 
  Home, 
  Calendar, 
  BarChart2, 
  Database, 
  Monitor, 
  Settings,
  Rss
} from 'lucide-react';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: any) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange }) => {
  const menuItems = [
    { id: 'overview', title: 'داشبورد', icon: Home },
    { id: 'calendar', title: 'تقویم محتوا', icon: Calendar },
    { id: 'strategy', title: 'استراتژی سئو', icon: BarChart2 },
    { id: 'sources', title: 'منابع داده', icon: Rss },
    { id: 'monitor', title: 'مانیتورینگ محتوا', icon: Monitor },
    { id: 'settings', title: 'تنظیمات', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h2 className="text-2xl font-bold text-primary">ICAP</h2>
        <p className="text-sm text-muted-foreground">سیستم هوشمند تولید محتوا</p>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              <button
                onClick={() => onPageChange(item.id)}
                className={`flex items-center px-4 py-3 w-full text-right ${
                  activePage === item.id
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="ml-3 w-5 h-5" />
                <span>{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
