const quotes = [
  {
      quote: "오늘의 위기는 내일의 농담거리다.",
      author: "<- H.G.웰스 ->",
  },
  {
      quote: "시간 엄수는 비즈니스의 영혼이다.",
      author: "<- 토마스 할리버튼 ->",
  },
  {
      quote: "경험을 현명하게 사용한다면, 어떤 일도 시간 낭비는 아니다.",
      author: "<- 오귀스트 르네 로댕 ->",
  },
  {
      quote: "우리가 노력 없이 얻는 거의 유일한 것은 노년이다.",
      author: "<- 글로리아 피처 ->",
  },
  {
      quote: "문제를 직면한다고 해서 다 해결되는 것은 아니다. 그러나 직면하지 않고서 해결되는 문제는 없다.",
      author: "<- 제임스 볼드윈 ->",
  },
  {
      quote: "성공은 열심히 노력하며 기다리는 사람에게 찾아온다.",
      author: "<- 토마스 A. 에디슨 ->",
  },
  {
      quote: "내가 목표에 달성한 비밀을 말해줄게. 나의 강점은 바로 끈기야.",
      author: "<- 루이 파스퇴르 ->",
  },
  {
      quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
      author: "<- 벤자민 프랭클린 ->",
  },
  {
      quote: "위대한 일을 위해서 대단한 도전이 필요하지 않다. 단지 순간순간의 작은 도전이 모여 위대한 일을 이루어 간다.",
      author: "<- 모션 코치 ->",
  },
  {
      quote: "아무리 가까운 길이라도 가지 않으면 도달하지 못하고 아무리 쉬운 일이라도 하지 않으면 이루지 못한다.",
      author: "<- 채근담 ->",
  }
]

const quote = document.querySelector(".main-contents__quote span:first-child");
const author = document.querySelector(".main-contents__quote span:last-child");

const todaysQuote = quotes[Math.floor((Math.random() * quotes.length))];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
 