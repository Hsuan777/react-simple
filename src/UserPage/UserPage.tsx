import "./UserPage.css";
import { useState } from "react";
import UpdatePWForm from "../components/UpdatePWForm";

function UserPage() {
  const [resetPW, setResetPW] = useState(false);
  return (
    <div>
      {/* banner */}
      <figure className="banner figure">
        <div className="container d-flex align-items-center h-100">
          <p className="fs-1">Hello，Vic</p>
        </div>
      </figure>
      <div className="container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              個人資料
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              我的訂單
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="d-flex row">
              <div className="col-5 p-10">
                <p className="mb-10">修改密碼</p>
                <div className="mb-6">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    電子信箱
                  </label>
                  <p>ex@example.com</p>
                </div>
                <div>
                  <label htmlFor="PW" className="form-label">
                    密碼
                  </label>
                  <div className="d-flex justify-content-between align-items-center">
                    <input
                      type="password"
                      value="xxxxxxxx"
                      className="form-control bg-white border-0 ps-0 w-50"
                      id="PW"
                      disabled
                    />
                    <input
                      type="button"
                      value="重設"
                      onClick={() => setResetPW(!resetPW)}
                      className="btn btn-primary"
                    />
                  </div>
                  {/* 更新密碼表單 */}
                  {/* resetPW === true 顯示 Form  */}
                  {resetPW && <UpdatePWForm />}
                </div>
              </div>
              <div className="col-7 p-10">
                <p>基本資料</p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
