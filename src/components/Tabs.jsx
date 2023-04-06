import { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function TenTabs({ url, items }) {
   const navigate = useNavigate();
   const location = useLocation();
   const [activeKey, setActiveKey] = useState(0);
   const onSelect = (key) => {
      setActiveKey(key);
      navigate(`/${url}/${items[key].url}`);
   };
   useEffect(() => {
      if (location) {
         var state = false;
         items?.map((item, index) => {
            if (location?.pathname === `/${url}/${item.url}`) {
               setActiveKey(index);
               state = true;
            }
         });
         if (!state) {
            onSelect(0);
         }
      }
   }, [location]);
   return (
      <div className="iTabs">
         <Tabs
            activeKey={activeKey}
            onSelect={onSelect}
            style={{
               gridTemplateColumns: `repeat(${items?.length}, minmax(0, 1fr)`
            }}
         >
            {items?.map((item, index) => {
               return (
                  <Tab key={index} eventKey={index} title={item.title}>
                     <Outlet />
                  </Tab>
               );
            })}
         </Tabs>
      </div>
   );
}
export default TenTabs;
