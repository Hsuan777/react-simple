import axios from "axios";
import { useState } from "react";

function OrderResult() {
  const API_URL = "https://enjoymentluxuryhotel.onrender.com/api/v1";

  const id = new URLSearchParams(window.location.search).get("merchantOrderNo");

  const [orderResult, setOrderResult] = useState(false);
  const getOrderResult = async () => {
    const response = await axios.get(`${API_URL}/order/merchantOrderNo/${id}`);
    setOrderResult(response.data.status);
  };

  getOrderResult();
  return (
    <>
      <h2>Order Result</h2>
      <p>{orderResult ? "訂房成功" : "訂房失敗"}</p>
    </>
  );
}

export default OrderResult;
