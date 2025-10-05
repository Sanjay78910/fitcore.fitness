import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { 
  Dumbbell, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 text-center border-b border-border">
          <h3 className="text-2xl mb-4">Stay Updated with FitCore</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest fitness tips, workout routines, and exclusive offers 
            delivered straight to your inbox.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button>
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Dumbbell className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">FitCore</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transform your body and mind with our comprehensive fitness platform. 
              Join thousands of members on their journey to a healthier lifestyle.
            </p>
            <div className="flex gap-4">
              <Button size="sm" variant="outline" className="p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="p-2">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Programs Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">Programs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Strength Training</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">HIIT Workouts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Yoga & Mindfulness</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Personal Training</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nutrition Coaching</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Recovery Programs</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Trainers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>123 Fitness Street, Wellness City, WC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>hello@fitcore.com</span>
              </div>
            </div>

            <div className="pt-4">
              <h5 className="text-sm font-medium mb-2">Support Hours</h5>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Monday - Friday: 6AM - 10PM</div>
                <div>Saturday - Sunday: 8AM - 8PM</div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2024 FitCore. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
