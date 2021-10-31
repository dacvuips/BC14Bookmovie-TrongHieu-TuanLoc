import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  // Button,
  Radio,
  // Select,
  // Cascader,
  DatePicker,
  InputNumber,
  // TreeSelect,
  Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import { actGetFilm } from "./../modules/actions";
import { actAddEditFilm } from "./../modules/actions";
// import getFilmReducer from "./../modules/getfilmreducer";
// import { type } from "jquery";
const EditFilm = (props) => {
  const [componentSize, setComponentSize] = useState("default");
  const { thongTinPhim } = useSelector((state) => state.getFilmReducer);
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(actGetFilm(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: thongTinPhim.maPhim,
      tenPhim: thongTinPhim.tenPhim,
      trailer: thongTinPhim.trailer,
      moTa: thongTinPhim.moTa,
      ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
      dangChieu: thongTinPhim.dangChieu,
      sapChieu: thongTinPhim.sapChieu,
      hot: thongTinPhim.hot,
      danhGia: thongTinPhim.danhGia,
      hinhAnh: null,
      maNhom: "GP02",
    },
    onSubmit: (values) => {
      console.log(values);

      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }

      dispatch(actAddEditFilm(formData));
    },
  });

  const handleChangeDataPicker = (value) => {
    formik.setFieldValue("ngayKhoiChieu", moment(value));
  };
  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png" ||
      file.type === "image/gif"
    ) {
      await formik.setFieldValue("hinhAnh", file);

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    }
  };
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <h3 className="alert alert-info mt-3">Chỉnh sửa phim</h3>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
        </Form.Item>

        <Form.Item label="Trailer Phim">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
        </Form.Item>

        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            format="DD/MM/YYYY"
            onChange={handleChangeDataPicker}
            value={moment(formik.values.ngayKhoiChieu)}
          />
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch
            onChange={handleChangeSwitch("dangChieu")}
            checked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch
            onChange={handleChangeSwitch("sapChieu")}
            checked={formik.values.sapChieu}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch
            onChange={handleChangeSwitch("hot")}
            checked={formik.values.hot}
          />
        </Form.Item>

        <Form.Item label="Đánh giá">
          <InputNumber
            onChange={handleChangeSwitch("danhGia")}
            min={1}
            max={10}
            value={formik.values.danhGia}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/jpg,image/png,image/gif,image/jpeg"
          />
          <br />
          <img
            style={{ width: 150, height: 150 }}
            src={imgSrc === "" ? thongTinPhim.hinhAnh : imgSrc}
            alt="..."
          />
        </Form.Item>

        <Form.Item label="Thao tác">
          <button type="submit" className=" btn btn-success">
            Cập Nhật
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditFilm;
// ReactDOM.render(<AddNew />, mountNode);
