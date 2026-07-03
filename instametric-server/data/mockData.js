const overviewStats = [
  { title: "Followers", value: "24.8K", change: "+12.4%" },
  { title: "Reach", value: "148.2K", change: "+18.7%" },
  { title: "Impressions", value: "312.5K", change: "+9.3%" },
  { title: "Engagement Rate", value: "6.8%", change: "+2.1%" },
];

const followerGrowthData = [
  { month: "Jan", followers: 12000 },
  { month: "Feb", followers: 14500 },
  { month: "Mar", followers: 16800 },
  { month: "Apr", followers: 19000 },
  { month: "May", followers: 21500 },
  { month: "Jun", followers: 24800 },
];

const engagementData = [
  { month: "Jan", likes: 4200, comments: 380 },
  { month: "Feb", likes: 5100, comments: 420 },
  { month: "Mar", likes: 6200, comments: 500 },
  { month: "Apr", likes: 7000, comments: 610 },
  { month: "May", likes: 7600, comments: 690 },
  { month: "Jun", likes: 8900, comments: 750 },
];

const recentContent = [
  {
    title: "Reel: Product Launch",
    type: "Reel",
    reach: "42.5K",
    likes: 6200,
    comments: 380,
    score: 92,
  },
  {
    title: "Carousel: Design Tips",
    type: "Carousel",
    reach: "31.2K",
    likes: 4100,
    comments: 260,
    score: 84,
  },
  {
    title: "Post: Behind the Scenes",
    type: "Image",
    reach: "18.7K",
    likes: 2200,
    comments: 140,
    score: 71,
  },
];

const reachImpressionData = [
  { month: "Jan", reach: 52000, impressions: 105000 },
  { month: "Feb", reach: 68000, impressions: 132000 },
  { month: "Mar", reach: 79000, impressions: 158000 },
  { month: "Apr", reach: 92000, impressions: 188000 },
  { month: "May", reach: 115000, impressions: 240000 },
  { month: "Jun", reach: 148000, impressions: 312000 },
];

const engagementRateData = [
  { month: "Jan", rate: 4.2 },
  { month: "Feb", rate: 4.8 },
  { month: "Mar", rate: 5.1 },
  { month: "Apr", rate: 5.7 },
  { month: "May", rate: 6.1 },
  { month: "Jun", rate: 6.8 },
];

const contentTypeData = [
  { type: "Reels", engagement: 72 },
  { type: "Carousels", engagement: 58 },
  { type: "Images", engagement: 41 },
  { type: "Stories", engagement: 36 },
];

const audienceData = [
  { group: "18-24", value: 42 },
  { group: "25-34", value: 33 },
  { group: "35-44", value: 15 },
  { group: "45+", value: 10 },
];

const contentPerformance = [
  {
    id: 1,
    title: "Reel: Product Launch",
    type: "Reel",
    date: "2026-05-01",
    reach: 42500,
    likes: 6200,
    comments: 380,
    saves: 740,
    shares: 510,
    score: 92,
  },
  {
    id: 2,
    title: "Carousel: Design Tips",
    type: "Carousel",
    date: "2026-04-27",
    reach: 31200,
    likes: 4100,
    comments: 260,
    saves: 520,
    shares: 310,
    score: 84,
  },
  {
    id: 3,
    title: "Post: Behind the Scenes",
    type: "Image",
    date: "2026-04-22",
    reach: 18700,
    likes: 2200,
    comments: 140,
    saves: 190,
    shares: 120,
    score: 71,
  },
  {
    id: 4,
    title: "Reel: Client Transformation",
    type: "Reel",
    date: "2026-04-18",
    reach: 50100,
    likes: 7100,
    comments: 460,
    saves: 890,
    shares: 650,
    score: 96,
  },
];

const reportSummary = {
  period: "April 2026",
  followersGained: 3300,
  totalReach: 148200,
  totalImpressions: 312500,
  avgEngagementRate: "6.8%",
  bestContent: "Reel: Client Transformation",
};

const reports = [
  {
    id: 1,
    title: "Weekly Performance Report",
    period: "Apr 25 - May 01, 2026",
    status: "Ready",
  },
  {
    id: 2,
    title: "Monthly Growth Report",
    period: "April 2026",
    status: "Ready",
  },
  {
    id: 3,
    title: "Content Engagement Report",
    period: "April 2026",
    status: "Draft",
  },
];

module.exports = {
  overviewStats,
  followerGrowthData,
  engagementData,
  recentContent,
  reachImpressionData,
  engagementRateData,
  contentTypeData,
  audienceData,
  contentPerformance,
  reportSummary,
  reports,
};