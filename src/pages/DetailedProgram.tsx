import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type SessionType = "plenary" | "syis" | "society" | "scientific" | "workshop" | "social";

interface ProgramItem {
  time: string;
  title: string;
  description?: string;
  type: SessionType;
  hall?: string;
}

interface DaySchedule {
  date: string;
  dateLabel: string;
  halls: string[];
  items: ProgramItem[];
}

const sessionColors: Record<SessionType, string> = {
  plenary: "bg-primary text-primary-foreground",
  syis: "bg-secondary text-secondary-foreground",
  society: "bg-primary/80 text-primary-foreground",
  scientific: "bg-accent text-accent-foreground",
  workshop: "bg-secondary/80 text-secondary-foreground",
  social: "bg-gradient-to-r from-primary/60 to-secondary/60 text-white",
};

const sessionLabels: Record<SessionType, string> = {
  plenary: "Plenary Sessions",
  syis: "SYIS Activities",
  society: "Society Meetings",
  scientific: "Scientific Concurrent Sessions",
  workshop: "Workshops",
  social: "Social Events",
};

const programData: DaySchedule[] = [
  {
    date: "sunday",
    dateLabel: "Sunday, November 15, 2026",
    halls: ["HALL A (COLUMBUS)", "NICOLET HALL", "MICHELANGELO HALL", "HALL D (LA SALLE)", "HALL E (CADILLAC)"],
    items: [
      { time: "1:00 PM – 3:00 PM", title: "TERMIS-AM Council Meeting", type: "society", hall: "NICOLET HALL" },
      { time: "1:00 PM – 4:00 PM", title: "Pre-Conference Workshop: Artificial Intelligence (AI) in Biofabrication, Tissue Engineering, and Regenerative Medicine", description: "*registration required", type: "workshop", hall: "MICHELANGELO HALL" },
      { time: "1:00 PM – 4:00 PM", title: "Pre-Conference Workshop: Innovation and Navigating FDA Regulatory Pathways in Tissue Engineering", description: "*registration required", type: "workshop", hall: "HALL D (LA SALLE)" },
      { time: "1:00 PM – 4:00 PM", title: "Pre-Conference Workshop: What Now? Commercial Translation and Entrepreneurship in Regenerative Medicine", description: "*registration required", type: "workshop", hall: "HALL E (CADILLAC)" },
      { time: "4:00 PM – 4:15 PM", title: "Transition break", type: "social", hall: "HALL A (COLUMBUS)" },
      { time: "4:15 PM – 4:45 PM", title: "TERMIS General Assembly", type: "society", hall: "HALL A (COLUMBUS)" },
      { time: "4:45 PM – 5:00 PM", title: "Transition break", type: "social", hall: "HALL A (COLUMBUS)" },
      { time: "5:00 PM – 5:15 PM", title: "TERMIS-AM Chair Welcome", type: "plenary", hall: "HALL A (COLUMBUS)" },
      { time: "5:15 PM – 5:30 PM", title: "Welcome From the TERMIS-AM 2026 Conference Co-Chairs", type: "plenary", hall: "HALL A (COLUMBUS)" },
      { time: "5:30 PM – 6:30 PM", title: "Opening Plenary Symposium", description: "Keynote speakers to be announced", type: "plenary", hall: "HALL A (COLUMBUS)" },
      { time: "6:30 PM – 8:30 PM", title: "Welcome Reception & Poster Session 1 & Exhibitor Viewing", description: "Location: Exhibition Area", type: "social", hall: "HALL A (COLUMBUS)" },
    ],
  },
  {
    date: "monday",
    dateLabel: "Monday, November 16, 2026",
    halls: ["HALL A (COLUMBUS)", "HALL B (CABOT)", "HALL C (CARTIER)", "HALL D (LA SALLE)", "HALL E (CADILLAC)"],
    items: [
      { time: "8:00 AM – 9:30 AM", title: "Scientific Concurrent Sessions 1", description: "Multiple parallel sessions across all halls", type: "scientific" },
      { time: "9:30 AM – 10:00 AM", title: "Coffee Break", type: "social" },
      { time: "10:00 AM – 12:00 PM", title: "Plenary Speaker & Award Session 1", description: "Jensen Tissue Engineering Award", type: "plenary", hall: "HALL A (COLUMBUS)" },
      { time: "12:00 PM – 1:30 PM", title: "Lunch Break on Your Own", description: "Empowering Next Leaders in TERM Luncheon (registration required)", type: "social" },
      { time: "1:30 PM – 3:00 PM", title: "Scientific Concurrent Sessions 2", description: "Multiple parallel sessions across all halls", type: "scientific" },
      { time: "3:00 PM – 3:05 PM", title: "Transition Break", type: "social" },
      { time: "3:05 PM – 4:35 PM", title: "Scientific Concurrent Sessions 3", description: "Including Business Plan Competition", type: "scientific" },
      { time: "4:35 PM – 5:05 PM", title: "Coffee Break", type: "social" },
      { time: "5:05 PM – 6:35 PM", title: "Scientific Concurrent Sessions 4", description: "Multiple parallel sessions across all halls", type: "scientific" },
      { time: "6:35 PM – 8:00 PM", title: "Poster Session 2 & Exhibitor Viewing / Reception", description: "Location: Exhibition Area", type: "social" },
      { time: "8:00 PM – 9:00 PM", title: "SYIS Networking Event", description: "Location: Exhibition Area", type: "syis" },
    ],
  },
  {
    date: "tuesday",
    dateLabel: "Tuesday, November 17, 2026",
    halls: ["HALL A (COLUMBUS)", "HALL B (CABOT)", "HALL C (CARTIER)", "HALL D (LA SALLE)", "HALL E (CADILLAC)"],
    items: [
      { time: "7:00 AM – 8:00 AM", title: "TWIGs Chairs Meeting", description: "Location: Michelangelo Room", type: "society" },
      { time: "8:00 AM – 9:30 AM", title: "Scientific Concurrent Sessions 5", description: "Including Rapid Fire Sessions", type: "scientific" },
      { time: "9:30 AM – 10:00 AM", title: "Coffee Break", type: "social" },
      { time: "10:00 AM – 12:00 PM", title: "Plenary Speaker & Award Session 2", description: "TERMIS-AM Lifetime Achievement Award", type: "plenary", hall: "HALL A (COLUMBUS)" },
      { time: "12:00 PM – 1:30 PM", title: "Lunch Break on Your Own", description: "SYIS Student Meet Mentor Lunch (registration required)", type: "social" },
      { time: "1:30 PM – 3:00 PM", title: "Scientific Concurrent Sessions 6", description: "Multiple parallel sessions across all halls", type: "scientific" },
      { time: "3:00 PM – 4:45 PM", title: "2026 TERMIS-AM Awards Ceremony", description: "Senior Scientist Award, Commercialization/Innovation Award, Young Investigator Award, Outstanding Postdoc Award", type: "plenary", hall: "HALL A (COLUMBUS)" },
      { time: "4:45 PM – 5:15 PM", title: "TWIGs Organizational Meetings", type: "society" },
      { time: "5:15 PM – 6:45 PM", title: "Poster Session 3 & Exhibitor Viewing / Reception", description: "Location: Exhibition Area", type: "social" },
      { time: "6:45 PM – 7:00 PM", title: "Transition break", type: "social" },
      { time: "7:00 PM – 9:00 PM", title: "Evening Special Event – Conference Reception", description: "SYIS Career Development and Scientific Excellence Award Presentation", type: "social" },
    ],
  },
  {
    date: "wednesday",
    dateLabel: "Wednesday, November 18, 2026",
    halls: ["HALL A (COLUMBUS)", "HALL B (CABOT)", "HALL C (CARTIER)", "HALL D (LA SALLE)", "HALL E (CADILLAC)"],
    items: [
      { time: "8:00 AM – 9:30 AM", title: "Scientific Concurrent Sessions 7", description: "Multiple parallel sessions across all halls", type: "scientific" },
      { time: "9:30 AM – 10:00 AM", title: "Coffee Break", type: "social" },
      { time: "10:00 AM – 11:00 AM", title: "Plenary Speaker Session 3", description: "Translation: From Idea to Commercial Product", type: "plenary", hall: "HALL A (COLUMBUS)" },
      { time: "11:00 AM – 11:15 AM", title: "Closing Ceremony", type: "plenary", hall: "HALL A (COLUMBUS)" },
      { time: "11:15 AM – 11:30 AM", title: "Transition Break", type: "social" },
      { time: "11:30 AM – 1:00 PM", title: "Scientific Concurrent Sessions 8", description: "Final parallel sessions including Mentorship Session", type: "scientific" },
      { time: "1:00 PM – 2:00 PM", title: "SYIS Career Panel Discussion", type: "syis", hall: "HALL A (COLUMBUS)" },
    ],
  },
];

const DetailedProgram = () => {
  const [activeDay, setActiveDay] = useState("sunday");
  const [selectedHall, setSelectedHall] = useState("HALL A (COLUMBUS)");

  const handleDayChange = (day: string) => {
    setActiveDay(day);
    setSelectedHall("HALL A (COLUMBUS)"); // Reset to Hall A when day changes
  };

  const currentDay = programData.find((d) => d.date === activeDay);
  
  // Only show content for Sunday + Hall A, otherwise show placeholder
  const showContent = activeDay === "sunday" && selectedHall === "HALL A (COLUMBUS)";
  
  // Filter items for Hall A on Sunday
  const filteredItems = currentDay?.items.filter(
    (item) => !item.hall || item.hall === "HALL A (COLUMBUS)"
  ) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <PageHeader
          title="Detailed Program"
          subtitle="TERMIS-AM 2026 Scientific Program Overview"
        />

        {/* Legend Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="font-semibold text-primary">Legend:</span>
              {Object.entries(sessionLabels).map(([key, label]) => (
                <div key={key} className="flex items-center gap-2">
                  <span className={cn("px-3 py-1 rounded text-sm font-medium", sessionColors[key as SessionType])}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs value={activeDay} onValueChange={handleDayChange} className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
                {programData.map((day) => (
                  <TabsTrigger
                    key={day.date}
                    value={day.date}
                    className={cn(
                      "px-4 py-3 rounded-lg font-medium text-sm md:text-base transition-all",
                      "data-[state=active]:bg-primary data-[state=active]:text-white",
                      "data-[state=inactive]:bg-muted/50 data-[state=inactive]:text-primary data-[state=inactive]:hover:bg-muted"
                    )}
                  >
                    {day.dateLabel}
                  </TabsTrigger>
                ))}
              </TabsList>

              {programData.map((day) => (
                <TabsContent key={day.date} value={day.date} className="mt-0">
                  {/* Halls */}
                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {day.halls.map((hall) => (
                      <button
                        key={hall}
                        onClick={() => setSelectedHall(hall)}
                        className={cn(
                          "px-4 py-2 rounded-lg text-sm font-medium border transition-all cursor-pointer",
                          selectedHall === hall
                            ? "bg-primary text-white border-primary"
                            : "bg-muted/50 text-primary border-accent/20 hover:bg-accent/20"
                        )}
                      >
                        {hall}
                      </button>
                    ))}
                  </div>

                  {/* Program Content or Placeholder */}
                  {showContent ? (
                    <div className="space-y-4 max-w-4xl mx-auto">
                      {filteredItems.map((item, index) => (
                        <div
                          key={index}
                          className={cn(
                            "rounded-xl p-5 shadow-md border border-accent/10 transition-all hover:shadow-lg",
                            sessionColors[item.type]
                          )}
                        >
                          <div className="flex flex-col md:flex-row md:items-start gap-3">
                            <div className="font-semibold whitespace-nowrap min-w-[160px]">
                              {item.time}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-lg">{item.title}</h3>
                              {item.description && (
                                <p className="mt-1 opacity-90 text-sm">{item.description}</p>
                              )}
                              {item.hall && (
                                <p className="mt-2 text-xs opacity-75">📍 {item.hall}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="max-w-4xl mx-auto p-12 bg-muted/30 rounded-xl border border-accent/20 text-center">
                      <h3 className="font-semibold text-primary text-xl mb-2">
                        {currentDay?.dateLabel} - {selectedHall}
                      </h3>
                      <p className="text-muted-foreground italic text-lg">
                        To be announced soon...
                      </p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>

            {/* Download Button */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                The detailed scientific program with all session information will be available closer to the conference date.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DetailedProgram;
