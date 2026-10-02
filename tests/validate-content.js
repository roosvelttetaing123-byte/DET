// Run with: node tests/validate-content.js
const fs=require("fs"),vm=require("vm"),assert=require("assert");
const ctx={window:{}};vm.createContext(ctx);
for(const f of ["lessons.js","practice.js","mock.js"])vm.runInContext(fs.readFileSync(f,"utf8"),ctx,{filename:f});
const {LESSONS,PRACTICE,SOURCES,MOCK}=ctx.window;
assert.equal(LESSONS.length,28,"Expected 28 sequenced lessons");
LESSONS.forEach((l,i)=>{assert.equal(l.id,i);assert.ok(l.title&&l.rule&&l.example&&l.q);assert.equal(l.opts.length,3);assert.ok(l.answer>=0&&l.answer<3)});
assert.ok(PRACTICE.dictation.length>=10);assert.ok(PRACTICE.speaking.length>=4);assert.equal(PRACTICE.interactive.length,6);
assert.ok(MOCK.objective.length>=8);assert.ok(MOCK.open.length>=6);assert.equal(MOCK.interactive.length,6);assert.ok(SOURCES.length>=7);SOURCES.forEach(([n,u])=>{assert.ok(n);assert.ok(/^https:\/\//.test(u))});
console.log("DET content validation passed:",LESSONS.length,"lessons,",PRACTICE.dictation.length,"dictations,",SOURCES.length,"official links.");