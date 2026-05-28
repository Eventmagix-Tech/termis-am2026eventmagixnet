import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { AlertCircle, Download, Mail } from "lucide-react";
import wfirmLogo from "@/assets/wfirm-logo.webp";

const APPLICATION_FORM_URL = "/documents/WFIRM_YIA_Application_form_2026.docx";
const CONTACT_EMAIL = "regenmed@advocatehealth.org";

const WfirmYoungInvestigatorAwards = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="WFIRM Young Investigator Awards"
        description="Wake Forest Institute for Regenerative Medicine Young Investigator Award at TERMIS-AM 2026. Application deadline: August 1, 2026."
      />
      <Header />
      <PageHeader
        title="WFIRM Young Investigator Awards"
        subtitle="Wake Forest Institute for Regenerative Medicine · TERMIS-AM 2026"
      />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-[240px_1fr] gap-8 items-start">
          <div className="flex justify-center md:justify-start md:sticky md:top-24">
            <img
              src={wfirmLogo}
              alt="Wake Forest School of Medicine - Institute for Regenerative Medicine"
              className="w-full max-w-[220px] h-auto"
            />
          </div>
          <div className="text-base md:text-lg text-foreground space-y-5">
          <p>
            The Wake Forest Institute for Regenerative Medicine is committed to developing and
            disseminating novel therapies for the repair and replacement of diseased tissues and
            organs. One way to achieve this goal is to foster the careers of young investigators to
            encourage them to find solutions to problems in regenerative medicine. As part of this
            effort, the <strong>Wake Forest Institute for Regenerative Medicine Young Investigator
            Award</strong> was established in 2008 to recognize outstanding achievements by members
            of the Tissue Engineering and Regenerative Medicine International Society (TERMIS) who
            are in the early stages of a career in regenerative medicine.
          </p>
          <p>
            The <strong>Wake Forest Institute for Regenerative Medicine Young Investigator Award</strong>{" "}
            will be presented during the TERMIS AM meeting (November 15-18, 2026) to two (2)
            individuals in the early stages of their research careers (one (1) graduate student and
            one (1) post-doctoral fellow). Each awardee will be invited to present their conference
            abstract during the TERMIS-AM meeting and will receive an award certificate and a
            monetary award of $2,500 (U.S.).
          </p>
          <p>
            Individuals interested in applying for this award should submit the following documents
            via e-mail to Dr. Sean Murphy (
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline font-medium">
              {CONTACT_EMAIL}
            </a>
            ) by <u>August 1, 2026</u>:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Attached application form</li>
            <li>Applicant's current CV</li>
            <li>A copy of the applicant's TERMIS-AM 2026 abstract</li>
            <li>A one-page Personal Statement describing the applicant's career goals</li>
            <li>One letter of recommendation</li>
          </ul>
          <p>
            All eligible individuals are encouraged to apply. To be eligible for the award, the
            applicant must meet the following <strong><u>criteria</u></strong>:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Currently enrolled as a student in an advanced degree program (Ph.D., M.D., or equivalent) OR currently a post-doctoral fellow</li>
            <li>Member of TERMIS (student or regular membership)</li>
            <li>Actively involved in any area of regenerative medicine research</li>
            <li>Have or will have submitted an abstract for TERMIS-AM 2026</li>
            <li>Be in attendance at TERMIS-AM in New Orleans, Louisiana</li>
            <li>No affiliation with Wake Forest University or Wake Forest University Health Sciences</li>
          </ul>
        </div>
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 flex items-start gap-3 mt-8">
          <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-1" />
          <p className="text-foreground font-semibold">
            The award winners will be selected by a review panel, and applicants will be informed of
            the decision by <span className="underline">September 1, 2026</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-10">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href={APPLICATION_FORM_URL} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Application Form
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-bold text-lg px-8 py-6 rounded-lg"
          >
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail className="mr-2 h-5 w-5" />
              Email Dr. Sean Murphy
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WfirmYoungInvestigatorAwards;
