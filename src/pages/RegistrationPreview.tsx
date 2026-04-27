import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RegistrationPreview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Registration"
        description="Registration details, fees, and deadlines for TERMIS-AM 2026."
        noindex={true}
      />
      <Header />

      <main className="flex-1">
        <PageHeader title="Registration" />

        {/* How to Register */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">How to Register</h2>
              <p className="text-lg text-foreground/80 mb-4">
                You may register through the "Register Here" button below. Each Participant must use a separate registration form.
              </p>

              <div className="mb-8">
                <Button variant="gold" size="xl" asChild>
                  <a href="https://kenes.eventsair.com/termis-am-2026/mainform" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Register Here
                  </a>
                </Button>
              </div>

              <p className="text-foreground/80 mb-10">
                Registration fees, payment details and further information are given below. For any further queries, you may contact the annual conference organising secretariat through the below communication channels.
              </p>

              {/* Annual Conference Secretariat */}
              <div className="bg-muted/50 rounded-xl p-8 shadow-lg border border-accent/10 mb-12">
                <h3 className="text-2xl font-bold text-primary mb-2">Annual Conference Secretariat</h3>
                <p className="text-foreground/70 mb-1 font-semibold">Kenes Group</p>
                <p className="text-foreground/70 mb-1">Office: Kenes M+</p>
                <h4 className="text-lg font-bold text-primary mt-4 mb-2">Contact Person</h4>
                <p className="text-foreground/80 mb-2">
                  Ms. Neyir Seda Utugen | Attendee Services & Event Technology Manager
                </p>
                <a
                  href="mailto:nutugen@kenes.com"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  <Mail className="h-5 w-5" />
                  nutugen@kenes.com
                </a>
              </div>

              {/* SECTION 1: Registration Categories & Fees */}
              <h2 className="text-2xl font-bold text-primary mb-4">Registration Categories & Fees</h2>
              <Accordion type="multiple" className="space-y-3 mb-12">
                <AccordionItem value="member" className="border rounded-xl px-6 shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                    Member Registration
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-primary">
                            <TableHead className="text-white font-semibold min-w-[200px]">Registration Categories & Fees</TableHead>
                            <TableHead className="text-white font-semibold text-center">Early-Bird Registration (Until September 18th)</TableHead>
                            <TableHead className="text-white font-semibold text-center">Regular Registration (September 19th – November 14th)</TableHead>
                            <TableHead className="text-white font-semibold text-center">Onsite Registration (November 15th – 18th)</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow><TableCell className="font-medium">Member Full Investigator</TableCell><TableCell className="text-center">USD 750</TableCell><TableCell className="text-center">USD 850</TableCell><TableCell className="text-center">USD 950</TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Member Students (Pre-doctoral)</TableCell><TableCell className="text-center">USD 475</TableCell><TableCell className="text-center">USD 550</TableCell><TableCell className="text-center">USD 650</TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Member Young Investigator/ Trainee</TableCell><TableCell className="text-center">USD 525</TableCell><TableCell className="text-center">USD 600</TableCell><TableCell className="text-center">USD 700</TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Member Emerging Countries (Group A)***</TableCell><TableCell className="text-center">USD 625</TableCell><TableCell className="text-center">USD 625</TableCell><TableCell className="text-center">USD 725</TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Member Emerging Countries - Student (Group A)</TableCell><TableCell className="text-center">USD 425</TableCell><TableCell className="text-center">USD 500</TableCell><TableCell className="text-center">USD 600</TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Member Emerging Countries - YI (Group A)</TableCell><TableCell className="text-center">USD 475</TableCell><TableCell className="text-center">USD 550</TableCell><TableCell className="text-center">USD 650</TableCell></TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="registration-plus" className="border rounded-xl px-6 shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                    Registration + (Registration + 1 year membership for TERMIS)
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-primary">
                            <TableHead className="text-white font-semibold min-w-[200px]">Registration Categories & Fees</TableHead>
                            <TableHead className="text-white font-semibold text-center">Early-Bird Registration (Until September 18th)</TableHead>
                            <TableHead className="text-white font-semibold text-center">Regular Registration (September 19th – November 14th)</TableHead>
                            <TableHead className="text-white font-semibold text-center">Onsite Registration (November 15th – 18th)</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium"><div>Regular Membership</div><div className="text-xs text-muted-foreground">(annual dues: $130.00 USD)</div></TableCell>
                            <TableCell className="text-center">USD 880</TableCell><TableCell className="text-center">USD 980</TableCell><TableCell className="text-center">USD 1,080</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium"><div>Regular Membership - Group A</div><div className="text-xs text-muted-foreground">(annual dues: $50.00 USD)</div></TableCell>
                            <TableCell className="text-center">USD 800</TableCell><TableCell className="text-center">USD 900</TableCell><TableCell className="text-center">USD 1,000</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium"><div>Student Membership / YI</div><div className="text-xs text-muted-foreground">(annual dues: $30.00 USD)</div></TableCell>
                            <TableCell className="text-center">USD 505</TableCell><TableCell className="text-center">USD 580</TableCell><TableCell className="text-center">USD 680</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium"><div>Student Membership - Group A</div><div className="text-xs text-muted-foreground">(annual dues: $15.00 USD)</div></TableCell>
                            <TableCell className="text-center">USD 490</TableCell><TableCell className="text-center">USD 565</TableCell><TableCell className="text-center">USD 665</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium"><div>YI Membership - Group A</div><div className="text-xs text-muted-foreground">(annual dues: $15.00 USD)</div></TableCell>
                            <TableCell className="text-center">USD 540</TableCell><TableCell className="text-center">USD 615</TableCell><TableCell className="text-center">USD 715</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium"><div>Emerging Countries - Group A</div><div className="text-xs text-muted-foreground">(annual dues: $50.00 USD)</div></TableCell>
                            <TableCell className="text-center">USD 675</TableCell><TableCell className="text-center">USD 675</TableCell><TableCell className="text-center">USD 775</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium"><div>Emerging Countries - Group A - Student</div><div className="text-xs text-muted-foreground">(annual dues: $15.00 USD)</div></TableCell>
                            <TableCell className="text-center">USD 440</TableCell><TableCell className="text-center">USD 515</TableCell><TableCell className="text-center">USD 615</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium"><div>Emerging Countries - Group A - YI</div><div className="text-xs text-muted-foreground">(annual dues: $15.00 USD)</div></TableCell>
                            <TableCell className="text-center">USD 490</TableCell><TableCell className="text-center">USD 565</TableCell><TableCell className="text-center">USD 656</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Emerging Countries - Group B</TableCell>
                            <TableCell className="text-center">USD 625</TableCell><TableCell className="text-center">USD 625</TableCell><TableCell className="text-center">USD 725</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Emerging Countries - Group B - Student</TableCell>
                            <TableCell className="text-center">USD 400</TableCell><TableCell className="text-center">USD 475</TableCell><TableCell className="text-center">USD 575</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Emerging Countries - Group B - YI</TableCell>
                            <TableCell className="text-center">USD 475</TableCell><TableCell className="text-center">USD 550</TableCell><TableCell className="text-center">USD 650</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    <div className="mt-8 space-y-4">
                      <h3 className="text-xl font-bold text-primary">Registration +</h3>
                      <h4 className="text-lg font-semibold text-foreground">Not a TERMIS member yet?</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        If you would like to become a member of TERMIS, please complete the <a href="https://termis.memberclicks.net/membership-application#!/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">membership application form</a>. If you are unable to login to the portal or have questions regarding membership please reach out to{' '}
                        <a href="mailto:swilburn@termis.org" className="text-blue-600 hover:underline font-medium">Sarah Wilburn</a>. Individuals that become new members of TERMIS will be uploaded to the 2026 TERMIS-AM Annual Conference registration database weekly. You will be able to register as a member for the conference the week after you become a member.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Save time and select the Registration + option when registering for the 2026 TERMIS-AM Annual Conference, this option combines 1 year of TERMIS membership and 2026 TERMIS-AM Annual Conference registration into 1 payment. Registering with the Registration + option gives you the member discount on registration.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="non-member" className="border rounded-xl px-6 shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                    Non-Member Registration
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-primary">
                            <TableHead className="text-white font-semibold min-w-[200px]">Registration Categories & Fees</TableHead>
                            <TableHead className="text-white font-semibold text-center">Early-Bird Registration (Until September 18th)</TableHead>
                            <TableHead className="text-white font-semibold text-center">Regular Registration (September 19th – November 14th)</TableHead>
                            <TableHead className="text-white font-semibold text-center">Onsite Registration (November 15th – 18th)</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow><TableCell className="font-medium">Non-Member Full Investigator</TableCell><TableCell className="text-center">USD 1,050</TableCell><TableCell className="text-center">USD 1,150</TableCell><TableCell className="text-center">USD 1,250</TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Non-Member Students (Pre-doctoral)</TableCell><TableCell className="text-center">USD 625</TableCell><TableCell className="text-center">USD 725</TableCell><TableCell className="text-center">USD 825</TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Non-Member Young Investigator/ Trainee</TableCell><TableCell className="text-center">USD 675</TableCell><TableCell className="text-center">USD 775</TableCell><TableCell className="text-center">USD 875</TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Non-Member Emerging Countries (Group A)***</TableCell><TableCell className="text-center">TBD</TableCell><TableCell className="text-center">TBD</TableCell><TableCell className="text-center">TBD</TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Non-Member Emerging Countries - Student (Group A)</TableCell><TableCell className="text-center">TBD</TableCell><TableCell className="text-center">TBD</TableCell><TableCell className="text-center">TBD</TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Non-Member Emerging Countries - Young Investigator/ Trainee (Group A)</TableCell><TableCell className="text-center">TBD</TableCell><TableCell className="text-center">TBD</TableCell><TableCell className="text-center">TBD</TableCell></TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="other" className="border rounded-xl px-6 shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                    Other Registration & Ticketed Events Pricing
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-primary">
                            <TableHead className="text-white font-semibold min-w-[300px]">Registration Categories</TableHead>
                            <TableHead className="text-white font-semibold text-center">Fee</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow><TableCell className="font-medium">Guest Pass for Sunday and Tuesday Receptions****</TableCell><TableCell></TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Exhibit Hall-Only Registration (promo code needed)</TableCell><TableCell></TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Student Volunteer (promo code needed)</TableCell><TableCell></TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Single Day Onsite Registrant</TableCell><TableCell></TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Preconference Workshops (per workshop, can select more than one)</TableCell><TableCell></TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Women in TERM Luncheon</TableCell><TableCell></TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">SYIS Peer Meet Mentor Lunch (SYIS only)</TableCell><TableCell></TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">SYIS Networking Event (SYIS only)</TableCell><TableCell></TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">SYIS Student Meet Mentor Lunch (SYIS only)</TableCell><TableCell></TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Conference Reception</TableCell><TableCell></TableCell></TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* SECTION 2: Definitions */}
              <h2 className="text-2xl font-bold text-primary mb-4">Definitions</h2>
              <Accordion type="multiple" className="space-y-3 mb-12">
                <AccordionItem value="reg-types" className="border rounded-xl px-6 shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                    Registration Types
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-foreground/80">
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Full Investigator</strong> registration is for individuals within academia or industry that do not qualify as a student or young investigator.</li>
                        <li><strong>Young Investigator/ Trainee</strong> – Young Investigators are defined as persons who are employed in the field of TERM, who are within 5 years of their terminal degree (BS, MS, PhD, MD etc.). Young Investigators should not hold an appointment as faculty, academic staff or group leader in a university/research institute or in industry. Young investigators are required to have their advisor/supervisor send a letter as proof of the bona fide status of the young investigator.</li>
                      </ul>
                      <p className="pl-6 text-foreground/80">If you've been away from research (e.g. for a career break, maternity leave, or long-term sick leave), TERMIS will take this into consideration with your application. If you've taken formal maternity, paternity, or adoption leave as the primary career, or long-term sick leave, TERMIS will provide an extra six months for each period of leave when we consider your postdoctoral experience.</p>
                      <ul className="list-disc pl-6 space-y-3">
                        <li><strong>Student:</strong> A student is any individual who is engaged as a graduate or undergraduate in a university or college program or as an MD resident and is actively interested in research in the field of TERM. Students are required to provide their university ID for verification of their undergraduate/graduate status.</li>
                        <li><strong>Guest</strong> – The guest pass is meant for spouses or family members of a registrant who are not in the industry and don't plan on being involved in sessions. Guests are only able to attend the Welcome Reception on Sunday, November 15, and the Conference Reception on Tuesday, November 17.</li>
                      </ul>

                      <div className="mt-6">
                        <h4 className="text-lg font-bold text-primary mb-3">Press Passes</h4>
                        <h5 className="font-semibold mb-2">Eligibility</h5>
                        <p className="mb-3">
                          Press passes are issued to individuals representing a recognized news organization, including journalists reporting for online media outlets and freelancers who contribute to such organizations. Individuals involved with public relations, marketing, sales, circulation, advertising, or any other non-editorial function including educational program developers (including CME writers and editors) or other individuals who are not actually reporting on the meeting are not eligible for press passes. TERMIS-AM prohibits the development of CME content based on information presented at its meeting. TERMIS-AM reserves the right to inspect the credentials of anyone requesting a press pass, and to refuse to issue a press pass. Generally, no more than five representatives per organization are issued credentials. TERMIS-AM does not make public any list of press attendees or their affiliations.
                        </p>
                        <p className="mb-3">
                          Media who produce a communications vehicle that is sponsored by a single organization or whose revenue for the publication or issue of a publication depends solely on coverage of the TERMIS-AM meeting are also ineligible to receive press passes. In addition, media who produce a communications vehicle that uses the TERMIS-AM name or logo to imply endorsement from the TERMIS-AM are also ineligible to receive press passes.
                        </p>
                        <p className="mb-3">
                          Individuals who receive exhibitor passes are not eligible for press passes.
                        </p>

                        <h5 className="font-semibold mb-2">Access</h5>
                        <p>
                          Credentialed media have access to all general sessions, including plenary, poster discussion, and concurrent sessions. Access to ticketed events with limited enrollment, such as early morning workshops, is restricted to ticket holders only. TERMIS-AM reserves the right to restrict attendance at any session. Press attendees are required to check in at the onsite press room upon arrival.
                        </p>
                      </div>

                      <div className="mt-6">
                        <h5 className="font-semibold mb-2">Developing/Emerging Countries</h5>
                        <p>
                          Registration is dependent on the country in which you currently reside, not your nationality. Countries listed within Groups A and B for residence (and work) are eligible for the emerging/developing country fee.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="emerging-countries" className="border rounded-xl px-6 shadow-sm">
                  <AccordionTrigger className="text-lg font-semibold text-primary hover:no-underline">
                    TERMIS Developing/Emerging Countries – Groups A and B
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 text-foreground/80">
                      <p className="mb-4">
                          TERMIS has announced changes to the category of developing/emerging countries. Three categories have been identified within the TERMIS membership based on geographical location. Membership is for those who are located in an established country within the remit of a continental chapter that has a developed scientific infrastructure. There is no change to the membership conditions within these countries which are, for the record:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                          <li><strong>(In Europe)</strong> Austria, Belgium, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Israel, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Monaco, Netherlands, Norway, Poland, Portugal, Romania, Russia, San Marino, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Turkey, United Kingdom.</li>
                          <li><strong>(In the Americas)</strong> Argentina, Canada, Puerto Rico, USA.</li>
                          <li><strong>(In Asia-Pacific)</strong> Australia, Bahrain, China, Chinese Taipei, Hong Kong, Japan, Korea, Kuwait, New Zealand, Qatar, Saudi Arabia, Singapore and United Arab Emirates.</li>
                        </ul>

                      <div>
                        <h4 className="text-lg font-bold text-primary mb-3">Waivers/Exemptions and Emerging Countries</h4>

                        <h5 className="font-semibold text-primary mb-2">Group A</h5>
                        <p className="mb-4">
                          The members within Group A are considered to be included within the emerging countries and will pay a reduced membership fee of $50 USD for full members and $15 USD for students/young investigators members. The countries included in this group are: (In Europe) Bulgaria, (In the Americas) Brazil and Mexico, and (In Asia-Pacific) India, Malaysia and Thailand.
                        </p>

                        <h5 className="font-semibold text-primary mb-2">Group B</h5>
                        <p className="mb-4">
                          The members within Group B are located within a country that has limited scientific infrastructure, or within a country that lies outside of the existing responsibility of continental chapters (i.e. most of Africa), such that individuals have limited prospects of belonging to a TERM society.
                        </p>
                        <p>
                          These individuals, on application, will become members of TERMIS Global, without payment of a membership fee. The countries included in Group B are: (In Europe) Albania, Armenia, Azerbaijan, Andorra, Bosnia & Herzegovina, Croatia, Georgia, Kosovo, Macedonia, Moldova, Montenegro, Ukraine (In the Americas) all Central America and Caribbean Countries. Bolivia, Chile, Colombia, Ecuador, Guyana, Paraguay, Peru, Suriname, Uruguay, Venezuela (In Asia-Pacific) all Oceania Countries (except Australia and New Zealand), Afghanistan, Bangladesh, Bhutan, Brunei, Cambodia, East Timor, Indonesia, Iran, Iraq, Jordan, Kazakhstan, Korea (North), Kyrgyzstan, Lebanon, Laos, Maldives, Mongolia, Myanmar, Nepal, Oman, Pakistan, Sri Lanka, Tajikistan, The Philippines, Turkmenistan, Uzbekistan, Vietnam, Yemen (In Africa) all African countries.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* SECTION 3: What is included - Static */}
              <h2 className="text-2xl font-bold text-primary mb-4">What is Included in the Registration Fee</h2>
              <div className="space-y-4 text-foreground/80 mb-12">
                <p>The registration fee for all the registration categories of the Conference includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access to all scientific sessions</li>
                  <li>Access to the posters' area</li>
                  <li>Access to the exhibition area</li>
                  <li>Meeting materials (Name badge, final program book, etc...)</li>
                  <li>Certificate of attendance</li>
                  <li>Coffee breaks as per the Meeting program</li>
                  <li>Welcome Reception (November 15th)</li>
                  <li>Conference Reception (November 17th)</li>
                </ul>
                <div className="mt-6">
                  <h4 className="font-semibold text-primary mb-2">Letter of Confirmation</h4>
                  <p>A confirmation letter will be sent to the submitted e-mail within one week of receipt of the total registration fee.</p>
                </div>
              </div>

              {/* SECTION 4: Cancellation Policy - Static */}
              <h2 className="text-2xl font-bold text-primary mb-4">Cancellation Policy</h2>
              <div className="space-y-4 text-foreground/80 mb-12">
                <h4 className="font-semibold text-primary mb-2">Refund Policy</h4>
                <p>For cancellations received by September 18, 2026, up to which date the registration fee will be refunded with a $100.00 USD deduction for administrative expenses.</p>
                <p>For cancellations received on and after September 19, 2026, the registration fee will be non-refundable.</p>
                <p>Refunds will be processed four to six weeks after the conference. Pre-paid no shows or early departures will not be refunded. Substitutions are permitted. Substitution requests must be made in writing (see info below).</p>
                <p>Canceling your hotel reservation does NOT cancel your conference registration and vice versa. If you dispute any charges to your credit card, there will be a dispute fee of $25.00 USD charged to your credit card account.</p>
                <p>A $25.00 USD process fee will be charged to any attendee who requests the original credit card charge be refunded and a new credit card processed for payment.</p>

                <h4 className="font-semibold text-primary mt-6 mb-2">Workshops</h4>
                <p>No refund will be granted, and full cancellation fees apply after September 18, 2026.</p>

                <h4 className="font-semibold text-primary mt-6 mb-2">Attendee Substitutions</h4>
                <p>
                  Substitution requests will be accepted until September 18, 2026. Notification of changes in the reservation and/or cancellations must be done in writing to the Conference Organizing Secretariat, to the attention of Ms. Neyir Seda Utugen (<a href="mailto:nutugen@kenes.com" className="text-accent hover:text-accent/80 underline">nutugen@kenes.com</a>).
                </p>
              </div>

              {/* SECTION 5: Payment Terms - Static */}
              <h2 className="text-2xl font-bold text-primary mb-4">Payment Terms</h2>
              <div className="space-y-4 text-foreground/80">
                <p>The official currency of the Conference is USD. Payments should be made in advance via bank transfer or via credit card. We regret that we are unable to accept any personal, company and/or bank cheques.</p>

                <h4 className="font-semibold text-primary mt-6 mb-2">Notice for INVOICE Revision Requests</h4>
                <p>Any modification of VAT number, address or financial documentation, requested after the issuing of the invoice or receipt, will result in an administrative fee of $25.00 USD.</p>

                <h4 className="font-semibold text-primary mt-6 mb-2">Credit Card Payment</h4>
                <p>Holders of Visa, Eurocard / Mastercard or Amex may use their credit cards for the charge of all fees. Please indicate card number, expiry date and security code on the registration form. Please note that daily exchange rates will be applied and slight differences on the total charged amount may arise due to fluctuations in the daily exchange rates.</p>

                <h4 className="font-semibold text-primary mt-6 mb-2">Bank Transfer Payment</h4>
                <p className="mb-4">Bank account details for TERMIS-AM 2026 Annual Conference are indicated below. Participants who prefer bank transfer payment are required to send the proof of payment to the Annual Conference Organizing Secretariat.</p>

                <div className="overflow-x-auto">
                  <Table>
                    <TableBody>
                      <TableRow className="bg-primary/5">
                        <TableCell className="font-bold text-primary w-[200px]">ACCOUNT HOLDER:</TableCell>
                        <TableCell>KENES INTERNATIONAL ORGANIZERS OF CONGRESSES LTD</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold text-primary">ACCOUNT NO (USD):</TableCell>
                        <TableCell>0206 00700319.45L</TableCell>
                      </TableRow>
                      <TableRow className="bg-primary/5">
                        <TableCell className="font-bold text-primary">IBAN (USD):</TableCell>
                        <TableCell>CH76 0020 6206 7003 1945 L</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold text-primary">BANK NAME:</TableCell>
                        <TableCell>UBS Switzerland AG</TableCell>
                      </TableRow>
                      <TableRow className="bg-primary/5">
                        <TableCell className="font-bold text-primary">BIC:</TableCell>
                        <TableCell>UBSWCHZH80A</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-bold text-primary">CATEGORY:</TableCell>
                        <TableCell>TERMISAM 2026 New Orleans, USA</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <p className="text-sm mt-4 italic">
                  *Please make your bank transfer for your registration fee, including the bank transfer charges. If the payment received by the organizing secretariat is less than the registration fee, the participants will be charged for the missing amount.
                </p>
                <p className="text-sm italic">
                  **Please indicate the name & surname of the participants and/or invoice number and/or reference number on the statement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RegistrationPreview;
