import AdminDashboard from '../AdminDashboard';

export default function AdminDashboardExample() {
  //todo: remove mock functionality
  const mockPetReports = [
    {
      id: 1,
      missingDate: "2025-10-14",
      missingLocation: "서울시 강남구 역삼동",
      petName: "복실이",
      petType: "말티즈",
      email: "owner@example.com",
      phone: "010-1234-5678",
      submittedAt: "2025-10-15 14:30",
    },
    {
      id: 2,
      missingDate: "2025-10-13",
      missingLocation: "서울시 송파구 잠실동",
      petName: "초코",
      petType: "푸들",
      email: "cho@example.com",
      phone: "010-9876-5432",
      submittedAt: "2025-10-15 10:15",
    },
  ];

  //todo: remove mock functionality
  const mockAdRequests = [
    {
      id: 1,
      companyName: "펫케어 주식회사",
      representativeName: "김철수",
      phone: "02-1234-5678",
      email: "contact@petcare.com",
      submittedAt: "2025-10-15 09:20",
    },
  ];

  const handleLogout = () => {
    console.log('Logout clicked');
    alert('로그아웃되었습니다');
  };

  return (
    <AdminDashboard 
      petReports={mockPetReports}
      adRequests={mockAdRequests}
      onLogout={handleLogout}
    />
  );
}
