import stackLine from '../../assets/member/stack-line.png';
import tableActive from '../../assets/member/talbeActive.png';
import TenTable from '../../components/Table';
function MembersActiveFinal() {
   const columns = [
      {
         title: '№'
      },
      {
         title: 'Сисбол'
      },
      {
         title: 'ҮЦК-ийн нэр'
      },
      {
         title: 'Арилжааны дүн/Төгрөг/'
      }
   ];
   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            background: 'white',
            boxShadow: '0px 2px 10px rgba(0,0,0,0.08)',
            gap: '24px',
            padding: '24px'
         }}
      >
         <div
            style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-start',
               gap: '13px',
               height: 74
            }}
         >
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: '20px',
                  height: 29
               }}
            >
               <img src={stackLine} />
               <p
                  style={{
                     fontFamily: 'Inter',
                     fontWeight: 600,
                     fontSize: '24px',
                     lineHeight: '29px',
                     display: 'flex',
                     alignItems: 'center'
                  }}
               >
                  Андеррайтерын үйл арилжааны идэвх
               </p>
            </div>
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  padding: '6px 12px',
                  gap: '10px',
                  height: 32
               }}
            >
               <p
                  style={{
                     fontFamily: 'Inter',
                     fontWeight: 400,
                     fontSize: 16,
                     lineHeight: '20px'
                  }}
               >
                  Шинээр үнэт цаас гаргалт /IPO/
               </p>
            </div>
         </div>
         <TenTable columns={columns} />
      </div>
   );
}
export default MembersActiveFinal;
