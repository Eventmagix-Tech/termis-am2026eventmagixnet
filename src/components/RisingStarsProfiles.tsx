import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { risingStars, type RisingStar } from "@/data/risingStars";

interface DocumentRun {
  text: string;
  bold?: boolean;
  italic?: boolean;
  href?: string;
}

export const DocumentText = ({ runs }: { runs: DocumentRun[] }) => (
  <>{runs.map((run, index) => {
    let content = <>{run.text}</>;
    if (run.bold) content = <strong>{content}</strong>;
    if (run.italic) content = <em>{content}</em>;
    return run.href ? (
      <a key={index} href={run.href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-gold-text">{content}</a>
    ) : <span key={index}>{content}</span>;
  })}</>
);

const RisingStarsProfiles = () => {
  const [selected, setSelected] = useState<RisingStar | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {risingStars.map(person => (
          <article key={person.name} className="min-w-0 rounded-lg bg-background border border-accent/20 shadow-card p-6 flex flex-col text-center">
            <img src={person.image} alt={person.name} loading="lazy" className="h-40 w-40 rounded-full object-cover mx-auto mb-5 border-4 border-accent/30" />
            <h2 className="text-xl font-bold text-primary mb-2 break-words">{person.name}</h2>
            <p className="text-sm text-foreground mb-2">{person.position}</p>
            <p className="text-sm text-muted-foreground mb-5">{person.affiliation}</p>
            <div className="mt-auto text-sm text-foreground space-y-3">
              <p><strong>Research Focus: </strong>{person.researchFocus}</p>
              <p><strong>Lab: </strong><a href={person.labUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-gold-text break-words">{person.labName}</a></p>
              {person.bio.length > 0 && <Button variant="outline" size="sm" onClick={() => setSelected(person)}>Short Bio</Button>}
            </div>
          </article>
        ))}
      </div>
      <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="pr-6">{selected?.name}</DialogTitle>
            <DialogDescription>Short Bio</DialogDescription>
          </DialogHeader>
          <div className="text-foreground text-sm leading-relaxed space-y-4">
            {selected?.bio.map((runs, index) => <p key={index}><DocumentText runs={runs} /></p>)}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RisingStarsProfiles;