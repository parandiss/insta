import { Button, Col, Input, Row, Image } from "antd";

import {
  SearchOutlined,
  HomeFilled,
  CaretUpOutlined,
  CompassOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useState } from "react";
function Suggestios() {
  const [state, setState] = useState([1, 2, 3, 4, 5]);
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
        {state.map((item, index) => {
          return (
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
                    <Col span={20}>parandis</Col>
                    <Col span={24}>پرندیس</Col>
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
