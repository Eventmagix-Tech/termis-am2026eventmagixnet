import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Wrench, Mail, Calendar, ExternalLink, Download } from "lucide-react";

const SessionWorkshopSubmission = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        title="Call for Sessions & Workshops"
        subtitle="TERMIS-AM 2026 Annual Conference & Exhibition"
      />

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="bg-muted/50 rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Call for Sessions & Workshops
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TERMIS-AM Chapter 2026 invites individuals, TWIGs, societies, and workgroups with purposes related to TERMIS society aims to submit session and workshop proposals for the annual conference in New Orleans, LA.
              </p>
              
              <div className="flex items-center gap-3 bg-accent/10 rounded-lg p-4 border border-accent/20">
                <Calendar className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Session Submission Deadline</p>
                  <p className="text-muted-foreground">February 23, 2026</p>
                </div>
              </div>
            </div>

            {/* Submission Types */}
            <div className="grid md:grid-cols-1 gap-6 mb-8">
              
              {/* TWIG Session Proposals */}
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    1. Conference TWIG Session Proposals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    TWIG (Thematic Interest Working Group) sponsored session proposals should follow the TWIG session proposal guidelines. If your session proposal is TWIG-sponsored, please use the TWIG session proposal form.
                  </p>
                  <Button variant="outline" asChild className="gap-2">
                    <a href="/documents/TERMIS-AM-2026-TWIG-Session-Proposal-Instructions.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4" />
                      TWIG Proposal Guidelines
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* General Session Proposals */}
              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-secondary" />
                    </div>
                    2. Conference General Session Proposals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    If your proposal is not TWIG-sponsored, please use the general session proposal form. General session proposals are open to all individuals and groups aligned with TERMIS society aims.
                  </p>
                  <Button variant="outline" asChild className="gap-2">
                    <a href="/documents/TERMIS-AM-2026-General-Session-Proposal-Instructions.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4" />
                      General Session Proposal Guidelines
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Pre-Conference Workshop Proposal */}
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-accent" />
                    </div>
                    3. Pre-Conference Workshop Proposal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Pre-conference workshops provide hands-on learning opportunities and in-depth exploration of specific topics. Workshops are typically held on the first day of the conference.
                  </p>
                  <Button variant="outline" asChild className="gap-2">
                    <a href="/documents/TERMIS-AM-2026-Workshop-Proposal-Instructions.pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4" />
                      Workshop Proposal Guidelines
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Submission Button */}
            <div className="bg-muted/50 rounded-2xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">
                Submit Your Proposal
              </h3>
              <div className="flex justify-center">
                <Button size="lg" asChild className="gap-2">
                  <a href="https://cpaper.ctimeetingtech.com/termisam26/login" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Session & Workshop Proposal Submission
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions regarding session or workshop organization, please contact us:
              </p>
              <a 
                href="mailto:mrodic@kenes.com" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                mrodic@kenes.com
              </a>
              <p className="text-muted-foreground mt-6">
                We thank you for your interest in proposing a session and we are looking forward to welcoming you to New Orleans in November 2026.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SessionWorkshopSubmission;
