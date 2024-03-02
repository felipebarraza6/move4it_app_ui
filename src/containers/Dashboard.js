import React, { useContext } from "react";
import { Typography, Row, Col, Card, Button, Tag, Table } from "antd";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import {
  Ris,
  ClockCircleFilled,
  ArrowRightOutlined,
  NumberOutlined,
  UpCircleFilled,
  TeamOutlined,
  PlusCircleFilled,
  BuildFilled,
  LeftOutlined,
  EuroCircleFilled,
  RightOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import "react-circular-progressbar/dist/styles.css";
import Blog from "./Blog";
import { AppContext } from "../App";

const { Title, Paragraph } = Typography;

const Dashboard = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Row justify={"space-between"} align={""}>
      <Col>
        <Card style={styles.card} hoverable>
          <Title
            level={1}
            style={{
              ...styles.title,
              marginBottom: "-40px",
              marginTop: "-5px",
            }}
          >
            Hola, {state.user.first_name} {state.user.last_name}
          </Title>{" "}
          <br />
          <Title level={4} style={styles.title}>
            Bienvenido a Move4it
          </Title>
        </Card>
      </Col>

      <Col>
        <Card style={styles.cardC} hoverable>
          <Title
            level={3}
            style={{
              ...styles.title,
              marginTop: "-10px",
              marginBottom: "-10px",
            }}
          >
            <NumberOutlined /> Rookie
          </Title>
          <br />
          <hr />
          <br />
          <Button type="primary" size="large">
            9.632 <BuildFilled />
          </Button>
        </Card>
      </Col>
      <Col span={24}>
        <Row
          align="middle"
          justify={"space-between"}
          style={{ marginTop: "30px" }}
        >
          <Col>
            <Title level={2}>Resumen competencia</Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              style={{ marginBottom: window.innerWidth < 900 && "20px" }}
              onClick={() => window.location.assign("/enterprise")}
            >
              Ver mas
            </Button>
          </Col>
        </Row>
      </Col>
      <Col xl={8} xs={24}>
        <Card style={{ width: "300px", ...styles.card }} hoverable>
          <Row align={"middle"} justify={"space-evenly"}>
            <Col>
              <Title
                level={2}
                style={{
                  ...styles.title,
                  marginBottom: "-10px",
                  marginTop: "-5px",
                }}
              >
                <TeamOutlined style={{ marginRight: "10px" }} />
                EQUIPO
              </Title>
            </Col>
            <Col>
              <Tag style={{ marginLeft: "10px" }} color="magenta-inverse">
                Empresa
              </Tag>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={8} xl={8} xs={24}>
        <Card style={{ width: "260px", ...styles.card }} hoverable>
          <Title
            level={2}
            style={{
              ...styles.title,
              marginBottom: "-30px",
              marginTop: "-5px",
            }}
          >
            <UpCircleFilled style={{ marginRight: "10px" }} />
            12.560 pts
          </Title>{" "}
          <br />
        </Card>
      </Col>
      <Col span={8} xl={8} xs={24}>
        <Card
          style={{ width: "260px", ...styles.card, padding: "0px" }}
          hoverable
        >
          <Row align={"middle"} justify={"center"}>
            <Col>
              <Title
                level={2}
                style={{
                  ...styles.title,
                  marginBottom: "-30px",
                  marginTop: "-5px",
                }}
              >
                <RiseOutlined style={{ marginRight: "10px" }} />
                4/36{" "}
              </Title>
            </Col>
            <Col>
              <Tag color="blue-inverse" style={{ marginLeft: "10px" }}>
                RANKING
              </Tag>
            </Col>
          </Row>
          <br />
        </Card>
      </Col>
      <Col span={24} style={{ marginTop: "20px" }}>
        <Row
          align="middle"
          justify={"space-between"}
          style={{ marginTop: "30px" }}
        >
          <Col>
            <Title level={2}>Desempeño grupal</Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              style={{ marginBottom: window.innerWidth < 900 && "20px" }}
              onClick={() => window.location.assign("/team")}
            >
              Ver mas
            </Button>
          </Col>
        </Row>
      </Col>
      <Col xs={24} xl={4}>
        <center>
          {" "}
          <div style={{ width: 150, height: 140 }}>
            <CircularProgressbar
              value={80}
              maxValue={100}
              text={`80%`}
              styles={styles.circlePro}
            />
          </div>
        </center>
        <Title level={3} style={{ textAlign: "center" }}>
          5km Trote
        </Title>
      </Col>
      <Col xs={24} xl={4}>
        <center>
          {" "}
          <div style={{ width: 150, height: 140 }}>
            <CircularProgressbar
              value={50}
              maxValue={100}
              text={`50%`}
              styles={styles.circlePro}
            />
          </div>
        </center>
        <Title level={3} style={{ textAlign: "center" }}>
          10km Bicicleta
        </Title>
      </Col>

      <Col xs={24} xl={4}>
        <center>
          <div style={{ width: 150, height: 140 }}>
            <CircularProgressbar
              value={100}
              maxValue={100}
              text={`100%`}
              styles={styles.circlePro}
            />
          </div>
        </center>
        <Title level={3} style={{ textAlign: "center" }}>
          Almuerzo
        </Title>
      </Col>
      <Col xs={24} xl={4}>
        <center>
          <div style={{ width: 150, height: 140 }}>
            <CircularProgressbar
              value={0}
              maxValue={100}
              text={`0%`}
              styles={styles.circleDanger}
            />
          </div>
        </center>
        <Title level={3} style={{ textAlign: "center" }}>
          1 Trekking
        </Title>
      </Col>
      <Col xs={24} xl={4}>
        <center>
          <div style={{ width: 150, height: 140 }}>
            <CircularProgressbar
              value={90}
              maxValue={100}
              text={`90%`}
              styles={styles.circlePro}
            />
          </div>
        </center>
        <Title level={3} style={{ textAlign: "center" }}>
          10.000 Paso
        </Title>
      </Col>
      <Col span={24} style={{ marginTop: "20px" }}>
        <Row
          align="middle"
          justify={"space-between"}
          style={{ marginTop: "30px" }}
        >
          <Col>
            <Title level={2}>Novedades</Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              onClick={() => window.location.assign("/blog")}
            >
              Ver mas
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Blog type="novedades" />
      </Col>
      <Col span={24} style={{ marginTop: "20px" }}>
        <Row
          align="middle"
          justify={"space-between"}
          style={{ marginTop: "0px" }}
        >
          <Col>
            <Title level={2}>Actividad personal</Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              style={{ marginBottom: window.innerWidth < 900 && "20px" }}
              onClick={() => window.location.assign("/profile_competition")}
            >
              Ver mas
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify={"space-between"}>
          <Col xl={11} xs={24} style={{ marginBottom: "20px" }}>
            <Table
              bordered
              rowClassName={"backtable"}
              size="small"
              columns={[
                { title: "Semana Actual", dataIndex: "glosa" },
                { title: "Cantidad", dataIndex: "cantidad" },
              ]}
              pagination={false}
              dataSource={[
                { glosa: "Pruebas logradas", cantidad: 12 },
                { glosa: "Pasos", cantidad: "10.000" },
                { glosa: "Minutos ejercitados", cantidad: "120" },
                { glosa: "Kcal quemadas", cantidad: "800" },
              ]}
            />
          </Col>
          <Col xl={11} xs={24}>
            <Table
              bordered
              style={{ marginBottom: "10px" }}
              rowClassName={"backtable"}
              size="small"
              pagination={false}
              columns={[
                {
                  title: (
                    <>
                      <Button
                        size="small"
                        icon={<LeftOutlined />}
                        type="primary"
                        style={{ marginRight: "10px" }}
                      ></Button>
                      Semana #1{" "}
                      <Button
                        size="small"
                        icon={<RightOutlined />}
                        style={{ marginLeft: "10px" }}
                        type="primary"
                      ></Button>
                    </>
                  ),
                  dataIndex: "glosa",
                },
                { title: "Cantidad", dataIndex: "cantidad" },
              ]}
              dataSource={[
                { glosa: "Pruebas logradas", cantidad: 12 },
                { glosa: "Pasos", cantidad: "10.000" },
                { glosa: "Minutos ejercitados", cantidad: "120" },
                { glosa: "Kcal quemadas", cantidad: "800" },
              ]}
            />
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ marginTop: "20px" }}>
        <Row
          align="middle"
          justify={"space-between"}
          style={{ marginTop: "0px" }}
        >
          <Col>
            <Title level={2}>Desafios</Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              onClick={() => window.location.assign("/challenges")}
            >
              Ver mas
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify={window.innerWidth > 900 ? "space-between" : "center"}>
          <Col>
            <Card
              hoverable
              style={{ width: "250px", ...styles.card }}
              cover={
                <img
                  alt="example"
                  src="https://th.bing.com/th/id/OIP.JJWPRAlipUYxz4FCoBrm6wHaFj?pid=ImgDet&rs=1"
                />
              }
            >
              <Card.Meta
                title={
                  <Title level={4} style={{ color: "white" }}>
                    Desafio 1
                  </Title>
                }
                description={
                  <Paragraph level={4} style={{ color: "white" }}>
                    <ClockCircleFilled style={{ marginRight: "10px" }} />{" "}
                    Finaliza en 3 dias
                  </Paragraph>
                }
              />
              <Button icon={<PlusCircleFilled />} style={{ float: "right" }}>
                Unirme
              </Button>
            </Card>
          </Col>
          <Col>
            <Card
              hoverable
              style={{ width: "250px", ...styles.card }}
              cover={
                <img
                  alt="example"
                  src="https://th.bing.com/th/id/OIP.JJWPRAlipUYxz4FCoBrm6wHaFj?pid=ImgDet&rs=1"
                />
              }
            >
              <Card.Meta
                title={
                  <Title level={4} style={{ color: "white" }}>
                    Desafio 1
                  </Title>
                }
                description={
                  <Paragraph level={4} style={{ color: "white" }}>
                    <ClockCircleFilled style={{ marginRight: "10px" }} />{" "}
                    Finaliza en 3 dias
                  </Paragraph>
                }
              />
              <Button icon={<PlusCircleFilled />} style={{ float: "right" }}>
                Unirme
              </Button>
            </Card>
          </Col>
          <Col>
            <Card
              hoverable
              style={{ width: "250px", ...styles.card }}
              cover={
                <img
                  alt="example"
                  src="https://th.bing.com/th/id/OIP.JJWPRAlipUYxz4FCoBrm6wHaFj?pid=ImgDet&rs=1"
                />
              }
            >
              <Card.Meta
                title={
                  <Title level={4} style={{ color: "white" }}>
                    Desafio 1
                  </Title>
                }
                description={
                  <Paragraph level={4} style={{ color: "white" }}>
                    <ClockCircleFilled style={{ marginRight: "10px" }} />{" "}
                    Finaliza en 3 dias
                  </Paragraph>
                }
              />
              <Button icon={<PlusCircleFilled />} style={{ float: "right" }}>
                Unirme
              </Button>
            </Card>
          </Col>
          <Col>
            <Card
              hoverable
              style={{ width: "250px", ...styles.card }}
              cover={
                <img
                  alt="example"
                  src="https://th.bing.com/th/id/OIP.JJWPRAlipUYxz4FCoBrm6wHaFj?pid=ImgDet&rs=1"
                />
              }
            >
              <Card.Meta
                title={
                  <Title level={4} style={{ color: "white" }}>
                    Desafio 1
                  </Title>
                }
                description={
                  <Paragraph level={4} style={{ color: "white" }}>
                    <ClockCircleFilled style={{ marginRight: "10px" }} />{" "}
                    Finaliza en 3 dias
                  </Paragraph>
                }
              />
              <Button icon={<PlusCircleFilled />} style={{ float: "right" }}>
                Unirme
              </Button>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ marginTop: "20px" }}>
        <Row
          align="middle"
          justify={"space-between"}
          style={{ marginTop: "0px" }}
        >
          <Col>
            <Title level={2}>Logros</Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              onClick={() => window.location.assign("/achievements")}
            >
              Ver mas
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify={"space-between"}>
          <Col>
            <EuroCircleFilled style={{ fontSize: "100px", color: "#faad14" }} />
            <Title level={4} style={{ textAlign: "center" }}>
              Logro 1
            </Title>
          </Col>
          <Col>
            <EuroCircleFilled style={{ fontSize: "100px", color: "#faad14" }} />
            <Title level={4} style={{ textAlign: "center" }}>
              Logro 2
            </Title>
          </Col>
          <Col>
            <EuroCircleFilled style={{ fontSize: "100px", color: "#faad14" }} />
            <Title level={4} style={{ textAlign: "center" }}>
              Logro 3
            </Title>
          </Col>
          <Col>
            <EuroCircleFilled style={{ fontSize: "100px", color: "#faad14" }} />
            <Title level={4} style={{ textAlign: "center" }}>
              Logro 4
            </Title>
          </Col>
          <Col>
            <EuroCircleFilled style={{ fontSize: "100px", color: "#faad14" }} />
            <Title level={4} style={{ textAlign: "center" }}>
              Logro 5
            </Title>
          </Col>
          <Col>
            <EuroCircleFilled style={{ fontSize: "100px", color: "#faad14" }} />
            <Title level={4} style={{ textAlign: "center" }}>
              Logro 6
            </Title>
          </Col>
          <Col>
            <EuroCircleFilled style={{ fontSize: "100px", color: "#faad14" }} />
            <Title level={4} style={{ textAlign: "center" }}>
              Logro 7
            </Title>
          </Col>
          <Col>
            <EuroCircleFilled style={{ fontSize: "100px", color: "#faad14" }} />
            <Title level={4} style={{ textAlign: "center" }}>
              Logro 8
            </Title>
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ marginTop: "20px" }}>
        <Row
          align="middle"
          justify={"space-between"}
          style={{ marginTop: "0px" }}
        >
          <Col>
            <Title level={2}>Beneficio, descuentos y alianzas</Title>
          </Col>
          <Col>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              style={{ marginBottom: window.innerWidth < 900 && "20px" }}
              onClick={() => window.location.assign("/blog")}
            >
              Ver mas
            </Button>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Blog type="beneficios" />
      </Col>
    </Row>
  );
};

const styles = {
  title: {
    color: "#fff",
  },
  circlePro: buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: "butt",

    // Text size
    textSize: "16px",

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `#001529`,
    textColor: "#001529",
    backgroundColor: "#3e98c7",
  }),
  circleDanger: buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: "butt",

    // Text size
    textSize: "16px",

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `#001529`,
    textColor: "grey",
    backgroundColor: "#3e98c7",
  }),
  card: {
    marginBottom: "10px",
    backgroundColor: "#001529",
    color: "#fff",
    fontSize: "15px",
    fontWeight: "bold",
  },
  cardC: {
    backgroundColor: "#001529",
    color: "#fff",
    borderRadius: "10px",
    padding: "10px",
    fontSize: "15px",
    textAlign: "center",
    fontWeight: "bold",
  },
  cardContainsRow: {
    backgroundColor: "#001529",
    width: "60%",
    color: "#fff",
    padding: "10px",
    fontSize: "15px",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default Dashboard;
