

// import React, { useState } from "react";
// import "./Card.css";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { motion } from "framer-motion";
// import { UilTimes } from "@iconscout/react-unicons";
// import Chart from "react-apexcharts";

// const Card = (props) => {
//   const [expanded, setExpanded] = useState(false);
//   return expanded ? (
//     <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
//   ) : (
//     <CompactCard param={props} setExpanded={() => setExpanded(true)} />
//   );
// };

// function CompactCard({ param, setExpanded }) {
//   const Png = param.png;
//   return (
//     <motion.div
//       className="CompactCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       layout // Use the layout prop here
//       onClick={setExpanded}
//     >
//       <div className="radialBar">
//         <CircularProgressbar
//           value={param.barValue}
//           text={`${param.barValue}%`}
//         />
//         <span>{param.title}</span>
//       </div>
//       <div className="detail">
//         <Png />
//         <span>${param.value}</span>
//         <span>Last 24 hours</span>
//       </div>
//     </motion.div>
//   );
// }

// function ExpandedCard({ param, setExpanded }) {
//   const data = {
//     options: {
//       chart: {
//         type: "area",
//         height: "auto",
//       },
//       dropShadow: {
//         enabled: false,
//         top: 0,
//         left: 0,
//         blur: 3,
//         color: "#000",
//         opacity: 0.35,
//       },
//       fill: {
//         colors: ["#fff"],
//         type: "gradient",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "smooth",
//         colors: ["white"],
//       },
//       tooltip: {
//         x: {
//           format: "dd/MM/yy HH:mm",
//         },
//       },
//       grid: {
//         show: true,
//       },
//       xaxis: {
//         type: "datetime",
//         categories: [
//           "2018-09-19T00:00:00.000Z",
//           "2018-09-19T01:30:00.000Z",
//           "2018-09-19T02:30:00.000Z",
//           "2018-09-19T03:30:00.000Z",
//           "2018-09-19T04:30:00.000Z",
//           "2018-09-19T05:30:00.000Z",
//           "2018-09-19T06:30:00.000Z",
//         ],
//       },
//     },
//   };

//   return (
//     <motion.div
//       className="ExpandedCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       layout // Use the layout prop here
//     >
//       <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
//         <UilTimes onClick={setExpanded} />
//       </div>
//       <span>{param.title}</span>
//       <div className="chartContainer">
//         <Chart options={data.options} series={param.series} type="area" />
//       </div>
//       <span>Last 24 hours</span>
//     </motion.div>
//   );
// }

// export default Card;












// import React, { useState } from "react";
// import "./Card.css";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { motion } from "framer-motion";
// import { UilTimes } from "@iconscout/react-unicons";
// import Chart from "react-apexcharts";

// const Card = (props) => {
//   const [expanded, setExpanded] = useState(false);
//   return expanded ? (
//     <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
//   ) : (
//     <CompactCard param={props} setExpanded={() => setExpanded(true)} />
//   );
// };

// function CompactCard({ param, setExpanded }) {
//   const Png = param.png;
//   return (
//     <motion.div
//       className="CompactCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       onClick={setExpanded}
//     >
//       <div className="radialBar">
//         <CircularProgressbar
//           value={param.barValue}
//           text={`${param.barValue}%`}
//         />
//         <span>{param.title}</span>
//       </div>
//       <div className="detail">
//         <Png />
//         <span>${param.value}</span>
//         <span>Last 24 hours</span>
//       </div>
//     </motion.div>
//   );
// }

// function ExpandedCard({ param, setExpanded }) {
//   const data = {
//     options: {
//       chart: {
//         type: "area",
//         height: "auto",
//       },
//       dropShadow: {
//         enabled: false,
//         enabledOnSeries: undefined,
//         top: 0,
//         left: 0,
//         blur: 3,
//         color: "#000",
//         opacity: 0.35,
//       },
//       fill: {
//         colors: ["#fff"],
//         type: "gradient",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "smooth",
//         colors: ["white"],
//       },
//       tooltip: {
//         x: {
//           format: "dd/MM/yy HH:mm",
//         },
//       },
//       grid: {
//         show: true,
//       },
//       xaxis: {
//         type: "datetime",
//         categories: [
//           "2018-09-19T00:00:00.000Z",
//           "2018-09-19T01:30:00.000Z",
//           "2018-09-19T02:30:00.000Z",
//           "2018-09-19T03:30:00.000Z",
//           "2018-09-19T04:30:00.000Z",
//           "2018-09-19T05:30:00.000Z",
//           "2018-09-19T06:30:00.000Z",
//         ],
//       },
//     },
//   };

//   return (
//     <motion.div
//       className="ExpandedCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//     >
//       <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
//         <UilTimes onClick={setExpanded} />
//       </div>
//       <span>{param.title}</span>
//       <div className="chartContainer">
//         <Chart options={data.options} series={param.series} type="area" />
//       </div>
//       <span>Last 24 hours</span>
//     </motion.div>
//   );
// }

// export default Card;





// import React, { useState } from "react";
// import "./Card.css";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { motion } from "framer-motion";
// import { UilTimes } from "@iconscout/react-unicons";
// import Chart from "react-apexcharts";

// const Card = (props) => {
//   const [expanded, setExpanded] = useState(false);
//   return expanded ? (
//     <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
//   ) : (
//     <CompactCard param={props} setExpanded={() => setExpanded(true)} />
//   );
// };

// function CompactCard({ param, setExpanded }) {
//   const Png = param.png;
//   return (
//     <motion.div
//       className="CompactCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       onClick={setExpanded}
//     >
//       <div className="radialBar">
//         <CircularProgressbar
//           value={param.barValue}
//           text={`${param.barValue}%`}
//         />
//         <span>{param.title}</span>
//       </div>
//       <div className="detail">
//         <Png />
//         <span>{param.title === "Patients" ? param.value : `$${param.value}`}</span>
//         <span>Last 24 hours</span>
//       </div>
//     </motion.div>
//   );
// }

// function ExpandedCard({ param, setExpanded }) {
//   const data = {
//     options: {
//       chart: {
//         type: "area",
//         height: "auto",
//       },
//       dropShadow: {
//         enabled: false,
//         enabledOnSeries: undefined,
//         top: 0,
//         left: 0,
//         blur: 3,
//         color: "#000",
//         opacity: 0.35,
//       },
//       fill: {
//         colors: ["#fff"],
//         type: "gradient",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "smooth",
//         colors: ["white"],
//       },
//       tooltip: {
//         x: {
//           format: "dd/MM/yy HH:mm",
//         },
//       },
//       grid: {
//         show: true,
//       },
//       xaxis: {
//         type: "datetime",
//         categories: [
//           "2018-09-19T00:00:00.000Z",
//           "2018-09-19T01:30:00.000Z",
//           "2018-09-19T02:30:00.000Z",
//           "2018-09-19T03:30:00.000Z",
//           "2018-09-19T04:30:00.000Z",
//           "2018-09-19T05:30:00.000Z",
//           "2018-09-19T06:30:00.000Z",
//         ],
//       },
//     },
//   };
//   return (
//     <motion.div
//       className="ExpandedCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//     >
//       <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
//         <UilTimes onClick={setExpanded} />
//       </div>
//       <span>{param.title}</span>
//       <div className="chartContainer">
//         <Chart options={data.options} series={param.series} type="area" />
//       </div>
//       <span>Last 24 hours</span>
//     </motion.div>
//   );
// }

// export default Card;








// import React, { useState } from "react";
// import "./Card.css";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { motion } from "framer-motion";
// import { UilTimes } from "@iconscout/react-unicons";
// import Chart from "react-apexcharts";

// const Card = (props) => {
//   const [expanded, setExpanded] = useState(false);
//   return expanded ? (
//     <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
//   ) : (
//     <CompactCard param={props} setExpanded={() => setExpanded(true)} />
//   );
// };

// function CompactCard({ param, setExpanded }) {
//   const Png = param.png;
//   return (
//     <motion.div
//       className="CompactCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       onClick={setExpanded}
//     >
//       <div className="radialBar">
//         <CircularProgressbar
//           value={param.barValue}
//           text={`${param.barValue}%`}
//         />
//         <span>{param.title}</span>
//       </div>
//       <div className="detail">
//         <Png />
//         <span>{param.title === "Patients" ? param.value : `$${param.value}`}</span>
//         <span>Last 24 hours</span>
//       </div>
//     </motion.div>
//   );
// }

// // ... (ExpandedCard function remains the same)

// export default Card;




// import React, { useState, useEffect } from "react";
// import "./Card.css";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { motion } from "framer-motion";
// import { UilTimes } from "@iconscout/react-unicons";
// import axios from 'axios';
// import html2canvas from 'html2canvas';

// const Card = (props) => {
//   const [expanded, setExpanded] = useState(false);
//   return expanded ? (
//     <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
//   ) : (
//     <CompactCard param={props} setExpanded={() => setExpanded(true)} />
//   );
// };

// function CompactCard({ param, setExpanded }) {
//   const Png = param.png;
//   return (
//     <motion.div
//       className="CompactCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       onClick={setExpanded}
//     >
//       <div className="radialBar">
//         <CircularProgressbar
//           value={param.barValue}
//           text={`${param.barValue}%`}
//         />
//         <span>{param.title}</span>
//       </div>
//       <div className="detail">
//         <Png />
//         <span>{param.title === "Patients" ? param.value : `$${param.value}`}</span>
//         <span>Last 24 hours</span>
//       </div>
//     </motion.div>
//   );
// }

// function ExpandedCard({ param, setExpanded }) {
//   const [patients, setPatients] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPatients = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/Allpatients');
//         setPatients(response.data);
//       } catch (error) {
//         console.error('Error fetching patients:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatients();
//   }, []);

//   const downloadPatientInfo = async () => {
//     const element = document.getElementById('patient-info');
//     const canvas = await html2canvas(element);
//     const data = canvas.toDataURL('image/png');
//     const link = document.createElement('a');

//     if (typeof link.download === 'string') {
//       link.href = data;
//       link.download = 'patient_information.png';
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } else {
//       window.open(data);
//     }
//   };

//   return (
//     <motion.div
//       className="ExpandedCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//     >
//       <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
//         <UilTimes onClick={setExpanded} />
//       </div>
//       <span>{param.title}</span>
//       <div className="patientInfo" id="patient-info">
//         {loading ? (
//           <p>Loading patient information...</p>
//         ) : (
//           <>
//             <h3>Patient Information</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Username</th>
//                   <th>Email</th>
//                   <th>Gender</th>
//                   <th>Date of Birth</th>
//                   <th>Blood Type</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {patients.map((patient) => (
//                   <tr key={patient.id}>
//                     <td>{patient.username}</td>
//                     <td>{patient.email}</td>
//                     <td>{patient.gender}</td>
//                     <td>{new Date(patient.dob).toLocaleDateString()}</td>
//                     <td>{patient.blood_type}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </>
//         )}
//       </div>
//       <button onClick={downloadPatientInfo}>Download Patient Information</button>
//     </motion.div>
//   );
// }

// export default Card;







// // Card.js
// import React, { useState, useEffect } from "react";
// import "./Card.css";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { motion } from "framer-motion";
// import { UilTimes } from "@iconscout/react-unicons";
// import axios from 'axios';
// import html2canvas from 'html2canvas';

// const Card = (props) => {
//   const [expanded, setExpanded] = useState(false);
//   return expanded ? (
//     <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
//   ) : (
//     <CompactCard param={props} setExpanded={() => setExpanded(true)} />
//   );
// };

// function CompactCard({ param, setExpanded }) {
//   const Png = param.png;
//   return (
//     <motion.div
//       className="CompactCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       onClick={setExpanded}
//     >
//       <div className="radialBar">
//         <CircularProgressbar
//           value={param.barValue}
//           text={`${param.barValue}`}
//         />
//         <span>{param.title}</span>
//       </div>
//       <div className="detail">
//         <Png />
//         <span>{param.value}</span>
//         <span>Registered {param.title}</span>
//       </div>
//     </motion.div>
//   );
// }

// function ExpandedCard({ param, setExpanded }) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/${param.type}s`);
//         setData(response.data);
//       } catch (error) {
//         console.error(`Error fetching ${param.type} data:`, error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [param.type]);

//   const downloadInfo = async () => {
//     const element = document.getElementById('info-table');
//     const canvas = await html2canvas(element);
//     const data = canvas.toDataURL('image/png');
//     const link = document.createElement('a');

//     if (typeof link.download === 'string') {
//       link.href = data;
//       link.download = `${param.type}_information.png`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } else {
//       window.open(data);
//     }
//   };

//   const renderTable = () => {
//     if (param.type === 'patient') {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Gender</th>
//               <th>Date of Birth</th>
//               <th>Blood Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((patient) => (
//               <tr key={patient.id}>
//                 <td>{patient.username}</td>
//                 <td>{patient.email}</td>
//                 <td>{patient.gender}</td>
//                 <td>{new Date(patient.dob).toLocaleDateString()}</td>
//                 <td>{patient.blood_type}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     } else if (param.type === 'doctor') {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Specialty</th>
//               <th>Is Approved</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((doctor) => (
//               <tr key={doctor.staff_id}>
//                 <td>{doctor.staff_name}</td>
//                 <td>{doctor.email}</td>
//                 <td>{doctor.specialty}</td>
//                 <td>{doctor.is_approved ? 'Yes' : 'No'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     }
//   };

//   return (
//     <motion.div
//       className="ExpandedCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//     >
//       <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
//         <UilTimes onClick={setExpanded} />
//       </div>
//       <span>{param.title}</span>
//       <div className="info-table" id="info-table">
//         {loading ? (
//           <p>Loading {param.type} information...</p>
//         ) : (
//           <>
//             <h3>{param.title} Information</h3>
//             {renderTable()}
//           </>
//         )}
//       </div>
//       <button onClick={downloadInfo}>Download {param.title} Information</button>
//     </motion.div>
//   );
// }

// export default Card;






// // Card.js
// import React, { useState, useEffect } from "react";
// import "./Card.css";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { motion } from "framer-motion";
// import { UilTimes } from "@iconscout/react-unicons";
// import axios from 'axios';
// import html2canvas from 'html2canvas';

// const Card = (props) => {
//   const [expanded, setExpanded] = useState(false);
//   return expanded ? (
//     <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
//   ) : (
//     <CompactCard param={props} setExpanded={() => setExpanded(true)} />
//   );
// };

// function CompactCard({ param, setExpanded }) {
//   const Png = param.png;
//   return (
//     <motion.div
//       className="CompactCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       onClick={setExpanded}
//     >
//       <div className="radialBar">
//         <CircularProgressbar
//           value={param.barValue}
//           text={`${param.barValue}`}
//         />
//         <span>{param.title}</span>
//       </div>
//       <div className="detail">
//         <Png />
//         <span>{param.value}</span>
//         <span>Registered {param.title}</span>
//       </div>
//     </motion.div>
//   );
// }

// function ExpandedCard({ param, setExpanded }) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response;
//         if (param.type === 'patient') {
//           response = await axios.get('http://localhost:5000/api/Allpatients');
//         } else if (param.type === 'doctor') {
//           response = await axios.get('http://localhost:5000/api/admin/staff');
//         }
//         setData(response.data);
//       } catch (error) {
//         console.error(`Error fetching ${param.type} data:`, error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [param.type]);

//   const downloadInfo = async () => {
//     const element = document.getElementById('info-table');
//     const canvas = await html2canvas(element);
//     const data = canvas.toDataURL('image/png');
//     const link = document.createElement('a');

//     if (typeof link.download === 'string') {
//       link.href = data;
//       link.download = `${param.type}_information.png`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } else {
//       window.open(data);
//     }
//   };

//   const renderTable = () => {
//     if (param.type === 'patient') {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Gender</th>
//               <th>Date of Birth</th>
//               <th>Blood Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((patient) => (
//               <tr key={patient.id}>
//                 <td>{patient.username}</td>
//                 <td>{patient.email}</td>
//                 <td>{patient.gender}</td>
//                 <td>{new Date(patient.dob).toLocaleDateString()}</td>
//                 <td>{patient.blood_type}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     } else if (param.type === 'doctor') {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Specialty</th>
//               <th>Is Approved</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((doctor) => (
//               <tr key={doctor.staff_id}>
//                 <td>{doctor.staff_name}</td>
//                 <td>{doctor.email}</td>
//                 <td>{doctor.specialty}</td>
//                 <td>{doctor.is_approved ? 'Yes' : 'No'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     }
//   };

//   return (
//     <motion.div
//       className="ExpandedCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//     >
//       <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
//         <UilTimes onClick={setExpanded} />
//       </div>
//       <span>{param.title}</span>
//       <div className="info-table" id="info-table">
//         {loading ? (
//           <p>Loading {param.type} information...</p>
//         ) : (
//           <>
//             <h3>{param.title} Information</h3>
//             {renderTable()}
//           </>
//         )}
//       </div>
//       <button onClick={downloadInfo}>Download {param.title} Information</button>
//     </motion.div>
//   );
// }

// export default Card;







// // Card.js
// import React, { useState, useEffect } from "react";
// import "./Card.css";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { motion } from "framer-motion";
// import { UilTimes } from "@iconscout/react-unicons";
// import axios from 'axios';
// import html2canvas from 'html2canvas';

// const Card = (props) => {
//   const [expanded, setExpanded] = useState(false);
//   return expanded ? (
//     <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
//   ) : (
//     <CompactCard param={props} setExpanded={() => setExpanded(true)} />
//   );
// };

// function CompactCard({ param, setExpanded }) {
//   const Png = param.png;
//   return (
//     <motion.div
//       className="CompactCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       onClick={setExpanded}
//     >
//       <div className="radialBar">
//         <CircularProgressbar
//           value={param.barValue}
//           text={`${param.barValue}`}
//         />
//         <span>{param.title}</span>
//       </div>
//       <div className="detail">
//         <Png />
//         <span>{param.value}</span>
//         <span>{param.type === 'appointment' ? 'Total' : 'Registered'} {param.title}</span>
//       </div>
//     </motion.div>
//   );
// }

// function ExpandedCard({ param, setExpanded }) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response;
//         if (param.type === 'patient') {
//           response = await axios.get('http://localhost:5000/api/Allpatients');
//         } else if (param.type === 'doctor') {
//           response = await axios.get('http://localhost:5000/api/admin/staff');
//         } else if (param.type === 'appointment') {
//           response = await axios.get('http://localhost:5000/api/AdminPatientAppointments');
//         }
//         setData(response.data);
//       } catch (error) {
//         console.error(`Error fetching ${param.type} data:`, error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [param.type]);

//   const downloadInfo = async () => {
//     const element = document.getElementById('info-table');
//     const canvas = await html2canvas(element);
//     const data = canvas.toDataURL('image/png');
//     const link = document.createElement('a');

//     if (typeof link.download === 'string') {
//       link.href = data;
//       link.download = `${param.type}_information.png`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } else {
//       window.open(data);
//     }
//   };

//   const renderTable = () => {
//     if (param.type === 'patient') {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Gender</th>
//               <th>Date of Birth</th>
//               <th>Blood Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((patient) => (
//               <tr key={patient.id}>
//                 <td>{patient.username}</td>
//                 <td>{patient.email}</td>
//                 <td>{patient.gender}</td>
//                 <td>{new Date(patient.dob).toLocaleDateString()}</td>
//                 <td>{patient.blood_type}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     } else if (param.type === 'doctor') {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Specialty</th>
//               <th>Is Approved</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((doctor) => (
//               <tr key={doctor.staff_id}>
//                 <td>{doctor.staff_name}</td>
//                 <td>{doctor.email}</td>
//                 <td>{doctor.specialty}</td>
//                 <td>{doctor.is_approved ? 'Yes' : 'No'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     } else if (param.type === 'appointment') {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Appointment ID</th>
//               <th>Patient Name</th>
//               <th>Doctor Name</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((appointment) => (
//               <tr key={appointment.appointment_id}>
//                 <td>{appointment.appointment_id}</td>
//                 <td>{appointment.patient_name}</td>
//                 <td>{appointment.doctor_name}</td>
//                 <td>{appointment.available_start_date}</td>
//                 <td>{appointment.available_start_time}</td>
//                 <td>{appointment.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     }
//   };

//   return (
//     <motion.div
//       className="ExpandedCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//     >
//       <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
//         <UilTimes onClick={setExpanded} />
//       </div>
//       <span>{param.title}</span>
//       <div className="info-table" id="info-table">
//         {loading ? (
//           <p>Loading {param.type} information...</p>
//         ) : (
//           <>
//             <h3>{param.title} Information</h3>
//             {renderTable()}
//           </>
//         )}
//       </div>
//       <button onClick={downloadInfo}>Download {param.title} Information</button>
//     </motion.div>
//   );
// }

// export default Card;





// import React, { useState, useEffect } from "react";
// import "./Card.css";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { motion } from "framer-motion";
// import { UilTimes } from "@iconscout/react-unicons";
// import axios from 'axios';
// import html2canvas from 'html2canvas';

// const Card = (props) => {
//   const [expanded, setExpanded] = useState(false);
//   return expanded ? (
//     <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
//   ) : (
//     <CompactCard param={props} setExpanded={() => setExpanded(true)} />
//   );
// };

// function CompactCard({ param, setExpanded }) {
//   const Png = param.png;
//   return (
//     <motion.div
//       className="CompactCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       onClick={setExpanded}
//     >
//       <div className="radialBar">
//         <CircularProgressbar
//           value={param.barValue}
//           text={`${param.barValue}`}
//         />
//         <span>{param.title}</span>
//       </div>
//       <div className="detail">
//         <Png />
//         <span>{param.value}</span>
//         <span>{param.type === 'appointment' || param.type === 'schedule' ? 'Total' : 'Registered'} {param.title}</span>
//       </div>
//     </motion.div>
//   );
// }

// function ExpandedCard({ param, setExpanded }) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response;
//         if (param.type === 'patient') {
//           response = await axios.get('http://localhost:5000/api/Allpatients');
//         } else if (param.type === 'doctor') {
//           response = await axios.get('http://localhost:5000/api/admin/staff');
//         } else if (param.type === 'appointment') {
//           response = await axios.get('http://localhost:5000/api/AdminPatientAppointments');
//         } else if (param.type === 'schedule') {
//           response = await axios.get('http://localhost:5000/api/schedules');
//         }
//         setData(response.data);
//       } catch (error) {
//         console.error(`Error fetching ${param.type} data:`, error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [param.type]);

//   const downloadInfo = async () => {
//     const element = document.getElementById('info-table');
//     const canvas = await html2canvas(element);
//     const data = canvas.toDataURL('image/png');
//     const link = document.createElement('a');

//     if (typeof link.download === 'string') {
//       link.href = data;
//       link.download = `${param.type}_information.png`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } else {
//       window.open(data);
//     }
//   };

//   const renderTable = () => {
//     if (param.type === 'patient') {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Gender</th>
//               <th>Date of Birth</th>
//               <th>Blood Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((patient) => (
//               <tr key={patient.id}>
//                 <td>{patient.username}</td>
//                 <td>{patient.email}</td>
//                 <td>{patient.gender}</td>
//                 <td>{new Date(patient.dob).toLocaleDateString()}</td>
//                 <td>{patient.blood_type}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     } else if (param.type === 'doctor') {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Specialty</th>
//               <th>Is Approved</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((doctor) => (
//               <tr key={doctor.staff_id}>
//                 <td>{doctor.staff_name}</td>
//                 <td>{doctor.email}</td>
//                 <td>{doctor.specialty}</td>
//                 <td>{doctor.is_approved ? 'Yes' : 'No'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     } else if (param.type === 'appointment') {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Appointment ID</th>
//               <th>Patient Name</th>
//               <th>Doctor Name</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((appointment) => (
//               <tr key={appointment.appointment_id}>
//                 <td>{appointment.appointment_id}</td>
//                 <td>{appointment.patient_name}</td>
//                 <td>{appointment.doctor_name}</td>
//                 <td>{appointment.available_start_date}</td>
//                 <td>{appointment.available_start_time}</td>
//                 <td>{appointment.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     } else if (param.type === 'schedule') {
//       return (
//         <table>
//           <thead>
//             <tr>
//               <th>Doctor Name</th>
//               <th>Specialty</th>
//               <th>Date</th>
//               <th>Start Time</th>
//               <th>End Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((schedule) => (
//               <tr key={schedule.availability_id}>
//                 <td>{schedule.staff_name}</td>
//                 <td>{schedule.specialty}</td>
//                 <td>{new Date(schedule.available_start_date).toLocaleDateString()}</td>
//                 <td>{schedule.available_start_time}</td>
//                 <td>{schedule.available_end_time}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     }
//   };

//   return (
//     <motion.div
//       className="ExpandedCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//     >
//       <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
//         <UilTimes onClick={setExpanded} />
//       </div>
//       <span>{param.title}</span>
//       <div className="info-table" id="info-table">
//         {loading ? (
//           <p>Loading {param.type} information...</p>
//         ) : (
//           <>
//             <h3>{param.title} Information</h3>
//             {renderTable()}
//           </>
//         )}
//       </div>
//       <button onClick={downloadInfo}>Download {param.title} Information</button>
//     </motion.div>
//   );
// }

// export default Card;







import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import axios from 'axios';
import html2canvas from 'html2canvas';

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return expanded ? (
    <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
  ) : (
    <CompactCard param={props} setExpanded={() => setExpanded(true)} />
  );
};

function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-40"
      onClick={setExpanded}
    >
      <div className="flex justify-between items-start">
        <div className="text-white">
          <h3 className="text-xl font-bold mb-1">{param.title}</h3>
          <p className="text-sm opacity-80">{param.type === 'appointment' || param.type === 'schedule' ? 'Total' : 'Registered'}</p>
        </div>
        <div className="w-12 h-12">
          <CircularProgressbar
            value={param.barValue}
            text={`${param.barValue}%`}
            styles={{
              path: { stroke: '#fff' },
              text: { fill: '#fff', fontSize: '24px' },
              trail: { stroke: 'rgba(255,255,255,0.2)' },
            }}
          />
        </div>
      </div>
      <div className="flex justify-between items-end mt-4">
        <Png className="w-8 h-8 text-white" />
        <span className="text-2xl font-bold text-white">{param.value}</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, setExpanded }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (param.type === 'patient') {
          response = await axios.get('http://localhost:5000/api/Allpatients');
        } else if (param.type === 'doctor') {
          response = await axios.get('http://localhost:5000/api/admin/staff');
        } else if (param.type === 'appointment') {
          response = await axios.get('http://localhost:5000/api/AdminPatientAppointments');
        } else if (param.type === 'schedule') {
          response = await axios.get('http://localhost:5000/api/schedules');
        }
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching ${param.type} data:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [param.type]);

  const downloadInfo = async () => {
    const element = document.getElementById('info-table');
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = `${param.type}_information.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const renderTable = () => {
    if (param.type === 'patient') {
      return (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Type</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 whitespace-nowrap">{patient.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(patient.dob).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.blood_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (param.type === 'doctor') {
      return (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Is Approved</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((doctor) => (
              <tr key={doctor.staff_id}>
                <td className="px-6 py-4 whitespace-nowrap">{doctor.staff_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doctor.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doctor.specialty}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doctor.is_approved ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (param.type === 'appointment') {
      return (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointment ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((appointment) => (
              <tr key={appointment.appointment_id}>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.appointment_id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.patient_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.doctor_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.available_start_date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.available_start_time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (param.type === 'schedule') {
      return (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Time</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((schedule) => (
              <tr key={schedule.availability_id}>
                <td className="px-6 py-4 whitespace-nowrap">{schedule.staff_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{schedule.specialty}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(schedule.available_start_date).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{schedule.available_start_time}</td>
                <td className="px-6 py-4 whitespace-nowrap">{schedule.available_end_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white rounded-lg shadow-xl w-4/5 h-4/5 overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
          <h2 className="text-2xl font-bold">{param.title} Information</h2>
          <button onClick={setExpanded} className="text-white hover:text-gray-200">
            <UilTimes size="24" />
          </button>
        </div>
        <div className="flex-grow overflow-auto p-4" id="info-table">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              {renderTable()}
            </div>
          )}
        </div>
        <div className="p-4 bg-gray-100">
          <button
            onClick={downloadInfo}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Download {param.title} Information
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;