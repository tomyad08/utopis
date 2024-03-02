import MenuUtama from "../Components/MenuUtama";

const MenuUtamaPage = () => {
  return (
    <div className="bg-white h-screen flex items-center justify-center">
      <div className="h-86 w-3/4 rounded-xl border-2 border-blue-400 p-5">
        <h1 className="font-bold text-2xl text-blue-600">UTOPIS EDUCATION</h1>
        <h1 className="text-xl font-bold">Menu Utama</h1>
        <p className="mb-5">Silahkan klik menu di bawah ini!</p>
        <MenuUtama />
      </div>
    </div>
  );
};
export default MenuUtamaPage;
