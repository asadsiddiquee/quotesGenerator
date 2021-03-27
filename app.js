const quotesCollection = [
    {
        quote:' “The Best Way To Get Started Is To Quit Talking And Begin Doing.”',
        name:'– Walt Disney'
    },
    {
        quote:'“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”',
        name:'– Winston Churchill'
    },
    {
        quote:'“Don’t Let Yesterday Take Up Too Much Of Today.”',
        name:'– Will Rogers'
    },
    {
        quote:'“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”',
        name:'– Asad'
    },
    {
        quote:'“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.”',
        name:'-Vince Lombardi'
    },
    {
        quote:'“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.”',
        name:'– Steve Jobs'
    },
    {
        quote:'“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.”',
        name:'– Rob Siltanen'
    },
    {
        quote:'“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.”',
        name:'– Og Mandino'
    },,,
    {
        quote:'“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.”',
        name:'– Mohnish Pabrai'
    },
    {
        quote:'“We May Encounter Many Defeats But We Must Not Be Defeated.”',
        name:'– Maya Angelou'
    },
    {
        quote:'“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” ',
        name:'– Johann Wolfgang Von Goethe'
    },
    {
        quote:'“Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?” ',
        name:'– Brian Tracy'
    },
    {
        quote:'“We Generate Fears While We Sit. We Overcome Them By Action.”',
        name:'– Dr. Henry'
    },
    {
        quote:'“Whether You Think You Can Or Think You Can’t, You’re Right.”',
        name:'– Henry Ford'
    },
    {
        quote:'“Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.”',
        name:' Helen Keller'
    },
    {
        quote:'“The Man Who Has Confidence In Himself Gains The Confidence Of Others.”',
        name:' – Hasidic Proverb'
    },
    {
        quote:'“The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.”',
        name:'– Franklin D. Roosevelt'
    },
    {
        quote:'“What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.”',
        name:'– Don Zimmer'
    },
    {
        quote:'“Do What You Can With All You Have, Wherever You Are.”',
        name:'– Theodore Roosevelt'
    },
    {
        quote:' “Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.”',
        name:'– Brian Tracy'
    }
]

const quoteBtn = document.querySelector('#btnQ');
const quotes = document.querySelector('#quotes');
const qAuthor = document.querySelector('#author');

quoteBtn.addEventListener('click', genQuote);

function genQuote(){
    let random = Math.floor(Math.random()*quotesCollection.length);
    // console.log(random);
    qAuthor.innerHTML = quotesCollection[random].name;
    quotes.innerHTML = quotesCollection[random].quote;
    
}

