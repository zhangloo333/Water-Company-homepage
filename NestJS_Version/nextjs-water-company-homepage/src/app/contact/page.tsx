"use client";

import { useState } from "react";
import { Card, Row, Col, Divider, Modal } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import MainLayout from "@/components/Layout/MainLayout";

const ContactPage: React.FC = () => {
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
        {/* Header Image */}
        <div className="text-center mb-6">
          <Image
            src="/images/contact.jpg"
            alt="Contact Us"
            width={300}
            height={30}
            className="mx-auto"
          />
        </div>

        {/* Contact Information */}
        <Card
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#ffffff",
          }}
          bodyStyle={{ padding: "20px 0" }}
        >
          <div
            className="text-white mb-6"
            style={{
              fontFamily: "Verdana, Arial, Helvetica, sans-serif",
              fontSize: "9pt",
            }}
          >
            <div className="space-y-4">
              <div className="flex items-center">
                <HomeOutlined className="mr-2 text-lg" />
                <span>
                  <strong>Address:</strong> Room 1901 of Jianda Building, 223
                  Zhongsanbei Road, NanJing, China
                </span>
              </div>

              <div className="flex items-center">
                <span className="mr-2 text-lg">📮</span>
                <span>
                  <strong>Post code:</strong> 210009
                </span>
              </div>

              <div className="flex items-center">
                <PhoneOutlined className="mr-2 text-lg" />
                <span>
                  <strong>Phone:</strong> +86 25 83346976/83346977
                </span>
              </div>

              <div className="flex items-center">
                <PrinterOutlined className="mr-2 text-lg" />
                <span>
                  <strong>Fax:</strong> +86 25 83346518
                </span>
              </div>

              <div className="flex items-center">
                <MailOutlined className="mr-2 text-lg" />
                <span>
                  <strong>E-mail:</strong>{" "}
                  <a
                    href="mailto:postmaster@nvtechco.com"
                    className="text-orange-400 hover:text-orange-300"
                  >
                    postmaster@nvtechco.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </Card>

        <Divider style={{ borderColor: "#ffffff" }} />

        {/* Map Section */}
        <div className="mt-8">
          <Row gutter={24}>
            <Col span={12}>
              <div>
                <Image
                  src="/images/map.jpg"
                  alt="View Map"
                  width={150}
                  height={30}
                  className="mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() =>
                    handleImageClick(
                      "/images/map2.jpg",
                      "Detailed Location Map"
                    )
                  }
                />

                <div>
                  <Image
                    src="/images/map1.jpg"
                    alt="Location Map"
                    width={120}
                    height={120}
                    className="cursor-pointer border border-gray-300 hover:border-orange-400 transition-colors hover:opacity-80"
                    onClick={() =>
                      handleImageClick(
                        "/images/map2.jpg",
                        "Office Location - Full View"
                      )
                    }
                  />
                </div>
              </div>
            </Col>

            <Col span={12}>
              <Card
                title="Office Location"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "#ffffff",
                }}
                headStyle={{
                  backgroundColor: "transparent",
                  borderColor: "#ffffff",
                  color: "#ffffff",
                }}
                bodyStyle={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                }}
              >
                <div
                  className="text-white"
                  style={{
                    fontFamily: "Verdana, Arial, Helvetica, sans-serif",
                    fontSize: "9pt",
                  }}
                >
                  <p className="mb-4">
                    Our office is conveniently located in the heart of Nanjing,
                    in the Jianda Building on Zhongsanbei Road. We are easily
                    accessible by public transportation and close to major
                    business districts.
                  </p>

                  <p className="mb-4">
                    <strong>Office Hours:</strong>
                    <br />
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 12:00 PM
                    <br />
                    Sunday: Closed
                  </p>

                  <p>
                    For urgent matters outside office hours, please contact us
                    via email and we will respond as soon as possible.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Modal for displaying full-size map images */}
        <Modal
          open={isModalVisible}
          onCancel={handleModalClose}
          footer={null}
          width="80%"
          style={{ maxWidth: "800px" }}
          centered
          className="map-image-modal"
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

export default ContactPage;
