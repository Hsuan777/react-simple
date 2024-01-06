function Order() {
  return (
    <>
      <form action="https://ccore.newebpay.com/MPG/mpg_gateway" method="post">
        <input type="text" name="MerchantID" value="MS151159636" />
        <input type="text" name="TradeSha" value="" />
        <input type="text" name="TradeInfo" value="" />
        <input type="text" name="TimeStamp" value="" />
        <input type="text" name="Version" value="2.0" />
        <input type="text" name="MerchantOrderNo" value="" />
        <input type="text" name="Amt" value="" />
        <input type="email" name="Email" value="" />
        <button type="submit">送出</button>
      </form>
    </>
  );
}

export default Order;
