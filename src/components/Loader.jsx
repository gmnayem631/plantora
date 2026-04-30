"use client";
import { useEffect, useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --pl-leaf: #3B6D11;
    --pl-leaf-light: #639922;
    --pl-leaf-pale: #C0DD97;
    --pl-soil: #633806;
    --pl-soil-light: #854F0B;
    --pl-stem: #27500A;
    --pl-mist: #EAF3DE;
  }

  .pl-overlay {
    background: var(--pl-mist);
    border-radius: 12px;
    min-height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .pl-overlay::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 80%, rgba(96,153,34,0.12) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(59,109,17,0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  .pl-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    position: relative;
  }

  /* Plant wrapper */
  .pl-plant {
    position: relative;
    width: 72px;
    height: 84px;
  }

  /* Pot */
  .pl-pot {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 42px;
    height: 27px;
    background: var(--pl-soil-light);
    border-radius: 0 0 8px 8px;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  }

  .pl-pot::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -4px;
    right: -4px;
    height: 8px;
    background: var(--pl-soil);
    border-radius: 2px 2px 0 0;
  }

  /* Soil dots */
  .pl-soil-dots {
    position: absolute;
    bottom: 27px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 4px;
  }

  .pl-soil-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--pl-soil);
    opacity: 0;
    animation: pl-dotPop 0.3s ease forwards;
  }

  .pl-soil-dot:nth-child(1) { animation-delay: 0.05s; }
  .pl-soil-dot:nth-child(2) { animation-delay: 0.10s; }
  .pl-soil-dot:nth-child(3) { animation-delay: 0.15s; }

  @keyframes pl-dotPop {
    0%   { opacity: 0; transform: scale(0); }
    70%  { opacity: 0.6; transform: scale(1.2); }
    100% { opacity: 0.4; transform: scale(1); }
  }

  /* Stem */
  .pl-stem {
    position: absolute;
    bottom: 22px;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 0;
    background: var(--pl-stem);
    border-radius: 2px;
    transform-origin: bottom center;
    animation: pl-stemGrow 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s forwards;
  }

  @keyframes pl-stemGrow {
    to { height: 42px; }
  }

  /* Leaves */
  .pl-leaf {
    position: absolute;
    background: var(--pl-leaf-light);
  }

  .pl-leaf::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    height: 1px;
    background: var(--pl-leaf);
    opacity: 0.35;
    border-radius: 1px;
  }

  .pl-leaf--left {
    width: 30px;
    height: 19px;
    right: calc(50% + 1px);
    bottom: 46px;
    border-radius: 0% 50% 0% 50%;
    transform-origin: calc(100% - 2px) center;
    opacity: 0;
    animation: pl-leafLeft 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.65s forwards;
  }

  @keyframes pl-leafLeft {
    0%   { opacity: 1; transform: rotate(15deg) scaleX(0); }
    100% { opacity: 1; transform: rotate(15deg) scaleX(1); }
  }

  .pl-leaf--right {
    width: 30px;
    height: 19px;
    left: calc(50% + 1px);
    bottom: 40px;
    border-radius: 50% 0% 50% 0%;
    transform-origin: 2px center;
    opacity: 0;
    animation: pl-leafRight 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.85s forwards;
  }

  @keyframes pl-leafRight {
    0%   { opacity: 1; transform: rotate(-15deg) scaleX(0); }
    100% { opacity: 1; transform: rotate(-15deg) scaleX(1); }
  }

  .pl-leaf--top {
    width: 24px;
    height: 15px;
    left: 50%;
    bottom: 58px;
    border-radius: 50% 0% 50% 0%;
    transform-origin: 2px center;
    opacity: 0;
    animation: pl-leafTop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 1.05s forwards;
  }

  @keyframes pl-leafTop {
    0%   { opacity: 1; transform: translateX(-50%) rotate(-90deg) scaleX(0); }
    100% { opacity: 1; transform: translateX(-50%) rotate(-90deg) scaleX(1); }
  }

  /* Text */
  .pl-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 22px;
    font-weight: 400;
    color: var(--pl-leaf);
    letter-spacing: -0.01em;
    opacity: 0;
    animation: pl-fadeIn 0.6s ease 1.6s forwards;
  }

  .pl-subtitle {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: var(--pl-leaf-light);
    opacity: 0;
    animation: pl-fadeIn 0.5s ease 1.9s forwards;
    letter-spacing: 0.02em;
  }

  @keyframes pl-fadeIn {
    to { opacity: 1; }
  }
`;

export default function Loader({
  title = "Growing your garden",
  subtitle = "This may take a moment",
  className = "",
  style = {},
}) {
  const [mounted, setMounted] = useState(false);

  // Re-trigger animations when the component re-mounts
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <>
      <style>{styles}</style>

      <div
        className={`pl-overlay ${className}`}
        style={style}
        role="status"
        aria-label={title}
      >
        <div className="pl-inner">
          {/* Plant */}
          <div className="pl-plant" aria-hidden="true">
            {/* Pot */}
            <div className="pl-pot" />

            {/* Soil dots */}
            <div className="pl-soil-dots">
              <div className="pl-soil-dot" />
              <div className="pl-soil-dot" />
              <div className="pl-soil-dot" />
            </div>

            {/* Stem */}
            <div className="pl-stem" />

            {/* Leaves */}
            <div className="pl-leaf pl-leaf--left" />
            <div className="pl-leaf pl-leaf--right" />
            <div className="pl-leaf pl-leaf--top" />
          </div>

          {/* Text */}
          {title && <p className="pl-title">{title}</p>}
          {subtitle && <p className="pl-subtitle">{subtitle}</p>}
        </div>
      </div>
    </>
  );
}
