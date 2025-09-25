'use client';

import React from 'react';
import { Layout, Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      key: '/',
      label: <Link href="/">Home</Link>,
    },
    {
      key: '/products',
      label: <Link href="/products">Products</Link>,
    },
    {
      key: '/info',
      label: <Link href="/info">Company Info</Link>,
    },
    {
      key: '/service',
      label: <Link href="/service">Service</Link>,
    },
    {
      key: '/contact',
      label: <Link href="/contact">Contact</Link>,
    },
  ];

  return (
    <AntHeader style={{ 
      backgroundColor: '#152A4B',
      padding: '0 20px',
      height: 'auto',
      lineHeight: 'normal'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.gif"
                alt="NVT Logo"
                width={120}
                height={45}
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Navigation Menu */}
          <Menu
            mode="horizontal"
            selectedKeys={[pathname]}
            items={menuItems}
            style={{
              backgroundColor: 'transparent',
              borderBottom: 'none',
              minWidth: 'auto',
            }}
            theme="dark"
            className="flex-1 justify-end"
          />
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
