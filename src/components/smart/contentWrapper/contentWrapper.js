import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { memo } from 'react';
import prefixes from '../../../core/constants/prefixes';
import tabNames from '../../../core/constants/tabNames';

const htmlEnding = ''; // for build need write here '.html'

const ContentWrapper = ({ children, tabKey }) => {
  const { Header, Footer, Content } = Layout;
  return (
    <>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={`${prefixes.tag}_${tabKey}`}
          >
            <Menu.Item key={`${prefixes.tag}_${tabNames.home}`}>
              <Link href={`/${tabNames.home}${htmlEnding}`}>Home</Link>
            </Menu.Item>
            <Menu.Item key={`${prefixes.tag}_${tabNames.services}`}>
              <Link href={`/${tabNames.services}${htmlEnding}`}>Services</Link>
            </Menu.Item>
            <Menu.Item key={`${prefixes.tag}_${tabNames.contacts}`}>
              <Link href={`/${tabNames.contacts}${htmlEnding}`}>Contacts</Link>
            </Menu.Item>
            <Menu.Item key={`${prefixes.tag}_${tabNames.about}`}>
              <Link href={`/${tabNames.about}${htmlEnding}`}>About</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ height: '2000px', marginTop: '64px' }}>
          {children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default memo(ContentWrapper);
