import React, { useContext } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { AppContext} from "../../../App";

const { Item } = Form;


const FormData = () => {
    const { state, dispatch } = useContext(AppContext);
    console.log(state);

  return (
    <Form initialValues={state.user}>
      <Item name='first_name'>
        <Input placeholder="Nombre" />
      </Item>
      <Item name='last_name'>
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
