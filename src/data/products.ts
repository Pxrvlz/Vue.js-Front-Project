export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "ایفون ۱۶ پرو مکس یک ترابایت",
    price: 120000000,
    description: "والا خودمون که ازش سر در نمیاریم، یه گوشی نقره‌ایه، روش سیب گاز زده‌ست، می‌گن گرونه. دستمون رسید گفتیم بذاریم واسه فروش.",
    image: "https://dkstatics-public.digikala.com/digikala-products/66acb234dcba7937054fd35efb673c6a5f820385_1732556359.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    category: "نامشخص"
  },
  {
    id: 2,
    title: "مته صنعتی میلواکی",
    price: 5600000,
    description: "یه دستگاهه قرمزه، سرش فلزیه، معلومه واسه سوراخه ولی دقیقاً نمی‌دونم چیه. از انبار دراومده، سالمه، روشنم میشه.",
    image: "https://abzarmajidi.com/wp-content/uploads/2023/05/%D8%AF%D8%B1%DB%8C%D9%84-%D8%B4%D8%A7%D8%B1%DA%98%DB%8C-%D9%85%DB%8C%D9%84%D9%88%D8%A7%DA%A9%DB%8C-36-%D9%88%D9%84%D8%AA-%D9%85%D8%AF%D9%84-%D9%86%DB%8C%D9%85-%D9%BE%DA%A9.jpg",
    category: "نامشخص"
  },
  {
    id: 3,
    title: "اتاق کامل پراید سفارشی",
    price: 115000000,
    description: "یه اتاق ماشینه، سفیده، به نظر میاد واسه پرایده. کامل و تمیزه، از یه جا اومده که نگم برات. فقط خود بدنه‌ست، موتور و اینا نداره.",
    image: "https://statics.basalam.com/public-9/users/8Nwoz/06-27/L2FYLp2neTX5W9XjJf28CVgrD2Yy3a00u6Pfm4SvYrGSPQxEWC.jpg",
    category: "نامشخص"
  },
  {
    id: 4,
    title: "دوچرخه",
    price: 1200000,
    description: "یه دوچرخه‌ست، سالمه، رکاب داره، ترمزش کار می‌کنه. بچه محل آورد گفت بفروشیم، دیگه ما هم قیمت زدیم روش.",
    image: "https://img9.irna.ir/d/r2/2020/04/23/3/157088735.jpg",
    category: "نامشخص"
  },
  {
    id: 5,
    title: "لاستیک ماشین",
    price: 500000,
    description: "چارتا لاستیکه، نو به نظر میاد، شاید کار نکرده. سایزش روش نوشته ولی خودمون که نخوندیم. اگه به دردت می‌خوره بردار.",
    image: "https://payamagahi.com/Administrator/files/AdsPicture/537568-500x500.jpg",
    category: "نامشخص"
  },
  {
    id: 6,
    title: "جعبه ابزار",
    price: 50000,
    description: "یه جعبه‌ست پر از ابزار ریز و درشت. دقیق نمی‌دونم چی توشه، ولی سنگینه. واسه اهلش شاید به درد بخوره.",
    image: "https://image.torob.com/base/images/si/8l/si8lgFcfLkRcgdsC.jpg_/560x560.webp",
    category: "نامشخص"
  }
];

// تابع برای فرمت کردن قیمت به تومان
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
}