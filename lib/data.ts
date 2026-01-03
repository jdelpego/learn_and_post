import { Article } from './types';

export const CURATED_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Do Things that Don\'t Scale',
    source: 'Paul Graham',
    readingTime: '5 min',
    category: 'Startup',
    content: `
      <p>One of the most common types of advice we give at Y Combinator is to do things that don't scale. A lot of would-be founders believe that startups either take off or don't. You build something, make it available, and if you've made a better mousetrap, people beat a path to your door as promised. Or they don't, in which case the market must not exist.</p>
      
      <p>Actually startups take off because the founders make them take off. There may be a handful that just grew by themselves, but usually it takes some sort of push to get them going. A good metaphor would be the cranks that car engines had before they got electric starters. Once the engine was going, it would keep going, but there was a separate and laborious process to get it going.</p>

      <h3>Recruit</h3>
      <p>The most common unscalable thing founders have to do at the start is to recruit users manually. Nearly all startups have to. You can't wait for users to come to you. You have to go out and get them.</p>

      <p>Stripe is one of the most successful startups we've funded, and the problem they solved was an urgent one. If anyone could have sat back and waited for users, it was Stripe. But in fact they're famous within YC for aggressive early user acquisition.</p>

      <p>Startups building things for other startups have a big pool of potential users in the other companies we've funded, and none took better advantage of it than Stripe. At YC we use the term "Collison installation" for the technique they invented. More diffident founders ask "Will you try our beta?" and if the answer is yes, they say "Great, we'll send you a link." But the Collison brothers weren't going to wait. When anyone agreed to try Stripe they'd say "Right then, give me your laptop" and set them up on the spot.</p>
    `
  },
  {
    id: '2',
    title: 'The only thing that matters',
    source: 'Marc Andreessen',
    readingTime: '4 min',
    category: 'Product',
    content: `
      <p>The only thing that matters is getting to product/market fit.</p>
      
      <p>Product/market fit means being in a good market with a product that can satisfy that market.</p>
      
      <p>You can always feel when product/market fit isn't happening. The customers aren't quite getting value out of the product, word of mouth isn't spreading, usage isn't growing that fast, press reviews are kind of "blah", the sales cycle takes too long, and lots of deals never close.</p>
      
      <p>And you can always feel product/market fit when it is happening. The customers are buying the product just as fast as you can make it — or usage is growing just as fast as you can add more servers. Money from customers is piling up in your company checking account. You're hiring sales and customer support staff as fast as you can.</p>
      
      <h3>The Market</h3>
      <p>The #1 company-killer is lack of market.</p>
      <p>When a great team meets a lousy market, market wins. When a lousy team meets a great market, market wins. When a great team meets a great market, something special happens.</p>
    `
  },
  {
    id: '3',
    title: 'Choosing Ideas',
    source: 'Sam Altman',
    readingTime: '3 min',
    category: 'Mental Model',
    content: `
      <p>It is common to say that ideas don't matter and execution is all that matters. I think this is false. The idea matters a lot.</p>
      
      <p>The pivot is an overrated concept. It is good to be flexible, but bad to have no conviction. The best companies almost always have a mission that remains the same from the beginning, even if the product itself changes.</p>
      
      <p>You want an idea that sounds like a bad idea, but is actually a good idea. If it sounds like a good idea, someone else is probably already working on it. Peter Thiel talks about this as a "secret" — a truth that you know that no one else agrees with you on.</p>
      
      <p>The best ideas are often the ones that seem small at first but have a clear path to becoming huge. Facebook started as a directory for college students. Google started as a search engine for Stanford. Amazon started as a bookstore.</p>
    `
  }
];
