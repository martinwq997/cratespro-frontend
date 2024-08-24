'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ObjectData {
  name: string;
  description: string;
  category: string;
}

interface CVE {
  id: string;
  description: string;
  name: string;
  version: string;
}

const ProgramsPage = () => {
  const [objects, setObjects] = useState<ObjectData[]>([]);
  const [cveData, setCveData] = useState<CVE[]>([]);

  useEffect(() => {
    fetch('/api/crates')
      .then(response => response.json())
      .then(data => setObjects(data));

      fetch('/api/cves')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();  // 暂时使用 text() 来调试
      })
      .then(text => {
        console.log('Response text:', text);
        return JSON.parse(text); // 手动解析 JSON
      })
      .then(data => setCveData(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  const categories = [...new Set(objects.map(obj => obj.category))];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-4">
          <h1 className="text-3xl font-bold mb-4">All Rust Programs</h1>
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold my-4">{category}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {objects
                  .filter(obj => obj.category === category)
                  .map((obj) => (
                    <li key={obj.name} className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                      <Link href={`/programs/${obj.name}`} className="text-xl font-bold text-blue-500 hover:text-blue-600">
                        {obj.name}
                      </Link>
                      <p className="mt-2 text-gray-600">{obj.description}</p>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="md:col-span-1">
          <h1 className="text-3xl font-bold mb-4">CVE List</h1>
          <ul className="grid grid-cols-1 gap-4">
            {cveData.map((cve) => (
              <li key={cve.id} className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
                <Link href={`programs/cves/${cve.id}`} className="text-xl font-bold text-blue-500 hover:text-blue-600">
                  {cve.id}
                </Link>
                <p className="mt-2 text-gray-600">{cve.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
