import React from "react";

function Analytics({ registrations }) {
  const papersWithAbstracts = registrations.filter(reg => reg.abstractBlob).length;
  const recentSubmissions = registrations.filter(reg => {
    const regDate = new Date(reg.createdAt);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return regDate > weekAgo;
  }).length;

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Registration Analytics</h2>
        <p className="text-gray-600">Insights into conference registrations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-blue-200 p-6 text-center">
          <p className="text-3xl font-bold text-blue-600">{registrations.length}</p>
          <p className="text-sm text-gray-600 font-medium">Total Registrations</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-blue-200 p-6 text-center">
          <p className="text-3xl font-bold text-blue-600">{papersWithAbstracts}</p>
          <p className="text-sm text-gray-600 font-medium">Papers with Abstracts</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-blue-200 p-6 text-center">
          <p className="text-3xl font-bold text-blue-600">{recentSubmissions}</p>
          <p className="text-sm text-gray-600 font-medium">Recent Submissions (Last 7 Days)</p>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-sm border border-blue-200 p-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">Additional Insights</h3>
        <p className="text-gray-600">
          Average authors per paper: {registrations.length > 0 ? (registrations.reduce((acc, reg) => acc + (Array.isArray(reg.authors) ? reg.authors.length : 0), 0) / registrations.length).toFixed(2) : 0}
        </p>
      </div>
    </div>
  );
}

export default Analytics;