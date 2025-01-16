// //ex) 여러 위치를 지도에 표시하는 경우
// import { useState } from 'react';
// import Map from './Map'; // Map 컴포넌트 import

// const App = (): JSX.Element => {
//   const [locations, setLocations] = useState([
//     {
//       name: '서울',
//       coordinates: { lat: 37.5665, lng: 126.978 },
//     },
//     {
//       name: '부산',
//       coordinates: { lat: 35.1796, lng: 129.0756 },
//     },
//     {
//       name: '대전',
//       coordinates: { lat: 36.3504, lng: 127.3845 },
//     },
//   ]);

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-5">위치 표시 지도</h1>
//       <Map locations={locations} />
//       <div className="mt-5">
//         <h2 className="text-xl">위치 목록</h2>
//         <ul className="list-disc pl-5">
//           {locations.map((location, index) => (
//             <li key={index} className="text-gray-700">
//               {location.name} ({location.coordinates.lat},{' '}
//               {location.coordinates.lng})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;
