import slideShowFill from '../../assets/secuirites/slideshow-fill.png';
import companies from '../../assets/secuirites/companies.png';
function SecuritiesFund() {
   return (
      <div>
         <div
            style={{
               gap: '24px',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start'
            }}
         >
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  padding: '12px 24px ',
                  gap: '24px'
               }}
            >
               <img src={slideShowFill} />
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
                  Хөрөнгө оруулалтын сан
               </p>
            </div>
            <div>
               <img src={companies} />
            </div>
         </div>
      </div>
   );
}
export default SecuritiesFund;
