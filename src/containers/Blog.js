import React, { useState } from "react";
import { Row, Col, Card, Tooltip, Drawer } from "antd";
import { EyeFilled } from "@ant-design/icons";
import Paragraph from "antd/es/skeleton/Paragraph";

const Blog = () => {
  const [visible, setVisible] = useState(false); // initialize state for Drawer visibility
  const [blogSingle, setBlogSingle] = useState({});
  const path = window.location.pathname.split("/")[1];

  const showDrawer = (title, paragraph) => {
    setBlogSingle({ ...blogSingle, title: title, paragraph: paragraph });
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <Row justify={"space-around"}>
        <Col span={24}></Col>
        {path === "blog" && (
          <>
            {" "}
            <Col>
              <Card
                style={styles.card}
                actions={[
                  <Tooltip title="Ver noticia">
                    <EyeFilled
                      key="setting"
                      onClick={() => {
                        showDrawer("Titulo");
                      }}
                    />
                  </Tooltip>,
                ]}
                hoverable
                cover={
                  <img
                    alt="example"
                    src={
                      "https://images4.alphacoders.com/709/thumb-1920-709032.jpg"
                    }
                    style={styles.img}
                  />
                }
              >
                <Card.Meta
                  title="Titulo"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={styles.card}
                actions={[
                  <Tooltip title="Ver noticia">
                    <EyeFilled
                      key="setting"
                      onClick={() => {
                        showDrawer("Titulo");
                      }}
                    />
                  </Tooltip>,
                ]}
                hoverable
                cover={
                  <img
                    alt="example"
                    src={
                      "https://images4.alphacoders.com/709/thumb-1920-709032.jpg"
                    }
                    style={styles.img}
                  />
                }
              >
                <Card.Meta
                  title="Titulo"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={styles.card}
                actions={[
                  <Tooltip title="Ver noticia">
                    <EyeFilled
                      key="setting"
                      onClick={() => {
                        showDrawer("Titulo");
                      }}
                    />
                  </Tooltip>,
                ]}
                hoverable
                cover={
                  <img
                    alt="example"
                    src={
                      "https://images4.alphacoders.com/709/thumb-1920-709032.jpg"
                    }
                    style={styles.img}
                  />
                }
              >
                <Card.Meta
                  title="Titulo"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </Card>
            </Col>
            <Col>
              <Card
                style={styles.card}
                actions={[
                  <Tooltip title="Ver noticia">
                    <EyeFilled
                      key="setting"
                      onClick={() => {
                        showDrawer("Titulo");
                      }}
                    />
                  </Tooltip>,
                ]}
                hoverable
                cover={
                  <img
                    alt="example"
                    src={
                      "https://images4.alphacoders.com/709/thumb-1920-709032.jpg"
                    }
                    style={styles.img}
                  />
                }
              >
                <Card.Meta
                  title="Titulo"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </Card>
            </Col>
          </>
        )}

        <Col span={24}></Col>
        <Col>
          <Card
            style={styles.card}
            actions={[
              <Tooltip title="Ver noticia">
                <EyeFilled
                  key="setting"
                  onClick={() => {
                    showDrawer("Titulo");
                  }}
                />
              </Tooltip>,
            ]}
            hoverable
            cover={
              <img
                alt="example"
                src={
                  "https://images4.alphacoders.com/709/thumb-1920-709032.jpg"
                }
                style={styles.img}
              />
            }
          >
            <Card.Meta
              title="Titulo"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={styles.card}
            actions={[
              <Tooltip title="Ver noticia">
                <EyeFilled
                  key="setting"
                  onClick={() => {
                    showDrawer("Titulo");
                  }}
                />
              </Tooltip>,
            ]}
            hoverable
            cover={
              <img
                alt="example"
                src={
                  "https://images4.alphacoders.com/709/thumb-1920-709032.jpg"
                }
                style={styles.img}
              />
            }
          >
            <Card.Meta
              title="Titulo"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={styles.card}
            actions={[
              <Tooltip title="Ver noticia">
                <EyeFilled
                  key="setting"
                  onClick={() => {
                    showDrawer("Titulo");
                  }}
                />
              </Tooltip>,
            ]}
            hoverable
            cover={
              <img
                alt="example"
                src={
                  "https://images4.alphacoders.com/709/thumb-1920-709032.jpg"
                }
                style={styles.img}
              />
            }
          >
            <Card.Meta
              title="Titulo"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={styles.card}
            actions={[
              <Tooltip title="Ver noticia">
                <EyeFilled
                  key="setting"
                  onClick={() => {
                    showDrawer("Titulo");
                  }}
                />
              </Tooltip>,
            ]}
            hoverable
            cover={
              <img
                alt="example"
                src={
                  "https://images4.alphacoders.com/709/thumb-1920-709032.jpg"
                }
                style={styles.img}
              />
            }
          >
            <Card.Meta
              title="Titulo"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </Card>
        </Col>
      </Row>
      <Drawer
        title={blogSingle.title}
        placement="right"
        closable={true}
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <img
          width={"100%"}
          src="https://images4.alphacoders.com/709/thumb-1920-709032.jpg"
          style={{ borderRadius: "15px" }}
        />
        <h5>2023-01-01</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          etiam non quam lacus suspendisse faucibus interdum posuere lorem.
          Purus in massa tempor nec feugiat. Nunc id cursus metus aliquam
          eleifend mi. Ante in nibh mauris cursus. Eget nunc lobortis mattis
          aliquam faucibus. Habitasse platea dictumst vestibulum rhoncus.
          Vulputate dignissim suspendisse in est ante in nibh. Urna porttitor
          rhoncus dolor purus non enim. A erat nam at lectus. Vitae elementum
          curabitur vitae nunc sed velit. Amet consectetur adipiscing elit ut
          aliquam. Eget dolor morbi non arcu risus quis varius quam.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          etiam non quam lacus suspendisse faucibus interdum posuere lorem.
          Purus in massa tempor nec feugiat. Nunc id cursus metus aliquam
          eleifend mi. Ante in nibh mauris cursus. Eget nunc lobortis mattis
          aliquam faucibus. Habitasse platea dictumst vestibulum rhoncus.
          Vulputate dignissim suspendisse in est ante in nibh. Urna porttitor
          rhoncus dolor purus non enim. A erat nam at lectus. Vitae elementum
          curabitur vitae nunc sed velit. Amet consectetur adipiscing elit ut
          aliquam. Eget dolor morbi non arcu risus quis varius quam.
        </p>
      </Drawer>
    </div>
  );
};

const styles = {
  card: {
    width: "250px",
    marginBottom: "20px",
  },
  img: {
    width: "100%",
  },
};

export default Blog;
