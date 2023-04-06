import React from 'react';
import '../style/table.css';
import { Table } from 'react-bootstrap';
function TenTable({ columns }) {
   return (
      <Table>
         <thead>
            <tr>
               {columns?.map((column, index) => {
                  return <th key={index}>{column.title}</th>;
               })}
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>1</td>
               <td>GLMT</td>
               <td>"ГОЛОМТ КАПИТАЛ ҮЦК" ХХК</td>
               <td>23,852,413,602</td>
            </tr>
            <tr>
               <td>2</td>
               <td>GLMT</td>
               <td>"ГОЛОМТ КАПИТАЛ ҮЦК" ХХК</td>
               <td>23,852,413,602</td>
            </tr>
         </tbody>
      </Table>
   );
}
export default TenTable;
