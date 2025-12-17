import { useEffect, useState } from "react";
import api from "../services/api";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await api.get("/url/me");
        setUserData(res.data.data || []);
      } catch (error) {
        console.error("Failed to fetch urls");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Links</h1>

      {loading ? (
        <p>Loading...</p>
      ) : userData.length === 0 ? (
        <p>No links found.</p>
      ) : (
        <ul className="space-y-2">
          {userData.map((url) => (
            <li key={url._id}>
              <p>Original URL: {url.originalUrl}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
