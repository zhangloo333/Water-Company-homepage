import React from "react";
import { Row, Col, Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/Layout/MainLayout";

const ProductsPage: React.FC = () => {
  return (
    <MainLayout>
      <div>
        {/* Product Categories */}
        <div className="mb-8">
          <Row gutter={[24, 24]} justify="center">
            <Col span={8}>
              <div className="text-center">
                <Link href="/products/water">
                  <Image
                    src="/images/23.jpg"
                    alt="Water Purification"
                    width={154}
                    height={25}
                    className="mb-2 cursor-pointer"
                  />
                </Link>
                <Divider style={{ borderColor: "#ffffff", margin: "10px 0" }} />
              </div>
            </Col>
            <Col span={8}>
              <div className="text-center">
                <Link href="/products/ship">
                  <Image
                    src="/images/22.jpg"
                    alt="Shipbuilding"
                    width={150}
                    height={30}
                    className="mb-2 cursor-pointer"
                  />
                </Link>
                <Divider style={{ borderColor: "#ffffff", margin: "10px 0" }} />
              </div>
            </Col>
            <Col span={8}>
              <div className="text-center">
                <Link href="/products/metal">
                  <Image
                    src="/images/24.jpg"
                    alt="Electronics"
                    width={150}
                    height={30}
                    className="mb-2 cursor-pointer"
                  />
                </Link>
                <Divider style={{ borderColor: "#ffffff", margin: "10px 0" }} />
              </div>
            </Col>
          </Row>
        </div>

        {/* Product Descriptions */}
        <Row gutter={[0, 0]} className="mb-8">
          <Col span={7}>
            <div
              className="text-white pr-4"
              style={{
                fontFamily: "Verdana, Arial, Helvetica, sans-serif",
                fontSize: "9pt",
              }}
            >
              <p className="leading-relaxed">
                Naiade purifies bacteriological contaminated water and makes it
                safe and drinkable. You can use Naiade everywhere: it only needs
                the sun.
              </p>
              <br />
              <p>Content:</p>
              <p>1. Shortage of clean drinking water</p>
              <p>2. Dirty water is a health hazard</p>
              <p>.....</p>
            </div>
          </Col>

          <Col span={1}>
            <div className="h-64 flex justify-center">
              <Image
                src="/images/line.jpg"
                alt="Divider"
                width={2}
                height={260}
              />
            </div>
          </Col>

          <Col span={7}>
            <div
              className="text-white px-2"
              style={{
                fontFamily: "Verdana, Arial, Helvetica, sans-serif",
                fontSize: "9pt",
              }}
            >
              <p className="leading-relaxed">
                Having absorbed the essence of global shipbuilding, we Nanjing
                Venture Technology (NVT) have been providing the best
                shipbuilding construction for European clients for years.
              </p>
              <p>.....</p>
            </div>
          </Col>

          <Col span={1}>
            <div className="h-64 flex justify-center">
              <Image
                src="/images/line.jpg"
                alt="Divider"
                width={2}
                height={260}
              />
            </div>
          </Col>

          <Col span={7}>
            <div
              className="text-white pl-4"
              style={{
                fontFamily: "Verdana, Arial, Helvetica, sans-serif",
                fontSize: "9pt",
              }}
            >
              <p className="leading-relaxed">
                With the stable and excellent business cooperation in Europe, we
                converge the most outstanding electronics manufactories in
                China, and supply our European partners with the electronic
                components and related products according to their requirements.
              </p>
              <p>.....</p>
            </div>
          </Col>
        </Row>

        {/* More Links */}
        <Row gutter={[24, 24]} justify="center" className="mt-8">
          <Col span={8}>
            <div className="text-center">
              <Link href="/products/water">
                <button className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-4 py-2 rounded shadow">
                  More Info
                </button>
              </Link>
            </div>
          </Col>
          <Col span={8}>
            <div className="text-center">
              <Link href="/products/ship">
                <button className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-4 py-2 rounded shadow">
                  More Info
                </button>
              </Link>
            </div>
          </Col>
          <Col span={8}>
            <div className="text-center">
              <Link href="/products/metal">
                <button className="bg-lime-500 hover:bg-lime-600 text-black font-bold px-4 py-2 rounded shadow">
                  More Info
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
