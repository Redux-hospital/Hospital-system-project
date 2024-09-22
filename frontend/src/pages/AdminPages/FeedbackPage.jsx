



import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Reply } from 'lucide-react';
import Sidebar from '../AdminPages/sidebar';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2'; // Import SweetAlert2

const ITEMS_PER_PAGE = 5;

// Modal Component
const Modal = ({ isOpen, onClose, onSend, contact }) => {
  const [response, setResponse] = useState('');

  const handleSend = useCallback(() => {
    onSend(contact.contact_id, response);
    setResponse('');
    onClose();
  }, [contact.contact_id, response, onSend, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h3 className="text-2xl font-semibold mb-4">Reply to {contact.name}</h3>
        <p className="mb-4">Email: {contact.email}</p>
        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows="5"
          placeholder="Write your response here..."
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const FeedbackPage = () => {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalContacts, setTotalContacts] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [alert, setAlert] = useState(null);

  const fetchContacts = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/contacts?page=${currentPage}&limit=${ITEMS_PER_PAGE}`
      );
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setAlert({ type: 'error', message: 'Failed to fetch contacts' });
    }
  }, [currentPage]);

  const fetchTotalContacts = useCallback(async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/contacts/messages/count'
      );
      setTotalContacts(response.data.count);
    } catch (error) {
      console.error('Error fetching total contacts:', error);
      setAlert({ type: 'error', message: 'Failed to fetch total contacts' });
    }
  }, []);

  useEffect(() => {
    fetchContacts();
    fetchTotalContacts();
  }, [fetchContacts, fetchTotalContacts]);

  const totalPages = useMemo(
    () => Math.ceil(totalContacts / ITEMS_PER_PAGE),
    [totalContacts]
  );

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  const handleReply = useCallback((contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  }, []);

  const handleSendReply = useCallback(
    async (contactId, response) => {
      try {
        await axios.put('http://localhost:5000/api/contacts/respond', {
          contactId,
          response,
        });
        setIsModalOpen(false);
        fetchContacts();
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Response sent successfully!',
        });
      } catch (error) {
        console.error('Error sending reply:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to send response.',
        });
      }
    },
    [fetchContacts]
  );

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        {/* Added margin to offset Sidebar's width */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">
              Customer Support
            </h3>
            {alert && (
              <div
                className={`p-4 mb-4 rounded-md ${
                  alert.type === 'error'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                <p className="font-bold">
                  {alert.type === 'error' ? 'Error' : 'Success'}
                </p>
                <p>{alert.message}</p>
              </div>
            )}
            <div className="mt-8">
              <div className="flex flex-col mt-6">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                  <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Message
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {contacts.map((contact) => (
                          <tr key={contact.contact_id}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="text-sm leading-5 font-medium text-gray-900">
                                {contact.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="text-sm leading-5 text-gray-900">
                                {contact.email}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="text-sm leading-5 text-gray-900">
                                {contact.message}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium">
                              <button
                                onClick={() => handleReply(contact)}
                                className="text-indigo-600 hover:text-indigo-900 flex items-center"
                              >
                                <Reply size={18} className="mr-2" />
                                Reply
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md hover:bg-gray-100 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Modal for Reply */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSend={handleSendReply}
              contact={selectedContact}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackPage;
