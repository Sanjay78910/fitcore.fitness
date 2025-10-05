import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Users, Star, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

const programs = [
  {
    id: 1,
    title: "Strength & Power",
    description: "Build muscle mass and increase strength with progressive overload training",
    image: "https://images.unsplash.com/photo-1758957646695-ec8bce3df462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZXF1aXBtZW50JTIwbW9kZXJuJTIwZ3ltfGVufDF8fHx8MTc1OTY0MTE0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "45 min",
    difficulty: "Intermediate",
    participants: "1.2k",
    rating: 4.9,
    features: ["Weight Training", "Progressive Overload", "Nutrition Guide"],
    color: "bg-red-500"
  },
  {
    id: 2,
    title: "Mindful Yoga Flow",
    description: "Connect mind and body through flowing movements and breathwork",
    image: "https://images.unsplash.com/photo-1645652367526-a0ecb717650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc1OTU5OTY3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "60 min",
    difficulty: "Beginner",
    participants: "2.5k",
    rating: 4.8,
    features: ["Flexibility", "Meditation", "Stress Relief"],
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "HIIT Cardio Blast",
    description: "High-intensity intervals to maximize calorie burn and cardiovascular fitness",
    image: "https://images.unsplash.com/photo-1729280860113-82372b7afad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZml0bmVzcyUyMHJ1bm5pbmd8ZW58MXx8fHwxNzU5NjQxMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "30 min",
    difficulty: "Advanced",
    participants: "980",
    rating: 4.7,
    features: ["Fat Burning", "Cardio", "Quick Results"],
    color: "bg-orange-500"
  },
  {
    id: 4,
    title: "Personal Training",
    description: "One-on-one coaching tailored to your specific goals and needs",
    image: "https://images.unsplash.com/photo-1758875568756-37a9c5c1a4f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBmaXRuZXNzJTIwY29hY2hpbmd8ZW58MXx8fHwxNzU5NjQxMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "50 min",
    difficulty: "All Levels",
    participants: "VIP",
    rating: 5.0,
    features: ["Custom Plans", "1-on-1 Coaching", "Form Correction"],
    color: "bg-purple-500"
  }
];

export function Programs() {
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);

  return (
    <section id="programs" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">
            Choose Your <span className="text-primary">Training Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our expertly designed programs that cater to all fitness levels 
            and goals. Each program is crafted to deliver maximum results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Card 
              key={program.id}
              className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProgram(program.id)}
              onMouseLeave={() => setHoveredProgram(null)}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {program.difficulty}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className={`w-3 h-3 rounded-full ${program.color}`} />
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span>{program.title}</span>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span>{program.rating}</span>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {program.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{program.participants}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {program.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  variant={hoveredProgram === program.id ? "default" : "outline"}
                >
                  Join Program
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Programs
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
