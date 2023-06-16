import React from 'react';

export default function Notices() {
  const object = [
    { id:1,title: "results", link:"https://google.com" },
    { id:2,title: "results", link:"https://google.com" },
    { id:3,title: "results", link:"https://google.com" },
    { id:44,title: "results", link:"https://google.com"}
  ];

  return (
    <div className="container bg-blue-200 w-full flex items-center justify-center">
    <div>
      <table className="border-collapse border">
        <thead>
          <tr>
            <th className="border border-black p-2">id</th>
            <th className="border border-black p-2">Notices</th>
            <th className="border border-black  p-2">Link</th>
          </tr>
        </thead>
        <tbody>
          {object.map((item, index) => (
            <tr key={index}>
              <td className="border border-black  p-2">{item.id}</td>
              <td className="border border-black  p-2">{item.title}</td>
              <td className="border border-black  p-2">{item.link}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
