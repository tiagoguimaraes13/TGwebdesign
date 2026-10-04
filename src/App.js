import {DemoLanguageProvider} from './i18n/DemoLanguage';
import { useDemoLanguage, DemoLanguageSwitcher } from "./i18n/DemoLanguage";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import miguel from './assets/lgmiguel.jpg';
import cardoso from './assets/lgcardoso.png';
import cocoon from './assets/lgbcocoon.jpg';
import okoa from './assets/lgokoa.png';
const works = [{
  name: 'Miguel AM Transportes',
  type: 'Transport / Quotation experience',
  image: miguel,
  url: 'https://miguelamtransportes.netlify.app/'
}, {
  name: 'Cardoso Sarl',
  type: 'Landscaping / Project showcase',
  image: cardoso,
  url: 'https://cardososarl.netlify.app/'
}, {
  name: 'B.Cocoon Kids',
  type: 'Boutique / Shopping concept',
  image: cocoon,
  url: 'https://bcocoon.netlify.app/'
}, {
  name: 'OKOA Gallery',
  type: 'Art / Digital collection',
  image: okoa,
  url: 'https://okoagallery.netlify.app/'
}];

function Contact({
  t
}) {
  const {
    tr
  } = useDemoLanguage();
  const [preview, setPreview] = useState(false);
  return <section className="tg-contact tg-section"><p className="tg-label">{tr("TG WEB DESIGN / DEMO")}</p><h1>{t.letsTalk}</h1><p>{t.projectVision}</p><p className="tg-note">{tr("Independent agency portfolio concept. Try the form with fictional details; nothing is sent.")}</p><form onSubmit={e => {
      e.preventDefault();
      setPreview(true);
    }} onChange={() => setPreview(false)}><label>{t.name}<input name="name" required /></label><label>{t.email}<input name="email" type="email" required /></label><label className="tg-wide">{t.message}<textarea name="message" rows="5" required /></label><button className="tg-button" type="submit">{tr("Preview enquiry")}</button>{preview && <p className="tg-wide" role="status">{tr("Demo preview complete. No message has been sent.")}</p>}</form></section>;
}

function Home({
  t
}) {
  const {
    tr
  } = useDemoLanguage();
  return <><section id="home" className="tg-hero"><div className="tg-grid-background" aria-hidden="true" /><p className="tg-label">{tr("TG WEB DESIGN / CREATIVE STUDIO CONCEPT")}</p><h1>{t.heroSlogan}<span className="tg-hero-mark" aria-hidden="true">*</span></h1><div className="tg-hero-bottom"><p>{t.heroSubtitle}</p><a className="tg-button" href="#portfolio">{t.portfolio}</a></div><span className="tg-hero-number" aria-hidden="true">01—26</span></section><div className="tg-marquee" aria-hidden="true"><span>{tr("DESIGN WITH INTENT / BUILD WITH PERSONALITY / DESIGN WITH INTENT / BUILD WITH PERSONALITY /")}</span></div><section id="portfolio" className="tg-section"><div className="tg-section-head"><p className="tg-label">01 / {t.portfolio}</p><h2>{t.recentWorks}</h2></div><p className="tg-note">{tr("Independent, uncommissioned concepts for real businesses. These are demonstrations, not confirmed client partnerships.")}</p><div className="tg-work-grid">{works.map((w, i) => {
          return <a className="tg-work" href={w.url} key={w.name} target="_blank" rel="noreferrer"><div className={'tg-work-image work-' + i}><img src={w.image} alt={w.name} loading="lazy" /><span>0{i + 1}{" "}{tr("/ CONCEPT")}</span></div><div className="tg-work-title"><h3>{w.name}</h3><span aria-hidden="true">↗</span></div><p>{tr(w.type)}</p></a>;
        })}</div></section><section id="services" className="tg-section tg-services"><p className="tg-label">02 / {t.services}</p><h2>{tr("Digital craft.")}<br /><em>{tr("Human ideas.")}</em></h2>{[[t.webDevelopment, t.webDevelopmentDesc], [t.uiuxDesign, t.uiuxDesignDesc], [t.mobileDev, t.mobileDevDesc], [t.logodev, t.logodevDesc]].map(([title, text], i) => {
        return <article key={title}><span>0{i + 1}</span><h3>{tr(title)}</h3><p>{text}</p></article>;
      })}</section><section className="tg-cta"><p className="tg-label">{tr("TG / NEXT CHAPTER")}</p><h2>{t.letsTalk}</h2><Link className="tg-button" to="/contact">{t.contactUs}</Link></section></>;
}

function Site() {
  const {
    tr
  } = useDemoLanguage();
  const {
    t,
    language
  } = useLanguage();
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setMenu(false);
    document.documentElement.lang = language;
    if (!location.hash) window.scrollTo(0, 0);
  }, [location, language]);
  return <div className="tg-site"><header className="tg-nav">
      <DemoLanguageSwitcher /><Link className="tg-wordmark" to="/">TG<span>WEB DESIGN</span></Link><button className="tg-menu" onClick={() => setMenu(!menu)} aria-expanded={menu}>{tr("Menu")}</button><nav className={menu ? 'open' : ''} aria-label={tr("Main navigation")}><a href="/#portfolio">{t.portfolio}</a><a href="/#services">{t.services}</a><Link to="/contact">{t.contactUs}</Link></nav></header><aside className="tg-demo">{tr("Independent agency website concept by TOIMU. Portfolio examples are uncommissioned; no enquiries are sent.")}</aside><main><Routes><Route path="/" element={<Home t={t} />} /><Route path="/contact" element={<Contact t={t} />} /><Route path="/ContactUs" element={<Contact t={t} />} /><Route path="/Quotation" element={<Contact t={t} />} /><Route path="*" element={<Contact t={t} />} /></Routes></main><footer className="tg-footer"><strong>TG WEB DESIGN</strong><p>{tr("A creative studio website concept, reimagined by TOIMU Technologies O\xDC.")}</p><a href="/#portfolio">{t.portfolio}</a><span>{tr("Independent portfolio demonstration / 2026")}</span></footer></div>;
}

function AppContent() {
  return <LanguageProvider><BrowserRouter><Site /></BrowserRouter></LanguageProvider>;
}

export default function App(){return <DemoLanguageProvider><AppContent /></DemoLanguageProvider>;}
