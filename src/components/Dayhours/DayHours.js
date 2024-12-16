import React, { useEffect, useState } from "react";
import { useTotalHours } from "../Context/TotalHoursContext";
function DayHours(props) {
  const [startingTime, setStartingTime] = useState("");
  const [endingTime, setEndingTime] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [timeFormat, setTimeFormat] = useState("12HourFormat");

  const { addHours } = useTotalHours();
  const calculate24HourDuration = () => {
    const starting = new Date(`2023-01-01T${startingTime}`);
    const ending = new Date(`2023-01-01T${endingTime}`);

    if (!isNaN(starting) && !isNaN(ending)) {
      const diff = (ending - starting) / (1000 * 60 * 60);
      const breakInHours = breakTime / 60;
      setTotalHours(diff.toFixed(2) - breakInHours);
    } else {
      setTotalHours("0");
    }
  };

  const handleOnBlurStartTime = () => {
    const value = startingTime;

    if (!/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
      setStartingTime("");
    }
  };
  const handleOnBlurEndingTime = () => {
    const value = endingTime;

    if (!/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(value)) {
      setEndingTime("");
    }
  };

  useEffect(() => {
    calculate24HourDuration();
    // Add the calculated hours to the total using the context
    addHours(Number(totalHours));
  }, [endingTime, startingTime, breakTime, totalHours]);

  return (
    <>
      <div className="w-100 d-grid justify-content-center p-2 bg-dark">
        <p className="dayName text-white">{props.day}</p>

        <div className="w-100 d-grid place-items-center">
          <div>
            <div className="w-100">
            <label className="w-50 text-white">Start time</label>
            <input className="w-50 f"
              type="text"
              value={startingTime}
              onChange={(e) => setStartingTime(e.target.value)}
              onBlur={handleOnBlurStartTime}
            />
            </div>
            <div className="w-100">
            <label className="w-50 text-white">Ending</label>
            <input
            className="w-50"
              type="text"
              value={endingTime}
              onChange={(e) => setEndingTime(e.target.value)}
              onBlur={handleOnBlurEndingTime}
            />
            </div>

            <div className="w-100">
            <label className="w-50 text-white">Break</label>
            <input className="w-50"
              type="text"
              value={breakTime}
              onChange={(e) => setBreakTime(e.target.value)}
            ></input>
            </div>
            <label className="text-white">Total hours : {totalHours}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default DayHours;
