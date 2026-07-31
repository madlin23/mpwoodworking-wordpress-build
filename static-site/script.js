
// Mobile Navigation
document.addEventListener('DOMContentLoaded',function(){
  var t=document.querySelector('.nav-toggle');
  if(t){t.addEventListener('click',function(){document.querySelector('nav.main-nav ul').classList.toggle('open');});}

  // Cookie-Banner
  var cb=document.getElementById('cookieBanner');
  if(cb){
    if(localStorage.getItem('cookieAccepted')){cb.style.display='none';}
    cb.querySelector('.accept').addEventListener('click',function(){localStorage.setItem('cookieAccepted','1');cb.style.display='none';});
    var pref=cb.querySelector('.prefs');
    if(pref){pref.addEventListener('click',function(){localStorage.setItem('cookieAccepted','1');cb.style.display='none';});}
  }

  // Lightbox
  var links=[].slice.call(document.querySelectorAll('[data-lightbox]'));
  if(links.length){
    var lb=document.createElement('div');lb.className='lightbox';
    lb.innerHTML='<button class="lb-close">&times;</button><button class="lb-prev">&#10094;</button><img alt=""><div class="lb-cap"></div><button class="lb-next">&#10095;</button>';
    document.body.appendChild(lb);
    var img=lb.querySelector('img'),cap=lb.querySelector('.lb-cap'),cur=0;
    function show(i){cur=(i+links.length)%links.length;img.src=links[cur].getAttribute('href');cap.textContent=links[cur].getAttribute('data-title')||'';lb.classList.add('open');}
    links.forEach(function(a,i){a.addEventListener('click',function(e){e.preventDefault();show(i);});});
    lb.querySelector('.lb-close').addEventListener('click',function(){lb.classList.remove('open');});
    lb.querySelector('.lb-prev').addEventListener('click',function(){show(cur-1);});
    lb.querySelector('.lb-next').addEventListener('click',function(){show(cur+1);});
    lb.addEventListener('click',function(e){if(e.target===lb)lb.classList.remove('open');});
    document.addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')lb.classList.remove('open');if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1);});
  }

  // Slider
  [].forEach.call(document.querySelectorAll('.slider'),function(sl){
    var slides=sl.querySelector('.slides'),n=slides.children.length,i=0;
    var dots=sl.querySelector('.dots');
    function go(k){i=(k+n)%n;slides.style.transform='translateX(-'+(i*100)+'%)';
      if(dots)[].forEach.call(dots.children,function(d,j){d.classList.toggle('on',j===i);});}
    sl.querySelector('.s-prev').addEventListener('click',function(){go(i-1);});
    sl.querySelector('.s-next').addEventListener('click',function(){go(i+1);});
    if(dots)[].forEach.call(dots.children,function(d,j){d.addEventListener('click',function(){go(j);});});
    setInterval(function(){go(i+1);},5000);
    go(0);
  });

  // Kontaktformular -> mailto
  var f=document.getElementById('contactForm');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();
    var n=f.name.value.trim(),m=f['e-mail'].value.trim(),msg=f.nachricht.value.trim();
    if(!n||!m||!msg){document.getElementById('formStatus').textContent='Bitte füllen Sie alle Pflichtfelder aus.';return;}
    var body='Name: '+n+'%0AE-Mail: '+m+'%0A%0A'+encodeURIComponent(msg);
    window.location.href='mailto:woodworking.mp@gmail.com?subject='+encodeURIComponent('Anfrage über die Website')+'&body='+body;
    document.getElementById('formStatus').textContent='Vielen Dank! Ihr E-Mail-Programm wird geöffnet.';
  });}
});
