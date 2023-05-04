function templateLiteral()
 {
    var applicantName = "Mr. John Worker";
var loanAmount=150000;
var reviewText = "will be reviewed";
var riskProfile = "high";
var applicationCode = String.raw `\t${createApplicationId()}`;
var summaryText = highlighText `Dear ${applicantName},<br>
Your Application for ${"$"+loanAmount} ${reviewText}.<br>
Your risk profile is  ${riskProfile}<br>
Your unique application code is ${applicationCode}`;
console.log(summaryText);
return summaryText;
}
document.getElementById("demo").innerHTML=templateLiteral()
function highlighText(strings,...values)
{
    let str = "";
    for(var i = 0; i<strings.raw.length; i++)
    {
        if(i>0)
        {
            str+=`<b>${values[i-1]}</b>`
        }
        str+=strings.raw[i];
       
    }
    return str;
}
function createApplicationId() {
    var result = '';
    var characters = 'ABCDEUVYZabcdrswxyz01789/\\#@$%()*^!';
    var charactersLength = characters.length;
    for (var i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
