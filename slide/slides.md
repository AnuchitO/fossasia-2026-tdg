---
theme: seriph
background: https://cover.sli.dev
title: TDG for Software Development
info: |
  ## TDG for Software Development
  Clone developer skills into AI agents.

  FOSSASIA Summit 2026
class: text-center
drawings:
  persist: false
transition: slide-left
duration: 15min
fonts:
  sans: 'Inter'
  mono: 'JetBrains Mono'
  weights: '400,600,700'
---

# TDG for Software Development

Clone developer skills into AI agents

<div class="pt-12">
  <span class="px-2 py-1 rounded text-sm" style="background: rgba(255,255,255,0.1);">
    FOSSASIA Summit 2026
  </span>
</div>

<div class="abs-bl m-6 flex flex-col text-left">
  <div class="text-base font-bold">AnuchitO</div>
  <div class="opacity-60 text-xs mt-1">Principal Technology Consultant / Senior Director</div>
  <div class="opacity-40 text-xs">Arise by INFINITAS Co.,Ltd</div>
</div>

---
transition: fade-out
---

# The Legacy Code Challenge

<div class="grid grid-cols-2 gap-4 mt-6">
  <div v-click class="p-4 bg-red-500/10 rounded-lg">
    <div class="text-sm font-bold mb-1">Nobody knows how it works</div>
    <div class="text-xs opacity-70">The original authors are gone. The knowledge left with them. What remains is code and fear.</div>
  </div>
  <div v-click class="p-4 bg-orange-500/10 rounded-lg">
    <div class="text-sm font-bold mb-1">No tests — no safety net</div>
    <div class="text-xs opacity-70">Touch one thing, break three others. Nobody wants to refactor what's already running in production.</div>
  </div>
  <div v-click class="p-4 bg-yellow-500/10 rounded-lg">
    <div class="text-sm font-bold mb-1">Bigger than any context window</div>
    <div class="text-xs opacity-70">500k lines. 10 years old. AI sees a keyhole into a very large room — it has no idea what it might break.</div>
  </div>
  <div v-click class="p-4 bg-purple-500/10 rounded-lg">
    <div class="text-sm font-bold mb-1">AI makes it worse</div>
    <div class="text-xs opacity-70">Generate more code into a fragile system — with no tests, no proof — and the mess compounds.</div>
  </div>
</div>

<div v-click class="mt-5 p-6 bg-white/10 border border-white/20 rounded-2xl text-center">
  <div class="text-2xl font-black">Most real software is legacy software.</div>
  <div class="opacity-60 text-base mt-2">This is the problem AI tools weren't built to solve.</div>
</div>

---

# Tests Take Time. AI Doesn't Have To.

<div v-click class="mt-8 p-8 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl text-center">
  <div class="text-sm opacity-50 mb-4 tracking-widest uppercase">The reality today</div>
  <div class="text-3xl font-black tracking-wide leading-tight">
    More code. Faster.<br>Still <span class="text-red-400">no tests</span>. Still <span class="text-orange-400">no proof</span>.
  </div>
  <div class="text-xs opacity-40 mt-4">With AI generating more code than ever —</div>
</div>

<div v-click class="mt-6 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-center">
  <div class="text-sm opacity-50 mb-3 tracking-widest uppercase">The question we should be asking</div>
  <div class="text-2xl font-bold">
    We have AI that generates code in seconds.<br>
    <span class="text-blue-300">Why aren't we using it to write the tests?</span>
  </div>
</div>

---

# TDD — The Discipline That Worked

<div class="grid grid-cols-3 gap-4 mt-6 text-center">
  <div v-click class="p-4 bg-red-500/20 rounded-lg border border-red-500/30">
    <div class="text-3xl mb-2">🔴</div>
    <div class="text-lg font-bold mb-1">Red</div>
    <div class="text-xs opacity-80">Write a failing test<br>that defines the behavior</div>
  </div>
  <div v-click class="p-4 bg-green-500/20 rounded-lg border border-green-500/30">
    <div class="text-3xl mb-2">🟢</div>
    <div class="text-lg font-bold mb-1">Green</div>
    <div class="text-xs opacity-80">Write minimum code<br>to make the test pass</div>
  </div>
  <div v-click class="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
    <div class="text-3xl mb-2">🔵</div>
    <div class="text-lg font-bold mb-1">Refactor</div>
    <div class="text-xs opacity-80">Clean up the code<br>without breaking tests</div>
  </div>
</div>

<div v-click class="mt-5 grid grid-cols-2 gap-4">
  <div class="p-3 bg-white/5 rounded-lg text-xs opacity-80">
    <strong>Why it worked:</strong> You couldn't write a line of code without first saying what it should do. The test is the proof. Refactoring became safe.
  </div>
  <div class="p-3 bg-white/5 rounded-lg text-xs opacity-80">
    <strong>In legacy systems:</strong> Tests are the contract that survives beyond context. Keep them green — and you know you haven't broken anything, even without reading everything.
  </div>
</div>

<div v-click class="mt-5 p-4 bg-yellow-500/10 rounded-lg text-center text-lg">
  Tests define <span v-mark.underline.yellow="6">intent</span>.
  Code fulfills it.
  That discipline is what makes software <span v-mark.underline.yellow="6">safe to change</span>.
</div>

---
layout: center
---

# TDG — Test Driven Generation

<div class="text-center">

<div v-click class="mt-4 text-xl opacity-70">
  Your team's discipline doesn't have to live only in your head.
</div>

<div v-click class="mt-8 flex justify-center items-center gap-6">
  <div class="p-5 bg-white/5 rounded-lg text-center w-40">
    <div class="text-3xl mb-2">🧑‍💻</div>
    <div class="text-sm font-bold">Your practice</div>
    <div class="text-xs opacity-60 mt-1">How to test. How to structure. What to avoid.</div>
  </div>
  <div class="text-3xl opacity-40">→</div>
  <div class="p-5 bg-blue-500/10 rounded-lg text-center w-40">
    <div class="text-3xl mb-2">🤖</div>
    <div class="text-sm font-bold">AI agent</div>
    <div class="text-xs opacity-60 mt-1">Follows your discipline. Every time.</div>
  </div>
</div>

<div v-click class="mt-8 flex justify-center gap-3 text-xs text-center">
  <div class="p-2 bg-red-500/20 rounded w-28">🔴 Red<br><span class="opacity-60">write the test</span></div>
  <div class="flex items-center opacity-40">→</div>
  <div class="p-2 bg-green-500/20 rounded w-28">🤖 Green<br><span class="opacity-60">AI generates</span></div>
  <div class="flex items-center opacity-40">→</div>
  <div class="p-2 bg-blue-500/20 rounded w-28">🔵 Refactor<br><span class="opacity-60">AI cleans up</span></div>
</div>

<div v-click class="mt-8 text-lg font-bold">
  Clone developer skills into AI agents.
</div>

</div>

---

# Demo: Replay CLI

<div class="mt-6 p-5 bg-blue-500/10 rounded-lg mb-6">
  <div class="text-base opacity-90 mb-3">
    A teaching tool — replays a git repo commit-by-commit. Each commit is one step.
    Learners see not just <em>what</em> was built, but <em>how</em> and <em>why</em>.
  </div>
  <div class="text-xs opacity-60">Built entirely with TDG — every commit is a Red, Green, or Refactor step.</div>
</div>

<div class="grid grid-cols-3 gap-4 text-center">
  <div v-click class="p-3 bg-white/5 rounded-lg text-xs">
    <div class="text-xl mb-1">🔴</div>
    <strong>Red commit</strong><br>failing test added
  </div>
  <div v-click class="p-3 bg-white/5 rounded-lg text-xs">
    <div class="text-xl mb-1">🟢</div>
    <strong>Green commit</strong><br>minimum code to pass
  </div>
  <div v-click class="p-3 bg-white/5 rounded-lg text-xs">
    <div class="text-xl mb-1">🔵</div>
    <strong>Refactor commit</strong><br>cleaned up, tests still green
  </div>
</div>

---
layout: center
class: text-center
---

# Software That Survives Change

<div class="mt-2 text-2xl font-bold">
  <a href="https://github.com/chanwit/tdg" target="_blank">
    <carbon:logo-github /> github.com/chanwit/tdg
  </a>
</div>

<div v-click class="text-xl mt-6 opacity-80">
  AI gives us speed. Speed alone doesn't make software survive.
</div>

<div v-click class="mt-6 p-5 bg-blue-500/10 rounded-lg text-lg">
  TDG encodes your team's discipline into AI workflows.<br>
  <strong>Generativity with guardrails.</strong>
</div>

<div v-click class="mt-6 text-2xl font-bold leading-snug">
  The best engineers <span class="text-red-400">don't write the most code</span>.<br>
  They write <span class="text-green-400">the code that lasts</span>.<br>
  <span class="text-blue-400">Let's teach our AI to do the same.</span>
</div>

<div class="abs-br m-6 flex flex-col gap-1 text-right text-sm">
  <div>AnuchitO</div>
  <div class="opacity-60">
    <a href="https://github.com/AnuchitO/fossasia-2026-tdg" target="_blank">
      <carbon:logo-github /> AnuchitO/fossasia-2026-tdg
    </a>
  </div>
</div>
