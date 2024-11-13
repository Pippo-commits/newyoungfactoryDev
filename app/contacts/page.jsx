"use client";
import useTimer from "react-hook-time";
export default function Noi() {
  // const { currentTime, start, pause, reset } = useTimer(5, {
  //   onEnd: () => document.getElementById("div_prova").remove(),
  //   autostart: true,
  // });
  return (
    <div>
      <div id="div_prova"></div>
    </div>
  );
}
