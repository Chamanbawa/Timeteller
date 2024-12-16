import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import DayHours from "../../components/Dayhours/DayHours";
import { TotalHoursProvider } from "../../components/Context/TotalHoursContext";
import DisplayHours from "../../components/HourDisplay/DisplayHours";
function Index() {

  return (
    <>
     
<TotalHoursProvider>
<div>
     <DayHours day="Wednesday"/>
     <DayHours day="Thursday"/>
     <DayHours day="Friday"/>
     <DayHours day="Saturday"/>
     <DayHours day="Sunday"/>
     <DayHours day="Monday"/>
     <DayHours day="Tuesday"/>
     <DisplayHours/>
     </div>
</TotalHoursProvider>
   
    </>
  );
}

export default Index;
