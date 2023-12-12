import React from "react";
import { Form, Input, Button, DatePicker } from "antd";

const { Item } = Form;

const FormData = () => {
  return (
    <Form>
      <Item>
        <Input placeholder="Nombre" />
      </Item>
      <Item>
        <Input placeholder="Apellido" />
      </Item>
      <Item>
        <DatePicker style={styles.dateBorn} placeholder="Fecha nacimiento" />
      </Item>
      <Item>
        <Input placeholder="Teléfono" />
      </Item>
      <Item>
        <Input.TextArea rows={4} placeholder="Descripción" />
      </Item>
      <Item>
        <Button type="primary">Actualizar</Button>
      </Item>
    </Form>
  );
};

const styles = {
  dateBorn: {
    width: "100%",
  },
};

export default FormData;
