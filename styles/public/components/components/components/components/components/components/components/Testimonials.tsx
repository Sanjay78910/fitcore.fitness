import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jessica Torres",
    role: "Marketing Manager",
    content: "FitCore transformed my relationship with fitness. The AI-powered workouts adapt perfectly to my busy schedule, and I've never felt stronger or more confident.",
    rating: 5,
    initials: "JT",
    results: "Lost 25 lbs in 4 months"
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    content: "As someone who sits at a desk all day, FitCore's posture correction programs and quick HIIT sessions have been life-changing. The app makes it so easy to stay consistent.",
    rating: 5,
    initials: "DK",
    results: "Improved posture & energy"
  },
  {
    name: "Maria Rodriguez",
    role: "Teacher",
    content: "The yoga and mindfulness programs helped me manage stress while building physical strength. The community support is incredible - it feels like having a fitness family.",
    rating: 5,
    initials: "MR",
    results: "Better sleep & flexibility"
  },
  {
    name: "James Wilson",
    role: "Entrepreneur",
    content: "FitCore's personal training feature is amazing. Having a certified trainer guide me through workouts virtually has helped me achieve results I never thought possible.",
    rating: 5,
    initials: "JW",
    results: "Gained 15 lbs muscle"
  },
  {
    name: "Sarah Chen",
    role: "Nurse",
    content: "Working night shifts made it hard to maintain a fitness routine. FitCore's 24/7 availability and short, effective workouts fit perfectly into my irregular schedule.",
    rating: 5,
    initials: "SC",
    results: "Increased endurance"
  },
  {
    name: "Michael Brown",
    role: "Retired",
    content: "At 65, I thought my best fitness days were behind me. FitCore's age-appropriate programs and injury prevention focus have proven me wrong. I feel 20 years younger!",
    rating: 5,
    initials: "MB",
    results: "Joint pain relief"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives with FitCore. 
            Here's what our community has to say about their fitness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Results Badge */}
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {testimonial.results}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">50,000+</div>
            <div className="text-sm text-muted-foreground">Happy Members</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
