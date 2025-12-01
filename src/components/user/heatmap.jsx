// import React, {useEffect, useState} from 'react';
// import HeatMap from '@uiw/reac-heat-map'

// // Function to generate the random activites by user
// const generateActivityData = (startDate, endDate) => {
//     const data = []
//     const start = new Date(startDate)
//     const end = new Date(endDate)

//     while (start <= end) {
//         const count = Math.floor(Math.random() * 50);
//         data.push({
//             date : start.toISOString().split("T")[0],
//             count : count,
//         }) 
//         start.setDate(start.getDate() + 1)
//     }
// }