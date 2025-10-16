import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, PawPrint, Megaphone } from "lucide-react";

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

interface AdminDashboardProps {
  petReports: PetReport[];
  adRequests: AdRequest[];
  onLogout: () => void;
}

export default function AdminDashboard({ petReports, adRequests, onLogout }: AdminDashboardProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 bg-card/90 backdrop-blur-md border-b z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold">관리자 대시보드</h1>
          <Button variant="outline" onClick={onLogout} data-testid="button-logout">
            <LogOut className="w-4 h-4 mr-2" />
            로그아웃
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-1 space-y-0 pb-2">
              <CardTitle className="text-base font-medium">실종 신고</CardTitle>
              <PawPrint className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-pet-reports-count">
                {petReports.length}건
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                총 접수된 실종 신고
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-1 space-y-0 pb-2">
              <CardTitle className="text-base font-medium">광고 신청</CardTitle>
              <Megaphone className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="text-ad-requests-count">
                {adRequests.length}건
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                총 접수된 광고 신청
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pets" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="pets" data-testid="tab-pet-reports">
              실종 신고 ({petReports.length})
            </TabsTrigger>
            <TabsTrigger value="ads" data-testid="tab-ad-requests">
              광고 신청 ({adRequests.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pets" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>실종 반려동물 신고 목록</CardTitle>
                <CardDescription>
                  접수된 모든 실종 신고를 확인할 수 있습니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">실종일</th>
                        <th className="text-left p-3 font-medium">지역</th>
                        <th className="text-left p-3 font-medium">이름</th>
                        <th className="text-left p-3 font-medium">종</th>
                        <th className="text-left p-3 font-medium">연락처</th>
                        <th className="text-left p-3 font-medium">신고일시</th>
                      </tr>
                    </thead>
                    <tbody>
                      {petReports.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center p-8 text-muted-foreground">
                            접수된 신고가 없습니다
                          </td>
                        </tr>
                      ) : (
                        petReports.map((report) => (
                          <tr key={report.id} className="border-b hover-elevate" data-testid={`row-pet-report-${report.id}`}>
                            <td className="p-3">{report.missingDate}</td>
                            <td className="p-3">{report.missingLocation}</td>
                            <td className="p-3 font-medium">{report.petName}</td>
                            <td className="p-3">
                              <Badge variant="secondary">{report.petType}</Badge>
                            </td>
                            <td className="p-3 text-sm">
                              <div>{report.phone}</div>
                              <div className="text-muted-foreground">{report.email}</div>
                            </td>
                            <td className="p-3 text-sm text-muted-foreground">
                              {report.submittedAt}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ads" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>광고 신청 목록</CardTitle>
                <CardDescription>
                  접수된 모든 광고 신청을 확인할 수 있습니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">기업명</th>
                        <th className="text-left p-3 font-medium">대표자</th>
                        <th className="text-left p-3 font-medium">연락처</th>
                        <th className="text-left p-3 font-medium">신청일시</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adRequests.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="text-center p-8 text-muted-foreground">
                            접수된 광고 신청이 없습니다
                          </td>
                        </tr>
                      ) : (
                        adRequests.map((request) => (
                          <tr key={request.id} className="border-b hover-elevate" data-testid={`row-ad-request-${request.id}`}>
                            <td className="p-3 font-medium">{request.companyName}</td>
                            <td className="p-3">{request.representativeName}</td>
                            <td className="p-3 text-sm">
                              <div>{request.phone}</div>
                              <div className="text-muted-foreground">{request.email}</div>
                            </td>
                            <td className="p-3 text-sm text-muted-foreground">
                              {request.submittedAt}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
