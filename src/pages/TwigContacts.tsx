import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Mail } from "lucide-react";
import { twigContacts } from "@/data/twigContacts";

// Hidden page: reachable only by direct URL. Not linked in navigation,
// not listed in sitemap.xml / llms.txt, and marked noindex, nofollow.
const TwigContacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="TWIG Contacts"
        description="TWIG contacts for TERMIS-AM 2026."
        noindex
      />
      <Header />
      <PageHeader title="TWIG Contacts" />

      <main id="main">
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
              {twigContacts.map((group) => (
                <article
                  key={group.group}
                  className="rounded-2xl border border-border bg-card p-6 shadow-card"
                >
                  <h2 className="font-display text-xl font-bold text-primary mb-4">
                    {group.group}
                  </h2>
                  <ul className="space-y-3">
                    {group.contacts.map((person) => (
                      <li key={person.email} className="flex flex-col">
                        <span className="font-semibold text-foreground">{person.name}</span>
                        <a
                          href={`mailto:${person.email}`}
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary break-all"
                        >
                          <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                          {person.email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TwigContacts;
