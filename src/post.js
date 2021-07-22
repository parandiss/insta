import { Button, Col, Image, Input, Row } from "antd";
import {
  MoreOutlined,
  HeartOutlined,
  CommentOutlined,
  CaretUpFilled,
  TagOutlined,
  SmileOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { useState } from "react";

function Post() {
  const [isLiked, setIsLiked] = useState(0);
  const [likes, setLikes] = useState(187);
  const [comments, setComments] = useState([
    {
      name: "zahra",
      Comment: "salam",
      isliked: true,
    },
    {
      name: "asghar",
      Comment: "bye",
      isliked: true,
    },
    {
      name: "kokab",
      Comment: "hi",
      isliked: true,
    },
    {
      name: "somaye",
      Comment: "naro",
      isliked: true,
    },
  ]);

  const [state, setState] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="rangeback">
      <Row className="boxpost">
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
                  <Button
                    onClick={() => {
                      if (isLiked == 0) {
                        setIsLiked(1);
                        setLikes(likes + 1);
                      } else {
                        setIsLiked(0);
                        setLikes(likes - 1);
                      }
                    }}
                    type="text"
                    icon={
                      isLiked == 0 ? (
                        <HeartOutlined />
                      ) : (
                        <HeartFilled className="ghalb" />
                      )
                    }
                  ></Button>
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
        <Col span={24}>likes {likes}</Col>
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
            {comments.map((item, index) => {
              return (
                <Col key={index} span={24}>
                  <Row gutter={[16, 16]}>
                    <Col className="matn">{item.name} </Col>
                    <Col flex={1}>{item.Comment}</Col>
                    <Col>
                      <Button
                        onClick={() => {
                          if (isLiked == 0) {
                            setIsLiked(1);
                            setLikes(likes + 1);
                          } else {
                            setIsLiked(0);
                            setLikes(likes - 1);
                          }
                        }}
                        type="text"
                        icon={
                          isLiked == 0 ? (
                            <HeartOutlined />
                          ) : (
                            <HeartFilled className="ghalb" />
                          )
                        }
                      ></Button>
                    </Col>
                  </Row>
                </Col>
              );
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
              <Button
                onClick={() => {
                  setComments((prev) => {
                    let jadid = prev;
                    jadid.push({
                      name: "zahra",
                      Comment: "salam",
                      isliked: true,
                    });
                    return jadid;
                  });
                }}
              >
                post
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default Post;
