// "use client";

// import {
//   ContributionGraph,
//   ContributionGraphBlock,
//   ContributionGraphCalendar,
//   ContributionGraphFooter,
//   ContributionGraphLegend,
//   ContributionGraphTotalCount,
// } from "@/components/kibo-ui/contribution-graph";

// import { useEffect, useState } from "react";
// import {
//   eachDayOfInterval,
//   startOfWeek,
//   endOfWeek,
//   formatISO,
//   subDays,
// } from "date-fns";

// type ContributionDay = {
//   date: string;
//   count: number;
//   level: number;
// };

// const USERNAME = "utsavg05";
// const MAX_LEVEL = 4;

// export default function GithubContributionSection() {
//   const [data, setData] = useState<ContributionDay[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchContributions() {
//       try {
//         const res = await fetch(
//           `https://github-contributions-api.jogruber.de/v4/${USERNAME}`
//         );

//         const json = await res.json();

//         // ✅ FIXED LOGIC: Rolling 365-day window
//         // This captures the "Last Year" view (e.g., Jan 2025 to Jan 2026)
//         // instead of forcing a specific calendar year.
//         const today = new Date();
//         const endDate = endOfWeek(today, { weekStartsOn: 0 });
//         const startDate = startOfWeek(subDays(today, 365), { weekStartsOn: 0 });

//         const allDays = eachDayOfInterval({ start: startDate, end: endDate });

//         // Map API data for quick lookup
//         const contributionMap = new Map(
//           json.contributions.map((c: any) => [c.date, c.count])
//         );

//         // Calculate maxCount only based on the days currently in view
//         // to ensure the heat map colors are accurate for this period.
//         const maxCount =
//           Math.max(
//             ...allDays.map((day) => {
//               const iso = formatISO(day, { representation: "date" });
//               return (contributionMap.get(iso) as number) ?? 0;
//             }),
//             1 // Avoid division by zero
//           );

//         const formatted: ContributionDay[] = allDays.map((date) => {
//           const iso = formatISO(date, { representation: "date" });
//           const count = (contributionMap.get(iso) as number) ?? 0;

//           return {
//             date: iso,
//             count,
//             level:
//               count === 0
//                 ? 0
//                 : Math.ceil((count / maxCount) * MAX_LEVEL),
//           };
//         });

//         setData(formatted);
//       } catch (err) {
//         console.error("Failed to fetch GitHub contributions", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchContributions();
//   }, []);

//   return (
//     <section
//       id="github"
//       className="w-full max-w-4xl mx-auto px-6 py-20"
//     >
//       {loading ? (
//         <p className="text-sm text-muted-foreground">
//           Loading contributions…
//         </p>
//       ) : (
//         <ContributionGraph data={data}>
//           <ContributionGraphCalendar>
//             {({ activity, dayIndex, weekIndex }) => (
//               <ContributionGraphBlock
//                 key={`${activity.date}-${dayIndex}`}
//                 activity={activity}
//                 dayIndex={dayIndex}
//                 weekIndex={weekIndex}
//               />
//             )}
//           </ContributionGraphCalendar>

//           <ContributionGraphFooter>
//             <ContributionGraphTotalCount />
//             <ContributionGraphLegend />
//           </ContributionGraphFooter>
//         </ContributionGraph>
//       )}
//     </section>
//   );
// }



"use client";

import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";

import { useEffect, useState } from "react";
import {
  eachDayOfInterval,
  endOfWeek,
  formatISO,
  startOfWeek,
} from "date-fns";

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

const USERNAME = "utsavg05";

export default function GithubContributionSection() {
  const [data, setData] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${USERNAME}`
        );

        const json = await res.json();

        // ✅ 1. Date Logic: Fixed Start (Jan 1, 2025) to Today
        // This ensures you see ALL of last year + whatever has happened in 2026 so far.
        const currentYear = new Date().getFullYear();
        const lastYear = currentYear - 1; // 2025

        // Start: Jan 1st of Last Year (e.g., Jan 1, 2025)
        const start = startOfWeek(new Date(lastYear, 0, 1), {
          weekStartsOn: 0,
        });
        
        // End: Today/End of current week
        const end = endOfWeek(new Date(), {
          weekStartsOn: 0,
        });

        const allDays = eachDayOfInterval({ start, end });

        // Map API data for quick lookup
        const contributionMap = new Map(
          json.contributions.map((c: any) => [c.date, c.count])
        );

        const formatted: ContributionDay[] = allDays.map((date) => {
          const iso = formatISO(date, { representation: "date" });
          const count = (contributionMap.get(iso) as number) ?? 0;

          // ✅ 2. Level Logic: Fixed Thresholds (Standard GitHub Scale)
          // Using a static scale prevents one busy day from "flattening" the rest of the graph
          // causing the "dim/incomplete" look you saw.
          let level = 0;
          if (count === 0) level = 0;
          else if (count <= 3) level = 1;      // Lightest
          else if (count <= 6) level = 2;
          else if (count <= 10) level = 3;
          else level = 4;                      // Darkest/Brightest

          return {
            date: iso,
            count,
            level,
          };
        });

        setData(formatted);
      } catch (err) {
        console.error("Failed to fetch GitHub contributions", err);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  return (
    <section
      id="github"
      className="w-full max-w-4xl mx-auto px-6 py-20"
    >
      {loading ? (
        <p className="text-sm text-muted-foreground">
          Loading contributions…
        </p>
      ) : (
        <ContributionGraph data={data}>
          <ContributionGraphCalendar>
            {({ activity, dayIndex, weekIndex }) => (
              <ContributionGraphBlock
                key={`${activity.date}-${dayIndex}`}
                activity={activity}
                dayIndex={dayIndex}
                weekIndex={weekIndex}
              />
            )}
          </ContributionGraphCalendar>

          <ContributionGraphFooter>
            <ContributionGraphTotalCount />
            <ContributionGraphLegend />
          </ContributionGraphFooter>
        </ContributionGraph>
      )}
    </section>
  );
}