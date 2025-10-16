import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, User, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdvertiserSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    representativeName: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/ad-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "광고 신청 완료",
          description: "담당자가 곧 연락드리겠습니다.",
        });
        setFormData({
          companyName: "",
          representativeName: "",
          phone: "",
          email: "",
        });
      } else {
        throw new Error(result.error || "광고 신청에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting ad request:", error);
      toast({
        title: "오류 발생",
        description: "광고 신청 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-accent/20 dark:bg-accent/10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              함께 성장할 광고주를 찾습니다
            </h2>
            <div className="space-y-4 text-muted-foreground mb-6">
              <p className="text-lg">
                반려동물 찾기 GPS가 탑재된 디바이스에 광고를 넣어서 반려동물 찾기 서비스를 시작합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>월 평균 방문자 <strong className="text-foreground">10,000+</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>반려동물에 관심 많은 <strong className="text-foreground">타겟 고객층</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong className="text-foreground">합리적인 광고비</strong>로 효과적인 노출</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong className="text-foreground">GPS 디바이스 광고</strong>를 통한 직접적인 홍보 효과</span>
                </li>
              </ul>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">광고 신청하기</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-sm font-medium flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    기업명
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="회사 이름을 입력하세요"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    data-testid="input-company-name"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="representativeName" className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4" />
                    대표자명
                  </Label>
                  <Input
                    id="representativeName"
                    name="representativeName"
                    type="text"
                    placeholder="대표자 성함을 입력하세요"
                    value={formData.representativeName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    data-testid="input-representative-name"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ad-phone" className="text-sm font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    전화번호
                  </Label>
                  <Input
                    id="ad-phone"
                    name="phone"
                    type="tel"
                    placeholder="010-1234-5678"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    data-testid="input-ad-phone"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ad-email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    이메일
                  </Label>
                  <Input
                    id="ad-email"
                    name="email"
                    type="email"
                    placeholder="company@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    data-testid="input-ad-email"
                    className="h-12"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base" 
                  disabled={isSubmitting}
                  data-testid="button-submit-advertiser"
                >
                  {isSubmitting ? "처리중..." : "광고 신청하기"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
