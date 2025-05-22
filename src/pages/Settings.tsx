
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { Database, Save, RefreshCw, ServerCrash, Shield, CloudOff, Download } from "lucide-react";

export const Settings: React.FC = () => {
  const { toast } = useToast();

  const saveSettings = () => {
    toast({
      title: "تنظیمات ذخیره شد",
      description: "تغییرات شما با موفقیت ذخیره شد",
    });
  };

  const resetSettings = () => {
    toast({
      title: "بازنشانی تنظیمات",
      description: "تنظیمات به حالت پیش‌فرض بازگشت",
      variant: "destructive",
    });
  };

  const testConnection = () => {
    toast({
      title: "تست اتصال",
      description: "اتصال با موفقیت برقرار شد",
      variant: "default",
    });
  };

  const downloadBackup = () => {
    toast({
      title: "دانلود پشتیبان",
      description: "فایل پشتیبان آماده دانلود است",
      variant: "default",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">تنظیمات</h1>
        <p className="text-muted-foreground">پیکربندی سیستم و مدیریت اتصالات</p>
      </div>

      <Tabs defaultValue="database">
        <TabsList className="mb-4">
          <TabsTrigger value="database">پایگاه داده</TabsTrigger>
          <TabsTrigger value="cms">اتصالات CMS</TabsTrigger>
          <TabsTrigger value="system">تنظیمات سیستم</TabsTrigger>
          <TabsTrigger value="backup">پشتیبان‌گیری</TabsTrigger>
        </TabsList>

        <TabsContent value="database" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="ml-2 h-5 w-5" />
                تنظیمات پایگاه داده اصلی
              </CardTitle>
              <CardDescription>
                پیکربندی اتصال به پایگاه داده MySQL
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">سرور دیتابیس</label>
                  <Input defaultValue="localhost" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">نام دیتابیس</label>
                  <Input defaultValue="icap_db" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">نام کاربری</label>
                  <Input defaultValue="icap_user" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">رمز عبور</label>
                  <Input type="password" defaultValue="********" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">پورت</label>
                  <Input defaultValue="3306" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">پیشوند جداول</label>
                  <Input defaultValue="icap_" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 space-x-reverse">
                <Button variant="outline" onClick={testConnection}>
                  <ServerCrash className="ml-2 h-4 w-4" />
                  تست اتصال
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>اتصال به وردپرس</CardTitle>
              <CardDescription>
                تنظیمات اتصال به سایت وردپرس
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">آدرس سایت وردپرس</label>
                  <Input defaultValue="https://example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">نام کاربری مدیر</label>
                  <Input defaultValue="admin" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">کلید API</label>
                  <Input defaultValue="wp_api_key_123456" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">دسته‌بندی پیش‌فرض</label>
                  <Input defaultValue="blog" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>اتصال به سیستم مدیریت محتوای اختصاصی</CardTitle>
              <CardDescription>
                تنظیمات اتصال به CMS اختصاصی
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">آدرس سایت</label>
                  <Input defaultValue="https://custom-cms.example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">کلید API</label>
                  <Input defaultValue="custom_api_key_123456" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">نام جدول محتوا</label>
                  <Input defaultValue="content" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">فیلد عنوان</label>
                  <Input defaultValue="title" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">فیلد محتوا</label>
                  <Input defaultValue="content_html" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">فیلد متای SEO</label>
                  <Input defaultValue="meta_description" />
                </div>
              </div>
              <div className="flex justify-end space-x-2 space-x-reverse">
                <Button variant="outline" onClick={testConnection}>
                  <ServerCrash className="ml-2 h-4 w-4" />
                  تست اتصال
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="ml-2 h-5 w-5" />
                تنظیمات سیستم
              </CardTitle>
              <CardDescription>
                پیکربندی عملکرد و حالت‌های سیستم
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">تعداد مقالات هفتگی</label>
                  <Input type="number" defaultValue="7" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">حداقل تعداد کلمات مقاله</label>
                  <Input type="number" defaultValue="800" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">حداکثر تعداد کلمات مقاله</label>
                  <Input type="number" defaultValue="1500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">زمان اجرای برنامه‌ریزی هفتگی (روز)</label>
                  <select className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="5">پنجشنبه</option>
                    <option value="6" selected>جمعه</option>
                    <option value="7">شنبه</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-medium">حالت‌های سیستم</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between border p-3 rounded-lg">
                    <div>
                      <h4 className="font-medium">حالت تولید خودکار</h4>
                      <p className="text-sm text-muted-foreground">محتوا پس از تأیید مدیر به صورت خودکار تولید می‌شود</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between border p-3 rounded-lg">
                    <div>
                      <h4 className="font-medium">حالت انتشار خودکار</h4>
                      <p className="text-sm text-muted-foreground">محتوای تولید شده به صورت خودکار در زمان مقرر منتشر می‌شود</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between border p-3 rounded-lg">
                    <div>
                      <h4 className="font-medium">بررسی محتوای تولید شده توسط مدیر</h4>
                      <p className="text-sm text-muted-foreground">محتوای تولید شده قبل از انتشار نیاز به تأیید مدیر دارد</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between border p-3 rounded-lg">
                    <div>
                      <h4 className="font-medium">حالت آفلاین</h4>
                      <p className="text-sm text-muted-foreground">سیستم به صورت موقت غیرفعال می‌شود</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={resetSettings}>
                <RefreshCw className="ml-2 h-4 w-4" />
                بازنشانی
              </Button>
              <Button onClick={saveSettings}>
                <Save className="ml-2 h-4 w-4" />
                ذخیره تنظیمات
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CloudOff className="ml-2 h-5 w-5" />
                پشتیبان‌گیری و بازیابی
              </CardTitle>
              <CardDescription>
                تهیه و بازیابی نسخه پشتیبان از داده‌ها و تنظیمات
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border p-4 rounded-lg">
                  <h3 className="text-base font-medium mb-2">پشتیبان‌گیری</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    تهیه نسخه پشتیبان از تمام داده‌ها و تنظیمات سیستم
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <input type="checkbox" id="backup_data" defaultChecked className="ml-2" />
                      <label htmlFor="backup_data">داده‌های محتوا</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="backup_settings" defaultChecked className="ml-2" />
                      <label htmlFor="backup_settings">تنظیمات سیستم</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="backup_logs" defaultChecked className="ml-2" />
                      <label htmlFor="backup_logs">لاگ‌ها</label>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button onClick={downloadBackup}>
                      <Download className="ml-2 h-4 w-4" />
                      دانلود پشتیبان
                    </Button>
                  </div>
                </div>

                <div className="border p-4 rounded-lg">
                  <h3 className="text-base font-medium mb-2">بازیابی</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    بازیابی نسخه پشتیبان قبلی در سیستم
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">انتخاب فایل پشتیبان</label>
                      <Input type="file" />
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="restore_overwrite" className="ml-2" />
                      <label htmlFor="restore_overwrite" className="text-red-600">بازنویسی داده‌های موجود</label>
                    </div>
                    <Button variant="outline">بازیابی نسخه پشتیبان</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
