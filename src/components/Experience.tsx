"use client";
import { GraduationCap, Building2, Calendar, Briefcase } from "lucide-react";

export default function ExperiencePage() {
  const timeline = [
    {
      type: "education",
      title: "B.Tech in Information Technology",
      place: "Bharati Vidyapeeth's College of Engineering, New Delhi",
      duration: "2023 – 2027",
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
    },
    {
      type: "experience",
      title: "Software Development Intern",
      place: "FoundersCart Pvt. Ltd.",
      duration: "June – July 2025",
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      details: [
        "Integrated IVR system with CRM platforms for call automation.",
        "Built a Chrome Extension softphone widget for click-to-call inside CRM.",
        "Developed backend APIs for syncing call logs with CRM systems.",
        "Worked on AI-powered assistant integration for smarter workflows.",
      ],
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">
        My Journey
      </h1>

      <div className="relative border-l border-border pl-6 space-y-12">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative">
            {/* Icon bubble */}
            <span className="absolute -left-[38px] flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border shadow-md">
              {item.icon}
            </span>

            {/* Card */}
            <div className="bg-card/50 border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                <Building2 className="w-4 h-4" /> {item.place}
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4" /> {item.duration}
              </p>

              {item.details && (
                <ul className="list-disc pl-5 mt-3 space-y-1 text-muted-foreground">
                  {item.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
