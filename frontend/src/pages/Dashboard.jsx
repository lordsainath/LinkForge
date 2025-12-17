import { useEffect, useState } from "react";
import api from "../services/api";
import CreateUrlModal from "../components/url/CreateUrlModal";
import UrlDisplay from "../components/url/urlDisplay";


const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const fetchUserData = async () => {
    try {
      const res = await api.get("/url/me");
      setUserData(res.data.data || []);
    } catch (error) {
      console.error("Failed to fetch urls", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Links</h1>
      <button
        onClick={() => setOpen(() => !open)}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Create Link
      </button>

      {open && (
        <CreateUrlModal
          onClose={() => setOpen(false)}
          onSuccess={fetchUserData}
        />
      )}

      {loading ? (
        <p>Loading...</p>
      ) : userData.length === 0 ? (
        <p>No links found.</p>
      ) : (
        <ul className="space-y-2">
          {userData.map((url) => (
           <UrlDisplay key={url._id} url={url}/>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
