import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";
import { useToast } from "@/hooks/use-toast";

interface PetReport {
  id: number;
  missingDate: string;
  missingLocation: string;
  petName: string;
  petType: string;
  email: string;
  phone: string;
  submittedAt: string;
}

interface AdRequest {
  id: number;
  companyName: string;
  representativeName: string;
  phone: string;
  email: string;
  submittedAt: string;
}

export default function Admin() {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data: petReportsData, refetch: refetchPetReports } = useQuery<{ success: boolean; data: PetReport[] }>({
    queryKey: ['/api/pet-reports'],
    enabled: isLoggedIn,
  });

  const { data: adRequestsData, refetch: refetchAdRequests } = useQuery<{ success: boolean; data: AdRequest[] }>({
    queryKey: ['/api/ad-requests'],
    enabled: isLoggedIn,
  });

  useEffect(() => {
    if (isLoggedIn) {
      const interval = setInterval(() => {
        refetchPetReports();
        refetchAdRequests();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isLoggedIn, refetchPetReports, refetchAdRequests]);

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (result.success) {
        setIsLoggedIn(true);
        toast({
          title: "로그인 성공",
          description: "관리자 페이지에 접속했습니다.",
        });
      } else {
        toast({
          title: "로그인 실패",
          description: "아이디 또는 비밀번호가 올바르지 않습니다.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "오류 발생",
        description: "로그인 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "로그아웃",
      description: "로그아웃되었습니다.",
    });
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  const petReports = petReportsData?.data || [];
  const adRequests = adRequestsData?.data || [];

  const formattedPetReports = petReports.map(report => ({
    ...report,
    submittedAt: new Date(report.submittedAt).toLocaleString('ko-KR'),
  }));

  const formattedAdRequests = adRequests.map(request => ({
    ...request,
    submittedAt: new Date(request.submittedAt).toLocaleString('ko-KR'),
  }));

  return (
    <AdminDashboard
      petReports={formattedPetReports}
      adRequests={formattedAdRequests}
      onLogout={handleLogout}
    />
  );
}
