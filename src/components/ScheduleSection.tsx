export default function ScheduleSection() {
  const scheduleDay1 = [
    { time: "08:55 AM – 09:55 AM", event: "Breakfast & Registration" },
    { time: "10:00 AM – 12:30 PM", event: "Hackathon Kick-off & Coding Begins" },
    { time: "12:30 PM – 01:00 PM", event: "Checkpoint 1: Initial Idea Validation" },
    { time: "01:00 PM – 02:00 PM", event: "Lunch Break" },
    { time: "02:00 PM – 05:00 PM", event: "Hackathon Continues" },
    { time: "05:00 PM – 05:30 PM", event: "Checkpoint 2: Progress & Prototype Direction" },
    { time: "05:30 PM – 08:30 PM", event: "Hackathon Continues" },
    { time: "08:30 PM – 09:30 PM", event: "Dinner" },
    { time: "09:30 PM onwards", event:"Hackathon Continues Overnight"}
  ];
  
  const scheduleDay2 = [
    { time: "08:30 AM – 09:30 AM", event: "Breakfast" },
    { time: "09:30 AM – 10:30 AM", event: "Hackathon Continues" },
    { time: "10:30 AM – 11:00 AM", event: "Checkpoint 3: Midway Evaluation (Working Prototype Demo)" },
    { time: "11:00 AM – 02:00 PM", event: "Hackathon Continues" },
    { time: "02:00 PM – 02:55 PM", event: "Lunch" },
    { time: "03:00 PM – 04:00 PM", event: "Hackathon Resumes" },
    { time: "04:00 PM – 04:30 PM", event: "Checkpoint 4: Final Review (Near-final Product)" },
    { time: "04:30 PM – 05:30 PM", event: "Final Touches & Submission"},
    { time: "05:30 PM – 06:30 PM", event: "Valedictory Ceremony & Prize Distribution"}
  ];

  return (
    <section id="schedule" className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 neon-text text-center">EVENT SCHEDULE</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Day 1 */}
          <div className="flex-1">
            <div className="glass-panel p-6">
              <h3 className="text-2xl font-bold mb-6 text-[var(--primary)]">DAY 1 - September 6, 2025</h3>
              
              <div className="space-y-6">
                {scheduleDay1.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold">
                        {index + 1}
                      </div>
                      {index < scheduleDay1.length - 1 && (
                        <div className="w-0.5 h-12 bg-[var(--primary)]/20"></div>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{item.time}</div>
                      <div className="text-[var(--foreground-muted)]">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Day 2 */}
          <div className="flex-1">
            <div className="glass-panel p-6">
              <h3 className="text-2xl font-bold mb-6 text-[var(--accent)]">DAY 2 - September 7, 2025</h3>
              
              <div className="space-y-6">
                {scheduleDay2.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] font-bold">
                        {index + 1}
                      </div>
                      {index < scheduleDay2.length - 1 && (
                        <div className="w-0.5 h-12 bg-[var(--accent)]/20"></div>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{item.time}</div>
                      <div className="text-[var(--foreground-muted)]">{item.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
