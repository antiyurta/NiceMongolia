import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function TenCarousel({
   height,
   BRadius,
   dataTop,
   descriptionHeight,
   url,
   data
}) {
   const navigate = useNavigate();
   const onClick = (id) => {
      navigate(url + '/' + id);
   };
   return (
      <Carousel pause="hover" className="mb-[33px]">
         {data?.map((item, index) => {
            return (
               <Carousel.Item
                  key={index}
                  style={{
                     background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%) , url('${item.bgImage}')`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     height: height,
                     borderRadius: BRadius
                  }}
               >
                  <Carousel.Caption
                     style={{
                        top: dataTop,
                        textAlign: 'start'
                     }}
                  >
                     <div className="createdDate">
                        <p>Нийтлэсэн огноо</p>
                        <span className="pl-[10px]">{item.createdAt}</span>
                     </div>
                     <div className="title pt-3">
                        <p>{item.title}</p>
                     </div>
                     <p
                        className="description pt-8"
                        style={{
                           overflow: 'hidden',
                           height: descriptionHeight
                        }}
                     >
                        {item.description}
                     </p>
                     <div
                        className="continue pt-8"
                        onClick={() => onClick(item.id)}
                     >
                        Үргэлжлүүлэх
                     </div>
                  </Carousel.Caption>
               </Carousel.Item>
            );
         })}
      </Carousel>
   );
}
export default TenCarousel;
