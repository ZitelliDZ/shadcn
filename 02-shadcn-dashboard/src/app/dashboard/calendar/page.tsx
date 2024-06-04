"use client";
import { Calendar } from "@/components/ui/calendar"; 
import { useState } from "react";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([new Date(), new Date()]); 

  const dateString = date?.toDateString();

  return (
    <>
      <h1>Calendar</h1>
      <div className="flex flex-row flex-wrap gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          disabled={(date)=> date.getDay() === 0 || date.getDay() === 6}
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          disabled={(date)=> date > new Date()}
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          disabled={(date)=> date < new Date()}
        />
        <Calendar
          mode="multiple"
          selected={multipleDate}
          onSelect={setMultipleDate}
          className="rounded-md border"
          
        /> 
      </div>

      <div>
        <h1>Selected Date</h1>
        <p>{dateString}</p>
        <p>
          {multipleDate?.map((date) => date.toDateString()).join(", ")}
        </p>

      </div>
    </>
  );
}
