export interface Article {
  id: string;
  title: string;
  author: string;
  source: string;
  readTime: string;
  tag: string;
  summary: string;
  content: string; // In a real app, this might be a link or full markdown
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Do Things That Don't Scale",
    author: "Paul Graham",
    source: "paulgraham.com",
    readTime: "8 min",
    tag: "Strategy",
    summary: "One of the most common pieces of advice I give to founders is to do things that don't scale. A lot of would-be founders believe that startups either take off or they don't.",
    content: "You have to take extraordinary measures to acquire your first users. You can't wait for them to come to you. You have to go out and get them. The most common way to do this is to recruit them manually. If you build something to solve your own problem, you can find your peers who have the same problem."
  },
  {
    id: "2",
    title: "The Only Thing That Matters",
    author: "Marc Andreessen",
    source: "pmarchive.com",
    readTime: "6 min",
    tag: "Product Market Fit",
    summary: "Product/market fit is the only thing that matters. And the only way to get there is to change everything: the product, the team, the market.",
    content: "The number one company-killer is lack of market. When a great team meets a lousy market, market wins. When a lousy team meets a great market, market wins. When a great team meets a great market, something special happens."
  },
  {
    id: "3",
    title: "Default Alive or Default Dead?",
    author: "Paul Graham",
    source: "paulgraham.com",
    readTime: "5 min",
    tag: "Finance",
    summary: "When I talk to founders of startups that have been running for a year or two, the first thing I ask is: are you default alive or default dead?",
    content: "If you assume your expenses remain constant and your revenue growth is what it has been over the last several months, do you make it to profitability with the money you have left? If yes, you're default alive. If no, you're default dead."
  },
  {
    id: "4",
    title: "Idea Generation",
    author: "Sam Altman",
    source: "blog.samaltman.com",
    readTime: "10 min",
    tag: "Ideation",
    summary: "The best way to get startup ideas is not to try to think of startup ideas. It's to look for problems, preferably problems you have yourself.",
    content: "Live in the future, then build what's missing. Good ideas often look like bad ideas at the beginning, because if they looked like good ideas, someone would have already done them."
  },
  {
    id: "5",
    title: "Maker's Schedule, Manager's Schedule",
    author: "Paul Graham",
    source: "paulgraham.com",
    readTime: "4 min",
    tag: "Productivity",
    summary: "There are two types of schedules, which I call the maker's schedule and the manager's schedule. The manager's schedule is for bosses.",
    content: "The maker's schedule is different. It is preferred by programmers and writers. They generally prefer to use time in units of half a day at least. You can't write or program well in units of an hour. That's barely enough time to get started."
  },
  {
    id: "6",
    title: "How to Supervise People",
    author: "Andy Grove",
    source: "High Output Management",
    readTime: "12 min",
    tag: "Management",
    summary: "The output of a manager is the output of the organizational units under his or her supervision or influence.",
    content: "A manager's output = The output of his organization + The output of the neighboring organizations under his influence. Meetings are the medium of a manager's work."
  },
  {
    id: "7",
    title: "Choosing Your Co-Founder",
    author: "Elad Gil",
    source: "High Growth Handbook",
    readTime: "7 min",
    tag: "Team",
    summary: "The most important decision you will make is who you start your company with. Co-founder conflict is one of the top reasons startups fail.",
    content: "Look for someone with complementary skills but shared values. You need to be able to fight with them and resolve it. You need to trust them implicitly."
  },
  {
    id: "8",
    title: "1,000 True Fans",
    author: "Kevin Kelly",
    source: "kk.org",
    readTime: "6 min",
    tag: "Marketing",
    summary: "To be a successful creator you don't need millions. You don't need to be a celebrity. You just need 1,000 True Fans.",
    content: "A True Fan is defined as someone who will purchase anything and everything you produce. They will drive 200 miles to see you sing. They will buy the super deluxe re-issued hi-res box set of your stuff even though they have the low-res version."
  },
  {
    id: "9",
    title: "Crossing the Chasm",
    author: "Geoffrey Moore",
    source: "Book Summary",
    readTime: "9 min",
    tag: "Sales",
    summary: "There is a chasm between the early adopters of the product (the technology enthusiasts and visionaries) and the early majority (the pragmatists).",
    content: "To cross the chasm, you must focus on a specific niche market and dominate it. You need to provide a whole product solution, not just a piece of technology."
  },
  {
    id: "10",
    title: "The Lean Startup",
    author: "Eric Ries",
    source: "Book Summary",
    readTime: "8 min",
    tag: "Methodology",
    summary: "The fundamental activity of a startup is to turn ideas into products, measure how customers respond, and then learn whether to pivot or persevere.",
    content: "Build-Measure-Learn. Don't spend months building a product in isolation. Build a Minimum Viable Product (MVP) and get it in front of customers as quickly as possible."
  }
];
