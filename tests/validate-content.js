// Run with: node tests/validate-content.js
const fs=require("fs"),vm=require("vm"),assert=require("assert");
const ctx={window:{}};vm.createContext(ctx);
for(const f of ["lessons.js","practice.js","mock.js","standard.js"])vm.runInContext(fs.readFileSync(f,"utf8"),ctx,{filename:f});
const {LESSONS,PRACTICE,SOURCES,MOCK,EXAM_SPEC,buildStandardMock}=ctx.window;
assert.equal(LESSONS.length,28,"Expected 28 sequenced lessons");
LESSONS.forEach((l,i)=>{assert.equal(l.id,i);assert.ok(l.title&&l.rule&&l.example&&l.q);assert.equal(l.opts.length,3);assert.ok(l.answer>=0&&l.answer<3)});
assert.ok(PRACTICE.dictation.length>=10);assert.ok(PRACTICE.speaking.length>=4);assert.equal(PRACTICE.interactive.length,6);
assert.ok(MOCK.objective.length>=8);const standard=buildStandardMock();assert.ok(standard.length>=60,"Standard mock should contain at least 60 objective interactions");assert.equal(standard.filter(x=>x.type==="Read and Select").length,16);assert.equal(standard.filter(x=>x.type==="Fill in the Blanks").length,7);assert.equal(standard.filter(x=>x.type==="Read and Complete").length,4);assert.equal(standard.filter(x=>x.type==="Listen and Type").length,7);assert.equal(EXAM_SPEC.plans[7].length,7);assert.equal(EXAM_SPEC.plans[14].length,14);assert.ok(MOCK.open.length>=6);assert.equal(MOCK.interactive.length,6);assert.ok(SOURCES.length>=7);SOURCES.forEach(([n,u])=>{assert.ok(n);assert.ok(/^https:\/\//.test(u))});
console.log("DET content validation passed:",LESSONS.length,"lessons,",PRACTICE.dictation.length,"dictations,",SOURCES.length,"official links.");