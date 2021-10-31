import React, { Fragment, useEffect } from "react";

// import Loader from "components/Loader";
import "antd/dist/antd.css";
import { Table, Button } from "antd";
import { Input } from "antd";
import { AudioOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { actGetUser } from "containers/AdminTemplate/UserManager/module/action";
import { NavLink } from "react-router-dom";

import { actDeleteFilm } from "containers/AdminTemplate/Film/modules/actions";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

export default function UserManager(props) {
  const { data } = useSelector((state) => state?.getUserReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetUser());
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      width: 50,

      // specify the condition of filtering result
      // here is that finding the name started with `value`
      // onFilter: (value, record) => record.maPhim.indexOf(value) === 0,
      sorter: (a, b) => b.index - a.index,
      // sortOrder: "ascend",

      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      width: 100,
      render: (text, user, index) => {
        return (
          <Fragment>
            <p>{user.taiKhoan}</p>
          </Fragment>
        );
      },
    },

    {
      title: "Họ Tên",
      dataIndex: "hoTen",

      sorter: (a, b) => {
        let hoTenA = a.hoTen.toLowerCase().trim();
        let hoTenB = b.hoTen.toLowerCase().trim();
        if (hoTenA > hoTenB) {
          return 1;
        }
        return -1;
      },
      render: (text, user) => {
        return <Fragment>{user.hoTen}</Fragment>;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      width: 300,

      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Email",
      dataIndex: "email",

      sorter: (a, b) => {
        let emailA = a.email.toLowerCase().trim();
        let emailB = b.email.toLowerCase().trim();
        if (emailA > emailB) {
          return 1;
        }
        return -1;
      },
      render: (text, user) => {
        return <Fragment>{user.email}</Fragment>;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "SĐT",
      dataIndex: "soDt",

      sorter: (a, b) => {
        let soDtA = a.soDt.toLowerCase().trim();
        let soDtB = b.soDt.toLowerCase().trim();
        if (soDtA > soDtB) {
          return 1;
        }
        return -1;
      },
      render: (text, user) => {
        return <Fragment>{user.soDt}</Fragment>;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",

      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className="btn btn-success mb-1 "
              to={`/add-user/${user.taiKhoan}`}
            >
              <EditOutlined />
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="btn btn-danger"
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc muốn xóa tài khoản" + user.taikhoan
                  )
                ) {
                  dispatch(actDeleteFilm(user.taiKhoan));
                }
              }}
            >
              <DeleteOutlined />
            </span>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
    },
  ];

  const data1 = data;
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <h3 className="alert alert-info mt-3"> Quản người dùng</h3>
      <Button
        className="mb-3"
        onClick={() => {
          props.history.push("/add-user");
        }}
      >
        Thêm người dùng
      </Button>
      <Search
        className="mb-3"
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={(valueSearch) => {
          dispatch(actGetUser(valueSearch));
        }}
      />

      <Table
        columns={columns}
        dataSource={data1}
        rowKey={"taiKhoan"}
        onChange={onChange}
      ></Table>
    </>
  );
}
