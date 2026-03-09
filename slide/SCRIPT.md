# TDG for Software Development — Speaker Script

**Total time: 15 minutes**
**Format: [Slide #] — Time — Stage directions in italics**

---

## SLIDE 1 — Title (0:00–0:30)

*Walk to stage. No rush. Look at the room.*

> I'm AnuchitO, from Arise by INFINITAS. Today I want to show you something we've been using to make AI-generated code actually trustworthy.

> It's called TDG — Test Driven Generation. Fifteen minutes.

*Click.*

---

## SLIDE 2 — Fast Code You Can't Trust (0:30–2:30)

*Let the numbers land. Don't rush past them.*

> METR — an AI safety research organization — ran a controlled study last year. Sixteen experienced engineers. Their own codebases. Best models available.

*Click — 19%.*

> With AI tools, they were 19% slower.

*Click — +20%.*

> And those same developers believed they were 20% faster.

*Pause.*

*Click.*

> They felt fast. The data said otherwise.

*Click — bottom box.*

> That gap — between feeling productive and actually being effective — is the problem. And I think it comes from one thing: speed without discipline produces code you can't trust.

---

## SLIDE 3 — The Bottleneck Was Never the Typing (2:30–5:00)

*Grounded. This is data most people haven't stopped to think about.*

> Here's why that matters. Less than 10% of a developer's time is actually spent writing code.

*Click.*

> 75% is debugging, integration, and maintenance.

*Pause.*

> So when AI speeds up the writing — it's speeding up the smallest part of the job. The hard part, the expensive part, is what happens after.

*Click — orange box.*

> And with legacy systems — real enterprise codebases, half a million lines, ten years old — it gets worse. AI can only see a slice at a time. Its context window is a keyhole into a very large room. It has no idea what it might break on the other side of that door.

*Click — big text.*

> More code. Faster. Still no tests. Still no proof.

*Pause. Let it sit.*

---

## SLIDE 4 — TDD: The Discipline That Worked (5:00–7:00)

*This is the pivot. You're not just naming a problem — you're pointing at the solution that already exists.*

> This isn't a new problem. We had it before AI. Developers typed fast too.

*Click.*

> TDD fixed it. Write the failing test first — define what the code should do before you write a single line. Then write the minimum code to make it pass. Then clean it up.

*Click through Red, Green, Refactor.*

> Red. Green. Refactor.

*Click — two boxes.*

> Why did it work? Because you couldn't write code without first saying what it should do. The test is the contract. The test is the proof.

> And in a legacy system bigger than any context window — tests are the memory that outlasts any prompt. Keep them green, and you know you haven't broken anything. Even without reading everything.

*Click — bottom.*

> Tests define intent. Code fulfills it. That discipline is what makes software safe to change.

---

## SLIDE 5 — TDG: Test Driven Generation (7:00–9:00)

*Steady. This is the moment they understand what you've built.*

> So. What if we took that discipline — and encoded it into how AI agents work?

*Click.*

> Same loop. AI does the coding.

*Click — the three boxes.*

> You write the test. AI generates the minimum code to pass it. AI refactors. Red, Green, Refactor — but now the AI is your pair programmer, and TDD is the protocol it follows.

*Click.*

> It works for CLI tools. UI components. APIs. Services. Any unit with a clear interface can be driven by a test. The discipline is the same whether it's a terminal command or a React button.

*Click.*

> This is TDG. Not more prompts. A workflow. You're cloning your team's discipline into the agent.

---

## SLIDE 6 — Demo: Replay CLI (9:00–13:30)

*Let the work speak. Stay calm. Narrate only what isn't obvious.*

> Let me show you. This is Replay CLI — a teaching tool I built entirely with TDG.

> The problem it solves: when I teach, I want learners to see code evolve step by step. But live-coding is unpredictable, and the final result alone doesn't show the thinking.

> Replay CLI takes a git repo where each commit is one step — and replays the process.

*Switch to terminal. Run the demo.*

> Watch the commits. Each one is either a Red, Green, or Refactor step. The learner sees not just what was built, but how and why.

*Point to the commit history as it replays.*

> Red commit — a failing test was added. Green commit — minimum code to pass. Refactor commit — cleaned up, tests still green.

> That's TDG in practice. The whole codebase is a proof.

*Return to slides.*

---

## SLIDE 7 — Code That Lasts (13:30–15:00)

*Slow. Each line is deliberate.*

> One last thought.

*Click.*

> AI gives us speed. Speed alone doesn't make software survive.

*Click.*

> TDG encodes your team's discipline into AI workflows. Generativity with guardrails.

*Click.*

> The best engineers don't write the most code. They write the code that lasts. Let's teach our AI to do the same.

*Click — GitHub link.*

> It's open source. github.com/chanwit/tdg.

*Final line. Say it simply.*

> Thank you.

*Stay still. Let the silence work.*

---

## Timing Summary

| Slide | Section | Duration |
|-------|---------|----------|
| 1 | Title | 0:30 |
| 2 | Fast Code You Can't Trust | 2:00 |
| 3 | Bottleneck Was Never the Typing | 2:30 |
| 4 | TDD — The Discipline That Worked | 2:00 |
| 5 | TDG — Test Driven Generation | 2:00 |
| 6 | Demo: Replay CLI | 4:30 |
| 7 | Code That Lasts | 1:30 |
| **Total** | | **15:00** |

## Delivery Tips

- **Sharp**: Every sentence earns its place. Silence between points is more powerful than filler words.
- **The numbers**: Let 19% and 75% land before you explain them. Don't rush.
- **The demo**: Stay quiet while it runs. Let them watch. Narrate only what's not obvious.
- **The loop visual**: When you show Red→Green→Refactor with the robot icon, say it out loud — "you write the test, AI generates the code." Make the handoff explicit.
- **Closing**: "The best engineers don't write the most code. They write the code that lasts." Land it clean. Then "Thank you." Once. Done.
