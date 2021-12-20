import React, { useEffect } from "react";
import moment from "moment";
const GetFullDate = () => {
  useEffect(() => {
    handle = setInterval(writeTime, 1000);
    return unmountHandler; 
  },[]);
  let handle = null;
  function unmountHandler() {
    clearInterval(handle);}
  function writeTime() {
    const now = moment();
    document.title = now.format("DD/MM HH:mm:ss");}
  return <h2>see full date in tab</h2>;
};
export default GetFullDate;