import { Card } from 'react-bootstrap';
import eye from '../assets/news/eye-line.png';
import arrowRight from '../assets/news/arrow-right-line.png';
import '../style/news.css';
function TenCard({
   cols,
   gap,
   BRadius,
   cardHeight,
   imgHeight,
   descriptionHeight,
   items
}) {
   return (
      <div className={`grid grid-cols-${cols} gap-${gap}`}>
         {items?.map((item, index) => {
            return (
               <Card
                  key={index}
                  style={{
                     borderRadius: BRadius,
                     height: cardHeight
                  }}
               >
                  <Card.Img
                     variant="top"
                     src={item.img}
                     style={{
                        borderRadius: BRadius,
                        borderBottomRightRadius: '0px',
                        borderBottomLeftRadius: '0px',
                        height: imgHeight
                     }}
                  />
                  <Card.Body className="pb-0">
                     <div className="info">
                        <div
                           className="coloredInfo"
                           style={{
                              backgroundColor: `${item.infoTypeColor}`
                           }}
                        >
                           <p
                              style={{
                                 color: `${item.infoTextColor}`
                              }}
                           >
                              {item.infoName}
                           </p>
                        </div>
                        <div className="flex items-center">
                           <div className="date">{item.date}</div>
                           <div className="pl-3 share">
                              <img src={item.shareIcon} />
                           </div>
                        </div>
                     </div>
                     <Card.Title className="text-start">
                        {item.title}
                     </Card.Title>
                     <Card.Text
                        className="description"
                        style={{
                           height: descriptionHeight
                        }}
                     >
                        2023 оны 1 дүгээр сарын 25-ны өдөр энгийн арилжаагаар 45
                        хувьцаат компанийн 479,552,444 төгрөгийн үнийн дүн бүхий
                        1,369,435 ширхэг хувьцаа арилжаалагдсанаас 23 компанийн
                        хувьцааны ханш өсөж, 17 компанийн хувьцааны ханш буурсан
                        бол 5 компанийн ханш тогтвортой байлаа. Үүнээс "Жидакс"
                        ХК (SOH +15.00%), "Э-Транс ложистикс" XК (ETR +12.49%)
                        болон "Махимпекс" ХК (MMX +7.08%) зэрэг компаниудын
                        хувьцааны ханш хамгийн өндөр өсөлттэй байсан бол "Увс
                        чацаргана" ХК (CHR -13.85%), "Хөвсгөл алтан дуулга" ХК
                        (ADU -7.21%) болон "Мерекс" ХК (MRX -7.14%)-ийн хувьцаа
                        хамгийн их уналттай байлаа.
                     </Card.Text>
                  </Card.Body>
                  <Card.Footer className="p-0">
                     <div className="card-footer justify-between ">
                        <div className="left">
                           <a>Дэлгэрэнгүй</a>
                           <img src={arrowRight} />
                        </div>
                        <div className="right">
                           <img src={eye} />
                           <p>345,678</p>
                        </div>
                     </div>
                  </Card.Footer>
               </Card>
            );
         })}
      </div>
   );
}
export default TenCard;
