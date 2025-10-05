import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Award, Users, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const trainers = [
  {
    name: "Sarah Mitchell",
    title: "Strength & Conditioning Coach",
    experience: "8 years",
    rating: 4.9,
    clients: "500+",
    specialties: ["Powerlifting", "Olympic Lifting", "Injury Prevention"],
    achievements: ["NSCA Certified", "Former Olympic Athlete", "PhD in Exercise Science"],
    image: "https://images.unsplash.com/photo-1758875568756-37a9c5c1a4f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBmaXRuZXNzJTIwY29hY2hpbmd8ZW58MXx8fHwxNzU5NjQxMTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Specializing in functional strength training with a focus on proper form and progressive overload."
  },
  {
    name: "Marcus Rodriguez",
    title: "HIIT & Cardio Specialist",
    experience: "6 years",
    rating: 4.8,
    clients: "300+",
    specialties: ["HIIT", "Boxing", "Fat Loss"],
    achievements: ["ACSM Certified", "Former Professional Boxer", "Nutrition Specialist"],
    image: "https://images.unsplash.com/photo-1729280860113-82372b7afad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZml0bmVzcyUyMHJ1bm5pbmd8ZW58MXx8fHwxNzU5NjQxMTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "High-energy trainer who makes every workout challenging, fun, and results-driven."
  },
  {
    name: "Emma Chen",
    title: "Yoga & Wellness Coach",
    experience: "10 years",
    rating: 5.0,
    clients: "800+",
    specialties: ["Vinyasa Yoga", "Meditation", "Mindfulness"],
    achievements: ["500hr RYT Certified", "Mindfulness Teacher", "Ayurveda Practitioner"],
    image: "https://images.unsplash.com/photo-1645652367526-a0ecb717650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc1OTU5OTY3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Creating a holistic approach to fitness through mindful movement and stress reduction techniques."
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">
            Meet Your <span className="text-primary">Expert Trainers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Train with certified professionals who are passionate about helping you 
            achieve your fitness goals with personalized guidance and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="group overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{trainer.name}</h3>
                  <p className="text-sm opacity-90">{trainer.title}</p>
                </div>
                <div className="absolute top-4 right-4 bg-background/90 rounded-lg p-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    <span className="text-sm font-medium">{trainer.rating}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground">
                  {trainer.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span>{trainer.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{trainer.clients}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Specialties:</div>
                  <div className="flex flex-wrap gap-1">
                    {trainer.specialties.map((specialty, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Achievements:</div>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {trainer.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" size="sm">
                    Book Session
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Trainers
          </Button>
        </div>
      </div>
    </section>
  );
}
