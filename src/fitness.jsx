import React, { useState, useEffect } from "react";
import "./App.css"

const fitnessTips = [
  { day: "Monday", tip: "Drink a glass of water before every meal." },
  { day: "Tuesday", tip: "Take a 30-minute walk after dinner." },
  { day: "Wednesday", tip: "Do a 15-minute yoga session." },
  { day: "Thursday", tip: "Replace sugary drinks with herbal tea." },
  { day: "Friday", tip: "Try a new workout routine for 20 minutes." },
  { day: "Saturday", tip: "Go for a hike or jog in nature." },
  { day: "Sunday", tip: "Take time to stretch and relax your muscles." },
];

const Fitness = () => {
  const [todayTip, setTodayTip] = useState({});
  const [weekTips, setWeekTips] = useState(fitnessTips);

  useEffect(() => {
    localStorage.setItem("fitnessTips", JSON.stringify(fitnessTips));
  }, []);

  useEffect(() => {
    const storedTips = JSON.parse(localStorage.getItem("fitnessTips"));
    if (storedTips) setWeekTips(storedTips);
  }, []);

  useEffect(() => {
    const today = new Date().getDay(); // Sunday = 0, Monday = 1...
    setTodayTip(weekTips[today === 0 ? 6 : today - 1]); // Adjust for index
  }, [weekTips]);

  return (
    <>
    <main>
      <h1 className="foh">Daily Fitness Tip</h1>
      {todayTip && todayTip.tip ? (
        <p className="ti">{todayTip.tip}</p>
      ) : (
        <p className="ti">Come back tomorrow for your fitness tip!</p>
      )}
      <h2 className="wee">Weekly Fitness Tips</h2>
      <ul className="yu">
        {weekTips.map((tip, index) => (
          <li key={index}>
            <strong>{tip.day}:</strong> {tip.tip}
          </li>
        ))}
      </ul>
    </main>
      <footer>
      <p>Made By Dan-Vic | &copy; 2024</p>
    </footer>
    </>
  );
};

export default Fitness;


// Move fitnessTips outside the component scope
