import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function OrderResult() {
  const API_URL = "https://enjoymentluxuryhotel.onrender.com/api/v1";
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get("MerchantOrderNo");
  const [orderResult, setOrderResult] = useState(false);
  useEffect(() => {
    const getOrderResult = async () => {
      const response = await axios.get(
        `${API_URL}/order/merchantOrderNo/${id}`
      );
      setOrderResult(response.data.status);
    };
    getOrderResult();
  }, [id]);
  return (
    <>
      <h2>Order Result</h2>
      <p>{orderResult ? "訂房成功" : "訂房失敗"}</p>
    </>
  );
}

export default OrderResult;
