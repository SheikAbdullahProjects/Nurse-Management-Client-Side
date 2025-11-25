import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import SearchBar from "./components/SearchBar";
import DataContent from "./components/DataContent";
import AddContent from "./components/AddContent";

export default function NurseManagement() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    license_number: "",
    dob: "",
    age: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      if (!form.name || !form.license_number || !form.dob || !form.age) {
        toast.error("Please fill all fields");
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/api/nurses",
        form
      );
      toast.success("Nurse Added Successfully");
      console.log("Nurse Added:", response.data);
      setForm({
        name: "",
        license_number: "",
        dob: "",
        age: "",
      });
      fetchData();
    } catch (error) {
      console.error("Error adding nurse:", error);
      toast.error("Error adding nurse");
    }
  };

  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/nurses/${id}`
      );
      toast.success("Nurse Removed Successfully");
      console.log("Nurse Removed:", response.data);
      fetchData();
    } catch (error) {
      console.error("Error removing nurse:", error);
      toast.error("Error removing nurse");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("http://localhost:3000/api/nurses");
      if (response.data.success) {
        setData(response.data.data);
      } else {
        setError("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (iso) => {
    return iso.split("T")[0];
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Nurse Management</h1>
        <p className="text-gray-600 mt-1">
          CRUD Operations Using Node.js With MySQL
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-5xl mx-auto">
        <SearchBar search={search} setSearch={setSearch} />
        <DataContent
          data={data}
          search={search}
          formatDate={formatDate}
          handleRemove={handleRemove}
        />

        <AddContent
          form={form}
          handleChange={handleChange}
          handleAdd={handleAdd}
        />
      </div>
    </div>
  );
}
