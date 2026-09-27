import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const getMonthData = (year: number, month: number) => {
  const weeks = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const numDays = lastDay.getDate();
  const startWeekday = firstDay.getDay();

  let currentDay = 1 - startWeekday;
  for (let week = 0; week < 6; week++) {
    const weekRow = [];
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      if (currentDay < 1 || currentDay > numDays) {
        weekRow.push(null);
      } else {
        weekRow.push(new Date(year, month, currentDay));
      }
      currentDay++;
    }
    weeks.push(weekRow);
  }
  return weeks;
};

export const CalendarWidget: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const today = new Date();
    return { year: today.getFullYear(), month: today.getMonth() };
  });

  const monthData = useMemo(
    () => getMonthData(currentMonth.year, currentMonth.month),
    [currentMonth.year, currentMonth.month]
  );

  const today = new Date();
  const todayDate = today.getDate();
  const isCurrentMonth =
    today.getFullYear() === currentMonth.year && today.getMonth() === currentMonth.month;

  const gotoPrevMonth = () => {
    setCurrentMonth(({ year, month }) =>
      month === 0 ? { year: year - 1, month: 11 } : { year, month: month - 1 }
    );
  };

  const gotoNextMonth = () => {
    setCurrentMonth(({ year, month }) =>
      month === 11 ? { year: year + 1, month: 0 } : { year, month: month + 1 }
    );
  };

  const monthTitle = new Date(currentMonth.year, currentMonth.month).toLocaleString('default', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="p-3.5 rounded-2xl bg-[#0c0919] border border-violet-900/30 text-left space-y-3 shadow-xl">
      <div className="flex items-center justify-between pb-2 border-b border-violet-900/30">
        <button
          onClick={gotoPrevMonth}
          className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
        <span className="text-xs font-mono font-bold text-white">{monthTitle}</span>
        <button
          onClick={gotoNextMonth}
          className="p-1 rounded text-slate-400 hover:text-white cursor-pointer"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <table className="w-full text-center text-[10px] font-mono border-collapse">
        <thead>
          <tr className="text-slate-500">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <th key={i} className="py-1 font-normal">
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthData.map((week, wIdx) => (
            <tr key={wIdx}>
              {week.map((dateObj, dIdx) => {
                if (!dateObj) {
                  return <td key={dIdx} className="py-1 opacity-10">·</td>;
                }
                const dateNum = dateObj.getDate();
                const isToday = isCurrentMonth && dateNum === todayDate;
                const isCompleted = dateNum % 2 === 0;

                return (
                  <td key={dIdx} className="py-0.5">
                    <div
                      className={`w-6 h-6 mx-auto rounded-lg flex items-center justify-center transition-colors ${
                        isToday
                          ? 'bg-violet-600 text-white font-bold ring-1 ring-violet-400'
                          : isCompleted
                          ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {dateNum}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
