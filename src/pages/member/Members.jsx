import React from 'react';
import member from '../../assets/member/memberCapture.png';
import listOrder from '../../assets/member/list-ordered.png';
import table from '../../assets/member/tableMembers.png';
function Members() {
   return (
      <div className="pb-14">
         <img src={member} className="w-full pb-6" />
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start',
               padding: '24px',
               gap: '24px',
               boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.08)',
               background: 'white'
            }}
         >
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  padding: 0,
                  gap: '20px',
                  height: '29px'
               }}
            >
               <img
                  src={listOrder}
                  style={{
                     width: 29,
                     height: 29
                  }}
               />
               <p
                  style={{
                     fontFamily: 'Inter',
                     fontStyle: 'normal',
                     fontWeight: 600,
                     fontSize: '24px',
                     lineHeight: '29px',
                     display: 'flex',
                     alignItems: 'center'
                  }}
               >
                  ГИШҮҮН ҮЦК-ИУДЫН ЖАГСААЛТ
               </p>
            </div>
            <div className="w-full">
               <img src={table} className="w-full" />
            </div>
         </div>
      </div>
   );
}
export default Members;
