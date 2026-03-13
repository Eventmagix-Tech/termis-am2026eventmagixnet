import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, FileText, AlertTriangle, Mail, CheckCircle } from "lucide-react";

const CallForAbstracts = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Call for Abstracts"
        description="Submit your abstract for the TERMIS-AM 2026 conference in New Orleans. Review submission guidelines, scientific topics, and important deadlines."
      />
      <Header />
      <PageHeader
        title="Call for Abstracts"
        subtitle="Abstract Submission Instructions for TERMIS-AM 2026"
        tag="Scientific Program"
      />

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The 2026 TERMIS-AM Conference will feature an outstanding scientific program bringing together national and international scientists, clinicians, industry leaders, post-doctoral fellows, graduate students, entrepreneurs, and representatives of government-funded agencies engaged in the fields of tissue engineering and regenerative medicine.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Experts from academia, industry, and government are invited to present timely research for the successful implementation of technologies in all areas of tissue engineering and regenerative medicine for consideration for the 2026 TERMIS-AM Conference.
          </p>
        </section>

        {/* Key Deadline Card */}
        <Card className="mb-12 border-accent/30 bg-accent/5">
          <CardContent className="flex items-center gap-4 p-6">
            <CalendarDays className="h-10 w-10 text-accent shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-primary">Submission Deadline</h2>
              <p className="text-muted-foreground">
                Abstracts must be submitted online through the abstract submission portal until{" "}
                <strong className="text-primary">May 11, 2026, 11:59 PM Central Time</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <a
            href="https://cpaper.ctimeetingtech.com/termisam26/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
          >
            <FileText className="h-5 w-5" />
            Submit Your Abstract
          </a>
        </div>

        {/* Abstract Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Abstract Guidelines</h2>
          <Card className="bg-muted/50">
            <CardContent className="p-6 md:p-8">
              <ul className="space-y-3">
                {[
                  "All abstracts must be written in English.",
                  "Abstracts can only be submitted online via the conference website. This is the ONLY option for abstract submission.",
                  "Define all abbreviations and concepts in your abstract at first use.",
                  "Always check the final abstract with the system's preview function before submission. It is the author's responsibility to submit a correct abstract. Any errors in spelling, grammar, or scientific fact will be reproduced as typed by the author.",
                  "The presenting author must ensure that all co-authors are aware of the content of the abstract before submission.",
                  "Only abstracts for which presenting authors have paid the conference registration fees by July 30, 2026 will be included in the Scientific Program and in the Tissue Engineering Journal.",
                  "There is no fee to submit an abstract.",
                  "All abstract submitters including presenting authors are expected to pay their own travel expenses and conference registration fees.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Submission Instructions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Submission Instructions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2">Title</h3>
                <p className="text-muted-foreground text-sm">
                  The title should be brief, clearly indicating the nature of the presentation (max 25 words). Do not place a period at the end of the title.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2">Topic Selection</h3>
                <p className="text-muted-foreground text-sm">
                  Select the main topic of your abstract. You may also select a 2nd and 3rd topic that best align with your submission. The Scientific Advisory Committee reserves the right to change the abstract category during the assessment process.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2">Presentation Preference</h3>
                <p className="text-muted-foreground text-sm">
                  Choose your preferred method of presentation: Oral, Poster, or Oral or Poster. Your preference will be noted by the reviewers. The final determination will be made by the Scientific Advisory Committee.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2">Authors</h3>
                <p className="text-muted-foreground text-sm">
                  Provide full contact information (name, affiliation, and email) for each author listed. Please enter the information in the designated fields, separate from the abstract body.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Abstract Body */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Abstract Body</h2>
          <Card className="bg-muted/50">
            <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground mb-4">
                The abstract should clearly describe the nature of the research and the problem it addresses, using language accessible to the multidisciplinary tissue engineering community. The abstract should summarize the:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {["Purpose / Objectives", "Methodology", "Results", "Conclusion / Significance"].map((s) => (
                  <div key={s} className="bg-background border border-accent/20 rounded-lg p-3 text-center">
                    <span className="text-sm font-medium text-primary">{s}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                These four sections together may not exceed <strong>350 words</strong>, excluding authors, disclosures, and references. References and acknowledgements are not required. Graphs and images are not allowed.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Publication & Demographics */}
        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2">Publication</h3>
                <p className="text-muted-foreground text-sm">
                  Abstracts will be published in the Tissue Engineering Journal. You may choose to opt out of publication.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2">Demographics</h3>
                <p className="text-muted-foreground text-sm">
                  Please complete the demographic information if you feel comfortable. These questions help promote diversity among presenters. You may also select if you are a Student or Young Investigator.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Disclosure Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Disclosure Information</h2>
          <Card className="bg-muted/50">
            <CardContent className="p-6 md:p-8">
              <p className="text-muted-foreground mb-4">
                To allow colleagues to properly evaluate the information and opinions presented, authors must disclose any potential conflicts of interest. Examples include, but are not limited to:
              </p>
              <ul className="grid gap-2 md:grid-cols-2">
                {[
                  "Stock options or bond holdings in a for-profit corporation or self-directed pension plan",
                  "Employment (full or part-time)",
                  "Ownership or partnership",
                  "Consulting fees or other remuneration",
                  "Non-remunerative positions of influence (officer, board member, trustee, or public spokesperson)",
                  "Receipt of royalties",
                  "Speakers bureau",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mt-4">
                If you do not have anything to disclose, you must indicate this on the online abstract submission form. Disclosure information does not affect the review process.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Preview & Submit */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Preview & Submit</h2>
          <p className="text-muted-foreground">
            If any required fields are missing, a message will appear in red. Please go back and make corrections. When ready, click <strong>Finish Submission</strong> to submit your abstract. You may edit your abstract until <strong>May 11, 2026, 11:59 PM Central Time</strong>. After the deadline, no further edits can be made.
          </p>
        </section>

        {/* Withdrawal & Registration */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Abstract Withdrawals</h3>
                  <p className="text-muted-foreground text-sm">
                    If you must withdraw your abstract, the Conference Secretariat must be notified in writing at least two months prior to the conference at{" "}
                    <a href="mailto:mrodic@kenes.com" className="text-accent hover:underline">mrodic@kenes.com</a>.
                    If notification is received later, the abstract cannot be removed from the TERMIS publication.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-primary mb-2">Registration Requirements</h3>
              <p className="text-muted-foreground text-sm">
                Accepted abstract presenters are expected to pay their own travel, lodging, and conference registration fees. Presentation dates cannot be requested.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <Card className="border-accent/30 bg-accent/5">
          <CardContent className="flex items-center gap-4 p-6">
            <Mail className="h-8 w-8 text-accent shrink-0" />
            <div>
              <h3 className="font-semibold text-primary">For More Information</h3>
              <p className="text-muted-foreground text-sm">
                For additional information on abstract content, format, or submission procedure, contact the 2026 TERMIS-AM Conference Secretariat at{" "}
                <a href="mailto:mrodic@kenes.com" className="text-accent hover:underline font-medium">mrodic@kenes.com</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default CallForAbstracts;
