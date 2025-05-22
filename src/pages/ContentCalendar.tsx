
import React, { useState } from 'react';
import { toPersianDigits } from "@/lib/rtl-utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { Calendar, ChevronLeft, ChevronRight, CheckCircle, XCircle } from "lucide-react";

export const ContentCalendar: React.FC = () => {
  const { toast } = useToast();
  const [weekOffset, setWeekOffset] = useState(0);
  const [articles, setArticles] = useState([
    { 
      id: 1, 
      title: 'بهترین روش‌های سئو برای سایت‌های فروشگاهی', 
      keywords: 'سئو، فروشگاه آنلاین، بهینه‌سازی', 
      day: 'شنبه', 
      date: '1404/02/14', 
      status: 'pending' 
    },
    { 
      id: 2, 
      title: 'راهنمای کامل ساخت لینک‌های با کیفیت', 
      keywords: 'بک لینک، لینک سازی، سئو خارجی', 
      day: 'یکشنبه', 
      date: '1404/02/15', 
      status: 'pending' 
    },
    { 
      id: 3, 
      title: 'تکنیک‌های پیشرفته سرعت سازی وبسایت', 
      keywords: 'سرعت سایت، بهینه‌سازی، core web vitals', 
      day: 'دوشنبه', 
      date: '1404/02/16', 
      status: 'pending' 
    },
    { 
      id: 4, 
      title: 'آنالیز رقبا در فضای دیجیتال', 
      keywords: 'آنالیز رقبا، استراتژی سئو، بازاریابی محتوا', 
      day: 'سه‌شنبه', 
      date: '1404/02/17', 
      status: 'pending' 
    },
    { 
      id: 5, 
      title: 'اینفوگرافیک: آمار شبکه‌های اجتماعی در ایران', 
      keywords: 'شبکه اجتماعی، اینفوگرافیک، بازاریابی دیجیتال', 
      day: 'چهارشنبه', 
      date: '1404/02/18', 
      status: 'pending' 
    },
    { 
      id: 6, 
      title: 'چگونه از هوش مصنوعی در تولید محتوا استفاده کنیم', 
      keywords: 'هوش مصنوعی، تولید محتوا، نویسندگی', 
      day: 'پنجشنبه', 
      date: '1404/02/19', 
      status: 'pending' 
    },
    { 
      id: 7, 
      title: 'بررسی تخصصی ابزارهای سئو در سال 1404', 
      keywords: 'ابزار سئو، آنالیز، بهینه‌سازی', 
      day: 'جمعه', 
      date: '1404/02/20', 
      status: 'pending' 
    },
  ]);

  const handlePreviousWeek = () => {
    setWeekOffset(weekOffset - 1);
    toast({
      title: "تغییر هفته",
      description: "هفته قبل نمایش داده شد",
    });
  };

  const handleNextWeek = () => {
    setWeekOffset(weekOffset + 1);
    toast({
      title: "تغییر هفته",
      description: "هفته بعد نمایش داده شد",
    });
  };

  const approveArticle = (id: number) => {
    setArticles(articles.map(article => 
      article.id === id ? { ...article, status: 'approved' } : article
    ));
    toast({
      title: "مقاله تأیید شد",
      description: "مقاله برای تولید محتوا در صف قرار گرفت",
    });
  };

  const rejectArticle = (id: number) => {
    setArticles(articles.map(article => 
      article.id === id ? { ...article, status: 'rejected' } : article
    ));
    toast({
      title: "مقاله رد شد",
      description: "مقاله از برنامه حذف شد",
      variant: "destructive",
    });
  };

  const approveAll = () => {
    setArticles(articles.map(article => 
      article.status === 'pending' ? { ...article, status: 'approved' } : article
    ));
    toast({
      title: "تأیید همه مقالات",
      description: "تمام مقالات هفته برای تولید محتوا در صف قرار گرفتند",
    });
  };

  const getStatusIcon = (status: string) => {
    if (status === 'approved') return <CheckCircle className="text-green-500 ml-2" size={18} />;
    if (status === 'rejected') return <XCircle className="text-red-500 ml-2" size={18} />;
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">تقویم محتوا</h1>
          <p className="text-muted-foreground">مدیریت و برنامه‌ریزی محتوای هفتگی</p>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse">
          <Button variant="outline" onClick={handlePreviousWeek} className="ml-2">
            <ChevronRight className="h-4 w-4 ml-2" />
            هفته قبل
          </Button>
          <Button variant="outline" onClick={handleNextWeek}>
            هفته بعد
            <ChevronLeft className="h-4 w-4 mr-2" />
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 ml-2" />
            برنامه محتوای هفته {toPersianDigits(weekOffset === 0 ? "جاری" : (weekOffset > 0 ? weekOffset + " بعد" : Math.abs(weekOffset) + " قبل"))}
          </CardTitle>
          <CardDescription>
            {toPersianDigits("14 تا 20 اردیبهشت 1404")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {articles.map((article) => (
              <div 
                key={article.id} 
                className={`p-4 border rounded-lg ${
                  article.status === 'approved' ? 'border-green-200 bg-green-50' : 
                  article.status === 'rejected' ? 'border-red-200 bg-red-50 opacity-60' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {getStatusIcon(article.status)}
                    <div>
                      <h3 className="font-medium">{article.title}</h3>
                      <p className="text-sm text-muted-foreground">کلمات کلیدی: {article.keywords}</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium">{article.day}</p>
                    <p className="text-xs text-muted-foreground">{toPersianDigits(article.date)}</p>
                  </div>
                </div>
                
                {article.status === 'pending' && (
                  <div className="flex justify-end mt-3 gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => rejectArticle(article.id)}
                    >
                      <XCircle className="h-4 w-4 ml-1" />
                      رد
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-green-600 hover:text-green-700 hover:bg-green-50"
                      onClick={() => approveArticle(article.id)}
                    >
                      <CheckCircle className="h-4 w-4 ml-1" />
                      تأیید
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">افزودن موضوع جدید</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>افزودن موضوع جدید</DialogTitle>
                <DialogDescription>
                  با افزودن موضوع جدید، یک مقاله به برنامه هفتگی اضافه خواهد شد.
                </DialogDescription>
              </DialogHeader>
              {/* فرم افزودن موضوع جدید - میتوانید در آینده کامل کنید */}
              <DialogFooter>
                <Button>افزودن موضوع</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button onClick={approveAll}>تأیید همه موضوعات</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
