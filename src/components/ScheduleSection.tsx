import { useRef, useEffect } from 'react';

function Timeline3DBar() {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const handle = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window;
			const x = (e.clientX / innerWidth - 0.5) * 30;
			el.style.transform = `skewX(${x}deg)`;
		};
		window.addEventListener('mousemove', handle);
		return () => window.removeEventListener('mousemove', handle);
	}, []);
	return (
		<div ref={ref} className="absolute left-1/2 top-0 z-0 pointer-events-none" style={{transform: 'translateX(-50%)', width: 320, height: 18}}>
			<svg width="320" height="18">
				<rect x="0" y="6" width="320" height="6" rx="3" fill="#8351f7" opacity="0.13" />
				<rect x="60" y="0" width="40" height="18" rx="6" fill="#06b6d4" opacity="0.09" />
				<rect x="220" y="0" width="40" height="18" rx="6" fill="#ec4899" opacity="0.09" />
			</svg>
		</div>
	);
}

function ScheduleSection() {
  return (
    <section id="schedule" className="py-16 relative overflow-hidden">
      <Timeline3DBar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 neon-text text-center">EVENT SCHEDULE</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Day 1 */}
          <div className="flex-1">
            <div className="glass-panel p-6">
              <h3 className="text-2xl font-bold mb-6 text-[var(--primary)]">DAY 1 - September 6, 2025</h3>
              <h4 className="text-lg font-semibold text-[var(--foreground-muted-dark)]">Will be Announced soon</h4>
            </div>
          </div>
          
          {/* Day 2 */}
          <div className="flex-1">
            <div className="glass-panel p-6">
              <h3 className="text-2xl font-bold mb-6 text-[var(--accent)]">DAY 2 - September 7, 2025</h3>
              <h4 className="text-lg font-semibold text-[var(--foreground-muted-dark)]">Will be Announced soon</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScheduleSection;
