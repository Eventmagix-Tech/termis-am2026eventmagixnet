import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const RisingStarsApplication = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Rising Stars Application"
        description="Apply to the Rising Stars of TERMIS-AM 2026 program. Recognizing outstanding early-career independent investigators in tissue engineering and regenerative medicine."
      />
      <Header />
      <PageHeader title="Rising Stars Application" />

      <main id="main" className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-lg text-foreground space-y-4 mb-8">
          <p className="font-bold text-primary">Recognizing the Next Generation of Leaders in Tissue Engineering and Regenerative Medicine</p>
          <p>
            TERMIS-Americas is pleased to launch the inaugural <strong>Rising Stars of TERMIS-AM</strong> initiative at the <strong>TERMIS-AM 2026</strong>.
          </p>
          <p>
            The Rising Stars of TERMIS-AM program is designed to recognize and showcase outstanding early-career independent investigators who are advancing the fields of tissue engineering and regenerative medicine through innovative research, emerging leadership, and meaningful contributions to the scientific community.
          </p>
          <p>
            Selected Rising Stars will be invited to present their work during a dedicated <strong>Rising Stars of TERMIS-AM Session</strong> at the 2026 Annual Conference, providing a platform to highlight exciting scientific directions and the investigators who are helping shape the future of the field.
          </p>
        </div>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Who Should Apply?</h2>
        <div className="text-lg text-foreground space-y-4 mb-4">
          <p>
            Applications are invited from promising early-career investigators working across the broad spectrum of tissue engineering, regenerative medicine, and related fields.
          </p>
          <p>Candidates must:</p>
        </div>
        <ul className="list-disc ml-8 space-y-2 mb-6 text-lg text-foreground">
          <li>Hold an <strong>Assistant Professor or equivalent independent faculty position</strong>;</li>
          <li>Be <strong>pre-tenure</strong> at the time of application;</li>
          <li>Lead or be establishing an independent research program relevant to tissue engineering, regenerative medicine, or related areas; and</li>
          <li>Be available to attend the <strong>TERMIS-AM 2026 Annual Conference &amp; Exhibition in New Orleans</strong> and present in person if selected.</li>
        </ul>
        <p className="text-lg text-foreground mb-6">
          Researchers from the breadth of disciplines represented within the TERMIS community are encouraged to apply.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Application Requirements</h2>
        <p className="text-lg text-foreground mb-4">Candidates should submit the following materials:</p>
        <div className="text-lg text-foreground space-y-4 mb-6">
          <div>
            <p className="font-bold">1. Scientific Abstract</p>
            <p>
              An abstract of max <strong>350 words</strong> and a <strong>figure</strong> describing the candidate's research to be considered for presentation during the Rising Stars session.
            </p>
            <p>
              The abstract should clearly communicate the significance, innovation, approach, and impact of the work and should align with the scientific scope of TERMIS.
            </p>
          </div>
          <div>
            <p className="font-bold">2. Statement of Contribution</p>
            <p>
              A brief statement (maximum half a page) describing the candidate's contributions to TERMIS or the broader tissue engineering and regenerative medicine community.
            </p>
          </div>
          <div>
            <p className="font-bold">3. NIH-Style Biosketch or Curriculum Vitae</p>
            <p>
              A current <strong>NIH-style biosketch or abbreviated CV (maximum five (5) pages)</strong>, highlighting:
            </p>
          </div>
        </div>
        <ul className="list-disc ml-8 space-y-2 mb-6 text-lg text-foreground">
          <li>Education and training;</li>
          <li>Current academic appointment;</li>
          <li>Research accomplishments and selected publications;</li>
          <li>Funding and/or other evidence of research independence, as applicable;</li>
          <li>Awards and honors; and</li>
          <li>Relevant professional and scientific activities.</li>
        </ul>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Rising Stars of TERMIS-AM 2026</h2>
        <p className="text-lg text-foreground mb-4">Selected candidates will:</p>
        <ul className="list-disc ml-8 space-y-2 mb-4 text-lg text-foreground">
          <li>Be recognized as <strong>Rising Stars of TERMIS-AM 2026</strong>;</li>
          <li>Deliver an invited presentation during the dedicated <strong>Rising Stars of TERMIS-AM Session</strong> at the TERMIS-AM 2026;</li>
        </ul>
        <p className="text-lg text-foreground mb-6">
          Selected candidates must attend the conference <strong>in person</strong> to participate in the Rising Stars session.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Important Dates</h2>
        <div className="text-lg text-foreground space-y-2 mb-6">
          <p><strong>Call for Rising Stars Opens:</strong> August 12, 2026</p>
          <p><strong>Application Deadline:</strong> September 11, 2026</p>
        </div>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">How to Apply</h2>
        <div className="text-lg text-foreground space-y-4 mb-6">
          <p>
            Applications must be submitted through the TERMIS-AM 2026 Rising Stars submission portal by the stated deadline.
          </p>
          <p>Applicants should prepare the following materials before beginning their submission:</p>
        </div>
        <ol className="list-decimal ml-8 space-y-2 mb-8 text-lg text-foreground">
          <li>Scientific abstract (with figure upload)</li>
          <li>Statement of Contribution</li>
          <li>NIH-style biosketch or abbreviated CV (<strong>maximum 5 pages</strong>)</li>
        </ol>

        <div className="text-center my-10">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              APPLY FOR RISING STARS OF TERMIS-AM 2026
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Submission portal link will be added here once available.
          </p>
        </div>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Questions?</h2>
        <div className="text-lg text-foreground space-y-4 mb-6">
          <p>
            For questions regarding the Rising Stars of TERMIS-AM program or the application process, please contact:
          </p>
          <p>
            <strong>TERMIS-AM 2026 Scientific Secretariat</strong>
            <br />
            <a href="mailto:mrodic@kenes.com" className="text-primary hover:text-accent underline-offset-4 hover:underline">
              mrodic@kenes.com
            </a>
          </p>
          <p>
            We look forward to recognizing the Rising Stars of TERMIS-AM 2026 and celebrating the emerging investigators who are shaping the future of tissue engineering and regenerative medicine.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RisingStarsApplication;
