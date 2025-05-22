
import { useLayoutEffect } from 'react';

export function useRTL() {
  useLayoutEffect(() => {
    document.documentElement.dir = 'rtl';
    document.body.classList.add('rtl');
    
    return () => {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('rtl');
    };
  }, []);
}

export function formatNumber(num: number): string {
  return num.toLocaleString('fa-IR');
}

// تبدیل اعداد انگلیسی به فارسی
export function toPersianDigits(text: string | number): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(text).replace(/[0-9]/g, function(d) {
    return persianDigits[parseInt(d, 10)];
  });
}
