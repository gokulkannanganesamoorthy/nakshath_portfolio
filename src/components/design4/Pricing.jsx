import React from 'react';

const Pricing = () => {
  return (
    <section className="d4-section" style={{ background: '#f8f9fa' }}>
      <div className="d4-container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="d4-heading" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
              CHOOSE YOUR <span style={{ color: 'var(--d4-primary)' }}>PATH</span>
            </h2>
            <p className="d4-sub" style={{ margin: '0 auto' }}>
                Invest in the only asset that matters: <strong>Your Body</strong>.
            </p>
        </div>
        
        <div className="d4-pricing-grid">
            {/* Standard Tier */}
            <div className="d4-card">
                <h3 className="d4-plan-title">The Blueprint</h3>
                <div className="d4-price"><span>₹</span>1999<span className="mo">/mo</span></div>
                <p className="d4-plan-desc">Perfect self-paced starting point.</p>
                <div className="d4-divider"></div>
                <ul className="d4-features">
                    <li><span>✔</span> Custom Workout Split</li>
                    <li><span>✔</span> Monthly Form Analysis</li>
                    <li><span>✔</span> Macro Nutrition Guide</li>
                    <li className="f-dim"><span>✕</span> 24/7 Coach Access</li>
                </ul>
                <button className="d4-btn-outline">Select Blueprint</button>
            </div>

            {/* Premium Tier */}
            <div className="d4-card highlight">
                <div className="d4-badge">RECOMMENDED</div>
                <h3 className="d4-plan-title">Elite Coaching</h3>
                <div className="d4-price"><span>₹</span>2999<span className="mo">/mo</span></div>
                <p className="d4-plan-desc">The complete transformation protocols.</p>
                <div className="d4-divider"></div>
                <ul className="d4-features">
                    <li><span>✔</span> <strong>Everything in Blueprint</strong></li>
                    <li><span>✔</span> Weekly Video Check-ins</li>
                    <li><span>✔</span> Adaptive Meal Plans</li>
                    <li><span>✔</span> 24/7 WhatsApp Support</li>
                </ul>
                <button className="d4-btn-gold" style={{ width: '100%' }}>APPLY FOR ELITE</button>
                <p className="d4-guarantee-text">🛡️ 30-Day Money Back Guarantee</p>
            </div>
            
             {/* Comparison Tier */}
             <div className="d4-card">
                <h3 className="d4-plan-title">Contest Prep</h3>
                <div className="d4-price">Custom</div>
                <p className="d4-plan-desc">Championship level detail.</p>
                <div className="d4-divider"></div>
                <ul className="d4-features">
                    <li><span>✔</span> Peak Week Strategy</li>
                    <li><span>✔</span> Posing & Stage Presence</li>
                    <li><span>✔</span> Daily Protocol Updates</li>
                    <li><span>✔</span> Show Day Guidance</li>
                </ul>
                <button className="d4-btn-outline">Inquire Now</button>
            </div>
        </div>
      </div>

      <style jsx>{`
        .d4-pricing-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
            align-items: center;
        }

        .d4-plan-title {
            font-family: var(--d4-font-head);
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #444;
        }

        .d4-price {
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--d4-primary);
            font-family: var(--d4-font-head);
            line-height: 1;
            margin-bottom: 0.5rem;
        }

        .d4-price span { font-size: 1.5rem; vertical-align: top; margin-top: 0.5rem; display: inline-block; }
        .d4-price .mo { color: #999; font-size: 1rem; font-weight: 500; text-transform: uppercase; vertical-align: baseline; margin-left: 5px; }

        .d4-plan-desc { color: #666; font-size: 1rem; margin-bottom: 2rem; }
        
        .d4-divider { height: 1px; background: #eee; margin-bottom: 2rem; width: 100%; }

        .d4-features { list-style: none; margin-bottom: 2.5rem; padding: 0; }
        .d4-features li { margin-bottom: 1.2rem; font-size: 1rem; display: flex; align-items: center; gap: 10px; color: #333; }
        .d4-features li span { color: var(--d4-secondary); font-weight: bold; }
        .d4-features li.f-dim { color: #ccc; }
        .d4-features li.f-dim span { color: #ccc; }

        .d4-btn-outline {
            width: 100%;
            padding: 1.2rem;
            border: 2px solid #ddd;
            background: transparent;
            font-weight: 700;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 0.9rem;
            font-family: var(--d4-font-head);
            transition: all 0.3s;
            border-radius: 4px;
            color: #444;
        }

        .d4-btn-outline:hover {
            border-color: var(--d4-primary);
            color: var(--d4-primary);
            background: #fff;
        }

        .d4-badge {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--d4-secondary);
            color: #000;
            text-align: center;
            font-weight: 800;
            font-size: 0.75rem;
            padding: 0.6rem 1.5rem;
            border-radius: 50px;
            letter-spacing: 1px;
            box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
            white-space: nowrap;
        }
        
        .d4-guarantee-text {
            text-align: center;
            font-size: 0.8rem;
            color: #888;
            margin-top: 1rem;
        }

        @media (max-width: 960px) {
            .d4-pricing-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; gap: 4rem; }
            .d4-card.highlight { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
