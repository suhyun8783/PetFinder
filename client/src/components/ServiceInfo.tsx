import { Heart, Clock, Users } from "lucide-react";

export default function ServiceInfo() {
  const features = [
    {
      icon: Heart,
      title: "마음을 담은 서비스",
      description: "대학생들이 만든 따뜻한 반려동물 찾기 플랫폼. 우리도 반려동물을 키우는 사람으로서, 여러분의 마음을 이해합니다.",
    },
    {
      icon: Clock,
      title: "빠른 대응",
      description: "24시간 이내 신속한 초기 대응. 골든타임을 놓치지 않도록 최선을 다해 도와드립니다.",
    },
    {
      icon: Users,
      title: "지역 커뮤니티 연결",
      description: "주변 이웃들과 자동으로 공유되어 더 많은 사람들이 함께 찾아드립니다. 혼자가 아니에요!",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            왜 우리 서비스를 써야 할까요?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            실종된 반려동물을 찾는 것은 시간과의 싸움입니다. <br />
            우리가 함께 찾아드릴게요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl hover-elevate active-elevate-2"
              data-testid={`card-feature-${index}`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
