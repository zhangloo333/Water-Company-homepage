"use client";

import { useState } from "react";
import { Row, Col, Divider, Modal } from "antd";
import Image from "next/image";
import MainLayout from "@/components/Layout/MainLayout";

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const handleImageClick = (imageSrc: string, imageAlt: string) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <MainLayout>
      <div>
        {/* Hero Image */}
        <div className="text-left mb-6">
          <h2 className="text-yellow-500 text-2xl font-bold">About Us</h2>
        </div>

        <Divider style={{ borderColor: "#ffffff" }} />

        {/* Company Description */}
        <div className="mb-8">
          <p
            className="text-white text-sm leading-relaxed mb-4"
            style={{
              fontFamily: "Verdana, Arial, Helvetica, sans-serif",
              fontSize: "9pt",
            }}
          >
            Nanjing Venture Technology Co,. Ltd. (NVT), founded in a
            long-history and cultural city Nanjing, the ancient capital of six
            dynasties, locates in the centre of Yangtze River Delta. Having
            absorbed the essence of the city culture, we keep developing with
            over ten years experience on international cooperation in modern
            high-tech times.
          </p>

          <p
            className="text-white text-sm leading-relaxed mb-4"
            style={{
              fontFamily: "Verdana, Arial, Helvetica, sans-serif",
              fontSize: "9pt",
            }}
          >
            Now we have an elite team with the members graduated from
            first-class universities. We are professional and keep moving in the
            area of water purification, shipbuilding, and electronics, etc.
            Cooperating with the companies from Holland, Belgium and other
            European countries, NVT constantly refreshes the record of its
            development.
          </p>

          <p
            className="text-white text-sm leading-relaxed mb-4"
            style={{
              fontFamily: "Verdana, Arial, Helvetica, sans-serif",
              fontSize: "9pt",
            }}
          >
            NVT has good cooperative relationship with China CDC, National
            Center for Rural Water Supply Technical Guidance (briefed as
            NCRWSTG), Health Departments of each province, Chinese large-scale
            shipyards and electronics manufactories. We always get high praises
            from all of our business partners.
          </p>

          <p
            className="text-white text-sm leading-relaxed mb-4"
            style={{
              fontFamily: "Verdana, Arial, Helvetica, sans-serif",
              fontSize: "9pt",
            }}
          >
            Our faith ---- Creatable cooperation, constant development;
            <br />
            Our aim ---- Steady progress, realistic innovation.
          </p>

          <p
            className="text-white text-sm leading-relaxed"
            style={{
              fontFamily: "Verdana, Arial, Helvetica, sans-serif",
              fontSize: "9pt",
            }}
          >
            We believe in a better future together with all of our business
            partners.
          </p>
        </div>

        <Divider style={{ borderColor: "#ffffff" }} />

        {/* Office Photos Section */}
        <div className="mb-8">
          <h3
            className="text-white text-sm mb-4"
            style={{
              fontFamily: "Verdana, Arial, Helvetica, sans-serif",
              fontSize: "9pt",
            }}
          >
            Our Office:
          </h3>

          <Row gutter={16} justify="center">
            <Col span={8}>
              <div className="text-center">
                <Image
                  src="/images/office1s.jpg"
                  alt="Office 1"
                  width={100}
                  height={75}
                  className="border-0 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() =>
                    handleImageClick(
                      "/images/office1.jpg",
                      "Office 1 - Full View"
                    )
                  }
                />
              </div>
            </Col>
            <Col span={8}>
              <div className="text-center">
                <Image
                  src="/images/office2s.jpg"
                  alt="Office 2"
                  width={100}
                  height={75}
                  className="border-0 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() =>
                    handleImageClick(
                      "/images/office2.jpg",
                      "Office 2 - Full View"
                    )
                  }
                />
              </div>
            </Col>
            <Col span={8}>
              <div className="text-center">
                <Image
                  src="/images/office4s.jpg"
                  alt="Office 3"
                  width={100}
                  height={75}
                  className="border-0 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() =>
                    handleImageClick(
                      "/images/office4.jpg",
                      "Office 3 - Full View"
                    )
                  }
                />
              </div>
            </Col>
          </Row>
        </div>

        {/* Modal for displaying full-size office images */}
        <Modal
          open={isModalVisible}
          onCancel={handleModalClose}
          footer={null}
          width="80%"
          style={{ maxWidth: "800px" }}
          centered
          className="office-image-modal"
        >
          {selectedImage && (
            <div className="text-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                style={{ maxWidth: "100%", height: "auto" }}
                className="rounded-lg"
              />
              <p className="mt-4 text-gray-600 text-sm">{selectedImage.alt}</p>
            </div>
          )}
        </Modal>
      </div>
    </MainLayout>
  );
};

export default Home;
