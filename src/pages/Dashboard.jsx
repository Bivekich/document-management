import { useNavigate, useLocation } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const fullName = location.state?.fullName;

  const sections = [
    { name: 'Продать', icon: '💼', path: '/sell' },
    { name: 'Купить', icon: '🛒', path: '/buy' },
    { name: 'Профиль', icon: '👤', path: '/profile' },
    { name: 'Файлы', icon: '📁', path: '/files' },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Добро пожаловать, {fullName}!
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {sections.map((section) => (
          <div
            key={section.name}
            className="bg-gray-100 p-6 rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-200 transition"
            onClick={() => navigate(section.path)}
          >
            <div className="text-5xl">{section.icon}</div>
            <div className="text-xl mt-4">{section.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
