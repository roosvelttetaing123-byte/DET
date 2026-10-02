# DET Coach behavior
Visual context: DESIGN.md. Product requirements: README.md and docs/DET-SPEC.md.

| Capability | Owner | Variants | Verification |
|---|---|---|---|
| Forms | native labeled input/textarea/select | teacher / examiner | browser tests |
| Select/Listbox | native select | multiple blanks | keyboard/browser tests |
| Scrollbar | styles.css global baseline | navigation horizontal | responsive tests |
| Status | #status live region | storage/media errors | failure tests |
| Navigation | nav() and cleanupSession() | ordinary / active mock guarded by dialog | timer cancellation tests |
| Media | recording and speech helpers | teacher replay / examiner one attempt | media stub tests |
| Timing | countdown deadline | prep / per-item / shared section | fake-clock browser tests |

Navigation stops speech and recording and clears timers. Active mock exit uses native app-owned dialog with cancel focused, Escape dismisses and focus returns. No backend or network submission; local typed responses/progress remain in this browser. Session audio is transient and discarded on reload; transcripts are never fabricated. Permission failures are shown inline; a recording attempt cannot be counted as recorded without audio data. Browser storage failures keep the app usable and show a persistent status. No destructive data workflows. No tables or date inputs.

Examiners see corrections after the mock, except listening conversation feedback which the real task provides after each reply. Preparation is separate from response time. Shared timers do not reset per question. Exact matching is only a local diagnostic; no official partial credit/score claim. Follow-up writing shows the initial response. Open response drafts are retained on deliberate exam exit; interrupted mocks are not completed attempts.
