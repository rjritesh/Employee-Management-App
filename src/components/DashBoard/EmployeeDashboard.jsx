import React from 'react'

const EmployeeDashboard = () => {
  // Dummy data
  const tasks = [
    {
      id: 1,
      title: "Prepare project report",
      status: "New",
      date: "24 Oct 2025",
    },
    {
      id: 2,
      title: "Fix UI bugs on dashboard",
      status: "Accepted",
      date: "23 Oct 2025",
    },
    {
      id: 3,
      title: "Test employee API endpoints",
      status: "Completed",
      date: "22 Oct 2025",
    },
    {
      id: 4,
      title: "Update user documentation",
      status: "Failed",
      date: "21 Oct 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      {/* Top Navbar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Employee Panel</h1>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition">
          Logout
        </button>
      </div>

      {/* Task Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-zinc-800 p-5 rounded-xl text-center shadow">
          <h2 className="text-lg font-medium">New Tasks</h2>
          <p className="text-2xl font-bold text-indigo-400 mt-2">12</p>
        </div>
        <div className="bg-zinc-800 p-5 rounded-xl text-center shadow">
          <h2 className="text-lg font-medium">Accepted</h2>
          <p className="text-2xl font-bold text-yellow-400 mt-2">8</p>
        </div>
        <div className="bg-zinc-800 p-5 rounded-xl text-center shadow">
          <h2 className="text-lg font-medium">Completed</h2>
          <p className="text-2xl font-bold text-green-400 mt-2">15</p>
        </div>
        <div className="bg-zinc-800 p-5 rounded-xl text-center shadow">
          <h2 className="text-lg font-medium">Failed</h2>
          <p className="text-2xl font-bold text-red-400 mt-2">2</p>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-zinc-800 p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">All Tasks</h2>
          <p className="text-gray-400 text-sm">24 Oct 2025</p>
        </div>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center bg-zinc-700 p-4 rounded-lg"
            >
              <div>
                <h3 className="font-medium">{task.title}</h3>
                <p className="text-sm text-gray-400">{task.status}</p>
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