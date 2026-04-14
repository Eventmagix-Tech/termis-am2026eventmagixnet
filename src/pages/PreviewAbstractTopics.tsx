import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { abstractTopicsData } from "@/data/abstractTopicsData";

const PreviewAbstractTopics = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Abstract Topics"
        description="Explore the 18 main abstract topics and subtopics for the TERMIS-AM 2026 conference."
        noindex
      />
      <Header />
      <PageHeader title="Abstract Topics" />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-10">
            There are <strong>18 main abstract topics</strong>, each of which includes several <strong>sub-topics</strong> to which
            abstracts may be submitted. These <strong>sub-topics</strong> also represent <strong>potentially planned sessions</strong>{" "}
            within the scientific program of <strong>TERMIS AM 2026</strong>. Click on an abstract sub-topic to view
            the description of the corresponding planned session.
          </p>

          <div className="flex justify-center mb-8">
            <a href="#">
              <Button variant="gold" size="lg">
                Click Here for "Call for Abstracts"
              </Button>
            </a>
          </div>

          <Accordion type="multiple" className="space-y-3">
            {abstractTopicsData.map((topic, topicIndex) => (
              <AccordionItem
                key={topicIndex}
                value={`topic-${topicIndex}`}
                className="border border-border rounded-lg overflow-hidden bg-card shadow-sm"
              >
                <AccordionTrigger className="px-5 py-4 text-left text-base md:text-lg font-semibold text-primary hover:no-underline hover:bg-muted/50 transition-colors [&[data-state=open]]:bg-muted/30">
                  <span className="pr-4">
                    {topicIndex + 1}. {topic.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pt-2">
                  <Accordion type="multiple" className="space-y-2">
                    {topic.subtopics.map((subtopic, subIndex) => (
                      <AccordionItem
                        key={subIndex}
                        value={`subtopic-${topicIndex}-${subIndex}`}
                        className="border border-border/60 rounded-md overflow-hidden bg-background"
                      >
                        <AccordionTrigger className="px-4 py-3 text-left text-sm md:text-base font-medium text-foreground hover:no-underline hover:bg-muted/40 transition-colors">
                          <span className="pr-4">{subtopic.name}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3 pt-1">
                          <p className={`text-sm leading-relaxed ${subtopic.description ? "text-foreground/80" : "text-muted-foreground italic"}`}>
                            {subtopic.description || "Coming soon"}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PreviewAbstractTopics;
