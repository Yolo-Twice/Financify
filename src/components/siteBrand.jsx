
const SiteBrand = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 w-6 text-lg',
    md: 'h-8 w-8 text-xl',
    lg: 'h-10 w-10 text-2xl',
  };

  return (
    <div className="flex items-center ml-8 space-x-2 pr-12">
      <img src="/logo.png" alt="Logo" className={`${sizeClasses[size].split(' ')[0]} ${sizeClasses[size].split(' ')[1]}`} />
      <span className={`font-semibold text-gray-800 ${sizeClasses[size].split(' ')[2]}`}>FinanciFY</span>
    </div>
  );
};

export default SiteBrand;
