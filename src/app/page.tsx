"use client";

import React, { useState } from "react";
import Image from "next/image";
import KineticGrid from "@/components/ui/kinetic-grid";

interface Project {
  title: string;
  url: string;
  image: string;
  meta: string;
  description: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Thorfin Space",
    url: "https://thorfin.space",
    image: "/projects/thorfin_space.png",
    meta: "Ecommerce & Infrastructure, 2025",
    description: "High-conversion digital storefront and developer infrastructure showcase with instant checkout and edge caching.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    title: "Ecommerce Hub",
    url: "https://ecommerce-hub-mu.vercel.app/",
    image: "/projects/ecommerce_hub.png",
    meta: "Marketplace & Catalog, 2025",
    description: "Multi-tenant commerce ecosystem with unified inventory orchestration, cart session clustering, and order management.",
    tags: ["React 19", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Rydway Web",
    url: "https://rydway-web.rydway-space.workers.dev/",
    image: "/projects/rydway_web.png",
    meta: "Logistics & Mobility, 2024",
    description: "Distributed dispatch and fleet mobility web platform powered by edge workers, real-time telematics, and automated ledger billing.",
    tags: ["Cloudflare Workers", "TypeScript", "Next.js", "Mapbox"],
  },
  {
    title: "One and Only Cleaning Services",
    url: "https://one-and-only-cleaning-services.vercel.app/",
    image: "/projects/one_and_only_cleaning.png",
    meta: "Services & On-Demand Booking, 2025",
    description: "Modern commercial and residential cleaning booking platform with interactive service tiering, automated scheduling, and client billing.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
];

const SEED_PROJECTS = [
  {
    name: "ConvROI",
    meta: "Conversion & Growth Intelligence, 2024",
    description: "Enterprise sales pipeline automation and conversion ROI tracking engine featuring multi-channel attribution, automated lead scoring, and CRM synchronization.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
  },
  {
    name: "Onset",
    meta: "Camera Rental Marketplace, 2024",
    description: "Peer-to-peer and studio camera equipment rental marketplace featuring availability calendars, gear inspection logs, security deposit escrow, and instant booking workflows.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    name: "Aparte",
    meta: "Real Estate Discovery, 2023",
    description: "Property discovery engine and rental management platform with geolocation mapping, verified tenant screening, inspection booking, and digital lease workflows.",
    tags: ["Next.js", "Node.js", "Mapbox", "PostgreSQL"],
  },
];

const TEAM = [
  { initials: "AT", name: "Agbo Terry", role: "Principal & Systems Architect", linkedin: "https://www.linkedin.com/in/anjiraterry/" },
  { initials: "FI", name: "Folarinimi Isreal", role: "Lead & Fullstack Engineer", linkedin: "https://www.linkedin.com/in/israelfolaranmia1/" },
  { initials: "AJ", name: "Ayebaemi Jephtah", role: "Program Analyst & Quality Assurance", linkedin: "https://www.linkedin.com/in/ayebaemi-jephthah-302098286/" },
  { initials: "FM", name: "Fatimah Muhammed", role: "Technical Product Manager & Operations", linkedin: "https://www.linkedin.com/in/fatimah-muhammed-9868071b1" },
];

const TESTIMONIALS = [
  {
    quote: "Thorfin Dev operates with rare engineering rigour and clarity. Whether taking over critical distributed components or executing complex deliverables under tight timelines, their team communicates with complete transparency and ships dependable, production-grade code.",
    name: "Chris C.",
    role: "Team Lead, SWGlobal",
  },
  {
    quote: "Scaling our multi-vendor catalog on Ecommerce Hub was seamless. Thorfin built an inventory orchestration and checkout engine that handled our peak flash sales without a single dropped cart session.",
    name: "Victoria E.",
    role: "Co-Founder & COO, Viiv Stores",
  },
  {
    quote: "Thorfin engineered the financial ledger and automated reconciliation workflows for Bedrock Group with exceptional accuracy. Our daily settlement reports and transaction audits now run without a single discrepancy.",
    name: "Tope A.",
    role: "Finance Manager, Bedrock Group",
  },
  {
    quote: "Thorfin transformed our operational workflow from manual inquiries into an automated on-demand booking and billing engine. The customer experience is world-class and our scheduling overhead dropped dramatically.",
    name: "Favour U.",
    role: "Operations Lead, One and Only Cleaning Services",
  },
];

export default function HomePage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Ecommerce",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <KineticGrid globalColor="default">
      <div className="outer-frame">
        <div className="site-wrapper">
          {/* Navigation Bar */}
          <nav className="nav-bar">
            <a href="#" className="nav-brand">
            
              <span>
                thorfin<span className="nav-brand-muted">.dev</span>
              </span>
            </a>

            <ul className="nav-links">
              <li className="nav-link-item">
                <a href="#about" className="nav-link">{"// about"}</a>
              </li>
              <li className="nav-link-item">
                <a href="#projects" className="nav-link">{"// projects"}</a>
              </li>
              <li className="nav-link-item">
                <a href="#team" className="nav-link">{"// team"}</a>
              </li>
              <li className="nav-link-item">
                <a href="#testimonials" className="nav-link">{"// testimonials"}</a>
              </li>
              <li className="nav-link-item">
                <a href="#contact" className="nav-link">{"// contact"}</a>
              </li>
            </ul>

            <a href="#contact" className="btn-primary">
              Start a project
            </a>
          </nav>

          {/* Hero Section */}
          <section className="hero-section">
            {/* Primary Hero Content (Sits directly on the kinetic grid) */}
            <div className="hero-header-block">
              <div className="hero-badge">
             
                <span>{"// COMMERCE & FINTECH INFRASTRUCTURE"}</span>
              </div>
              <h1>Reliable software for commerce and finance.</h1>
              <p className="hero-subhead">
                Thorfin Dev designs and builds ecommerce platforms, payment systems and fintech products for teams that can&apos;t afford downtime.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn-primary">
                  <span>Start a project</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "6px" }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#projects" className="btn-outline">
                  See our work
                </a>
              </div>
            </div>
          </section>

          {/* Section: About */}
          <section id="about" className="content-section">
            <div className="section-label-col">{"// about"}</div>
            <div className="section-content-col">
              <div className="section-statement">
                We are an engineering team based across Abuja and Lagos, building and maintaining the critical infrastructure behind online stores, fintech ledgers, and payment platforms.
              </div>

              <div className="about-cells-grid">
                <div className="about-cell">
                  <div className="about-cell-title">Ecommerce</div>
                  <p>
                    High-volume store backends, custom checkout flows, catalog synchronization, and headless storefront integrations.
                  </p>
                </div>
                <div className="about-cell">
                  <div className="about-cell-title">Fintech</div>
                  <p>
                    Double-entry ledger systems, automated multi-currency payouts, real-time fraud scoring, and compliant KYC pipelines.
                  </p>
                </div>
                <div className="about-cell">
                  <div className="about-cell-title">Platforms and APIs</div>
                  <p>
                    Developer portals, webhook infrastructure, idempotent event streams, and mission-critical payment gateways.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Projects (Grid with Screenshots of live sites) */}
          <section id="projects" className="content-section">
            <div className="section-label-col">{"// projects"}</div>
            <div className="section-content-col">
              <div className="section-statement">
                Selected systems engineered for scale, zero downtime, and high transaction volume.
              </div>

              {/* Projects Grid with Live Screenshots */}
              <div className="projects-grid">
                {PROJECTS.map((proj) => (
                  <a
                    key={proj.title}
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                  >
                    <div className="project-thumb-container">
                      <Image
                        src={proj.image}
                        alt={`${proj.title} hero section`}
                        width={600}
                        height={338}
                        className="project-thumb"
                        unoptimized
                      />
                    </div>
                    <div className="project-card-body">
                      <div className="project-card-header">
                        <span className="project-name">{proj.title}</span>
                        <span className="project-meta">{proj.meta}</span>
                      </div>
                      <p className="project-desc">{proj.description}</p>
                      <div className="project-tags">
                        {proj.tags.map((t) => (
                          <span key={t} className="tag-badge">{t}</span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Technical System Rows */}
              <div className="project-rows-table">
                {SEED_PROJECTS.map((p) => (
                  <div key={p.name} className="project-row">
                    <div style={{ maxWidth: "480px" }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "4px" }}>
                        <span style={{ fontSize: "16px", fontWeight: 500, color: "var(--color-fg)" }}>{p.name}</span>
                        <span className="mono" style={{ fontSize: "11px", color: "var(--color-muted)" }}>{p.meta}</span>
                      </div>
                      <p style={{ fontSize: "13.5px", color: "var(--color-muted)", margin: 0 }}>{p.description}</p>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
                      {p.tags.map((t) => (
                        <span key={t} className="tag-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Team */}
          <section id="team" className="content-section">
            <div className="section-label-col">{"// team"}</div>
            <div className="section-content-col">
              <div className="section-statement">
                Engineers with hands on real transaction volume, ledgers, and distributed systems.
              </div>

              <div className="team-grid">
                {TEAM.map((member) => (
                  <div key={member.name} className="team-card">
                    <div className="team-initials-tile">{member.initials}</div>
                    <div className="team-info">
                      <span className="team-name">{member.name}</span>
                      <span className="team-role">{member.role}</span>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-link"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <span>LinkedIn</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Testimonials */}
          <section id="testimonials" className="content-section">
            <div className="section-label-col">{"// testimonials"}</div>
            <div className="section-content-col">
              <div className="section-statement">
                Direct feedback from founders and engineering leaders running our software.
              </div>

              <div className="testimonials-grid">
                {TESTIMONIALS.map((t) => (
                  <figure key={t.name} className="testimonial-block">
                    <blockquote className="testimonial-quote">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="testimonial-author">
                      <span className="author-name">{t.name}</span>
                      <span className="author-role">{t.role}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Contact */}
          <section id="contact" className="content-section">
            <div className="section-label-col">{"// contact"}</div>
            <div className="section-content-col">
              <div className="contact-layout">
                <div>
                  <h2 style={{ fontSize: "28px", fontWeight: 500, color: "var(--color-fg)", marginBottom: "12px" }}>
                    Tell us what you&apos;re building.
                  </h2>
                  <p>
                    We take on a limited number of projects each quarter to ensure senior hands on all critical architecture.
                  </p>

                  <div className="contact-meta-list">
                    <div className="contact-meta-item">
                      <span className="contact-meta-label">{"// base"}</span>
                      <span className="contact-meta-val">Abuja &amp; Lagos, Nigeria</span>
                    </div>
                    <div className="contact-meta-item">
                      <span className="contact-meta-label">{"// timezone"}</span>
                      <span className="contact-meta-val">West Africa Time (WAT • UTC+1)</span>
                    </div>
                    <div className="contact-meta-item">
                      <span className="contact-meta-label">{"// email"}</span>
                      <a href="mailto:hello@thorfin.space" className="contact-meta-val" style={{ color: "var(--color-accent)" }}>
                        hello@thorfin.space
                      </a>
                    </div>
                    <div className="contact-meta-item">
                      <span className="contact-meta-label">{"// reply time"}</span>
                      <span className="contact-meta-val">Within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div>
                  {formSubmitted ? (
                    <div className="contact-form" style={{ textAlign: "center", padding: "40px 24px" }}>
                      <div style={{ color: "#7b9cf0", fontSize: "20px", fontWeight: 500, marginBottom: "8px" }}>
                        Message received.
                      </div>
                      <p style={{ margin: "0 auto", fontSize: "14px" }}>
                        Thank you for reaching out. We will review your project requirements and reply within 24 hours.
                      </p>
                      <button
                        className="btn-outline"
                        style={{ marginTop: "20px", alignSelf: "center" }}
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormState({ name: "", email: "", projectType: "Ecommerce", message: "" });
                        }}
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">{"// your name"}</label>
                        <input
                          id="name"
                          type="text"
                          required
                          className="form-input"
                          placeholder="e.g. Babatunde Adeyemi"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="email">{"// work email"}</label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="form-input"
                          placeholder="name@company.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="projectType">{"// project type"}</label>
                        <select
                          id="projectType"
                          className="form-select"
                          value={formState.projectType}
                          onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        >
                          <option value="Ecommerce">Ecommerce</option>
                          <option value="Fintech">Fintech (Ledgers, KYC, Payments)</option>
                          <option value="Platform or API">Platform or API</option>
                          <option value="Something else">Something else</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="message">{"// project overview & timeline"}</label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          className="form-textarea"
                          placeholder="Tell us about your product, expected scale, integration requirements, and target timeline..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={isSubmitting}
                        style={{ marginTop: "8px" }}
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="site-footer">
            <div>
              <span>© 2026 Thorfin Dev Ltd. Abuja &amp; Lagos, Nigeria. All rights reserved.</span>
            </div>
            <div>
              <span className="mono">{"// reliable software for commerce and money"}</span>
            </div>
          </footer>
        </div>
      </div>
    </KineticGrid>
  );
}
