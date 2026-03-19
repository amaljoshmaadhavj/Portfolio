const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 space-y-4">
    <p className="text-sm uppercase tracking-[0.35em] text-neonBlue/80">{subtitle}</p>
    <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">{title}</h2>
  </div>
)

export default SectionTitle
