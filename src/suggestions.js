import { Button, Col, Input, Row, Image, Popover } from "antd";

import {
  SearchOutlined,
  HomeFilled,
  CaretUpOutlined,
  CompassOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Item from "antd/lib/list/Item";
const Content = ({ data }) => {
  return (
    <Row gutter={[16, 16]} style={{ width: 300 }}>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Image className="img" width={"100%"} src={data.image} />
          </Col>
          <Col>
            <Row>
              <Col span={24}>parandis</Col>
              <Col span={24}>پرندیس</Col>
              <Col span={24}>followedByakbar</Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={4}>
            <Row gutter={[16, 16]}>
              <Col>{data.Popover.post}</Col>
              <Col>posts</Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row gutter={[16, 16]}>
              <Col>{data.Popover.followers}</Col>
              <Col>followers</Col>
            </Row>
          </Col>
          <Col span={14}>
            <Row gutter={[16, 16]}>
              <Col>{data.Popover.following}</Col>
              <Col>following</Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row className="textcenter">
          <Col span={24}>The Account is Private</Col>
          <Col span={24}>
            Follow this account to see their photos and videos
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Button className="dokmefolow" style={{ width: "100%" }} type="primary">
          follow
        </Button>
      </Col>
    </Row>
  );
};
function Suggestios() {
  const [state, setState] = useState([1, 2, 3, 4, 5]);
  const [openModal, setOpenModal] = useState(false);
  const [suggestions, setSuggestions] = useState([
    {
      image: "/download.png",
      name: "mahdi",
      eshterak: "followed by akbar",
      Popover: {
        post: "0",
        followers: "20",
        following: "40",
      },
    },
    {
      image: "/download.png",
      name: "sooroosh",
      eshterak: "followed by asghar",
      Popover: {
        post: "5",
        followers: "30",
        following: "50",
      },
    },
    {
      image: "/download.png",
      name: "matin",
      eshterak: "followed by somaye",
      Popover: {
        post: "10",
        followers: "330",
        following: "20",
      },
    },
    {
      image: "/download.png",
      name: "mohy",
      eshterak: "followed by reza",
      Popover: {
        post: "300",
        followers: "540",
        following: "40",
      },
    },
    {
      image: "/download.png",
      name: "ygne",
      eshterak: "followed by parastu",
      Popover: {
        post: "1",
        followers: "20",
        following: "120",
      },
    },
  ]);
  return (
    <div className="suggestion">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Row gutter={[8, 8]} align="middle">
            <Col span={3} className="center">
              <Image
                className="img"
                width={"100%"}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Col>
            <Col span={13}>
              <Row>
                <Col span={24}>parandis</Col>
                <Col span={24}>پرندیس</Col>
              </Row>
            </Col>
            <Col span={8}>
              <Button type="text"> switch </Button>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify="space-between">
            <Col>suggestions</Col>
            <Col>
              <Button type="text">see all</Button>
            </Col>
          </Row>
        </Col>
        {suggestions.map((item, index) => {
          return (
            <Col span={24}>
              <Row gutter={[8, 8]} align="middle">
                <Col span={3} className="center">
                  <Image className="img" width={"100%"} src={item.image} />
                </Col>
                <Col span={13}>
                  <Row>
                    <Col span={20}>
                      <Popover content={<Content data={item} />} title="Title">
                        <Button type="text">{item.name}</Button>
                      </Popover>
                    </Col>
                    <Col span={24}>{item.eshterak}</Col>
                  </Row>
                </Col>
                <Col span={8}>
                  <Button type="text"> switch </Button>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
export default Suggestios;
