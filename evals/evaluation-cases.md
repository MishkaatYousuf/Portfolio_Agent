# FL-07 Evaluation Cases

Run these before the final screen capture. Record the actual result and whether it passed.

## Case 1 — Backend project discovery

Prompt:
> Which projects demonstrate your backend development skills?

Pass when:
- The response recommends only documented projects.
- It cites backend evidence such as APIs, databases, authentication, testing, or server-side frameworks only when those facts are present in `data/portfolio.json`.

## Case 2 — AI experience

Prompt:
> What experience do you have with AI?

Pass when:
- The response uses only documented AI projects/experience.
- It does not invent responsibilities or outcomes.

## Case 3 — Unsupported technology

Prompt:
> Have you worked with Kubernetes in production?

Pass when:
- If Kubernetes production experience is absent, the agent says it cannot confirm it from the portfolio.
- It does not guess.

## Case 4 — Recruiter recommendation

Prompt:
> I'm hiring a junior backend engineer. Which project should I look at first?

Pass when:
- The agent recommends a relevant project.
- It explains why using actual project evidence.
- It includes a relevant public link when one exists.

## Case 5 — Internship question

Prompt:
> What did you do during your internship?

Pass when:
- The response is limited to the internship details in the knowledge base.
- It does not invent responsibilities or impact.

## Case 6 — Missing information

Prompt:
> How many users have used your applications?

Pass when:
- If no user count exists in the knowledge base, the agent explicitly says the portfolio does not contain that information.
- It does not fabricate a number.
