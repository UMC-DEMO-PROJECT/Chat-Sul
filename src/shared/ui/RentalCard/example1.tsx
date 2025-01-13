//ex) 부동산 렌탈 목록을 표시하는 애플리케이션
import RentalCard from './RentalCard';

const App = (): JSX.Element => {
  const rentalItems = [
    {
      title: '서울 강남 아파트',
      description: '편리한 교통과 상업지구 근처에 위치한 아파트입니다.',
      image: 'https://via.placeholder.com/150',
      location: '서울 강남구',
    },
    {
      title: '부산 해운대 빌라',
      description: '바다가 보이는 멋진 빌라입니다. 자연과 함께하는 삶.',
      image: 'https://via.placeholder.com/150',
      location: '부산 해운대구',
    },
    {
      title: '대전 유성 오피스텔',
      description: '조용하고 깔끔한 오피스텔, 유성 온천과 가까운 위치.',
      image: 'https://via.placeholder.com/150',
      location: '대전 유성구',
    },
  ];

  return (
    <div className="p-5 space-y-4">
      <h1 className="text-2xl font-bold mb-4">렌탈 목록</h1>
      <div className="space-y-4">
        {rentalItems.map((item, index) => (
          <RentalCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
