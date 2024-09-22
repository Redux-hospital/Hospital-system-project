// // // SchedulesPage.js
// // import React from 'react';
// // import Sidebar from '../AdminPages/sidebar';

// // const SchedulesPage = () => (
// //  <>
// //  <Sidebar/>
// //  <div>schedusaldddddddddddddddddddddddffffffffffffffffffffffffffff</div>
// //  </>
// // );

// // export default SchedulesPage;




// // SchedulesPage.js
// import React, { useState, useEffect } from 'react';
// import Sidebar from '../AdminPages/sidebar';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import axios from 'axios';

// const SchedulesPage = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchSchedules();
//   }, []);

//   const fetchSchedules = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/schedules');
//       const formattedEvents = response.data.map(schedule => ({
//         title: `${schedule.staff_name} (${schedule.specialty})`,
//         start: `${schedule.available_start_date}T${schedule.available_start_time}`,
//         end: `${schedule.available_end_date || schedule.available_start_date}T${schedule.available_end_time}`,
//         extendedProps: {
//           staffId: schedule.staff_id,
//           isBooked: schedule.is_booked
//         }
//       }));
//       setEvents(formattedEvents);
//     } catch (error) {
//       console.error('Error fetching schedules:', error);
//     }
//   };

//   const handleDateClick = (arg) => {
//     // You can implement functionality for when a date is clicked
//     console.log(arg.dateStr);
//   };

//   return (
//     <>
//       <Sidebar />
//       <div style={{ marginLeft: '250px', padding: '20px' }}>
//         <h1>Doctor Schedules</h1>
//         <FullCalendar
//           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           headerToolbar={{
//             left: 'prev,next today',
//             center: 'title',
//             right: 'dayGridMonth,timeGridWeek,timeGridDay'
//           }}
//           events={events}
//           dateClick={handleDateClick}
//           eventClick={(info) => {
//             alert(`Doctor: ${info.event.title}\nBooked: ${info.event.extendedProps.isBooked ? 'Yes' : 'No'}`);
//           }}
//         />
//       </div>
//     </>
//   );
// };

// export default SchedulesPage;

















// import React, { useState, useEffect } from 'react';
// import Sidebar from '../AdminPages/sidebar';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import axios from 'axios';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText } from '@mui/material';

// const SchedulesPage = () => {
//   const [events, setEvents] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [dayEvents, setDayEvents] = useState([]);

//   useEffect(() => {
//     fetchSchedules();
//   }, []);

//   const fetchSchedules = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/schedules');
//       const formattedEvents = response.data.map(schedule => ({
//         title: `${schedule.staff_name} (${schedule.specialty})`,
//         start: `${schedule.available_start_date}T${schedule.available_start_time}`,
//         end: `${schedule.available_end_date || schedule.available_start_date}T${schedule.available_end_time}`,
//         extendedProps: {
//           staffId: schedule.staff_id,
//           isBooked: schedule.is_booked,
//           staffName: schedule.staff_name,
//           specialty: schedule.specialty,
//           startTime: schedule.available_start_time,
//           endTime: schedule.available_end_time
//         }
//       }));
//       setEvents(formattedEvents);
//     } catch (error) {
//       console.error('Error fetching schedules:', error);
//     }
//   };

//   const handleDateClick = (arg) => {
//     const clickedDate = arg.date;
//     const eventsOnDay = events.filter(event => 
//       new Date(event.start).toDateString() === clickedDate.toDateString()
//     );
//     setSelectedDate(clickedDate);
//     setDayEvents(eventsOnDay);
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <>
//       <Sidebar />
//       <div style={{ marginLeft: '250px', padding: '20px' }}>
//         <h1>Doctor Schedules</h1>
//         <FullCalendar
//           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           headerToolbar={{
//             left: 'prev,next today',
//             center: 'title',
//             right: 'dayGridMonth,timeGridWeek,timeGridDay'
//           }}
//           events={events}
//           dateClick={handleDateClick}
//         />
//         <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
//           <DialogTitle>
//             Schedules for {selectedDate && selectedDate.toDateString()}
//           </DialogTitle>
//           <DialogContent>
//             <List>
//               {dayEvents.map((event, index) => (
//                 <ListItem key={index}>
//                   <ListItemText
//                     primary={`${event.extendedProps.staffName} (${event.extendedProps.specialty})`}
//                     secondary={`${event.extendedProps.startTime} - ${event.extendedProps.endTime} | ${event.extendedProps.isBooked ? 'Booked' : 'Available'}`}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDialog} color="primary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </>
//   );
// };

// export default SchedulesPage;






// import React, { useState, useEffect } from 'react';
// import Sidebar from '../AdminPages/sidebar';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import axios from 'axios';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText } from '@mui/material';

// const SchedulesPage = () => {
//   const [events, setEvents] = useState([]);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [dayEvents, setDayEvents] = useState([]);

//   useEffect(() => {
//     fetchSchedules();
//   }, []);

//   const fetchSchedules = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/schedules');
//       const formattedEvents = response.data.map(schedule => ({
//         title: `${schedule.staff_name} (${schedule.specialty})`,
//         start: `${schedule.available_start_date}T${schedule.available_start_time}`,
//         end: `${schedule.available_end_date || schedule.available_start_date}T${schedule.available_end_time}`,
//         extendedProps: {
//           staffId: schedule.staff_id,
//           isBooked: schedule.is_booked,
//           staffName: schedule.staff_name,
//           specialty: schedule.specialty,
//           startTime: schedule.available_start_time,
//           endTime: schedule.available_end_time
//         }
//       }));
//       setEvents(formattedEvents);
//     } catch (error) {
//       console.error('Error fetching schedules:', error);
//     }
//   };

//   const handleDateClick = async (arg) => {
//     const clickedDate = arg.date;
//     const formattedDate = clickedDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    
//     try {
//       const response = await axios.get(`http://localhost:5000/api/schedules/date/${formattedDate}`);
//       const eventsOnDay = response.data.map(schedule => ({
//         staffName: schedule.staff_name,
//         specialty: schedule.specialty,
//         startTime: schedule.available_start_time,
//         endTime: schedule.available_end_time,
//         isBooked: schedule.is_booked
//       }));
      
//       setSelectedDate(clickedDate);
//       setDayEvents(eventsOnDay);
//       setOpenDialog(true);
//     } catch (error) {
//       console.error('Error fetching schedules for the selected date:', error);
//     }
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <>
//       <Sidebar />
//       <div style={{ marginLeft: '250px', padding: '20px' }}>
//         <h1>Doctor Schedules</h1>
//         <FullCalendar
//           plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//           initialView="dayGridMonth"
//           headerToolbar={{
//             left: 'prev,next today',
//             center: 'title',
//             right: 'dayGridMonth,timeGridWeek,timeGridDay'
//           }}
//           events={events}
//           dateClick={handleDateClick}
//         />
//         <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
//           <DialogTitle>
//             Schedules for {selectedDate && selectedDate.toDateString()}
//           </DialogTitle>
//           <DialogContent>
//             <List>
//               {dayEvents.map((event, index) => (
//                 <ListItem key={index}>
//                   <ListItemText
//                     primary={`${event.staffName} (${event.specialty})`}
//                     secondary={`${event.startTime} - ${event.endTime} | ${event.isBooked ? 'Booked' : 'Available'}`}
//                   />
//                 </ListItem>
//               ))}
//             </List>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDialog} color="primary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </>
//   );
// };

// export default SchedulesPage;


///////////////////////////////////////////////////////////work with correct date ////////////////////

import React, { useState, useEffect } from 'react';
import Sidebar from '../AdminPages/sidebar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText } from '@mui/material';
import moment from 'moment-timezone';

const SchedulesPage = () => {
  const [events, setEvents] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/schedules');
      const formattedEvents = response.data.map(schedule => {
        const startDate = moment.utc(`${schedule.available_start_date}T${schedule.available_start_time}`).local();
        const endDate = moment.utc(`${schedule.available_end_date || schedule.available_start_date}T${schedule.available_end_time}`).local();
        
        return {
          title: `${schedule.staff_name} (${schedule.specialty})`,
          start: startDate.toDate(),
          end: endDate.toDate(),
          extendedProps: {
            staffId: schedule.staff_id,
            isBooked: schedule.is_booked,
            staffName: schedule.staff_name,
            specialty: schedule.specialty,
            startTime: startDate.format('HH:mm'),
            endTime: endDate.format('HH:mm')
          }
        };
      });
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Error fetching schedules:', error);
    }
  };

  const handleDateClick = async (arg) => {
    const clickedDate = moment(arg.date).format('YYYY-MM-DD');
    
    try {
      const response = await axios.get(`http://localhost:5000/api/schedules/date/${clickedDate}`);
      const eventsOnDay = response.data.map(schedule => {
        const startDate = moment.utc(`${schedule.available_start_date}T${schedule.available_start_time}`).local();
        const endDate = moment.utc(`${schedule.available_end_date || schedule.available_start_date}T${schedule.available_end_time}`).local();
        
        return {
          staffName: schedule.staff_name,
          specialty: schedule.specialty,
        startTime: schedule.available_start_time,
          endTime: schedule.available_end_time,
          isBooked: schedule.is_booked
        };
      });
      
      setSelectedDate(arg.date);
      setDayEvents(eventsOnDay);
      setOpenDialog(true);
    } catch (error) {
      console.error('Error fetching schedules for the selected date:', error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <h1>Doctor Schedules</h1>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={events}
          dateClick={handleDateClick}
          eventContent={(eventInfo) => (
            <>
              <b>{eventInfo.timeText}</b>
              <i>{eventInfo.event.title}</i>
            </>
          )}
        />
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
          <DialogTitle>
            Schedules for {selectedDate && moment(selectedDate).format('MMMM D, YYYY')}
          </DialogTitle>
          <DialogContent>
            <List>
              {dayEvents.map((event, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${event.staffName} (${event.specialty})`}
                    secondary={`${event.startTime} - ${event.endTime} | ${event.isBooked ? 'Booked' : 'Available'}`}
                  />
                </ListItem>
              ))}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default SchedulesPage;