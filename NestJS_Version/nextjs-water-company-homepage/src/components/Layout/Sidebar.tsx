'use client';

import React from 'react';
import { Menu, Card } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      key: '/',
      label: <Link className='text-[#888888] text-lg font-medium flex items-center justify-center h-12 w-full' href="/">Home</Link>,
    },
    {
      key: '/products',
      label: <Link className='text-[#888888] text-lg font-medium flex items-center justify-center h-12 w-full' href="/products">Products</Link>,
    },
    {
      key: '/info',
      label: <Link className='text-[#888888] text-lg font-medium flex items-center justify-center h-12 w-full' href="/info">Company Info</Link>,
    },
    {
      key: '/service',
      label: <Link className='text-[#888888] text-lg font-medium flex items-center justify-center h-12 w-full' href="/service">Service</Link>,
    },
    {
      key: '/contact',
      label: <Link className='text-[#888888] text-lg font-medium flex items-center justify-center h-12 w-full' href="/contact">Contact</Link>,
    },
  ];

  return (
    <div className="w-40 bg-transparent">
      <Menu
        mode="vertical"
        selectedKeys={[pathname]}
        items={menuItems}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          color: '#ffffff',
        }}
        theme="dark"
        className="sidebar-menu"
      />
      
      {/* Links Section */}
      <Card 
        style={{ 
          backgroundColor: 'transparent', 
          border: 'none',
          marginTop: '40px'
        }}
      >
        <div className="text-center space-y-4">
          <hr style={{ color: 'white', backgroundColor: 'white' }} />
          <div>
            <a href="http://www.safe-drinkingwater.com" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/link3.jpg" 
                alt="Safe Drinking Water" 
                width={140} 
                height={26}
                className="mb-2"
              />
            </a>
          </div>
          <div>
            <a href="http://www.nedapnaiade.com" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/link4.jpg" 
                alt="Nedap Naiade" 
                width={140} 
                height={26}
              />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
