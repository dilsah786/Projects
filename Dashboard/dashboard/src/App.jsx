import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Info from "./Component/Info";
import Charts from "./Component/Charts";
import DoughnutChart from "./Component/DoughnutChart";
import Trasaction from "./Component/Trasaction";
import Accounts from "./Component/accounts";
import Stats from "./Component/Stats";
import useStore from "./store";

function App() {
  const [count, setCount] = useState(0);

   const theme = useStore((store) => store.theme);

  return (
    <main className={theme}>
      <div className="w-full px-6 md:px-20 bg-white  dark:bg-slate-900">
        <Navbar />
        <div className="px-0 md:px-5 2xl:px-20">
          <Info
            title={"Dashboard"}
            subTitle="Monitor your financial activities"
          />
          <Stats />
          <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10">
            <Charts />
            <DoughnutChart />
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-0 md:gap-10 2xl:gap-20">
            <Trasaction />
            <Accounts />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
