import React, { useEffect, useState } from 'react';

export default function Search(props) {
  const [showBool, setShowBool] = useState(false);
  const [data, setData] = useState([]); // API'den gelen filmleri tutacak state

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://selcukelbas.azurewebsites.net/api/Movie"); // API'den veri çek
        const json = await response.json();
        setData(json); // Gelen veriyi state'e kaydet
      } catch (e) {
        console.error("Hata oluştu", e);
      }
    }

    fetchData(); // Sayfa yüklendiğinde çalıştır
  }, []); // Boş bağımlılık dizisi sayesinde sadece ilk yüklemede çalışır

  return (
    <>
      <div className="search">
        <div>
          <img src="./search.svg" alt="Search Banner" />
          <input
            type="text"
            placeholder="İstediğiniz filmi arayın"
            className="text-white"
            onChange={(e) => props.setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => setShowBool(!showBool)} // Butona tıklanınca listeyi aç/kapat
          className="px-4 py-1 text-sm bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition w-auto min-w-[80px] text-center"
        >
          {showBool ? "Gizle" : "Tüm Filmleri Göster"}
        </button>
      </div>

      {/* Eğer showBool true ise filmleri listele */}
      {showBool && (
        <section className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((film) => (
            <div key={film.id} className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
              <img 
                src={film.url || film.image || "https://via.placeholder.com/150"} 
                alt={film.name} 
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-lg font-bold mt-2">{film.name}</h2>
              <p className="text-sm text-gray-400">Rating: {film.rating || "N/A"}</p>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
