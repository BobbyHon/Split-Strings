function solution(str){
    let answer = []
    for (let i = 0; i < str.length; i++){
      if (i + 1 == str.length)
        {
          answer.push(str[i] + '_')
        }
      else{
        answer.push(str[i] + str[i + 1])
      }
      ++i
    }
   return answer
 }