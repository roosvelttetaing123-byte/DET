window.MOCK={
objective:[
{type:"Read and Select",skill:"Reading",seconds:5,prompt:"Is this a real English word?",display:"reliable",options:["Yes","No"],answer:0},
{type:"Read and Select",skill:"Reading",seconds:5,prompt:"Is this a real English word?",display:"availabness",options:["Yes","No"],answer:1},
{type:"Fill in the Blanks",skill:"Reading",seconds:20,prompt:"Complete the unfinished word.",display:"A quiet env________ helps me concentrate.",input:true,answer:"environment"},
{type:"Fill in the Blanks",skill:"Reading",seconds:20,prompt:"Complete the unfinished word.",display:"Please inc____ one example in your paragraph.",input:true,answer:"include"},
{type:"Listen and Type",skill:"Listening",seconds:60,audio:"The meeting has been moved to Tuesday.",input:true,answer:"The meeting has been moved to Tuesday.",plays:3},
{type:"Listen and Type",skill:"Listening",seconds:60,audio:"Working with a partner helps me notice mistakes.",input:true,answer:"Working with a partner helps me notice mistakes.",plays:3},
{type:"Interactive Reading",skill:"Reading",seconds:420,prompt:"Read the passage and choose its main idea.",display:"The university library used to close at six. Many students needed a place to study after daytime classes, so the library now stays open until nine on weekdays. A room upstairs is reserved for silent study.",options:["The library changed its hours to support evening study.","Students stopped using the library.","The university removed its study rooms."],answer:0},
{type:"Interactive Listening",skill:"Listening",seconds:390,prompt:"You need a quiet room for a group presentation. The booking page is not working. A librarian asks: “How can I help you today?” Choose the best reply.",options:["I need to book a room for a group presentation.","The weather was pleasant yesterday.","I prefer vegetables."],answer:0}
],
open:[
{type:"Write About the Photo",skill:"Writing",seconds:60,prompt:"Imagine a photo showing a student at a desk, typing on a laptop beside a notebook and a cup. Describe only what is visible.",kind:"write"},
{type:"Interactive Writing · Step 1",skill:"Writing",seconds:300,prompt:"Do you prefer studying alone or with other people? Explain your preference and give a specific example.",kind:"write"},
{type:"Interactive Writing · Follow-up",skill:"Writing",seconds:180,prompt:"Describe a situation in which the other way of studying could be more useful.",kind:"write"},
{type:"Read, Then Speak",skill:"Speaking",seconds:90,prep:20,prompt:"Describe a useful skill you have learned. Explain why you learned it and how it has helped you.",kind:"speak"},
{type:"Speaking Sample",skill:"Speaking",seconds:180,prep:30,prompt:"Describe an important goal you are working toward. Explain why it matters and what you are doing to reach it.",kind:"speak"},
{type:"Writing Sample",skill:"Writing",seconds:300,prep:30,prompt:"Some people learn better by doing practical activities, while others learn better by reading or listening. Discuss your view and support it with an example.",kind:"write"}
],
interactive:["What do you usually do after work or school?","Why do you enjoy that activity?","Tell me about a time when you did it with someone else.","What can make it difficult to find time for hobbies?","How could a busy person make more time for an enjoyable activity?","Do you think hobbies are important? Explain your opinion."]
};
window.buildStandardMock=function(){
 const base=MOCK.objective, out=[];
 const select=base.filter(x=>x.type==="Read and Select"), blank=base.filter(x=>x.type==="Fill in the Blanks"), listen=base.filter(x=>x.type==="Listen and Type"), read=base.filter(x=>x.type==="Interactive Reading"), il=base.filter(x=>x.type==="Interactive Listening");
 for(let i=0;i<16;i++){let q={...select[i%select.length]};if(i%3===2)q={...q,display:["achievely","reliable","convenient","arrangify","evidence","responsiblify"][i%6],answer:["achievely","arrangify","responsiblify"].includes(["achievely","reliable","convenient","arrangify","evidence","responsiblify"][i%6])?1:0};out.push(q)}
 for(let i=0;i<7;i++)out.push({...blank[i%blank.length]});
 for(let i=0;i<4;i++)out.push({type:"Read and Complete",skill:"Reading",seconds:180,prompt:"Complete the unfinished word.",display:["A clear sch_____ helps me manage my time.","The course is con_______ because I can study at home.","Please exp____ your answer clearly.","This is a useful opp________ to practice."][i],input:true,answer:["schedule","convenient","explain","opportunity"][i]});
 for(let i=0;i<7;i++)out.push({...listen[i%listen.length],audio:PRACTICE.dictation[(i+2)%PRACTICE.dictation.length],answer:PRACTICE.dictation[(i+2)%PRACTICE.dictation.length]});
 for(let set=0;set<2;set++)for(let i=0;i<6;i++)out.push({...read[0],type:"Interactive Reading "+(set+1)+" · "+(i+1)+"/6"});
 for(let set=0;set<2;set++)for(let i=0;i<9;i++)out.push({...il[0],type:"Interactive Listening "+(set+1)+" · "+(i+1)+"/9"});
 return out;
};