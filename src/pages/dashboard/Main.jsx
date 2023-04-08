import React, { useState } from 'react';
import {
   CarOutlined,
   DashboardOutlined,
   UserOutlined,
   SnippetsOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
import '../../style/dashboard.css';
import { Link, Outlet } from 'react-router-dom';
function Main() {
   const {
      token: { colorBgContainer }
   } = theme.useToken();
   return (
      <Layout hasSider theme="dark">
         <Sider
            style={{
               overflow: 'auto',
               height: '100vh',
               position: 'fixed',
               background: '#001529',
               left: 0,
               top: 0,
               bottom: 0
            }}
         >
            <div className="dashboardLogo" />
            <Menu
               theme="dark"
               mode="inline"
               defaultSelectedKeys={['1']}
               items={[
                  {
                     key: '1',
                     icon: <DashboardOutlined />,
                     label: <Link to={'/dashboard'}>Хянах самбар</Link>
                  },
                  {
                     key: '2',
                     icon: <UserOutlined />,
                     label: 'Ажилтаны үйлчилгээ'
                  },
                  {
                     key: '3',
                     icon: <CarOutlined />,
                     label: <Link to={'/dashboard/cargo'}>Ачаа, бараа</Link>
                  },
                  {
                     key: '4',
                     icon: <SnippetsOutlined />,
                     label: 'Тайлан тооцоо'
                  }
               ]}
            />
         </Sider>
         <Layout
            className="site-layout"
            style={{
               marginLeft: 200
            }}
         >
            <Content
               style={{
                  margin: '24px 16px 0',
                  overflow: 'initial'
               }}
            >
               <Outlet />
            </Content>
         </Layout>
      </Layout>
   );
}
export default Main;
