// Original, fixed beginner practice form. Frequencies are representative, never adaptive.
(function () {
const choice=(type,display,prompt,options,answer,extra={})=>({type,skill:'Reading',display,prompt,options,answer,...extra});
const blanks=(type,display,fields,seconds,extra={})=>({type,skill:'Reading',display,prompt:'Type only the missing letters in each unfinished word.',fields:fields.map(([prefix,answer])=>({prefix,answer})),seconds,...extra});
const reads=[
{passage:'The university library used to close at six. Many students needed a place to study after daytime classes. The library now stays open until nine on weekdays. A room upstairs is reserved for silent study. The change has helped students finish their assignments.',words:[['library',['library','airport','river']],['nine',['nine','two','five']],['silent',['silent','noisy','outdoor']]],gaps:'The university library used to close at six. Many students needed a place to study after daytime classes. [MISSING SENTENCE] A room upstairs is reserved for silent study. The change has helped students finish their assignments.',sentence:'The library now stays open until nine on weekdays.',evidence:[['When does the library close on weekdays?','nine'],['Where is the silent study room?','upstairs']],idea:'Longer opening hours help students study.',title:'More Time at the Library'},
{passage:'A neighborhood garden replaced an empty car park. Residents grow vegetables together every Saturday. An experienced gardener teaches beginners how to care for young plants. Rainwater is collected in large barrels to reduce water use. Residents also share the vegetables with elderly neighbors.',words:[['garden',['garden','factory','museum']],['Saturday',['Saturday','Monday','Friday']],['Rainwater',['Rainwater','Oil','Sand']]],gaps:'A neighborhood garden replaced an empty car park. Residents grow vegetables together every Saturday. [MISSING SENTENCE] Rainwater is collected in large barrels to reduce water use. Residents also share the vegetables with elderly neighbors.',sentence:'An experienced gardener teaches beginners how to care for young plants.',evidence:[['When do residents garden together?','every Saturday'],['What is collected to reduce water use?','Rainwater']],idea:'A shared garden helps residents learn and support their neighbors.',title:'Growing a Community Garden'}
];
function reading(s,n){const group='reading-'+n,extra={group,groupSeconds:420,seconds:420};return [
{type:'Interactive Reading · Complete the Sentences',skill:'Reading',prompt:'Select a word for every gap.',display:s.passage.replace(s.words[0][0],'[1]').replace(s.words[1][0],'[2]').replace(s.words[2][0],'[3]'),fields:s.words.map(([answer,options])=>({options,answer})),...extra},
choice('Interactive Reading · Complete the Passage',s.gaps,'Choose the missing sentence.',[s.sentence,'The airport is closed for repairs.','Everyone decided to leave the city.'],0,extra),
...s.evidence.map(([prompt,answer])=>({type:'Interactive Reading · Highlight the Answer',skill:'Reading',prompt:prompt+' Select the exact words in the passage. Keyboard/mobile alternative: type the exact words.',display:s.passage,highlight:true,input:true,answer,...extra})),
choice('Interactive Reading · Identify the Idea',s.passage,'Choose the main idea.',[s.idea,'The passage describes a holiday abroad.','The project was abandoned.'],0,extra),
choice('Interactive Reading · Title the Passage',s.passage,'Choose the best title.',[s.title,'A Journey by Plane','An Unexpected Storm'],0,extra)];}
const listens=[
{scenario:'You are a university student. You need a quiet room for a group presentation on Friday. The online booking page is not working, so you visit the library desk.',facts:[['You are a university ___.','student'],['You need a quiet ___.','room'],['The presentation is on ___.','Friday']],turns:[['How can I help you today?','I need to book a room for a group presentation.'],['When do you need the room?','On Friday afternoon.'],['How many people will be there?','There will be four of us.'],['Room two is free at three. Would that work?','Yes, three o’clock would be perfect.'],['Please bring your student card.','Of course. I will bring it.'],['I have booked room two for your group.','Thank you for helping us make the booking.']]},
{scenario:'You are a student in a biology class. You missed a lesson because you were ill. You meet your professor to ask about the assignment due on Monday.',facts:[['You study ___.','biology'],['You missed class because you were ___.','ill'],['The assignment is due on ___.','Monday']],turns:[['Why did you miss yesterday’s lesson?','I was ill and could not come to class.'],['Are you feeling better now?','Yes, thank you. I am feeling much better.'],['What would you like to know about the assignment?','Could you explain what we need to write?'],['Write a report about a local plant.','Should I include my own observations?'],['Yes. Describe its leaves and where it grows.','I will observe a plant near my home.'],['Send your report by Monday evening.','Thank you. I will submit it on time.']]}
];
function listening(s,n){const group='listening-'+n,extra={group,groupSeconds:390,seconds:390,skill:'Listening'};return [
{type:'Interactive Listening · Listen and Complete',prompt:'Listen to the scenario. Answer the three questions. Replay the scenario as needed.',audio:s.scenario,plays:Infinity,fields:s.facts.map(([label,answer])=>({label,answer})),...extra},
...s.turns.map(([audio,reply],i)=>({type:'Interactive Listening · Listen and Respond',prompt:'Listen once and choose your reply.',audio,plays:1,options:i%2?["I have no interest in the weather.",reply,"I bought a train yesterday."]:[reply,"The ocean is very large.","I prefer my shoes."],answer:i%2?1:0,feedback:true, ...extra})),
{type:'Interactive Listening · Summarize the Conversation',skill:'Writing',prompt:'Write a paragraph summarizing the conversation you just had: who, problem, and outcome.',kind:'write',seconds:75}];}
const wordBank=[['reliable',0],['availabness',1],['convenient',0],['arrangify',1],['evidence',0],['responsiblify',1],['schedule',0],['improvement',0],['concentratish',1],['useful',0],['opportunity',0],['discussmently',1],['although',0],['environmish',1],['assignment',0],['understand',0]];
const single=[['A quiet env________ helps me concentrate.','env','ironment'],['Please inc____ an example.','inc','lude'],['A clear sch_____ helps me manage time.','sch','edule'],['We arr____ a meeting every week.','arr','ange'],['Give a rel_____ example.','rel','evant'],['We walked ins____ of taking a bus.','ins','tead'],['I want to imp____ my English.','imp','rove']];
const complete=[
['Learning a new skill takes time. I pra_____ every day and rev___ my mistakes. A clear pl__ helps me focus.',[['pra','ctice'],['rev','iew'],['pl','an']]],
['The library is a quiet place. Students bor___ books and stu__ together. They ret___ their books on time.',[['bor','row'],['stu','dy'],['ret','urn']]],
['We started a small garden. We pla____ seeds and wat____ them daily. After several weeks, the plants gr__ taller.',[['pla','nted'],['wat','ered'],['gr','ew']]],
['Our class visited a museum. The guide exp______ the history of the city. We asked que______ and learned many int________ facts.',[['exp','lained'],['que','stions'],['int','eresting']]]
];
window.buildStandardMock=function(){return [
...wordBank.map(([display,answer])=>choice('Read and Select',display,'Is this a real English word?',['Yes','No'],answer,{seconds:5})),
...single.map(([display,prefix,answer])=>blanks('Fill in the Blanks',display,[[prefix,answer]],20)),
...complete.map(([display,fields])=>blanks('Read and Complete',display,fields,180)),
...window.PRACTICE.dictation.slice(2,9).map(audio=>({type:'Listen and Type',skill:'Listening',seconds:60,audio,plays:3,input:true,answer:audio})),
...reads.flatMap(reading),...listens.flatMap(listening),
...[0,1,2].map(n=>({type:'Write About the Photo',skill:'Writing',seconds:60,prompt:'Describe the image in detail.',kind:'write',image:'assets/scene-'+n+'.svg'})),
{type:'Interactive Writing · Step 1',skill:'Writing',seconds:300,prep:30,prompt:'Do you prefer studying alone or with other people? Explain your preference with a specific example.',kind:'write'},
{type:'Interactive Writing · Follow-up',skill:'Writing',seconds:180,prompt:'Describe a situation in which the other way of studying could be more useful.',kind:'write',previous:true},
{type:'Speak About the Photo',skill:'Speaking',seconds:90,prep:20,prompt:'Describe the image in detail.',kind:'speak',image:'assets/scene-0.svg'},
{type:'Read, Then Speak',skill:'Speaking',seconds:90,prep:20,prompt:'Describe a useful skill you learned. Why did you learn it, and how has it helped you?',kind:'speak'},
...window.MOCK.interactive.map(audio=>({type:'Interactive Speaking',skill:'Speaking',seconds:35,audio,plays:1,kind:'speak'})),
{type:'Writing Sample',skill:'Writing',seconds:300,prep:30,prompt:'Do people learn better by practical activities or by reading? Explain your view with an example.',kind:'write'},
{type:'Speaking Sample',skill:'Speaking',seconds:180,prep:30,prompt:'Describe an important goal. Why does it matter, and what are you doing to reach it?',kind:'speak'}
];};
window.MOCK.objective=window.buildStandardMock().filter(q=>!q.kind);
window.MOCK.open=window.buildStandardMock().filter(q=>q.kind&&q.type!=='Interactive Speaking');
})();
