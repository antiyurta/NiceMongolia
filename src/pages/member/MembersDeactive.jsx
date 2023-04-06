import capture from '../../assets/member/deActiveCapture.png';
import TenTabs from '../../components/Tabs';
function MembersDeactive() {
   const items = [
      {
         url: 'first',
         title: 'МХБ-н гишүүний эрх нь цуцлагдсан компаниуд'
      },
      {
         url: 'second',
         title: 'Тусгай зөвшөөрөл нь цуцлагдсан'
      }
   ];
   return (
      <div>
         <img src={capture} className="w-full pb-6" />
         <TenTabs url="membersDeactive" items={items} />
      </div>
   );
}
export default MembersDeactive;
