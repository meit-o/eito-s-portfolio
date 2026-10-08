import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">

  <div>
    <h1>My portfolio site</h1>
    <p>Welcome to my portfolio site! Here you can find information about my projects, skills, and experience. Feel free to explore and get in touch!</p>
</section>



<section id="next-steps">
  <div id="docs">
    
  
    
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with us</h2>
    


    
    <ul>
      <li><a href="https://github.com/meit-o" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
    </ul>
  </div>
</section>


<section id="spacer"></section>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
