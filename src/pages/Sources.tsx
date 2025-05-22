
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { Rss, Globe, Key, Database, Plus, Trash2, Edit2, RefreshCw, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { toPersianDigits } from "@/lib/rtl-utils";

export const Sources: React.FC = () => {
  const { toast } = useToast();
  const [rssSources, setRssSources] = useState([
    {
      id: 1,
      name: 'دیجیاتو',
      url: 'https://digiato.com/feed',
      status: 'active',
      lastFetch: '1404/02/10 12:30',
      frequency: 'هر 2 ساعت',
      categories: ['تکنولوژی', 'دیجیتال مارکتینگ']
    },
    {
      id: 2,
      name: 'زومیت',
      url: 'https://www.zoomit.ir/feed',
      status: 'active',
      lastFetch: '1404/02/10 13:15',
      frequency: 'هر 3 ساعت',
      categories: ['تکنولوژی', 'گجت']
    },
    {
      id: 3,
      name: 'وبلاگ یکتانت',
      url: 'https://blog.yektanet.com/feed',
      status: 'error',
      lastFetch: '1404/02/09 22:45',
      frequency: 'روزانه',
      categories: ['تبلیغات', 'دیجیتال مارکتینگ']
    }
  ]);
  
  const [apiSources, setApiSources] = useState([
    {
      id: 1,
      name: 'Google Trends API',
      type: 'trends',
      key: '********ABCD',
      status: 'active',
      lastFetch: '1404/02/10 14:00',
      frequency: 'روزانه',
      usage: '45/100'
    },
    {
      id: 2,
      name: 'Gemini 1.5 API (1)',
      type: 'text',
      key: '********123X',
      status: 'active',
      lastFetch: '1404/02/10 11:20',
      frequency: 'همیشه فعال',
      usage: '280/600'
    },
    {
      id: 3,
      name: 'Gemini 1.5 API (2)',
      type: 'text',
      key: '********456Y',
      status: 'rate_limited',
      lastFetch: '1404/02/10 09:35',
      frequency: 'همیشه فعال',
      usage: '600/600'
    },
    {
      id: 4,
      name: 'DeepAI Image API',
      type: 'image',
      key: '********789Z',
      status: 'active',
      lastFetch: '1404/02/10 10:15',
      frequency: 'همیشه فعال',
      usage: '15/50'
    }
  ]);

  const refreshSource = (id: number, type: 'rss' | 'api') => {
    toast({
      title: "بروزرسانی منبع",
      description: "منبع مورد نظر در حال بروزرسانی است",
    });
    // در اینجا منطق بروزرسانی منبع را اضافه کنید
  };

  const deleteSource = (id: number, type: 'rss' | 'api') => {
    if (type === 'rss') {
      setRssSources(rssSources.filter(source => source.id !== id));
    } else {
      setApiSources(apiSources.filter(source => source.id !== id));
    }
    
    toast({
      title: "حذف منبع",
      description: "منبع مورد نظر با موفقیت حذف شد",
      variant: "destructive",
    });
  };

  const addRssSource = () => {
    toast({
      title: "منبع RSS جدید",
      description: "منبع RSS جدید با موفقیت اضافه شد",
    });
  };

  const addApiSource = () => {
    toast({
      title: "منبع API جدید",
      description: "منبع API جدید با موفقیت اضافه شد",
    });
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'active':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'rate_limited':
        return <AlertCircle className="h-5 w-5 text-amber-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'active':
        return 'فعال';
      case 'error':
        return 'خطا';
      case 'rate_limited':
        return 'محدودیت تعداد درخواست';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">منابع داده</h1>
          <p className="text-muted-foreground">مدیریت منابع RSS و API‌های هوش مصنوعی</p>
        </div>
      </div>

      <Tabs defaultValue="rss">
        <TabsList className="mb-4">
          <TabsTrigger value="rss" className="flex items-center">
            <Rss className="h-4 w-4 ml-2" />
            منابع RSS
          </TabsTrigger>
          <TabsTrigger value="api" className="flex items-center">
            <Key className="h-4 w-4 ml-2" />
            منابع API
          </TabsTrigger>
        </TabsList>

        <TabsContent value="rss" className="space-y-4">
          <div className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="ml-2 h-4 w-4" />
                  افزودن منبع RSS
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>افزودن منبع RSS جدید</DialogTitle>
                  <DialogDescription>
                    آدرس فید RSS را وارد کنید تا به منابع داده اضافه شود.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right">نام منبع</label>
                    <Input id="name" placeholder="مثال: وبلاگ دیجیاتو" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="url" className="text-right">آدرس RSS</label>
                    <Input id="url" placeholder="https://example.com/feed" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="frequency" className="text-right">دوره بروزرسانی</label>
                    <select id="frequency" className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="1">هر 1 ساعت</option>
                      <option value="2">هر 2 ساعت</option>
                      <option value="3">هر 3 ساعت</option>
                      <option value="6">هر 6 ساعت</option>
                      <option value="12">هر 12 ساعت</option>
                      <option value="24">روزانه</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="categories" className="text-right">دسته‌بندی‌ها</label>
                    <Input id="categories" placeholder="دسته‌ها را با کاما جدا کنید" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={addRssSource}>افزودن منبع</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {rssSources.map((source) => (
              <Card key={source.id} className={source.status === 'error' ? 'border-red-200' : ''}>
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Globe className="h-5 w-5 ml-2 text-primary" />
                      {source.name}
                    </CardTitle>
                    <CardDescription className="mt-1">{source.url}</CardDescription>
                  </div>
                  <div className="flex items-center">
                    {getStatusIcon(source.status)}
                    <span className="text-sm mr-1">{getStatusText(source.status)}</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="text-muted-foreground">آخرین دریافت:</div>
                    <div>{toPersianDigits(source.lastFetch)}</div>
                    <div className="text-muted-foreground">دوره بروزرسانی:</div>
                    <div>{source.frequency}</div>
                    <div className="text-muted-foreground">دسته‌بندی‌ها:</div>
                    <div className="flex flex-wrap gap-1">
                      {source.categories.map((category, i) => (
                        <span key={i} className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={() => deleteSource(source.id, 'rss')}>
                    <Trash2 className="h-4 w-4 ml-1" />
                    حذف
                  </Button>
                  <div className="flex space-x-2 space-x-reverse">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Edit2 className="h-4 w-4 ml-1" />
                          ویرایش
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>ویرایش منبع RSS</DialogTitle>
                        </DialogHeader>
                        {/* فرم ویرایش را در اینجا قرار دهید */}
                      </DialogContent>
                    </Dialog>
                    <Button variant="ghost" size="sm" 
                      onClick={() => refreshSource(source.id, 'rss')}>
                      <RefreshCw className="h-4 w-4 ml-1" />
                      بروزرسانی
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <div className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="ml-2 h-4 w-4" />
                  افزودن کلید API
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>افزودن کلید API جدید</DialogTitle>
                  <DialogDescription>
                    مشخصات API مورد استفاده را وارد کنید.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right">نام API</label>
                    <Input id="name" placeholder="مثال: Gemini API 3" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="type" className="text-right">نوع API</label>
                    <select id="type" className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="text">متن (Text)</option>
                      <option value="image">تصویر (Image)</option>
                      <option value="trends">روندها (Trends)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="key" className="text-right">کلید API</label>
                    <Input id="key" placeholder="API-KEY-..." type="password" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={addApiSource}>افزودن API</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {apiSources.map((source) => (
              <Card key={source.id} className={source.status === 'rate_limited' ? 'border-amber-200' : ''}>
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Database className="h-5 w-5 ml-2 text-primary" />
                      {source.name}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      نوع: {source.type === 'text' ? 'متن' : source.type === 'image' ? 'تصویر' : 'روندها'}
                    </CardDescription>
                  </div>
                  <div className="flex items-center">
                    {getStatusIcon(source.status)}
                    <span className="text-sm mr-1">{getStatusText(source.status)}</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="text-muted-foreground">کلید API:</div>
                    <div>{source.key}</div>
                    <div className="text-muted-foreground">آخرین استفاده:</div>
                    <div>{toPersianDigits(source.lastFetch)}</div>
                    <div className="text-muted-foreground">وضعیت استفاده:</div>
                    <div>
                      <div className="flex items-center">
                        <span>{toPersianDigits(source.usage)}</span>
                        <div className="w-24 h-2 bg-gray-200 rounded mr-2">
                          <div className={`h-full rounded ${
                            parseInt(source.usage.split('/')[0]) / parseInt(source.usage.split('/')[1]) > 0.9 ? 
                            'bg-red-500' : 'bg-green-500'
                          }`} style={{
                            width: `${parseInt(source.usage.split('/')[0]) / parseInt(source.usage.split('/')[1]) * 100}%`
                          }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={() => deleteSource(source.id, 'api')}>
                    <Trash2 className="h-4 w-4 ml-1" />
                    حذف
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Edit2 className="h-4 w-4 ml-1" />
                        ویرایش
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>ویرایش کلید API</DialogTitle>
                      </DialogHeader>
                      {/* فرم ویرایش را در اینجا قرار دهید */}
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
