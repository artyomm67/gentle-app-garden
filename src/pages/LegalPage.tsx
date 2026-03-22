import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import CTAFooter from "@/components/CTAFooter";
import SiteBackdrop from "@/components/SiteBackdrop";
import { legalDocuments } from "@/data/siteContent";

const LegalPage = () => {
  const location = useLocation();
  const document = location.pathname === "/privacy" ? legalDocuments.privacy : legalDocuments.offer;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteBackdrop />
      <Header />
      <main className="relative z-10 pt-32 pb-20">
        <section className="container max-w-4xl">
          <Link to="/" className="mb-6 inline-flex rounded-full border border-border bg-secondary px-4 py-2 text-sm text-secondary-foreground transition-colors hover:bg-secondary/80">
            ← На главную
          </Link>

          <div className="glass-card rounded-[2rem] p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold text-primary">Документы</p>
            <h1 className="mb-6 text-3xl font-bold md:text-4xl">{document.title}</h1>
            <div className="space-y-5 text-base leading-8 text-foreground/90">
              {document.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CTAFooter />
    </div>
  );
};

export default LegalPage;