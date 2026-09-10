from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

# Theme colors
NAVY = RGBColor(9, 18, 35)
SLATE = RGBColor(22, 32, 52)
BLUE = RGBColor(64, 120, 255)
GREEN = RGBColor(40, 197, 128)
CYAN = RGBColor(94, 216, 255)
WHITE = RGBColor(255, 255, 255)
TEXT = RGBColor(225, 232, 240)
MUTED = RGBColor(160, 176, 196)
GOLD = RGBColor(255, 198, 83)


def set_bg(slide, color=NAVY):
    fill = slide.background.fill
    fill.solid()
    fill.fore_color.rgb = color


def add_title(slide, title, subtitle=None):
    title_box = slide.shapes.add_textbox(Inches(0.7), Inches(0.45), Inches(12.0), Inches(0.8))
    tf = title_box.text_frame
    p = tf.paragraphs[0]
    p.text = title
    p.alignment = PP_ALIGN.LEFT
    run = p.runs[0]
    run.font.size = Pt(24)
    run.font.bold = True
    run.font.color.rgb = WHITE
    if subtitle:
        sub_box = slide.shapes.add_textbox(Inches(0.7), Inches(1.1), Inches(12.0), Inches(0.35))
        tf2 = sub_box.text_frame
        p2 = tf2.paragraphs[0]
        p2.text = subtitle
        p2.alignment = PP_ALIGN.LEFT
        run2 = p2.runs[0]
        run2.font.size = Pt(11)
        run2.font.color.rgb = MUTED


def add_bullets(slide, x, y, w, h, bullets, font_size=18, color=TEXT):
    box = slide.shapes.add_textbox(x, y, w, h)
    tf = box.text_frame
    tf.word_wrap = True
    for i, bullet in enumerate(bullets):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.text = bullet
        p.level = 0
        p.bullet = True
        p.alignment = PP_ALIGN.LEFT
        p.space_after = Pt(10)
        run = p.runs[0]
        run.font.size = Pt(font_size)
        run.font.color.rgb = color
        if bullet.startswith('Key idea'):
            run.font.bold = True


def add_panel(slide, x, y, w, h, title=None, accent=BLUE, fill_color=SLATE):
    shape = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y, w, h)
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_color
    shape.line.color.rgb = accent
    shape.line.width = Pt(1.2)
    if title:
        tb = slide.shapes.add_textbox(x + Inches(0.2), y + Inches(0.12), w - Inches(0.4), Inches(0.4))
        tf = tb.text_frame
        p = tf.paragraphs[0]
        p.text = title
        run = p.runs[0]
        run.font.bold = True
        run.font.size = Pt(15)
        run.font.color.rgb = WHITE
    return shape


def add_bar(slide, x, y, w, h, value, label, color=BLUE):
    panel = add_panel(slide, x, y, w, h, fill_color=SLATE)
    bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, x + Inches(0.15), y + Inches(0.65), w - Inches(0.3), Inches(0.18))
    bar.fill.solid(); bar.fill.fore_color.rgb = color
    bar.line.color.rgb = color
    tb = slide.shapes.add_textbox(x + Inches(0.15), y + Inches(0.18), w - Inches(0.3), Inches(0.32))
    tf = tb.text_frame
    p = tf.paragraphs[0]
    p.text = f"{value}%"
    run = p.runs[0]
    run.font.bold = True; run.font.size = Pt(24); run.font.color.rgb = WHITE
    lb = slide.shapes.add_textbox(x + Inches(0.15), y + Inches(0.9), w - Inches(0.3), Inches(0.25))
    tf2 = lb.text_frame
    p2 = tf2.paragraphs[0]
    p2.text = label
    p2.runs[0].font.size = Pt(10); p2.runs[0].font.color.rgb = MUTED


prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

# Slide 1 - Title
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
# Top gradient-ish bars
bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), Inches(13.333), Inches(0.12))
bar.fill.solid(); bar.fill.fore_color.rgb = BLUE
bar.line.color.rgb = BLUE
# Logo mark
logo = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(0.7), Inches(0.55), Inches(0.6), Inches(0.6))
logo.fill.solid(); logo.fill.fore_color.rgb = BLUE
logo.line.color.rgb = BLUE
logo_text = slide.shapes.add_textbox(Inches(1.45), Inches(0.72), Inches(2.5), Inches(0.2))
logo_text.text_frame.text = 'Astera Labs'
logo_text.text_frame.paragraphs[0].runs[0].font.size = Pt(18); logo_text.text_frame.paragraphs[0].runs[0].font.bold = True; logo_text.text_frame.paragraphs[0].runs[0].font.color.rgb = WHITE

# Main headline
headline = slide.shapes.add_textbox(Inches(0.8), Inches(1.5), Inches(7.4), Inches(2.3))
text_frame = headline.text_frame
p = text_frame.paragraphs[0]
p.text = 'AI-powered targeted intervention hub for technical solvers and small businesses.'
p.alignment = PP_ALIGN.LEFT
run = p.runs[0]
run.font.size = Pt(28)
run.font.bold = True
run.font.color.rgb = WHITE

# subtext
sub = slide.shapes.add_textbox(Inches(0.8), Inches(3.4), Inches(6.3), Inches(1.0))
subtf = sub.text_frame
p2 = subtf.paragraphs[0]
p2.text = 'A two-sided platform that converts vague business pain into protected technical milestones, turns public supplier proof into credible capability, and helps prevent avoidable incidents before they become expensive projects.'
p2.alignment = PP_ALIGN.LEFT
p2.runs[0].font.size = Pt(16)
p2.runs[0].font.color.rgb = MUTED

# CTA buttons
btn1 = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(4.7), Inches(2.3), Inches(0.6))
btn1.fill.solid(); btn1.fill.fore_color.rgb = BLUE; btn1.line.color.rgb = BLUE
btn1_txt = slide.shapes.add_textbox(Inches(0.95), Inches(4.86), Inches(1.9), Inches(0.24)); btn1_txt.text_frame.paragraphs[0].text = 'I Need Solutions'; btn1_txt.text_frame.paragraphs[0].runs[0].font.bold = True; btn1_txt.text_frame.paragraphs[0].runs[0].font.color.rgb = WHITE
btn2 = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(3.4), Inches(4.7), Inches(2.5), Inches(0.6))
btn2.fill.solid(); btn2.fill.fore_color.rgb = RGBColor(20, 38, 58); btn2.line.color.rgb = GREEN
btn2_txt = slide.shapes.add_textbox(Inches(3.6), Inches(4.86), Inches(2.0), Inches(0.24)); btn2_txt.text_frame.paragraphs[0].text = 'I Provide Solutions'; btn2_txt.text_frame.paragraphs[0].runs[0].font.bold = True; btn2_txt.text_frame.paragraphs[0].runs[0].font.color.rgb = GREEN

# Visual: AI network node
node_bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(8.2), Inches(1.2), Inches(4.4), Inches(4.8))
node_bg.fill.solid(); node_bg.fill.fore_color.rgb = RGBColor(18, 28, 44); node_bg.line.color.rgb = BLUE
# central circle and nodes
for cx, cy, r, color in [
    (9.7, 2.6, 0.56, BLUE), (8.8, 3.7, 0.32, GREEN), (10.6, 3.7, 0.32, CYAN), (9.7, 5.1, 0.5, GOLD),
    (11.9, 2.4, 0.35, GREEN), (11.9, 4.5, 0.35, BLUE)
]:
    c = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(cx), Inches(cy), Inches(r*2), Inches(r*2))
    c.fill.solid(); c.fill.fore_color.rgb = color; c.line.color.rgb = color
# connection lines using a simple connector treatment
for x, y, w, h in [
    (9.6, 2.5, 0.4, 0.45), (10.0, 3.2, 0.35, 0.35), (9.0, 3.45, 0.45, 0.22), (10.5, 3.45, 0.5, 0.22), (9.7, 4.8, 0.45, 0.3)
]:
    connector = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(x), Inches(y), Inches(w), Inches(h))
    connector.fill.solid(); connector.fill.fore_color.rgb = CYAN
    connector.line.color.rgb = CYAN

# Slide 2 - Why this is different
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, 'Why this is not a generic freelance board', 'The platform is positioned as a targeted technical intervention hub.')

add_panel(slide, Inches(0.8), Inches(1.8), Inches(3.8), Inches(3.2), title='Market gap', accent=BLUE)
add_bullets(slide, Inches(1.0), Inches(2.2), Inches(3.3), Inches(2.5), [
    'Small businesses need urgent, specialized fixes, not generic hiring.',
    'Technical suppliers want structured, higher-trust work, not noisy gig competition.',
    'The current market has too much volume and too little precision.'
])

add_panel(slide, Inches(4.95), Inches(1.8), Inches(3.8), Inches(3.2), title='Platform wedge', accent=GREEN)
add_bullets(slide, Inches(5.15), Inches(2.2), Inches(3.3), Inches(2.5), [
    'Convert vague pain into scoped milestones with AI translation.',
    'Verify people and entities, then enrich capability with public signals and project evidence.',
    'Protect execution with privacy controls, smart escrow, and evidence-based reputation.'
])

add_panel(slide, Inches(9.1), Inches(1.8), Inches(3.3), Inches(3.2), title='Strategic edge', accent=GOLD)
add_bullets(slide, Inches(9.35), Inches(2.2), Inches(2.8), Inches(2.4), [
    'Specialized revenue engine, not a commodity marketplace.',
    'Preventive interventions create value before failure and consequential cost.',
    'Higher-margin service layer via elastic teams and curated demand.'
])

# Slide 3 - Business model core
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, 'Business model and revenue engine', 'Monetization must come from trust, matching quality, and workflow control.')

add_panel(slide, Inches(0.7), Inches(1.8), Inches(3.7), Inches(3.4), title='Demand-side revenue', accent=BLUE)
add_bullets(slide, Inches(0.95), Inches(2.25), Inches(3.1), Inches(2.5), [
    'Project success fee on matched interventions.',
    'Premium AI scoping and technical translation plans.',
    'Escrow facilitation and preventive diagnostic fees.'
])

add_panel(slide, Inches(4.75), Inches(1.8), Inches(3.7), Inches(3.4), title='Supply-side revenue', accent=GREEN)
add_bullets(slide, Inches(5.0), Inches(2.25), Inches(3.1), Inches(2.5), [
    'Proof-of-capability and identity/entity verification.',
    'Subscription for visibility and inbound projects.',
    'Revenue share on managed squads and funded preventive fixes.'
])

add_panel(slide, Inches(8.8), Inches(1.8), Inches(3.7), Inches(3.4), title='Platform leverage', accent=GOLD)
add_bullets(slide, Inches(9.05), Inches(2.25), Inches(3.1), Inches(2.5), [
    'AI-assisted proactive outreach for public technical risks.',
    'Umbrella agency model when demand exceeds supplier capacity.',
    'Data network effects from repeated problem-to-solution loops.'
])

# Slide 4 - Two-sided user journey
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, 'Two-sided journey: one trust layer, two tailored experiences', 'Demanders need clarity and privacy; suppliers need proof, signal, and qualified opportunity.')

add_panel(slide, Inches(0.8), Inches(1.7), Inches(5.8), Inches(3.7), title='Demand / business flow', accent=BLUE)
add_bullets(slide, Inches(1.05), Inches(2.15), Inches(5.2), Inches(2.8), [
    'Describe business pain in plain language.',
    'AI Technical Translator clarifies scope and anonymizes sensitive details.',
    'Review matched suppliers, milestones, budget, and delivery risk.',
    'Fund smart escrow and release payment against verifiable outcomes.'
])

add_panel(slide, Inches(6.75), Inches(1.7), Inches(5.8), Inches(3.7), title='Supply / solver flow', accent=GREEN)
add_bullets(slide, Inches(7.0), Inches(2.15), Inches(5.2), Inches(2.8), [
    'Connect public proof: CV, LinkedIn, GitHub, YouTube, or project pages.',
    'AI generates a capability profile with mapped stack and validated signals.',
    'Receive structured briefs and apply to high-fit interventions.',
    'Call out public vulnerabilities and earn funded preemptive bounties.'
])

notes = slide.shapes.add_textbox(Inches(0.9), Inches(5.7), Inches(11.3), Inches(0.8))
notes_tf = notes.text_frame
notes_tf.text = 'The shared trust layer connects both journeys: privacy-safe briefs, verified capability, milestone evidence, escrow, and multidimensional reputation.'
notes_tf.paragraphs[0].runs[0].font.size = Pt(15); notes_tf.paragraphs[0].runs[0].font.color.rgb = MUTED

# Slide 5 - Value proposition
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, 'What the product actually sells', 'It is not a marketplace; it is a trusted technical execution layer.')

add_panel(slide, Inches(0.9), Inches(1.7), Inches(3.9), Inches(3.7), title='For small businesses', accent=BLUE)
add_bullets(slide, Inches(1.1), Inches(2.15), Inches(3.4), Inches(2.9), [
    'No full-time hire needed.',
    'Faster issue diagnosis and scoping.',
    'Protected project execution with escrow.',
    'Better confidence in technical recommendations.'
])

add_panel(slide, Inches(4.9), Inches(1.7), Inches(3.9), Inches(3.7), title='For technical solvers', accent=GREEN)
add_bullets(slide, Inches(5.1), Inches(2.15), Inches(3.4), Inches(2.9), [
    'Verified capability instead of generic profile noise.',
    'Higher-quality project matches.',
    'Faster access to budgeted, structured work.',
    'A path to larger recurring revenue via squads.'
])

add_panel(slide, Inches(8.9), Inches(1.7), Inches(3.3), Inches(3.7), title='Platform promise', accent=GOLD)
add_bullets(slide, Inches(9.15), Inches(2.15), Inches(2.7), Inches(2.7), [
    'Outcome-based technical intervention.',
    'Trust and AI working together.',
    'Scalable specialized delivery.'
])

# Slide 6 - Logic check / improvements
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, 'Logic check: where the concept is strong and where it needs tightening', 'The idea is compelling, but several strategic choices need sharper positioning.')

add_panel(slide, Inches(0.8), Inches(1.8), Inches(5.5), Inches(3.7), title='What is strong', accent=GREEN)
add_bullets(slide, Inches(1.05), Inches(2.25), Inches(5.0), Inches(2.9), [
    'AI-driven scoping and translation reduce ambiguity for non-technical buyers.',
    'Proof-of-capability improves trust and supplier quality relative to a standard gig board.',
    'Escrow and reputation systems create real operating confidence for both parties.',
    'Elastic teams and preemptive pitching create a strong scale plan beyond simple matching.'
])

add_panel(slide, Inches(6.7), Inches(1.8), Inches(5.7), Inches(3.7), title='What needs improvement', accent=GOLD)
add_bullets(slide, Inches(6.95), Inches(2.25), Inches(5.2), Inches(2.9), [
    'Define the first vertical sharply: e.g., web performance, e-commerce reliability, or security remediation.',
    'Avoid over-emphasizing general AI without proving real user value in the first 90 days.',
    'Design the trust deposit as a quality filter, not simply a fee.',
    'Prevent false positives in proof-of-capability generation by mixing public-signal analysis with verified artifacts.'
])

# Slide 7 - Product UX foundation
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, 'UX foundation: role-based web platform strategy', 'The landing page routes users into distinct demand and supplier workspaces.')

# left panel - role pages
add_panel(slide, Inches(0.8), Inches(1.8), Inches(5.4), Inches(4.1), title='Role-based entry points', accent=BLUE)
add_bullets(slide, Inches(1.0), Inches(2.2), Inches(4.9), Inches(3.1), [
    'Hero: clear positioning as a targeted intervention hub.',
    'Demand page: AI brief translation, privacy review, matching, and escrow.',
    'Supplier page: public-proof ingestion, capability profile, opportunities, and preventive outreach.',
    'Trust page: Vipps-ready identity/entity verification, escrow, evidence, and reputation.',
    'Shared navigation keeps the marketplace legible without collapsing both personas.',
    'Trust surfaces remain visible at every conversion step.'
])

# right flow
add_panel(slide, Inches(6.6), Inches(1.8), Inches(5.9), Inches(4.1), title='Web flow', accent=GREEN)
blocks = ['Home', 'Demand', 'AI scope', 'Supplier', 'Trust', 'Prevent + deliver']
for i, text in enumerate(blocks):
    x = Inches(6.95 + (i % 3) * 1.7)
    y = Inches(2.25 + (i // 3) * 1.3)
    box = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y, Inches(1.45), Inches(0.95))
    box.fill.solid(); box.fill.fore_color.rgb = SLATE; box.line.color.rgb = GREEN
    tb = slide.shapes.add_textbox(x + Inches(0.08), y + Inches(0.2), Inches(1.28), Inches(0.5))
    tf = tb.text_frame
    p = tf.paragraphs[0]
    p.text = text
    p.alignment = PP_ALIGN.CENTER
    p.runs[0].font.size = Pt(10); p.runs[0].font.color.rgb = WHITE

# Slide 8 - Web architecture
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, 'Web platform architecture', 'Separate role experiences sit on top of shared AI, trust, and liquidity services.')

add_panel(slide, Inches(0.8), Inches(1.8), Inches(3.6), Inches(3.8), title='Role experiences', accent=BLUE)
add_bullets(slide, Inches(1.05), Inches(2.2), Inches(3.1), Inches(2.9), [
    'Demand workspace for problem intake and protected briefs.',
    'Supplier workspace for capability and opportunity discovery.',
    'React + Tailwind + Framer Motion for responsive product UI.',
    'Shared design language with role-specific information density.'
])

add_panel(slide, Inches(4.8), Inches(1.8), Inches(3.7), Inches(3.8), title='Shared platform services', accent=GREEN)
add_bullets(slide, Inches(5.05), Inches(2.2), Inches(3.2), Inches(2.9), [
    'Problem and capability indexing for matching.',
    'Vipps identity and ENK / AS entity verification status.',
    'Milestone escrow lifecycle management.',
    'Evidence, reputation, outreach review, and liquidity orchestration.'
])

add_panel(slide, Inches(8.9), Inches(1.8), Inches(3.6), Inches(3.8), title='AI + security layer', accent=GOLD)
add_bullets(slide, Inches(9.15), Inches(2.2), Inches(3.1), Inches(2.9), [
    'Agentic scoping, anonymization, and clarification.',
    'Public-signal parsing into capability profiles.',
    'Encrypted proprietary data and controlled disclosure.',
    'Predictive vulnerability detection with rate-limited safe disclosure.'
])

# Slide 9 - Trust and prevention operating model
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, 'Trust and prevention: the operating model', 'Astera reduces risk before matching, during delivery, and before a public issue becomes an avoidable incident.')

add_panel(slide, Inches(0.8), Inches(1.8), Inches(3.8), Inches(3.9), title='1. Verify the actor', accent=BLUE)
add_bullets(slide, Inches(1.05), Inches(2.25), Inches(3.3), Inches(3.0), [
    'Individual: real-name verification through Vipps.',
    'ENK: verify proprietor and organization number.',
    'AS: verify authorized person and company identity.',
    'Expose verification status, not unnecessary identity data.'
], font_size=16)

add_panel(slide, Inches(4.8), Inches(1.8), Inches(3.8), Inches(3.9), title='2. Prove the work', accent=GREEN)
add_bullets(slide, Inches(5.05), Inches(2.25), Inches(3.3), Inches(3.0), [
    'Define acceptance evidence before funds are locked.',
    'Show milestone state: locked, in review, or released.',
    'Score speed, reliability, and quality separately.',
    'Keep both sides informed at every handoff.'
], font_size=16)

add_panel(slide, Inches(8.8), Inches(1.8), Inches(3.8), Inches(3.9), title='3. Prevent the incident', accent=GOLD)
add_bullets(slide, Inches(9.05), Inches(2.25), Inches(3.3), Inches(3.0), [
    'Supplier uses public signals to flag a possible client risk.',
    'AI drafts a bounded, respectful, non-alarmist message.',
    'Astera reviews and rate-limits outreach.',
    'Accepted signal becomes a funded diagnostic or bounty.'
], font_size=16)

# Slide 10 - MVP roadmap
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, 'MVP roadmap', 'Start with role-based trust workflows, then expand into predictive liquidity management.')

add_bar(slide, Inches(0.9), Inches(2.0), Inches(2.6), Inches(2.0), 25, 'Phase 1: demand + supplier pages', BLUE)
add_bar(slide, Inches(3.9), Inches(2.0), Inches(2.6), Inches(2.0), 45, 'Phase 2: AI scoping + profiles', GREEN)
add_bar(slide, Inches(6.9), Inches(2.0), Inches(2.6), Inches(2.0), 70, 'Phase 3: Vipps + escrow + reputation', GOLD)
add_bar(slide, Inches(9.9), Inches(2.0), Inches(2.6), Inches(2.0), 90, 'Phase 4: prevention + elastic teams', CYAN)

notes2 = slide.shapes.add_textbox(Inches(1.0), Inches(4.7), Inches(11.0), Inches(1.2))
notes2_tf = notes2.text_frame
notes2_tf.text = 'The first proof point is a trusted loop: a verified person or entity submits a protected problem, receives a credible match, and releases funds against evidence. The next compounding loop lets suppliers prevent incidents before they become expensive work.'
notes2_tf.paragraphs[0].runs[0].font.size = Pt(16); notes2_tf.paragraphs[0].runs[0].font.color.rgb = MUTED

# Slide 11 - MVP roadmap detail
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, 'Scale engine: liquidity without losing trust', 'The marketplace grows by actively managing imbalance between demand and supply.')

add_panel(slide, Inches(0.9), Inches(1.9), Inches(5.6), Inches(3.8), title='When demand is high', accent=BLUE)
add_bullets(slide, Inches(1.15), Inches(2.35), Inches(5.0), Inches(2.8), [
    'Use verified supplier profiles to assemble elastic squads.',
    'Add a delivery lead and shared acceptance criteria.',
    'Keep escrow and reputation at the squad level.',
    'Prevent bottlenecks without lowering proof standards.'
])
add_panel(slide, Inches(6.8), Inches(1.9), Inches(5.6), Inches(3.8), title='When supply is high', accent=GREEN)
add_bullets(slide, Inches(7.05), Inches(2.35), Inches(5.0), Inches(2.8), [
    'Use safe outbound campaigns to surface public risks.',
    'Invite clients into bounded diagnostics, not unsolicited fear.',
    'Fund accepted prevention work through the same trust layer.',
    'Turn idle capability into useful, measurable intervention.'
])

# Slide 10 - Final thesis
slide = prs.slides.add_slide(prs.slide_layouts[6])
set_bg(slide)
add_title(slide, 'Final strategic thesis', 'The product becomes differentiated when AI reduces uncertainty and trust mechanisms reduce risk.')

big = slide.shapes.add_textbox(Inches(1.0), Inches(2.2), Inches(11.3), Inches(2.8))
big_tf = big.text_frame
big_tf.word_wrap = True
big_p = big_tf.paragraphs[0]
big_p.text = 'The platform should not be positioned as a freelance board; it should be framed as execution infrastructure for targeted technical interventions. The winning combination is Vipps-ready identity and entity verification + privacy-safe AI translation + proactive risk prevention + capability proof + secure milestone delivery.'
big_p.alignment = PP_ALIGN.CENTER
big_p.runs[0].font.size = Pt(22); big_p.runs[0].font.color.rgb = WHITE; big_p.runs[0].font.bold = True

callout = slide.shapes.add_textbox(Inches(2.4), Inches(5.0), Inches(8.5), Inches(0.9))
callout_tf = callout.text_frame
callout_tf.text = 'Trust is not a badge added after matching. It is the system that makes prevention, matching, delivery, and scale possible.'
callout_tf.paragraphs[0].alignment = PP_ALIGN.CENTER
callout_tf.paragraphs[0].runs[0].font.size = Pt(18); callout_tf.paragraphs[0].runs[0].font.color.rgb = GREEN; callout_tf.paragraphs[0].runs[0].font.bold = True

prs.save('ai_talent_exchange_brainstorming_v2.pptx')
print('Deck created: ai_talent_exchange_brainstorming_v2.pptx')
