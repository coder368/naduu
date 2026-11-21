(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&p(d)}).observe(document,{childList:!0,subtree:!0});function v(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(s){if(s.ep)return;s.ep=!0;const a=v(s);fetch(s.href,a)}})();const i="https://github.com/coder368/naduu/releases/download/v1.0.7/naduu.apk",h=document.querySelector("#app");h.innerHTML=`
  <main class="shell">
    <div class="grain"></div>
    <nav class="nav">
      <a class="wordmark" href="#top" aria-label="NADUU home"><span class="mark">✦</span><span>NADUU</span></a>
      <div class="nav-links"><a href="#experience">Experience</a><a href="#about">About NADUU</a><a class="nav-download" href="${i}">Download APK <span>↗</span></a></div>
      <button class="menu-btn" aria-label="Open navigation"><span></span><span></span></button>
    </nav>

    <section class="hero" id="top">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span> A quieter way to listen</p>
        <h1>Let the song<br /><em>find you.</em></h1>
        <p class="hero-lede">NADUU is an atmospheric music player for the moments between noise. Hear the space around a song, move through its words, and stay with the feeling.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="${i}"><span class="download-icon">↓</span> Download NADUU <small>v1.0.7 · Universal APK</small></a>
          <button class="ghost-btn" data-open-lyrics>Open the lyrics <span>↘</span></button>
        </div>
      </div>
      <div class="hero-art" aria-label="Animated abstract Earth listening scene">
        <div class="orbital orbital-one"></div><div class="orbital orbital-two"></div>
        <div class="earth"><div class="earth-glow"></div><div class="earth-land land-one"></div><div class="earth-land land-two"></div><div class="earth-land land-three"></div><div class="earth-cloud cloud-one"></div><div class="earth-cloud cloud-two"></div></div>
        <div class="listen-card"><span class="mini-bars"><i></i><i></i><i></i><i></i></span><span>Now listening</span><strong>Between Earth &amp; sky</strong></div>
      </div>
      <div class="hero-scroll"><span>Scroll to feel it</span><span class="scroll-line"></span></div>
    </section>

    <section class="experience" id="experience">
      <div class="section-heading"><p class="eyebrow">The NADUU experience</p><h2>A player that<br /><span>breathes.</span></h2><p>Press play. Open the lyrics. Drag them down when you’re ready to return to the song.</p></div>
      <div class="player-stage">
        <div class="stage-aura"></div>
        <div class="phone-frame">
          <div class="phone-top"><span>9:41</span><span>◌ ◌ ▰</span></div>
          <div class="phone-cover"><div class="cover-orbit"></div><div class="cover-earth"></div><div class="cover-copy"><small>NOW PLAYING</small><strong>Between<br />Earth &amp; sky</strong></div></div>
          <div class="track-meta"><span>naduu session 004</span><span>03:42</span></div>
          <div class="waveform" aria-hidden="true">${Array.from({length:46},(e,n)=>`<i style="height:${16+n*17%34}%"></i>`).join("")}</div>
          <div class="phone-controls"><button data-rewind>↺</button><button class="play-btn" data-play>▶</button><button data-mute>⌁</button></div>
          <button class="lyrics-handle" data-open-lyrics><span></span> Pull up lyrics</button>
        </div>
        <div class="stage-note note-left"><span>01</span><p>Motion follows<br />the music.</p></div>
        <div class="stage-note note-right"><span>02</span><p>Words you can<br />feel, not chase.</p></div>
      </div>
    </section>

    <section class="download-band" id="about"><div><p class="eyebrow">Your next listening room</p><h2>Keep the quiet<br /><em>close.</em></h2></div><a class="primary-btn" href="${i}">Get the final APK <span>↗</span></a></section>
    <footer><a class="wordmark" href="#top"><span class="mark">✦</span><span>NADUU</span></a><span>Made for deep listening.</span><a href="${i}">Direct download ↗</a></footer>

    <div class="lyrics-overlay" aria-hidden="true" data-lyrics-overlay>
      <div class="lyrics-backdrop"></div>
      <div class="lyrics-sheet" data-lyrics-sheet>
        <button class="lyrics-close" data-close-lyrics aria-label="Close lyrics">×</button>
        <div class="lyrics-sheet-head"><span>Now playing</span><span>01 / 04</span></div>
        <div class="lyrics-artline"><div class="tiny-earth"></div><div><strong>Between Earth &amp; sky</strong><span>naduu session 004</span></div></div>
        <div class="lyrics-body" data-lyrics-body>
          <p class="muted-lyric">There is a place between the sound</p>
          <p class="active-lyric">where the air turns gold</p>
          <p>and every moving thing slows down</p>
          <p>just enough to be held</p>
          <p class="muted-lyric">Stay here a little longer</p>
        </div>
        <div class="lyrics-tip">Drag down to return to the song <span>↓</span></div>
      </div>
    </div>
  </main>
`;const o=document.querySelector("[data-lyrics-overlay]"),t=document.querySelector("[data-lyrics-sheet]");let u=0,r=0,l=!1;const y=()=>{o.classList.add("is-open"),o.setAttribute("aria-hidden","false"),document.body.classList.add("no-scroll")},c=()=>{o.classList.remove("is-open"),t.style.transform="",o.setAttribute("aria-hidden","true"),document.body.classList.remove("no-scroll")};document.querySelectorAll("[data-open-lyrics]").forEach(e=>e.addEventListener("click",y));document.querySelector("[data-close-lyrics]").addEventListener("click",c);document.querySelector(".lyrics-backdrop").addEventListener("click",c);document.addEventListener("keydown",e=>{e.key==="Escape"&&c()});t.addEventListener("pointerdown",e=>{u=e.clientY,l=!0,t.setPointerCapture(e.pointerId),t.classList.add("is-dragging")});t.addEventListener("pointermove",e=>{l&&(r=Math.max(0,e.clientY-u),t.style.transform=`translateY(${r}px) scale(${1-Math.min(r/900,.08)})`)});t.addEventListener("pointerup",()=>{l&&(l=!1,t.classList.remove("is-dragging"),r>130?c():t.style.transform="",r=0)});document.querySelector("[data-play]").addEventListener("click",e=>{e.currentTarget.classList.toggle("is-playing"),e.currentTarget.textContent=e.currentTarget.classList.contains("is-playing")?"Ⅱ":"▶",document.querySelector(".phone-frame").classList.toggle("playing")});document.querySelector("[data-mute]").addEventListener("click",e=>{e.currentTarget.classList.toggle("muted"),e.currentTarget.textContent=e.currentTarget.classList.contains("muted")?"×":"⌁"});document.querySelector("[data-rewind]").addEventListener("click",()=>{document.querySelector(".waveform").classList.add("rewind"),setTimeout(()=>document.querySelector(".waveform").classList.remove("rewind"),500)});const m=new IntersectionObserver(e=>e.forEach(n=>{n.isIntersecting&&n.target.classList.add("is-visible")}),{threshold:.18});document.querySelectorAll(".section-heading, .player-stage, .download-band").forEach(e=>m.observe(e));
