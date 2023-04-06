import React from 'react';
import banner from '../../assets/secuirites/banner.png';
import tableLine from '../../assets/secuirites/table-line.png';
import companies from '../../assets/secuirites/companies.png';
function SecuritiesMaker() {
   return (
      <>
         <div>
            <div className="pl-[47px]">
               <p
                  style={{
                     fontFamily: 'Inter',
                     fontStyle: 'normal',
                     fontWeight: 600,
                     fontSize: 24,
                     lineHeight: '29px'
                  }}
               >
                  Шинээр үнэт цаас гаргалт
               </p>
            </div>
            <div className="pt-9 pb-[20px]">
               <img src={banner} className="w-full" />
            </div>
            <div
               style={{
                  gap: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  alignItems: 'center'
               }}
            >
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     alignItems: 'flex-start',
                     padding: '12px 24px ',
                     gap: '24px',
                     alignSelf: 'start'
                  }}
               >
                  <img src={tableLine} />
                  <p
                     style={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: 36,
                        lineHeight: '44px',
                        color: '#272E3B'
                     }}
                  >
                     Тогтворжсон самбар
                  </p>
               </div>
               <div>
                  <div
                     style={{
                        padding: '10px',
                        gap: '10px'
                     }}
                  >
                     <p
                        style={{
                           fontFamily: 'Inter',
                           fontStyle: 'normal',
                           fontWeight: 500,
                           fontSize: 20,
                           lineHeight: '24px'
                        }}
                     >
                        Хувьцааны бүртгэлийн 1-р ангилалд бүртгэлтэй үнэт цаас
                        гаргагч компани нь
                     </p>
                  </div>
                  <div
                     style={{
                        padding: '10px',
                        gap: '10px'
                     }}
                  >
                     <p
                        style={{
                           fontFamily: 'Inter',
                           fontStyle: 'normal',
                           fontWeight: 400,
                           fontSize: 16,
                           lineHeight: '20px'
                        }}
                     >
                        10 тэрбум төгрөгөөс доошгүй зах зээлийн үнэлгээтэй,
                        сүүлийн жилд 5 тэрбум төгрөгөөс доошгүй хэмжээний
                        борлуулалтын орлоготой эсхүл 1 тэрбум төгрөгөөс доошгүй
                        хэмжээний цэвэр ашигтай. Нийт хувьцааны 25 - аас доошгүй
                        хувийг олон нийтэд санал болгосон байх, эсхүл тухайн
                        компанийн хувьцааны хагас жилээрх арилжигдсан үнийн дүн
                        нь биржээр арилжаалагдсан хувьцааны нийт арилжааны үнийн
                        дүнгийн 5 - аас доошгүй хувь байх шалгуур, шаардлагыг
                        тус тус хангасан байна.
                     </p>
                  </div>
               </div>
               <img src={companies} className="w-full" />
            </div>
         </div>
      </>
   );
}
export default SecuritiesMaker;
