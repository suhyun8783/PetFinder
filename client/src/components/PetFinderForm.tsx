import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Phone, Mail } from "lucide-react";

export default function PetFinderForm() {
  const [formData, setFormData] = useState({
    missingDate: "",
    missingLocation: "",
    petName: "",
    petType: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pet finder form submitted:", formData);
    alert("신고가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    setFormData({
      missingDate: "",
      missingLocation: "",
      petName: "",
      petType: "",
      email: "",
      phone: "",
    });
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
                data-testid="input-phone"
                className="h-12"
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-12 text-base" data-testid="button-submit-pet-finder">
            신고 접수하기
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
