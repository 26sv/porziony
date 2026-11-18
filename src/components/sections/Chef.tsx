import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import { ChatBubble } from "@/components/ChatBubble";
import { suggestions } from "@/data/content";

export function Chef() {
  return (
    <Section id="chef" className="bg-accent/10">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="mb-5 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white">✨ Our star feature</span>
          <h2 className="text-5xl md:text-6xl leading-[1.05]">Ask the AI Chef what to cook tonight.</h2>
          <p className="mt-4 text-lg text-ink/60">Tell it what is in your fridge. Get ideas that fit your time, taste and allergens.</p>
        </div>
        <Card className="grid gap-3.5 border-2 border-accent p-7 shadow-lift">
          <ChatBubble from="user">I have zucchini, eggs and parmesan.</ChatBubble>
          <ChatBubble from="ai">Here are five recipes you can prepare today.</ChatBubble>
          <ul className="grid gap-2">
            {suggestions.map(([name, time]) => (
              <li key={name} className="flex justify-between rounded-2xl bg-canvas px-4 py-3 text-sm">{name}<span className="text-ink/50">{time}</span></li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
