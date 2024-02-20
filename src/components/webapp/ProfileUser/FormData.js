import React, { useContext } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { AppContext} from "../../../App";
import dayjs from "dayjs";

const { Item } = Form;


const FormData = () => {
    const { state, dispatch } = useContext(AppContext);
    console.log(state);
    const dateFormat = 'YYYY/MM/DD';


  return (
    <Form initialValues={state.user}>
      <Item name='first_name'>
        <Input placeholder="Nombre" />
      </Item>
      <Item name='last_name'>
        <Input placeholder="Apellido" />
      </Item>
      <Item >
        <DatePicker defaultValue={[dayjs(state.user.date_of_birth, dateFormat), dayjs(state.user.date_of_birth, dateFormat)]} style={styles.dateBorn} placeholder="Fecha nacimiento" />
      </Item>
      <Item name='phone_number'>
        <Input placeholder="Teléfono" />
      </Item>
      <Item name='bio'>
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
