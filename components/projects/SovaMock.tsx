export function SovaMock() {
  return (
    <div className="mock-sova">
      <div className="hd">
        <span className="lg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="4" width="14" height="16" rx="4" />
            <path d="M9 4v3h6V4" />
          </svg>
        </span>
        <span className="ti">
          <b>
            Sova Budget <i>EUR</i>
          </b>
          <small>Plan calmly. Spend confidently.</small>
        </span>
        <span className="mnav">
          <span className="on">Home</span>
          <span>Budget</span>
          <span>Bills</span>
          <span>Review</span>
          <span>Expenses</span>
        </span>
        <span className="mo">May 2026</span>
      </div>
      <div className="bd">
        <div className="colL">
          <div className="card cycle">
            <div className="eb">
              Left in this cycle <span className="dt">Thu, Jun 11 · 4 days remaining</span>
            </div>
            <div className="amt">
              €127<small>.10</small>
            </div>
            <div className="cap">Safe to spend for everyday expenses until your next income date</div>
            <span className="chip">⌛ Tight this cycle</span>
            <div className="strow">
              <span className="st"><span className="k">After bills</span><span className="v">€4,200.00</span></span>
              <span className="st"><span className="k">Goals</span><span className="v">€1,363.64</span></span>
              <span className="st"><span className="k">Daily pace</span><span className="v">€31.77 / day</span></span>
              <span className="st"><span className="k">Days remaining</span><span className="v">4 days</span></span>
            </div>
          </div>
          <div className="card week">
            <div className="wt">
              <span>
                <h5>Your week so far</h5>
                <div className="sub">0 quiet days, 1 heavier — gentle pace.</div>
              </span>
              <span className="sp">
                <span className="k">SPENT</span>
                <br />
                <span className="v">€819.24</span>
              </span>
            </div>
            <div className="wbars">
              <span style={{ height: "26%" }} />
              <span style={{ height: "22%" }} />
              <span style={{ height: "24%" }} />
              <span style={{ height: "22%" }} />
              <span style={{ height: "26%" }} />
              <span style={{ height: "20%" }} />
              <span className="hi" style={{ height: "100%" }} />
            </div>
          </div>
        </div>
        <div className="colR">
          <div className="card next">
            <h6>NEXT STEP</h6>
            <h5>You may need support before your income date</h5>
            <div className="sub">Based on your current pace and upcoming bills, you may run short.</div>
            <div className="act">
              <span className="ai">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 9a7 7 0 10-14 0c0 4 3 5 3 8h8c0-3 3-4 3-8z" transform="rotate(90 12 12)" />
                </svg>
              </span>
              <span className="tx">
                <span className="t">Move money from savings</span>
                <span className="d">Use what you have set aside — only if it feels right.</span>
              </span>
              <span className="ar">›</span>
            </div>
            <div className="act">
              <span className="ai">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 21V4h13l-2.5 5L18 14H5" />
                </svg>
              </span>
              <span className="tx">
                <span className="t">Pause a goal temporarily</span>
                <span className="d">Free up room this month without giving up the goal.</span>
              </span>
              <span className="ar">›</span>
            </div>
            <div className="act">
              <span className="ai">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 7l7 7 4-4 5 5" />
                  <path d="M15 15h5v-5" />
                </svg>
              </span>
              <span className="tx">
                <span className="t">
                  Reduce daily pace <em>SUGGESTED</em>
                </span>
                <span className="d">Aim closer to €31.77 per day until your income date.</span>
              </span>
              <span className="ar">›</span>
            </div>
          </div>
          <div className="card bills">
            <div className="bt">
              <h5>Upcoming bills</h5>
              <span className="al">All bills →</span>
            </div>
            <div className="sub">Nothing due before your next income date.</div>
            <div className="tip">
              💡 Tip: Pay early and keep your future self relaxed.
              <span className="pb">See all bills</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
