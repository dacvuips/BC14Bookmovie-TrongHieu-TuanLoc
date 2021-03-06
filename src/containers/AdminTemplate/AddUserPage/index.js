import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actAddUser } from "./modules/actions";

export default function AddUserPage() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maNhom: "GP02",
    maLoaiNguoiDung: "KhachHang",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(actAddUser(state));
  };

  return (
    <>
      <div className="adduser">
        <div className=" container">
          <form onSubmit={handleAddUser}>
            <h3 className="alert alert-info ">Thêm tài khoản</h3>
            <div className="form-group">
              <span>Tài khoản</span>
              <input
                className="form-control"
                name="taiKhoan"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <span>Mật khẩu</span>
              <input
                className="form-control"
                name="matKhau"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <span>Họ tên</span>
              <input
                className="form-control"
                name="hoTen"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <span>Email</span>
              <input
                className="form-control"
                name="email"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <span>Số điện thoại</span>
              <input
                className="form-control"
                name="soDt"
                onChange={handleOnchange}
              />
            </div>

            <div className="form-group was-validated">
              <label class="my-1 mr-2" for="ra">
                Loại người dùng
              </label>
              <select
                id="ra"
                name="maLoaiNguoiDung"
                className="custom-select"
                required
              >
                <option value="">Open this select menu</option>
                <option value="KhachHang">Khách hàng</option>
                <option value="QuanTri">Quản Trị</option>
              </select>
              <div className="invalid-feedback">Chọn người dùng</div>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-success w-100">
                Thêm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
