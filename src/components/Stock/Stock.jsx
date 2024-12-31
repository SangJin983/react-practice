import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

const URL_KOSPI = "https://query1.finance.yahoo.com/v8/finance/chart/^KS11";

const Stock = () => {
  const [price, setPrice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchKOSPI = useCallback(async () => {
    setIsLoading(true);

    const res = await fetch(URL_KOSPI);
    const data = await res.json();
    const currentPrice = data.chart.result[0].indicators.quote[0].close[0];

    setIsLoading(false);
    setPrice(currentPrice);
  }, []);

  useEffect(() => {
    fetchKOSPI();
  }, [fetchKOSPI]);

  return (
    <div>
      <p>현재 KOSPI : {isLoading ? "로딩 중..." : price}</p>
      <button onClick={fetchKOSPI}>갱신</button>
    </div>
  );
};

export default Stock;
