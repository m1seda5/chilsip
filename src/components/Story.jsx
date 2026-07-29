import { Reveal, Eyebrow } from './ui'

export function Story() {
  return (
    <section className="story" id="story">
      <div
        className="story-media"
        style={{ backgroundImage: "url('/story.jpg')" }}
        role="img"
        aria-label="An atmospheric photograph setting the scene for CHILLSIP"
      />
      <div className="story-scrim" />
      <div className="wrap story-inner">
        <Reveal className="story-copy">
          <Eyebrow>The idea</Eyebrow>
          <h2>
            One Small Cover.
            <br />
            A Safer Experience.
          </h2>
          <p>
            Across bars, clubs, cafés, restaurants, hotels and festivals, beverages are served
            in open containers that remain exposed.
          </p>
          <p>
            CHILLSIP by Sorso Sicuro creates a simple physical barrier that helps reduce
            opportunities for drink tampering, accidental spills and environmental contamination
            — while enhancing the overall customer experience.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
