export default function ProseContent({ paper }) {
  return (
    <article className="prose-paper">
      <section id="section-introduction">
        <SectionLabel index="01" label="Introduction" />
        <h2>{paper.fullTitle.split(':')[0]}</h2>
        <p>
          This page documents a reproduction of <strong>{paper.shortTitle}</strong>, a paper
          in the Physical Layer Authentication (PLA) domain. The goal is to revisit,
          re-implement and stress-test published results so that the methodology — not just
          the conclusions — becomes transparent.
        </p>
        <p>
          PLA exploits unique characteristics of the wireless channel to authenticate devices
          at the lowest layer of the stack, before any cryptographic identity is exchanged.
          The assumption is that channel state information (<code>CSI</code>) between two
          endpoints is statistically distinctive enough to act as a fingerprint.
        </p>
      </section>

      <section id="section-background">
        <SectionLabel index="02" label="Background" />
        <h2>Channel state information as identity</h2>
        <p>
          IEEE 802.11n frames expose per-subcarrier CSI matrices that depend on the multipath
          geometry between transmitter and receiver. Two key properties make CSI attractive
          for authentication:
        </p>
        <ul>
          <li>Spatial decorrelation beyond half a wavelength.</li>
          <li>Sensitivity to small movements of the receiver or its surroundings.</li>
        </ul>
        <blockquote>
          A spoofed bit-identical frame still carries the attacker's channel signature.
          The attacker cannot fake geometry.
        </blockquote>
      </section>

      <section id="section-methodology">
        <SectionLabel index="03" label="Methodology" />
        <h2>Siamese architecture and training regime</h2>
        <p>
          The reproduction uses a Siamese CNN with shared weights across two CSI inputs and a
          contrastive loss. Each branch ingests a complex CSI tensor reshaped as a two-channel
          image (real / imaginary), followed by three convolutional blocks and a 128-dimensional
          embedding head.
        </p>
        <h3>Training data</h3>
        <p>
          Synthetic channels are generated under the <code>WLAN TGn</code> model, then mixed
          with measured traces. Pairs are sampled with a 1:1 positive/negative ratio.
        </p>
      </section>

      <section id="section-experiments">
        <SectionLabel index="04" label="Experiments" />
        <h2>Setup and ablations</h2>
        <p>
          We measure equal error rate (EER) across three TGn channel models and two noise
          regimes. The full ablation table will live here once the runs converge.
        </p>
      </section>

      <section id="section-results">
        <SectionLabel index="05" label="Results" />
        <h2>Preliminary numbers</h2>
        <p>
          Early reproductions match the original work within one percentage point of EER on
          channel model B. Results on faster fading regimes diverge more, suggesting the
          subcarrier-selection strategy is a sensitive hyperparameter.
        </p>
      </section>

      <section id="section-discussion">
        <SectionLabel index="06" label="Discussion" />
        <h2>What survives the reproduction</h2>
        <p>
          The core claim holds: a small Siamese network learns CSI similarities that
          generalise across sessions. The fragile part is data curation — and that is where
          the next iteration of this notebook will go.
        </p>
      </section>
    </article>
  )
}

function SectionLabel({ index, label }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      marginTop: 8, marginBottom: 16,
    }}>
      <span style={{
        fontFamily: 'monospace', fontSize: '10px',
        color: 'var(--text-tertiary)', letterSpacing: '0.14em',
      }}>
        {index}
      </span>
      <span style={{
        height: 1, width: 24,
        background: 'var(--hairline)',
        display: 'inline-block',
      }} />
      <span style={{
        fontFamily: 'monospace', fontSize: '10px',
        textTransform: 'uppercase', letterSpacing: '0.14em',
        color: 'var(--text-tertiary)',
      }}>
        {label}
      </span>
    </div>
  )
}