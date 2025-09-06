// app/experience/page.tsx
"use client"
import { GraduationCap, Building2, Calendar, Briefcase } from "lucide-react";

export default function ExperiencePage() {
  return (
    <section className="max-w-7xl w-full rounded mx-auto px-6 py-16 bg-card">
      {/* Education */}
      <h2 className="text-3xl font-bold text-primary mb-6">Education</h2>
      <div className="space-y-3 bg-card/40 p-6 rounded-2xl border border-border">
        <p className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary" />
          <span className="font-semibold">Degree:</span>{" "}
          B.Tech in Information Technology
        </p>
        <p className="flex items-center gap-2">
          <Building2 className="w-5 h-5 text-primary" />
          <span className="font-semibold">College:</span>{" "}
          Bharati Vidyapeeth's College of Engineering, New Delhi
        </p>
        <p className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          <span className="font-semibold">Years:</span> 2023 – 2027
        </p>
      </div>

      {/* Experience */}
      <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Experience</h2>
      <div className="space-y-3 bg-card/40 p-6 rounded-2xl border border-border">
        <p className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          <span className="font-semibold">Software Development Intern</span> – FoundersCart Pvt. Ltd.
        </p>
        <p className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          <span className="font-semibold">Duration:</span> June – July 2025
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Integrated IVR system with CRM platforms for call automation.</li>
          <li>Built a Chrome Extension softphone widget for click-to-call inside CRM.</li>
          <li>Developed backend APIs for syncing call logs with CRM systems.</li>
          <li>Worked on AI-powered assistant integration for smarter workflows.</li>
        </ul>
      </div>
    </section>
  );
}
