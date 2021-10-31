import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class Banner extends Component {
  render() {
    return (
      <>
        <section id="banner">
          <Carousel autoplay>
            <Carousel.Item interval={1500}>
              <div className="banner__container container-lx">
                <img
                  src="https://static2.vieon.vn/vieplay-image/promotion_banner/2021/09/14/q69ghhs9_hb_web_1800x280_quancuulinh_2388_458.webp"
                  alt="Promotion Banner"
                  title="Promotion Banner"
                  width="..."
                  height="..."
                />
              </div>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <div className="banner__container container-lx">
                <img
                  src="https://static2.vieon.vn/vieplay-image/promotion_banner/2021/09/25/d9axweh1_1800x280_2388_458.webp"
                  alt="Promotion Banner"
                  title="Promotion Banner"
                  width="..."
                  height="..."
                />
              </div>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <div className="banner__container container-lx">
                <img
                  src="https://static2.vieon.vn/vieplay-image/promotion_banner/2021/09/23/o07dbcor_hb_web_1800x280_promo9k-1_2388_458.webp"
                  alt="Promotion Banner"
                  title="Promotion Banner"
                  width="..."
                  height="..."
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </section>
      </>
    );
  }
}

export default Banner;
