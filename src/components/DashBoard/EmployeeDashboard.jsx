import { FiLogOut, FiCheckCircle, FiClock, FiXCircle, FiPlus } from "react-icons/fi";


const EmployeeDashboard = () => {
  const userName = "Ritesh"; // Dummy name for greeting

  const tasks = [
    { id: 1, title: "Prepare project report", status: "New", date: "24 Oct 2025" },
    { id: 2, title: "Fix UI bugs on dashboard", status: "Accepted", date: "23 Oct 2025" },
    { id: 3, title: "Test employee API endpoints", status: "Completed", date: "22 Oct 2025" },
    { id: 4, title: "Update user documentation", status: "Failed", date: "21 Oct 2025" },
  ];

  // Different background colors for cards
  const cardBgColors = {
    New: "bg-indigo-700",
    Accepted: "bg-yellow-700",
    Completed: "bg-green-700",
    Failed: "bg-red-700",
  };

  const statusColors = {
    New: "text-indigo-300",
    Accepted: "text-yellow-300",
    Completed: "text-green-300",
    Failed: "text-red-300",
  };

  const statusIcons = {
    New: <FiPlus />,
    Accepted: <FiClock />,
    Completed: <FiCheckCircle />,
    Failed: <FiXCircle />,
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6 md:p-10" style={{ fontFamily: "Montserrat, sans-serif" }}>

      {/* Header Greeting + Logout */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold tracking-wide">Hello, {userName}</h1>
        <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg transition font-medium">
          <FiLogOut /> Logout
        </button>
      </div>

      {/* Task Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {["New", "Accepted", "Completed", "Failed"].map((status) => (
          <div
            key={status}
            className={`${cardBgColors[status]} p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center justify-center`}
          >
            <div className="text-3xl mb-3">{statusIcons[status]}</div>
            <h2 className="text-lg font-semibold">{status} Tasks</h2>
            <p className={`text-2xl font-bold mt-2 ${statusColors[status]}`}>
              {tasks.filter((t) => t.status === status).length}
            </p>
          </div>
        ))}
      </div>

      {/* Task List */}
      <div className="bg-zinc-800 p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">All Tasks</h2>
          <p className="text-gray-400 text-sm">{new Date().toLocaleDateString()}</p>
        </div>

        <div className="divide-y divide-zinc-700">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center py-4 hover:bg-zinc-700 rounded-lg px-4 transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`text-xl ${statusColors[task.status]}`}>
                  {statusIcons[task.status]}
                </div>
                <div>
                  <h3 className="font-medium text-lg">{task.title}</h3>
                  <p className="text-sm text-gray-400">{task.status}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{task.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard