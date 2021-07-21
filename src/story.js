import { Button, Col, Input, Row, Image } from "antd";
import { useState } from "react";
function Story() {
  const [state, setState] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="storyborder">
      <Row gutter={[16, 16]}>
        {state.map((item, index) => {
          return (
            <Col span={2}>
              <Row justify="center">
                <Col>
                  <Image
                    className="img"
                    width={"100%"}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </Col>
                <Col>aghar</Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
export default Story;
