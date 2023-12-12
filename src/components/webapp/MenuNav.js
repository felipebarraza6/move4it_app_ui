import React from "react";
import { Menu } from "antd";
import {
  SnippetsOutlined,
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MenuNav = () => {
  const navigate = useNavigate();
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      label,
      children,
      type,
    };
  }

  const onChangeOption = (item) => {
    if (item.key === "home") {
      navigate("/");
    } else if (item.key === "profile_user") {
      navigate("/profile_user");
    } else if (item.key === "blog") {
      navigate("/blog");
    }
  };

  const items = [
    getItem("@usuario", "profile_user", <SettingOutlined />),
    getItem("Blog", "blog", <SnippetsOutlined />),
    getItem("Salir", "logout", <LogoutOutlined />),
  ];

  return (
    <Menu
      onClick={onChangeOption}
      style={styles.menu}
      theme="dark"
      mode="inline"
      items={items}
    />
  );
};

const styles = {
  menu: {
    width: window.innerWidth > 900 ? "400px" : "200px",
    display: "flex",
    justifyContent: "flex-end",
  },
};

export default MenuNav;
