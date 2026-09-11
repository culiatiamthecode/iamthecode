(function(){
  const journey = document.getElementById('journey');
  if (!journey) return;
  const io = new IntersectionObserver((entries)=> {
    entries.forEach(e => {
      if (e.isIntersecting) journey.classList.add('visible');
    });
  }, {threshold: 0.18});
  io.observe(journey);
})();

document.getElementById('scrollHint')?.addEventListener('click', () => {
  document.getElementById('journey')?.scrollIntoView({behavior:'smooth'});
});
