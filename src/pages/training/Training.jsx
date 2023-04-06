import { Carousel, Container } from 'react-bootstrap';
import bg from '../../assets/news/medeeMedeelel.png';
import TenCarousel from '../../components/Carousel';
import TenTabs from '../../components/Tabs';
import Button from 'react-bootstrap/Button';
import { Post } from '../../comman';
import axios from 'axios';
function Training() {
   const getDatas = async () => {
      const responsed = await axios.get(
         'http://43.242.241.218:5027/logistic/service/get?body=%7B%22Command%22%3A%22GetCargo%22%2C%22Parameters%22%3A%7B%22Id%22%3A93242013%7D%7D'
      );
      const data = {
         Command: 'GetCargo',
         Parameters: {
            Id: 93242013
         }
      };
      const response = await Post(
         'logistic/service/run',
         JSON.stringify(data),
         conf
      );
      console.log(response);
   };
   const items = [
      {
         url: 'first',
         title: 'Мэргэжил дээшлүүлэх'
      },
      {
         url: 'second',
         title: 'Гишүүн байгууллагууд'
      },
      {
         url: 'third',
         title: 'Үнэт цаас гаргагчид'
      },
      {
         url: 'fourth',
         title: 'Хөрөнгө оруулагчид'
      }
   ];
   return (
      <div>
         <Button onClick={() => getDatas()}>asdas</Button>
         <TenCarousel
            height="377px"
            BRadius="8px"
            dataTop="5.5rem"
            descriptionHeight="95px"
            url="/training"
            data={[
               {
                  id: 154,
                  bgImage: bg,
                  createdAt: '2020.1.20',
                  title: 'ЧИНГИС ХААН ХӨРӨНГИЙН БИРЖ СУРГАЛТАА ЭХЭЛЛЭЭ',
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
         <TenTabs url="training" items={items} />
      </div>
   );
}
export default Training;
