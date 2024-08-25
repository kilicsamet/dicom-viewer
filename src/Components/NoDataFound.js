import React from 'react';

const NoDataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center p-4">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Veri Bulunamadı</h2>
        <p className="text-gray-400 mb-4">Üzgünüz, aradığınız veriler şu anda mevcut değil.</p>
      </div>
    </div>
  );
};

export default NoDataFound;
