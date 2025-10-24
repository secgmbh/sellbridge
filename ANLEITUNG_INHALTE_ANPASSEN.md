# Anleitung: Inhalte & Bilder auf Ihrer sellBridge Website ändern

## 📝 Übersicht

Sie können alle Texte, Bilder und Inhalte Ihrer Website selbst anpassen. Diese Anleitung zeigt Ihnen, wo und wie.

**Ihre Website hat jetzt folgende Seiten:**
- ✅ Startseite (Homepage)
- ✅ Leistungen (detaillierte Service-Übersicht)
- ✅ Ablauf (4-Schritte Prozess)
- ✅ Marktplätze (Amazon, OTTO, Kaufland, etc.)
- ✅ Preise (3 Pakete + Zusatzservices)
- ✅ Referenzen (Case Studies & Testimonials)
- ✅ Kontakt (Kontaktformular + Info)

---

## 🎨 **1. Logo austauschen**

### Navbar Logo (oben)
**Datei:** `/app/frontend/src/components/Navbar.jsx`

**Zeile 17-22:** Ersetzen Sie die URL:
```jsx
<img 
  src="IHRE_LOGO_URL_HIER" 
  alt="sellBridge Logo" 
  className="h-10 w-auto"
/>
```

### Footer Logo (unten)
**Datei:** `/app/frontend/src/components/Footer.jsx`

**Zeile 9-14:** Ersetzen Sie die URL:
```jsx
<img 
  src="IHRE_LOGO_URL_HIER" 
  alt="sellBridge Logo" 
  className="h-8 w-auto mb-4 brightness-0 invert"
/>
```

---

## 📝 **2. Texte ändern**

### Alle Texte sind in zwei Dateien:

#### A) Mock-Daten (Services, Case Studies, Blog, etc.)
**Datei:** `/app/frontend/src/mockData.js`

Hier können Sie ändern:
- ✅ Service-Beschreibungen
- ✅ Case Studies
- ✅ Testimonials
- ✅ Blog-Beiträge
- ✅ FAQ-Fragen und Antworten
- ✅ Statistiken

**Beispiel - Service ändern:**
```javascript
export const services = [
  {
    id: 1,
    title: "IHR TITEL HIER",
    description: "IHRE BESCHREIBUNG HIER",
    icon: "database"
  },
  // ... weitere Services
];
```

#### B) Hero-Section und Haupttexte
**Datei:** `/app/frontend/src/components/HeroSection.jsx`

**Ändern Sie:**
- Hauptüberschrift (Zeile 19-23)
- Beschreibungstext (Zeile 25-28)
- Bullet Points (Zeile 32-51)
- Button-Texte (Zeile 55-61)

---

## 🖼️ **3. Bilder austauschen**

### Methode 1: Externe URLs verwenden (empfohlen)
Hochladen auf einen Bild-Hosting-Service und URL einfügen.

### Methode 2: Lokale Bilder
1. Bilder in `/app/frontend/public/images/` hochladen
2. Im Code verwenden: `src="/images/DATEINAME.jpg"`

### Wo Bilder geändert werden:

#### Hero-Section Bild
**Datei:** `/app/frontend/src/components/HeroSection.jsx`
**Zeile 65-72:**
```jsx
<div className="relative bg-gradient-to-br from-[#FFDA00] to-[#FFC700] rounded-3xl p-12">
  {/* Hier Ihr Bild oder Inhalt einfügen */}
</div>
```

#### Case Study Bilder
**Datei:** `/app/frontend/src/components/CaseStudiesSection.jsx`
**Zeile 21-24:** Platzhalter durch echte Bilder ersetzen:
```jsx
<img 
  src="URL_ZU_IHREM_BILD" 
  alt={study.company}
  className="w-full h-full object-cover"
/>
```

#### Blog Post Bilder
**Datei:** `/app/frontend/src/components/BlogSection.jsx`
**Zeile 21-24:** Emoji durch Bild ersetzen:
```jsx
<img 
  src="URL_ZU_IHREM_BILD" 
  alt={post.title}
  className="w-full h-full object-cover"
/>
```

---

## 🎨 **4. Farben ändern**

Alle Farben sind konsistent als `#FFDA00` (Gelb) definiert.

### Globale Farben ändern:
**Datei:** `/app/frontend/src/index.css`

Suchen Sie nach `#FFDA00` und ersetzen Sie durch Ihre Farbe.

### Oder gezielt in Komponenten:
- Suchen Sie `bg-[#FFDA00]` für Hintergründe
- Suchen Sie `text-[#FFDA00]` für Texte
- Suchen Sie `border-[#FFDA00]` für Rahmen

**Beispiel:**
```jsx
// Alt:
className="bg-[#FFDA00]"

// Neu (z.B. Blau):
className="bg-[#0066FF]"
```

---

## 📱 **5. Telefonnummer & Kontaktdaten**

### Telefonnummer in Navbar
**Datei:** `/app/frontend/src/components/Navbar.jsx`
**Zeile 39:** 
```jsx
<span className="font-semibold">+49 123 456 7890</span>
```

### Kontaktdaten im Footer
**Datei:** `/app/frontend/src/components/Footer.jsx`
**Zeile 63-77:** Ändern Sie:
- Telefonnummer
- E-Mail-Adresse
- Adresse

---

## 🔗 **6. Social Media Links**

**Datei:** `/app/frontend/src/components/Footer.jsx`
**Zeile 18-29:**

```jsx
<a href="https://facebook.com/IHR_PROFIL" className="...">
  <Facebook size={20} />
</a>
<a href="https://linkedin.com/company/IHR_PROFIL" className="...">
  <Linkedin size={20} />
</a>
```

---

## 📊 **7. Statistiken ändern**

**Datei:** `/app/frontend/src/mockData.js`
**Zeile 95-120:**

```javascript
export const stats = [
  {
    id: 1,
    value: "49+",  // ← Ändern Sie hier
    label: "Partnerunternehmen",
    description: "Vertrauen auf sellBridge"
  },
  // ... weitere Stats
];
```

---

## 🎯 **8. Navigation (Menü) anpassen**

**Datei:** `/app/frontend/src/components/Navbar.jsx`
**Zeile 8-16:**

```javascript
const navItems = [
  { label: 'Startseite', path: '/' },
  { label: 'Leistungen', path: '/leistungen' },
  // Fügen Sie hier neue Menüpunkte hinzu oder ändern Sie bestehende
];
```

---

## 🚀 **9. Änderungen live sehen**

Nach jeder Änderung:
1. Speichern Sie die Datei
2. Die Website aktualisiert sich **automatisch** (Hot Reload)
3. Schauen Sie im Browser nach den Änderungen

---

## ⚡ **Quick Reference: Wichtigste Dateien**

| Was ändern? | Welche Datei? |
|------------|---------------|
| Logo | `Navbar.jsx` & `Footer.jsx` |
| Startseite | `HomePage.jsx` |
| Leistungen-Seite | `LeistungenPage.jsx` |
| Ablauf-Seite | `AblaufPage.jsx` |
| Marktplätze-Seite | `MarktplaetzePage.jsx` |
| Preise-Seite | `PreisePage.jsx` |
| Referenzen-Seite | `ReferenzenPage.jsx` |
| Kontakt-Seite | `KontaktPage.jsx` |
| Texte, Services, Testimonials | `mockData.js` |
| Hero-Text & Überschriften | `HeroSection.jsx` |
| Farben (global) | `index.css` |
| Telefon & E-Mail | `Navbar.jsx` & `Footer.jsx` |
| Navigation/Menü | `Navbar.jsx` |
| FAQ | `mockData.js` |
| Blog-Posts | `mockData.js` |

**Alle Seiten-Dateien befinden sich in:** `/app/frontend/src/pages/`

---

## 💡 **Tipps**

✅ **Sichern Sie immer eine Kopie** der Originaldatei, bevor Sie Änderungen vornehmen
✅ **Ändern Sie nur den Text/URLs**, nicht die Code-Struktur
✅ **Testen Sie nach jeder Änderung** im Browser
✅ **Bilder sollten optimiert sein** (max. 500KB für schnelle Ladezeiten)

---

## 🆘 **Hilfe benötigt?**

Falls etwas nicht funktioniert:
1. Prüfen Sie die Browser-Konsole (F12)
2. Schauen Sie, ob Sie versehentlich Code gelöscht haben
3. Vergleichen Sie mit der Original-Datei

---

**Viel Erfolg beim Anpassen Ihrer Website! 🎉**
