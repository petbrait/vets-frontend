import { useState } from "react";
import { Header } from "./Header";
import Calendar from "./Calendar";

const Index = () => {
  const [renderTab, setRenderTab] = useState(1);

  return (
    <div>
      <Header renderTab={renderTab} setRenderTab={setRenderTab} />
      <div>{renderTab === 1 && <Calendar />}</div>
    </div>
  );
};

export default Index;
