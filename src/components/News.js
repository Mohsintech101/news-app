import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Wagner representative barred from Russian army HQ in Ukraine, its boss says - Reuters",
      description:
        "Russian mercenary boss Yevgeny Prigozhin said his representative had been denied access to the headquarters of Russia's military command in Ukraine on Monday, in a further deepening of his rift with the defence establishment.",
      url: "https://www.reuters.com/world/europe/russias-wagner-chief-warns-frontline-collapse-if-forced-retreat-bakhmut-2023-03-06/",
      urlToImage:
        "https://www.reuters.com/resizer/Dx8p71Nj_gLJCKtsYZtjaxYd6y4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OTZBD5CBUVKDRFQ7HCRFNBOKJQ.jpg",
      publishedAt: "2023-03-06T12:11:00Z",
      content:
        "March 6 (Reuters) - Russian mercenary boss Yevgeny Prigozhin said his representative had been denied access to the headquarters of Russia's military command in Ukraine on Monday, in a further deepeni… [+1935 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Crypto stocks fall as Silvergate crisis deepens - Reuters",
      description:
        'Shares of cryptocurrency-related companies fell in premarket trading on Monday after Silvergate Capital Corp <a href="https://www.reuters.com/companies/SI.N" target="_blank">(SI.N)</a> pulled the plug on its crypto payments network, following its doubts about…',
      url: "https://www.reuters.com/technology/crypto-stocks-fall-silvergate-crisis-deepens-2023-03-06/",
      urlToImage:
        "https://www.reuters.com/resizer/Nds0yV4bpyXZ1iIyCWxaPjmAUcg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RV3TWLAGWBM5HPS5ITNB23LRMQ.jpg",
      publishedAt: "2023-03-06T11:46:00Z",
      content:
        "March 6 (Reuters) - Shares of cryptocurrency-related companies fell in premarket trading on Monday after Silvergate Capital Corp (SI.N) pulled the plug on its crypto payments network, following its d… [+1553 chars]",
    },
    {
      source: { id: null, name: "FOX 5 Atlanta" },
      author: "FOX 5 Atlanta",
      title:
        "Dozens arrested in clash between protestors and police at future Atlanta public safety training center site - FOX 5 Atlanta",
      description:
        "Police say a music festival being held at the site as part of a week of action against the city-approved public safety training center turned chaotic when some protestors began throwing rocks and sticks at officers",
      url: "https://www.fox5atlanta.com/news/cop-city-protestors-police-smoke",
      urlToImage:
        "https://images.foxtv.com/static.fox5atlanta.com/www.fox5atlanta.com/content/uploads/2023/03/1280/720/Fireclose.jpg?ve=1&tl=1",
      publishedAt: "2023-03-06T11:30:54Z",
      content:
        "ATLANTA - Dozens of people have been detained after a violent clash between police and protesters at the site of Atlanta's future Public Safety Training Facility, nicknamed \"Cop City by critics.  \r\nS… [+4573 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Maziar Motamedi",
      title:
        "Iran supreme leader orders punishment for schoolgirl poisoning - Al Jazeera English",
      description:
        "Ayatollah Khamenei says no doubt the poisonings are deliberate as a top judge suggests perpetrators may face execution.",
      url: "https://www.aljazeera.com/news/2023/3/6/iran-supreme-leader-promises-punishment-for-schoolgirl-poisoning",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2021/07/000_Nic141203.jpg?resize=1920%2C1318",
      publishedAt: "2023-03-06T11:20:55Z",
      content:
        "Tehran, Iran Irans supreme leader, Ayatollah Ali Khamenei, has called for the perpetrators of schoolgirl poisonings to be punished as attacks spread across the country.\r\nSpeaking on the sidelines of … [+3335 chars]",
    },
    {
      source: { id: null, name: "The Ringer" },
      author: "Ben Solak",
      title:
        "2023 NFL Combine Takeaways: Six Observations About the Draft Class - The Ringer",
      description:
        "Another week of testing and interviews in Indianapolis is in the books. Here is what we learned.",
      url: "https://www.theringer.com/nfl-draft/2023/3/6/23626758/nfl-combine-takeaways-anthony-richardson-christian-gonzalez",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/JNKbDE_LwNpNvrApjVyuWF6Tb8g=/0x0:1200x628/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24482458/NFLDraftCombineTakeaway_AP_Ringer.jpg",
      publishedAt: "2023-03-06T11:10:00Z",
      content:
        "Just like that, the 2023 NFL combine is over. It was a great event, as the combine always isan event that helps us sort out the NFL draft class. All of my notes from conversations with scouts, as wel… [+11970 chars]",
    },
    {
      source: { id: null, name: "HuffPost" },
      author: "Jillian Wilson",
      title:
        "The Most Common Long COVID Symptoms Doctors Are Seeing Right Now - HuffPost",
      description:
        "The condition can affect your cardiovascular system, neurological system, respiratory system and more.",
      url: "https://www.huffpost.com/entry/long-covid-symptoms_l_6400aca3e4b072dc5958eac3",
      urlToImage:
        "https://img.huffingtonpost.com/asset/6400ace622000060005db15d.jpeg?cache=BswacZM4v1&ops=1200_630",
      publishedAt: "2023-03-06T10:45:10Z",
      content:
        "Millions of people are experiencing a post-COVID illness known as long COVID.\r\nAs we near the three-year mark of the coronavirus pandemic, things look a lot different from a few years ago. We have a … [+9236 chars]",
    },
    {
      source: { id: "bloomberg", name: "Bloomberg" },
      author: "Ambereen Choudhury, Marion Halftermeyer",
      title:
        "Credit Suisse's Biggest Shareholder Harris Sold Its Entire Stake in Bank - Bloomberg",
      description:
        "Harris Associates stock picker David Herro sold the firm’s entire stake in Credit Suisse Group AG, ending ties with the bank after about two decades of ownership and piling further pressure on the troubled Swiss lender’s leadership.",
      url: "https://www.bloomberg.com/news/articles/2023-03-06/top-shareholder-sold-out-of-credit-suisse-over-the-past-3-to-4-months",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/isLAoCMQQGko/v0/1200x800.jpg",
      publishedAt: "2023-03-06T10:44:49Z",
      content:
        "Harris Associates stock picker David Herro sold the firm’s entire stake in \r\nCredit Suisse Group AG, ending ties with the bank after about two decades of ownership and piling further pressure on the … [+248 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Holly Ellyatt",
      title:
        "Ukraine war live updates: Time could be running out for Ukrainian forces in besieged Bakhmut; Russia turns to 'vintage' tanks - CNBC",
      description:
        "It's unclear how much of Bakhmut is controlled by Russian forces, and whether Ukrainain forces are starting to withdraw from parts of the city.",
      url: "https://www.cnbc.com/2023/03/06/ukraine-war-live-updates-latest-news-on-russia-and-the-war-in-ukraine.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107191668-1675931465199-gettyimages-1457415190-bakhmut5152817_2db43513-30fb-4186-9f56-c5d043d52c76.jpeg?v=1678097882&w=1920&h=1080",
      publishedAt: "2023-03-06T10:18:00Z",
      content:
        "The status of Bakhmut is unclear after conflicting reports at the weekend over how much of the city was controlled by Russian forces, and whether Ukrainain forces were starting to withdraw from parts… [+1868 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Jacob Lev, Ben Morse",
      title:
        "Memphis Grizzlies head coach says no timetable for Ja Morant's return to team after video appears to show him holding a gun - CNN",
      description:
        "Memphis Grizzlies head coach Taylor Jenkins said on Sunday there is no timetable for star guard Ja Morant to return to the team after posting a video of himself on his Instagram live on Saturday in which he appeared to be holding a gun.",
      url: "https://www.cnn.com/2023/03/06/sport/ja-morant-gun-taylor-jenkins-grizzlies-spt-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230306092651-ja-morant-030323-restricted.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-03-06T09:54:00Z",
      content:
        "Memphis Grizzlies head coach Taylor Jenkins said on Sunday there is no timetable for star guard Ja Morant to return to the team after posting a video of himself on his Instagram live on Saturday in w… [+2758 chars]",
    },
    {
      source: { id: null, name: "STAT" },
      author: "Matthew Herper",
      title:
        "With heart attack data in its favor, what's next for Esperion? - STAT - STAT",
      description:
        "Promoting a cardiovascular drug requires a huge marketing lift, and Esperion has a market capitalization of just $500 million.",
      url: "https://www.statnews.com/2023/03/06/esperion-nexletol-heart-attack-next/",
      urlToImage:
        "https://www.statnews.com/wp-content/uploads/2023/03/IMG_0357-1024x576.jpg",
      publishedAt: "2023-03-06T09:36:56Z",
      content:
        "NEW ORLEANS – On Saturday a new study showed that Nexletol, the cholesterol-lowering medicine made by Esperion Therapeutics, prevented heart attacks among people who cannot or will not take potent ch… [+319 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Polo Sandoval, Rebekah Riess",
      title:
        "4 US citizens missing after being assaulted and kidnapped in Matamoros, Mexico, FBI says - CNN",
      description:
        "Four US citizens were assaulted and kidnapped after crossing the border into northeastern Mexico on Friday, according to the FBI, which is working to locate the missing Americans.",
      url: "https://www.cnn.com/2023/03/06/americas/fbi-mexico-kidnapping-us-citizens/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230306140613-us-citizen-mexico-kidnapping-fbi.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-03-06T08:01:00Z",
      content:
        "Four US citizens were assaulted and kidnapped after crossing the border into northeastern Mexico on Friday, according to the FBI, which is working to locate the missing Americans. \r\nSoon after the US… [+1292 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "David Bauder",
      title:
        "Fox libel defense at odds with top GOP presidential foes - The Associated Press - en Español",
      description:
        "NEW YORK (AP) — Fox News is on an unlikely collision course with two leading contenders for the Republican presidential nomination over the rights of journalists. In defending itself against a massive defamation lawsuit over how it covered false claims  surro…",
      url: "https://apnews.com/article/fox-news-libel-defamation-voting-machines-7ed8dd7f45d15a85af64a6141fafd7d8",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/442a8bd2c0a14f1eb09c52c7822da339/3000.webp",
      publishedAt: "2023-03-06T06:24:06Z",
      content:
        "NEW YORK (AP) Fox News is on an unlikely collision course with two leading contenders for the Republican presidential nomination over the rights of journalists.\r\nIn defending itself against a massive… [+8076 chars]",
    },
    {
      source: { id: null, name: "KTLA Los Angeles" },
      author: "Josh DuBose",
      title:
        "Pete Davidson, actress Chase Sui Wonders involved in crash in Beverly Hills: TMZ - KTLA Los Angeles",
      description:
        "Comedian Pete Davidson and actress Chase Sui Wonders were involved in a crash Saturday night in the Flats neighborhood of Beverly Hills, TMZ is reporting.  The incident happened at around 11 p.m., with Davidson allegedly driving a Mercedes Benz at a high rate…",
      url: "https://ktla.com/news/local-news/pete-davidson-actress-chase-sui-wonders-involved-in-crash-in-beverly-hills-tmz/",
      urlToImage:
        "https://ktla.com/wp-content/uploads/sites/4/2023/03/GettyImages-1467667979.jpg?w=1280",
      publishedAt: "2023-03-06T06:20:07Z",
      content:
        "Comedian Pete Davidson and actress Chase Sui Wonders were involved in a crash Saturday night in the Flats neighborhood of Beverly Hills, TMZ is reporting. \r\nThe incident happened at around 11 p.m., w… [+794 chars]",
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Sarah Min",
      title:
        "Stock futures inch up as investors look ahead to Powell comments, jobs data this week - CNBC",
      description:
        "Wall Street is coming off a positive week for the major averages, where the Dow Jones Industrial Average snapped a four-week losing streak.",
      url: "https://www.cnbc.com/2023/03/05/stock-market-today-live-updates.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107200376-1677521016786-gettyimages-1470000983-dscf0718_7e20d4b3-bf6c-4d65-aa50-f04096c3e5fc.jpeg?v=1678057465&w=1920&h=1080",
      publishedAt: "2023-03-06T05:44:00Z",
      content:
        "U.S. stock futures inched up Monday morning as Wall Street looked ahead to a week filled with economic data and the latest commentary from the Federal Reserve.\r\nDow Jones Industrial Average futures m… [+1615 chars]",
    },
    {
      source: { id: null, name: "PhoneArena" },
      author: null,
      title:
        "Video reportedly shows the display panels for the iPhone 15 series - PhoneArena",
      description:
        "PhoneArena is the premium website for new phone information such as full specifications, in-depth reviews, latest news, carrier available and upcoming phones. It features advanced phone filter, visual size comparison and 360 degree views of all hot phones.",
      url: "https://www.phonearena.com/",
      urlToImage:
        "https://s-cdn.phonearena.com/images/logo/phonearena-logo-light-blue-on-dark-blue.png",
      publishedAt: "2023-03-06T05:32:16Z",
      content: null,
    },
    {
      source: { id: "ign", name: "IGN" },
      author: "Adam Bankhurst",
      title: "Counter-Strike 2 Rumors Are Picking Up Steam - IGN",
      description:
        "While its important to take all this with a grain of salt and wait for official confirmation, there have been some rumors circulating that Counter-Strike 2 may be on the way very soon.",
      url: "https://www.ign.com/articles/counter-strike-2-rumors-are-picking-up-steam",
      urlToImage:
        "https://assets-prd.ignimgs.com/2023/03/06/csgojpg-d18efd-1678077750697.jpg?width=1280",
      publishedAt: "2023-03-06T04:48:53Z",
      content:
        "While its important to take all this with a grain of salt and wait for official confirmation, there have been some rumors circulating that Counter-Strike 2 may be on the way very soon.\r\nRichard Lewis… [+3140 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: null,
      title:
        'In Selma, Biden puts spotlight back on "under assault" voting rights - CBS News',
      description:
        'President Biden paid tribute to the heroes of "Bloody Sunday" in Selma, Alabama.',
      url: "https://www.cbsnews.com/news/joe-biden-selma-visit-spotlight-voting-rights/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2023/03/05/dcac7a08-e537-49cb-af81-a975dcab26c7/thumbnail/1200x630/2583708fa72bf2b69028fbd940f038f3/ap23064797736199.jpg",
      publishedAt: "2023-03-06T04:45:00Z",
      content:
        'President Biden used the searing memories of Selma\'s "Bloody Sunday" to recommit to a cornerstone of democracy, lionizing a seminal moment from the civil rights movement at a time when he has been un… [+5533 chars]',
    },
    {
      source: { id: null, name: "Hollywood Reporter" },
      author: "Hilary Lewis",
      title: "WGA Awards: Complete Winners List - Hollywood Reporter",
      description:
        "TV winners included 'The Bear,' for comedy series; 'Severance,' for drama series and for new series; and 'The White Lotus,' for limited series.",
      url: "https://www.hollywoodreporter.com/movies/movie-news/writers-guild-awards-2023-winners-list-1235340028/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/01/https___cdn.sanity.io_images_xq1bjtf4_production_8233d9c057e131152eb7265002c04915b0681391-6000x4000-H-2023.jpg?w=1024",
      publishedAt: "2023-03-06T03:27:11Z",
      content:
        "The 2023 Writers Guild Awards were handed out Sunday night in simultaneous ceremonies held in New York and Los Angeles.\r\nAmong the winners were Everything Everywhere All at Once, for original screenp… [+20918 chars]",
    },
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Edward Segarra",
      title:
        "'Vanderpump Rules' star Tom Sandoval addresses alleged cheating scandal: 'Direct (your) anger towards me' - USA TODAY",
      description:
        'Tom Sandoval is asking fans to redirect their "anger and disappointment" after allegations that he cheated on girlfriend Ariana Madix surfaced.',
      url: "https://www.usatoday.com/story/entertainment/celebrities/2023/03/05/tom-sandoval-vanderpump-rules-cheating-rumors-ariana-madix-raquel-leviss/11409972002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2018/11/12/USAT/15143483-9e99-4f24-85d1-6dc42b30a52e-PCA25.JPG?crop=1397,786,x23,y71&width=1397&height=786&format=pjpg&auto=webp",
      publishedAt: "2023-03-06T03:26:53Z",
      content:
        'Heartbreak is a personal affair, but "Vanderpump Rules" star Tom Sandoval is doing damage control in the wake of what appears to be a messy breakup between him and co-star Ariana Madix. \r\nSandoval to… [+2964 chars]',
    },
    {
      source: { id: null, name: "Nikkei.com" },
      author: "Staff Writer",
      title:
        "South Korea offers plan to end wartime labor dispute with Japan - Nikkei Asia",
      description:
        "Seoul drops WTO dispute process on export curbs; Tokyo announces talks on issue",
      url: "https://asia.nikkei.com/Spotlight/Japan-South-Korea-rift/South-Korea-offers-plan-to-end-wartime-labor-dispute-with-Japan",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%253A%252F%252Fs3-ap-northeast-1.amazonaws.com%252Fpsh-ex-ftnikkei-3937bb4%252Fimages%252F7%252F6%252F2%252F1%252F44661267-1-eng-GB%252F2022-08-17T021642Z_542892268_RC21YV9WUCRJ_RTRMADP_3_SOUTHKOREA-POLITICS.jpg?width=1260&height=630&fit=cover&gravity=faces&source=nar-cms",
      publishedAt: "2023-03-06T02:39:00Z",
      content:
        "SEOUL -- South Korea announced on Monday that it will compensate Korean laborers forced to work for Japanese companies during World War II, in an attempt to resolve one of the thorny historical issue… [+269 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      error: false,
    };
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>News Hunger - Top Headlines of the Day</h2>
          <div className="row">
            {this.state.articles.map((news) => (
              <div className="col-md-4" key={news.url}>
                <NewsItem
                  title={news.title}
                  description={news.description.slice(0,80)}
                  imageUrl={news.urlToImage}
                  newsUrl={news.url}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default News;
