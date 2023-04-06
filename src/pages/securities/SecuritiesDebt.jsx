import banner from '../../assets/secuirites/banner.png';
import companies from '../../assets/secuirites/companies.png';
function SecuritiesDebt() {
   return (
      <div>
         <p
            style={{
               fontFamily: 'Inter',
               fontStyle: 'normal',
               fontWeight: 600,
               fontSize: 24,
               lineHeight: '29px'
            }}
         >
            Шинэ гарч буй бонд
         </p>
         <div className="pt-9 pb-[20px]">
            <img src={banner} className="w-full" />
         </div>
         <div className="pb-9">
            <p
               style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: 24,
                  lineHeight: '29px'
               }}
            >
               Бүртгэлтэй бондын жагсаалт
            </p>
         </div>
         <img src={companies} className="w-full" />
      </div>
   );
}
export default SecuritiesDebt;
