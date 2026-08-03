import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Mail } from "lucide-react";

const LateBreakingAbstractSubmission = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Late Breaking Abstract Submission"
        description="Late breaking abstract submission instructions and guidelines for TERMIS-AM 2026."
       
      />
      <Header />
      <PageHeader title="LATE BREAKING ABSTRACT SUBMISSION" />

      <main id="main" className="container mx-auto px-4 py-12 max-w-4xl">
        <p className="text-foreground/80 leading-relaxed mb-6">
          The 2026 TERMIS-AM Conference will feature an outstanding scientific program bringing together national and international scientists, clinicians, industry leaders, post-doctoral fellows, graduate students, entrepreneurs, and representatives of government-funded agencies engaged in the fields of tissue engineering and regenerative medicine.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b pb-2">Abstract Consideration</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          Experts from academia, industry, and government are invited to present timely research for the successful implementation of technologies in all areas of tissue engineering and regenerative medicine for consideration for the 2026 TERMIS-AM Conference.
        </p>

        <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 flex items-center gap-3 mb-8">
          <AlertCircle className="h-5 w-5 text-accent shrink-0" />
          <p className="text-foreground/90 font-medium">
            Late Breaking Abstracts (LBA) must be submitted online through the abstract submission portal until <strong>August 17, 2026, 2025 11:59 PM Central Time</strong>.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Button variant="gold" size="lg" asChild>
            <a href="https://cpaper.ctimeetingtech.com/termisam26/login" target="_blank" rel="noopener noreferrer">Click Here for ABSTRACT SUBMISSION</a>
          </Button>
        </div>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b pb-2">ABSTRACT GUIDELINES</h2>
        <Card className="mb-10">
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2 text-sm text-foreground/80">
              <li>All abstracts must be written in English.</li>
              <li>Abstracts can only be submitted online via the conference website. This is the ONLY option for abstract submission.</li>
              <li>Define all abbreviations and concepts in your abstract at first use.</li>
              <li>Always make sure to check the final abstract with the system's preview function before submission and edit or replace as necessary. It is the author's responsibility to submit a correct abstract. Any errors in spelling, grammar or scientific fact will be reproduced as typed by the author.</li>
              <li>The presenting author is required to ensure that all co-authors are aware of the content of the abstract before submission of the abstract.</li>
              <li>Only LB abstracts for which presenting authors have paid the conference registration fees by <strong>September 18, 2026</strong> will be included in the Scientific Program.</li>
              <li>LB abstracts will not be published in the Tissue Engineering Journal.</li>
              <li>There is no fee to submit an abstract.</li>
              <li>All abstract submitters including presenting authors are expected to pay their own travel expenses and conference registration fees.</li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b pb-2">SUBMISSION INSTRUCTIONS</h2>
        <Card className="mb-10">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl text-primary">Abstract Preparation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-sm text-foreground/80">
            <p><strong>Abstract Title:</strong> The title should be brief, clearly indicating the nature of the presentation of max 25 words. Do not place a period at the end of the title.</p>
            <p>
              <strong>Abstract Topic & Optional Topics:</strong> Please select the category that aligns best with your submission. Click{" "}
              <a href="https://am2026.termis.org/late-breaking-abstract-topics" target="_blank" rel="noopener noreferrer" className="text-gold-text underline font-medium">HERE</a>{" "}
              to see the full list of LB abstract topics.
            </p>
            <p><strong>Presentation Preference:</strong> Choose your preferred method of presentation (Oral, Poster, or Oral or Poster). After the abstract assessment process, the Scientific Advisory Committee will determine whether the abstract will be accepted into the scientific program and for which presentation type. Consideration will be given to the author's preference.</p>
            <p><strong>Authors:</strong> Provide full contact information (name, affiliation and e-mail) for each listed author. Please enter the information in the designated fields. This information will be separate from the abstract body.</p>
            <p><strong>Abstract Body:</strong> The abstract should clearly describe the nature of the research and the problem it addresses, using language accessible to the multidisciplinary tissue engineering community. The abstract should summarize the: Purpose/Objectives, Methodology, Results, Conclusion/Significance. These four sections together should not exceed 350 words, excluding authors, disclosures, and references. References and acknowledgements are not required.</p>
            <p><strong>Figure:</strong> A maximum of one figure may be uploaded per abstract, and only in the Results section. The file size must not exceed 500 KB, and the maximum dimensions are 600 (width) × 800 (height) pixels. Accepted formats are JPG, JPEG, JPN, and PNG. The figure legend may be included either within the figure file or in the Results section of the abstract. A legend embedded in the figure does not count toward the 350-word limit, whereas a legend included in the abstract text does count toward this limit.</p>
            <p><strong>Demographics:</strong> Please complete the demographic information if you feel comfortable. These questions help us promote diversity among presenters. You may also indicate if you are a Student or Young Investigator.</p>
            <p><strong>Disclosure Information:</strong> To allow colleagues to properly evaluate the information and opinions presented, authors must disclose any potential conflicts of interest. This includes personal or professional relationships or circumstances that might reasonably influence the author's views. Examples include, but are not limited to: Stock options or bond holdings in a for-profit corporation or self-directed pension plan, Employment (full or part-time), Ownership or partnership, Consulting fees or other remuneration (payment), Non-remunerative positions of influence such as officer, board member, trustee, or public spokesperson, Receipt of royalties, Speakers bureau. If you do not have anything to disclose, you must indicate this on the online abstract submission form. Disclosure information does not affect the review process.</p>
            <p><strong>Preview & Submit:</strong> If any required fields are missing, a message will appear in red. Please go back and make corrections. When ready, click Finish Submission to submit your abstract. You may edit your abstract until <strong>August 17, 2026, 11:59 PM Central Time</strong>. After the deadline, no further edits can be made.</p>
          </CardContent>
        </Card>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-primary">Abstract Withdrawals</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-foreground/80 flex-1">
              If you must withdraw your abstract, the 2026 TERMIS-AM Conference Secretariat must be notified in writing at least two months prior to the conference at:{" "}
              <br />
              <a href="mailto:mrodic@kenes.com" className="text-gold-text underline inline-flex items-center gap-1">
                <Mail className="h-3 w-3" />mrodic@kenes.com
              </a>
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
              For additional information on abstract content, format, or submission procedure, contact: <strong>2026 TERMIS-AM Conference Secretariat</strong> at:{" "}
              <a href="mailto:mrodic@kenes.com" className="text-gold-text underline inline-flex items-center gap-1">
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

export default LateBreakingAbstractSubmission;
