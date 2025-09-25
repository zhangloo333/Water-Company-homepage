import React from 'react';
import { Card, Row, Col, Divider } from 'antd';
import { ToolOutlined, CustomerServiceOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import Image from 'next/image';
import MainLayout from '@/components/Layout/MainLayout';

const ServicePage: React.FC = () => {
  return (
    <MainLayout>
      <div>
        {/* Header Image */}
        <div className="text-center mb-6">
          <Image 
            src="/images/service.jpg" 
            alt="Our Services" 
            width={300} 
            height={30}
            className="mx-auto"
          />
        </div>

        {/* Service Description */}
        <div className="mb-8">
          <div className="text-white mb-6" style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif', fontSize: '9pt' }}>
            <p className="text-lg mb-4">
              Naiade Technique Maintenance Center in China has been set up at the same time.
            </p>
          </div>
        </div>
        
        <Divider style={{ borderColor: '#ffffff' }} />

        {/* Service Features */}
        <div className="mb-8">
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Card 
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: '#ffffff',
                  height: '100%'
                }}
                headStyle={{ 
                  backgroundColor: 'transparent',
                  borderColor: '#ffffff',
                  color: '#ffffff'
                }}
                bodyStyle={{ 
                  backgroundColor: 'transparent',
                  color: '#ffffff'
                }}
              >
                <div className="text-center">
                  <ToolOutlined style={{ fontSize: '48px', color: '#ffffff', marginBottom: '16px' }} />
                  <h3 className="text-white text-lg mb-4">Technical Support</h3>
                  <p className="text-white text-sm" style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Comprehensive technical support for all Naiade water purification systems, 
                    including installation guidance, troubleshooting, and maintenance services.
                  </p>
                </div>
              </Card>
            </Col>
            
            <Col span={8}>
              <Card 
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: '#ffffff',
                  height: '100%'
                }}
                headStyle={{ 
                  backgroundColor: 'transparent',
                  borderColor: '#ffffff',
                  color: '#ffffff'
                }}
                bodyStyle={{ 
                  backgroundColor: 'transparent',
                  color: '#ffffff'
                }}
              >
                <div className="text-center">
                  <CustomerServiceOutlined style={{ fontSize: '48px', color: '#ffffff', marginBottom: '16px' }} />
                  <h3 className="text-white text-lg mb-4">Customer Service</h3>
                  <p className="text-white text-sm" style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    Dedicated customer service team providing support in multiple languages,
                    ensuring smooth operation and customer satisfaction worldwide.
                  </p>
                </div>
              </Card>
            </Col>
            
            <Col span={8}>
              <Card 
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: '#ffffff',
                  height: '100%'
                }}
                headStyle={{ 
                  backgroundColor: 'transparent',
                  borderColor: '#ffffff',
                  color: '#ffffff'
                }}
                bodyStyle={{ 
                  backgroundColor: 'transparent',
                  color: '#ffffff'
                }}
              >
                <div className="text-center">
                  <SafetyCertificateOutlined style={{ fontSize: '48px', color: '#ffffff', marginBottom: '16px' }} />
                  <h3 className="text-white text-lg mb-4">Quality Assurance</h3>
                  <p className="text-white text-sm" style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif' }}>
                    All products meet international quality standards with certifications
                    from leading institutes ensuring reliable and safe operation.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Product Images */}
        <div className="mt-8">
          <Row gutter={[24, 24]} justify="center">
            <Col span={8}>
              <div className="text-center">
                <Image 
                  src="/images/naiade5_resize.jpg" 
                  alt="Naiade System" 
                  width={120} 
                  height={140}
                  className="mb-4"
                />
                <p className="text-white text-sm">Naiade Water Purification System</p>
              </div>
            </Col>
            
            <Col span={8}>
              <div className="text-center">
                <Image 
                  src="/images/Energy Globe Award 2004 Naiade_Page_1_resize.jpg" 
                  alt="Energy Globe Award" 
                  width={100} 
                  height={140}
                  className="mb-4"
                />
                <p className="text-white text-sm">Energy Globe Award 2004</p>
              </div>
            </Col>
            
            <Col span={8}>
              <div className="text-center">
                <Image 
                  src="/images/naiade-002.jpg" 
                  alt="Naiade Installation" 
                  width={100} 
                  height={140}
                  className="mb-4"
                />
                <p className="text-white text-sm">Field Installation</p>
              </div>
            </Col>
          </Row>
        </div>

        {/* Additional Service Information */}
        <div className="mt-12">
          <Card 
            title="Service Coverage" 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: '#ffffff'
            }}
            headStyle={{ 
              backgroundColor: 'transparent',
              borderColor: '#ffffff',
              color: '#ffffff'
            }}
            bodyStyle={{ 
              backgroundColor: 'transparent',
              color: '#ffffff'
            }}
          >
            <div className="text-white" style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif', fontSize: '9pt' }}>
              <Row gutter={[24, 16]}>
                <Col span={12}>
                  <h4 className="text-white text-base mb-3">Regional Support Centers:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>China Mainland - Nanjing Head Office</li>
                    <li>Southeast Asia - Regional Partners</li>
                    <li>Europe - Netherlands Coordination</li>
                    <li>Africa - Local Distribution Network</li>
                  </ul>
                </Col>
                <Col span={12}>
                  <h4 className="text-white text-base mb-3">Service Features:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>24/7 Emergency Support Hotline</li>
                    <li>Remote Diagnostic Capabilities</li>
                    <li>Spare Parts Availability</li>
                    <li>Training Programs for Operators</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicePage;
