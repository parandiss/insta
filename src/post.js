import { Button, Col, Image, Row } from "antd";
import { MoreOutlined } from "@ant-design/icons";

function Post() {
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
      </Row>
    </div>
  );
}
export default Post;
