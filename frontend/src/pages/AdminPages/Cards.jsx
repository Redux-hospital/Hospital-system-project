// import React from "react";
// import "./Cards.css";
// import { cardsData } from "./Data";

// import Card from "./Card";

// const Cards = () => {
//   return (
//     <div className="Cards">
//       {cardsData.map((card, id) => {
//         return (
//           <div className="parentContainer" key={id}>
//             <Card
//               title={card.title}
//               color={card.color}
//               barValue={card.barValue}
//               value={card.value}
//               png={card.png}
//               series={card.series}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Cards;






// import React from "react";
// import Card from "./Card";
// import "./Cards.css";
// import {
//   UilUsdSquare,
//   UilMoneyWithdrawal,
//   UilClipboardAlt,
// } from "@iconscout/react-unicons";

// const cardsData = [
//   {
//     title: "patients",
//     color: {
//       backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
//       boxShadow: "0px 10px 20px 0px #e0c6f5",
//     },
//     barValue: 70,
//     value: "25,970",
//     png: UilUsdSquare,
//     series: [
//       {
//         name: "Sales",
//         data: [31, 40, 28, 51, 42, 109, 100],
//       },
//     ],
//   },
//   {
//     title: "Revenue",
//     color: {
//       backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
//       boxShadow: "0px 10px 20px 0px #FDC0C7",
//     },
//     barValue: 80,
//     value: "14,270",
//     png: UilMoneyWithdrawal,
//     series: [
//       {
//         name: "Revenue",
//         data: [10, 100, 50, 70, 80, 30, 40],
//       },
//     ],
//   },
//   {
//     title: "Expenses",
//     color: {
//       backGround:
//         "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
//       boxShadow: "0px 10px 20px 0px #F9D59B",
//     },
//     barValue: 60,
//     value: "4,270",
//     png: UilClipboardAlt,
//     series: [
//       {
//         name: "Expenses",
//         data: [10, 25, 15, 30, 12, 15, 20],
//       },
//     ],
//   },
// ];

// const Cards = () => {
//   return (
//     <div className="Cards">
//       {cardsData.map((card, id) => {
//         return (
//           <div className="parentContainer" key={id}>
//             <Card
//               title={card.title}
//               color={card.color}
//               barValue={card.barValue}
//               value={card.value}
//               png={card.png}
//               series={card.series}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Cards;









// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import "./Cards.css";
// import {
//   UilUsdSquare,
//   UilMoneyWithdrawal,
//   UilClipboardAlt,
// } from "@iconscout/react-unicons";
// import axios from 'axios';

// const Cards = () => {
//   const [patientCount, setPatientCount] = useState(0);

//   useEffect(() => {
//     const fetchPatientCount = async () => {
//       try {
//         const response = await axios.get('/api/patients/count');
//         setPatientCount(response.data.count);
//       } catch (error) {
//         console.error('Error fetching patient count:', error);
//       }
//     };

//     fetchPatientCount();
//   }, []);

//   const cardsData = [
//     {
//       title: "Patients",
//       color: {
//         backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
//         boxShadow: "0px 10px 20px 0px #e0c6f5",
//       },
//       barValue: 70,
//       value: patientCount.toString(),
//       png: UilUsdSquare,
//       series: [
//         {
//           name: "Patients",
//           data: [31, 40, 28, 51, 42, 109, 100],
//         },
//       ],
//     },
//     {
//       title: "Revenue",
//       color: {
//         backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
//         boxShadow: "0px 10px 20px 0px #FDC0C7",
//       },
//       barValue: 80,
//       value: "14,270",
//       png: UilMoneyWithdrawal,
//       series: [
//         {
//           name: "Revenue",
//           data: [10, 100, 50, 70, 80, 30, 40],
//         },
//       ],
//     },
//     {
//       title: "Expenses",
//       color: {
//         backGround:
//           "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
//         boxShadow: "0px 10px 20px 0px #F9D59B",
//       },
//       barValue: 60,
//       value: "4,270",
//       png: UilClipboardAlt,
//       series: [
//         {
//           name: "Expenses",
//           data: [10, 25, 15, 30, 12, 15, 20],
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="Cards">
//       {cardsData.map((card, id) => {
//         return (
//           <div className="parentContainer" key={id}>
//             <Card
//               title={card.title}
//               color={card.color}
//               barValue={card.barValue}
//               value={card.value}
//               png={card.png}
//               series={card.series}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Cards;






// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import "./Cards.css";
// import {
//   UilUsdSquare,
//   UilMoneyWithdrawal,
//   UilClipboardAlt,
// } from "@iconscout/react-unicons";
// import axios from 'axios';

// const Cards = () => {
//   const [patientCount, setPatientCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPatientCount = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/Allpatients/count');
//         setPatientCount(response.data.count);
//       } catch (error) {
//         console.error('Error fetching patient count:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatientCount();
//   }, []);

//   const cardsData = [
//     {
//       title: "Patients",
//       color: {
//         backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
//         boxShadow: "0px 10px 20px 0px #e0c6f5",
//       },
//       barValue: 70,
//       value: loading ? "Loading..." : patientCount.toString(),
//       png: UilUsdSquare,
//       series: [
//         {
//           name: "Patients",
//           data: [31, 40, 28, 51, 42, 109, 100],
//         },
//       ],
//     },
//     // ... (other card data remains the same)
//   ];

//   return (
//     <div className="Cards">
//       {cardsData.map((card, id) => (
//         <div className="parentContainer" key={id}>
//           <Card
//             title={card.title}
//             color={card.color}
//             barValue={card.barValue}
//             value={card.value}
//             png={card.png}
//             series={card.series}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;



// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import "./Cards.css";
// import {
//   UilUsdSquare,
//   UilMoneyWithdrawal,
//   UilClipboardAlt,
// } from "@iconscout/react-unicons";
// import axios from 'axios';

// const Cards = () => {
//   const [patientCount, setPatientCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPatientCount = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/Allpatients/count');
//         setPatientCount(response.data.count);
//       } catch (error) {
//         console.error('Error fetching patient count:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatientCount();
//   }, []);

//   const cardsData = [
//     {
//       title: "Patients",
//       color: {
//         backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
//         boxShadow: "0px 10px 20px 0px #e0c6f5",
//       },
//       barValue:patientCount,
//       value: loading ? "Loading..." : patientCount.toString(),
//       png: UilUsdSquare,
//     },
//     // ... (other card data remains the same)
//   ];

//   return (
//     <div className="Cards">
//       {cardsData.map((card, id) => (
//         <div className="parentContainer" key={id}>
//           <Card
//             title={card.title}
//             color={card.color}
//             barValue={card.barValue}
//             value={card.value}
//             png={card.png}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;






// // Cards.js
// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import "./Cards.css";
// import {
//   UilUsdSquare,
//   UilMoneyWithdrawal,
//   UilClipboardAlt,
// } from "@iconscout/react-unicons";
// import axios from 'axios';

// const Cards = () => {
//   const [patientCount, setPatientCount] = useState(0);
//   const [doctorCount, setDoctorCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCounts = async () => {
//       try {
//         const patientResponse = await axios.get('http://localhost:5000/api/Allpatients/count');
//         const doctorResponse = await axios.get('http://localhost:5000/api/Allpatients/count');
//         setPatientCount(patientResponse.data.count);
//         setDoctorCount(doctorResponse.data.count);
//       } catch (error) {
//         console.error('Error fetching counts:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCounts();
//   }, []);

//   const cardsData = [
//     {
//       title: "Patients",
//       color: {
//         backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
//         boxShadow: "0px 10px 20px 0px #e0c6f5",
//       },
//       barValue: patientCount,
//       value: loading ? "Loading..." : patientCount.toString(),
//       png: UilUsdSquare,
//       type: "patient"
//     },
//     {
//       title: "Doctors",
//       color: {
//         backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
//         boxShadow: "0px 10px 20px 0px #FDC0C7",
//       },
//       barValue: doctorCount,
//       value: loading ? "Loading..." : doctorCount.toString(),
//       png: UilMoneyWithdrawal,
//       type: "doctor"
//     },
//     // ... (other card data remains the same)
//   ];

//   return (
//     <div className="Cards">
//       {cardsData.map((card, id) => (
//         <div className="parentContainer" key={id}>
//           <Card
//             title={card.title}
//             color={card.color}
//             barValue={card.barValue}
//             value={card.value}
//             png={card.png}
//             type={card.type}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;






// // Cards.js
// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import "./Cards.css";
// import {
//   UilUsdSquare,
//   UilMoneyWithdrawal,
//   UilClipboardAlt,
// } from "@iconscout/react-unicons";
// import axios from 'axios';

// const Cards = () => {
//   const [patientCount, setPatientCount] = useState(0);
//   const [doctorCount, setDoctorCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCounts = async () => {
//       try {
//         const patientResponse = await axios.get('http://localhost:5000/api/Allpatients/count');
//         const doctorResponse = await axios.get('http://localhost:5000/api/admin/doctors/count');
//         setPatientCount(patientResponse.data.count);
//         setDoctorCount(doctorResponse.data.count);
//       } catch (error) {
//         console.error('Error fetching counts:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCounts();
//   }, []);

//   const cardsData = [
//     {
//       title: "Patients",
//       color: {
//         backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
//         boxShadow: "0px 10px 20px 0px #e0c6f5",
//       },
//       barValue: patientCount,
//       value: loading ? "Loading..." : patientCount.toString(),
//       png: UilUsdSquare,
//       type: "patient"
//     },
//     {
//       title: "Doctors",
//       color: {
//         backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
//         boxShadow: "0px 10px 20px 0px #FDC0C7",
//       },
//       barValue: doctorCount,
//       value: loading ? "Loading..." : doctorCount.toString(),
//       png: UilMoneyWithdrawal,
//       type: "doctor"
//     },
//     // ... (other card data remains the same)
//   ];

//   return (
//     <div className="Cards">
//       {cardsData.map((card, id) => (
//         <div className="parentContainer" key={id}>
//           <Card
//             title={card.title}
//             color={card.color}
//             barValue={card.barValue}
//             value={card.value}
//             png={card.png}
//             type={card.type}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;

// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import "./Cards.css";
// import {
//   UilUsdSquare,
//   UilMoneyWithdrawal,
//   UilClipboardAlt,
// } from "@iconscout/react-unicons";
// import axios from 'axios';

// const Cards = () => {
//   const [patientCount, setPatientCount] = useState(0);
//   const [doctorCount, setDoctorCount] = useState(0);
//   const [appointmentCount, setAppointmentCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCounts = async () => {
//       try {
//         const patientResponse = await axios.get('http://localhost:5000/api/Allpatients/count');
//         const doctorResponse = await axios.get('http://localhost:5000/api/admin/doctors/count');
//         const appointmentResponse = await axios.get('http://localhost:5000/api/AdminPatientAppointments/count');
        
//         setPatientCount(patientResponse.data.count);
//         setDoctorCount(doctorResponse.data.count);
//         setAppointmentCount(appointmentResponse.data.count);
//       } catch (error) {
//         console.error('Error fetching counts:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCounts();
//   }, []);

//   const cardsData = [
//     {
//       title: "Patients",
//       color: {
//         backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
//         boxShadow: "0px 10px 20px 0px #e0c6f5",
//       },
//       barValue: patientCount,
//       value: loading ? "Loading..." : patientCount.toString(),
//       png: UilUsdSquare,
//       type: "patient"
//     },
//     {
//       title: "Doctors",
//       color: {
//         backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
//         boxShadow: "0px 10px 20px 0px #FDC0C7",
//       },
//       barValue: doctorCount,
//       value: loading ? "Loading..." : doctorCount.toString(),
//       png: UilMoneyWithdrawal,
//       type: "doctor"
//     },
//     {
//       title: "Appointments",
//       color: {
//         backGround: "linear-gradient(180deg, #81FBB8 0%, #28C76F 100%)",
//         boxShadow: "0px 10px 20px 0px #b4e4d4",
//       },
//       barValue: appointmentCount,
//       value: loading ? "Loading..." : appointmentCount.toString(),
//       png: UilClipboardAlt,
//       type: "appointment"
//     },
//   ];

//   return (
//     <div className="Cards">
//       {cardsData.map((card, id) => (
//         <div className="parentContainer" key={id}>
//           <Card
//             title={card.title}
//             color={card.color}
//             barValue={card.barValue}
//             value={card.value}
//             png={card.png}
//             type={card.type}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;







import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Cards.css";
import {
  UilUsdSquare,
  UilMoneyWithdrawal,
  UilClipboardAlt,
  UilCalendarAlt,
} from "@iconscout/react-unicons";
import axios from 'axios';

const Cards = () => {
  const [patientCount, setPatientCount] = useState(0);
  const [doctorCount, setDoctorCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [scheduleCount, setScheduleCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const patientResponse = await axios.get('http://localhost:5000/api/Allpatients/count');
        const doctorResponse = await axios.get('http://localhost:5000/api/admin/doctors/count');
        const appointmentResponse = await axios.get('http://localhost:5000/api/AdminPatientAppointments/count');
        const scheduleResponse = await axios.get('http://localhost:5000/api/schedules/count');
        
        setPatientCount(patientResponse.data.count);
        setDoctorCount(doctorResponse.data.count);
        setAppointmentCount(appointmentResponse.data.count);
        setScheduleCount(scheduleResponse.data.count);
      } catch (error) {
        console.error('Error fetching counts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  const cardsData = [
    {
      title: "Patients",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: patientCount,
      value: loading ? "Loading..." : patientCount.toString(),
      png: UilUsdSquare,
      type: "patient"
    },
    {
      title: "Doctors",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: doctorCount,
      value: loading ? "Loading..." : doctorCount.toString(),
      png: UilMoneyWithdrawal,
      type: "doctor"
    },
    {
      title: "Appointments",
      color: {
        backGround: "linear-gradient(180deg, #81FBB8 0%, #28C76F 100%)",
        boxShadow: "0px 10px 20px 0px #b4e4d4",
      },
      barValue: appointmentCount,
      value: loading ? "Loading..." : appointmentCount.toString(),
      png: UilClipboardAlt,
      type: "appointment"
    },
    {
      title: "Schedules",
      color: {
        backGround: "linear-gradient(180deg, #FF9900 0%, #FFC266 100%)",
        boxShadow: "0px 10px 20px 0px #FFE5B4",
      },
      barValue: scheduleCount,
      value: loading ? "Loading..." : scheduleCount.toString(),
      png: UilCalendarAlt,
      type: "schedule"
    },
  ];

  return (
    <div className="Cards">
      {cardsData.map((card, id) => (
        <div className="parentContainer" key={id}>
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            type={card.type}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;