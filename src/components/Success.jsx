import { useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="success">
      <h2>Warranty Activated Successfully ✅</h2>
      <p>Warranty ID: {data?.warrantyId}</p>
      <p>Expiry Date: {data?.expiryDate}</p>
    </div>
  );
}

export default Success;
