import React, { useEffect } from "react";
import create from "zustand";

interface LogItem {
  Action: string;
  Date: string;
  Time: string;
  Success: string;
}

interface LogStore {
  log: LogItem[];
  setLog: (logs: LogItem[]) => void;
}

const useLogStore = create<LogStore>((set) => ({
  log: [],
  setLog: (logs) => set({ log: logs }),
}));

const Login: React.FC = () => {
  const log = useLogStore((state) => state.log);
  const setLog = useLogStore((state) => state.setLog);

  useEffect(() => {
    const logs: LogItem[] = JSON.parse(
      localStorage.getItem("logsystem") || "[]"
    );
    setLog(logs);
  }, [setLog]);

  const renderLog = () => {
    return log.map(({ Action, Date, Time, Success }, index) => (
      <tr key={index}>
        <td>{Action}</td>
        <td>{Date}</td>
        <td>{Time}</td>
        <td>{Success}</td>
      </tr>
    ));
  };

  return (
    <div className="container-fluid">
      <div className="main">
        <div className="table">
          <table className="table caption-top">
            <caption>List of Actions</caption>
            <thead>
              <tr>
                <th scope="col">Action</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Success</th>
              </tr>
            </thead>
            <tbody>{renderLog()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Login;
