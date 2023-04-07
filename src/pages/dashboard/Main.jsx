import React, { useState } from 'react';
import { CarOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
import '../../style/dashboard.css';
import { Link, Outlet } from 'react-router-dom';
function Main() {
   const {
      token: { colorBgContainer }
   } = theme.useToken();
   return (
      <Layout hasSider>
         <Sider
            style={{
               overflow: 'auto',
               height: '100vh',
               position: 'fixed',
               left: 0,
               top: 0,
               bottom: 0
            }}
         >
            <div className="dashboardLogo" />
            <Menu
               theme="light"
               mode="inline"
               items={[
                  {
                     key: '1',
                     icon: <CarOutlined />,
                     label: <Link to={'/dashboard/cargo'}>Ачаа</Link>
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
            <Header
               style={{
                  padding: 0,
                  background: colorBgContainer
               }}
            />
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
