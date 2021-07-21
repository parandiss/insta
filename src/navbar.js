import { Button, Col, Input, Row, Image } from "antd";

import {
  SearchOutlined,
  HomeFilled,
  CaretUpOutlined,
  CompassOutlined,
  HeartOutlined,
} from "@ant-design/icons";
function Navbar() {
  return (
    <div className="navbar">
      <Row justify="space-around">
        <Col>
          <Image className="img" width={100} src="/static/index/logo.jpg" />
        </Col>
        <Col>
          <Input placeholder="search" prefix={<SearchOutlined />} />
        </Col>
        <Col>
          <Row>
            <Col>
              <Button className="Button" icon={<HomeFilled />}></Button>
            </Col>
            <Col>
              <Button className="Button" icon={<CaretUpOutlined />}></Button>
            </Col>
            <Col>
              <Button className="Button" icon={<CompassOutlined />}></Button>
            </Col>
            <Col>
              <Button className="Button" icon={<HeartOutlined />}></Button>
            </Col>
            <Col>
              <Button
                className="Button"
                icon={
                  <Image
                    className="img"
                    width={20}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                }
              ></Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default Navbar;
