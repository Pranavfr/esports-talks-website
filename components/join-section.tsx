"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, BrainCircuit, Palette } from 'lucide-react';
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

const JOIN_OPTIONS = [
  {
    id: 1,
    title: "League Ops Registration",
    description: "Join as a Opearational Partner and Be a Part of the Core Team",
    details: [
      "Be a member of the core team",
      "Help to Reach out to sponsors",
      "Organize tournaments",
      "Grow as a Operational Manager"
    ],
    icon: Users,
    color: "text-blue-500",
    buttonText: "Join Team",
    link: "https://forms.gle/dPdMezxdtdAb69dVA"
  },
  {
    id: 2,
    title: "Management Registration",
    description: "Be part of our management team and help organize events",
    details: [
      "Organize tournaments",
      "Manage community events",
      "Work with pro teams",
      "Gain esports industry experience"
    ],
    icon: BrainCircuit,
    color: "text-purple-500",
    buttonText: "Join Management",
    link: "https://forms.gle/dPdMezxdtdAb69dVA"
  },
  {
    id: 3,
    title: "Creative Registration",
    description: "Join our creative team and showcase your talents",
    details: [
      "Design tournament graphics",
      "Create social media content",
      "Develop promotional materials",
      "Work on brand initiatives"
    ],
    icon: Palette,
    color: "text-green-500",
    buttonText: "Join Creative",
    link: "https://forms.gle/dPdMezxdtdAb69dVA"
  }
];

export function JoinSection() {
  const handleClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Be a Part</h2>
        <p className="text-muted-foreground">
          Join our community and help shape the future of esports
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {JOIN_OPTIONS.map((option) => {
          const Icon = option.icon;
          return (
            <Card key={option.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className={`h-6 w-6 ${option.color}`} />
                  <CardTitle>{option.title}</CardTitle>
                </div>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {option.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <InteractiveHoverButton 
                  text={option.buttonText}
                  className="w-full bg-white dark:bg-slate-950"
                  onClick={() => handleClick(option.link)}
                />
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}