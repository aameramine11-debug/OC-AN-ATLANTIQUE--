import React, { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "212600000000"; // À remplacer par le vrai numéro WhatsApp de l'agence.
const INSTAGRAM_URL = "https://www.instagram.com/location_de_jetski_agadir/";

const images = {
  action: "/images/jet-ski-action.jpeg",
  sunset: "/images/sunset-jet-ski.jpeg",
  beach: "/images/agadir-beach-jetski.jpeg",
  duo: "/images/jet-ski-duo.jpeg",
  rider: "/images/rider-portrait.jpeg",
  team: "/images/ama-team.jpeg",
  logo: "/images/ama-logo.png",
};

const prices = [
  { minutes: 15, price: 350 },
  { minutes: 20, price: 450 },
  { minutes: 25, price: 500, popular: true },
  { minutes: 30, price: 600 },
  { minutes: 40, price: 800 },
  { minutes: 45, price: 900 },
  { minutes: 60, price: 1200 },
];

const iconPaths = {
  arrow: ["M7 17 17 7", "M7 7h10v10"],
  arrowRight: ["M4 12h15", "m13 5 7 7-7 7"],
  wave: ["M2 12c2.3-3 4.3-3 6.6 0s4.3 3 6.6 0 4.3-3 6.6 0 4.3 3 6.2 0", "M2 18c2.3-3 4.3-3 6.6 0s4.3 3 6.6 0 4.3-3 6.6 0 4.3 3 6.2 0"],
  shield: ["M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z", "m9 12 2 2 4-4"],
  pin: ["M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z", "M12 10h.01"],
  clock: ["M12 8v4l3 2", "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"],
  users: ["M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", "M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M20 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
  instagram: ["M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z", "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M17.5 6.5h.01"],
  check: ["m5 12 4 4L19 6"],
  close: ["M18 6 6 18", "M6 6l12 12"],
  menu: ["M3 6h18", "M3 12h18", "M3 18h18"],
  bolt: ["m13 2-3 8h7l-6 12 2-9H6l7-11Z"],
  calendar: ["M8 2v4", "M16 2v4", "M3 9h18", "M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Z"],
  message: ["M21 11.5a8.5 8.5 0 0 1-12.8 7.3L3 21l2.2-5.2A8.5 8.5 0 1 1 21 11.5Z"],
};

function Icon({ name, size = 20, strokeWidth = 1.7, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      {(iconPaths[name] || []).map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

function Price({ price }) {
  return <>{price.toLocaleString("fr-FR")} <small>DH</small></>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("fr");
  const [duration, setDuration] = useState(25);
  const [people, setPeople] = useState("1");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [faqOpen, setFaqOpen] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const ar = lang === "ar";
  const t = {
    fr: {
      ticker:"RIDE THE ATLANTIC ✳ FEEL THE FREEDOM ✳ AGADIR, MAROC ✳", topLocation:"AGADIR, MAROC", topLine:"OCÉAN ATLANTIQUE · SPORTS NAUTIQUES", follow:"SUIVEZ L'AVENTURE", experience:"L'expérience", prices:"Tarifs", gallery:"Galerie", faq:"FAQ", reserve:"Réserver",
      eyebrow:"ÉCOLE FÉDÉRALE AMA", hero1:"L'océan change", hero2:"tout. ", hero3:"Vous aussi.", heroText:"Le souffle de l'Atlantique. La puissance du jet ski. Une expérience à vivre sur la côte d'Agadir.", bookSession:"Réserver une session", discover:"Découvrir", discover2:"l'expérience", minutesFreedom:"MINUTES DE LIBERTÉ", from:"À PARTIR DE", headingOcean:"Pas seulement", headingWater:"sur l'eau. ", headingMoment:"Dans l'instant.", intro:"Quittez la plage, prenez le large et regardez Agadir autrement. Chez AMA, chaque session est une parenthèse de liberté, de vitesse et de sensations fortes.", chooseSession:"Choisir ma session", why:"POURQUOI AMA", energy:"La bonne énergie.", spot:"Le bon spot.", features:[["Des sensations vraies","De la première accélération aux éclaboussures, faites le plein d'adrénaline sur l'Atlantique."],["Un départ bien préparé","Les consignes et conditions de sécurité sont présentées par l'équipe avant votre session."],["À partager ensemble","Une activité pour pimenter vos vacances, entre amis, en couple ou en famille."]], pricingNo:"02 / NOS TARIFS", yourTime:"Votre temps.", yourAdventure:"Votre aventure.", pricingIntro:"Choisissez votre durée et préparez votre sortie. La disponibilité est confirmée directement avec notre équipe.", duration:"DURÉE DE SESSION", price:"TARIF", popular:"LE CHOIX POPULAIRE", priceNote:"Prix en dirhams marocains. Conditions et disponibilité à confirmer auprès de l'agence.", ready:"PRÊT À PRENDRE LE LARGE", sessionStarts:"VOTRE SESSION COMMENCE ICI", meet:"On se retrouve", onWater:"sur l'eau.", bookingText:"Envoyez une demande de réservation. L'équipe vous répondra pour confirmer les détails.", fullName:"Nom complet", yourName:"Votre nom", phone:"Téléphone / WhatsApp", desiredDate:"Date souhaitée", participants:"Participants", person:"personne", people:"personnes", requestWhatsApp:"Demander sur WhatsApp", noPayment:"Aucun paiement en ligne ici. Confirmation par WhatsApp.", galleryNo:"03 / VOS MOMENTS AMA", coast:"La côte en toile de fond.", adrenaline:"L'adrénaline au premier plan.", followInstagram:"Suivre sur Instagram", faqNo:"04 / AVANT DE PARTIR", question:"Une question ?", here:"On est là.", faqIntro:"Les infos utiles pour préparer votre session sereinement.", talkTeam:"Parler à l'équipe AMA", ctaKicker:"L'ATLANTIQUE VOUS ATTEND", readyToRide:"Prêt à faire", waves:"des vagues ?", ctaText:"Votre prochaine belle histoire commence sur l'eau.", footerJoin:"REJOIGNEZ-NOUS", backTop:"Retour en haut", footerLine:"FAIT POUR LES AMOUREUX DE L'OCÉAN", minutes:"min", galleryLabels:["HEURE DORÉE","SENSATIONS FORTES","PLEIN GAZ","BELLE ÉQUIPE"], faqs:[["Est-ce accessible aux débutants ?","Oui, les débutants sont les bienvenus. Une présentation des règles et consignes de sécurité est à prévoir avant le départ."],["Que dois-je apporter ?","Prévoyez votre maillot de bain, une serviette et de la crème solaire. L'équipe vous confirmera les équipements et consignes sur place."],["Comment confirmer ma réservation ?","Envoyez votre demande via WhatsApp. L'équipe AMA vous confirmera les disponibilités, l'horaire et les conditions."],["Les prix sont-ils définitifs ?","Les montants affichés reprennent la grille tarifaire communiquée. Confirmez toujours les conditions et le prix final directement avec l'agence."]], message:"Bonjour AMA Jet Ski ! Je souhaite demander une réservation.", labels:["Nom","Téléphone","Date souhaitée","Durée","Participants","Tarif indicatif"], clarify:"À préciser", toAgree:"À convenir", minutesWord:"minutes", session:"session jet ski", contactLocation:"Agadir, Maroc", enlarge:"Agrandir la photo", close:"Fermer" },
      en: {
      ticker:"RIDE THE ATLANTIC ✳ FEEL THE FREEDOM ✳ AGADIR, MOROCCO ✳", topLocation:"AGADIR, MOROCCO", topLine:"ATLANTIC OCEAN · WATERSPORTS", follow:"FOLLOW THE ADVENTURE", experience:"Experience", prices:"Prices", gallery:"Gallery", faq:"FAQ", reserve:"Book now",
      eyebrow:"AMA FEDERAL SCHOOL", hero1:"The ocean changes", hero2:"everything. ", hero3:"So do you.", heroText:"The breath of the Atlantic. The power of a jet ski. An experience to live on the coast of Agadir.", bookSession:"Book a session", discover:"Discover", discover2:"the experience", minutesFreedom:"MINUTES OF FREEDOM", from:"STARTING FROM", headingOcean:"More than", headingWater:"just the water. ", headingMoment:"Be in the moment.", intro:"Leave the beach behind, head out to sea and discover Agadir from a different perspective. With AMA, every ride is a moment of freedom, speed and pure excitement.", chooseSession:"Choose your session", why:"WHY AMA", energy:"Good energy.", spot:"The right spot.", features:[["Real sensations","From the first acceleration to the spray, get your adrenaline flowing on the Atlantic."],["A prepared departure","Our team explains the safety rules and conditions before your session."],["Better together","A great way to add adventure to your holiday with friends, a partner or family." ]], pricingNo:"02 / OUR PRICES", yourTime:"Your time.", yourAdventure:"Your adventure.", pricingIntro:"Choose your duration and get ready to ride. Availability is confirmed directly with our team.", duration:"SESSION DURATION", price:"PRICE", popular:"POPULAR CHOICE", priceNote:"Prices in Moroccan dirhams (MAD). Please confirm conditions and availability with the agency.", ready:"READY TO RIDE", sessionStarts:"YOUR SESSION STARTS HERE", meet:"Meet us", onWater:"on the water.", bookingText:"Send a booking request. Our team will reply to confirm the details.", fullName:"Full name", yourName:"Your name", phone:"Phone / WhatsApp", desiredDate:"Preferred date", participants:"Participants", person:"person", people:"people", requestWhatsApp:"Request via WhatsApp", noPayment:"No online payment here. Confirmation via WhatsApp.", galleryNo:"03 / YOUR AMA MOMENTS", coast:"The coast as your backdrop.", adrenaline:"Adrenaline in the foreground.", followInstagram:"Follow on Instagram", faqNo:"04 / BEFORE YOU GO", question:"Have a question?", here:"We're here.", faqIntro:"Useful information to help you prepare for your session.", talkTeam:"Talk to the AMA team", ctaKicker:"THE ATLANTIC IS WAITING", readyToRide:"Ready to make", waves:"some waves?", ctaText:"Your next great memory starts on the water.", footerJoin:"FOLLOW OUR JOURNEY", backTop:"Back to top", footerLine:"MADE FOR OCEAN LOVERS", minutes:"min", galleryLabels:["GOLDEN HOUR","FEEL THE RUSH","FULL THROTTLE","GOOD PEOPLE"], faqs:[["Is it suitable for beginners?","Yes, beginners are welcome. A briefing on the rules and safety instructions takes place before departure."],["What should I bring?","Bring swimwear, a towel and sunscreen. The team will confirm the equipment and instructions on site."],["How do I confirm my booking?","Send your request via WhatsApp. The AMA team will confirm availability, timing and conditions."],["Are the prices final?","The displayed amounts are based on the price list provided. Always confirm the final price and conditions directly with the agency."]], message:"Hello AMA Jet Ski! I'd like to request a booking.", labels:["Name","Phone","Preferred date","Duration","Participants","Indicative price"], clarify:"To be confirmed", toAgree:"To be agreed", minutesWord:"minutes", session:"jet ski session", contactLocation:"Agadir, Morocco", enlarge:"Enlarge photo", close:"Close" },
      ar: {
      ticker:"عِش الأطلسي ✳ اشعر بالحرية ✳ أكادير، المغرب ✳", topLocation:"أكادير، المغرب", topLine:"المحيط الأطلسي · الرياضات البحرية", follow:"تابعوا المغامرة", experience:"التجربة", prices:"الأسعار", gallery:"معرض الصور", faq:"الأسئلة", reserve:"احجز الآن",
      eyebrow:"المدرسة الفيدرالية AMA", hero1:"المحيط يغيّر", hero2:"كل شيء. ", hero3:"وأنت أيضاً.", heroText:"نسيم الأطلسي وقوة الجيت سكي. تجربة لا تُنسى على ساحل أكادير.", bookSession:"احجز جولتك", discover:"اكتشف", discover2:"التجربة", minutesFreedom:"دقيقة من الحرية", from:"ابتداءً من", headingOcean:"أكثر من", headingWater:"مجرد بحر. ", headingMoment:"عِش اللحظة.", intro:"ابتعد عن الشاطئ واكتشف أكادير من زاوية مختلفة. مع AMA، كل جولة لحظة من الحرية والسرعة والحماس.", chooseSession:"اختر جولتك", why:"لماذا AMA؟", energy:"طاقة رائعة.", spot:"المكان المثالي.", features:[["إحساس حقيقي","من أول انطلاقة إلى رذاذ الماء، عِش الحماس فوق مياه الأطلسي."],["انطلاقة آمنة","يشرح الفريق تعليمات السلامة والشروط قبل بداية الجولة."],["متعة مع الجميع","نشاط رائع مع الأصدقاء أو الشريك أو العائلة." ]], pricingNo:"02 / الأسعار", yourTime:"وقتك.", yourAdventure:"مغامرتك.", pricingIntro:"اختر المدة واستعد للانطلاق. يتم تأكيد التوفر مباشرة مع فريقنا.", duration:"مدة الجولة", price:"السعر", popular:"الخيار الأكثر شعبية", priceNote:"الأسعار بالدرهم المغربي. يرجى تأكيد الشروط والتوفر مع الوكالة.", ready:"هل أنت مستعد؟", sessionStarts:"مغامرتك تبدأ هنا", meet:"نلتقي", onWater:"فوق الماء.", bookingText:"أرسل طلب الحجز وسيتواصل معك الفريق لتأكيد التفاصيل.", fullName:"الاسم الكامل", yourName:"اكتب اسمك", phone:"الهاتف / واتساب", desiredDate:"التاريخ المفضل", participants:"عدد المشاركين", person:"شخص", people:"أشخاص", requestWhatsApp:"اطلب عبر واتساب", noPayment:"لا يوجد دفع إلكتروني هنا. تأكيد الحجز عبر واتساب.", galleryNo:"03 / لحظات AMA", coast:"الساحل في الخلفية.", adrenaline:"والحماس في المقدمة.", followInstagram:"تابعنا على إنستغرام", faqNo:"04 / قبل الانطلاق", question:"لديك سؤال؟", here:"نحن هنا.", faqIntro:"معلومات مفيدة للاستعداد لجولتك بكل راحة.", talkTeam:"تواصل مع فريق AMA", ctaKicker:"الأطلسي في انتظارك", readyToRide:"هل أنت مستعد لصناعة", waves:"الأمواج؟", ctaText:"ذكرياتك الجميلة القادمة تبدأ فوق الماء.", footerJoin:"تابعنا", backTop:"العودة للأعلى", footerLine:"لعشاق المحيط", minutes:"دقيقة", galleryLabels:["ساعة الغروب","عِش الحماس","انطلق بقوة","فريق رائع"], faqs:[["هل التجربة مناسبة للمبتدئين؟","نعم، نرحب بالمبتدئين. يشرح الفريق قواعد الاستخدام وتعليمات السلامة قبل الانطلاق."],["ماذا يجب أن أحضر؟","أحضر ملابس السباحة ومنشفة وواقي الشمس. سيؤكد الفريق المعدات والتعليمات في المكان."],["كيف أؤكد الحجز؟","أرسل طلبك عبر واتساب، وسيؤكد فريق AMA التوفر والتوقيت والشروط."],["هل الأسعار نهائية؟","الأسعار المعروضة مأخوذة من لائحة الأسعار التي قدمتموها. يرجى تأكيد السعر النهائي والشروط مباشرة مع الوكالة."]], message:"مرحباً AMA Jet Ski! أريد طلب حجز.", labels:["الاسم","الهاتف","التاريخ المفضل","المدة","المشاركون","السعر التقريبي"], clarify:"يحدد لاحقاً", toAgree:"يتم الاتفاق عليه", minutesWord:"دقيقة", session:"جولة جيت سكي", contactLocation:"أكادير، المغرب", enlarge:"تكبير الصورة", close:"إغلاق" }
    }[lang];
  const selected = prices.find((p) => p.minutes === Number(duration)) || prices[2];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = ar ? "rtl" : "ltr";
  }, [lang, ar]);
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-visible")); return; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.14 });
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => { const handleKey = (e) => { if (e.key === "Escape") setLightbox(null); }; window.addEventListener("keydown", handleKey); return () => window.removeEventListener("keydown", handleKey); }, []);

  const reserve = (e) => {
    e.preventDefault();
    const message = [t.message, "", `${t.labels[0]}: ${name || t.clarify}`, `${t.labels[1]}: ${phone || t.clarify}`, `${t.labels[2]}: ${date || t.toAgree}`, `${t.labels[3]}: ${duration} ${t.minutesWord}`, `${t.labels[4]}: ${people === "1" ? `1 ${t.person}` : people === "2" ? `2 ${t.people}` : people === "3" ? `3 ${t.people}` : "4+"}`, `${t.labels[5]}: ${selected.price} DH`].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={`app ${ar ? "app-ar" : ""}`} dir={ar ? "rtl" : "ltr"}>
      <div className="topline"><span>{t.topLocation}</span><span>{t.topLine}</span><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">{t.follow} <Icon name="arrow" size={13}/></a></div>
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="AMA Jet Ski">
          <img className="brand-logo" src={images.logo} alt="AMA — École Fédérale de Jet Ski" />
          <span className="brand-type brand-type-logo"><strong>JET SKI</strong><small>AGADIR · MAROC</small></span>
        </a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          <a href="#experience" onClick={closeMenu}>{t.experience}</a><a href="#tarifs" onClick={closeMenu}>{t.prices}</a><a href="#galerie" onClick={closeMenu}>{t.gallery}</a><a href="#faq" onClick={closeMenu}>{t.faq}</a>
          <a className="nav-reserve" href="#reservation" onClick={closeMenu}>{t.reserve} <Icon name="arrow" size={15}/></a>
          <div className="language-switch" aria-label="Choose language">{[["fr","FR"],["en","EN"],["ar","عربي"]].map(([code,label])=><button type="button" key={code} onClick={()=>{setLang(code);closeMenu();}} className={lang===code?"language-active":""} aria-pressed={lang===code}>{label}</button>)}</div>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}><Icon name={menuOpen ? "close" : "menu"} size={23}/></button>
        <div className="language-mobile">{[["fr","FR"],["en","EN"],["ar","عربي"]].map(([code,label])=><button type="button" key={code} onClick={()=>setLang(code)} className={lang===code?"language-active":""}>{label}</button>)}</div>
      </header>
      <main>
        <section className="hero" id="home"><div className="hero-photo" style={{ backgroundImage: `url("${images.action}")` }}/><div className="hero-shade"/><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
          <div className="hero-content"><div className="hero-eyebrow"><span className="eyebrow-line"/> {t.eyebrow} <span className="eyebrow-dot"/> AGADIR</div>
            <h1>{t.hero1}<br/>{t.hero2}<em>{t.hero3}</em></h1><p>{t.heroText}</p>
            <div className="hero-buttons"><a className="btn btn-bright" href="#reservation">{t.bookSession} <Icon name="arrow" size={17}/></a><a className="hero-play" href="#experience"><span className="play-mark">↘</span><span>{t.discover}<br/>{t.discover2}</span></a></div>
            <div className="hero-bottom"><div className="hero-number"><strong>15<span>–</span>60</strong><small>{t.minutesFreedom}</small></div><div className="hero-number"><strong>350 <i>DH</i></strong><small>{t.from}</small></div><div className="hero-note"><span className="pulse"/><div><b>{lang==="ar"?"نحو المحيط الأطلسي":lang==="en"?"Head for the Atlantic":"Cap sur l'Atlantique"}</b><small>{t.contactLocation}</small></div></div></div>
          </div><div className="hero-side-label">FEEL THE FREEDOM — 30°25' N</div><a className="scroll-cue" href="#experience"><span/>{lang==="ar"?"مرر للاستكشاف":lang==="en"?"SCROLL TO EXPLORE":"SCROLLER POUR EXPLORER"}</a><div className="hero-card"><img src={images.sunset} alt="Jet ski au coucher du soleil"/><span className="hero-card-index">AMA / 01</span></div>
        </section>
        <div className="ticker" aria-label="AMA Jet Ski"><div className="ticker-track">{Array.from({length:4},(_,i)=><span key={i}>{t.ticker}</span>)}</div></div>
        <section className="intro section-pad" id="experience"><div className="intro-left reveal-left"><span className="section-kicker">01 / {t.experience.toUpperCase()} AMA</span><h2>{t.headingOcean}<br/>{t.headingWater}<em>{t.headingMoment}</em></h2></div><div className="intro-right reveal-right"><p>{t.intro}</p><a className="under-link" href="#tarifs">{t.chooseSession} <Icon name="arrowRight" size={17}/></a></div>
          <div className="experience-visual"><button className="visual-main photo-button reveal-left" onClick={()=>setLightbox(images.beach)} aria-label={t.enlarge}><img src={images.beach} alt="Jet ski Sea-Doo sur la plage d'Agadir"/><span className="photo-tag">01 <b>AGADIR BAY</b></span></button><div className="visual-aside reveal-right"><button className="visual-small photo-button" onClick={()=>setLightbox(images.rider)} aria-label={t.enlarge}><img src={images.rider} alt="Pilote AMA devant son jet ski"/><span className="small-photo-caption">AMA <Icon name="arrow" size={14}/></span></button><div className="experience-note"><span className="big-quote">“</span><p>{lang==="ar"?"البحر والشمس وإحساس لا مثيل له بالحرية.":lang==="en"?"The sea, the sun and that unique feeling of freedom.":"La mer, le soleil et cette sensation unique de liberté."}</p><span className="note-sign">AMA JET SKI · AGADIR</span></div></div></div>
        </section>
        <section className="features section-pad"><div className="features-heading reveal-left"><span className="section-kicker">{t.why}</span><h2>{t.energy}<br/><em>{t.spot}</em></h2></div><div className="feature-grid">{t.features.map(([title,body],i)=><article className="feature-card reveal-scale" key={title}><span className="feature-num">0{i+1}</span><span className="feature-icon"><Icon name={["bolt","shield","users"][i]} size={24}/></span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
        <section className="pricing" id="tarifs"><div className="pricing-bg-number">AMA</div><div className="section-pad pricing-inner"><div className="pricing-head reveal-left"><div><span className="section-kicker">{t.pricingNo}</span><h2>{t.yourTime}<br/><em>{t.yourAdventure}</em></h2></div><p>{t.pricingIntro}</p></div><div className="pricing-layout"><div className="price-table reveal-left"><div className="price-table-head"><span>{t.duration.toUpperCase()}</span><span>{t.price.toUpperCase()}</span></div>{prices.map((p,i)=><button type="button" key={p.minutes} onClick={()=>setDuration(p.minutes)} className={`price-row ${duration===p.minutes?"price-selected":""}`}><span className="duration-part"><span className="duration-index">{duration===p.minutes?<Icon name="check" size={13}/>:String(i+1).padStart(2,"0")}</span><b>{p.minutes}<small> {t.minutes}</small></b>{p.popular&&<em className="popular-pill">{t.popular}</em>}</span><span className="row-price"><Price price={p.price}/><Icon name="arrow" size={16}/></span></button>)}<p className="price-caption">{t.priceNote}</p></div>
          <aside className="booking-panel reveal-right" id="reservation"><div className="booking-panel-top"><span className="booking-watermark"><Icon name="wave" size={27}/></span><span className="booking-status"><i/> {t.ready}</span></div><span className="booking-kicker">{t.sessionStarts}</span><h3>{t.meet}<br/><em>{t.onWater}</em></h3><p className="booking-copy">{t.bookingText}</p>
            <form onSubmit={reserve} className="booking-form"><label>{t.fullName}<input value={name} onChange={e=>setName(e.target.value)} placeholder={t.yourName} autoComplete="name" required/></label><label>{t.phone}<input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+212 6..." inputMode="tel" autoComplete="tel" required/></label><div className="form-split"><label>{t.desiredDate}<input type="date" min={new Date().toLocaleDateString("en-CA")} value={date} onChange={e=>setDate(e.target.value)}/></label><label>{t.participants}<select value={people} onChange={e=>setPeople(e.target.value)}><option value="1">1 {t.person}</option><option value="2">2 {t.people}</option><option value="3">3 {t.people}</option><option value="4+">4+</option></select></label></div><div className="booking-total"><span><b>{duration} {t.minutes}</b> · {t.session}</span><strong><Price price={selected.price}/></strong></div><button className="btn btn-dark" type="submit">{t.requestWhatsApp} <Icon name="arrow" size={17}/></button><div className="privacy-note"><Icon name="message" size={14}/>{t.noPayment}</div></form>
          </aside></div></div></section>
        <section className="gallery section-pad" id="galerie"><div className="gallery-head reveal-left"><div><span className="section-kicker">{t.galleryNo}</span><h2>{t.coast}<br/><em>{t.adrenaline}</em></h2></div><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="social-link"><Icon name="instagram" size={18}/> {t.followInstagram} <Icon name="arrow" size={14}/></a></div><div className="gallery-grid"><button className="gallery-photo g1 reveal-left" onClick={()=>setLightbox(images.sunset)} aria-label={t.enlarge}><img src={images.sunset} alt="Jet ski au coucher du soleil"/><span>01 / {t.galleryLabels[0]} <Icon name="arrow" size={14}/></span></button><button className="gallery-photo g2 reveal-right" onClick={()=>setLightbox(images.duo)} aria-label={t.enlarge}><img src={images.duo} alt="Deux personnes sur un jet ski"/><span>02 / {t.galleryLabels[1]} <Icon name="arrow" size={14}/></span></button><button className="gallery-photo g3 reveal-scale" onClick={()=>setLightbox(images.action)} aria-label={t.enlarge}><img src={images.action} alt="Jet ski en pleine action"/><span>03 / {t.galleryLabels[2]} <Icon name="arrow" size={14}/></span></button><button className="gallery-photo g4 reveal-right" onClick={()=>setLightbox(images.team)} aria-label={t.enlarge}><img src={images.team} alt="Équipe AMA sur la plage"/><span>04 / {t.galleryLabels[3]} <Icon name="arrow" size={14}/></span></button></div></section>
        <section className="faq-section" id="faq"><div className="section-pad faq-layout"><div className="faq-heading reveal-left"><span className="section-kicker">{t.faqNo}</span><h2>{t.question}<br/><em>{t.here}</em></h2><p>{t.faqIntro}</p><a className="under-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">{t.talkTeam} <Icon name="arrowRight" size={17}/></a></div><div className="faq-list reveal-right">{t.faqs.map(([q,a],i)=><div className={`faq-item ${faqOpen===i?"faq-active":""}`} key={q}><button onClick={()=>setFaqOpen(faqOpen===i?-1:i)} aria-expanded={faqOpen===i}><span>{q}</span><span className="faq-toggle">{faqOpen===i?"−":"+"}</span></button>{faqOpen===i&&<p>{a}</p>}</div>)}</div></div></section>
        <section className="closing-cta"><div className="closing-image" style={{backgroundImage:`url("${images.sunset}")`}}/><div className="closing-overlay"/><div className="closing-content reveal-left"><span className="section-kicker">{t.ctaKicker}</span><h2>{t.readyToRide}<br/><em>{t.waves}</em></h2><p>{t.ctaText}</p><a href="#reservation" className="btn btn-bright">{t.bookSession} <Icon name="arrow" size={17}/></a></div><div className="closing-vertical">AMA JET SKI EXPERIENCE · AGADIR</div></section>
      </main>
      <footer className="footer"><div className="footer-main"><a href="#home" className="brand footer-brand"><img className="brand-logo" src={images.logo} alt="AMA Jet Ski"/><span className="brand-type brand-type-logo"><strong>JET SKI</strong><small>AGADIR · MAROC</small></span></a><p>Ride the Atlantic.<br/>Feel the freedom.</p><div className="footer-links"><span>{t.footerJoin}</span><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Icon name="instagram" size={17}/> @location_de_jetski_agadir <Icon name="arrow" size={13}/></a><span className="footer-location"><Icon name="pin" size={15}/> {t.contactLocation}</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} AMA Jet Ski. {lang==="ar"?"جميع الحقوق محفوظة":lang==="en"?"All rights reserved.":"Tous droits réservés."}</span><a href="#home">{t.backTop} ↑</a><span>{t.footerLine}</span></div></footer>
      {lightbox&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={t.enlarge} onClick={()=>setLightbox(null)}><button className="lightbox-close" onClick={()=>setLightbox(null)} aria-label={t.close}><Icon name="close" size={25}/></button><img src={lightbox} alt={t.enlarge} onClick={e=>e.stopPropagation()}/></div>}
    </div>
  );
}
