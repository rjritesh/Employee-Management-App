import { FiUserPlus, FiCalendar, FiFileText, FiTag, FiSend } from "react-icons/fi";
import Header from "../Header";

const AdminDashboard = () => {
  return (
    <div
      className="min-h-screen bg-zinc-900 text-white p-6 md:p-10"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <Header title="Create Task" />

      {/* Form Grid */}
      <div className="bg-zinc-800 p-8 rounded-xl shadow-lg max-w-5xl mx-auto mt-6">
        <form className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
            {/* Task Title */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2 flex items-center gap-2">
                <FiFileText /> Task Title
              </label>
              <input
                type="text"
                placeholder="Enter task title"
                className="w-full p-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2 flex items-center gap-2">
                <FiCalendar /> Date
              </label>
              <input
                type="date"
                className="w-full p-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* Assign To */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2 flex items-center gap-2">
                <FiUserPlus /> Assign To
              </label>
              <input
                type="text"
                placeholder="Employee name"
                className="w-full p-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col">
              <label className="text-gray-300 mb-2 flex items-center gap-2">
                <FiTag /> Category
              </label>
              <input
                type="text"
                placeholder="Task category"
                className="w-full p-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
            {/* Description */}
            <div className="flex flex-col h-full">
              <label className="text-gray-300 mb-2 flex items-center gap-2">
                <FiFileText /> Description
              </label>
              <textarea
                placeholder="Enter task description"
                className="w-full h-full p-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition flex-1"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-auto">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded-lg font-medium transition"
              >
                <FiSend /> Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
