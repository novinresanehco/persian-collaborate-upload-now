
import React from 'react';
import { toPersianDigits } from "@/lib/rtl-utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from 'lucide-react';

export const Overview: React.FC = () => {
  // داده‌های نمونه - در نسخه نهایی باید از API دریافت شوند
  const stats = [
    { title: 'مقالات منتشر شده', value: 247, icon: BarChart, iconColor: 'text-blue-500', trend: '+14%' },
    { title: 'مقالات در انتظار', value: 13, icon: LineChart, iconColor: 'text-amber-500', trend: '-5%' },
    { title: 'نرخ موفقیت تولید', value: "92%", icon: PieChart, iconColor: 'text-green-500', trend: '+2%' },
  ];

  const recentArticles = [
    { id: 1, title: 'بهترین روش‌های سئو در سال 2025', status: 'published', date: '1404/02/15' },
    { id: 2, title: 'مقایسه فریمورک‌های جاوااسکریپت', status: 'queued', date: '1404/02/18' },
    { id: 3, title: 'راهنمای کامل بازاریابی محتوا', status: 'generating', date: '1404/02/20' },
    { id: 4, title: '10 ترند برتر هوش مصنوعی در سال جاری', status: 'draft', date: '1404/02/22' },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-700';
      case 'queued': return 'bg-blue-100 text-blue-700';
      case 'generating': return 'bg-amber-100 text-amber-700';
      case 'draft': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published': return 'منتشر شده';
      case 'queued': return 'در صف انتشار';
      case 'generating': return 'در حال تولید';
      case 'draft': return 'پیش‌نویس';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">داشبورد مدیریت</h1>
        <p className="text-muted-foreground">خلاصه فعالیت‌ها و وضعیت سیستم</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{toPersianDigits(stat.value)}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {toPersianDigits(stat.trend)} نسبت به ماه گذشته
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>مقالات اخیر</CardTitle>
          <CardDescription>مقالات در حال پردازش و منتشر شده اخیر</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-right font-medium p-3">عنوان</th>
                  <th className="text-right font-medium p-3">وضعیت</th>
                  <th className="text-right font-medium p-3">تاریخ</th>
                </tr>
              </thead>
              <tbody>
                {recentArticles.map((article) => (
                  <tr key={article.id} className="border-b">
                    <td className="p-3">{article.title}</td>
                    <td className="p-3">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs ${getStatusClass(article.status)}`}>
                        {getStatusText(article.status)}
                      </span>
                    </td>
                    <td className="p-3">{toPersianDigits(article.date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
