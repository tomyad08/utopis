import FormLogin from "../Components/formLogin";

const LoginPage = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div>
        <h1 className="font-bold text-2xl text-blue-600">UTOPIS EDUCATION</h1>
        <p className="text-sm mb-5">Silahkan input password!</p>
        <FormLogin />
      </div>
    </div>
  );
};
export default LoginPage;
