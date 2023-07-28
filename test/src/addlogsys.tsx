interface LogObject {
  Action: string;
  Date: string;
  Success: string | boolean;
  Time: string;
}

function SetAction(Action: string, isSucces: string): void {
  let loggersysLL: LogObject[] = [];

  if (localStorage.getItem("logsystem") !== null) {
    loggersysLL = JSON.parse(localStorage.getItem("logsystem")!) as LogObject[];
  } else {
    localStorage.setItem("logsystem", JSON.stringify(loggersysLL));
  }

  let currentdateLL = new Date();
  let innerobjLL: LogObject = {
    Action: Action,
    Date:
      currentdateLL.getDate() +
      "/" +
      (currentdateLL.getMonth() + 1) +
      "/" +
      currentdateLL.getFullYear(),
    Success: isSucces,
    Time:
      currentdateLL.getHours() +
      ":" +
      currentdateLL.getMinutes() +
      ":" +
      currentdateLL.getSeconds(),
  };

  loggersysLL.push(innerobjLL);

  localStorage.setItem("logsystem", JSON.stringify(loggersysLL));
}

export default SetAction;
