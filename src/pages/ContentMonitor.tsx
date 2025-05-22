
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { Search, FileText, Eye, Edit, Send, Clock, AlertTriangle, CheckCircle, XCircle, Filter } from "lucide-react";
import { toPersianDigits } from "@/lib/rtl-utils";

export const ContentMonitor: React.FC = () => {
  const { toast } = useToast();
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: '10 استراتژی برتر سئو برای کسب و کارهای کوچک',
      status: 'published',
      date: '1404/02/05',
      seoCluster: 'سئوی تکنیکال',
      views: 342,
      wordCount: 1520
    },
    {
      id: 2,
      title: 'هوش مصنوعی چگونه کسب و کارها را متحول می‌کند',
      status: 'generating',
      date: '1404/02/14',
      seoCluster: 'تکنولوژی',
      views: 0,
      wordCount: 0
    },
    {
      id: 3,
      title: 'راهنمای کامل گوگل آنالیتیکس 4',
      status: 'draft',
      date: '1404/02/12',
      seoCluster: 'تحلیل و آنالیز',
      views: 0,
      wordCount: 980
    },
    {
      id: 4,
      title: '7 روش برتر بازاریابی محتوا در اینستاگرام',
      status: 'scheduled',
      date: '1404/02/16',
      seoCluster: 'شبکه‌های اجتماعی',
      views: 0, 
      wordCount: 1280
    },
    {
      id: 5,
      title: 'افزایش نرخ تبدیل با استفاده از اصول روانشناسی',
      status: 'failed',
      date: '1404/02/10',
      seoCluster: 'بازاریابی محتوا',
      views: 0,
      wordCount: 320,
      error: 'خطای دسترسی به API - کد 429'
    }
  ]);

  const viewArticle = (id: number) => {
    toast({
      title: "مشاهده مقاله",
      description: "در حال بارگذاری محتوای مقاله...",
    });
  };

  const editArticle = (id: number) => {
    toast({
      title: "ویرایش مقاله",
      description: "ویرایشگر مقاله باز شد",
    });
  };

  const publishArticle = (id: number) => {
    setArticles(articles.map(article => 
      article.id === id ? { ...article, status: 'published' } : article
    ));
    
    toast({
      title: "انتشار مقاله",
      description: "مقاله با موفقیت منتشر شد",
      variant: "default",
    });
  };

  const retryArticle = (id: number) => {
    setArticles(articles.map(article => 
      article.id === id ? { ...article, status: 'generating' } : article
    ));
    
    toast({
      title: "تلاش مجدد",
      description: "تولید محتوا دوباره آغاز شد",
      variant: "default",
    });
  };

  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'generating': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'scheduled': return 'bg-purple-100 text-purple-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'published': return <CheckCircle className="h-4 w-4" />;
      case 'generating': return <Clock className="h-4 w-4" />;
      case 'draft': return <FileText className="h-4 w-4" />;
      case 'scheduled': return <Clock className="h-4 w-4" />;
      case 'failed': return <AlertTriangle className="h-4 w-4" />;
      default: return null;
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'published': return 'منتشر شده';
      case 'generating': return 'در حال تولید';
      case 'draft': return 'پیش‌نویس';
      case 'scheduled': return 'زمانبندی شده';
      case 'failed': return 'ناموفق';
      default: return status;
    }
  };

  const getArticleActions = (article: any) => {
    switch(article.status) {
      case 'published':
        return (
          <div className="flex space-x-1 space-x-reverse">
            <Button variant="ghost" size="sm" onClick={() => viewArticle(article.id)}>
              <Eye className="h-4 w-4 ml-1" />
              مشاهده
            </Button>
          </div>
        );
      case 'draft':
        return (
          <div className="flex space-x-1 space-x-reverse">
            <Button variant="ghost" size="sm" onClick={() => editArticle(article.id)}>
              <Edit className="h-4 w-4 ml-1" />
              ویرایش
            </Button>
            <Button variant="ghost" size="sm" onClick={() => publishArticle(article.id)}>
              <Send className="h-4 w-4 ml-1" />
              انتشار
            </Button>
          </div>
        );
      case 'failed':
        return (
          <div className="flex space-x-1 space-x-reverse">
            <Button variant="ghost" size="sm" onClick={() => retryArticle(article.id)}>
              <Clock className="h-4 w-4 ml-1" />
              تلاش مجدد
            </Button>
            <Button variant="ghost" size="sm" onClick={() => editArticle(article.id)}>
              <Edit className="h-4 w-4 ml-1" />
              ویرایش
            </Button>
          </div>
        );
      case 'scheduled':
        return (
          <div className="flex space-x-1 space-x-reverse">
            <Button variant="ghost" size="sm" onClick={() => publishArticle(article.id)}>
              <Send className="h-4 w-4 ml-1" />
              انتشار فوری
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">مانیتورینگ محتوا</h1>
          <p className="text-muted-foreground">نظارت و مدیریت محتوای تولید شده</p>
        </div>
      </div>

      <div className="flex items-center space-x-2 space-x-reverse">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input className="pr-10" placeholder="جستجو در مقالات..." />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Filter className="ml-2 h-4 w-4" />
              فیلترها
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>فیلتر مقالات</DialogTitle>
              <DialogDescription>
                معیارهای فیلتر را انتخاب کنید.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">وضعیت</label>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <input type="checkbox" id="published" className="ml-2" />
                    <label htmlFor="published">منتشر شده</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="draft" className="ml-2" />
                    <label htmlFor="draft">پیش‌نویس</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="scheduled" className="ml-2" />
                    <label htmlFor="scheduled">زمانبندی شده</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">کلاستر سئو</label>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <input type="checkbox" id="technical" className="ml-2" />
                    <label htmlFor="technical">سئوی تکنیکال</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="content" className="ml-2" />
                    <label htmlFor="content">بازاریابی محتوا</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="social" className="ml-2" />
                    <label htmlFor="social">شبکه‌های اجتماعی</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button>اعمال فیلترها</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">همه مقالات</TabsTrigger>
          <TabsTrigger value="published">منتشر شده</TabsTrigger>
          <TabsTrigger value="draft">پیش‌نویس</TabsTrigger>
          <TabsTrigger value="generating">در حال تولید</TabsTrigger>
          <TabsTrigger value="failed">ناموفق</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>لیست مقالات</CardTitle>
              <CardDescription>مدیریت و مشاهده وضعیت تمامی مقالات</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right font-medium p-3">عنوان</th>
                      <th className="text-right font-medium p-3">وضعیت</th>
                      <th className="text-right font-medium p-3">تاریخ</th>
                      <th className="text-right font-medium p-3">کلاستر</th>
                      <th className="text-right font-medium p-3">کلمات</th>
                      <th className="text-right font-medium p-3">بازدید</th>
                      <th className="text-right font-medium p-3">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.map((article) => (
                      <tr key={article.id} className="border-b">
                        <td className="p-3">{article.title}</td>
                        <td className="p-3">
                          <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${getStatusBadgeClass(article.status)}`}>
                            <span className="ml-1">{getStatusIcon(article.status)}</span>
                            <span>{getStatusText(article.status)}</span>
                          </div>
                        </td>
                        <td className="p-3">{toPersianDigits(article.date)}</td>
                        <td className="p-3">{article.seoCluster}</td>
                        <td className="p-3">{toPersianDigits(article.wordCount)}</td>
                        <td className="p-3">{toPersianDigits(article.views)}</td>
                        <td className="p-3">
                          {getArticleActions(article)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="published">
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right font-medium p-3">عنوان</th>
                      <th className="text-right font-medium p-3">تاریخ انتشار</th>
                      <th className="text-right font-medium p-3">کلاستر</th>
                      <th className="text-right font-medium p-3">کلمات</th>
                      <th className="text-right font-medium p-3">بازدید</th>
                      <th className="text-right font-medium p-3">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles
                      .filter(article => article.status === 'published')
                      .map((article) => (
                        <tr key={article.id} className="border-b">
                          <td className="p-3">{article.title}</td>
                          <td className="p-3">{toPersianDigits(article.date)}</td>
                          <td className="p-3">{article.seoCluster}</td>
                          <td className="p-3">{toPersianDigits(article.wordCount)}</td>
                          <td className="p-3">{toPersianDigits(article.views)}</td>
                          <td className="p-3">
                            {getArticleActions(article)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* سایر تب‌ها با محتوای مشابه اما فیلتر شده */}
        <TabsContent value="draft">
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right font-medium p-3">عنوان</th>
                      <th className="text-right font-medium p-3">کلاستر</th>
                      <th className="text-right font-medium p-3">کلمات</th>
                      <th className="text-right font-medium p-3">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles
                      .filter(article => article.status === 'draft')
                      .map((article) => (
                        <tr key={article.id} className="border-b">
                          <td className="p-3">{article.title}</td>
                          <td className="p-3">{article.seoCluster}</td>
                          <td className="p-3">{toPersianDigits(article.wordCount)}</td>
                          <td className="p-3">
                            {getArticleActions(article)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="generating">
          {/* محتوای مشابه با فیلتر مناسب */}
        </TabsContent>

        <TabsContent value="failed">
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-right font-medium p-3">عنوان</th>
                      <th className="text-right font-medium p-3">کلاستر</th>
                      <th className="text-right font-medium p-3">خطا</th>
                      <th className="text-right font-medium p-3">عملیات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles
                      .filter(article => article.status === 'failed')
                      .map((article) => (
                        <tr key={article.id} className="border-b">
                          <td className="p-3">{article.title}</td>
                          <td className="p-3">{article.seoCluster}</td>
                          <td className="p-3 text-red-600">{article.error}</td>
                          <td className="p-3">
                            {getArticleActions(article)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
