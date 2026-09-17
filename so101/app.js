const data=window.REPORT_DATA;
const mainPolicies=['real_left08','real_left32','real_left72','mixed_left08','mixed_left32','mixed_left72','mixed_left00','sim200','sim400'];
const policyLabel=n=>{
 if(n==='sim400')return 'Simulation only · 400 per side';
 const m=n.match(/^(real|mixed|sim)_left(\d+)$/);
 if(!m)return n;
 const group={real:'Real only',mixed:'Real + sim',sim:'Simulation only'}[m[1]];
 const pct={0:0,8:10,32:40,72:90}[Number(m[2])];
 return group+' · '+pct+'% '+(m[1]==='sim'?'sim-left':'real-left');
};
const table=(headers,rows)=>`<div class="table-scroll"><table><thead><tr>${headers.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr class="${String(r[0]).startsWith('mixed')?'mixed':''}">${r.map((v,i)=>i?`<td>${v}</td>`:`<th scope="row">${v}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const score=(n,d)=>`${Math.round(100*n/d)}%`;
const pending='<span class="pending">Pending · not scored</span>';
const mainPolicyLabel=n=>n==='mixed_left00'?'Real-right + sim-left + sim-right':n==='sim200'?'Sim-left + sim-right (200 episodes)':n==='sim400'?'Sim-left + sim-right (800 episodes)':policyLabel(n);
function realScores(family,name){
 const r=window.REAL_RESULTS?.[family]?.[name]??{};
 const valid=side=>Number.isInteger(r[side])&&Number.isInteger(r[side+'_trials'])&&r[side+'_trials']>0&&r[side]>=0&&r[side]<=r[side+'_trials'];
 const left=valid('left'),right=valid('right');
 return [left?score(r.left,r.left_trials):pending,right?score(r.right,r.right_trials):pending,left&&right?score(r.left+r.right,r.left_trials+r.right_trials):pending];
}
function simScores(r={}){
 const n=r.n??16;
 const valid=side=>Number.isInteger(n)&&n>0&&Number.isInteger(r[side])&&r[side]>=0&&r[side]<=n;
 const left=valid('left'),right=valid('right');
 return [left?score(r.left,n):pending,right?score(r.right,n):pending,left&&right?score(r.left+r.right,2*n):pending];
}
function renderResults(){
 const family=document.querySelector('#family').value,domain=document.querySelector('#domain').value;
 const plot=document.querySelector('#main-plot');
 const plotImage=document.querySelector('#main-plot img');
 const plotFile=domain==='real'?`${family}-real-success.svg`:family==='act'?'paired-success.svg':'pi05-simulation-success.svg';
 plot.hidden=false;
 plotImage.src=`assets/${plotFile}`;
 plotImage.alt=`${family==='act'?'ACT':'π0.5'} · ${domain==='real'?'Real arm':'Simulation'}: left and right placement success with 95% Wilson confidence intervals`;
 const rows=mainPolicies.map(name=>{
  if(domain==='real')return [mainPolicyLabel(name),...realScores(family,name)];
  const r=(family==='act'?data.paired:(data.pi05Paired??[])).find(r=>r.name===name);
  return [mainPolicyLabel(name),...simScores(r)];
 });
 document.querySelector('#results-panel').innerHTML=table(['Policy','Left placement','Right placement','Overall'],rows);
 const extraResults=document.querySelector('#sim-only-results');
 if(extraResults)extraResults.innerHTML=family==='act'?(domain==='simulation'?table(['ACT policy','Evaluation set','Left','Right'],data.simOnly.map(r=>[policyLabel(r.name),r.set,score(r.left,r.n),score(r.right,r.n)])):table(['Sim-trained ACT','Real-left','Real-right'],['sim_left08','sim_left72','sim400'].map(n=>[policyLabel(n),...realScores('act',n).slice(0,2)]))):'<div class="pending-banner">Simulation-only π0.5 counterparts: training/evaluation not established in the available records.</div>';
}
document.querySelectorAll('#family,#domain').forEach(el=>el.addEventListener('change',renderResults));renderResults();
function renderToy(){
 const condition=document.querySelector('#toy-condition').value,sigma=Number(document.querySelector('#toy-noise').value);
 const support=document.querySelector('#toy-support').value;
 const row=window.ROBUST_TOY_DATA.find(r=>r.condition===condition&&r.sigma===sigma&&r.support===support);
 const cells=[['left_familiar','Left target · left-like scene'],['right_familiar','Right target · right-like scene'],['left_cross','Left target · right-like scene'],['right_cross','Right target · left-like scene']];
 document.querySelector('#toy-output').innerHTML=cells.map(([key,label])=>{const c=row.cells[key];return `<div class="toy-cell">${label}<b>${(100*c.correct_target).toFixed(1)}% reached</b><span>${(100*c.settled_hover).toFixed(1)}% hover · ${(100*c.wrong_target).toFixed(1)}% wrong target · ${(100*c.other).toFixed(1)}% other</span></div>`;}).join('');
}
document.querySelectorAll('#toy-condition,#toy-noise,#toy-support').forEach(el=>el.addEventListener('change',renderToy));renderToy();
document.querySelector('#print-report').addEventListener('click',()=>window.print());
document.querySelectorAll('video').forEach(v=>{v.addEventListener('play',()=>document.querySelectorAll('video').forEach(other=>{if(other!==v)other.pause();}));v.addEventListener('error',()=>{if(v.dataset.failed)return;const message=document.createElement('p');message.className='caption-note';message.textContent='Video unavailable. Please reload the page.';v.after(message);v.dataset.failed='true';});});
