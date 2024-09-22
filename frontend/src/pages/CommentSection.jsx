// import React, { useState } from 'react';

// const Comment = ({ comment, addReply }) => {
//   const [showReplyForm, setShowReplyForm] = useState(false);
//   const [replyText, setReplyText] = useState('');

//   const handleSubmitReply = (e) => {
//     e.preventDefault();
//     addReply(replyText, comment.comment_id);
//     setReplyText('');
//     setShowReplyForm(false);
//   };

//   return (
//     <div className="border-l-2 border-gray-200 pl-4 mb-4">
//       <p className="font-semibold">{comment.patient_name}</p>
//       <p>{comment.comment_text}</p>
//       <button
//         onClick={() => setShowReplyForm(!showReplyForm)}
//         className="text-blue-500 hover:text-blue-700"
//       >
//         Reply
//       </button>
//       {showReplyForm && (
//         <form onSubmit={handleSubmitReply} className="mt-2">
//           <textarea
//             value={replyText}
//             onChange={(e) => setReplyText(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             rows="2"
//           />
//           <button
//             type="submit"
//             className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Submit Reply
//           </button>
//         </form>
//       )}
//       {comment.replies && comment.replies.map((reply) => (
//         <Comment key={reply.comment_id} comment={reply} addReply={addReply} />
//       ))}
//     </div>
//   );
// };

// const CommentSection = ({ comments, addComment }) => {
//   const [commentText, setCommentText] = useState('');

//   const handleSubmitComment = (e) => {
//     e.preventDefault();
//     addComment(commentText);
//     setCommentText('');
//   };

//   const renderComments = (commentsArray) => {
//     const topLevelComments = commentsArray.filter(
//       (comment) => !comment.parent_comment_id
//     );

//     const commentMap = commentsArray.reduce((acc, comment) => {
//       acc[comment.comment_id] = comment;
//       return acc;
//     }, {});

//     topLevelComments.forEach((comment) => {
//       comment.replies = commentsArray.filter(
//         (reply) => reply.parent_comment_id === comment.comment_id
//       );
//     });

//     return topLevelComments.map((comment) => (
//       <Comment
//         key={comment.comment_id}
//         comment={comment}
//         addReply={addComment}
//       />
//     ));
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-bold mb-4">Comments</h2>
//       <form onSubmit={handleSubmitComment} className="mb-4">
//         <textarea
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//           rows="3"
//           placeholder="Write your comment here..."
//         />
//         <button
//           type="submit"
//           className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Submit Comment
//         </button>
//       </form>
//       <div>{renderComments(comments)}</div>
//     </div>
//   );
// };

// export default CommentSection;





////////////////////////////////////////////////////////////work /////////////////



// import React, { useState } from 'react';

// const Comment = ({ comment, addReply }) => {
//   const [showReplyForm, setShowReplyForm] = useState(false);
//   const [replyText, setReplyText] = useState('');

//   const handleSubmitReply = (e) => {
//     e.preventDefault();
//     addReply(replyText, comment.comment_id);
//     setReplyText('');
//     setShowReplyForm(false);
//   };

//   return (
//     <div className="border-l-2 border-gray-200 pl-4 mb-4">
//       <p className="font-semibold">{comment.username}</p>
//       <p>{comment.comment_text}</p>
//       <button
//         onClick={() => setShowReplyForm(!showReplyForm)}
//         className="text-blue-500 hover:text-blue-700"
//       >
//         Reply
//       </button>
//       {showReplyForm && (
//         <form onSubmit={handleSubmitReply} className="mt-2">
//           <textarea
//             value={replyText}
//             onChange={(e) => setReplyText(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             rows="2"
//           />
//           <button
//             type="submit"
//             className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Submit Reply
//           </button>
//         </form>
//       )}
//       {comment.replies && comment.replies.map((reply) => (
//         <Comment key={reply.comment_id} comment={reply} addReply={addReply} />
//       ))}
//     </div>
//   );
// };

// const CommentSection = ({ comments, addComment }) => {
//   const [commentText, setCommentText] = useState('');

//   const handleSubmitComment = (e) => {
//     e.preventDefault();
//     addComment(commentText);
//     setCommentText('');
//   };

//   const renderComments = (commentsArray) => {
//     const topLevelComments = commentsArray.filter(
//       (comment) => !comment.parent_comment_id
//     );

//     const commentMap = commentsArray.reduce((acc, comment) => {
//       acc[comment.comment_id] = comment;
//       return acc;
//     }, {});

//     topLevelComments.forEach((comment) => {
//       comment.replies = commentsArray.filter(
//         (reply) => reply.parent_comment_id === comment.comment_id
//       );
//     });

//     return topLevelComments.map((comment) => (
//       <Comment
//         key={comment.comment_id}
//         comment={comment}
//         addReply={addComment}
//       />
//     ));
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-bold mb-4">Comments</h2>
//       <form onSubmit={handleSubmitComment} className="mb-4">
//         <textarea
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//           rows="3"
//           placeholder="Write your comment here..."
//         />
//         <button
//           type="submit"
//           className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Submit Comment
//         </button>
//       </form>
//       <div>{renderComments(comments)}</div>
//     </div>
//   );
// };

// export default CommentSection;












// import React, { useState } from 'react';
// import axios from 'axios';
// import  { useEffect } from "react";

// const Comment = ({ comment, addReply, updateComment, deleteComment, currentUserId }) => {
//   const [showReplyForm, setShowReplyForm] = useState(false);
//   const [replyText, setReplyText] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editText, setEditText] = useState(comment.comment_text);
//   const [patientData, setPatientData] = useState('');

//   const handleSubmitReply = (e) => {
//     e.preventDefault();
//     addReply(replyText, comment.comment_id);
//     setReplyText('');
//     setShowReplyForm(false);
//   };

//   const handleSubmitEdit = (e) => {
//     e.preventDefault();
//     updateComment(comment.comment_id, editText);
//     setIsEditing(false);
//   };

//   const handleDelete = () => {
//     deleteComment(comment.comment_id);
//   };

//   useEffect(() => {
//     const fetchPatientProfile = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/patients/profile",
//           {
//             withCredentials: true,
//           }
//         );
//         setPatientData(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch patient profile");
//         setLoading(false);
//       }
//     };

//     fetchPatientProfile();
//   }, []);

//   return (
//     <div className="border-l-2 border-gray-200 pl-4 mb-4">
//       <div className="flex items-center mb-2">
//         <img
//               src={
//                 `http://localhost:5000/${patientData.profile_image}` ||
//                 "/default-avatar.png"
//               }
//               alt="Profile"
//               className="w-8 h-8 rounded-full"
//             />
//         <p className="font-semibold">{comment.username}</p>
//       </div>
//       {isEditing ? (
//         <form onSubmit={handleSubmitEdit}>
//           <textarea
//             value={editText}
//             onChange={(e) => setEditText(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             rows="2"
//           />
//           <button
//             type="submit"
//             className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Save Edit
//           </button>
//           <button
//             onClick={() => setIsEditing(false)}
//             className="mt-2 ml-2 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
//           >
//             Cancel
//           </button>
//         </form>
//       ) : (
//         <p>{comment.comment_text}</p>
//       )}
//       <div className="mt-2">
//         <button
//           onClick={() => setShowReplyForm(!showReplyForm)}
//           className="text-blue-500 hover:text-blue-700 mr-2"
//         >
//           Reply
//         </button>
//         {currentUserId === comment.patient_id && (
//           <>
//             <button
//               onClick={() => setIsEditing(true)}
//               className="text-green-500 hover:text-green-700 mr-2"
//             >
//               Edit
//             </button>
//             <button
//               onClick={handleDelete}
//               className="text-red-500 hover:text-red-700"
//             >
//               Delete
//             </button>
//           </>
//         )}
//       </div>
//       {showReplyForm && (
//         <form onSubmit={handleSubmitReply} className="mt-2">
//           <textarea
//             value={replyText}
//             onChange={(e) => setReplyText(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//             rows="2"
//           />
//           <button
//             type="submit"
//             className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Submit Reply
//           </button>
//         </form>
//       )}
//       {comment.replies && comment.replies.map((reply) => (
//         <Comment
//           key={reply.comment_id}
//           comment={reply}
//           addReply={addReply}
//           updateComment={updateComment}
//           deleteComment={deleteComment}
//           currentUserId={currentUserId}
//         />
//       ))}
//     </div>
//   );
// };

// const CommentSection = ({ comments, addComment, updateComment, deleteComment, currentUserId }) => {
//   const [commentText, setCommentText] = useState('');

//   const handleSubmitComment = (e) => {
//     e.preventDefault();
//     addComment(commentText);
//     setCommentText('');
//   };

//   const renderComments = (commentsArray) => {
//     const topLevelComments = commentsArray.filter(
//       (comment) => !comment.parent_comment_id
//     );
//     const commentMap = commentsArray.reduce((acc, comment) => {
//       acc[comment.comment_id] = comment;
//       return acc;
//     }, {});
//     topLevelComments.forEach((comment) => {
//       comment.replies = commentsArray.filter(
//         (reply) => reply.parent_comment_id === comment.comment_id
//       );
//     });
//     return topLevelComments.map((comment) => (
//       <Comment
//         key={comment.comment_id}
//         comment={comment}
//         addReply={addComment}
//         updateComment={updateComment}
//         deleteComment={deleteComment}
//         currentUserId={currentUserId}
//       />
//     ));
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-bold mb-4">Comments</h2>
//       <form onSubmit={handleSubmitComment} className="mb-4">
//         <textarea
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//           rows="3"
//           placeholder="Write your comment here..."
//         />
//         <button
//           type="submit"
//           className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Submit Comment
//         </button>
//       </form>
//       <div>{renderComments(comments)}</div>
//     </div>
//   );
// };

// export default CommentSection;








////////////////////////////work ////////////////////


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Comment = ({ comment, addReply, updateComment, deleteComment, currentUserId }) => {
//   const [showReplyForm, setShowReplyForm] = useState(false);
//   const [replyText, setReplyText] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editText, setEditText] = useState(comment.comment_text);
//   const [patientData, setPatientData] = useState('');
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleSubmitReply = (e) => {
//     e.preventDefault();
//     addReply(replyText, comment.comment_id);
//     setReplyText('');
//     setShowReplyForm(false);
//   };

//   const handleSubmitEdit = (e) => {
//     e.preventDefault();
//     updateComment(comment.comment_id, editText);
//     setIsEditing(false);
//   };

//   const handleDelete = () => {
//     deleteComment(comment.comment_id);
//   };

//   useEffect(() => {
//     const fetchPatientProfile = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/patients/profile",
//           {
//             withCredentials: true,
//           }
//         );
//         setPatientData(response.data);
//       } catch (err) {
//         console.error("Failed to fetch patient profile", err);
//       }
//     };

//     fetchPatientProfile();
//   }, []);

//   return (
//     <div className="border-l-2 border-blue-300 pl-4 mb-4 transition-all duration-300 ease-in-out">
//       <div className="flex items-center mb-2">
//         <img
//           src={`http://localhost:5000/${patientData.profile_image}` || "/default-avatar.png"}
//           alt="Profile"
//           className="w-10 h-10 rounded-full border-2 border-blue-500 transition-transform duration-300 hover:scale-110"
//         />
//         <p className="font-semibold ml-2 text-blue-600">{comment.username}</p>
//       </div>
//       {isEditing ? (
//         <form onSubmit={handleSubmitEdit} className="mt-2">
//           <textarea
//             value={editText}
//             onChange={(e) => setEditText(e.target.value)}
//             className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//             rows="2"
//           />
//           <div className="flex mt-2">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
//             >
//               Save Edit
//             </button>
//             <button
//               onClick={() => setIsEditing(false)}
//               className="ml-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors duration-300"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <p className="text-gray-700">{comment.comment_text}</p>
//       )}
//       <div className="mt-2 flex items-center">
//         <button
//           onClick={() => setShowReplyForm(!showReplyForm)}
//           className="text-blue-500 hover:text-blue-700 transition-colors duration-300 mr-2"
//         >
//           Reply
//         </button>
//         {currentUserId === comment.patient_id && (
//           <>
//             <button
//               onClick={() => setIsEditing(true)}
//               className="text-green-500 hover:text-green-700 transition-colors duration-300 mr-2"
//             >
//               Edit
//             </button>
//             <button
//               onClick={handleDelete}
//               className="text-red-500 hover:text-red-700 transition-colors duration-300"
//             >
//               Delete
//             </button>
//           </>
//         )}
//       </div>
//       {showReplyForm && (
//         <form onSubmit={handleSubmitReply} className="mt-2">
//           <textarea
//             value={replyText}
//             onChange={(e) => setReplyText(e.target.value)}
//             className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//             rows="2"
//           />
//           <button
//             type="submit"
//             className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
//           >
//             Submit Reply
//           </button>
//         </form>
//       )}
//       {comment.replies && comment.replies.length > 0 && (
//         <div className="mt-2">
//           <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
//           >
//             {isExpanded ? 'Hide Replies' : `Show ${comment.replies.length} Replies`}
//           </button>
//           {isExpanded && (
//             <div className="mt-2 pl-4 border-l-2 border-blue-200">
//               {comment.replies.map((reply) => (
//                 <Comment
//                   key={reply.comment_id}
//                   comment={reply}
//                   addReply={addReply}
//                   updateComment={updateComment}
//                   deleteComment={deleteComment}
//                   currentUserId={currentUserId}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// const CommentSection = ({ comments, addComment, updateComment, deleteComment, currentUserId }) => {
//   const [commentText, setCommentText] = useState('');

//   const handleSubmitComment = (e) => {
//     e.preventDefault();
//     addComment(commentText);
//     setCommentText('');
//   };

//   const renderComments = (commentsArray) => {
//     const topLevelComments = commentsArray.filter(
//       (comment) => !comment.parent_comment_id
//     );
//     const commentMap = commentsArray.reduce((acc, comment) => {
//       acc[comment.comment_id] = comment;
//       return acc;
//     }, {});
//     topLevelComments.forEach((comment) => {
//       comment.replies = commentsArray.filter(
//         (reply) => reply.parent_comment_id === comment.comment_id
//       );
//     });
//     return topLevelComments.map((comment) => (
//       <Comment
//         key={comment.comment_id}
//         comment={comment}
//         addReply={addComment}
//         updateComment={updateComment}
//         deleteComment={deleteComment}
//         currentUserId={currentUserId}
//       />
//     ));
//   };

//   return (
//     <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
//       <h2 className="text-2xl font-bold mb-4 text-blue-600">Comments</h2>
//       <form onSubmit={handleSubmitComment} className="mb-6">
//         <textarea
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//           className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//           rows="3"
//           placeholder="Write your comment here..."
//         />
//         <button
//           type="submit"
//           className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
//         >
//           Submit Comment
//         </button>
//       </form>
//       <div className="space-y-4">{renderComments(comments)}</div>
//     </div>
//   );
// };

// export default CommentSection;





////////////////////////////////////work with image//////////////



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Comment = ({ comment, addReply, updateComment, deleteComment, currentUserId }) => {
//   const [showReplyForm, setShowReplyForm] = useState(false);
//   const [replyText, setReplyText] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editText, setEditText] = useState(comment.comment_text);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleSubmitReply = (e) => {
//     e.preventDefault();
//     addReply(replyText, comment.comment_id);
//     setReplyText('');
//     setShowReplyForm(false);
//   };

//   const handleSubmitEdit = (e) => {
//     e.preventDefault();
//     updateComment(comment.comment_id, editText);
//     setIsEditing(false);
//   };

//   const handleDelete = () => {
//     deleteComment(comment.comment_id);
//   };

//   return (
//     <div className="border-l-2 border-blue-300 pl-4 mb-4 transition-all duration-300 ease-in-out">
//       <div className="flex items-center mb-2">
//         <img
//           src={`http://localhost:5000/${comment.profile_image}` || "/default-avatar.png"}
//           alt="Profile"
//           className="w-10 h-10 rounded-full border-2 border-blue-500 transition-transform duration-300 hover:scale-110"
//         />
//         <p className="font-semibold ml-2 text-blue-600">{comment.username}</p>
//       </div>
//       {isEditing ? (
//         <form onSubmit={handleSubmitEdit} className="mt-2">
//           <textarea
//             value={editText}
//             onChange={(e) => setEditText(e.target.value)}
//             className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//             rows="2"
//           />
//           <div className="flex mt-2">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
//             >
//               Save Edit
//             </button>
//             <button
//               onClick={() => setIsEditing(false)}
//               className="ml-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors duration-300"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <p className="text-gray-700">{comment.comment_text}</p>
//       )}
//       <div className="mt-2 flex items-center">
//         <button
//           onClick={() => setShowReplyForm(!showReplyForm)}
//           className="text-blue-500 hover:text-blue-700 transition-colors duration-300 mr-2"
//         >
//           Reply
//         </button>
//         {currentUserId === comment.patient_id && (
//           <>
//             <button
//               onClick={() => setIsEditing(true)}
//               className="text-green-500 hover:text-green-700 transition-colors duration-300 mr-2"
//             >
//               Edit
//             </button>
//             <button
//               onClick={handleDelete}
//               className="text-red-500 hover:text-red-700 transition-colors duration-300"
//             >
//               Delete
//             </button>
//           </>
//         )}
//       </div>
//       {showReplyForm && (
//         <form onSubmit={handleSubmitReply} className="mt-2">
//           <textarea
//             value={replyText}
//             onChange={(e) => setReplyText(e.target.value)}
//             className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//             rows="2"
//           />
//           <button
//             type="submit"
//             className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
//           >
//             Submit Reply
//           </button>
//         </form>
//       )}
//       {comment.replies && comment.replies.length > 0 && (
//         <div className="mt-2">
//           <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
//           >
//             {isExpanded ? 'Hide Replies' : `Show ${comment.replies.length} Replies`}
//           </button>
//           {isExpanded && (
//             <div className="mt-2 pl-4 border-l-2 border-blue-200">
//               {comment.replies.map((reply) => (
//                 <Comment
//                   key={reply.comment_id}
//                   comment={reply}
//                   addReply={addReply}
//                   updateComment={updateComment}
//                   deleteComment={deleteComment}
//                   currentUserId={currentUserId}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// const CommentSection = ({ comments, addComment, updateComment, deleteComment, currentUserId }) => {
//   const [commentText, setCommentText] = useState('');

//   const handleSubmitComment = (e) => {
//     e.preventDefault();
//     addComment(commentText);
//     setCommentText('');
//   };

//   const renderComments = (commentsArray) => {
//     const topLevelComments = commentsArray.filter(
//       (comment) => !comment.parent_comment_id
//     );
//     const commentMap = commentsArray.reduce((acc, comment) => {
//       acc[comment.comment_id] = comment;
//       return acc;
//     }, {});
//     topLevelComments.forEach((comment) => {
//       comment.replies = commentsArray.filter(
//         (reply) => reply.parent_comment_id === comment.comment_id
//       );
//     });
//     return topLevelComments.map((comment) => (
//       <Comment
//         key={comment.comment_id}
//         comment={comment}
//         addReply={addComment}
//         updateComment={updateComment}
//         deleteComment={deleteComment}
//         currentUserId={currentUserId}
//       />
//     ));
//   };

//   return (
//     <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
//       <h2 className="text-2xl font-bold mb-4 text-blue-600">Comments</h2>
//       <form onSubmit={handleSubmitComment} className="mb-6">
//         <textarea
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//           className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
//           rows="3"
//           placeholder="Write your comment here..."
//         />
//         <button
//           type="submit"
//           className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
//         >
//           Submit Comment
//         </button>
//       </form>
//       <div className="space-y-4">{renderComments(comments)}</div>
//     </div>
//   );
// };

// export default CommentSection;









import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comment = ({ comment, addReply, updateComment, deleteComment, currentUserId }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.comment_text);

  const handleSubmitReply = (e) => {
    e.preventDefault();
    addReply(replyText, comment.comment_id);
    setReplyText('');
    setShowReplyForm(false);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    updateComment(comment.comment_id, editText);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteComment(comment.comment_id);
  };

  return (
    <div className="border-l-2 border-blue-300 pl-4 mb-4 transition-all duration-300 ease-in-out">
      <div className="flex items-center mb-2">
        <img
          src={`http://localhost:5000/${comment.profile_image}` || "/default-avatar.png"}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-blue-500 transition-transform duration-300 hover:scale-110"
        />
        <p className="font-semibold ml-2 text-blue-600">{comment.username}</p>
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmitEdit} className="mt-2">
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            rows="2"
          />
          <div className="flex mt-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Save Edit
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="ml-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <p className="text-gray-700">{comment.comment_text}</p>
      )}
      <div className="mt-2 flex items-center">
        {!comment.parent_comment_id && (
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300 mr-2"
          >
            Reply
          </button>
        )}
        {currentUserId === comment.patient_id && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="text-green-500 hover:text-green-700 transition-colors duration-300 mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="text-red-500 hover:text-red-700 transition-colors duration-300"
            >
              Delete
            </button>
          </>
        )}
      </div>
      {showReplyForm && (
        <form onSubmit={handleSubmitReply} className="mt-2">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className="w-full p-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            rows="2"
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Submit Reply
          </button>
        </form>
      )}
    </div>
  );
};

const CommentSection = ({ comments, addComment, updateComment, deleteComment, currentUserId }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    addComment(commentText);
    setCommentText('');
  };

  const renderComments = (commentsArray) => {
    const topLevelComments = commentsArray.filter(
      (comment) => !comment.parent_comment_id
    );
    return topLevelComments.map((comment) => (
      <div key={comment.comment_id}>
        <Comment
          comment={comment}
          addReply={addComment}
          updateComment={updateComment}
          deleteComment={deleteComment}
          currentUserId={currentUserId}
        />
        <div className="ml-8">
          {commentsArray
            .filter((reply) => reply.parent_comment_id === comment.comment_id)
            .map((reply) => (
              <Comment
                key={reply.comment_id}
                comment={reply}
                addReply={addComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                currentUserId={currentUserId}
              />
            ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Comments</h2>
      <form onSubmit={handleSubmitComment} className="mb-6">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          rows="3"
          placeholder="Write your comment here..."
        />
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Submit Comment
        </button>
      </form>
      <div className="space-y-4">{renderComments(comments)}</div>
    </div>
  );
};

export default CommentSection;