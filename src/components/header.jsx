export default function Header(){
    return (
      <header className="w-full bg-indigo-600 shadow-md py-4">
        <div className="container mx-auto flex justify-center items-center">
          <img
            src="logo.png" // Change this path to your logo
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-xl font-semibold text-gray-200">FinanciFY</h1>
        </div>
      </header>
    );
  };
  