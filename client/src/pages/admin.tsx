import { useState } from "react";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //todo: remove mock functionality - replace with real data from backend
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

  //todo: remove mock functionality - replace with real data from backend
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

  const handleLogin = (username: string, password: string) => {
    //todo: remove mock functionality - implement real authentication
    if (username === "admin" && password === "123456") {
      setIsLoggedIn(true);
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <AdminDashboard
      petReports={mockPetReports}
      adRequests={mockAdRequests}
      onLogout={handleLogout}
    />
  );
}
