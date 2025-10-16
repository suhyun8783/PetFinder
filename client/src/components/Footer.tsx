import { Mail, MapPin, User } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">로케팻</h3>
            <p className="text-sm text-muted-foreground">
              소중한 가족을 찾을 수 있도록<br />
              최선을 다해 도와드립니다.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">사업자 정보</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <User className="w-4 h-4 mt-0.5" />
                <div>
                  <div>사업자명: 로케팻</div>
                  <div>개인정보책임자: 박수현</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>성북구 정릉로 77<br />국민대학교 경영관</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">문의</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>help@locatpet.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2025 로케팻 (LocatPet). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
