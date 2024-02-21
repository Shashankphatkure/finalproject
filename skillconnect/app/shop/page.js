"use client"
import { useState, useEffect } from 'react';
import Link from "next/link";

async function getData() {
  const res = await fetch('https://dxdpmgjttftkiqtlgcng.supabase.co/rest/v1/courses?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4ZHBtZ2p0dGZ0a2lxdGxnY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk5NDQsImV4cCI6MjAxNDg1NTk0NH0.DHTq4WkHgys5v0D9dj4i9Vfc9TCF7VuiGvRGR5RXYIY', { cache: 'no-store' })
  return res.json()
}

export default function Page() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 60 });
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    async function fetchData() {
      const courses = await getData();
      setData(courses);
      setFilteredData(courses);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let result = data;

    if (searchTerm) {
      result = result.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (selectedCategories.length > 0) {
      result = result.filter(item => selectedCategories.includes(item.category));
    }

    result = result.filter(item => item.price >= priceRange.min && item.price <= priceRange.max);

    if (sortOrder === 'priceAsc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'priceDesc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'difficulty') {
      result.sort((a, b) => a.difficulty.localeCompare(b.difficulty));
    }

    setFilteredData(result);
  }, [data, searchTerm, selectedCategories, priceRange, sortOrder]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full md:w-auto mb-4 md:mb-0"
        />
        <div className="flex flex-wrap items-center">
          {['Programming', 'Design', 'Culinary'].map((category) => (
            <div key={category} className="flex items-center mr-4 mb-4">
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="checkbox checkbox-primary"
              />
              <label htmlFor={category} className="ml-2">{category}</label>
            </div>
          ))}
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
            className="range range-primary w-full md:w-auto"
          />
        </div>
        <div>
          <button onClick={() => setSortOrder('priceAsc')} className="btn btn-primary mr-2">Price ↑</button>
          <button onClick={() => setSortOrder('priceDesc')} className="btn btn-primary mr-2">Price ↓</button>
          <button onClick={() => setSortOrder('difficulty')} className="btn btn-primary">Difficulty</button>
        </div>
      </div>
      <main className="py-4 px-4 flex flex-wrap -mx-4">
        {filteredData.map((item) => (
          <div key={item.id} className="md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
              <div>
                <div className="flex space-x-4 mb-3">
                  {item.imageUrl && <img src={item.imageUrl} alt={item.title} className="w-full md:w-48 h-auto object-cover rounded-lg" />}
                </div>
                <div>
                  <Link href={`/course/${item.id}`}><div className="text-lg font-semibold text-indigo-600 hover:text-indigo-800">{item.title}</div></Link>
                  <p className="text-sm text-gray-500">{item.small_description}</p>
                </div>
                <p className="text-indigo-500 font-semibold">{item.price ? `$${item.price}` : 'Free'}</p>
                <p>Duration: {item.duration} hours</p>
                <p>Difficulty: {item.difficulty}</p>
                <p>Category: {item.category}</p>
                <p>Language: {item.language}</p>
              </div>

              {item.what_you_learn && (
                <div>
                  <h4 className="font-semibold mt-4 mb-2">What You'll Learn</h4>
                  <ul className="list-disc list-inside">
                    {item.what_you_learn.map((learn, index) => (
                      <li key={index}>{learn}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.requirements && (
                <div>
                  <h4 className="font-semibold mt-4 mb-2">Requirements</h4>
                  <ul className="list-disc list-inside">
                    {item.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
