import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PresentationGuidelines = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Presentation Guidelines"
        description="Oral and poster presentation guidelines for presenters at the TERMIS-AM 2026 Annual Conference & Exhibition in New Orleans."
      />
      <Header />

      <main id="main" className="flex-1">
        <PageHeader
          title="Presentation Guidelines"
          subtitle="Oral and poster presentation guidelines for TERMIS-AM 2026"
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {/* Oral */}
                <AccordionItem
                  value="oral-presentation-guidelines"
                  className="border border-border rounded-xl overflow-hidden bg-card shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-5 text-left text-2xl font-bold font-serif text-primary hover:no-underline hover:bg-muted/30 transition-colors [&[data-state=open]]:bg-muted/20">
                    ORAL PRESENTATION GUIDELINES
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-8 pt-0 text-foreground">
                    <p className="text-lg text-foreground mb-8">
                      We are thrilled by the exceptional number of abstract submissions this year. To give as many
                      presenters as possible a chance to share their work, we have created a packed program. Please
                      show respect to your fellow speakers, the session chairs, and the audience by adhering to the
                      time limits outlined in the notification letter.
                    </p>

                    <h3 className="text-xl font-bold text-primary mb-4">Format Requirements</h3>
                    <ul className="list-disc pl-6 space-y-2 text-foreground mb-8">
                      <li>
                        Presentations must be prepared in <strong>Microsoft PowerPoint</strong>
                      </li>
                      <li>
                        Please use a <strong>16:9 aspect ratio</strong> for all slides
                      </li>
                      <li>
                        We recommend using the slide template aligned with the conference theme, which can be
                        downloaded{" "}
                        <a
                          href="/promotional-toolkit"
                          className="text-accent underline underline-offset-4 hover:opacity-80"
                        >
                          here
                        </a>
                        .
                      </li>
                    </ul>

                    <p className="text-lg text-foreground mb-10">
                      We greatly appreciate the time and effort you've put into your presentation. Your contribution
                      is what makes this conference meaningful and impactful. Thank you!
                    </p>

                    <h3 className="text-2xl font-bold text-foreground mb-4">SPEAKER READY ROOM</h3>
                    <p className="text-foreground mb-4">
                      Presenters should upload their presentation files in the speaker ready room at least 2 hours
                      before their session. If your presentation is early in the morning, it is advised to load the
                      presentation the day before.
                    </p>
                    <p className="text-foreground">
                      <strong>Speaker Ready Room Hours:</strong> TBA
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Poster */}
                <AccordionItem
                  value="poster-presentation-guidelines"
                  className="border border-border rounded-xl overflow-hidden bg-card shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-5 text-left text-2xl font-bold font-serif text-primary hover:no-underline hover:bg-muted/30 transition-colors [&[data-state=open]]:bg-muted/20">
                    POSTER PRESENTATION GUIDELINES
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-8 pt-0 text-foreground">
                    <p className="text-lg text-foreground mb-8">
                      All poster presentations at TERMIS-AM 2026 will be displayed as physical posters. Posters will
                      be available for viewing during three designated Poster Sessions. Presenters will have the
                      opportunity to discuss their work during the scheduled presentation times listed below.
                    </p>

                    <h3 className="text-xl font-bold text-primary mb-4">Poster Sessions Presentations</h3>
                    <ol className="list-decimal pl-6 space-y-2 text-foreground mb-6">
                      <li>Sunday, November 15, 2026 at 6:30 PM - 8:30 PM</li>
                      <li>Monday, November 16, 2026 at 6:35 PM - 8:00 PM</li>
                      <li>Tuesday, November 17, 2026 at 5:45 PM - 7:15 PM</li>
                    </ol>

                    <p className="text-foreground mb-8">
                      All authors are expected to be present during their assigned poster sessions presentation
                      times.
                    </p>

                    <h3 className="text-xl font-bold text-primary mb-4">Poster Presentation List</h3>
                    <p className="text-foreground mb-8">Poster presentation list will be available soon.</p>

                    <h3 className="text-xl font-bold text-primary mb-4">
                      Poster Set-Up, Presentation and Dismantle Schedule:
                    </h3>
                    <div className="mb-8 space-y-6 text-foreground">
                      <div>
                        <p className="font-semibold mb-2">Poster Session 1</p>
                        <ul className="space-y-1">
                          <li>• Set-up: Sunday, November 15, 2026 at 3:30 PM – 5:30 PM</li>
                          <li>
                            • Poster Display Days &amp; Hours: Sunday, November 15, 2026 5:30 PM – 8:30 PM;
                            Monday, November 16, 2026, 8:00 AM – 1:30 PM
                          </li>
                          <li>
                            • Author Presentation Hours: Sunday, November 15, 2026 at 6:30 PM - 8:30 PM
                            (Welcome Reception with Posters)
                          </li>
                          <li>• Dismantle: Monday, November 16, 2026, 1:30 PM - 2:00 PM</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Poster Session 2</p>
                        <ul className="space-y-1">
                          <li>• Set-up: Monday, November 16, 2026 at 2:30 PM – 5:00 PM</li>
                          <li>
                            • Poster Display Days &amp; Hours: Monday, November 16, 2026, 5:00 PM – 8:00 PM;
                            Tuesday, November 17, 2026, 8:00 AM – 1:30 PM
                          </li>
                          <li>
                            • Author Presentation Hours: Monday, November 16, 2026 at 6:35 PM - 8:00 PM
                            (Reception with Posters)
                          </li>
                          <li>• Dismantle: Tuesday, November 17, 2026, 1:30 PM - 2:00 PM</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold mb-2">Poster Session 3</p>
                        <ul className="space-y-1">
                          <li>• Set-up: Tuesday, November 17, 2026 at 2:30 PM – 5:00 PM</li>
                          <li>
                            • Poster Display Days &amp; Hours: Tuesday, November 17, 2026, 5:00 PM – 7:15 PM;
                            Wednesday, November 18, 2026, 8:00 AM – 10:00 AM
                          </li>
                          <li>
                            • Author Presentation Hours: Tuesday, November 17, 2026 at 5:15 PM - 7:15 PM
                            (Reception with Posters)
                          </li>
                          <li>• Dismantle: Wednesday, November 18, 10:00 AM - 10:30 AM</li>
                        </ul>
                      </div>

                      <p>
                        All authors are expected to be present during their assigned poster sessions
                        presentation times. Posters must be removed at designated dismantle times. Any posters
                        left behind will be held at the Poster Help Desk until noon on Wednesday. Posters not
                        collected by then will be recycled.
                      </p>
                    </div>


                    <h3 className="text-xl font-bold text-primary mb-8">{`Poster Format Guidelines:\u00a0

•\tEach poster must fit within a maximum display area of 48 inches (width) × 48 inches (height).
•\tPosters may be in portrait, landscape, or square format, but their dimensions must not exceed the maximum display area specified above.
•\tThe abstract title, author(s), and affiliation(s) should appear at the top of the poster.
•\tInformation may be presented using figures, tables, text, photographs, and other visual materials. All illustrations should be neat, legible, and sized for easy reading from a reasonable distance. A font size of 24–36 pt is recommended.
•\tTypewritten sheets attached to the poster board will not be accepted.
•\tAll posters must be prepared entirely in English.
•\tMaterials for attaching posters to the poster board will be available at the Poster Help Desk in the poster area.
•\tPosters may be produced using any suitable material.

`}</h3>

                    <p className="text-foreground italic">
                      We look forward to your contributions and thank you for sharing your work with the TERMIS-AM
                      2026 community.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PresentationGuidelines;
