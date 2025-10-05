import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Star, Crown, Zap } from "lucide-react";
import { Switch } from "./ui/switch";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for fitness beginners",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Access to basic workouts",
      "Mobile app access",
      "Progress tracking",
      "Community support",
      "Weekly meal plans"
    ],
    popular: false,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    name: "Pro",
    icon: Star,
    description: "Most popular choice for serious athletes",
    monthlyPrice: 59,
    yearlyPrice: 590,
    features: [
      "All Starter features",
      "Live group classes",
      "Advanced analytics",
      "Nutrition coaching",
      "Recovery programs",
      "24/7 trainer chat support"
    ],
    popular: true,
    color: "bg-primary/10 text-primary"
  },
  {
    name: "Elite",
    icon: Crown,
    description: "Premium experience with personal training",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      "All Pro features",
      "1-on-1 personal training",
      "Custom meal planning",
      "Priority support",
      "Exclusive masterclasses",
      "Fitness equipment discounts",
      "Annual health assessment"
    ],
    popular: false,
    color: "bg-purple-500/10 text-purple-600"
  }
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl">
            Choose Your <span className="text-primary">Membership</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing options designed to fit your budget and fitness goals. 
            All plans include our satisfaction guarantee.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            <Badge variant="secondary" className="ml-2">Save 20%</Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const savings = isYearly ? plan.monthlyPrice * 12 - plan.yearlyPrice : 0;

            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  plan.popular ? 'border-primary shadow-lg scale-105' : 'border-border/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                  <div className={`w-12 h-12 rounded-lg ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold">
                      ${price}
                      <span className="text-lg font-normal text-muted-foreground">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    </div>
                    {isYearly && savings > 0 && (
                      <div className="text-sm text-green-600">
                        Save ${savings} per year
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? '' : 'variant-outline'}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    30-day money-back guarantee
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Need a custom enterprise solution?
          </p>
          <Button variant="outline">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
