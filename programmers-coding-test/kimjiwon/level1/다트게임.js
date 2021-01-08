function solution(dartResult) {
  const totalLength = dartResult.length;
  const scoreArray = [];
  let bonus,
    score = 0;
  //10점이 나왔을 경우
  for (let i = 0; i < totalLength; i += 2) {
    if (dartResult[i + 1] === "0") {
      score = 10;
      i++;
    } else {
      score = parseInt(dartResult[i]);
    }

    bonus = dartResult[i + 1];
    //Double과 Triple일 경우
    if (bonus === "D") {
      score *= score;
    }
    if (bonus === "T") {
      score = Math.pow(score, 3);
    }
    //*과 #이 나왔을 경우
    if (dartResult[i + 2] === "*") {
      score *= 2;
      doubleScore(scoreArray);
      i++;
    }
    if (dartResult[i + 2] === "#") {
      score *= -1;
      i++;
    }
    scoreArray.push(score);
  }
  //전체를 더해서 return
  return scoreArray.reduce(
    (firstScore, secondScore) => firstScore + secondScore
  );
}

function doubleScore(scoreArray) {
  if (scoreArray.length !== 0) {
    scoreArray[scoreArray.length - 1] *= 2;
  }
}
