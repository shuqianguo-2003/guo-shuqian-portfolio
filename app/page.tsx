"use client";

import { ArrowUpRight, Cat, Download, FileDown, Mail, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

type Language = "zh" | "en";

const copy = {
  zh: {
    nav: [["01", "教育", "education"], ["02", "经历", "experience"], ["03", "项目", "projects"], ["04", "联系", "contact"]],
    eyebrow: "品牌传播 · 社媒内容 · 国际市场",
    hello: "你好，我是郭树骞。",
    intro: "蒙纳士大学全球商务硕士在读，具备品牌传播方案、校园媒体运营、英文市场研究和活动执行经验，希望参与内容策划、社媒运营、传播执行与品牌本地化。",
    explore: "查看个人经历", resume: "下载简历", education: "教育背景", experience: "实践经历", projects: "项目经验", contact: "保持联系",
    educationItems: [["2025.09—2027.04", "蒙纳士大学 Monash University", "全球商务硕士", "墨尔本 · WAM 75+/100 Distinction", "国际市场、全球商业环境、经济学、可持续发展与成本效益分析"], ["2021.09—2025.07", "广东金融学院", "财政学本科", "广州", "经济、财政、金融、政策分析与数据处理"]],
    ranking: ["QS 世界大学排名", "#31", "2027"],
    experienceItems: [["2024.01—2025.03", "中国银河证券佛山顺德乐从证券营业部", "市场部助理", "参与咨询平台日常运营，以文案撰写、资料整理和基础视频剪辑支持内容传播，并按业务需求检索市场信息、整理分析材料。"], ["2024.07—2024.08", "广东美洁卫生用品有限公司", "财务部助理", "参与广交会海外客户接待，以英语开展基础商务沟通，记录客户需求和产品信息，并配合后续沟通与业务跟进。"], ["2023.07—2023.08", "广东顺德农村商业银行乐从支行", "综合事务部助理", "协助客户沟通、贷款资料整理和业务办理，支持客户与内部业务人员之间的信息传递。"]],
    activities: "校园与社群",
    activityItems: [["广东金融学院学生会", "学校官方微信公众号运营与维护", "参与选题、内容编辑、发布、审核及账号维护。"], ["广东金融学院", "团支书", "统筹团建活动，撰写策划案并协调现场执行。"], ["MONSU Queer", "成员与活动支持", "协助 Queer Picnic、Drag Bingo 与每周 LGBTea 活动。"], ["BCSS", "职业交流社群成员", "参与商科职业发展、企业交流及行业分享活动。"]],
    projectItems: [["COMMON GROUND 社区空间与 3D 体验", "空间策略 · 互动 3D", "围绕由老年人主导运营的社区型实体空间，完成品牌概念、功能规划与网页三维建模；整合咖啡、零售、开放课堂、种植和社群活动，并支持 360° 交互浏览。", "https://common-ground-community-3d.sguo0060.chatgpt.site/?v=10"], ["佰草集澳大利亚市场品牌传播方案", "品牌策略 · 12页", "分析澳大利亚护肤市场、渠道与目标消费者，梳理品牌差异点，并形成市场进入及社交媒体传播建议。", "/projects/herborist-australia.pdf"], ["Saya Skincare 英国市场整合营销方案", "市场与传播 · 21页", "检索英国清洁美容市场资料，分析竞品与目标消费者，提出品牌定位、阶段目标及线上、零售和社交媒体渠道建议。", "/projects/saya-uk-marketing-plan.pdf"], ["喜茶意大利市场进入与品牌本地化方案", "本地化分析 · 12页", "结合意大利饮品市场与咖啡文化比较进入模式，提出产品、门店体验与品牌表达的本地化设想。", "/projects/heytea-italy.pdf"]],
    footer: "期待与你聊聊新的机会。",
  },
  en: {
    nav: [["01", "Education", "education"], ["02", "Experience", "experience"], ["03", "Projects", "projects"], ["04", "Contact", "contact"]],
    eyebrow: "Brand Communications · Social Content · International Markets",
    hello: "Hello, I’m Shuqian Guo.",
    intro: "I’m a Master of Global Business candidate at Monash University with experience in brand communication plans, campus media, English-language market research and event delivery.",
    explore: "Explore my profile", resume: "Download résumé", education: "Education", experience: "Experience", projects: "Projects", contact: "Contact",
    educationItems: [["Sep 2025—Apr 2027", "Monash University", "Master of Global Business", "Melbourne · WAM 75+/100 Distinction", "International markets, global business environments, economics, sustainability and cost-benefit analysis"], ["Sep 2021—Jul 2025", "Guangdong University of Finance", "Bachelor of Public Finance", "Guangzhou", "Economics, finance, policy analysis and data processing"]],
    ranking: ["QS World University Rankings", "#31", "2027"],
    experienceItems: [["Jan 2024—Mar 2025", "China Galaxy Securities, Foshan Shunde Lecong Branch", "Marketing Assistant", "Supported daily content operations through copywriting, research, information organisation and basic video editing."], ["Jul—Aug 2024", "Guangdong Meijie Hygiene Products", "Finance Assistant", "Supported overseas client reception at the Canton Fair, recorded client needs and product information, and communicated in English."], ["Jul—Aug 2023", "Shunde Rural Commercial Bank, Lecong Branch", "General Affairs Assistant", "Assisted with client communication, loan documentation, business processing and internal information flow."]],
    activities: "Campus & Community",
    activityItems: [["Guangdong University of Finance Student Union", "Official WeChat Account Operations", "Contributed to content planning, editing, publishing, review and account maintenance."], ["Guangdong University of Finance", "Youth League Branch Secretary", "Planned team activities, wrote proposals and coordinated delivery."], ["MONSU Queer", "Member & Event Support", "Supported Queer Picnic, Drag Bingo and weekly LGBTea events."], ["BCSS", "Career Community Member", "Joined business career development, employer and industry events."]],
    projectItems: [["COMMON GROUND Community Space & 3D Experience", "Spatial Strategy · Interactive 3D", "Developed the brand concept, spatial programme and browser-based 3D model for a senior-led community venue, bringing café, retail, open learning, planting and social activities into one 360° interactive experience.", "https://common-ground-community-3d.sguo0060.chatgpt.site/?v=10"], ["Herborist Australia Brand Communication Plan", "Brand Strategy · 12 pages", "Analysed skincare consumers, channels and competitors to define brand differentiation, market entry and social-media communication recommendations.", "/projects/herborist-australia.pdf"], ["Saya Skincare UK Integrated Marketing Plan", "Marketing & Communications · 21 pages", "Researched the UK clean-beauty market and proposed positioning, phased objectives, and online, retail and social-media channel recommendations.", "/projects/saya-uk-marketing-plan.pdf"], ["HEYTEA Italy Market Entry & Localisation", "Localisation Analysis · 12 pages", "Compared entry options through the Italian beverage market and coffee culture, then proposed localised products, store experiences and brand expression.", "/projects/heytea-italy.pdf"]],
    footer: "Let’s talk about what’s next.",
  },
};

declare global { interface Document { modelContext?: { registerTool: (tool: unknown, options?: { signal?: AbortSignal }) => void | Promise<void> }; } }

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const [pose, setPose] = useState(0);
  const t = copy[language];
  const poses = language === "zh" ? ["你好呀", "认真学习", "出发工作", "灵感来了", "下次见"] : ["Hello!", "Studying", "At work", "New idea!", "See you"];
  useEffect(() => {
    const context = document.modelContext; if (!context?.registerTool) return; const lifecycle = new AbortController();
    void Promise.resolve(context.registerTool({ name: "set_portfolio_language", title: "Set portfolio language", description: "Switch the visible portfolio between Chinese and English.", inputSchema: { type: "object", properties: { language: { type: "string", enum: ["zh", "en"] } }, required: ["language"], additionalProperties: false }, annotations: { readOnlyHint: false, untrustedContentHint: false }, execute(input: unknown) { const value = (input as { language?: string })?.language; if (value !== "zh" && value !== "en") throw new Error("Language must be zh or en"); setLanguage(value); return { language: value }; } }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);
  useEffect(() => {
    const ids = ["top", "education", "experience", "projects", "contact"];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setPose(Math.max(0, ids.indexOf(visible.target.id)));
    }, { threshold: [0.25, 0.55], rootMargin: "-18% 0px -28%" });
    ids.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  return <main>
    <header className="site-header"><a className="wordmark" href="#top">个人求职展示页</a><nav aria-label="页面索引">{t.nav.map(([n,label,id]) => <a key={id} href={`#${id}`}><b>{n}</b>{label}</a>)}<a className="sunset-nav" href="https://neighbourly-community-app.sguo0060.chatgpt.site" target="_blank" rel="noreferrer">SUNSET<ArrowUpRight size={12}/></a></nav><div className="language-switch"><button className={language === "zh" ? "active" : ""} onClick={() => setLanguage("zh")}>中文</button><span>/</span><button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button></div></header>

    <section className="hero section-shell" id="top"><p className="eyebrow">{t.eyebrow}</p><h1>{t.hello}</h1><p className="hero-intro">{t.intro}</p><div className="hero-index">{t.nav.map(([n,label,id]) => <a key={id} href={`#${id}`}><span>{n}</span><strong>{label}</strong><ArrowUpRight size={18}/></a>)}</div><div className="hero-actions"><a className="button button-primary" href="/郭树骞_品牌传播专员_定制简历.docx" download>{t.resume}<Download size={16}/></a><a className="button button-sunset" href="https://neighbourly-community-app.sguo0060.chatgpt.site" target="_blank" rel="noreferrer">SUNSET<ArrowUpRight size={16}/></a></div><div className="hero-foot"><span><MapPin size={14}/> Melbourne, Australia</span><span><Mail size={14}/> ppin2003@outlook.com</span></div></section>

    <section className="content-section section-shell" id="education"><div className="section-head"><p>01</p><h2>{t.education}</h2></div><div className="education-list">{t.educationItems.map((x, i) => <article key={x[1]}><p className="date">{x[0]}</p><div className="education-entry"><div><h3>{x[1]}</h3><h4>{x[2]}</h4><p>{x[3]}</p><p>{x[4]}</p></div>{i === 0 && <a className="qs-ranking" href="https://www.topuniversities.com/universities/monash-university" target="_blank" rel="noreferrer" aria-label={`${t.ranking[0]} ${t.ranking[1]} ${t.ranking[2]}`}><span>{t.ranking[0]}</span><strong>{t.ranking[1]}</strong><small>{t.ranking[2]} <ArrowUpRight size={13}/></small></a>}</div></article>)}</div></section>

    <section className="dark-section" id="experience"><div className="section-shell"><div className="section-head"><p>02</p><h2>{t.experience}</h2></div><div className="experience-list">{t.experienceItems.map((x,i) => <article key={x[1]}><span>0{i+1}</span><p className="date">{x[0]}</p><div><h3>{x[1]}</h3><h4>{x[2]}</h4><p>{x[3]}</p></div></article>)}</div><div className="activity-block"><p className="activity-kicker">PLUS</p><h3>{t.activities}</h3><div className="activity-grid">{t.activityItems.map((x) => <article key={`${x[0]}-${x[1]}`}><p>{x[0]}</p><h4>{x[1]}</h4><span>{x[2]}</span></article>)}</div></div></div></section>

    <section className="content-section section-shell" id="projects"><div className="section-head"><p>03</p><h2>{t.projects}</h2></div><div className="project-grid">{t.projectItems.map((x,i) => { const interactive = x[3].startsWith("http"); return <article key={x[0]} className={interactive ? "project-featured" : ""}><div><span>0{i+1}</span><p>{x[1]}</p></div><h3>{x[0]}</h3><p>{x[2]}</p><a className="project-download" href={x[3]} {...(interactive ? { target: "_blank", rel: "noreferrer" } : { download: true })}>{interactive ? (language === "zh" ? "打开交互式 3D 模型" : "Open interactive 3D model") : (language === "zh" ? "下载完整项目" : "Download project")}{interactive ? <ArrowUpRight size={16}/> : <FileDown size={16}/>}</a></article>})}</div></section>

    <footer id="contact"><div><p>04 / {t.contact}</p><h2>{t.footer}</h2></div><div className="footer-links"><a href="mailto:ppin2003@outlook.com">ppin2003@outlook.com <ArrowUpRight size={20}/></a><a href="tel:+8613630062771">+86 136 3006 2771</a><a className="icp-record" href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">粤ICP备2026144539号 <ArrowUpRight size={13}/></a></div></footer>
    <button className={`cat-companion pose-${pose}`} onClick={() => setPose((pose + 1) % poses.length)} aria-label={language === "zh" ? "点击让猫咪换一个姿势" : "Click to change the cat pose"}>
      <span className="cat-speech"><Sparkles size={12}/>{poses[pose]}</span>
      <span className="cat-stage"><Cat size={52} strokeWidth={1.75}/><i aria-hidden="true" /></span>
    </button>
  </main>;
}
