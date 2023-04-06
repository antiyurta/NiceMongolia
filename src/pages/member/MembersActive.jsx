import React from 'react';
import capture from '../../assets/member/activeMembersCapture.png';
import TenTabs from '../../components/Tabs';
function MembersActive() {
   const items = [
      {
         url: 'first',
         title: 'Анхдагч зах зээлийн арилжааны идэвх'
      },
      {
         url: 'second',
         title: 'Хоёрдогч зах зээлийн арилжааны идэвх'
      },
      {
         url: 'final',
         title: 'Андеррайтерын үйл ажиллагааны идэвх'
      }
   ];
   return (
      <div>
         <img src={capture} className="w-full pb-6" />
         <TenTabs url="membersActive" items={items} />
      </div>
   );
}
export default MembersActive;
