import dayjs from "dayjs";
import React, { useContext, useState } from "react";
import { generateDate, months } from "../util/Calender.jsx";
import cn from "../util/Cn.jsx";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import EventMenu from "./EventMenu.jsx";
import { UserContext } from "../UserContext.jsx";

const CalenderWidget = (props) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const {selectDate, setSelectDate} = props;
	//const { selectDate, setSelectDate } = useContext(UserContext);

	return (
		<div className="flex items-center h-fit">
		<div className="flex  items-start  sm:max-w-screen-xl mx-auto  h-max mt-10 flex-col ">
			<div className="md:w-[90vw] lg:w-[57vw] h-auto sm:p-0 p-5">
				<div className="flex justify-between items-center">
					<h1 className="select-none font-semibold w-38 sm:text-lg text-md">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex gap-10 items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<h1
							className=" cursor-pointer hover:scale-105 transition-all text-md"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<div className="flex justify-center"><h1
								key={index}
								className="text-md text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
							>
								{day}
							</h1></div>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
								
									className={cn(
										currentMonth ? "" : "text-gray-400",
										today
											? "bg-red-700 text-white"
											: "",
										selectDate
											.toDate()
											.toDateString() ===
											date.toDate().toDateString()
											? "bg-black text-white"
											: "",
										" hover:bg-black hover:text-white transition-all cursor-pointer select-none p-2 text-center h-14 sm:h-[100px] grid place-content-center border-t"
									)}
									onClick={() => {
										setSelectDate(date);
									}}
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-gray-400",
											today
												? " text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? " text-white"
												: "",
											"grid place-content-center sm:text-lg text-sm"
										)}
										
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
      					{/* EVENT MENU */}
			<EventMenu selectDate={selectDate} />
			</div>
		</div>
	);
}

export default CalenderWidget