import React from "react";
import Link from "next/link";
const Dashboard = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-medium">Your Blogs</h2>
        <Link href="/dashboard/create">Create New Blog</Link>
      </div>
    </div>
  );
};

export default Dashboard;
