const last_updated = "june 23, 2026 10:29 PM";

export const header = `
  <header class="column pb-3 full-w">
    <div class="c-row p-3 pb-0 full-w" style="gap: 10px;">
      <div class="logo-left-l">
        <img src="/assets/images/pce.png" alt="pce">
      </div>
      <div class="header-text text-center">
        <h1 class="tth-1 full-w"><b>Sixth International Conference on Sustainable Energy, Environment, and Green Technologies (ICSEEGT 2026)</b></h1>
        <div class="tth-2 full-w column justify-content-center">
          <div class="tth-2">
            Jointly Organized by Department of Mechanical & Civil Engineering<br/>
            <h1 class="tth-1 full-w my-2 fw-bold">Poornima College of Engineering, Jaipur, India</h1>
            <strong>(Hybrid Mode on 11–12 December 2026)</strong>
          </div>
        </div>
        <div class="full-w c-row justify-content-center gap-5 mt-4 mt-lg-0">
          <div class="logo-left-s">
            <img src="/assets/images/pce.png" alt="pce">
          </div>
          <div class="logo-right-s">
            <img src="/assets/images/ICSEEGT 2026 Logo.png" alt="ICSEEGT 2026">
          </div>
        </div>
      </div>
      <div class="logo-right-l">
        <img src="/assets/images/ICSEEGT 2026 Logo.png" alt="ICSEEGT 2026">
      </div>
    </div>
    <div class="marquee-container">
      <div class="marquee-content">
        To download conference brochure <a href="assets/documents/ICSEEGT 2026-Flyer.pdf" download onclick="alert('Download started.')">click here to download</a>.
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        Paper Submission Link: <a target="_blank" href="javascript:void(0)" onclick="alert('link will be updated soon.')">To be updated</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        Registration Link: <a target="_blank" href="javascript:void(0)" onclick="alert('link will be updated soon.')">Click here</a>
      </div>
    </div>
  </header>
  <nav class="main-header full-w">
    <div class="center menu-nav">
      <span>Menu</span>
      <div class="center column menu-nav-ico">
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <span class="menu-line"></span>
      </div>
    </div>
    <div class="main-nav c-row">
      <ul class="full-h center c-row">
        <a href="/" class="nrm-btn center">
          <li>About ICSEEGT 2026</li>
        </a>
        <a href="/call-for-papers.html" class="nrm-btn center">
          <li>Call for Papers</li>
        </a>
        <a href="/speakers.html" class="nrm-btn center">
          <li>Guests and Speakers</li>
        </a>
        <a href="/schedule.html" class="nrm-btn center">
          <li>Schedule</li>
        </a>
        <a href="/committee.html" class="nrm-btn center">
          <li>Conference Committees</li>
        </a>
        <a href="/register.html" class="nrm-btn center">
          <li>Registration</li>
        </a>
        <a href="/downloads.html" class="nrm-btn center">
          <li>Downloads</li>
        </a>
        <a href="/publications.html" class="nrm-btn center">
          <li>Publication</li>
        </a>
        <a href="/sponsorship.html" class="nrm-btn center">
          <li>Sponsorship</li>
        </a>
        <a href="/past-conf.html" class="nrm-btn center">
          <li>Past Conferences</li>
        </a>
        <a href="/contacts.html" class="nrm-btn center">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  </nav>
`

export const footer = `
        <div class="container text-center">
            <p class="mb-0 p-0">&copy; 2026 ICSEEGT. All Rights Reserved.</p>
            <p class="mb-0 p-0">Designed and Developed by <a href="https://neerajvermagps.infinityfreeapp.com/">Neeraj
                    Verma</a> (+91 9352298110)</p> 
                    <p class="mb-0 p-0">Managed by <a
                    href="assets/documents/NIKHIL_CHATURVEDI_RESUME.pdf" download target="_blank">Nikhil Chaturvedi</a>(+91 6378141101)</p>

            <p>Last updated on: ${last_updated}</p>
        </div>
`

export const aside = `
        <div class="column shadow rounded-2 p-4 date-ctnr mb-5">
          <img src="assets/images/PCE_Logo.png" class="full-w" />
        </div>
        <h2 class="section-title">Important Dates</h2>
        <div class="column shadow rounded-2 p-4 date-ctnr" id="imp-dates">
          <ul class="list-unstyled dates">
            <li><span class="date-title">Paper Submission Opens:</span><span class="date-desc">Wednesday, 1 July 2026</span></li>
            <li><span class="date-title">Paper Submission Deadline:</span><span class="date-desc">Thursday, 15 October 2026</span></li>
            <li><span class="date-title">Acceptance Notification:</span><span class="date-desc">Monday, 19 October 2026</span></li>
            <li><span class="date-title">Registration Process Starts:</span><span class="date-desc">Monday, 20 October 2026</span></li>
            <li><span class="date-title">Last Date of Registration:</span><span class="date-desc">Saturday, 5 December 2026</span></li>
            <li><span class="date-title">Registration with Late Fee:</span><span class="date-desc">Tuesday, 8 December 2026</span></li>
            <li><span class="date-title">Conference Dates:</span><span class="date-desc">Friday–Saturday, 11–12 December 2026</span></li>
          </ul>
        </div>
       <!-- <h2 class="section-title mt-5">Publishers</h2>
      <div class="full-w mt-5 column shadow rounded-2 p-3 date-ctnr">
         <img src="void" alt="publishers" class="full-w"> 
         <p>TO BE UPDATED</p>-->
       </div>`