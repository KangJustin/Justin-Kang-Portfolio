// Content for the three project case-study pages (/projects/<slug>),
// extracted from the design handoff. Copy is final per the handoff README.

export interface CsSpec {
  label: string
  value: string
}

export interface CsStage {
  num: string
  tag: string
  title: string
  body: string
}

// ---------- BuzzBuddy ----------

export const buzzbuddy = {
  index: '[001]',
  date: 'jul_2026',
  version: 'v0.2',
  title: 'BuzzBuddy',
  tags: ['Agentic AI', 'iOS · SwiftUI', 'FastAPI', 'Personal baseline'],
  desc: 'iOS app that estimates impairment by measuring deviation from your own sober baseline — reaction time, balance, memory — using an agentic AI examiner, not a BAC guess.',
  detail:
    'A tool-calling loop grounds every verdict in specific test results: it retrieves your baseline, requests targeted tests, analyzes deviation, and updates a confidence score.',
  codeUrl: 'https://github.com/julianshekhtmeyster/buzzbuddy',
  devpostUrl: 'https://devpost.com/software/buzzbuddy-ivr0ty',
  viewportTitle: 'buzzbuddy — examiner_session',
  proof: {
    safetyNote:
      'Hackathon prototype that detects performance deviation from a personal baseline. It does not determine sobriety or fitness to drive.',
    role: 'Backend + agentic loop; wired the AI-driven flow into the shared iOS app',
    team: '3 (with Julian Shekhtmeyster, Max DeWeese)',
    timeline: '~36 hrs · Jul 10–11, 2026',
    status: 'Hackathon prototype · 3rd place, MLH × DigitalOcean AI Hackathon',
  },
  contributions: [
    'Built the FastAPI backend and the agentic tool-calling loop (retrieve_baseline → analyze_deviation → update_confidence → request_test) against DigitalOcean Serverless Inference.',
    'Designed the SQLAlchemy schema and Alembic migrations.',
    "Wired the AI-driven check-in flow into the iOS app's shared state, replacing a local placeholder test shuffle.",
    'Built, then removed before submission: a Twilio SMS designated-driver alert and a secondary agent for read-only driver Q&A.',
    "Tuned the examiner's system prompt (tone, benefit-of-the-doubt calibration on ambiguous evidence).",
    'UI passes on the check-in and verdict screens.',
  ],
  evidence: [
    'No automated test suite exists for this prototype (verified: zero test files in the backend).',
    'Verified in code: each verdict is grounded in a specific per-test percent-deviation from the stored baseline value, not a single opaque score.',
    'Verification during the hackathon was manual/demo-driven — no measured pass rates, scripted-scenario counts, or response-time benchmarks are available to report.',
  ],
  limitations: [
    'Not medically validated and not more reliable than BAC testing — it measures deviation from a personal baseline only.',
    'No automated tests or regression suite.',
    'A Twilio SMS alert to a designated driver, and a secondary driver-Q&A agent, were built and worked during the hackathon but were removed before final submission — the current backend always ends a session with a plain-language summary rather than escalating to a contact.',
    'Several iOS tabs (Home/Events/Settings) are placeholder stubs not wired to real state beyond the check-in flow itself.',
  ],
  nextSteps: [
    'Add an automated/scripted-scenario test suite.',
    'Decide whether to re-add and harden the designated-driver notification path, or remove its remaining UI references.',
    'Wire the remaining placeholder tabs to real state.',
  ],
  specs: [
    { label: 'Award', value: '3rd · MLH × DigitalOcean AI Hackathon ’26' },
    { label: 'Baseline', value: 'Reaction / balance / memory, personal — not BAC' },
    { label: 'Tools', value: 'retrieve_baseline / request_test / analyze_deviation / update_confidence' },
    { label: 'Model', value: 'Claude 4.6 Sonnet · tool-calling loop' },
    { label: 'Output', value: 'Deviation confidence, never "safe to drive"' },
  ] as CsSpec[],
  stages: [
    { num: 'S.01', tag: 'baseline', title: 'Sober Baseline', body: 'User completes reaction, balance, and memory tests while sober to set a personal reference — not a population BAC average.' },
    { num: 'S.02', tag: 'test', title: 'Adaptive Testing', body: 'On check-in, the AI examiner requests specific tests one at a time based on what it still needs to know.' },
    { num: 'S.03', tag: 'analyze', title: 'Deviation Analysis', body: 'Each result is compared against the personal baseline, and a tool-calling loop updates a running confidence score with reasoning attached.' },
    { num: 'S.04', tag: 'verdict', title: 'Final Summary', body: 'The examiner concludes the session with a plain-language summary — it never tells the user it’s "safe to drive."' },
  ] as CsStage[],
  decisions: [
    { num: 'D.01', title: 'Personal baseline over population BAC', body: 'Everyone metabolizes and performs differently — comparing against your own sober self is a more honest signal than a fixed legal threshold.' },
    { num: 'D.02', title: 'Agentic tool-calling over a single score', body: 'A tool-calling loop (retrieve → test → analyze → update) keeps every confidence update traceable to a specific test result, not a black box.' },
    { num: 'D.03', title: 'Never says "safe to drive"', body: 'The app reports deviation confidence only — the call on whether someone is fit to drive stays with the person, not the model.' },
  ],
  footer: ['buzzbuddy / case_study', 'agentic impairment detection · 2026'],
}

// ---------- UrbanPilot ----------

export const urbanpilot = {
  index: '[002]',
  date: 'jun_2026',
  version: 'v1.0',
  title: 'UrbanPilot',
  tags: ['Multi-agent AI', 'Python', 'Data pipelines', 'Public datasets'],
  desc: 'Multi-agent AI system that runs parallel scenario analyses — climate, housing, accessibility, urban design — for any real address.',
  detail:
    'Integrates + cleans 6 data sources: Census ACS, FEMA NFHL, Open-Meteo, 511 GTFS transit, NLCD tree canopy, and Google Maps. Supports multi-variable sensitivity analysis across planning dimensions.',
  codeUrl: 'https://github.com/KangJustin/urbanpilot',
  devpostUrl: 'https://devpost.com/software/urbanpilot',
  viewportTitle: 'urbanpilot — scenario_dashboard',
  viewportSuffix: 'live',
  proof: {
    safetyNote:
      'Decision-support prototype. Results depend on public-data coverage, scoring assumptions, geographic availability, and source freshness.',
    role: 'Primary author: React/Leaflet frontend, Node/Express backend, Claude multi-agent coordinator, Midjourney vision integration',
    team: '2 (with kdai05)',
    timeline: '~2 days · Jun 20–21, 2026',
    status: 'Hackathon prototype · UC Berkeley AI Hackathon 2026',
  },
  contributions: [
    'Built the React (Create React App + Tailwind + Leaflet) frontend and the Node/Express backend.',
    'Built the Claude multi-agent coordinator orchestrating the climate, accessibility, housing, urban-design, and vision agents in parallel.',
    'Integrated Midjourney (via MCP) for 2040/2075 scenario visualization, grounded in a real Street View or satellite photo of the site.',
    'Authored the prompt-compression benchmarking: a hand-written compact-encoding layer plus a the-token-company integration, measured against real Anthropic API calls.',
    'Imported and substantially rebuilt an earlier hackathon prototype (GreenPlanner, HackMIT) into UrbanPilot.',
    "Teammate kdai05 built the verified-data grounding integrations for each specialist agent (Census ACS, FEMA, Open-Meteo, 511 GTFS, NLCD) and grounded the Ask-AI assistant and vision scenarios.",
  ],
  evidence: [
    'Prompt-compression benchmark against real Anthropic API calls (no estimates): the hand-written compact encoding cut input tokens by 27.8% (Housing agent, 1,155→834), 35.4% (Climate, 1,507→973), and 33.7% (Accessibility, 1,247→827), with every compressed response still parsing as valid JSON and citing the exact verified source figures.',
    'A separate the-token-company compression layer reduced a structured JSON-schema prompt by 3.9% and a long prose-context prompt by 20.6%, layered on top of the encoding above.',
    'Verified graceful degradation: without a Census or 511 API key, the corresponding agent still runs without that verified grounding rather than failing; without an Anthropic key, that section shows as unavailable rather than a fabricated result. There is no bundled mock data anywhere in the app.',
  ],
  limitations: [
    'No automated test suite (the repo\'s own README notes `npm test` reports "No tests found").',
    '511 GTFS transit grounding is Bay Area-specific; coverage elsewhere depends on the other four sources alone.',
    "Midjourney can't fetch localhost/LAN reference photos in local dev — the \"use the real photo as reference\" feature only works once deployed with a public URL.",
    'Google Maps imagery is only ever displayed, never used as Midjourney training/input data, except the explicit reference-image feature above.',
  ],
  nextSteps: [
    'Add an automated test suite.',
    'Extend verified transit grounding beyond the Bay Area.',
    'Verify the Midjourney reference-photo flow end-to-end once deployed.',
  ],
  scenarioRows: [
    { name: 'Climate', current: 62, y2040: 72, y2075: 84 },
    { name: 'Accessibility', current: 94, y2040: 96, y2075: 97 },
    { name: 'Housing', current: 78, y2040: 84, y2075: 91 },
    { name: 'Overall', current: 78, y2040: 84, y2075: 91 },
  ],
  risks: [
    { name: 'Heat island amplification', level: 'High', badgeColor: '#A15A3C' },
    { name: 'Stormwater management gap', level: 'Moderate', badgeColor: '#8A7A2E' },
    { name: 'Construction emissions', level: 'Moderate', badgeColor: '#8A7A2E' },
    { name: 'Pedestrian-vehicle conflict zones', level: 'Moderate', badgeColor: '#8A7A2E' },
  ],
  interventions: [
    '+ Add tree canopy',
    '+ Mixed-income housing near transit',
    '+ Green infrastructure',
    '+ Safer crossings',
  ],
  specs: [
    { label: 'Agents', value: 'Climate / Housing / Accessibility / Urban Design' },
    { label: 'Sources', value: 'ACS / FEMA / Open-Meteo / 511 Transit / NLCD / Maps' },
    { label: 'Method', value: 'Parallel scenario analysis' },
    { label: 'Output', value: 'Risk + recommendation dashboard' },
  ] as CsSpec[],
  stages: [
    { num: 'S.01', tag: 'input', title: 'Address Input', body: 'User enters a real location or planning goal.' },
    { num: 'S.02', tag: 'etl', title: 'Data Pipeline', body: 'System pulls and normalizes public datasets across climate, transit, housing, and hazard layers.' },
    { num: 'S.03', tag: 'agents', title: 'Multi-Agent Analysis', body: 'Specialized agents evaluate tradeoffs independently, then combine findings into scenario scores.' },
    { num: 'S.04', tag: 'output', title: 'Planning Output', body: 'Dashboard surfaces risks, recommendations, and long-term scenario comparisons.' },
  ] as CsStage[],
  whyPull:
    "Planning decisions trade off development, climate exposure, mobility, and affordability — usually across tools that don't talk to each other.",
  whyBody:
    'UrbanPilot puts those tradeoffs in one view. Planners, students, and community teams enter a real address and get parallel agent analyses grounded in verified public data — enough to compare scenarios and defend a recommendation in minutes, not weeks.',
  footer: ['urbanpilot / case_study', 'multi-agent scenario analysis · 2026'],
}

// ---------- BarelyAtWork / Flux ----------

const waveHeights = [6, 10, 18, 24, 14, 20, 26, 12, 8, 16, 22, 10, 18, 6, 12, 20, 9, 5]

export const flux = {
  index: '[003]',
  date: 'apr_2026',
  version: 'v0.9',
  title: 'Flux',
  tags: ['Voice AI', 'Gemini', 'Workflow JSON', '12+ integrations'],
  desc: 'Voice-first automation platform on Meta Ray-Ban glasses — one spoken command triggers multi-step workflows across 12+ services, including Gmail, Slack, Notion, and Fetch.ai Agentverse. Built as BarelyAtWork at LA Hacks 2026, in a team of four over 36 hours.',
  detail:
    'Constrained Gemini pipeline with a validate → repair loop converts voice transcripts into structured workflow JSON and eliminates invalid parameters.',
  codeUrl: 'https://github.com/trigtbh/lahacks-26',
  viewportTitle: 'flux — voice_to_workflow',
  quote: '"send yesterday\'s demo clips to the team and block 30 minutes tomorrow morning"',
  waveBars: waveHeights.map((h, i) => ({ h, dim: i >= 12 })),
  pipelineSteps: [
    { name: 'transcribe', mark: '✓', kind: 'done', note: '42 ms' },
    { name: 'parse intent', mark: '✓', kind: 'done', note: '' },
    { name: 'generate workflow', mark: '✓', kind: 'done', note: '' },
    { name: 'validate params', mark: '✓', kind: 'core', note: 'core loop' },
    { name: 'repair missing fields', mark: '↻', kind: 'core', note: '2 fixed' },
    { name: 'ready', mark: '●', kind: 'ready', note: 'exec' },
  ] as { name: string; mark: string; kind: 'done' | 'core' | 'ready'; note: string }[],
  specs: [
    { label: 'Input', value: 'Ray-Ban voice command' },
    { label: 'Model', value: 'Gemini constrained parser' },
    { label: 'Loop', value: 'validate → repair' },
    { label: 'Output', value: 'Executable workflow JSON' },
    { label: 'Integrations', value: 'Gmail / Slack / Notion / Calendar / Fetch.ai' },
  ] as CsSpec[],
  stages: [
    { num: 'S.01', tag: 'capture', title: 'Voice Capture', body: 'User speaks a messy natural-language command through wearable glasses.' },
    { num: 'S.02', tag: 'parse', title: 'Intent Parsing', body: 'Gemini extracts the workflow goal, target apps, actions, and required parameters.' },
    { num: 'S.03', tag: 'loop', title: 'Validation + Repair', body: 'A constrained schema checks missing or invalid fields, then repairs the workflow before execution.' },
    { num: 'S.04', tag: 'execute', title: 'Multi-App Execution', body: 'The final JSON triggers coordinated actions across email, messaging, calendar, and productivity tools.' },
  ] as CsStage[],
  decisions: [
    { num: 'D.01', title: 'Structured JSON over freeform agents', body: 'Reliable workflows require predictable schemas, not open-ended model output.' },
    { num: 'D.02', title: 'Validate before execution', body: 'Every generated action is checked before touching external services.' },
    { num: 'D.03', title: 'Repair loop for messy speech', body: 'Voice commands are incomplete by nature, so the system fills and corrects parameters before running.' },
  ],
  footer: ['flux / case_study', 'voice → workflow · 2026'],
}

// ---------- Skyline Transport ----------

export const skyline = {
  index: '[004]',
  date: 'apr_2025',
  version: 'rev_B',
  tags: ['CAD', 'Cleanroom Systems', 'Mechanical Design', 'Trade-off Analysis'],
  desc: 'Modular overhead gantry and motorized cart system for semiconductor cleanroom material handling, designed around ISO 14644 constraints, vibration control, and a $2,300 BOM.',
  writeupUrl: '/skyline-transport-writeup.pdf',
  viewportTitle: 'skyline_transport — system_overview.dwg',
  viewportSuffix: '1:24',
  specs: [
    { label: 'Award', value: '2nd · ASME CADathon ’25' },
    { label: 'Standard', value: 'ISO 14644 cleanroom' },
    { label: 'BOM', value: '~$2,300 constraint' },
    { label: 'Load', value: '5–50 lbs · FoS ≈ 4' },
  ] as CsSpec[],
  breakdown: [
    {
      num: 'A.01',
      title: 'Overhead Gantry',
      body: 'Modular T-slot rail system for scalable cleanroom layouts — routes reconfigure without floor changes, keeping traffic off ISO-controlled floorspace.',
      footnote: 't-slot extrusion · modular routing',
      glyph: 'gantry',
    },
    {
      num: 'A.02',
      title: 'Locking Tray Assembly',
      body: 'Rotary mechanical locking head attaches and releases the storage unit — a passive interface with no powered actuation at the payload, verified to FoS ≈ 4.',
      footnote: 'rotary lock · pull-out tray',
      glyph: 'lock',
    },
    {
      num: 'A.03',
      title: 'Motorized Cart Elevator',
      body: 'Standalone cart raises the storage unit to the handoff height — offloading lift duty from the gantry to cut structural load and improve operator safety.',
      footnote: 'scissor lift · standalone drive',
      glyph: 'cart',
    },
  ] as { num: string; title: string; body: string; footnote: string; glyph: 'gantry' | 'lock' | 'cart' }[],
  phases: [
    { num: 'P1', name: 'Research', note: 'ISO 14644 airflow, particulate + ESD constraints for fab material handling.' },
    { num: 'P2', name: 'Brainstorm', note: 'Floor AGVs vs. overhead routing vs. hybrid transfer concepts.' },
    { num: 'P3', name: 'Decision Matrix', note: 'Weighted trade-offs: cost, cleanliness, vibration, modularity.' },
    { num: 'P4', name: 'CAD Iteration', note: 'Gantry, locking head, tray, and cart modeled + refined as one assembly.' },
    { num: 'P5', name: 'Stress Testing', note: 'Tray assembly holds 5–50 lbs with FoS ≈ 4 under static load.' },
    { num: 'P6', name: 'Future Work', note: 'Powered trolley drive, closed-loop positioning, multi-bay routing.' },
  ],
  footer: ['skyline_transport / case_study', 'ASME UC Berkeley · CADathon S25'],
}
