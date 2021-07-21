import { Button, Col, Image, Input, Row } from "antd";
import {
  MoreOutlined,
  HeartOutlined,
  CommentOutlined,
  CaretUpFilled,
  TagOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function Post() {
  const [state, setState] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="rangeback">
      <Row>
        <Col span={24}>
          <Row justify="space-between" gutter={[8, 8]}>
            <Col span={6}>
              <Row className="rowparandis" gutter={[4, 4]}>
                <Col span={4}>
                  <Image
                    className="img"
                    width={"100%"}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col span={19}>parandis</Col>
              </Row>
            </Col>
            <Col>
              <Button className="senoghte" icon={<MoreOutlined />}></Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <Image
            className="img"
            width={"100%"}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={24}>
          <Row justify="space-between">
            <Col>
              <Row>
                <Col>
                  <Button type="text" icon={<HeartOutlined />}></Button>
                </Col>
                <Col>
                  <Button type="text" icon={<CommentOutlined />}></Button>
                </Col>
                <Col>
                  <Button type="text" icon={<CaretUpFilled />}></Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Button type="text" icon={<TagOutlined />}></Button>
            </Col>
          </Row>
        </Col>
        <Col span={24}>Liked by rhyme_bow_haneesh and others</Col>
        <Col span={24}>
          asrelectronicsgeek follow @asrelectronicsgeek . . . . . . . .
          #electricaltransformer #electrician #electricalengineeringstudent
          #electricalvehicle #electronicengineering #ev #electricvehicle
          #electricmotor #electronic #electricianlife⚡️ #electromagneticfield
          #electromagnetic #electrical #electricalprojects
          #electricalengineering #electronicprojects #electricalwiring
          #electronicsproject #automation #arduinoproject #arduino
          #microcontroller #microprocessor #solarpanel #solartechnology
          #solarvehicle #inverter #tesla #technologytrends #inductionmotor
        </Col>
        <Col span={24}>
          <Row>
            {state.map((item, index) => {
              return <Col>ashtonstradling "You will find a best page"</Col>;
            })}
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col>
              <SmileOutlined />
            </Col>
            <Col flex={1}>
              <Input placeholder="Add a comment" />
            </Col>
            <Col>
              <Button>Post</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default Post;
