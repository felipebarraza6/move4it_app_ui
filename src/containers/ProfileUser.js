import React from "react";
import { Row, Col, Typography } from "antd";
import FormData from "../components/webapp/ProfileUser/FormData";
import Stats from "../components/webapp/ProfileUser/Stats";
import UpdatePassword from "../components/webapp/ProfileUser/UpdatePassword";

const { Title } = Typography;

const ProfileUser = () => {
  return (
    <Row>
      <Col span={24}>
        <Title level={3}>@usuario</Title>
      </Col>
      <Col span={12} style={styles.col}>
        <FormData />
        <UpdatePassword />
      </Col>
      <Col span={12}>
        <Stats />
      </Col>
    </Row>
  );
};

const styles = {
  col: {
    padding: "0px 10px 0px 0",
  },
};

export default ProfileUser;
