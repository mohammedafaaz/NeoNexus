
function ScheduleSection() {
  return (
    <section id="schedule" className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 neon-text text-center">EVENT SCHEDULE</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Day 1 */}
          <div className="flex-1">
            <div className="glass-panel p-6">
              <h3 className="text-2xl font-bold mb-6 text-[var(--primary)]">DAY 1 - September 6, 2025</h3>
              <h4 className="text-lg font-semibold text-[var(--foreground-muted-dark)]">In Planning Phase</h4>
            </div>
          </div>
          
          {/* Day 2 */}
          <div className="flex-1">
            <div className="glass-panel p-6">
              <h3 className="text-2xl font-bold mb-6 text-[var(--accent)]">DAY 2 - September 7, 2025</h3>
              <h4 className="text-lg font-semibold text-[var(--foreground-muted-dark)]">In Planning Phase</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScheduleSection;
