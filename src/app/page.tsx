'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

type Stage =
  | 'idle'
  | 'mono'
  | 'fadeBlack'
  | 'panel'
  | 'typing'
  | 'popup1'
  | 'popup2'
  | 'fadeOut';

  const codeText = `                                                        from typing import List, Optional, Dict, Any, Tuple
                                    from dataclasses import dataclass, field
                                    from datetime import datetime, timedelta
                                    from enum import Enum
                                    from pathlib import Path
                                    import json
                                    import logging
                                    import asyncio


                                          logger = logging.getLogger(__name__)


                                          class ProjectStatus(Enum):
                                              DRAFT = "draft"
                                              ACTIVE = "active"
                                              COMPLETED = "completed"
                                              ARCHIVED = "archived"
                                              ON_HOLD = "on_hold"


                                          class SkillCategory(Enum):
                                              LANGUAGE = "language"
                                              FRAMEWORK = "framework"
                                              DATABASE = "database"
                                              DEVOPS = "devops"
                                              CONCEPT = "concept"
                                              TOOL = "tool"


                                          class ExperienceLevel(Enum):
                                              BEGINNER = 1
                                              INTERMEDIATE = 2
                                              ADVANCED = 3
                                              EXPERT = 4


                                          @dataclass
                                          class Skill:
                                              name: str
                                              category: SkillCategory
                                              proficiency: int
                                              years: float
                                              last_used: Optional[datetime] = None

                                              def is_expert(self) -> bool:
                                                  return self.proficiency >= 8 and self.years >= 2.0

                                              def is_recent(self) -> bool:
                                                  if self.last_used is None:
                                                      return False
                                                  cutoff = datetime.utcnow() - timedelta(days=180)
                                                  return self.last_used >= cutoff

                                              def level(self) -> ExperienceLevel:
                                                  if self.proficiency >= 9 and self.years >= 3:
                                                      return ExperienceLevel.EXPERT
                                                  if self.proficiency >= 7 and self.years >= 1.5:
                                                      return ExperienceLevel.ADVANCED
                                                  if self.proficiency >= 5:
                                                      return ExperienceLevel.INTERMEDIATE
                                                  return ExperienceLevel.BEGINNER

                                              def to_dict(self) -> Dict[str, Any]:
                                                  return {
                                                      "name": self.name,
                                                      "category": self.category.value,
                                                      "proficiency": self.proficiency,
                                                      "years": self.years,
                                                      "level": self.level().name,
                                                      "is_expert": self.is_expert(),
                                                      "is_recent": self.is_recent(),
                                                  }

                                          @dataclass 

                                          class TechStack: 

                                          languages: List[str] = field(default_factory=list) 

                                          frameworks: List[str] = field(default_factory=list) 

                                          databases: List[str] = field(default_factory=list) 

                                          tools: List[str] = field(default_factory=list) 

                                      

                                          def all_items(self) -> List[str]: 

                                              return [*self.languages, *self.frameworks, *self.databases, *self.tools] 

                                      

                                          def total(self) -> int: 

                                              return len(self.all_items()) 

                                      

                                          def to_dict(self) -> Dict[str, Any]: 

                                              return { 

                                                  "languages": list(self.languages), 

                                                  "frameworks": list(self.frameworks), 

                                                  "databases": list(self.databases), 

                                                  "tools": list(self.tools), 

                                                  "total": self.total(), 

                                              } 

                                      

                                      

                                      @dataclass 

                                      class Project: 

                                          id: int 

                                          title: str 

                                          description: str 

                                          tech_stack: TechStack = field(default_factory=TechStack) 

                                          status: ProjectStatus = ProjectStatus.DRAFT 

                                          repo_url: Optional[str] = None 

                                          demo_url: Optional[str] = None 

                                          started_at: datetime = field(default_factory=datetime.utcnow) 

                                          completed_at: Optional[datetime] = None 

                                          contributors: List[str] = field(default_factory=list) 

                                          metrics: Dict[str, Any] = field(default_factory=dict) 

                                      

                                          def is_active(self) -> bool: 

                                              return self.status == ProjectStatus.ACTIVE 

                                      

                                          def is_completed(self) -> bool: 

                                              return self.status == ProjectStatus.COMPLETED 

                                      

                                          def duration_days(self) -> int: 

                                              end = self.completed_at or datetime.utcnow() 

                                              return (end - self.started_at).days 

                                      

                                          def to_dict(self) -> Dict[str, Any]: 

                                              return { 

                                                  "id": self.id, 

                                                  "title": self.title, 

                                                  "description": self.description, 

                                                  "tech_stack": self.tech_stack.to_dict(), 

                                                  "status": self.status.value, 

                                                  "repo_url": self.repo_url, 

                                                  "demo_url": self.demo_url, 

                                                  "duration_days": self.duration_days(), 

                                                  "contributors": list(self.contributors), 

                                                  "metrics": dict(self.metrics), 

                                              } 

                                                @dataclass
                                                class Engineer:
                                                    name: str
                                                    role: str
                                                    location: str
                                                    email: str
                                                    bio: str = ""
                                                    skills: List[Skill] = field(default_factory=list)
                                                    projects: List[Project] = field(default_factory=list)
                                                    education: List[Education] = field(default_factory=list)
                                                    social_links: Dict[str, str] = field(default_factory=dict)

                                                    def add_skill(self, skill: Skill) -> None:
                                                        self.skills.append(skill)

                                                    def add_project(self, project: Project) -> None:
                                                        self.projects.append(project)

                                                    def add_education(self, edu: Education) -> None:def build_skills() -> List[Skill]:
                                                    return [
                                                        Skill("Python", SkillCategory.LANGUAGE, 9, 4.0),
                                                        Skill("JavaScript", SkillCategory.LANGUAGE, 7, 2.5),
                                                        Skill("TypeScript", SkillCategory.LANGUAGE, 7, 1.8),
                                                        Skill("SQL", SkillCategory.LANGUAGE, 8, 3.0),
                                                        Skill("FastAPI", SkillCategory.FRAMEWORK, 8, 2.5),
                                                        Skill("Flask", SkillCategory.FRAMEWORK, 8, 3.0),
                                                        Skill("Django", SkillCategory.FRAMEWORK, 6, 1.5),
                                                        Skill("Next.js", SkillCategory.FRAMEWORK, 7, 1.5),
                                                        Skill("PostgreSQL", SkillCategory.DATABASE, 8, 3.0),
                                                        Skill("MySQL", SkillCategory.DATABASE, 7, 2.5),
                                                        Skill("Redis", SkillCategory.DATABASE, 6, 1.5),
                                                        Skill("MongoDB", SkillCategory.DATABASE, 6, 1.0),
                                                        Skill("Docker", SkillCategory.DEVOPS, 7, 2.0),
                                                        Skill("Git", SkillCategory.DEVOPS, 9, 4.0),
                                                        Skill("Linux", SkillCategory.DEVOPS, 7, 3.0),
                                                        Skill("CI/CD", SkillCategory.DEVOPS, 6, 1.5),
                                                        Skill("REST APIs", SkillCategory.CONCEPT, 9, 3.0),
                                                        Skill("System Design", SkillCategory.CONCEPT, 7, 2.0),
                                                        Skill("Design Patterns", SkillCategory.CONCEPT, 7, 2.5),
                                                        Skill("Machine Learning", SkillCategory.CONCEPT, 6, 1.5),
                                                    ]
                                                        self.education.append(edu)

                                                    def expert_skills(self) -> List[Skill]:
                                                        return [s for s in self.skills if s.is_expert()]
                                                def build_projects() -> List[Project]:
                                                    return [
                                                        Project(
                                                            id=1,
                                                            title="Ticket Priority System",
                                                            description="ML-driven ticket triage for support teams.",
                                                            tech_stack=TechStack(
                                                                languages=["Python"],
                                                                frameworks=["FastAPI", "scikit-learn"],
                                                                databases=["PostgreSQL"],
                                                                tools=["Docker", "Redis"],
                                                            ),
                                                            status=ProjectStatus.COMPLETED,
                                                            repo_url="github.com/vineel/ticket-priority",
                                                            metrics={"accuracy": 0.92, "throughput_rps": 450},
                                                        ),
                                                        Project(
                                                            id=2,
                                                            title="Payment Order Process",
                                                            description="High-throughput payment workflow service.",
                                                            tech_stack=TechStack(
                                                                languages=["Python"],
                                                                frameworks=["FastAPI"],
                                                                databases=["PostgreSQL", "Redis"],
                                                                tools=["Docker", "Kubernetes"],
                                                            ),
                                                            status=ProjectStatus.ACTIVE,
                                                            repo_url="github.com/vineel/payment-order",
                                                            metrics={"daily_volume": 12000, "latency_p99_ms": 85},
                                                        ),
                                                        Project(
                                                            id=3,
                                                            title="Text Classification Service",
                                                            description="NLP categorization microservice.",
                                                            tech_stack=TechStack(
                                                                languages=["Python"],
                                                                frameworks=["TensorFlow", "Flask"],
                                                                databases=["PostgreSQL"],
                                                                tools=["Docker"],
                                                            ),
                                                            status=ProjectStatus.COMPLETED,
                                                            repo_url="github.com/vineel/text-clf",
                                                            metrics={"f1_score": 0.89, "categories": 24},
                                                        ),
                                                    ]
                                                    def active_projects(self) -> List[Project]:
                                                        return [p for p in self.projects if p.is_active()]

                                                    def completed_projects(self) -> List[Project]:
                                                        return [p for p in self.projects if p.is_completed()]

                                                    def total_experience_years(self) -> float:
                                                        if not self.skills:
                                                            return 0.0
                                                        return max(s.years for s in self.skills)

                                                    def to_dict(self) -> Dict[str, Any]:
                                                        return {
                                                            "name": self.name,
                                                            "role": self.role,
                                                            "location": self.location,
                                                            "email": self.email,
                                                            "bio": self.bio,
                                                            "experience_years": self.total_experience_years(),
                                                            "skills": [s.to_dict() for s in self.skills],
                                                            "projects": [p.to_dict() for p in self.projects],
                                                            "education": [e.to_dict() for e in self.education],
                                                            "social_links": dict(self.social_links),
                                                        }








                                                def build_education() -> List[Education]:
                                                    return [
                                                        Education(
                                                            institution="D.N.R College of PG Courses",
                                                            degree="MCA",
                                                            field_of_study="Computer Applications",
                                                            start_year=2023,
                                                            end_year=2025,
                                                            gpa=8.5,
                                                        ),
                                                        Education(
                                                            institution="V.S.K Degree College",
                                                            degree="BSc",
                                                            field_of_study="Computer Science",
                                                            start_year=2020,
                                                            end_year=2023,
                                                            gpa=8.2,
                                                        ),
                                                    ]


                                                def build_profile() -> Engineer:
                                                    engineer = Engineer(
                                                        name="Vineel Kumar Polavarapu",
                                                        role="Software Engineer",
                                                        location="Hyderabad, India",
                                                        email="itsmevineel43@gmail.com",
                                                        bio="Backend engineer focused on Python, FastAPI, and scalable systems.",
                                                        social_links={
                                                            "github": "github.com/vineelpolavarapu",
                                                            "linkedin": "linkedin.com/in/vineelkumarpolavarapu",
                                                            "leetcode": "leetcode.com/u/vineel_polavarapu",
                                                        },
                                                    )
                                                    for skill in build_skills():
                                                        engineer.add_skill(skill)
                                                    for project in build_projects():
                                                        engineer.add_project(project)
                                                    for edu in build_education():
                                                        engineer.add_education(edu)
                                                    return engineer


                                                async def serialize_profile(profile: Engineer) -> str:
                                                    payload = profile.to_dict()
                                                    return json.dumps(payload, indent=2, default=str)


                                                def main() -> None:
                                                    logger.info("Starting profile build process...")
                                                    vineel = build_profile()
                                                    payload = vineel.to_dict()
                                                    print(json.dumps(payload, indent=2, default=str))
                                                    print(f"Name: {vineel.name}")
                                                    print(f"Role: {vineel.role}")
                                                    print(f"Location: {vineel.location}")
                                                    print(f"Total skills: {len(vineel.skills)}")
                                                    print(f"Expert in: {len(vineel.expert_skills())} skills")
                                                    print(f"Active projects: {len(vineel.active_projects())}")
                                                    print(f"Completed projects: {len(vineel.completed_projects())}")
                                                    print(f"Experience: {vineel.total_experience_years()} years")
                                                    logger.info("Profile build complete.")


if __name__ == "__main__":
    main()
`;

const TYPING_DURATION_MS = 5000;
const PENDING_AUTH_MS = 3000;
const wait = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export default function LandingPage() {
  const router = useRouter();
  const [hasStarted, setHasStarted] = useState(false);
  const [stage, setStage] = useState<Stage>('idle');
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');

  useEffect(() => {
    router.prefetch('/portfolio');
  }, [router]);

  useEffect(() => {
    if (!hasStarted) return;
    let cancelled = false;
    let rafId = 0;

    (async () => {
      setStage('mono');
      await wait(900);
      if (cancelled) return;

      setStage('fadeBlack');
      await wait(1200);
      if (cancelled) return;

      setStage('panel');
      await wait(950);
      if (cancelled) return;

      // type the entire Python module in 5 seconds (frame-driven)
      setStage('typing');
      await new Promise<void>((resolve) => {
        const startTs = performance.now();
        const totalChars = codeText.length;
        const tick = () => {
          if (cancelled) return resolve();
          const elapsed = performance.now() - startTs;
          const progress = Math.min(elapsed / TYPING_DURATION_MS, 1);
          const visible = codeText.slice(0, Math.floor(progress * totalChars));
          const parts = visible.split('\n');
          setTypedLines(parts.slice(0, -1));
          setCurrentLine(parts[parts.length - 1] ?? '');
          if (progress >= 1) return resolve();
          rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
      });
      if (cancelled) return;

      setTypedLines(codeText.split('\n'));
      setCurrentLine('');

      await wait(600);
      if (cancelled) return;
      setStage('popup1');
      await wait(PENDING_AUTH_MS);
      if (cancelled) return;

      setStage('popup2');
      await wait(2800);
      if (cancelled) return;

      setStage('fadeOut');
      await wait(900);
      if (cancelled) return;
      router.push('/portfolio');
    })();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [hasStarted, router]);

  const handleEnter = () => {
    if (hasStarted) return;
    setHasStarted(true);
  };

  const sceneIsBlack =
    stage === 'fadeBlack' ||
    stage === 'panel' ||
    stage === 'typing' ||
    stage === 'popup1' ||
    stage === 'popup2' ||
    stage === 'fadeOut';

  const panelOpen =
    stage === 'panel' ||
    stage === 'typing' ||
    stage === 'popup1' ||
    stage === 'popup2';

  return (
    <div className="landing-cursor relative min-h-screen w-full overflow-hidden bg-black">
      {/* Scene 1 — background image with mono filter */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
        animate={{
          filter:
            stage === 'idle'
              ? 'grayscale(0%) brightness(1)'
              : 'grayscale(100%) brightness(0.55)',
        }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      />

      {/* Polished bottom-center button */}
      <AnimatePresence>
        {stage === 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2"
          >
            <button
              onClick={handleEnter}
              className="group relative cursor-pointer overflow-hidden rounded-full border border-white/25 bg-white/[0.04] px-14 py-4 text-[11px] font-light uppercase tracking-[0.4em] text-white/90 backdrop-blur-2xl transition-all duration-700 hover:border-white/60 hover:bg-white/[0.08] hover:tracking-[0.45em] hover:text-white"
            >
              <span className="relative z-10">Enter</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1500ms] ease-out group-hover:translate-x-full" />
              <span className="pointer-events-none absolute -inset-px rounded-full opacity-0 shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-opacity duration-700 group-hover:opacity-100" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Black fade overlay */}
      <AnimatePresence>
        {sceneIsBlack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-black"
          />
        )}
      </AnimatePresence>

      {/* Code panel */}
      <AnimatePresence>
        {panelOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex items-center justify-center px-4"
          >
            <CodePanel
              typedLines={typedLines}
              currentLine={currentLine}
              typing={stage === 'typing'}
              dimmed={stage === 'popup1' || stage === 'popup2'}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup 1 — pending */}
      <AnimatePresence>
        {stage === 'popup1' && (
          <motion.div
            key="popup1"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
          >
            <AuthDialog variant="pending" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup 2 — granted (auto-redirects) */}
      <AnimatePresence>
        {stage === 'popup2' && (
          <motion.div
            key="popup2"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
          >
            <AuthDialog variant="granted" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Hyper / iTerm2-style code panel ───────────────────────────────────────────
function CodePanel({
  typedLines,
  currentLine,
  typing,
  dimmed,
}: {
  typedLines: string[];
  currentLine: string;
  typing: boolean;
  dimmed: boolean;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const totalLines = typedLines.length + (typing ? 1 : 0);
  const currentLineNum = typedLines.length + 1;
  const currentCol = currentLine.length + 1;

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [typedLines, currentLine]);

  return (
    <motion.div
      animate={{ opacity: dimmed ? 0.3 : 1, scale: dimmed ? 0.985 : 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-[80vh] w-[85vw] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050505]"
      style={{
        boxShadow:
          '0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      {/* breathing glow halo */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl"
        animate={{
          boxShadow: [
            '0 0 60px rgba(120,170,255,0.05), inset 0 0 0 1px rgba(255,255,255,0.04)',
            '0 0 110px rgba(120,170,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.08)',
            '0 0 60px rgba(120,170,255,0.05), inset 0 0 0 1px rgba(255,255,255,0.04)',
          ],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* title bar */}
      <div className="relative flex items-center gap-2 border-b border-white/[0.06] bg-gradient-to-b from-[#1a1a1a] to-[#0e0e0e] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-4 flex items-center gap-2 rounded-md bg-white/[0.04] px-3 py-1 ring-1 ring-white/[0.04]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-[11px] tracking-wide text-white/70">
            vineel — zsh — profile.py
          </span>
        </div>
        <span className="ml-auto font-mono text-[10px] text-white/30">⌘ ⇧ P</span>
      </div>

      {/* code body */}
      <div
        ref={bodyRef}
        className="relative h-[calc(80vh-86px)] overflow-y-auto bg-[#050505] font-mono text-[13px] leading-[1.65] text-[#e6e6e6]"
        style={{ scrollbarWidth: 'none' }}
      >
        {/* faint static scan-line overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 3px)',
          }}
        />
        {/* moving scan beam */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 z-[2] h-[120px]"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(160,200,255,0.04) 50%, transparent)',
          }}
          animate={{ top: ['-120px', '100%'] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-[3] py-6 pr-8">
          {typedLines.map((line, i) => (
            <CodeLine key={i} num={i + 1} content={line} />
          ))}
          {typing && (
            <CodeLine num={currentLineNum} content={currentLine} caret />
          )}
        </div>
      </div>

      {/* status bar */}
      <div className="relative flex items-center gap-3 border-t border-white/[0.06] bg-gradient-to-b from-[#0c0c0c] to-[#080808] px-4 py-1.5 font-mono text-[10px] text-white/40">
        <span className="flex items-center gap-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-white/60">main</span>
        </span>
        <span className="text-white/20">·</span>
        <span>python 3.12</span>
        <span className="text-white/20">·</span>
        <span>UTF-8</span>
        <span className="text-white/20">·</span>
        <span>LF</span>
        <span className="ml-auto flex items-center gap-3">
          <span>Ln {currentLineNum}:{currentCol}</span>
          <span className="text-white/20">·</span>
          <span>{totalLines} lines</span>
          <span className="text-white/20">·</span>
          <span className={typing ? 'text-amber-300' : 'text-emerald-400'}>
            {typing ? '● writing' : '✓ saved'}
          </span>
        </span>
      </div>
    </motion.div>
  );
}

function CodeLine({
  num,
  content,
  caret = false,
}: {
  num: number;
  content: string;
  caret?: boolean;
}) {
  return (
    <div className="flex items-center">
      <span className="w-14 flex-shrink-0 select-none text-right text-white/20 pr-5">
        {num}
      </span>
      <span className="flex-1 whitespace-pre">
        {content}
        {caret && (
          <span className="ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[2px] animate-pulse bg-white" />
        )}
      </span>
    </div>
  );
}

// ─── Apple Touch ID-style auth dialog ──────────────────────────────────────────
function AuthDialog({ variant }: { variant: 'pending' | 'granted' }) {
  const isPending = variant === 'pending';

  return (
    <motion.div
      className={`relative ${isPending ? 'w-[360px]' : 'w-[460px]'} overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]`}
      style={{
        boxShadow:
          '0 50px 140px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
      animate={
        !isPending
          ? {
              boxShadow: [
                '0 50px 140px rgba(0,0,0,0.85), 0 0 0 1px rgba(34,197,94,0.0), inset 0 1px 0 rgba(255,255,255,0.06)',
                '0 50px 140px rgba(0,0,0,0.85), 0 0 100px rgba(34,197,94,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
                '0 50px 140px rgba(0,0,0,0.85), 0 0 0 1px rgba(34,197,94,0.0), inset 0 1px 0 rgba(255,255,255,0.06)',
              ],
            }
          : undefined
      }
      transition={!isPending ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' } : undefined}
    >
      {/* hairline highlight at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* icon block */}
      <div className="flex flex-col items-center px-6 pb-5 pt-9">
        <div className="relative flex h-20 w-20 items-center justify-center">
          {isPending && (
            <>
              {[0, 0.6, 1.2].map((delay, i) => (
                <motion.span
                  key={i}
                  className="absolute inset-0 rounded-full border border-white/15"
                  initial={{ scale: 1, opacity: 0.55 }}
                  animate={{ scale: 1.9, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay }}
                />
              ))}
            </>
          )}

          <div
            className={`absolute inset-2 rounded-full ${
              isPending ? 'bg-white/[0.06]' : 'bg-emerald-400/15'
            } transition-colors duration-700`}
          />

          <motion.div
            initial={isPending ? false : { scale: 0.6, opacity: 0 }}
            animate={isPending ? undefined : { scale: 1, opacity: 1 }}
            transition={!isPending ? { duration: 0.5, ease: [0.16, 1, 0.3, 1] } : undefined}
            className="relative z-10"
          >
            <FingerprintIcon variant={variant} />
          </motion.div>

          {!isPending && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-[#0a0a0a]"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <motion.path
                  d="M5 12.5L10 17.5L19 7.5"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.45, delay: 0.5, ease: 'easeOut' }}
                />
              </svg>
            </motion.div>
          )}
        </div>

        {/* header */}
        <p className="mt-6 text-center text-[13px] font-medium uppercase tracking-[0.18em] text-white/55">
          {isPending ? 'Authentication Required' : 'Access Granted'}
        </p>

        {/* prominent message — bigger & brighter for granted */}
        {isPending ? (
          <p className="mt-2 max-w-[280px] text-center text-[12px] leading-relaxed text-white/45">
            Your requesting permission to share Vineel profile
          </p>
        ) : (
          <div className="relative mt-4 w-full">
            {/* pulsing emerald highlight backdrop */}
            <motion.div
              className="absolute inset-x-2 -inset-y-1 rounded-2xl bg-emerald-500/10 blur-xl"
              animate={{ opacity: [0.45, 0.85, 0.45] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative px-2 text-center text-[22px] font-semibold leading-snug tracking-tight text-emerald-100"
              style={{
                textShadow:
                  '0 0 24px rgba(74,222,128,0.7), 0 0 56px rgba(74,222,128,0.35)',
              }}
            >
              <motion.span
                animate={{ opacity: [0.92, 1, 0.92] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="block">Congratulations!</span>
                <span className="block">Vineel allows you to know him.</span>
              </motion.span>
            </motion.p>
          </div>
        )}
      </div>

      {/* divider */}
      <div className="h-px w-full bg-white/[0.06]" />

      {/* status / message row */}
      <div className="flex items-center justify-center gap-3 px-6 py-4">
        {isPending ? (
          <>
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-white/60"
                  animate={{ opacity: [0.25, 1, 0.25], y: [0, -2.5, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.18,
                  }}
                />
              ))}
            </div>
            <span className="font-mono text-[11px] text-white/55">
              Asking to Vineel for permission…
            </span>
          </>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="font-mono text-[11px] text-white/45"
          >
            Permission verified by Vineel Kumar · you can go now.
          </motion.span>
        )}
      </div>

      {/* bottom accent */}
      <motion.div
        className={`h-[2px] w-full ${
          isPending
            ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
            : 'bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent'
        }`}
        animate={
          isPending
            ? { backgroundPosition: ['0% 0%', '200% 0%'] }
            : { opacity: [0.6, 1, 0.6] }
        }
        style={isPending ? { backgroundSize: '200% 100%' } : undefined}
        transition={{ duration: isPending ? 1.8 : 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}

function FingerprintIcon({ variant }: { variant: 'pending' | 'granted' }) {
  const stroke = variant === 'pending' ? 'rgba(255,255,255,0.85)' : 'rgb(74,222,128)';
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
      <path
        d="M2.5 12C2.5 6.75 6.75 2.5 12 2.5c5.25 0 9.5 4.25 9.5 9.5"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M5.5 14V12c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8.5 16V12c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M11.25 18.5V12c0-.41.34-.75.75-.75s.75.34.75.75v2.25"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8 19.5c1.2.6 2.6 1 4 1"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
