# Production audit — DET Coach v1.0.0

Audited the main branch originally at 90fa9513fc52f873b2137587e9b07c05f6c32822.

## Changes
- Fixed the failing validator's browser-global assumption (`MOCK` and `PRACTICE` were not defined in its isolated VM).
- Removed the obsolete repeated-question mock builder. A single original fixed form supplies 77 tasks.
- Fixed a separate JavaScript syntax failure caused by adjacent function assignments without statement separators. Added syntax validation to prevent recurrence.
- Added multi-gap Read and Complete passages and all five Interactive Reading subtypes (including two highlights per set), with one shared seven-minute timer per set.
- Added two listening scenarios, three Listen and Complete blanks and six distinct response turns per scenario, one shared 6:30 timer per set, scenario replay, one-play conversational clips, correction feedback and a separate 75-second summary per conversation.
- Added the missing two photo-writing tasks and photo-speaking task; supplied original local illustrations with explicit photo-fidelity disclosure.
- Added the official separate preparation periods and initial-response visibility during writing follow-up.
- Changed Interactive Speaking from written questions to one-play spoken prompts followed by 35-second responses.
- Rebuilt recording lifecycle: one attempt in examiner mode, actual data-based recorded status, playback after the mock, stopped microphone tracks, discarded late permission grants, and visible unsupported/denied recording states. No fabricated spoken transcripts/completion.
- Used wall-clock deadlines to survive timer throttling. Leaving a mock requires a dismissible app dialog; navigation stops media/timers and retains the interrupted attempt without adding to completed-attempt totals.
- Recovered from corrupt, malformed and blocked browser storage. Escaped learner responses in reports; retained the latest 20 compact mock summaries and latest 500 errors. Added labels, focus treatments, selected states, active navigation, readable responsive controls and global scrollbars.
- Added a pinned dependency lockfile, browser smoke/regression suite, reproducible local server, expanded GitHub Actions validation and failure artifacts.
- Added official-source mechanics documentation, explicit limits, durable design and behavior contracts.

## Validation
Content, asset, frequency, preparation, shared-section and JavaScript syntax validation passed. All 39 browser checks passed across desktop (1440px), touch mobile (390px), and narrow (320px) Chromium layouts. Screenshots manually inspected at desktop/mobile widths. Browser automation covers full mock completion, navigation, prep/deadlines, storage corruption and denial, response escaping, microphone rejection, data/track lifecycle through controlled media doubles, delayed permission, real MediaRecorder capture using Chromium’s synthetic microphone, and stale audio discard on navigation. It does not establish real microphone or synthesized voice quality on a physical iPhone. Automated WCAG A/AA accessibility checks passed on all nine views and examiner fields at each layout; secondary-text contrast was corrected. DESIGN.md lint passed without errors or warnings. npm audit reported zero vulnerabilities. No production JavaScript dependencies or backend services.

## Remaining limitations
This is a fixed beginner practice coach, not a certified exam replica. Smaller item bank and shorter passages, fixed writing follow-up and speaking prompts, illustration rather than photo assets, synthetic audio, audio-only sample rather than video, local exact-match diagnostics rather than official partial credit, and self-review rather than automatic expert grading remain intentional release limits. Timed mocks cannot resume after reload. Audio lasts only in the current session; progress and typed responses have no cloud backup. Physical iOS/Safari, Firefox and real microphone/speaker quality need manual device testing. No hosting deployment was requested or verified. The app makes no score or admission guarantees.
