import { Button, Col, Input, Row, Image } from "antd";

import {
  SearchOutlined,
  HomeFilled,
  CaretUpOutlined,
  CompassOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import Navbar from "./navbar";
import Suggestios from "./suggestions";
import Story from "./story";
import Post from "./post";
function Home() {
  return (
    <div className="kol">
      <Row gutter={[10, 10]} justify="center">
        <Col span={24}>
          <Navbar></Navbar>
        </Col>
        <Col span={16}>
          <Row gutter={[5, 5]}>
            <Col span={24}>
              <Story></Story>
            </Col>
            <Col span={24}>
              <Post></Post>
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <Suggestios></Suggestios>
        </Col>
      </Row>
    </div>
  );
}
export default Home;
