import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const HandleSubmit = () => {
    if (password === "mila_cantik") {
      navigate("/menu");
    }
  };
  return (
    <div>
      <form>
        <input
          className="p-3 w-full bg-blue-200 rounded-lg mb-5 outline-none"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="p-2 w-full bg-red-600 rounded-lg font-semibold text-white"
          onClick={HandleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default FormLogin;
