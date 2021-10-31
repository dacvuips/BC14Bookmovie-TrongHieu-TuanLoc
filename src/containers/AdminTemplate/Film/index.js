import React, { Fragment, useEffect } from "react";

// import Loader from "components/Loader";
import "antd/dist/antd.css";
import { Table, Button } from "antd";
import { Input } from "antd";
import { AudioOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { actFetchListMovie } from "containers/HomeTemplate/ListMoviePage/modules/actions";
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

const onSearch = (value) => console.log(value);

export default function ListFilmPage(props) {
  const { data } = useSelector((state) => state?.listMovieReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchListMovie());
  }, []);

  const columns = [
    {
      title: "Mã",
      dataIndex: "maPhim",
      width: 50,
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      // onFilter: (value, record) => record.maPhim.indexOf(value) === 0,
      sorter: (a, b) => b.maPhim - a.maPhim,
      // sortOrder: "ascend",

      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hình ảnh",
      dataIndex: "age",
      width: 50,
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.hinhAnh}
              style={{ width: "50px", height: "50px" }}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `http://picsum.photos/id/${index}/50/50`;
              }}
            ></img>
          </Fragment>
        );
      },
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      width: 300,
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },

      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",

      sorter: (a, b) => {
        let moTaA = a.moTa.toLowerCase().trim();
        let moTaB = b.moTa.toLowerCase().trim();
        if (moTaA > moTaB) {
          return 1;
        }
        return -1;
      },
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.lenght > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",

      render: (text, film) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className="btn btn-success mb-1 "
              to={`/edit/${film.maPhim}`}
            >
              <EditOutlined />
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="btn btn-danger"
              onClick={() => {
                if (
                  window.confirm("Bạn có chắc muốn xóa phim" + film.tenPhim)
                ) {
                  dispatch(actDeleteFilm(film.maPhim));
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
      <h3 className="alert alert-info mt-3"> Quản lý phim</h3>
      <Button
        className="mb-3"
        onClick={() => {
          props.history.push("/addnew");
        }}
      >
        Thêm Phim
      </Button>
      <Search
        className="mb-3"
        placeholder="input search text"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />

      <Table
        columns={columns}
        dataSource={data1}
        rowKey={"maPhim"}
        onChange={onChange}
      ></Table>
    </>
  );
}
