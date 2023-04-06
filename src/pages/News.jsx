import React from 'react';
import dogeCoin from '../assets/news/dogeCoin.png';
import shareIcon from '../assets/news/share.png';
import { Container } from 'react-bootstrap';
import TenCarousel from '../components/Carousel';
import bg from '../assets/news/medeeMedeelel.png';
import TenTabs from '../components/Tabs';
function News() {
   const items = [
      {
         url: 'market',
         title: 'Зах зээлийн'
      },
      {
         url: 'trade',
         title: 'Арилжааны'
      },
      {
         url: 'ourExchange',
         title: 'Чингис хаан бирж'
      }
   ];
   return (
      <div>
         <TenCarousel
            height="457px"
            BRadius="8px"
            dataTop="4rem"
            descriptionHeight="200px"
            url="/news"
            data={[
               {
                  id: 154,
                  bgImage: bg,
                  createdAt: '2023.1.20',
                  title: 'ЧИНГИС ХААН ХӨРӨНГИЙН БИРЖ',
                  description: `Засгийн газар болон бусад эрх бүхий этгээдээс гаргасан өрийн бичиг (бонд),
                  компанийн бүх төрлийн хувьцаа, компанийн гаргасан, эсвэл гаргахаар санал болгож
                   буй хувьцааг худалдах, худалдан авах эрхийн бичиг, хөрөнгө оруулалтын сангийн
                  хувьцаа зэргийг нийтэд нь үнэт цаас гэж нэрлэдэг. Өөрөөр хэлбэл, үнэт цаас гэдэг
                  нь таныг тодорхой хэмжээний хөрөнгө оруулалт хийсэн юм уу, зээл олгосон гэдгийг
                  гэрчлэх баримт юм. Үнэт цаасны ашиг,эрсдлийн түвшин нь банкны хадгаламжийг
                  бодвол харьцангуй өндөр байдаг бөгөөд худалдах, бэлэглэх зэргээр бусдад шилжүүлэх
                  боломжтойгоороо онцлогтой.`
               }
            ]}
         />
         <TenTabs url="news" items={items} />
      </div>
   );
}
export default News;
