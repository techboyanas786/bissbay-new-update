import {
  AlertTriangle,
  CheckCircle,
  FileWarning,
  Lock,
  ServerCrash,
} from "lucide-react";

const challenges = [
  {
    icon: <ServerCrash className="medium-icon" />,
    title: "Fragmented Data",
    description:
      "Break down silos and unify disparate sources into a single source of truth.",
    solution:
      "Our unified data platform integrates all your data sources seamlessly.",
  },
  {
    icon: <Lock className="medium-icon" />,
    title: "Compliance Risks",
    description:
      "Navigate GDPR, CCPA, and cookieless futures with ethical, permission-based strategies.",
    solution: "Built-in compliance checks and privacy-first data handling.",
  },
  {
    icon: <AlertTriangle className="medium-icon" />,
    title: "Missed Opportunities",
    description:
      "Identify high-intent buyers and automate audience activation across multiple channels.",
    solution:
      "AI-powered intent signals help you target prospects at the right moment.",
  },
  {
    icon: <FileWarning className="medium-icon" />,
    title: "Inefficient Operations",
    description:
      "Streamline workflows with scalable, future-proofed tech stacks.",
    solution:
      "Automation and integration capabilities save time and reduce errors.",
  },
];

const ChallengesSection = () => {
  return (
    <section id="challenges">
      <div className="text-center">
        <h2 className="section-title !mb-0">
          <span className="text-primary">Challenges </span>We Solve
        </h2>
        {/* <div className="w-20 h-1 bg-primary mx-auto mb-6"></div> */}
        <h3 className="my-4 md:my-6">
          In today's data landscape, businesses face numerous challenges.
          <br /> Here's how BISSBAY helps you overcome them.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-white hover-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-4 md:p-6">
              <div className="flex flex-row items-center justify-center mb-2 gap-3">
                <div  >{challenge.icon}</div>
                <h5 className="text-2xl font-bold">{challenge.title}</h5>
              </div>

              <p className="text-gray-600 text-center mb-4">
                {challenge.description}
              </p>
              <div className="flex items-center justify-center">
                <CheckCircle className="small-icon" />
                <p className="ml-2 text-gray-600">{challenge.solution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesSection;
