
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit2, Trash2, Tag, Search } from "lucide-react";

export const SeoStrategy: React.FC = () => {
  const { toast } = useToast();
  const [clusters, setClusters] = useState([
    {
      id: 1,
      name: 'سئوی تکنیکال',
      primaryKeywords: 'سئوی تکنیکال، بهینه‌سازی ساختار، سرعت سایت',
      secondaryKeywords: 'موبایل فرندلی، کنسول سرچ، schema markup',
      priority: 'بالا',
      articles: 15
    },
    {
      id: 2,
      name: 'بازاریابی محتوا',
      primaryKeywords: 'بازاریابی محتوا، استراتژی تولید محتوا، کانورژن',
      secondaryKeywords: 'پرسونا، سفر مشتری، قیف محتوا',
      priority: 'متوسط',
      articles: 23
    },
    {
      id: 3,
      name: 'شبکه‌های اجتماعی',
      primaryKeywords: 'بازاریابی شبکه‌های اجتماعی، اینستاگرام، تلگرام',
      secondaryKeywords: 'اینفلوئنسر، محتوای ویدیویی، تعامل',
      priority: 'متوسط',
      articles: 8
    },
    {
      id: 4,
      name: 'تحلیل و آنالیز',
      primaryKeywords: 'آنالیتیکس، گزارش عملکرد، تحلیل ترافیک',
      secondaryKeywords: 'نرخ تبدیل، نرخ خروج، زمان حضور',
      priority: 'پایین',
      articles: 5
    }
  ]);

  const deleteCluster = (id: number) => {
    setClusters(clusters.filter(cluster => cluster.id !== id));
    toast({
      title: "کلاستر حذف شد",
      description: "استراتژی سئو موردنظر با موفقیت حذف شد",
      variant: "destructive",
    });
  };

  const editCluster = () => {
    toast({
      title: "ویرایش کلاستر",
      description: "اطلاعات استراتژی سئو با موفقیت بروزرسانی شد",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">استراتژی سئو</h1>
          <p className="text-muted-foreground">مدیریت کلاسترهای محتوایی و کلمات کلیدی</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="ml-2 h-4 w-4" />
              کلاستر جدید
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>ایجاد کلاستر جدید</DialogTitle>
              <DialogDescription>
                اطلاعات کلاستر محتوایی جدید را وارد کنید.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">نام کلاستر</label>
                <Input id="name" placeholder="مثال: سئوی تکنیکال" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="primaryKeywords" className="text-right">کلمات کلیدی اصلی</label>
                <Input id="primaryKeywords" placeholder="کلمات را با کاما جدا کنید" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="secondaryKeywords" className="text-right">کلمات کلیدی فرعی</label>
                <Input id="secondaryKeywords" placeholder="کلمات را با کاما جدا کنید" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="priority" className="text-right">اولویت</label>
                <select id="priority" className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="high">بالا</option>
                  <option value="medium">متوسط</option>
                  <option value="low">پایین</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">ایجاد کلاستر</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center space-x-2 space-x-reverse">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input className="pr-10" placeholder="جستجو در کلاسترها و کلمات کلیدی..." />
        </div>
        <Button variant="outline">
          <Tag className="ml-2 h-4 w-4" />
          مدیریت برچسب‌ها
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clusters.map((cluster) => (
          <Card key={cluster.id}>
            <CardHeader className="pb-2">
              <CardTitle>{cluster.name}</CardTitle>
              <CardDescription>اولویت: {cluster.priority}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="text-sm font-medium mb-1">کلمات کلیدی اصلی</h4>
                <div className="flex flex-wrap gap-1">
                  {cluster.primaryKeywords.split('، ').map((keyword, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-1">کلمات کلیدی فرعی</h4>
                <div className="flex flex-wrap gap-1">
                  {cluster.secondaryKeywords.split('، ').map((keyword, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                تعداد مقالات: {cluster.articles}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-0">
              <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50 hover:text-red-700" onClick={() => deleteCluster(cluster.id)}>
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
                    <DialogTitle>ویرایش کلاستر</DialogTitle>
                    <DialogDescription>
                      اطلاعات کلاستر محتوایی را ویرایش کنید.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="edit-name" className="text-right">نام کلاستر</label>
                      <Input id="edit-name" defaultValue={cluster.name} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="edit-primaryKeywords" className="text-right">کلمات کلیدی اصلی</label>
                      <Input id="edit-primaryKeywords" defaultValue={cluster.primaryKeywords} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="edit-secondaryKeywords" className="text-right">کلمات کلیدی فرعی</label>
                      <Input id="edit-secondaryKeywords" defaultValue={cluster.secondaryKeywords} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="edit-priority" className="text-right">اولویت</label>
                      <select id="edit-priority" defaultValue={cluster.priority === 'بالا' ? 'high' : cluster.priority === 'متوسط' ? 'medium' : 'low'} className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option value="high">بالا</option>
                        <option value="medium">متوسط</option>
                        <option value="low">پایین</option>
                      </select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={editCluster}>ذخیره تغییرات</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
