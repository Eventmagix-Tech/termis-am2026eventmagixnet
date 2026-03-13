import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallForAbstracts = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Call for Abstracts"
        description="Submit your abstract for the TERMIS-AM 2026 conference in New Orleans. Review submission guidelines, scientific topics, and important deadlines."
      />
      <Header />
      <PageHeader title="Call for Abstracts" />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Intro */}
        <section className="mb-8">
          <p className="text-foreground/80 leading-relaxed mb-6">
            The 2026 TERMIS-AM Conference will feature an outstanding scientific program bringing together national and international scientists, clinicians, industry leaders, post-doctoral fellows, graduate students, entrepreneurs, and representatives of government-funded agencies engaged in the fields of tissue engineering and regenerative medicine.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-3">Abstract Consideration</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Experts from academia, industry, and government are invited to present timely research for the successful implementation of technologies in all areas of tissue engineering and regenerative medicine for consideration for the 2026 TERMIS-AM Conference.
          </p>

          {/* Deadline Alert */}
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-accent shrink-0" />
            <p className="text-foreground/90 font-medium">
              Abstracts must be submitted online through the abstract submission portal until{" "}
              <Badge variant="default" className="ml-1 bg-accent text-white text-sm">
                May 11, 2026 11:59 PM Central Time
              </Badge>
            </p>
          </div>
        </section>

        {/* Abstract Submission Button */}
        <div className="text-center mb-10">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
            <a href="https://cpaper.ctimeetingtech.com/termisam26/login" target="_blank" rel="noopener noreferrer">
              Abstract Submission Portal
            </a>
          </Button>
        </div>

        {/* Abstract Guidelines Card */}
        <section className="mb-10">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-primary">Abstract Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-foreground/80">
              <ul className="list-disc pl-5 space-y-2">
                <li>All abstracts must be written in English.</li>
                <li>Abstracts can only be submitted online via the conference website. This is the ONLY option for abstract submission.</li>
                <li>Define all abbreviations and concepts in your abstract at first use.</li>
                <li>Always make sure to check the final abstract with the system's preview function before submission and edit or replace as necessary. It is the author's responsibility to submit a correct abstract. Any errors in spelling, grammar or scientific fact will be reproduced as typed by the author.</li>
                <li>The presenting author is required to ensure that all co-authors are aware of the content of the abstract before submission of the abstract.</li>
                <li>Only abstracts for which presenting authors have paid the conference registration fees by July 30, 2026 will be included in the Scientific Program and in the Tissue Engineering Journal.</li>
                <li>There is no fee to submit an abstract.</li>
                <li>All abstract submitters including presenting authors are expected to pay their own travel expenses and conference registration fees.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Submission Instructions Accordion */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-primary mb-4">Submission Instructions</h2>
          <h3 className="text-lg font-semibold text-foreground mb-3">Abstract Preparation</h3>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="title">
              <AccordionTrigger className="text-primary font-semibold">Title</AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm">
                The title should be brief, clearly indicating the nature of the presentation of max 25 words. Do not place a period at the end of the title.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="topic">
              <AccordionTrigger className="text-primary font-semibold">Topic</AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm">
                Please select the main topic of your abstract. Click{" "}
                <a href="https://cpaper.ctimeetingtech.com/termisam26/login" target="_blank" rel="noopener noreferrer" className="text-accent underline font-medium">
                  HERE
                </a>{" "}
                to see a full list of the abstract categories.
                <div className="mt-3 bg-muted/50 border border-border rounded-md p-3">
                  <p className="font-semibold text-foreground mb-1">Important</p>
                  <p>The primary topic is not guaranteed. The Scientific Advisory Committee reserves the right to change the abstract category during the abstract assessment process without notifying the author(s). Sessions are slotted based on the number and quality of abstracts submitted, not all proposed sessions may appear in the final program.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="optional-topics">
              <AccordionTrigger className="text-primary font-semibold">Optional Topics</AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm">
                Please select a 2ⁿᵈ and 3ʳᵈ topic that best align with your submission.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="presentation-preference">
              <AccordionTrigger className="text-primary font-semibold">Presentation Preference</AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm">
                Please choose your preferred method of presentation (Oral, Poster, or Oral or Poster). Your preference will be noted by the reviewers. The final determination will be made by the Scientific Advisory Committee.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="authors">
              <AccordionTrigger className="text-primary font-semibold">Authors</AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm">
                Provide full contact information (name, affiliation and e-mail) for each author listed. Please enter the information in the designated fields. This information will be separate from the abstract body.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="abstract-body">
              <AccordionTrigger className="text-primary font-semibold">Abstract Body</AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm">
                <p className="mb-2">The abstract should clearly describe the nature of the research and the problem it addresses, using language accessible to the multidisciplinary tissue engineering community. The abstract should summarize the:</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Purpose/Objectives</li>
                  <li>Methodology</li>
                  <li>Results</li>
                  <li>Conclusion/Significance</li>
                </ul>
                <p>These four sections together may not exceed 350 words, excluding authors, disclosures, and references. References and acknowledgements are not required. Graphs and images are not allowed.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="publication">
              <AccordionTrigger className="text-primary font-semibold">Publication</AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm">
                Abstracts will be published in the Tissue Engineering Journal. You may choose to opt out of publication.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="demographics">
              <AccordionTrigger className="text-primary font-semibold">Demographics</AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm">
                Please complete the demographic information if you feel comfortable. This questions help us promote diversity among presenters. You may also select if you are a Student or Young Investigator here.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="disclosure">
              <AccordionTrigger className="text-primary font-semibold">Disclosure Information</AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm">
                <p className="mb-2">To allow colleagues to properly evaluate the information and opinions presented, authors must disclose any potential conflicts of interest. This includes personal or professional relationships or circumstances that might reasonably influence the author's views. Examples include, but are not limited to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Stock options or bond holdings in a for-profit corporation or self-directed pension plan</li>
                  <li>Employment (full or part-time)</li>
                  <li>Ownership or partnership</li>
                  <li>Consulting fees or other remuneration (payment)</li>
                  <li>Non-remunerative positions of influence such as officer, board member, trustee, or public spokesperson</li>
                  <li>Receipt of royalties</li>
                  <li>Speakers bureau</li>
                </ul>
                <p>If you do not have anything to disclose, you must indicate this on the online abstract submission form. Disclosure information does not affect the review process.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="preview-submit">
              <AccordionTrigger className="text-primary font-semibold">Preview & Submit</AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-sm">
                If any required fields are missing, a message will appear in red. Please go back and make corrections. When ready, click Finish Submission to submit your abstract. You may edit your abstract until May 11, 2026, 11:59 PM Central Time. After the deadline, no further edits can be made.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Bottom 3-Column Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-primary">Abstract Withdrawals</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/80 flex-1">
              If you must withdraw your abstract, the 2026 TERMIS-AM Conference Secretariat must be notified in writing at least two months prior to the conference at:{" "}
              <a href="mailto:mrodic@kenes.com" className="text-accent underline inline-flex items-center gap-1">
                <Mail className="h-3 w-3" />mrodic@kenes.com
              </a>
              . If notification is received later, the abstract cannot be removed from the TERMIS publication.
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-primary">Registration Requirements</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/80 flex-1">
              Accepted abstract presenters are expected to pay their own travel, lodging, and conference registration fees. Presentation dates cannot be requested.
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-primary">For More Information</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/80 flex-1">
              For additional information on abstract content, format, or submission procedure, contact: 2026 TERMIS-AM Conference Secretariat at:{" "}
              <a href="mailto:mrodic@kenes.com" className="text-accent underline inline-flex items-center gap-1">
                <Mail className="h-3 w-3" />mrodic@kenes.com
              </a>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CallForAbstracts;
