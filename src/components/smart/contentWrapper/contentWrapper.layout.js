import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { memo } from 'react';

const ContentWrapperLayout = ({ Component, tabIndex }) => {
  const { Header, Footer, Content } = Layout;

  return (
    <>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={tabIndex ? tabIndex : 1}
          >
            <Link href="/">
              <Menu.Item key={'qweqwe'}>home</Menu.Item>
            </Link>
            <Link href="/services">
              <Menu.Item key={'zxczxc'}>services</Menu.Item>
            </Link>
            {/* <Link href="/contacts">
              <Menu.Item key={'asdasd'}>{`nav ${3}`}</Menu.Item>
            </Link>
            <Link href="/about">
              <Menu.Item key={'ghh'}>{`nav ${4}`}</Menu.Item>
            </Link> */}
          </Menu>
        </Header>
        <Content style={{ height: '2000px', marginTop: '64px' }}>
          <Component />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default memo(ContentWrapperLayout);
