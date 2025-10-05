import { Card, CardContent } from "./ui/card";
import { 
  Brain, 
  Clock, 
  Smartphone, 
  Users, 
  Trophy, 
  Heart,
  Target,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Workouts",
    description: "Personalized training plans that adapt to your progress and preferences using advanced machine learning.",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Train anytime, anywhere with 24/7 access to live and on-demand classes that fit your schedule.",
    color: "bg-green-500/10 text-green-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Integration",
    description: "Seamless app experience with offline workouts, progress tracking, and real-time form corrections.",
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    icon: Users,
    title: "Community Challenges",
    description: "Join team challenges, compete with friends, and stay motivated with our supportive fitness community.",
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description: "Unlock badges, track milestones, and celebrate your fitness journey with our gamified progress system.",
    color: "bg-yellow-500/10 text-yellow-600"
  },
  {
    icon: Heart,
    title: "Health Monitoring",
    description: "Comprehensive health tracking with heart rate zones, recovery metrics, and wellness insights.",
    color: "bg-red-500/10 text-red-600"
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set SMART fitness goals and receive guided pathways to achieve them with expert coaching support.",
    color: "bg-indigo-500/10 text-indigo-600"
  },
  {
    icon: Zap,
    title: "Quick Workouts",
    description: "Efficient 15-30 minute HIIT sessions designed for busy schedules without compromising results.",
    color: "bg-pink-500/10 text-pink-600"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">
            Why Choose <span className="text-primary">FitCore</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of fitness with our innovative features designed 
            to accelerate your transformation and keep you motivated every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
