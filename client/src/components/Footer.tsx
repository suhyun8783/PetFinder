import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">반려동물 찾기</h3>
            <p className="text-sm text-muted-foreground">
              소중한 가족을 찾을 수 있도록<br />
              최선을 다해 도와드립니다.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">연락처</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>help@petfinder.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>02-1234-5678</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">운영 시간</h3>
            <p className="text-sm text-muted-foreground">
              평일: 오전 9시 - 오후 6시<br />
              주말 및 공휴일: 휴무
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2025 반려동물 찾기. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
