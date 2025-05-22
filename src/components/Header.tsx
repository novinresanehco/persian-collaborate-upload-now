
import React from 'react';
import { Bell, User, Moon, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center rounded-lg border bg-background px-3 w-80">
          <Search className="h-4 w-4 ml-2 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="جستجو..." 
            className="border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 left-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <Moon className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center mr-4">
            <span className="text-sm font-medium ml-3">مدیر سیستم</span>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
