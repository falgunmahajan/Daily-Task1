let sentence="How many vowels in a given sentence";
let vowel=['a', 'e', 'i', 'o', 'u']
let vowelCount=0;
let consonantCount=0;
for(var i of sentence)
{
    let flag=false;
    for(var j of vowel)
    {
        
        if(i==j)
        {
            vowelCount++;
            flag=true;
            break;
        }
    }
    if(flag==false)
    {
        if(i!=" ")
        {
            consonantCount++; 
        }
    }
}
console.log("The number of vowels in a sentence: "+vowelCount);
console.log("The number of consonants in a sentence: "+consonantCount);