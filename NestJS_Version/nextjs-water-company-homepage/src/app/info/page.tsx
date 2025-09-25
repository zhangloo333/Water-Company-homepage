import React from 'react';
import { Divider } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/Layout/MainLayout';

const InfoPage: React.FC = () => {
  return (
    <MainLayout>
      <div>
        {/* Header Image */}
        <div className="text-center mb-6">
          <Image 
            src="/images/info.jpg" 
            alt="Company Information" 
            width={400} 
            height={60}
            className="mx-auto"
          />
        </div>
        
        <Divider style={{ borderColor: '#ffffff' }} />

        {/* Main Content */}
        <div className="mb-8">
          <div className="flex">
            {/* Naiade Image */}
            <Image 
              src="/images/naiade-002.jpg" 
              alt="Naiade Water Purification System" 
              width={106} 
              height={159}
              className="float-left mr-4 mb-2"
            />
            
            {/* Content Text */}
            <div className="flex-1">
              <div className="text-white leading-relaxed" style={{ fontFamily: 'Verdana, Arial, Helvetica, sans-serif', fontSize: '9pt' }}>
                <p className="mb-4">
                  <strong>Naiade</strong> is Nedap&apos;s answer to one of the main problems world wide: biologically polluted drinking water. The Naiade is a solar powered water disinfection device. The used disinfection technology is ultra violet light.
                </p>
                
                <p className="mb-4">
                  Since for an effective use of UV light in water a minimal clarity is needed, a set of washable and replaceable pre-filter bags of respectively 25 and 10 micron are installed.
                </p>
                
                <p className="mb-4">
                  After these bags, the water passes a UV lamp, which inactivates bacteria, protozoa and viruses according to the World Health Organisation standards. The whole process does not require any waiting time. Up to 3,000 litres (660 gallons) per day can be treated.
                </p>
                
                <p className="mb-4">
                  According to various tests in leading institutes such as KIWA, The Netherlands, Unesco-IHE, Atira, India, amongst others disinfection rates of log 3 (99,99%) and more have been realized.
                </p>
                
                <p className="mb-4">
                  The PV panel provides energy to an electronics unit which controls several safety aspects of the unit. It also charges a battery in the bottom of the unit, thus enabling the use during cloudy days and during the night.
                </p>
                
                <p className="mb-4">
                  A Naiade can be used anywhere since it operates independent to the grid. It does not need fossil fuel either. All parts can be easily cleaned and re-used. The life time of the UV light is 10,000 hours of use. The unit holds no turning parts. And since it can be installed and operated by anyone, even without any technical education, it already has been installed in over 100 communities world wide: from Indonesia to Brazil and from the Afghanistan mountains to the rainforest of Burkina Faso.
                </p>
                
                <p className="mb-4">
                  In many African and Chinese school the Naiade has reduced illness rates from over 20% to less than 3%.
                </p>
                
                <p className="mb-4">
                  The investment of the Naiade technology for providing a man&apos;s daily need for safe drinking water is less than €2 per person per year.
                </p>
                
                <p className="mb-4">
                  If you want to know more about the Naiade, please, do visit the websites{' '}
                  <a 
                    href="http://www.safe-drinkingwater.com/" 
                    className="text-orange-400 hover:text-orange-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.safe-drinkingwater.com
                  </a>
                  {' '}(English version) or{' '}
                  <a 
                    href="http://www.purificationdeleau.com/" 
                    className="text-orange-400 hover:text-orange-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.purificationdeleau.com
                  </a>
                  {' '}(French version)
                </p>
                
                <div className="text-center mt-6">
                  <Link 
                    href="/info/water" 
                    className="text-orange-500 hover:text-orange-400 text-lg font-medium"
                  >
                    See The Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default InfoPage;
