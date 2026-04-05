import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function WarrantyForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    productType: "",
    serialNumber: "",
    purchaseDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post("/warranty/register", form);
    navigate("/success", { state: response.data });
  };

  return (
    <div className="form-container">
      <h2>Register Warranty</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          name="mobile"
          placeholder="Mobile"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="productType"
          placeholder="Product Type"
          onChange={handleChange}
          required
        />
        <input
          name="serialNumber"
          placeholder="Serial Number"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="purchaseDate"
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">
          Activate Warranty
        </button>
      </form>
    </div>
  );
}

export default WarrantyForm;
