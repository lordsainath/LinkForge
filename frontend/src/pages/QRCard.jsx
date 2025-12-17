import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

import QrCardLayout from "../components/qr/QrCardLayout";

const QRCard = () => {
  const navigate = useNavigate();
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(links);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const res = await api.get("/url/me");
      setLinks(res.data.data || []);
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
    <>
      <div>
        <div>
          {/* Header */}
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold text-2xl">QR Codes</h1>
              <p className="text-zinc-500">Manage Your Generated QR codes</p>
            </div>
            <div>
              <button
                className="text-white px-5 py-1.5  rounded-md font-semibold bg-linear-to-r from-blue-500 to-teal-400
               hover:from-blue-600 hover:to-teal-500 cursor-pointer
               transition"
                onClick={() => navigate("/dashboard")}
              >
                Create QR Code
              </button>
            </div>
          </div>

          {/* search bar */}
          <div></div>

          {/* qr cards */}
          <div className="flex gap-4 flex-wrap items-center justify-center mt-5">
            {links.length > 0 ? (
              links.map((url) => <QrCardLayout key={url._id} url={url} />)
            ) : (
              <p>No QR codes found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QRCard;
