const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{}};vm.createContext(ctx);
for(const f of ['lessons.js','practice.js','mock.js','standard.js','exam-data.js'])vm.runInContext(fs.readFileSync(f,'utf8'),ctx,{filename:f});
const {LESSONS,PRACTICE,SOURCES,EXAM_SPEC,buildStandardMock}=ctx.window;
assert.equal(LESSONS.length,28);LESSONS.forEach((l,i)=>{assert.equal(l.id,i);assert.ok(l.title&&l.rule&&l.example&&l.q&&l.repair);assert.equal(l.opts.length,3);assert.ok(l.answer>=0&&l.answer<3)});
const items=buildStandardMock(),count=t=>items.filter(q=>q.type===t).length;
for(const [t,n] of Object.entries({'Read and Select':16,'Fill in the Blanks':7,'Read and Complete':4,'Listen and Type':7,'Write About the Photo':3,'Speak About the Photo':1,'Read, Then Speak':1,'Interactive Speaking':6,'Writing Sample':1,'Speaking Sample':1}))assert.equal(count(t),n,t);
for(const prefix of ['reading-','listening-'])for(let n=0;n<2;n++){const group=items.filter(q=>q.group===prefix+n);assert.equal(group.length,prefix==='reading-'?6:7);assert.ok(group.every(q=>q.groupSeconds===(prefix==='reading-'?420:390)));if(prefix==='listening-')assert.equal(group.reduce((n,q)=>n+(q.fields?.length||1),0),9);}
assert.equal(items.filter(q=>q.type.includes('Summarize')).length,2);
assert.ok(items.filter(q=>q.type==='Read and Complete').every(q=>q.fields.length>1));
assert.equal(count('Interactive Reading · Highlight the Answer'),4);
for(const q of items){assert.ok(q.seconds>0);if(q.image)assert.ok(fs.existsSync(q.image));if(q.options)assert.ok(q.answer>=0&&q.answer<q.options.length);if(q.fields)q.fields.forEach(f=>assert.ok(f.answer));}
assert.equal(items.find(q=>q.type==='Interactive Writing · Step 1').prep,30);assert.equal(items.find(q=>q.type==='Speak About the Photo').prep,20);assert.equal(items.find(q=>q.type==='Speaking Sample').prep,30);
assert.equal(EXAM_SPEC.plans[7].length,7);assert.equal(EXAM_SPEC.plans[14].length,14);assert.ok(PRACTICE.dictation.length>=10);SOURCES.forEach(([n,u])=>{assert.ok(n);assert.match(u,/^https:\/\//)});
for(const f of ['app.js','exam-engine.js'])new vm.Script(fs.readFileSync(f,'utf8'),{filename:f});
console.log(`Validated 28 lessons and ${items.length} tasks; frequencies, prep periods, shared timers, assets and JavaScript syntax passed.`);
