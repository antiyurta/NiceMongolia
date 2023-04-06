import header from '../../assets/secuirites/titleCapture.png';
import TenTabs from '../../components/Tabs';
function Securities() {
   const items = [
      {
         url: 'maker',
         title: 'Үнэт цаас гаргагч'
      },
      {
         url: 'debt',
         title: 'Өрийн хэрэгсэл'
      },
      {
         url: 'fund',
         title: 'Хөрөнгө оруулалтын сан'
      }
   ];
   return (
      <div>
         <img src={header} className="w-100" />
         <div className="pt-12">
            <TenTabs url="securities" items={items} />
         </div>
      </div>
   );
}
export default Securities;
