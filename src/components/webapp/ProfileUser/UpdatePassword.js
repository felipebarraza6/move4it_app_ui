import React from "react";
import { Form, Input, Button } from "antd";
const { Item } = Form;

const UpdatePassword = () => {
  return (
    <Form>
      <Item>
        <Input placeholder="Nueva contraseña" />
      </Item>
      <Item>
        <Input placeholder="Confirmar nueva contraseña" />
      </Item>
      <Item>
        <Button type="primary" style={styles.btn}>
          Guardar
        </Button>
        <Button type="primary" danger>
          Cancelar
        </Button>
      </Item>
    </Form>
  );
};

const styles = {
  btn: {
    margin: "0px 10px 0px 0px",
  },
};

export default UpdatePassword;
