import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function PetFinderForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    missingDate: "",
    missingLocation: "",
    petName: "",
    petType: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/pet-reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "신고 접수 완료",
          description: "빠른 시일 내에 연락드리겠습니다.",
        });
        setFormData({
          missingDate: "",
          missingLocation: "",
          petName: "",
          petType: "",
          email: "",
          phone: "",
        });
      } else {
        throw new Error(result.error || "신고 접수에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error submitting pet report:", error);
      toast({
        title: "오류 발생",
        description: "신고 접수 중 오류가 발생했습니다. 다시 시도해주세요.",
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
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">실종 신고 접수</CardTitle>
        <CardDescription className="text-base">
          소중한 가족을 찾을 수 있도록 도와드릴게요
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="missingDate" className="text-sm font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                실종 날짜
              </Label>
              <Input
                id="missingDate"
                name="missingDate"
                type="date"
                value={formData.missingDate}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                data-testid="input-missing-date"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="missingLocation" className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                실종 지역
              </Label>
              <Input
                id="missingLocation"
                name="missingLocation"
                type="text"
                placeholder="예: 서울시 강남구 역삼동"
                value={formData.missingLocation}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                data-testid="input-missing-location"
                className="h-12"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="petName" className="text-sm font-medium">
                반려동물 이름
              </Label>
              <Input
                id="petName"
                name="petName"
                type="text"
                placeholder="예: 복실이"
                value={formData.petName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                data-testid="input-pet-name"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="petType" className="text-sm font-medium">
                반려동물 종
              </Label>
              <Input
                id="petType"
                name="petType"
                type="text"
                placeholder="예: 말티즈"
                value={formData.petType}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                data-testid="input-pet-type"
                className="h-12"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="w-4 h-4" />
                이메일
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                data-testid="input-email"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" />
                전화번호
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="010-1234-5678"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                data-testid="input-phone"
                className="h-12"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-base" 
            disabled={isSubmitting}
            data-testid="button-submit-pet-finder"
          >
            {isSubmitting ? "처리중..." : "신고 접수하기"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
