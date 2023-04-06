<template>
    <div class="container container--templates">
        <div class="templates-root" data-current-tag="all" data-info-url="/templates/info/resume">
          <div class="templates-root__container">
            <div class="templates-root__header templates-root__header--without-create-resume-button">
               <h5 class="templates-root__header-title">Job-winning resume templates</h5> <h3>Choose Your Template</h3>
               <h5 style="color: #1c68c4;">
                <nav class="nav__bar-menu">
                <router-link class="nav__bar-link active" data-trigger="resume" to="/resume/all-templates">Resume<svg
                    xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2 10.4l2.9-2.8L14.5 9l-4.3 4.2L6 9l1.4-1.4 2.8 2.8z">
                    </path>
                  </svg>
                </router-link>
                <router-link class="nav__bar-link" data-trigger="cover_letter" to="/cover-letter/professional">Cover
                  Letter<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2 10.4l2.9-2.8L14.5 9l-4.3 4.2L6 9l1.4-1.4 2.8 2.8z">
                    </path>
                  </svg>
      
                </router-link>
              </nav>
               </h5> 
            </div>
            <div class="templates-filter">
                <div class="templates-filter__container">
                  <div class="templates-filter__content">
                    <div class="templates-filter__tabs">
                      <div class="templates-filter__tabs-selector templates-filter__tabs-selector--hidden"></div>
                        <router-link to="/" class="templates-filter__tab">
                            <i class="fa-solid fa-house"></i>
                        <span>Home</span>
                        </router-link> 
                        <router-link  class="templates-filter__tab" to="/resume/all-templates">All templates</router-link>
                 <router-link class="templates-filter__tab " to="/resume/creative">Creative</router-link>
                 <router-link class="templates-filter__tab "  to="/resume/simple">Simple</router-link>
                 <router-link class="templates-filter__tab " to="/resume/professional">Professional</router-link>
                 <router-link class="templates-filter__tab "  to="/resume/modern">Modern</router-link>
                      </div>
                </div>
              </div>
            </div>
            <div class="templates-root__grids">
              <div class="templates-grid">
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="berlin"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;berlin&quot;}"
                    href="../app/create-resume6f38.html?template=berlin">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Berlin"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/160/persistent-resource/berlin-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/160/persistent-resource/berlin-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Berlin"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            src="@/assets/local_template_image/image/160/persistent-resource/berlin-resume-templates.jpg" />
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__mono">
                            <div class="templates-card__mono-icon"></div>
                            <div class="templates-card__mono-text">Monochrome</div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Berlin</div>
                      <div class="templates-card__caption">Modern resume template with bold, clean formatting.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="london"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;london&quot;}"
                    href="../app/create-resumeebfd.html?template=london">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template London"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template London"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            src="@/assets/local_template_image/image/481/persistent-resource/london-resume-templates.jpg" />
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__mono">
                            <div class="templates-card__mono-icon"></div>
                            <div class="templates-card__mono-text">Monochrome</div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">London</div>
                      <div class="templates-card__caption">Classically structured resume template, for a robust career
                        history.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell" data-name="dublin"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;dublin&quot;}"
                    href="../app/create-resume07f9.html?template=dublin">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Dublin"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Dublin"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#084C41"
                            src="@/assets/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg" />
                          <div data-color="#87300D"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/489/persistent-resource/dublin-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/489/persistent-resource/dublin-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/489/persistent-resource/dublin-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#10365C"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/490/persistent-resource/dublin-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/490/persistent-resource/dublin-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/490/persistent-resource/dublin-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#3E1D53"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/491/persistent-resource/dublin-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/491/persistent-resource/dublin-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/491/persistent-resource/dublin-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#242935"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/492/persistent-resource/dublin-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/492/persistent-resource/dublin-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/492/persistent-resource/dublin-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#084C41" style="background-color: #084C41"></div>
                            <div class="templates-card__colors-item" data-color="#87300D" style="background-color: #87300D">
                            </div>
                            <div class="templates-card__colors-item" data-color="#10365C" style="background-color: #10365C">
                            </div>
                            <div class="templates-card__colors-item" data-color="#3E1D53" style="background-color: #3E1D53">
                            </div>
                            <div class="templates-card__colors-item" data-color="#242935" style="background-color: #242935">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                            <div class="templates-card__badge">docx</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Dublin</div>
                      <div class="templates-card__caption">A touch of personality with a well-organized resume structure.
                      </div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="amsterdam"><a
                    class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;amsterdam&quot;}"
                    href="../app/create-resume3654.html?template=amsterdam">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Amsterdam"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/503/persistent-resource/amsterdam-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/503/persistent-resource/amsterdam-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Amsterdam"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            src="@/assets/local_template_image/image/503/persistent-resource/amsterdam-resume-templates.jpg" />
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__mono">
                            <div class="templates-card__mono-icon"></div>
                            <div class="templates-card__mono-text">Monochrome</div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Amsterdam</div>
                      <div class="templates-card__caption">Modern minimalist resume template structure with graceful
                        clarity.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="santiago"><a
                    class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;santiago&quot;}"
                    href="../app/create-resume1122.html?template=santiago">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Santiago"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/383/persistent-resource/santiago-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/383/persistent-resource/santiago-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Santiago"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            src="@/assets/local_template_image/image/383/persistent-resource/santiago-resume-templates.jpg" />
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__mono">
                            <div class="templates-card__mono-icon"></div>
                            <div class="templates-card__mono-text">Monochrome</div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Santiago</div>
                      <div class="templates-card__caption">Classic full-page resume template with sizable resume sections.
                      </div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell" data-name="new_york"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;new_york&quot;}"
                    href="../app/create-resume8a8e.html?template=new_york">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template New York"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/389/persistent-resource/new-york-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/389/persistent-resource/new-york-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template New York"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            src="@/assets/local_template_image/image/389/persistent-resource/new-york-resume-templates.jpg" />
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__mono">
                            <div class="templates-card__mono-icon"></div>
                            <div class="templates-card__mono-text">Monochrome</div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                            <div class="templates-card__badge">docx</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">New York</div>
                      <div class="templates-card__caption">Professional and elegant resume template with a timeline
                        structure.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell" data-name="stockholm"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;stockholm&quot;}"
                    href="../app/create-resume5dad.html?template=stockholm">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Stockholm">
                          <div data-color="#0F141F"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/368/persistent-resource/stockholm-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/368/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/368/persistent-resource/stockholm-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#673AB7"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/369/persistent-resource/stockholm-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/369/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/369/persistent-resource/stockholm-resume-templates.jpg 2x"
                            data-img-width="380"></div><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Stockholm"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#2196F3"
                            src="@/assets/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg" />
                          <div data-color="#22A860"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/371/persistent-resource/stockholm-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/371/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/371/persistent-resource/stockholm-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#FF4D4D"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/372/persistent-resource/stockholm-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/372/persistent-resource/stockholm-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/372/persistent-resource/stockholm-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item" data-color="#0F141F" style="background-color: #0F141F">
                            </div>
                            <div class="templates-card__colors-item" data-color="#673AB7" style="background-color: #673AB7">
                            </div>
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#2196F3" style="background-color: #2196F3"></div>
                            <div class="templates-card__colors-item" data-color="#22A860" style="background-color: #22A860">
                            </div>
                            <div class="templates-card__colors-item" data-color="#FF4D4D" style="background-color: #FF4D4D">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                            <div class="templates-card__badge">docx</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Stockholm</div>
                      <div class="templates-card__caption">Perfect balance of fresh and functional resume template design.
                      </div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="sydney"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;sydney&quot;}"
                    href="../app/create-resume1c19.html?template=sydney">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Sydney"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Sydney"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#082A4D"
                            src="@/assets/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg" />
                          <div data-color="#581010"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/442/persistent-resource/sydney-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/442/persistent-resource/sydney-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/442/persistent-resource/sydney-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#1D473A"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/443/persistent-resource/sydney-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/443/persistent-resource/sydney-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/443/persistent-resource/sydney-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#32084D"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/444/persistent-resource/sydney-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/444/persistent-resource/sydney-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/444/persistent-resource/sydney-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#1B212F"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/445/persistent-resource/sydney-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/445/persistent-resource/sydney-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/445/persistent-resource/sydney-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#082A4D" style="background-color: #082A4D"></div>
                            <div class="templates-card__colors-item" data-color="#581010" style="background-color: #581010">
                            </div>
                            <div class="templates-card__colors-item" data-color="#1D473A" style="background-color: #1D473A">
                            </div>
                            <div class="templates-card__colors-item" data-color="#32084D" style="background-color: #32084D">
                            </div>
                            <div class="templates-card__colors-item" data-color="#1B212F" style="background-color: #1B212F">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                            <div class="templates-card__badge">docx</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Sydney</div>
                      <div class="templates-card__caption">Modern and eye-catching resume template. Beautiful contrasting
                        structure.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell" data-name="milan"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;milan&quot;}"
                    href="../app/create-resume1c53.html?template=milan">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Milan"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/504/persistent-resource/milan-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/504/persistent-resource/milan-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Milan"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#B58E58"
                            src="@/assets/local_template_image/image/504/persistent-resource/milan-resume-templates.jpg" />
                          <div data-color="#00C571"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/505/persistent-resource/milan-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/505/persistent-resource/milan-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/505/persistent-resource/milan-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#2196F3"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/506/persistent-resource/milan-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/506/persistent-resource/milan-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/506/persistent-resource/milan-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#FC0F0F"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/507/persistent-resource/milan-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/507/persistent-resource/milan-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/507/persistent-resource/milan-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#000000"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/508/persistent-resource/milan-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/508/persistent-resource/milan-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/508/persistent-resource/milan-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#B58E58" style="background-color: #B58E58"></div>
                            <div class="templates-card__colors-item" data-color="#00C571" style="background-color: #00C571">
                            </div>
                            <div class="templates-card__colors-item" data-color="#2196F3" style="background-color: #2196F3">
                            </div>
                            <div class="templates-card__colors-item" data-color="#FC0F0F" style="background-color: #FC0F0F">
                            </div>
                            <div class="templates-card__colors-item" data-color="#000000" style="background-color: #000000">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Milan</div>
                      <div class="templates-card__caption">Streamlined professional resume template with a human touch.
                      </div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell" data-name="toronto"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;toronto&quot;}"
                    href="../app/create-resume9255.html?template=toronto">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Toronto"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3367/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3367/persistent-resource/toronto-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Toronto"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#232323"
                            src="@/assets/local_template_image/image/3367/persistent-resource/toronto-resume-templates.jpg" />
                          <div data-color="#172F53"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3370/persistent-resource/toronto-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3370/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3370/persistent-resource/toronto-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#361146"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3499/persistent-resource/toronto-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3499/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3499/persistent-resource/toronto-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#160A45"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3500/persistent-resource/toronto-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3500/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3500/persistent-resource/toronto-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#324739"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#232323" style="background-color: #232323"></div>
                            <div class="templates-card__colors-item" data-color="#172F53" style="background-color: #172F53">
                            </div>
                            <div class="templates-card__colors-item" data-color="#361146" style="background-color: #361146">
                            </div>
                            <div class="templates-card__colors-item" data-color="#160A45" style="background-color: #160A45">
                            </div>
                            <div class="templates-card__colors-item" data-color="#324739" style="background-color: #324739">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Toronto</div>
                      <div class="templates-card__caption">A web-inspired resume template perfect for chatting up your
                        achievements.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="singapore"><a
                    class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;singapore&quot;}"
                    href="../app/create-resume5f65.html?template=singapore">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Singapore"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/400/persistent-resource/singapore-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/400/persistent-resource/singapore-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Singapore"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            src="@/assets/local_template_image/image/400/persistent-resource/singapore-resume-templates.jpg" />
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__mono">
                            <div class="templates-card__mono-icon"></div>
                            <div class="templates-card__mono-text">Monochrome</div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Singapore</div>
                      <div class="templates-card__caption">Clean, orderly template structure with stylish minimalism.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell" data-name="paris"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;paris&quot;}"
                    href="../app/create-resume478c.html?template=paris">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Paris">
                          <div data-color="#00C571"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/426/persistent-resource/paris-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/426/persistent-resource/paris-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/426/persistent-resource/paris-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#2196F3"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/427/persistent-resource/paris-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/427/persistent-resource/paris-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/427/persistent-resource/paris-resume-templates.jpg 2x"
                            data-img-width="380"></div><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/428/persistent-resource/paris-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/428/persistent-resource/paris-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Paris"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#FC0F0F"
                            src="@/assets/local_template_image/image/428/persistent-resource/paris-resume-templates.jpg" />
                          <div data-color="#673AB7"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/429/persistent-resource/paris-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/429/persistent-resource/paris-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/429/persistent-resource/paris-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#000000"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/430/persistent-resource/paris-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/430/persistent-resource/paris-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/430/persistent-resource/paris-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item" data-color="#00C571" style="background-color: #00C571">
                            </div>
                            <div class="templates-card__colors-item" data-color="#2196F3" style="background-color: #2196F3">
                            </div>
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#FC0F0F" style="background-color: #FC0F0F"></div>
                            <div class="templates-card__colors-item" data-color="#673AB7" style="background-color: #673AB7">
                            </div>
                            <div class="templates-card__colors-item" data-color="#000000" style="background-color: #000000">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Paris</div>
                      <div class="templates-card__caption">A great blend of personal charm, readability and elegance.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="madrid"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;madrid&quot;}"
                    href="../app/create-resume3a66.html?template=madrid">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Madrid"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/147/persistent-resource/madrid-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/147/persistent-resource/madrid-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Madrid"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#FFE14C"
                            src="@/assets/local_template_image/image/147/persistent-resource/madrid-resume-templates.jpg" />
                          <div data-color="#FF9737"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/148/persistent-resource/madrid-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/148/persistent-resource/madrid-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/148/persistent-resource/madrid-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#91D8E2"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/149/persistent-resource/madrid-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/149/persistent-resource/madrid-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/149/persistent-resource/madrid-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#F6AFAD"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/150/persistent-resource/madrid-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/150/persistent-resource/madrid-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/150/persistent-resource/madrid-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#6295EC"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/151/persistent-resource/madrid-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/151/persistent-resource/madrid-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/151/persistent-resource/madrid-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#FFE14C" style="background-color: #FFE14C"></div>
                            <div class="templates-card__colors-item" data-color="#FF9737" style="background-color: #FF9737">
                            </div>
                            <div class="templates-card__colors-item" data-color="#91D8E2" style="background-color: #91D8E2">
                            </div>
                            <div class="templates-card__colors-item" data-color="#F6AFAD" style="background-color: #F6AFAD">
                            </div>
                            <div class="templates-card__colors-item" data-color="#6295EC" style="background-color: #6295EC">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Madrid</div>
                      <div class="templates-card__caption">Powerful modern resume template with bold section highlights.
                      </div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell" data-name="vienna"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;vienna&quot;}"
                    href="../app/create-resumed02d.html?template=vienna">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Vienna"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/406/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/406/persistent-resource/vienna-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Vienna"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#4BFBBA"
                            src="@/assets/local_template_image/image/406/persistent-resource/vienna-resume-templates.jpg" />
                          <div data-color="#FFF66D"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#9AEBFE"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/408/persistent-resource/vienna-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/408/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/408/persistent-resource/vienna-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#FED78C"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/409/persistent-resource/vienna-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/409/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/409/persistent-resource/vienna-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#E4E4E4"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/410/persistent-resource/vienna-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/410/persistent-resource/vienna-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/410/persistent-resource/vienna-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#4BFBBA" style="background-color: #4BFBBA"></div>
                            <div class="templates-card__colors-item" data-color="#FFF66D" style="background-color: #FFF66D">
                            </div>
                            <div class="templates-card__colors-item" data-color="#9AEBFE" style="background-color: #9AEBFE">
                            </div>
                            <div class="templates-card__colors-item" data-color="#FED78C" style="background-color: #FED78C">
                            </div>
                            <div class="templates-card__colors-item" data-color="#E4E4E4" style="background-color: #E4E4E4">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Vienna</div>
                      <div class="templates-card__caption">Striking modern header, professional two column template
                        structure.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="oslo"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;oslo&quot;}"
                    href="../app/create-resumeec74.html?template=oslo">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Oslo"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/142/persistent-resource/oslo-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/142/persistent-resource/oslo-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Oslo"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#303030"
                            src="@/assets/local_template_image/image/142/persistent-resource/oslo-resume-templates.jpg" />
                          <div data-color="#7E918F"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/143/persistent-resource/oslo-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/143/persistent-resource/oslo-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/143/persistent-resource/oslo-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#837A74"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/144/persistent-resource/oslo-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/144/persistent-resource/oslo-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/144/persistent-resource/oslo-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#7B7F82"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/145/persistent-resource/oslo-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/145/persistent-resource/oslo-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/145/persistent-resource/oslo-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#B7A39D"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/146/persistent-resource/oslo-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/146/persistent-resource/oslo-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/146/persistent-resource/oslo-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#303030" style="background-color: #303030"></div>
                            <div class="templates-card__colors-item" data-color="#7E918F" style="background-color: #7E918F">
                            </div>
                            <div class="templates-card__colors-item" data-color="#837A74" style="background-color: #837A74">
                            </div>
                            <div class="templates-card__colors-item" data-color="#7B7F82" style="background-color: #7B7F82">
                            </div>
                            <div class="templates-card__colors-item" data-color="#B7A39D" style="background-color: #B7A39D">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Oslo</div>
                      <div class="templates-card__caption">Reliable and elegant image. Minimalist single column outline.
                      </div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="moscow"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;moscow&quot;}"
                    href="../app/create-resume43a3.html?template=moscow">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Moscow"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1519/persistent-resource/moscow-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1519/persistent-resource/moscow-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Moscow"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#FFB3B3"
                            src="@/assets/local_template_image/image/1519/persistent-resource/moscow-resume-templates.jpg" />
                          <div data-color="#FFDDCA"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1520/persistent-resource/moscow-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1520/persistent-resource/moscow-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1520/persistent-resource/moscow-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#D0FFE1"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1521/persistent-resource/moscow-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1521/persistent-resource/moscow-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1521/persistent-resource/moscow-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#BBEFFF"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1522/persistent-resource/moscow-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1522/persistent-resource/moscow-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1522/persistent-resource/moscow-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#BFB9FF"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1523/persistent-resource/moscow-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1523/persistent-resource/moscow-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1523/persistent-resource/moscow-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#FFB3B3" style="background-color: #FFB3B3"></div>
                            <div class="templates-card__colors-item" data-color="#FFDDCA" style="background-color: #FFDDCA">
                            </div>
                            <div class="templates-card__colors-item" data-color="#D0FFE1" style="background-color: #D0FFE1">
                            </div>
                            <div class="templates-card__colors-item" data-color="#BBEFFF" style="background-color: #BBEFFF">
                            </div>
                            <div class="templates-card__colors-item" data-color="#BFB9FF" style="background-color: #BFB9FF">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Moscow</div>
                      <div class="templates-card__caption">Open white-space template, excellent readability.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="rome"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;rome&quot;}"
                    href="../app/create-resume7d43.html?template=rome">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Rome"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3075/persistent-resource/rome-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3075/persistent-resource/rome-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Rome"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#FAFAFA"
                            src="@/assets/local_template_image/image/3075/persistent-resource/rome-resume-templates.jpg" />
                          <div data-color="#DFFF85"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3076/persistent-resource/rome-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3076/persistent-resource/rome-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3076/persistent-resource/rome-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#DBD7D0"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3077/persistent-resource/rome-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3077/persistent-resource/rome-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3077/persistent-resource/rome-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#141414"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3078/persistent-resource/rome-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3078/persistent-resource/rome-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3078/persistent-resource/rome-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#7A8BB8"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3079/persistent-resource/rome-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3079/persistent-resource/rome-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3079/persistent-resource/rome-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#FAFAFA" style="background-color: #FAFAFA"></div>
                            <div class="templates-card__colors-item" data-color="#DFFF85" style="background-color: #DFFF85">
                            </div>
                            <div class="templates-card__colors-item" data-color="#DBD7D0" style="background-color: #DBD7D0">
                            </div>
                            <div class="templates-card__colors-item" data-color="#141414" style="background-color: #141414">
                            </div>
                            <div class="templates-card__colors-item" data-color="#7A8BB8" style="background-color: #7A8BB8">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Rome</div>
                      <div class="templates-card__caption">A charming resume template with eye-catching section titles and a
                        balanced column structure.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell" data-name="barcelona"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;barcelona&quot;}"
                    href="../app/create-resume951f.html?template=barcelona">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Barcelona">
                          <div data-color="#00C571"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/509/persistent-resource/barcelona-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/509/persistent-resource/barcelona-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/509/persistent-resource/barcelona-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#2196F3"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/510/persistent-resource/barcelona-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/510/persistent-resource/barcelona-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/510/persistent-resource/barcelona-resume-templates.jpg 2x"
                            data-img-width="380"></div><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/511/persistent-resource/barcelona-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/511/persistent-resource/barcelona-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Barcelona"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#FF7373"
                            src="@/assets/local_template_image/image/511/persistent-resource/barcelona-resume-templates.jpg" />
                          <div data-color="#673AB7"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/512/persistent-resource/barcelona-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/512/persistent-resource/barcelona-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/512/persistent-resource/barcelona-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#000000"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/513/persistent-resource/barcelona-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/513/persistent-resource/barcelona-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/513/persistent-resource/barcelona-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item" data-color="#00C571" style="background-color: #00C571">
                            </div>
                            <div class="templates-card__colors-item" data-color="#2196F3" style="background-color: #2196F3">
                            </div>
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#FF7373" style="background-color: #FF7373"></div>
                            <div class="templates-card__colors-item" data-color="#673AB7" style="background-color: #673AB7">
                            </div>
                            <div class="templates-card__colors-item" data-color="#000000" style="background-color: #000000">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Barcelona</div>
                      <div class="templates-card__caption">Attractive, friendly template design. Creative two column
                        structure.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="lisbon"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;lisbon&quot;}"
                    href="../app/create-resumed24e.html?template=lisbon">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Lisbon"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2740/persistent-resource/lisbon-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2740/persistent-resource/lisbon-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Lisbon"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#A5AFEB"
                            src="@/assets/local_template_image/image/2740/persistent-resource/lisbon-resume-templates.jpg" />
                          <div data-color="#E65A82"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2741/persistent-resource/lisbon-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2741/persistent-resource/lisbon-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2741/persistent-resource/lisbon-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#9BD2BE"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2742/persistent-resource/lisbon-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2742/persistent-resource/lisbon-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2742/persistent-resource/lisbon-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#919191"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2743/persistent-resource/lisbon-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2743/persistent-resource/lisbon-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2743/persistent-resource/lisbon-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#DCB95A"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2744/persistent-resource/lisbon-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2744/persistent-resource/lisbon-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2744/persistent-resource/lisbon-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#A5AFEB" style="background-color: #A5AFEB"></div>
                            <div class="templates-card__colors-item" data-color="#E65A82" style="background-color: #E65A82">
                            </div>
                            <div class="templates-card__colors-item" data-color="#9BD2BE" style="background-color: #9BD2BE">
                            </div>
                            <div class="templates-card__colors-item" data-color="#919191" style="background-color: #919191">
                            </div>
                            <div class="templates-card__colors-item" data-color="#DCB95A" style="background-color: #DCB95A">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Lisbon</div>
                      <div class="templates-card__caption">A beautiful way to showcase your expertise, this creative resume
                        template stands out with artistic touches.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="tokyo"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;tokyo&quot;}"
                    href="../app/create-resumed6e0.html?template=tokyo">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Tokyo"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/498/persistent-resource/tokyo-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/498/persistent-resource/tokyo-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Tokyo"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#B12025"
                            src="@/assets/local_template_image/image/498/persistent-resource/tokyo-resume-templates.jpg" />
                          <div data-color="#353CAC"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/499/persistent-resource/tokyo-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/499/persistent-resource/tokyo-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/499/persistent-resource/tokyo-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#0C6453"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/500/persistent-resource/tokyo-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/500/persistent-resource/tokyo-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/500/persistent-resource/tokyo-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#F29100"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/501/persistent-resource/tokyo-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/501/persistent-resource/tokyo-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/501/persistent-resource/tokyo-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#1D190B"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/502/persistent-resource/tokyo-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/502/persistent-resource/tokyo-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/502/persistent-resource/tokyo-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#B12025" style="background-color: #B12025"></div>
                            <div class="templates-card__colors-item" data-color="#353CAC" style="background-color: #353CAC">
                            </div>
                            <div class="templates-card__colors-item" data-color="#0C6453" style="background-color: #0C6453">
                            </div>
                            <div class="templates-card__colors-item" data-color="#F29100" style="background-color: #F29100">
                            </div>
                            <div class="templates-card__colors-item" data-color="#1D190B" style="background-color: #1D190B">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Tokyo</div>
                      <div class="templates-card__caption">Tech-inspired design, minimalist page, skill-point visuals.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell" data-name="copenhagen"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;copenhagen&quot;}"
                    href="../app/create-resume75bf.html?template=copenhagen">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Copenhagen"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1826/persistent-resource/copenhagen-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1826/persistent-resource/copenhagen-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Copenhagen"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#F6EEE3"
                            src="@/assets/local_template_image/image/1826/persistent-resource/copenhagen-resume-templates.jpg" />
                          <div data-color="#E3F6EB"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1827/persistent-resource/copenhagen-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1827/persistent-resource/copenhagen-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1827/persistent-resource/copenhagen-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#EEB7B3"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1828/persistent-resource/copenhagen-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1828/persistent-resource/copenhagen-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1828/persistent-resource/copenhagen-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#B9D9F2"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1829/persistent-resource/copenhagen-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1829/persistent-resource/copenhagen-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1829/persistent-resource/copenhagen-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#3C434F"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1830/persistent-resource/copenhagen-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1830/persistent-resource/copenhagen-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1830/persistent-resource/copenhagen-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#F6EEE3" style="background-color: #F6EEE3"></div>
                            <div class="templates-card__colors-item" data-color="#E3F6EB" style="background-color: #E3F6EB">
                            </div>
                            <div class="templates-card__colors-item" data-color="#EEB7B3" style="background-color: #EEB7B3">
                            </div>
                            <div class="templates-card__colors-item" data-color="#B9D9F2" style="background-color: #B9D9F2">
                            </div>
                            <div class="templates-card__colors-item" data-color="#3C434F" style="background-color: #3C434F">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Copenhagen</div>
                      <div class="templates-card__caption">Emphasizing your personal story above all else, this template
                        blends a traditional style with attention-grabbing design.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell" data-name="chicago"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;chicago&quot;}"
                    href="../app/create-resumecc02.html?template=chicago">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Chicago"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1882/persistent-resource/chicago-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1882/persistent-resource/chicago-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Chicago"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#0F141F"
                            src="@/assets/local_template_image/image/1882/persistent-resource/chicago-resume-templates.jpg" />
                          <div data-color="#FFDEC7"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1883/persistent-resource/chicago-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1883/persistent-resource/chicago-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1883/persistent-resource/chicago-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#F46060"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1884/persistent-resource/chicago-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1884/persistent-resource/chicago-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1884/persistent-resource/chicago-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#7FC2D2"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1885/persistent-resource/chicago-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1885/persistent-resource/chicago-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1885/persistent-resource/chicago-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#FBCEF0"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1886/persistent-resource/chicago-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1886/persistent-resource/chicago-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/1886/persistent-resource/chicago-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#0F141F" style="background-color: #0F141F"></div>
                            <div class="templates-card__colors-item" data-color="#FFDEC7" style="background-color: #FFDEC7">
                            </div>
                            <div class="templates-card__colors-item" data-color="#F46060" style="background-color: #F46060">
                            </div>
                            <div class="templates-card__colors-item" data-color="#7FC2D2" style="background-color: #7FC2D2">
                            </div>
                            <div class="templates-card__colors-item" data-color="#FBCEF0" style="background-color: #FBCEF0">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Chicago</div>
                      <div class="templates-card__caption">Bold and forward structure that’s impossible to ignore. When you
                        really need to impress and showcase your profile.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="rio"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;rio&quot;}"
                    href="../app/create-resumef73c.html?template=rio">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Rio"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2212/persistent-resource/rio-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2212/persistent-resource/rio-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Rio"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#E7CA9D"
                            src="@/assets/local_template_image/image/2212/persistent-resource/rio-resume-templates.jpg" />
                          <div data-color="#AEC4D0"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2213/persistent-resource/rio-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2213/persistent-resource/rio-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2213/persistent-resource/rio-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#DDA68E"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2214/persistent-resource/rio-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2214/persistent-resource/rio-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2214/persistent-resource/rio-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#ACB4AB"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2215/persistent-resource/rio-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2215/persistent-resource/rio-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2215/persistent-resource/rio-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#CBB0AA"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2216/persistent-resource/rio-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2216/persistent-resource/rio-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2216/persistent-resource/rio-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#E7CA9D" style="background-color: #E7CA9D"></div>
                            <div class="templates-card__colors-item" data-color="#AEC4D0" style="background-color: #AEC4D0">
                            </div>
                            <div class="templates-card__colors-item" data-color="#DDA68E" style="background-color: #DDA68E">
                            </div>
                            <div class="templates-card__colors-item" data-color="#ACB4AB" style="background-color: #ACB4AB">
                            </div>
                            <div class="templates-card__colors-item" data-color="#CBB0AA" style="background-color: #CBB0AA">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Rio</div>
                      <div class="templates-card__caption">Fluid and energetic, this template makes a statement with
                        creativity and style.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="boston"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;boston&quot;}"
                    href="../app/create-resume81f2.html?template=boston">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Boston"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3235/persistent-resource/boston-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3235/persistent-resource/boston-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Boston"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#FFFFFF"
                            src="@/assets/local_template_image/image/3235/persistent-resource/boston-resume-templates.jpg" />
                          <div data-color="#141414"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3236/persistent-resource/boston-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3236/persistent-resource/boston-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3236/persistent-resource/boston-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#FCFF82"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3237/persistent-resource/boston-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3237/persistent-resource/boston-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3237/persistent-resource/boston-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#65B2D7"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3238/persistent-resource/boston-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3238/persistent-resource/boston-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3238/persistent-resource/boston-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#C8B4DE"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3239/persistent-resource/boston-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/3239/persistent-resource/boston-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/3239/persistent-resource/boston-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#FFFFFF" style="background-color: #FFFFFF"></div>
                            <div class="templates-card__colors-item" data-color="#141414" style="background-color: #141414">
                            </div>
                            <div class="templates-card__colors-item" data-color="#FCFF82" style="background-color: #FCFF82">
                            </div>
                            <div class="templates-card__colors-item" data-color="#65B2D7" style="background-color: #65B2D7">
                            </div>
                            <div class="templates-card__colors-item" data-color="#C8B4DE" style="background-color: #C8B4DE">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Boston</div>
                      <div class="templates-card__caption">A streamlined, multi-column structure give this resume template
                        an innovative yet organized feel.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="vancouver"><a
                    class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;vancouver&quot;}"
                    href="../app/create-resume9589.html?template=vancouver">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Vancouver"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/487/persistent-resource/vancouver-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/487/persistent-resource/vancouver-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Vancouver"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            src="@/assets/local_template_image/image/487/persistent-resource/vancouver-resume-templates.jpg" />
                          <div class="templates-card__badge templates-card__badge--free">Free</div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__mono">
                            <div class="templates-card__mono-icon"></div>
                            <div class="templates-card__mono-text">Monochrome</div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Vancouver</div>
                      <div class="templates-card__caption">Creative, light-hearted resume template with color and flair.
                      </div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell templates-grid__cell--hidden" data-name="cape_town"><a
                    class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;cape_town&quot;}"
                    href="../app/create-resumea5b8.html?template=cape_town">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Cape Town"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2905/persistent-resource/cape-town-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2905/persistent-resource/cape-town-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Cape Town"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#FF8FC5"
                            src="@/assets/local_template_image/image/2905/persistent-resource/cape-town-resume-templates.jpg" />
                          <div data-color="#2AF091"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2906/persistent-resource/cape-town-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2906/persistent-resource/cape-town-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2906/persistent-resource/cape-town-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#FFF27A"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2907/persistent-resource/cape-town-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2907/persistent-resource/cape-town-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2907/persistent-resource/cape-town-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#8CE8FC"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2908/persistent-resource/cape-town-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2908/persistent-resource/cape-town-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2908/persistent-resource/cape-town-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#FF6258"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2909/persistent-resource/cape-town-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2909/persistent-resource/cape-town-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2909/persistent-resource/cape-town-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#FF8FC5" style="background-color: #FF8FC5"></div>
                            <div class="templates-card__colors-item" data-color="#2AF091" style="background-color: #2AF091">
                            </div>
                            <div class="templates-card__colors-item" data-color="#FFF27A" style="background-color: #FFF27A">
                            </div>
                            <div class="templates-card__colors-item" data-color="#8CE8FC" style="background-color: #8CE8FC">
                            </div>
                            <div class="templates-card__colors-item" data-color="#FF6258" style="background-color: #FF6258">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Cape Town</div>
                      <div class="templates-card__caption">Get noticed with this resume template featuring a strong font
                        accented by playful pops of color.</div>
                    </div>
                  </a></div>
                <div class="templates-grid__cell" data-name="geneva"><a class="templates-card"
                    data-internal-event="{&quot;name&quot;:&quot;choose_sign_up_resume_template&quot;,&quot;label&quot;:&quot;templates_resume&quot;,&quot;template&quot;:&quot;geneva&quot;}"
                    href="../app/create-resumeab87.html?template=geneva">
                    <div class="templates-card__body">
                      <div class="templates-card__content">
                        <div class="templates-card__preview" title="Professional resume template Geneva"><img
                            srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2889/persistent-resource/geneva-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2889/persistent-resource/geneva-resume-templates.jpg 2x"
                            width="380" loading="lazy" alt="Professional resume template Geneva"
                            class="templates-card__preview-image templates-card__preview-image--default templates-card__preview-image--active"
                            data-color="#2053BB"
                            src="@/assets/local_template_image/image/2889/persistent-resource/geneva-resume-templates.jpg" />
                          <div data-color="#FFF494"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2890/persistent-resource/geneva-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2890/persistent-resource/geneva-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2890/persistent-resource/geneva-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#153547"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2891/persistent-resource/geneva-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2891/persistent-resource/geneva-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2891/persistent-resource/geneva-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#80A190"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2892/persistent-resource/geneva-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2892/persistent-resource/geneva-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2892/persistent-resource/geneva-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div data-color="#D2F9D4"
                            data-img-src="https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/2893/persistent-resource/geneva-resume-templates.jpg"
                            data-img-srcset="https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/2893/persistent-resource/geneva-resume-templates.jpg 1x, https://s3.resume.io/cdn-cgi/image/width=380,dpr=2,format=auto/uploads/local_template_image/image/2893/persistent-resource/geneva-resume-templates.jpg 2x"
                            data-img-width="380"></div>
                          <div class="templates-card__action">
                            <div class="button">Use This Template</div>
                          </div>
                        </div>
                        <div class="templates-card__options">
                          <div class="templates-card__colors">
                            <div class="templates-card__colors-item templates-card__colors-item--active"
                              data-color="#2053BB" style="background-color: #2053BB"></div>
                            <div class="templates-card__colors-item" data-color="#FFF494" style="background-color: #FFF494">
                            </div>
                            <div class="templates-card__colors-item" data-color="#153547" style="background-color: #153547">
                            </div>
                            <div class="templates-card__colors-item" data-color="#80A190" style="background-color: #80A190">
                            </div>
                            <div class="templates-card__colors-item" data-color="#D2F9D4" style="background-color: #D2F9D4">
                            </div>
                          </div>
                          <div class="templates-card__badges">
                            <div class="templates-card__badge">pdf</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="templates-card__footer">
                      <div class="templates-card__name">Geneva</div>
                      <div class="templates-card__caption">Minimalist font styling contrasts with an electric background in
                        this edgy resume template.</div>
                    </div>
                  </a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {

}
</script>


<style scoped>
builder
::before,
::after {
    text-decoration: inherit;
    vertical-align: inherit
}

html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: default;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}

article,
aside,
header,
section {
    display: block
}

body {
    margin: 0
}

h1 {
    font-size: 2em;
    margin: .67em 0
}

figcaption,
figure,
main {
    display: block
}

figure {
    margin: 1em 40px
}

hr {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
    overflow: visible
}


pre {
    font-family: monospace, monospace;
    font-size: 1em
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted
}

b,
strong {
    font-weight: inherit
}

b,
strong {
    font-weight: bolder
}

code,
kbd,
samp {
    font-family: monospace, monospace;
    font-size: 1em
}

dfn {
    font-style: italic
}

mark {
    background-color: #ff0;
    color: #000
}

small {
    font-size: 80%
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

::-moz-selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none
}

::selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none
}

audio,
canvas,
iframe,
img,
svg,
video {
    vertical-align: middle
}

audio,
video {
    display: inline-block
}

audio:not([controls]) {
    display: none;
    height: 0
}

img {
    border-style: none
}

svg {
    fill: currentColor
}

svg:not(:root) {
    overflow: hidden
}

table {
    border-collapse: collapse
}

button,
input,
optgroup,
select,
textarea {
    margin: 0
}

button,
input,
select,
textarea {
    background-color: transparent;
    color: inherit;
    font-size: inherit;
    line-height: inherit
}

button,
input {
    overflow: visible
}

button,
select {
    text-transform: none
}

button,
html [type=button],
[type=reset],
[type=submit] {
    -webkit-appearance: button;
}

button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
    border-style: none;
    padding: 0
}

button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
    outline: 1px dotted ButtonText
}

legend {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal
}

progress {
    display: inline-block;
    vertical-align: baseline
}

textarea {
    overflow: auto;
    resize: vertical
}

[type=checkbox],
[type=radio] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
    height: auto
}

[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

details,
menu {
    display: block
}

summary {
    display: list-item
}

canvas {
    display: inline-block
}

template {
    display: none
}

a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
    -ms-touch-action: manipulation;
    touch-action: manipulation
}

[hidden] {
    display: none
}

[aria-busy=true] {
    cursor: progress
}

[aria-controls] {
    cursor: pointer
}

[aria-hidden=false][hidden]:not(:focus) {
    clip: rect(0, 0, 0, 0);
    display: inherit;
    position: absolute
}

[aria-disabled] {
    cursor: default
}

:root {
    --white: #ffffff;
    --neutral-5: #f7f9fc;
    --neutral-10: #eff2f9;
    --neutral-15: #e7eaf4;
    --neutral-20: #d9deeb;
    --neutral-30: #bec4d5;
    --neutral-40: #9fa6bb;
    --neutral-50: #828ba2;
    --neutral-60: #656e83;
    --neutral-70: #495163;
    --neutral-80: #303848;
    --neutral-90: #1e2532;
    --neutral-100: #0f141e;
    --blue-10: #eaf6ff;
    --blue-20: #c3e5fe;
    --blue-30: #92cdfc;
    --blue-40: #54aff8;
    --blue-50: #1a91f0;
    --blue-60: #1170cd;
    --blue-70: #10529b;
    --blue-80: #0f3871;
    --blue-90: #0c264c;
    --blue-100: #09162d;
    --indigo-10: #f1f2ff;
    --indigo-20: #dbdeff;
    --indigo-30: #bec2fe;
    --indigo-40: #9ba1fb;
    --indigo-50: #7a82f5;
    --indigo-60: #5660e8;
    --indigo-70: #343ecc;
    --indigo-80: #282b8f;
    --indigo-90: #1a1c6a;
    --indigo-100: #0e0f47;
    --green-10: #e7f4ed;
    --green-20: #c6e4d2;
    --green-30: #96d0ad;
    --green-40: #48ba75;
    --green-50: #339d5d;
    --green-60: #217d47;
    --green-70: #135c37;
    --green-80: #094025;
    --green-90: #042b18;
    --green-100: #01180d;
    --amber-10: #fff2cc;
    --amber-20: #fddb8c;
    --amber-30: #f9ba44;
    --amber-40: #ec930c;
    --amber-50: #cf760d;
    --amber-60: #a85a0e;
    --amber-70: #7f400d;
    --amber-80: #582c0c;
    --amber-90: #3e1d0a;
    --amber-100: #231007;
    --orange-10: #feebe3;
    --orange-20: #fdd2c0;
    --orange-30: #fbb092;
    --orange-40: #f68559;
    --orange-50: #ee571d;
    --orange-60: #bf4213;
    --orange-70: #8b3211;
    --orange-80: #5e240e;
    --orange-90: #3b180b;
    --orange-100: #1c0c06;
    --red-10: #ffeaec;
    --red-20: #ffd0d5;
    --red-30: #ffacb5;
    --red-40: #fe7d8b;
    --red-50: #fb4458;
    --red-60: #da0c22;
    --red-70: #a10e1d;
    --red-80: #6f0e19;
    --red-90: #470c12;
    --red-100: #24090c;
    --beige-10: #f3f1eb;
    --beige-20: #e1ddd2;
    --beige-30: #cbc3b3;
    --beige-40: #afa58f;
    --beige-50: #968a70;
    --beige-60: #776d59;
    --beige-70: #575041;
    --beige-80: #3c372d;
    --beige-90: #27241d;
    --beige-100: #15130f
}

html,
body {
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-size: 19px;
    line-height: 24px
}

@media(max-width:767px) {

    html,
    body {
        font-size: 16px;
        line-height: 20px
    }
}

html,
body {
    color: var(--neutral-90);
    font-weight: 400;
    -webkit-font-smoothing: antialiased
}

body {
    min-height: 100vh
}

a {
    color: inherit;
    text-decoration: none
}

h1,
h2,
h3,
h4,
h5,
p {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0
}

input,
textarea {
    font-family: inherit;
    outline: none
}

input::-ms-clear,
textarea::-ms-clear {
    display: none
}

button {
    font-family: inherit
}

.profiler-results {
    display: none !important
}

@font-face {
    font-family: tt commons;
    font-weight: 400;
    font-style: normal;
    font-display: swap;

    src: url(../../assets/fonts/TTCommons-Regular8f50143ea19c4d1135ad.woff2) format('woff2'), url(../../assets/fonts/TTCommons-Regular6e4913630d64513ca76d.woff) format('woff')
}

@font-face {
    font-family: tt commons;
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url(../../assets/fonts/TTCommons-Mediumf4c11fc63b31feff05e9.woff2) format('woff2'), url(../../assets/fonts/TTCommons-Mediumd8391a8c7197503e6f64.woff) format('woff')
}

@font-face {
    font-family: tt commons;
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(../../assets/fonts/TTCommons-DemiBold389591cb218f6fbeae88.woff2) format('woff2'), url(../../assets/fonts/TTCommons-DemiBoldcf6fb906d813cbcbda2e.woff) format('woff')
}

@font-face {
    font-family: tt commons;
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(../../assets/fonts/TTCommons-Boldd538f7cc8a649fce8b0f.woff2) format('woff2'), url(../../assets/fonts/TTCommons-Boldb67b82e653bae870e507.woff) format('woff')
}

#beacon-container {}

@media(max-width:1199px) {
    #beacon-container {
        display: none
    }
}

#beacon-container {}

#beacon-container .BeaconFabButtonFrame {
    margin-right: calc(-1 * (100vw - 100%))
}

article,
aside,
header,
section {
    display: block
}

body {
    margin: 0
}

h1 {
    font-size: 2em;
    margin: .67em 0
}

figcaption,
figure,
main {
    display: block
}

figure {
    margin: 1em 40px
}

hr {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
    overflow: visible
}


pre {
    font-family: monospace, monospace;
    font-size: 1em
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted
}

b,
strong {
    font-weight: inherit
}

b,
strong {
    font-weight: bolder
}

code,
kbd,
samp {
    font-family: monospace, monospace;
    font-size: 1em
}

dfn {
    font-style: italic
}

mark {
    background-color: #ff0;
    color: #000
}

small {
    font-size: 80%
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

::-moz-selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none
}

::selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none
}

audio,
canvas,
iframe,
img,
svg,
video {
    vertical-align: middle
}

audio,
video {
    display: inline-block
}

audio:not([controls]) {
    display: none;
    height: 0
}

img {
    border-style: none
}

svg {
    fill: currentColor
}

svg:not(:root) {
    overflow: hidden
}

table {
    border-collapse: collapse
}

button,
input,
optgroup,
select,
textarea {
    margin: 0
}

button,
input,
select,
textarea {
    background-color: transparent;
    color: inherit;
    font-size: inherit;
    line-height: inherit
}

button,
input {
    overflow: visible
}

button,
select {
    text-transform: none
}

button,
html [type=button],
[type=reset],
[type=submit] {
    -webkit-appearance: button
}

button::-moz-focus-inner,
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner {
    border-style: none;
    padding: 0
}

button:-moz-focusring,
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring {
    outline: 1px dotted ButtonText
}

legend {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal
}

progress {
    display: inline-block;
    vertical-align: baseline
}

textarea {
    overflow: auto;
    resize: vertical
}

[type=checkbox],
[type=radio] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
    height: auto
}

[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

details,
menu {
    display: block
}

summary {
    display: list-item
}

canvas {
    display: inline-block
}

template {
    display: none
}

a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
    -ms-touch-action: manipulation;
    touch-action: manipulation
}

[hidden] {
    display: none
}

[aria-busy=true] {
    cursor: progress
}

[aria-controls] {
    cursor: pointer
}

[aria-hidden=false][hidden]:not(:focus) {
    clip: rect(0, 0, 0, 0);
    display: inherit;
    position: absolute
}

[aria-disabled] {
    cursor: default
}

:root {
    --white: #ffffff;
    --neutral-5: #f7f9fc;
    --neutral-10: #eff2f9;
    --neutral-15: #e7eaf4;
    --neutral-20: #d9deeb;
    --neutral-30: #bec4d5;
    --neutral-40: #9fa6bb;
    --neutral-50: #828ba2;
    --neutral-60: #656e83;
    --neutral-70: #495163;
    --neutral-80: #303848;
    --neutral-90: #1e2532;
    --neutral-100: #0f141e;
    --blue-10: #eaf6ff;
    --blue-20: #c3e5fe;
    --blue-30: #92cdfc;
    --blue-40: #54aff8;
    --blue-50: #1a91f0;
    --blue-60: #1170cd;
    --blue-70: #10529b;
    --blue-80: #0f3871;
    --blue-90: #0c264c;
    --blue-100: #09162d;
    --indigo-10: #f1f2ff;
    --indigo-20: #dbdeff;
    --indigo-30: #bec2fe;
    --indigo-40: #9ba1fb;
    --indigo-50: #7a82f5;
    --indigo-60: #5660e8;
    --indigo-70: #343ecc;
    --indigo-80: #282b8f;
    --indigo-90: #1a1c6a;
    --indigo-100: #0e0f47;
    --green-10: #e7f4ed;
    --green-20: #c6e4d2;
    --green-30: #96d0ad;
    --green-40: #48ba75;
    --green-50: #339d5d;
    --green-60: #217d47;
    --green-70: #135c37;
    --green-80: #094025;
    --green-90: #042b18;
    --green-100: #01180d;
    --amber-10: #fff2cc;
    --amber-20: #fddb8c;
    --amber-30: #f9ba44;
    --amber-40: #ec930c;
    --amber-50: #cf760d;
    --amber-60: #a85a0e;
    --amber-70: #7f400d;
    --amber-80: #582c0c;
    --amber-90: #3e1d0a;
    --amber-100: #231007;
    --orange-10: #feebe3;
    --orange-20: #fdd2c0;
    --orange-30: #fbb092;
    --orange-40: #f68559;
    --orange-50: #ee571d;
    --orange-60: #bf4213;
    --orange-70: #8b3211;
    --orange-80: #5e240e;
    --orange-90: #3b180b;
    --orange-100: #1c0c06;
    --red-10: #ffeaec;
    --red-20: #ffd0d5;
    --red-30: #ffacb5;
    --red-40: #fe7d8b;
    --red-50: #fb4458;
    --red-60: #da0c22;
    --red-70: #a10e1d;
    --red-80: #6f0e19;
    --red-90: #470c12;
    --red-100: #24090c;
    --beige-10: #f3f1eb;
    --beige-20: #e1ddd2;
    --beige-30: #cbc3b3;
    --beige-40: #afa58f;
    --beige-50: #968a70;
    --beige-60: #776d59;
    --beige-70: #575041;
    --beige-80: #3c372d;
    --beige-90: #27241d;
    --beige-100: #15130f
}

:root {
    --facebook-color: #3b5998;
    --twitter-color: #1da1f2;
    --linkedin-color: #0077b5;
    --youtube-color: #ff3d00;
    --pinterest-color: #cd1f28
}

@font-face {
    font-family: tt commons;
    font-display: swap;
    font-weight: 400;
    font-style: normal;
    src: url(../../assets/fonts/TTCommons-Regular-Subset111ea87cd548b8c7aba8.woff2) format('woff2'), url(../../assets/fonts/TTCommons-Regular-Subset5b879e7a56ab83017281.woff) format('woff')
}

@font-face {
    font-family: tt commons;
    font-display: swap;
    font-weight: 600;
    font-style: normal;
    src: url(../../assets/fonts/TTCommons-DemiBold-Subseteb1d2e525a5e66b66046.woff2) format('woff2'), url(../../assets/fonts/TTCommons-DemiBold-Subset0f77a15fe7543fb6e035.woff) format('woff')
}

@font-face {
    font-family: tt commons;
    font-display: swap;
    font-weight: 700;
    font-style: normal;
    src: url(../../assets/fonts/TTCommons-Bold-Subset7eb6ce4515ca8cca611d.woff2) format('woff2'), url(../../assets/fonts/TTCommons-Bold-Subsetf0ef2be654ab473beb0b.woff) format('woff')
}

@font-face {
    font-family: tt tricks;
    font-display: swap;
    font-weight: 400;
    font-style: normal;
    src: url(../../assets/fonts/TT-Tricks-Regulare6b3a3047162ca2af5cf.woff2) format('woff2'), url(../../assets/fonts/TT-Tricks-Regular1e4836b6a86f8585b8fb.woff) format('woff')
}

@font-face {
    font-family: tt tricks;
    font-display: swap;
    font-weight: 700;
    font-style: normal;
    src: url(../../assets/fonts/TT-Tricks-Bold630398fa6d97a0ed2aec.woff2) format('woff2'), url(../../assets/fonts/TT-Tricks-Bold5d9dc609b39ae5665019.woff) format('woff')
}

@font-face {
    font-family: tt tricks;
    font-display: swap;
    font-weight: 400;
    font-style: italic;
    src: url(../../assets/fonts/TT-Tricks-Italicc92b514d72875d3ead8e.woff2) format('woff2'), url(../../assets/fonts/TT-Tricks-Italic630c0721427edcd31ca7.woff) format('woff')
}

@font-face {
    font-family: tt tricks;
    font-display: swap;
    font-weight: 700;
    font-style: italic;
    src: url(../../assets/fonts/TT-Tricks-Bold-Italic611e066e1f8109cba2e3.woff2) format('woff2'), url(../../assets/fonts/TT-Tricks-Bold-Italic209cb843d819f1d2290e.woff) format('woff')
}

body {
    font-size: 19px;
    line-height: 24px;
    position: relative;
    color: var(--neutral-90);
    font-weight: 400;
    background-color: var(--neutral-10);
    min-height: 100vh;
    overflow-x: hidden;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

body.is-modal-open {
    width: 100%;
    height: 100%;
    overflow: hidden
}

.light-background-body {
    background-color: #f0f3f8
}

.white-background-body {
    background-color: var(--white)
}

a {
    color: inherit;
    text-decoration: none
}

h1,
h2,
h3,
h4,
h5,
p {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0
}

input,
textarea {
    font-family: inherit;
    caret-color: var(--blue-50);
    outline: none
}

button {
    font-family: inherit
}

:root {
    --vw: 1vw
}

:root {

    --z-cookiebar: 105;
    --z-modal: 999;
    --z-modal-overlay: 106;
    --z-examples-search-sticky-panel: 101;
    --z-home-resume-maker-lightbox: 1100;
    --z-blog-post-wide-element: 10
}

.hint {
    position: relative;
    display: none;
    width: 20px;
    height: 20px;
    background-image: url(../../assets/media/hint1b50e7579a3a2b4dc34d.svg);
    background-repeat: no-repeat
}

@media(hover) {
    .hint {
        display: inline-block
    }
}

.hint__message {
    font-size: 14px;
    line-height: 16px;
    position: absolute;
    width: 300px;
    background-color: var(--neutral-90);
    color: var(--white);
    padding: 8px 12px;
    border-radius: 3px;
    bottom: 100%;
    left: 50%;
    margin-bottom: 6px;
    margin-left: -150px;
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    -webkit-transition: opacity .2s, visibility .2s;
    transition: opacity .2s, visibility .2s
}

.hint__message::before {
    content: '';
    position: absolute;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 0 0 2px 0;
    -webkit-transform: translate(-50%, -50%) rotateZ(45deg);
    transform: translate(-50%, -50%) rotateZ(45deg);
    background-color: var(--neutral-90);
    top: 100%;
    left: 50%
}

.hint:hover .hint__message {
    visibility: visible;
    opacity: 1
}

.field {
    display: block;
    margin-bottom: 24px
}

.field:last-child {
    margin-bottom: 0
}

.field--fake {
    display: none
}

.field__label {
    display: block;
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-50);
    margin-bottom: 6px;
    position: relative
}

.field__label-hint {
    margin-left: 4px;
    vertical-align: middle
}

.field__input,
.field__textarea {
    font-size: 19px;
    line-height: 24px;
    border: none;
    border-bottom: 2px solid var(--neutral-10);
    border-radius: 3px;
    padding: 13px 16px 11px;
    width: 100%;
    display: block;
    background-color: var(--neutral-10);
    caret-color: var(--neutral-90);
    outline: none;
    -webkit-transition: border-color .2s, border-radius .1s .2s;
    transition: border-color .2s, border-radius .1s .2s
}

.field__input:focus,
.field__textarea:focus {
    -webkit-transition: border-color .2s;
    transition: border-color .2s;
    border-bottom-color: var(--blue-50);
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px
}

.field__input::-ms-input-placeholder,
.field__textarea::-ms-input-placeholder {
    color: var(--neutral-50);
    opacity: 1
}

.field__input::-webkit-input-placeholder,
.field__textarea::-webkit-input-placeholder {
    color: var(--neutral-50);
    opacity: 1
}

.field__input:-ms-input-placeholder,
.field__textarea:-ms-input-placeholder {
    color: var(--neutral-50);
    opacity: 1
}

.field__input::placeholder,
.field__textarea::placeholder {
    color: var(--neutral-50);
    opacity: 1
}

.field__textarea {
    resize: none;
    min-height: 150px
}

.field--error {
    border-bottom: 2px solid var(--red-50)
}

.field__message {
    font-size: 16px;
    line-height: 20px;
    color: var(--red-50)
}

.button {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    text-align: center;
    color: var(--white);
    background-color: var(--blue-50);
    padding: 14px 24px;
    border-radius: 4px;
    -webkit-transition: background-color .1s, color .1s, -webkit-box-shadow .1s;
    transition: background-color .1s, color .1s, -webkit-box-shadow .1s;
    transition: background-color .1s, color .1s, box-shadow .1s;
    transition: background-color .1s, color .1s, box-shadow .1s, -webkit-box-shadow .1s;
    cursor: pointer;
    border-width: 0;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.button:hover {
    background-color: var(--blue-60)
}

.button:active {
    background-color: var(--blue-70)
}

.button[disabled],
.button--disabled {
    background-color: var(--neutral-20);
    color: var(--neutral-50);
    pointer-events: none
}

.button.button--outline {
    color: var(--neutral-90);
    background-color: transparent;
    -webkit-box-shadow: inset 0 0 0 1px var(--neutral-20);
    box-shadow: inset 0 0 0 1px var(--neutral-20)
}

.button.button--outline:hover {
    background-color: transparent;
    -webkit-box-shadow: inset 0 0 0 1px var(--blue-50);
    box-shadow: inset 0 0 0 1px var(--blue-50);
    color: var(--blue-50)
}

.button.button--outline:active {
    background-color: rgba(26, 145, 240, .15);
    -webkit-box-shadow: inset 0 0 0 1px var(--blue-50);
    box-shadow: inset 0 0 0 1px var(--blue-50);
    color: var(--blue-50)
}

.button.button--outline-dark {
    color: var(--white);
    background-color: transparent;
    -webkit-box-shadow: inset 0 0 0 1px var(--neutral-20);
    box-shadow: inset 0 0 0 1px var(--neutral-20)
}

.button.button--outline-dark:hover {
    background-color: transparent;
    -webkit-box-shadow: inset 0 0 0 1px var(--blue-50);
    box-shadow: inset 0 0 0 1px var(--blue-50);
    color: var(--blue-50)
}

.button.button--outline-dark:active {
    background-color: rgba(26, 145, 240, .15);
    -webkit-box-shadow: inset 0 0 0 1px var(--blue-50);
    box-shadow: inset 0 0 0 1px var(--blue-50);
    color: var(--blue-50)
}

.button.button--ghost {
    padding: 13px 23px;
    border: 1px solid var(--blue-50);
    color: var(--blue-50);
    background-color: transparent
}

.button.button--ghost:hover {
    background-color: rgba(26, 145, 240, .07)
}

.button.button--ghost:active {
    background-color: rgba(26, 145, 240, .15)
}

.button--small {
    font-size: 16px;
    line-height: 20px;
    padding: 8px 14px
}

.button.button--block {
    display: block
}

.button.button--flat {
    font-weight: 400;
    color: var(--blue-50);
    background-color: transparent;
    padding: 8px;
    -webkit-transition: color .2s ease;
    transition: color .2s ease
}

.button.button--flat:hover {
    color: var(--blue-70)
}

.section {
    padding-top: 120px;
    padding-bottom: 120px
}

@media(max-width:1023px) {
    .section {
        padding-top: 64px;
        padding-bottom: 64px
    }
}

@media(max-width:767px) {
    .section {
        padding-top: 48px;
        padding-bottom: 48px
    }
}

.section__title {
    font-weight: 700;
    font-size: 46px;
    line-height: 48px;
    margin-bottom: 20px
}

@media(max-width:1023px) {
    .section__title {
        margin-bottom: 8px;
        font-weight: 700;
        font-size: 38px;
        line-height: 40px
    }
}

@media(max-width:767px) {
    .section__title {
        font-size: 32px;
        line-height: 34px
    }
}

:root {
    --container-width: 1120px
}

.grid-container {
    width: 100%;
    max-width: calc(var(--container-width) + 88px);
    padding-left: 44px;
    padding-right: 44px;
    margin-left: auto;
    margin-right: auto
}

@media(max-width:1023px) {
    .grid-container {
        padding-left: 32px;
        padding-right: 32px
    }
}

@media(max-width:767px) {
    .grid-container {
        padding-left: 20px;
        padding-right: 20px
    }
}

.logos {
    padding: 18px 0;
    border-top: 1px solid var(--neutral-10);
    border-bottom: 1px solid var(--neutral-10);
    background-color: var(--white)
}

.logos__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -28px
}

@media(max-width:1023px) {
    .logos__list {
        margin-left: -16px;
        margin-right: -16px
    }
}

.logos__label {
    font-size: 19px;
    line-height: 24px;
    margin: 8px 28px;
    color: var(--neutral-50)
}

@media(max-width:1023px) {
    .logos__label {
        margin-left: 16px;
        margin-right: 16px
    }
}

.logos__item {
    display: inline-block;
    position: relative;
    margin: 8px 28px;
    width: 141px;
    height: 40px;
    background-color: var(--neutral-10);
    background-repeat: no-repeat;
    background-size: 141px auto;
    border-radius: 4px
}

@media(max-width:1023px) {
    .logos__item {
        margin-left: 16px;
        margin-right: 16px
    }
}

.logos__item.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

.logos__item--inc {
    width: 63px;
    height: 22px;
    background-position: 0 0
}

.logos__item--lifehack {
    width: 140px;
    height: 28px;
    background-position: 0 -66px
}

.logos__item--entrepreneur {
    width: 141px;
    height: 28px;
    background-position: 0 -94px;
    top: 3px
}

.logos__item--muse {
    width: 114px;
    height: 22px;
    background-position: 0 -22px
}

.logos__item--forbes {
    width: 84px;
    height: 22px;
    background-position: 0 -44px
}

.showcase__title {
    max-width: 736px;
    margin: 0 auto 64px;
    text-align: center
}

@media(max-width:1023px) {
    .showcase__title {
        max-width: 544px;
        margin-bottom: 32px
    }
}

@media(max-width:767px) {
    .showcase__title {
        margin-bottom: 24px
    }
}

.showcase__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

@media(max-width:1023px) {
    .showcase__content {
        max-width: 544px;
        margin: 0 auto;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
}

.showcase__videos {
    position: relative;
    overflow: hidden;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin-right: 24px;
    border-radius: 6px;
    background-color: var(--neutral-10)
}

@media(max-width:1023px) {
    .showcase__videos {
        width: 100%;
        margin-right: 0;
        margin-bottom: 16px
    }
}

.showcase__videos-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 10000%
}

.showcase__video {
    position: relative;
    overflow: hidden;
    width: 1%;
    background-color: var(--neutral-10)
}

.showcase__video:before {
    content: '';
    display: block;
    padding-bottom: 75%
}

.showcase__video video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%
}

.showcase__bullets {
    display: none
}

@media(max-width:1023px) {
    .showcase__bullets {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 8px;
        margin-bottom: 20px
    }
}

.showcase__bullet {
    width: 8px;
    height: 8px;
    margin: 0 6px;
    border-radius: 50%;
    background-color: var(--neutral-20)
}

.showcase__bullet--active {
    background-color: var(--blue-50)
}

.showcase__features {
    position: relative;
    width: 369px;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

@media(max-width:1023px) {
    .showcase__features {
        width: 100%
    }
}

@media(min-width:1024px) {
    .showcase__feature {
        position: relative;
        padding: 12px 12px 12px 27px;
        margin-bottom: 16px;
        border-radius: 6px;
        -webkit-transition: background-color .2s ease;
        transition: background-color .2s ease;
        cursor: pointer
    }

    .showcase__feature:hover {
        background-color: var(--neutral-10)
    }

    .showcase__feature:last-child {
        margin-bottom: 0
    }
}

@media(max-width:1023px) {
    .showcase__feature {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-left: 19px;
        opacity: 0;
        -webkit-transition: opacity .2s;
        transition: opacity .2s
    }

    .showcase__feature:first-child {
        position: relative
    }
}

@media(min-width:1024px) {
    .showcase__feature--active {
        background-color: var(--neutral-10)
    }
}

@media(max-width:1023px) {
    .showcase__feature--active {
        opacity: 1
    }
}

.showcase__feature-title {
    font-size: 28px;
    line-height: 30px;
    font-weight: 600
}

@media(min-width:1024px) {
    .showcase__feature-subtitle {
        display: none;
        overflow: hidden
    }
}

.showcase__feature-subtitle--initial {
    display: block
}

.showcase__feature-subtitle-content {
    padding-top: 8px
}

.showcase__feature-bar {
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 8px;
    width: 3px;
    border-radius: 6px;
    background-color: var(--neutral-30);
    overflow: hidden
}

@media(max-width:1023px) {
    .showcase__feature-bar {
        top: 0;
        bottom: 0;
        left: 0
    }
}

.showcase__feature-bar-progress {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: var(--blue-50);
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
}

@-webkit-keyframes featureProgressScale {
    0% {
        -webkit-transform: scaleY(0);
        transform: scaleY(0)
    }

    100% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1)
    }
}

@keyframes featureProgressScale {
    0% {
        -webkit-transform: scaleY(0);
        transform: scaleY(0)
    }

    100% {
        -webkit-transform: scaleY(1);
        transform: scaleY(1)
    }
}

.showcase__feature--active .showcase__feature-bar-progress {
    -webkit-animation: featureProgressScale 10s linear forwards;
    animation: featureProgressScale 10s linear forwards
}

.collapse {
    display: block;
    padding: 0;
    margin: 0 0 14px
}

.collapse__item {
    display: block
}

.collapse__item.is-open .collapse__toggle:hover {
    color: var(--blue-50)
}

.collapse__item.is-open .collapse__arrow {
    -webkit-transform: translateY(-50%) rotate(0deg);
    transform: translateY(-50%) rotate(0deg);
    color: var(--blue-50)
}

.collapse__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-top: 1px solid var(--neutral-20)
}

.collapse__toggle {
    font-size: 16px;
    line-height: 20px;
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    font-weight: 600;
    padding: 16px 24px;
    -webkit-transition: color .125s ease;
    transition: color .125s ease;
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.collapse__toggle:hover {
    color: var(--blue-50)
}

.collapse__arrow {
    position: absolute;
    left: -5px;
    top: 50%;
    -webkit-transform: translateY(-50%) rotate(-90deg);
    transform: translateY(-50%) rotate(-90deg);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transition: -webkit-transform .125s ease;
    transition: -webkit-transform .125s ease;
    transition: transform .125s ease;
    transition: transform .125s ease, -webkit-transform .125s ease
}

.collapse__body {
    height: 0;
    opacity: 0;
    overflow: hidden
}

.collapse__body-inner {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: .3px;
    padding-bottom: 20px
}

.collapse__body-inner p:not(:last-child) {
    margin-bottom: 16px
}

.modal {
    display: none;
    position: absolute;
    opacity: 1;
    left: 0;
    z-index: var(--z-modal);
    pointer-events: all
}

.modal.is-visible {
    display: block
}

.modal.is-animated .modal__overlay {
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease;
    opacity: 1
}

.modal.is-animated .modal__content {
    -webkit-transition: -webkit-transform .2s ease-out;
    transition: -webkit-transform .2s ease-out;
    transition: transform .2s ease-out;
    transition: transform .2s ease-out, -webkit-transform .2s ease-out;
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.modal__overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: var(--z-modal-overlay);
    background: rgba(15, 20, 30, .8);
    cursor: pointer;
    overflow: auto;
    opacity: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 5vh 0
}

@media(max-width:767px) {
    .modal__overlay {
        width: 100%;
        min-height: 100vh;
        padding: 0
    }
}

.modal__content {
    width: 544px;
    cursor: default;
    margin: auto;
    background-color: #fff;
    -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, .08), 0 1px 3px rgba(0, 0, 0, .16);
    box-shadow: 0 0 1px rgba(0, 0, 0, .08), 0 1px 3px rgba(0, 0, 0, .16);
    border-radius: 6px;
    position: relative;
    -webkit-transform: translateY(-200px);
    transform: translateY(-200px)
}

@media(max-width:767px) {
    .modal__content {
        width: 100%;
        min-height: 100%;
        border-radius: 0;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

.modal--medium .modal__content {
    width: 680px
}

@media(max-width:767px) {
    .modal--medium .modal__content {
        width: 100%
    }
}

.modal__close {
    position: absolute;
    z-index: 10;
    top: 24px;
    right: 24px;
    width: 24px;
    height: 24px;
    color: var(--neutral-30);
    cursor: pointer
}

.modal__close:hover {
    color: var(--blue-50)
}

.country-modal__container {
    padding: 40px 64px;
    text-align: center
}

@media(max-width:767px) {
    .country-modal__container {
        padding: 0
    }
}

@media(max-width:767px) {
    .country-modal__header {
        height: 64px;
        padding: 0 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: relative;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-bottom: 24px
    }
}

.country-modal__logo {
    display: none;
    width: 120px;
    height: 28px;
    background-size: contain
}

@media(max-width:767px) {
    .country-modal__logo {
        display: block
    }
}

.country-modal__close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    color: var(--neutral-30);
    cursor: pointer
}

.country-modal__close:hover {
    color: var(--blue-50)
}

@media(max-width:767px) {
    .country-modal__close {
        position: static
    }
}

.country-modal__title {
    font-size: 28px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 40px
}

@media(max-width:767px) {
    .country-modal__title {
        text-align: left;
        padding-left: 40px;
        margin-bottom: 24px
    }
}

.country-modal__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap
}

@media(max-width:767px) {
    .country-modal__list {
        padding-left: 40px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.country-modal__item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 24px;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-preferred-size: calc(50% - 40px);
    flex-basis: calc(50% - 40px);
    margin-right: 80px
}

.country-modal__item:nth-child(2n) {
    margin-right: 0
}

@media(max-width:767px) {
    .country-modal__item {
        margin-right: 0
    }
}

.country-modal__item-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer
}

.country-modal__item-content:hover .country-modal__name {
    color: var(--blue-50)
}

.country-modal__flag {
    width: 44px;
    height: 28px;
    background-color: #000;
    -webkit-box-shadow: inset 0 0 0 2px rgba(15, 20, 30, .05);
    box-shadow: inset 0 0 0 2px rgba(15, 20, 30, .05);
    margin-right: 16px;
    background-color: var(--neutral-10);
    background-size: auto 28px;
    background-position: 44px 0;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.country-modal__name {
    text-align: left
}

.country-modal__flag--cz {
    background-position: 0 0
}

.country-modal__flag--dk {
    background-position: -44px 0
}

.country-modal__flag--us {
    background-position: -88px 0
}

.country-modal__flag--es {
    background-position: -132px 0
}

.country-modal__flag--fi {
    background-position: -176px 0
}

.country-modal__flag--fr {
    background-position: -220px 0
}

.country-modal__flag--it {
    background-position: -264px 0
}

.country-modal__flag--nl {
    background-position: -308px 0
}

.country-modal__flag--no {
    background-position: -352px 0
}

.country-modal__flag--pl {
    background-position: -396px 0
}

.country-modal__flag--se {
    background-position: -440px 0
}

.country-modal__flag--sg {
    background-position: -484px 0
}

.country-modal__flag--de {
    background-position: -528px 0
}

.country-modal__flag--gb {
    background-position: -572px 0
}

.country-modal__flag--br {
    background-position: -616px 0
}

.country-modal__flag--jp {
    background-position: -748px 0
}

.country-modal__flag--ro {
    background-position: -792px 0
}

.interview-modal__container {
    padding: 48px 48px 56px
}

@media(max-width:767px) {
    .interview-modal__container {
        padding: 48px 24px
    }
}

.interview-modal__title {
    font-size: 26px;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 18px;
    max-width: 570px
}

.interview-modal__text {
    font-size: 19px;
    line-height: 24px;
    max-width: 540px;
    margin-bottom: 28px
}

.interview-modal__text p+p {
    margin-top: 18px
}

.interview-modal__text a {
    color: var(--blue-50)
}

.interview-modal__text a:hover {
    color: var(--blue-70)
}

.interview-modal__buttons .button {
    margin-right: 18px
}

@media(max-width:767px) {
    .interview-modal__buttons .button {
        width: 100%;
        margin-bottom: 12px
    }
}

.blog-post-preview {
    position: relative;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.blog-post-preview:not(:last-child) {
    border-bottom: 1px solid var(--neutral-20);
    padding-bottom: 28px;
    margin-bottom: 34px
}

@media(max-width:1023px) {
    .blog-post-preview:not(:last-child) {
        padding-bottom: 24px;
        margin-bottom: 28px
    }
}

.blog-post-preview:not(:last-child):before {
    bottom: -1px
}

.blog-post-preview:not(:last-child) .blog-post-preview__title:after {
    bottom: -1px
}

@media(max-width:767px) {
    .blog-post-preview {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.blog-post-preview__publication-info {
    color: var(--neutral-60);
    position: relative
}

.blog-post-preview__publication-info:not(:last-child) {
    margin-bottom: 14px
}

@media(max-width:767px) {
    .blog-post-preview__publication-info {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 12px
    }
}

.blog-post-preview__publication-info p {
    display: inline
}

.blog-post-preview__publication-info strong {
    font-weight: 400
}

.blog-post-preview__publication-info a {
    color: var(--neutral-100);
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
    position: relative;
    z-index: 2
}

.blog-post-preview__publication-info a:hover {
    color: var(--blue-50)
}

.blog-post-preview__publication-info-for-japan-article {
    color: var(--neutral-60);
    position: relative
}

.blog-post-preview__publication-info-for-japan-article:not(:last-child) {
    margin-bottom: 14px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(max-width:767px) {
    .blog-post-preview__publication-info-for-japan-article {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 12px
    }
}

.blog-post-preview__publication-info-for-japan-article p {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.blog-post-preview__publication-info-for-japan-article strong {
    font-weight: 400;
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2
}

.blog-post-preview__publication-info-for-japan-article a {
    color: var(--neutral-100);
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
    position: relative;
    z-index: 2;
    margin-right: 5px
}

.blog-post-preview__publication-info-for-japan-article a:hover {
    color: var(--blue-50)
}

.blog-post-preview__publication-info-for-japan-blog-overview {
    color: var(--neutral-60);
    position: relative
}

.blog-post-preview__publication-info-for-japan-blog-overview:not(:last-child) {
    margin-bottom: 14px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(max-width:767px) {
    .blog-post-preview__publication-info-for-japan-blog-overview {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 12px
    }
}

.blog-post-preview__publication-info-for-japan-blog-overview p {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(max-width:1023px) {
    .blog-post-preview__publication-info-for-japan-blog-overview p {
        display: inline
    }
}

.blog-post-preview__publication-info-for-japan-blog-overview strong {
    font-weight: 400;
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2
}

.blog-post-preview__publication-info-for-japan-blog-overview a {
    color: var(--neutral-100);
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
    position: relative;
    z-index: 2;
    margin-right: 1px
}

.blog-post-preview__publication-info-for-japan-blog-overview a:hover {
    color: var(--blue-50)
}

@media(max-width:1023px) {
    .blog-post-preview__category>p>strong {
        display: none
    }
}

@media(max-width:1023px) {
    .blog-post-preview__author>p>strong {
        display: none
    }
}

@media(max-width:1023px) {
    .blog-post-preview__author:not(:first-child):before {
        content: '·';
        margin: 0 2px
    }
}

.blog-post-preview__author-link {
    position: relative;
    display: inline-block;
    padding-left: 35px;
    z-index: 2
}

@media(min-width:1024px) {
    .blog-post-preview__author-link {
        margin-left: 3px
    }
}

.blog-post-preview__author-avatar {
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    overflow: hidden;
    border-radius: 50%;
    background-color: var(--neutral-15);
    text-align: left
}

.blog-post-preview__author-avatar:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    border: 1px solid hsla(226.1538461538462, 37.1428571429%, 54%, .15);
    border-radius: inherit
}

.blog-post-preview__author-avatar-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center
}

.blog-post-preview__body {
    position: relative
}

.blog-post-preview__title {
    display: block;
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    font-weight: 400;
    word-break: break-word
}

.blog-post-preview__title:not(:last-child) {
    margin-bottom: 16px
}

@media(max-width:1023px) {
    .blog-post-preview__title:not(:last-child) {
        margin-bottom: 12px
    }
}

@media(max-width:767px) {
    .blog-post-preview__title:not(:last-child) {
        margin-bottom: 16px
    }
}

@media(max-width:1199px) {
    .blog-post-preview__title {
        font-size: 32px;
        line-height: 34px
    }
}

@media(max-width:767px) {
    .blog-post-preview__title {
        font-size: 28px;
        line-height: 30px
    }
}

.blog-post-preview__title:after {
    content: '';
    position: absolute;
    top: -33px;
    left: -32px;
    bottom: -33px;
    right: -32px;
    z-index: 1
}

@media(max-width:1023px) {
    .blog-post-preview__title:after {
        top: 0;
        left: 0;
        bottom: 0;
        right: 0
    }
}

.blog-post-preview__title span {
    position: relative
}

.blog-post-preview__abstract {
    position: relative;
    font-family: tt tricks, serif;
    font-size: 19px;
    line-height: 28px
}

.blog-post-preview__abstract:not(:last-child) {
    margin-bottom: 28px
}

@media(max-width:1023px) {
    .blog-post-preview__abstract:not(:last-child) {
        margin-bottom: 24px
    }
}

@media(max-width:767px) {
    .blog-post-preview__abstract:not(:last-child) {
        margin-bottom: 12px
    }
}

@media(max-width:1199px) {
    .blog-post-preview__abstract {
        font-size: 17px;
        line-height: 24px
    }
}

@media(max-width:767px) {
    .blog-post-preview__abstract {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3
    }
}

.blog-post-preview__image-wrapper {
    max-width: 500px;
    margin-bottom: 28px
}

@media(max-width:1023px) {
    .blog-post-preview__image-wrapper {
        margin-bottom: 24px
    }
}

@media(max-width:767px) {
    .blog-post-preview__image-wrapper {
        margin-right: 0;
        margin-bottom: 16px;
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2
    }
}

.blog-post-preview__image {
    width: 100%;
    padding-bottom: 87.5%;
    overflow: hidden;
    border-radius: 6px;
    background-color: var(--neutral-15);
    position: relative;
    text-align: left
}

.blog-post-preview__image:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    border: 1px solid hsla(226.1538461538462, 37.1428571429%, 54%, .15);
    border-radius: inherit
}

.blog-post-preview__image-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center
}

.blog-post-preview--main-post {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 0
}

@media(max-width:767px) {
    .blog-post-preview--main-post {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        text-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
}

.blog-post-preview--main-post .blog-post-preview__aside {
    width: 60%;
    margin-right: 3.7%;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

@media(max-width:767px) {
    .blog-post-preview--main-post .blog-post-preview__aside {
        margin-right: 0;
        margin-bottom: 20px;
        width: 100%;
        max-width: 400px
    }
}

.blog-post-preview--main-post .blog-post-preview__image-wrapper {
    margin-bottom: 0;
    max-width: none;
    height: 100%
}

.blog-post-preview--main-post .blog-post-preview__image {
    height: 100%
}

.blog-post-preview--main-post .blog-post-preview__content {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.blog-post-preview--main-post .blog-post-preview__body {
    position: static;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 0 16px
}

@media(max-width:767px) {
    .blog-post-preview--main-post .blog-post-preview__body {
        padding: 0
    }
}

.blog-post-preview--main-post .blog-post-preview__title:not(:last-child) {
    margin-bottom: 20px
}

@media(max-width:1199px) {
    .blog-post-preview--main-post .blog-post-preview__title:not(:last-child) {
        margin-bottom: 14px
    }
}

.blog-post-preview--main-post .blog-post-preview__title:after {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0
}

.blog-post-preview--main-post .blog-post-preview__publication-info {
    margin-bottom: 20px
}

@media(max-width:1199px) {
    .blog-post-preview--main-post .blog-post-preview__publication-info:not(:last-child) {
        margin-bottom: 14px
    }
}

@media(max-width:767px) {
    .blog-post-preview--main-post .blog-post-preview__publication-info:not(:last-child) {
        margin-bottom: 0
    }
}

.blog-post-preview--main-post .blog-post-preview__abstract {
    margin-bottom: 0
}

@media(max-width:1199px) {
    .blog-post-preview--main-post .blog-post-preview__abstract {
        max-height: 220px
    }
}

@media(max-width:1023px) {
    .blog-post-preview--main-post .blog-post-preview__abstract {
        display: none
    }
}



.blog-post-preview--featured-post {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 100%;
    padding: 8px;
    background-color: currentColor;
    color: var(--neutral-10);
    -webkit-transition: color .125s ease;
    transition: color .125s ease
}

@media(max-width:767px) {
    .blog-post-preview--featured-post {
        padding: 4px
    }
}

.blog-post-preview--featured-post .blog-post-preview__header {
    padding: 12px 16px 0;
    margin: 0 -4px;
    background-color: currentColor;
    -webkit-box-shadow: 0 10px 20px 20px currentColor;
    box-shadow: 0 10px 20px 20px currentColor;
    max-height: 100%;
    overflow: hidden;
    z-index: 1
}

.blog-post-preview--featured-post .blog-post-preview__header-info {
    display: block;
    color: rgba(15, 20, 30, .5)
}

.blog-post-preview--featured-post .blog-post-preview__header-info:not(:last-child) {
    margin-bottom: 8px
}

@media(max-width:1023px) {
    .blog-post-preview--featured-post .blog-post-preview__header-info {
        font-size: 16px;
        line-height: 20px
    }

    .blog-post-preview--featured-post .blog-post-preview__header-info:not(:last-child) {
        margin-bottom: 4px
    }
}

.blog-post-preview--featured-post .blog-post-preview__header-category {
    position: relative;
    z-index: 2;
    -webkit-transition: color .2s ease;
    transition: color .2s ease
}

.blog-post-preview--featured-post .blog-post-preview__header-category:hover {
    color: var(--blue-70)
}

.blog-post-preview--featured-post .blog-post-preview__header-duration:not(:first-child):before {
    content: '·';
    margin: 0 4px
}

@media(max-width:1023px) {
    .blog-post-preview--featured-post .blog-post-preview__header-duration {
        display: none
    }
}

.blog-post-preview--featured-post .blog-post-preview__title {
    font-size: 28px;
    line-height: 30px;
    color: var(--neutral-100)
}

.blog-post-preview--featured-post .blog-post-preview__title:after {
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -8px
}

@media(max-width:1199px) {
    .blog-post-preview--featured-post .blog-post-preview__title {
        font-size: 26px;
        line-height: 28px
    }
}

@media(max-width:767px) {
    .blog-post-preview--featured-post .blog-post-preview__title {
        font-size: 19px;
        line-height: 24px
    }
}

.blog-post-preview--featured-post .blog-post-preview__image-wrapper {
    position: absolute;
    left: 8px;
    right: 8px;
    bottom: 8px;
    margin-bottom: 0
}

@media(max-width:767px) {
    .blog-post-preview--featured-post .blog-post-preview__image-wrapper {
        left: 4px;
        right: 4px;
        bottom: 4px
    }
}

.blog-post-preview--featured-post .blog-post-preview__image {
    background-color: transparent
}

.blog-post-preview--featured-post .blog-post-preview__image:after {
    border: 0
}

.blog-post-preview--aside-post {
    padding: 16px;
    background-color: currentColor;
    color: var(--neutral-10);
    border-radius: 6px
}

.blog-post-preview--aside-post:not(:last-child) {
    border-bottom: 0;
    padding-bottom: 24px
}

.blog-post-preview--aside-post .blog-post-preview__image-wrapper:not(:last-child) {
    margin-bottom: 19px
}

.blog-post-preview--aside-post .blog-post-preview__image {
    background-color: transparent
}

.blog-post-preview--aside-post .blog-post-preview__image:after {
    display: none
}

.blog-post-preview--aside-post .blog-post-preview__author-link {
    color: rgba(15, 20, 30, .5);
    margin-left: 0;
    display: block
}

@media(max-width:1199px) {
    .blog-post-preview--aside-post .blog-post-preview__author-link {
        font-size: 16px;
        line-height: 20px;
        padding-left: 30px
    }
}

.blog-post-preview--aside-post .blog-post-preview__author-link:not(:last-child) {
    margin-bottom: 13px
}

.blog-post-preview--aside-post .blog-post-preview__author-link:hover {
    color: var(--blue-70)
}

@media(max-width:1199px) {
    .blog-post-preview--aside-post .blog-post-preview__author-avatar {
        width: 24px;
        height: 24px
    }
}

.blog-post-preview--aside-post .blog-post-preview__title {
    font-size: 28px;
    line-height: 30px;
    color: var(--neutral-100)
}

@media(max-width:1199px) {
    .blog-post-preview--aside-post .blog-post-preview__title {
        font-size: 22px;
        line-height: 28px
    }
}

.blog-post-preview--aside-post .blog-post-preview__title:after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}

.blog-post-preview--example_post {
    padding: 20px;
    background-color: currentColor;
    color: var(--neutral-10);
    border-radius: 12px;
    text-align: center
}

@media(max-width:1199px) {
    .blog-post-preview--example_post {
        padding: 16px
    }
}

@media(max-width:1023px) {
    .blog-post-preview--example_post {
        padding: 12px
    }
}

.blog-post-preview--example_post:not(:last-child) {
    margin-bottom: 12px;
    padding-bottom: 32px
}

@media(max-width:1199px) {
    .blog-post-preview--example_post:not(:last-child) {
        padding-bottom: 20px
    }
}

.blog-post-preview--example_post .blog-post-preview__image-wrapper {
    margin: 0 12px 16px
}

@media(max-width:1023px) {
    .blog-post-preview--example_post .blog-post-preview__image-wrapper {
        margin: 0 0 12px
    }
}

@media(max-width:767px) {
    .blog-post-preview--example_post .blog-post-preview__image-wrapper {
        -webkit-box-ordinal-group: 1;
        -ms-flex-order: 0;
        order: 0
    }
}

.blog-post-preview--example_post .blog-post-preview__image {
    background-color: transparent
}

.blog-post-preview--example_post .blog-post-preview__image:after {
    border: 0
}

.blog-post-preview--example_post .blog-post-preview__duration {
    color: var(--neutral-100);
    opacity: .4;
    margin-bottom: 4px
}

@media(max-width:1023px) {
    .blog-post-preview--example_post .blog-post-preview__duration {
        font-size: 16px;
        line-height: 20px
    }
}

.blog-post-preview--example_post .blog-post-preview__title {
    font-size: 19px;
    line-height: 24px;
    font-family: tt tricks, serif;
    color: var(--neutral-100)
}

@media(max-width:1023px) {
    .blog-post-preview--example_post .blog-post-preview__title {
        font-size: 14px;
        line-height: 20px
    }
}

.blog-post-preview--example_post .blog-post-preview__title:after {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}

.blog-post-preview--dark .blog-post-preview__title,
.blog-post-preview--dark .blog-post-preview__author-link,
.blog-post-preview--dark .blog-post-preview__author-link:hover {
    color: var(--white)
}

.blog-post-preview--dark .blog-post-preview__header-info {
    color: rgba(255, 255, 255, .5)
}

.blog-post-preview--dark .blog-post-preview__header-category:hover {
    color: var(--white)
}

.blog-post-preview--dark .blog-post-preview__duration {
    color: var(--white)
}

.blog-post-preview--compact {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.blog-post-preview--compact:not(:last-child) {
    border-bottom: 1px solid rgba(101, 110, 131, .15);
    padding-bottom: 40px;
    margin-bottom: 40px
}

@media(max-width:767px) {
    .blog-post-preview--compact:not(:last-child) {
        padding-bottom: 24px;
        margin-bottom: 24px
    }
}

.blog-post-preview--compact .blog-post-preview__aside {
    width: 16.3%;
    margin-right: 32px;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

@media(max-width:767px) {
    .blog-post-preview--compact .blog-post-preview__aside {
        display: none
    }
}

.blog-post-preview--compact .blog-post-preview__image-wrapper {
    margin-bottom: 0
}

.blog-post-preview--compact .blog-post-preview__content {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.blog-post-preview--compact .blog-post-preview__body {
    position: static;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0
}

.blog-post-preview--compact .blog-post-preview__title:not(:last-child) {
    margin-bottom: 20px
}

.blog-post-preview--compact .blog-post-preview__title:after {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0
}

.blog-post-preview--compact .blog-post-preview__publication-info:not(:last-child) {
    margin-bottom: 8px
}

.blog-post-preview--compact .blog-post-preview__abstract {
    display: none
}

.blog-post-preview--compact .blog-post-preview__footer {
    display: none
}

.blog-search {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    position: relative;
    cursor: pointer;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.blog-search:not(:last-child) {
    margin-bottom: 32px
}

.blog-search__inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding-bottom: 14px;
    -webkit-box-shadow: 0 -2px 0 -1px rgba(101, 110, 131, .15) inset;
    box-shadow: 0 -2px 0 -1px rgba(101, 110, 131, .15) inset
}

.blog-search__input {
    border: none;
    padding: 0;
    width: 0
}

@media(max-width:767px) {
    .blog-search__input {
        font-size: 16px;
        line-height: 20px
    }
}

.blog-search__input::-ms-input-placeholder {
    color: var(--neutral-40);
    opacity: 1
}

.blog-search__input::-webkit-input-placeholder {
    color: var(--neutral-40);
    opacity: 1
}

.blog-search__input:-ms-input-placeholder {
    color: var(--neutral-40);
    opacity: 1
}

.blog-search__input::placeholder {
    color: var(--neutral-40);
    opacity: 1
}

.blog-search__spinner {
    width: 100%;
    height: 640px;
    display: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: var(--blue-50)
}

.blog-search__spinner svg {
    -webkit-animation: spinnerRotation .5s infinite linear;
    animation: spinnerRotation .5s infinite linear
}

@media(max-width:767px) {
    .blog-search__spinner {
        height: 50vh
    }
}

.blog-search__spinner--visible {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.blog-search__counter {
    margin-right: auto;
    display: none;
    padding: 12px 0;
    color: var(--neutral-50)
}

@media(max-width:767px) {
    .blog-search__counter {
        font-size: 16px;
        line-height: 20px;
        position: relative;
        top: 48px;
        margin-rigth: 0
    }
}

.blog-search__label {
    color: var(--neutral-100);
    display: block;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease
}

@media(max-width:767px) {
    .blog-search__label {
        display: none
    }
}

.blog-search__icon {
    width: 40px;
    height: 40px;
    color: var(--neutral-100);
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
    margin-right: 4px
}

.blog-search__clear {
    display: none;
    border: none;
    padding: 0;
    width: 24px;
    height: 24px;
    margin-top: 7px;
    margin-right: 12px;
    color: var(--neutral-60);
    border-radius: 50%;
    background-color: var(--neutral-5);
    cursor: pointer;
    -webkit-transition: color .3s ease;
    transition: color .3s ease
}

.blog-search__clear:focus,
.blog-search__clear:hover {
    outline: none;
    color: var(--neutral-100)
}

.blog-search__open-button {
    position: relative;
    padding: 0;
    border: 0;
    margin: 0 16px 0 0
}

.blog-search__open-button svg {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    margin-left: -8px
}

.blog-search__open-button:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 20px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background-color: rgba(101, 110, 131, .15)
}

.blog-search--open {
    cursor: default
}

@media(max-width:767px) {
    .blog-search--open {
        width: 100%;
        background: var(--white)
    }
}

.blog-search--open .blog-search__inner {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    -webkit-box-shadow: 0 -2px 0 -1px var(--blue-50) inset;
    box-shadow: 0 -2px 0 -1px var(--blue-50) inset
}

.blog-search--open .blog-search__label {
    display: none
}

.blog-search--open .blog-search__input {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1
}

@media(max-width:767px) {
    .blog-search--open .blog-search__input {
        width: 100%
    }
}

.blog-search--open .blog-search__icon {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
    margin-right: 0
}

.blog-search--open .blog-search__clear {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1
}


.blog-pagination {
    font-size: 19px;
    line-height: 24px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
    padding-top: 24px;
    border-top: 1px solid var(--neutral-15)
}

.blog-pagination__item {
    font-weight: 400;
    width: 36px;
    height: 36px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 18px;
    color: var(--neutral-50);
    background: 0 0;
    cursor: pointer;
    padding-top: 1px
}

.blog-pagination__item:hover {
    color: var(--blue-50)
}

.blog-pagination__item.blog-pagination__item--active {
    background: var(--blue-50);
    color: var(--white);
    font-weight: 600;
    pointer-events: none
}

.blog-pagination__arrow {
    width: 24px;
    height: 24px;
    position: relative
}

.blog-pagination__arrow:after,
.blog-pagination__arrow:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.blog-pagination__arrow:before {
    background-image: url(../../assets/media/pagination-leftf355209f70db4c1b0895.svg)
}

.blog-pagination__arrow:after {
    opacity: 0;
    background-image: url(../../assets/media/pagination-left-active0e2a16aa298bd3847097.svg)
}

.blog-pagination__arrow:last-child:before {
    background-image: url(../../assets/media/pagination-righte245e125e6196631d727.svg)
}

.blog-pagination__arrow:last-child:after {
    background-image: url(../../assets/media/pagination-right-active820c31caf25fcad07b31.svg)
}

.blog-pagination__arrow:hover:before {
    opacity: 0
}

.blog-pagination__arrow:hover:after {
    opacity: 1
}

.blog-aside {
    position: -webkit-sticky;
    position: sticky;
    top: 96px;
    display: block;
    -webkit-transition: opacity .15s ease;
    transition: opacity .15s ease;
    width: 100%
}

@media(max-width:1023px) {
    .blog-aside {
        position: static
    }
}

.blog-aside__item {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    visibility: hidden;
    -webkit-transition: opacity .35s ease, visibility .35s 0s;
    transition: opacity .35s ease, visibility .35s 0s;
    will-change: opacity, visibility
}

.blog-aside__item:not(:last-child) {
    margin-bottom: 40px
}

.blog-aside__item.show {
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity .35s ease, visibility 0s;
    transition: opacity .35s ease, visibility 0s
}


.blog-aside-toc {
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    position: -webkit-sticky;
    position: sticky;
    top: 96px
}

@media(max-width:1023px) {
    .blog-aside-toc {
        margin-bottom: 30px;
        border-bottom: 1px solid rgba(101, 110, 131, .15)
    }
}

.blog-aside-toc--open .blog-aside-toc__title-chevron {
    background-color: transparent
}

.blog-aside-toc--open .blog-aside-toc__title-chevron:after {
    -webkit-transform: translateY(0) scaleX(1.15) rotate(-45deg);
    transform: translateY(0) scaleX(1.15) rotate(-45deg)
}

.blog-aside-toc--open .blog-aside-toc__title-chevron:before {
    -webkit-transform: translateY(0) scaleX(1.15) rotate(45deg);
    transform: translateY(0) scaleX(1.15) rotate(45deg)
}

.blog-aside-toc__title {
    display: none;
    -webkit-tap-highlight-color: transparent
}

@media(max-width:1023px) {
    .blog-aside-toc__title {
        position: relative;
        display: block;
        color: var(--neutral-60);
        cursor: pointer;
        margin-bottom: 12px;
        padding-left: 26px
    }
}

@media(max-width:767px) {
    .blog-aside-toc__title {
        font-size: 19px;
        line-height: 24px
    }
}

.blog-aside-toc__title-chevron {
    display: none;
    position: absolute;
    left: 0;
    width: 13px;
    height: 1px;
    top: 50%;
    color: var(--neutral-60);
    margin-top: -1px;
    background-color: currentColor;
    -webkit-transition: background-color .15s ease, -webkit-transform .15s ease;
    transition: background-color .15s ease, -webkit-transform .15s ease;
    transition: background-color .15s ease, transform .15s ease;
    transition: background-color .15s ease, transform .15s ease, -webkit-transform .15s ease;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: scaleY(1.3);
    transform: scaleY(1.3)
}

@media(max-width:1023px) {
    .blog-aside-toc__title-chevron {
        display: block
    }
}

.blog-aside-toc__title-chevron:after,
.blog-aside-toc__title-chevron:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: currentColor;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transition: -webkit-transform .15s ease;
    transition: -webkit-transform .15s ease;
    transition: transform .15s ease;
    transition: transform .15s ease, -webkit-transform .15s ease
}

.blog-aside-toc__title-chevron:after {
    -webkit-transform: translateY(3.7px);
    transform: translateY(3.7px)
}

.blog-aside-toc__title-chevron:before {
    -webkit-transform: translateY(-3.7px);
    transform: translateY(-3.7px)
}

.blog-aside-toc__body {
    font-size: 17px;
    line-height: 24px;
    margin: 0 -8px
}

@media(max-width:1023px) {
    .blog-aside-toc__body {
        display: none
    }
}

.blog-aside-toc__progress {
    height: 1px;
    margin: 12px 8px 0;
    background-color: rgba(101, 110, 131, .15)
}

@media(max-width:1023px) {
    .blog-aside-toc__progress {
        display: none
    }
}

.blog-aside-toc__progress-inner {
    height: 100%;
    width: 100%;
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition: -webkit-transform .2s linear;
    transition: -webkit-transform .2s linear;
    transition: transform .2s linear;
    transition: transform .2s linear, -webkit-transform .2s linear;
    background-color: var(--neutral-100)
}

.blog-aside-toc__section {
    position: relative;
    overflow: hidden
}

.blog-aside-toc__section:not(:last-child) {
    margin-bottom: 8px
}

.blog-aside-toc__section:not(:last-child):after {
    content: '';
    position: absolute;
    left: 8px;
    right: 8px;
    height: 1px;
    background-color: rgba(101, 110, 131, .15);
    bottom: 0
}

.blog-aside-toc__section.is-open .blog-aside-toc__list {
    opacity: 1;
    height: auto
}

.blog-aside-toc__section.is-open .blog-aside-toc__chevron {
    -webkit-transform: rotate(0);
    transform: rotate(0)
}

.blog-aside-toc__section-title {
    padding: 4px 16px 12px 0;
    color: var(--neutral-100);
    margin: 0 8px;
    position: relative;
    -webkit-transition: color .125s ease;
    transition: color .125s ease;
    cursor: pointer
}

.blog-aside-toc__chevron {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 8px;
    top: 3px;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transition: -webkit-transform .15s ease;
    transition: -webkit-transform .15s ease;
    transition: transform .15s ease;
    transition: transform .15s ease, -webkit-transform .15s ease
}

.blog-aside-toc__list {
    position: relative;
    height: 0;
    opacity: 0;
    overflow: hidden
}

.blog-aside-toc__list:before {
    content: '';
    position: absolute;
    left: 8px;
    right: 8px;
    height: 1px;
    background-color: rgba(101, 110, 131, .15);
    top: 0
}

.blog-aside-toc__item {
    display: block;
    color: var(--neutral-60);
    padding: 8px;
    border-radius: 6px;
    -webkit-transition: color .125s ease, background-color .125s ease;
    transition: color .125s ease, background-color .125s ease;
    cursor: pointer
}

.blog-aside-toc__item:hover,
.blog-aside-toc__item.active {
    background-color: var(--neutral-5);
    color: var(--neutral-100)
}

.blog-aside-toc__item:last-child {
    margin-bottom: 24px
}

.blog-aside-toc__item:first-child {
    margin-top: 12px
}

.blog-aside-toc--flat .blog-aside-toc__title {
    display: block
}

.blog-aside-toc--flat .blog-aside-toc__list {
    opacity: 1;
    height: auto
}

@media(min-width:1024px) {
    .blog-aside-toc--flat .blog-aside-toc__list:before {
        display: none
    }
}

@media(min-width:1024px) {
    .blog-aside-toc--guide .blog-aside-toc__body {
        overflow: auto;
        max-height: calc(100vh - 108px);
        -webkit-transition: color .3s ease;
        transition: color .3s ease;
        color: transparent
    }

    .blog-aside-toc--guide .blog-aside-toc__body:hover {
        color: rgba(127, 127, 127, .9)
    }

    .blog-aside-toc--guide .blog-aside-toc__body::-webkit-scrollbar,
    .blog-aside-toc--guide .blog-aside-toc__body::-webkit-scrollbar-thumb {
        width: 8px
    }

    .blog-aside-toc--guide .blog-aside-toc__body::-webkit-scrollbar-thumb {
        background-color: currentColor;
        border-radius: 8px
    }
}

.blog-featured-posts {
    overflow: hidden
}

.blog-featured-posts:not(:last-child) {
    margin-bottom: 40px
}

@media(max-width:1199px) {
    .blog-featured-posts {
        overflow: visible
    }
}

.blog-featured-posts__slider {
    position: relative;
    left: 50%;
    width: calc(var(--vw) * 100);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    overflow: hidden
}

.blog-featured-posts__slider-container {
    position: relative;
    margin: 0 auto;
    max-width: var(--blog-desktop-container-width);
    width: 100%;
    padding: 0 var(--blog-desktop-gutter)
}

@media(max-width:1199px) {
    .blog-featured-posts__slider-container {
        padding: 0 var(--blog-tablet-gutter)
    }
}

@media(max-width:767px) {
    .blog-featured-posts__slider-container {
        max-width: 540px;
        padding: 0 var(--blog-phone-gutter)
    }
}

.blog-featured-posts__slider-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
    opacity: 0
}

.blog-featured-posts__slider-container.swiper-container-initialized {
    opacity: 1
}

.blog-featured-posts__slider-inner {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 1000%;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.blog-featured-posts__slider-item {
    height: 500px;
    border-radius: 6px;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent
}

@media(max-width:1199px) {
    .blog-featured-posts__slider-item {
        width: 25vw;
        height: 39vw
    }

    .blog-featured-posts__slider-item:not(:last-child) {
        margin-right: 20px
    }
}

@media(max-width:1023px) {
    .blog-featured-posts__slider-item {
        width: 32vw;
        height: 48vw
    }

    .blog-featured-posts__slider-item:not(:last-child) {
        margin-right: 12px
    }
}

@media(max-width:767px) {
    .blog-featured-posts__slider-item {
        width: 30vw
    }

    .blog-featured-posts__slider-item:not(:last-child) {
        margin-right: 8px
    }
}

@media(max-width:560px) {
    .blog-featured-posts__slider-item {
        width: 40vw;
        height: 75vw;
        max-height: 265px
    }
}

.blog-featured-posts__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 20px 0
}

@media(max-width:767px) {
    .blog-featured-posts__header {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

.blog-featured-posts__title-avatars {
    display: inline-block;
    background-image: url(../../assets/media/avatarsa40aa6fe931b30808558.png);
    background-size: contain;
    width: 61px;
    height: 24px;
    vertical-align: middle;
    margin: 0 2px
}


.blog-post__content .template-slider:first-child {
    margin-top: 0
}

.blog-post__content .template-slider:last-child {
    margin-bottom: 0
}

.blog-post__content .template-slider {
    max-width: 1120px;
    width: calc(100vw - 88px);
    margin: 40px -352px 40px 0
}

@media(max-width:1023px) {
    .blog-post__content .template-slider {
        max-width: 100%;
        width: 100%;
        margin: 24px 0
    }
}

.blog-post__content .template-slider__gallery {
    background: var(--neutral-10);
    border-radius: 6px;
    padding: 32px 0 80px;
    position: relative;
    height: 660px
}

@media(max-width:767px) {
    .blog-post__content .template-slider__gallery {
        height: auto;
        padding: 32px 0 64px
    }
}

.blog-post__content .template-slider__gallery::before,
.blog-post__content .template-slider__gallery::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    height: 100%;
    width: 48px;
    opacity: .7;
    z-index: 5;
    pointer-events: none
}

@media(max-width:767px) {

    .blog-post__content .template-slider__gallery::before,
    .blog-post__content .template-slider__gallery::after {
        width: 32px
    }
}

.blog-post__content .template-slider__gallery::before {
    background: -webkit-gradient(linear, left top, right top, from(var(--neutral-10)), to(transparent));
    background: linear-gradient(to right, var(--neutral-10), transparent);
    left: 0;
    border-radius: 6px 0 0 6px
}

.blog-post__content .template-slider__gallery::after {
    border-radius: 0 6px 6px 0;
    background: -webkit-gradient(linear, right top, left top, from(var(--neutral-10)), to(transparent));
    background: linear-gradient(to left, var(--neutral-10), transparent);
    right: 0
}

.blog-post__content .slick-initialized .slick-slide {
    width: 378px;
    height: 536px;
    -webkit-transform: scale(.9);
    transform: scale(.9);
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease;
    display: block
}

@media(max-width:767px) {
    .blog-post__content .slick-initialized .slick-slide {
        width: 232px;
        height: 326px
    }
}

.blog-post__content .slick-initialized .slick-slide:focus {
    outline: none
}

.blog-post__content .slick-initialized .slick-slide .button {
    color: var(--white);
    opacity: 0;
    position: relative;
    -webkit-transform: scale(.7);
    transform: scale(.7);
    -webkit-transition: all .1s ease;
    transition: all .1s ease
}

.blog-post__content .slick-initialized .slick-active {
    -webkit-transform: scale(1);
    transform: scale(1)
}

.blog-post__content .slick-initialized .slick-active .button {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: opacity .6s .3s ease;
    transition: opacity .6s .3s ease
}

.blog-post__content .template-slider__gallery-item {
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    width: 378px;
    height: 536px;
    margin: 0;
    opacity: 0;
    background: var(--white);
    padding-bottom: 40px;
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 4px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: relative;
    text-align: center;
    -webkit-transition: opacity .1s ease;
    transition: opacity .1s ease
}

@media(max-width:767px) {
    .blog-post__content .template-slider__gallery-item {
        width: 232px;
        height: 326px
    }
}

.blog-post__content .slick-initialized .template-slider__gallery-item {
    opacity: 1
}

.blog-post__content .template-slider__gallery-preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease
}

.blog-post__content .template-slider__colors {
    margin: 16px auto 0;
    position: absolute;
    bottom: 32px;
    left: 0;
    width: 100%;
    height: 32px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    opacity: 0;
    -webkit-transition: opacity .1s ease;
    transition: opacity .1s ease
}

@media(max-width:767px) {
    .blog-post__content .template-slider__colors {
        bottom: 16px
    }
}

.blog-post__content .template-slider__colors--visible {
    opacity: 1
}

.blog-post__content .template-slider__colors-item {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 0 4px;
    opacity: 0;
    -webkit-transform: scale(.5) translateY(10px);
    transform: scale(.5) translateY(10px);
    -webkit-transition: opacity .2s ease, -webkit-transform .2s ease;
    transition: opacity .2s ease, -webkit-transform .2s ease;
    transition: transform .2s ease, opacity .2s ease;
    transition: transform .2s ease, opacity .2s ease, -webkit-transform .2s ease
}

@media(max-width:767px) {
    .blog-post__content .template-slider__colors-item {
        width: 24px;
        height: 24px;
        margin: 0 2px
    }
}

.blog-post__content .template-slider__colors--visible .template-slider__colors-item {
    opacity: 1;
    -webkit-transform: scale(1) translateY(0px);
    transform: scale(1) translateY(0px);
    -webkit-transition: opacity .2s .15s ease, -webkit-transform .2s .15s ease;
    transition: opacity .2s .15s ease, -webkit-transform .2s .15s ease;
    transition: transform .2s .15s ease, opacity .2s .15s ease;
    transition: transform .2s .15s ease, opacity .2s .15s ease, -webkit-transform .2s .15s ease
}

.blog-post__content .template-slider__colors--visible .template-slider__colors-item:nth-child(3) {
    -webkit-transition-delay: .1s;
    transition-delay: .1s
}

.blog-post__content .template-slider__colors--visible .template-slider__colors-item:nth-child(2),
.blog-post__content .template-slider__colors--visible .template-slider__colors-item:nth-child(4) {
    -webkit-transition-delay: .15s;
    transition-delay: .15s
}

.blog-post__content .template-slider__colors-item--locked {
    background: var(--neutral-100) url(../../assets/media/lock-white0485cf30aaccc8755930.svg) no-repeat center;
    background-size: auto 20px
}

.blog-post__content .template-slider__button {
    width: 48px;
    height: 48px;
    background: var(--blue-50) url(../../assets/media/chevron-white37fffd77a0fc944897fc.svg) no-repeat center;
    position: absolute;
    top: calc(50% - 24px);
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    z-index: 10;
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease
}

@media(max-width:767px) {
    .blog-post__content .template-slider__button {
        display: none
    }
}

.blog-post__content .template-slider__button:hover,
.blog-post__content .template-slider__button:focus {
    outline: none;
    background-color: var(--blue-60)
}

.blog-post__content .template-slider__button-previous {
    -webkit-transform: rotate(-180deg);
    transform: rotate(-180deg);
    left: -24px
}

.blog-post__content .template-slider__button-next {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    right: -24px
}

.blog-post__content .template-slider--triggered .template-slider__button {
    opacity: 1
}

.blog-post__content .template-slider__caption {
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-50);
    text-align: center;
    margin-top: 12px
}

.blog-post__content .template-slider__caption strong {
    font-size: 16px;
    line-height: 20px
}

.blog-post__hero {
    color: var(--neutral-5);
    background-color: currentColor
}

@media(max-width:1023px) {
    .blog-post__hero {
        margin-bottom: 8px
    }
}

@media(max-width:767px) {
    .blog-post__hero {
        margin-bottom: 0
    }
}

.blog-post__hero--dark .blog-post__hero-breadcrumbs-item:after {
    border-color: rgba(255, 255, 255, .4)
}

.blog-post__hero--dark .blog-post__hero-breadcrumbs-link {
    color: rgba(255, 255, 255, .4)
}

.blog-post__hero--dark a.blog-post__hero-breadcrumbs-link:hover {
    color: var(--white)
}

.blog-post__hero--dark .blog-post__hero-text {
    color: var(--white)
}

.blog-post__hero--dark .blog-post__hero-author {
    color: rgba(255, 255, 255, .4)
}

.blog-post__hero--dark .blog-post__hero-author .blog-post-preview__author-link {
    color: var(--white)
}

.blog-post__hero--dark .blog-post__hero-author .blog-post-preview__author-link:hover {
    color: var(--white)
}

.blog-post__hero--dark .blog-post__hero-duration {
    color: rgba(255, 255, 255, .4)
}

@media(max-width:1023px) {
    .blog-post__hero--dark .blog-post__hero-illustrator {
        color: rgba(255, 255, 255, .4)
    }

    .blog-post__hero--dark .blog-post__hero-illustrator a {
        border-color: rgba(255, 255, 255, .5)
    }
}

.blog-post__hero-container {
    margin: 0 auto;
    max-width: var(--blog-desktop-container-width);
    width: 100%;
    padding: 0 var(--blog-desktop-gutter)
}

@media(max-width:1199px) {
    .blog-post__hero-container {
        padding: 0 var(--blog-tablet-gutter)
    }
}

@media(max-width:767px) {
    .blog-post__hero-container {
        max-width: 540px;
        padding: 0 var(--blog-phone-gutter)
    }
}

.blog-post--with-single-aside .blog-post__hero-container {
    max-width: 1200px
}

.blog-post__hero-inner {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    padding: 40px 0 60px
}

@media(max-width:1023px) {
    .blog-post__hero-inner {
        padding-top: 64px
    }
}

@media(max-width:767px) {
    .blog-post__hero-inner {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding-bottom: 24px
    }
}

ol.blog-post__hero-breadcrumbs {
    position: absolute;
    top: 22px;
    left: 0;
    right: 0;
    width: 44%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0;
    margin: 0;
    overflow: hidden;
    z-index: 1
}

@media(max-width:1023px) {
    ol.blog-post__hero-breadcrumbs {
        width: auto
    }
}

li.blog-post__hero-breadcrumbs-item {
    padding-right: 24px;
    display: block;
    position: relative;
    overflow: hidden;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

li.blog-post__hero-breadcrumbs-item:last-child {
    -ms-flex-negative: 1;
    flex-shrink: 1
}

@media(max-width:1199px) {
    li.blog-post__hero-breadcrumbs-item {
        font-size: 16px;
        line-height: 20px
    }
}

li.blog-post__hero-breadcrumbs-item:after {
    content: '';
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
    top: 50%;
    right: 12px;
    border: 1px solid rgba(15, 20, 30, .5);
    border-width: 0 1px 1px 0;
    -webkit-transform: translateY(-50%) rotate(-45deg);
    transform: translateY(-50%) rotate(-45deg)
}

li.blog-post__hero-breadcrumbs-item:last-child {
    padding-right: 0
}

li.blog-post__hero-breadcrumbs-item:last-child:after {
    display: none
}

.blog-post__hero-breadcrumbs-link {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: rgba(15, 20, 30, .5);
    -webkit-transition: color .125s ease;
    transition: color .125s ease
}

a.blog-post__hero-breadcrumbs-link:hover {
    color: var(--neutral-90)
}

.blog-post__hero-breadcrumbs-chevron {
    width: 16px;
    height: 16px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 16px;
    flex: 0 0 16px;
    margin: 0 4px
}

.blog-post__hero-text {
    width: var(--blog-column-with-gutter-5);
    margin-right: var(--blog-column-1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    color: var(--neutral-100)
}

@media(max-width:1023px) {
    .blog-post__hero-text {
        width: 39.427%;
        margin-left: 0
    }
}

@media(max-width:767px) {
    .blog-post__hero-text {
        width: 100%;
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
        margin-right: 0;
        text-align: center
    }
}

.blog-post__hero-illustration {
    position: relative;
    margin-right: var(--blog-column-with-gutter-1);
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

@media(max-width:1023px) {
    .blog-post__hero-illustration {
        margin-right: 0
    }
}

@media(max-width:767px) {
    .blog-post__hero-illustration {
        width: 100%;
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
        margin-bottom: 28px
    }
}

.blog-post__hero-image-container {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 544px;
    flex: 0 0 544px;
    width: 100%;
    padding-top: 87.5%;
    position: relative;
    overflow: hidden;
    border-radius: 6px
}

.blog-post__hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center
}

.blog-post__hero-author {
    position: relative;
    margin-bottom: 12px;
    color: rgba(15, 20, 30, .5)
}

.blog-post__hero-author .blog-post-preview__author-link {
    padding-left: 46px;
    color: var(--neutral-100);
    -webkit-transition: color .125s ease;
    transition: color .125s ease
}

.blog-post__hero-author .blog-post-preview__author-link:hover {
    color: var(--blue-50)
}

.blog-post__hero-author .blog-post-preview__author-avatar {
    width: 40px;
    height: 40px
}

.blog-post__hero-title {
    font-weight: 700;
    font-size: 54px;
    line-height: 52px;
    font-weight: 400;
    margin-bottom: 20px;
    word-break: break-word
}

@media(max-width:1199px) {
    .blog-post__hero-title {
        font-weight: 700;
        font-size: 46px;
        line-height: 48px;
        font-weight: 400
    }
}

@media(max-width:1023px) {
    .blog-post__hero-title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px;
        font-weight: 400
    }
}

@media(max-width:767px) {
    .blog-post__hero-title {
        font-size: 32px;
        line-height: 34px;
        font-weight: 400;
        margin-bottom: 26px
    }
}

.blog-post__hero-duration {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: rgba(15, 20, 30, .5)
}

.blog-post__hero-duration-icon {
    width: 20px;
    height: 20px;
    margin-top: -1px;
    margin-right: 8px
}

.blog-post__hero-lead {
    font-size: 28px;
    line-height: 30px;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    margin-bottom: 40px
}

@media(max-width:767px) {
    .blog-post__hero-lead {
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 32px
    }
}

.blog-post__hero-illustrator {
    position: absolute;
    top: calc(100% + 12px);
    right: 0;
    font-size: 16px;
    line-height: 20px;
    color: rgba(15, 20, 30, .5);
    z-index: 1
}

@media(max-width:1023px) {
    .blog-post__hero-illustrator {
        top: auto;
        bottom: 20px
    }
}

@media(max-width:767px) {
    .blog-post__hero-illustrator {
        width: 150px;
        text-align: right
    }
}

.blog-post__hero-illustrator a {
    border-bottom: 1px solid rgba(15, 20, 30, .5)
}

.blog-post__hero-illustrator-text {
    margin-right: 4px
}

@media(max-width:767px) {
    .blog-post__hero-illustrator-text {
        margin-right: 0;
        display: block
    }
}

.blog-post-related {
    margin: 0 auto;
    max-width: var(--blog-desktop-container-width);
    width: 100%;
    padding: 0 var(--blog-desktop-gutter)
}

@media(max-width:1199px) {
    .blog-post-related {
        padding: 0 var(--blog-tablet-gutter)
    }
}

@media(max-width:767px) {
    .blog-post-related {
        max-width: 540px;
        padding: 0 var(--blog-phone-gutter)
    }
}

.blog-post-related {
    margin-bottom: 60px
}

.blog-post-related__header {
    font-size: 32px;
    line-height: 34px;
    margin-bottom: 24px
}

@media(max-width:767px) {
    .blog-post-related__header {
        font-size: 26px;
        line-height: 28px;
        margin-bottom: 20px
    }
}

.blog-post-related__body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    margin-bottom: 24px
}

@media(max-width:1199px) {
    .blog-post-related__body {
        grid-column-gap: 12px
    }
}

@media(max-width:767px) {
    .blog-post-related__body {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 8px;
        grid-column-gap: 8px;
        margin-bottom: 20px
    }
}

.blog-post-related__more {
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
    color: var(--neutral-60)
}

.blog-post-related__more:hover {
    color: var(--blue-50)
}

.blog-post-related__more:hover path {
    fill: var(--blue-50)
}

.blog-post-related__more svg {
    margin-left: 4px
}

.blog-post-related__more path {
    fill: var(--neutral-60);
    -webkit-transition: fill .2s ease;
    transition: fill .2s ease
}

.blog-post-related__item {
    padding-top: 150%;
    border-radius: 6px;
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
    position: relative
}

.blog-post-related__item-inner {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}

.blog-post-sharing {
    margin-top: 32px
}

.blog-post-sharing__title {
    margin-bottom: 4px;
    color: var(--neutral-50);
    text-align: center
}

.blog-post-sharing__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.blog-post-sharing__item {
    width: 48px;
    height: 48px;
    border: 1px solid var(--neutral-20);
    border-radius: 50%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: background-color .2s ease;
    transition: background-color .2s ease
}

.blog-post-sharing__item:hover {
    background-color: var(--neutral-10)
}

.blog-post-sharing__item:not(:last-child) {
    margin-right: 8px
}

.blog-post-sharing__icon {
    width: 24px;
    height: 24px;
    color: var(--neutral-90)
}

.blog-post-sharing__icon.blog-post-sharing__icon--facebook {
    color: var(--facebook-color)
}

.blog-post-sharing__icon.blog-post-sharing__icon--twitter {
    color: var(--twitter-color)
}

.blog-post-sharing__icon.blog-post-sharing__icon--linkedin {
    color: var(--linkedin-color)
}

.blog-post-comments {
    margin: 0 auto;
    max-width: var(--blog-desktop-container-width);
    width: 100%;
    padding: 0 var(--blog-desktop-gutter)
}

@media(max-width:1199px) {
    .blog-post-comments {
        padding: 0 var(--blog-tablet-gutter)
    }
}

@media(max-width:767px) {
    .blog-post-comments {
        max-width: 540px;
        padding: 0 var(--blog-phone-gutter)
    }
}

.blog-post-comments {
    min-height: 150px
}

.blog-post-comments:not(:last-child) {
    margin-bottom: 60px
}

@media(max-width:1023px) {
    .blog-post-comments:not(:last-child) {
        margin-bottom: 40px
    }
}

@media(max-width:767px) {
    .blog-post-comments:not(:last-child) {
        margin-bottom: 0
    }
}

@media(max-width:1023px) {
    .blog-post-comments {
        padding-top: 48px;
        border-top: 1px solid var(--neutral-15)
    }
}

@media(max-width:767px) {
    .blog-post-comments {
        padding: 32px 20px 0
    }
}

.blog-post--with-single-aside .blog-post-comments {
    max-width: 1200px
}

.blog-post-comments.loading {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.blog-post-comments.loading:after {
    content: '';
    width: 36px;
    height: 36px;
    background-image: url(../../assets/media/templates_loader5bfaf6166cab5537c176.svg);
    background-size: 100% 100%;
    background-position: center center;
    -webkit-animation: rotation .5s infinite linear;
    animation: rotation .5s infinite linear;
    margin-bottom: 8px
}

.blog-post-comments .commento-root .commento-logged-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: auto
}

.blog-post-comments .commento-root .commento-login .commento-login-text {
    margin-right: 0
}

.blog-post-comments .commento-root .commento-markdown-button {
    margin: 0
}

.blog-post-comments .commento-root .commento-logged-container .commento-profile-button {
    margin: 6px
}

.blog-post-comments .commento-root .commento-logged-container .commento-profile-button:nth-child(2) {
    -webkit-box-ordinal-group: 4;
    -ms-flex-order: 3;
    order: 3;
    margin-right: 0
}

.blog-post-comments .commento-root .commento-logged-container .commento-profile-button:last-child {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
    white-space: nowrap
}

.blog-post-comments .commento-root .commento-submit-button {
    margin-right: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: var(--white);
    padding: 8px 14px;
    background-color: var(--blue-50);
    -webkit-transition: background-color .2s ease;
    transition: background-color .2s ease;
    border-radius: 4px;
    cursor: pointer;
    -webkit-box-shadow: none;
    box-shadow: none;
    text-transform: none
}

.blog-post-comments .commento-root .commento-submit-button:hover {
    background-color: var(--blue-60)
}

.blog-post-comments .commento-root .commento-submit-button:active {
    background-color: var(--blue-70)
}

.blog-post-comments .commento-root .commento-logged-container .commento-logged-in-as .commento-name {
    position: static;
    line-height: 1.1
}

.blog-post-comments .commento-root .commento-logged-container .commento-logged-in-as {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.blog-post-comments .commento-root .commento-card[style^=border-left] {
    border-left-color: var(--blue-50) !important
}

.blog-post-comments .commento-root a,
.blog-post-comments .commento-root .commento-sort-policy-buttons-container .commento-sort-policy-buttons .commento-sort-policy-button-selected,
.blog-post-comments .commento-root .commento-login-box-container .commento-login-box .commento-email-container .commento-email .commento-email-button {
    color: var(--blue-50)
}

.blog-post-comments .commento-root .commento-sort-policy-buttons-container .commento-sort-policy-buttons .commento-sort-policy-button:last-child {
    padding-right: 0
}


.blog-posts-sort {
    width: 100%;
    padding: 8px 0 0;
    margin: 0 auto 46px
}

.author .blog-posts-sort {
    padding: 8px 8.333% 0
}

@media(max-width:1023px) {
    .author .blog-posts-sort {
        padding: 8px 0 0;
        width: 76.485%
    }
}

@media(max-width:767px) {
    .author .blog-posts-sort {
        width: 100%
    }
}

.blog-posts-sort__label {
    color: var(--neutral-40);
    margin-right: 20px
}

@media(max-width:767px) {
    .blog-posts-sort__label {
        display: none
    }
}

.blog-posts-sort__list {
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid var(--neutral-20)
}

.blog-posts-sort__item {
    list-style: none;
    margin-bottom: -1px
}

.blog-posts-sort__item:not(:last-child) {
    margin-right: 20px
}

.blog-posts-sort__link {
    position: relative;
    display: block;
    padding-bottom: 20px;
    color: var(--neutral-60);
    -webkit-transition: color .125s ease;
    transition: color .125s ease;
    cursor: pointer
}

.blog-posts-sort__link:hover {
    color: var(--neutral-100)
}

.blog-posts-sort__link:before {
    content: '';
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px
}

.blog-posts-sort__link.active {
    cursor: default;
    pointer-events: none;
    color: var(--neutral-100);
    -webkit-box-shadow: inset 0 -2px 0 0 var(--blue-50);
    box-shadow: inset 0 -2px 0 0 var(--blue-50)
}

.blog-post__content .copyable:first-child {
    margin-top: 0
}

.blog-post__content .copyable:last-child {
    margin-bottom: 0
}

.blog-post__content .copyable {
    margin: 40px 0
}

@media(max-width:767px) {
    .blog-post__content .copyable {
        margin: 24px 0
    }
}

.blog-post__content .copyable {
    border: 9px dashed gray;
    -o-border-image: url(../../assets/media/dashed-border610228030153ff84538e.svg);
    border-image: url(../../assets/media/dashed-border610228030153ff84538e.svg);
    border-image-slice: 9;
    border-image-repeat: round;
    padding: 15px 23px 23px;
    position: relative
}

.blog-post__content .copyable *:last-child {
    margin-bottom: 0
}

.blog-post__content .copyable:hover .copyable__button-wrapper {
    opacity: 1
}

@media(max-width:767px) {
    .blog-post__content .copyable {
        padding: 7px
    }
}

.blog-post__content .copyable__label {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    color: var(--neutral-50);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 20px
}

.blog-post__content .copyable__label:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: var(--green-50);
    background-image: url(../../assets/media/tickc69519386faca83a7089.svg);
    background-size: 16px 16px;
    background-position: center center;
    background-repeat: no-repeat;
    margin-right: 12px
}

.blog-post__content .copyable__text ul {
    margin: 0;
    padding-left: 32px
}

.blog-post__content .copyable__text ul li {
    position: relative;
    list-style: none
}

.blog-post__content .copyable__text ul li:not(:last-child) {
    margin-bottom: 4px
}

.blog-post__content .copyable__text ul li:before {
    content: '';
    display: block;
    position: absolute;
    width: 4px;
    height: 4px;
    top: 9px;
    left: -24px;
    background-color: var(--neutral-90);
    border-radius: 50%
}

.blog-post__content .copyable__button-wrapper {
    opacity: 0;
    position: absolute;
    top: 9px;
    right: 23px;
    -webkit-transition: opacity .1s ease;
    transition: opacity .1s ease
}

@media(max-width:1023px) {
    .blog-post__content .copyable__button-wrapper {
        opacity: 1
    }
}

@media(max-width:767px) {
    .blog-post__content .copyable__button-wrapper {
        display: none
    }
}

.blog-post__content .copyable__button {
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-size: 14px;
    line-height: 16px;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    text-align: center;
    padding: 5px 11px;
    border: 1px solid var(--blue-50);
    color: var(--blue-50);
    background-color: transparent
}

.blog-post__content .copyable__button:hover {
    background-color: rgba(26, 145, 240, .07)
}

.blog-post__content .copyable__button:active {
    background-color: rgba(26, 145, 240, .15)
}

.blog-post__content .copyable__tooltip {
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-size: 14px;
    line-height: 16px;
    border-radius: 4px;
    display: inline-block;
    padding: 4px 6px;
    background-color: var(--neutral-70);
    color: var(--white);
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: calc(100% + 8px);
    pointer-events: none;
    opacity: 0;
    -webkit-transition: opacity .1s ease;
    transition: opacity .1s ease
}

.blog-post__content .copyable__tooltip:after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 2px;
    top: calc(100% - 5px);
    position: absolute;
    background-color: var(--neutral-70);
    left: 50%;
    -webkit-transform: translateX(-50%) rotate(45deg);
    transform: translateX(-50%) rotate(45deg)
}

.blog-post__content {}

.blog-post__content .expert-tip:first-child {
    margin-top: 0
}

.blog-post__content .expert-tip:last-child {
    margin-bottom: 0
}

.blog-post__content .expert-tip {
    margin: 40px 0
}

@media(max-width:767px) {
    .blog-post__content .expert-tip {
        margin: 24px 0
    }
}

.blog-post__content .expert-tip {
    width: 100%;
    border-radius: 6px;
    background-color: var(--neutral-5);
    padding: 20px 24px 32px
}

@media(max-width:767px) {
    .blog-post__content .expert-tip {
        padding: 16px 16px 24px
    }
}

.blog-post__content .expert-tip *:last-child {
    margin-bottom: 0
}

.blog-post__content .expert-tip__label {
    position: relative;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-size: 19px;
    line-height: 24px;
    text-transform: capitalize;
    color: var(--neutral-60);
    padding-left: 30px;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--neutral-15)
}

@media(max-width:767px) {
    .blog-post__content .expert-tip__label {
        padding-bottom: 16px
    }
}

.blog-post__content .expert-tip__label:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background-image: url(../../assets/media/expert-tip921510e0a5cf0e851308.svg);
    background-size: contain
}

.blog-post__content .expert-tip__author {
    position: relative;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-size: 19px;
    line-height: 24px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--neutral-15)
}

@media(max-width:767px) {
    .blog-post__content .expert-tip__author {
        padding-bottom: 16px
    }
}

.blog-post__content .expert-tip__author-avatar {
    width: 48px;
    height: 48px;
    background-size: contain;
    border-radius: 50%;
    margin-right: 12px
}

.blog-post__content .expert-tip__author-info {}

.blog-post__content .expert-tip__author-name {
    color: var(--black-400);
    background: 0 0;
    -webkit-transition: color .125s ease;
    transition: color .125s ease
}

.blog-post__content .expert-tip__author-name:hover {
    color: var(--blue-50);
    background: 0 0
}

.blog-post__content .expert-tip__author-name:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}

.blog-post__content .expert-tip__author-title {
    color: var(--neutral-60)
}

.blog-post__content .expert-tip__text {}

.blog-post__content {}

.blog-post__content .stat-insight:first-child {
    margin-top: 0
}

.blog-post__content .stat-insight:last-child {
    margin-bottom: 0
}

.blog-post__content .stat-insight {
    margin: 40px 0
}

@media(max-width:767px) {
    .blog-post__content .stat-insight {
        margin: 24px 0
    }
}

.blog-post__content .stat-insight {
    width: 100%;
    border-radius: 6px;
    background-color: var(--neutral-5);
    padding: 20px 24px 32px
}

@media(max-width:767px) {
    .blog-post__content .stat-insight {
        margin: 32px 0;
        padding: 16px 16px 24px
    }
}

.blog-post__content .stat-insight *:last-child {
    margin-bottom: 0
}

.blog-post__content .stat-insight__label {
    position: relative;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-size: 19px;
    line-height: 24px;
    text-transform: capitalize;
    color: var(--neutral-60);
    padding-left: 30px;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--neutral-15)
}

@media(max-width:767px) {
    .blog-post__content .stat-insight__label {
        padding-bottom: 16px
    }
}

.blog-post__content .stat-insight__label:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background-image: url(../../assets/media/stat-insighta0e082b82712625727ef.svg);
    background-size: contain
}

.blog-post__content .stat-insight__text {}

.embed-code {
    width: 100%;
    background-color: var(--neutral-70);
    border-radius: 8px;
    margin: 24px 0
}

.embed-code:first-child {
    margin-top: 0
}

.embed-code:last-child {
    margin-bottom: 0
}

.embed-code__content {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, liberation mono, courier new, monospace;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    color: var(--neutral-20);
    border-radius: 8px 8px 0 0;
    background: 0 0;
    border: 1px solid transparent;
    border-bottom: 1px solid var(--neutral-80);
    resize: none;
    padding: 15px;
    display: block
}

.embed-code__content::-moz-selection {
    background-color: var(--neutral-80);
    color: var(--white)
}

.embed-code__content::selection {
    background-color: var(--neutral-80);
    color: var(--white)
}

.embed-code__toolbar {
    padding: 16px 12px
}

.embed-code__button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    border: none;
    cursor: pointer
}

.embed-code__button:hover {
    opacity: .7
}

.embed-code__button-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    background-image: url(../../assets/media/copy-embed-codefe6583ec7a6944916326.svg);
    background-size: 24px 24px
}

.embed-code__button-text {
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-size: 19px;
    line-height: 24px;
    color: var(--white)
}

.checkbox {
    display: block;
    position: relative;
    padding-left: 36px;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none
}

@media(max-width:767px) {
    .checkbox {
        font-size: 16px;
        line-height: 20px
    }
}

.checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0
}

.checkbox__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    border: 1px solid var(--neutral-20);
    border-radius: 4px
}

.checkbox input:checked~.checkbox__checkmark {
    background-color: var(--blue-50);
    border: 1px solid var(--blue-50)
}

.checkbox__checkmark:after {
    content: '';
    position: absolute;
    display: none
}

.checkbox input:checked~.checkbox__checkmark:after {
    display: block
}

.checkbox .checkbox__checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.checkbox--toggle {
    padding-left: 0;
    min-height: 18px;
    margin-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.checkbox--toggle:not(:last-child) {
    margin-bottom: 12px
}

.checkbox--toggle .checkbox__checkmark {
    position: relative;
    width: 30px;
    height: 18px;
    border: 0;
    border-radius: 9px;
    background-color: var(--neutral-20);
    -webkit-transition: background-color .125s ease;
    transition: background-color .125s ease
}

.checkbox--toggle .checkbox__checkmark:not(:last-child) {
    margin-right: 12px
}

.checkbox--toggle .checkbox__checkmark:before {
    content: '';
    position: absolute;
    width: 150%;
    height: 180%;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

.checkbox--toggle .checkbox__checkmark:after {
    display: block;
    top: 2px;
    left: 2px;
    width: 14px;
    height: 14px;
    border: 0;
    border-radius: 50%;
    background: var(--white);
    -webkit-transform: none;
    transform: none;
    -webkit-transition: -webkit-transform .125s ease;
    transition: -webkit-transform .125s ease;
    transition: transform .125s ease;
    transition: transform .125s ease, -webkit-transform .125s ease
}

.checkbox--toggle input:checked~.checkbox__checkmark {
    border: 0;
    background-color: var(--blue-50)
}

.checkbox--toggle input:checked~.checkbox__checkmark:after {
    -webkit-transform: translateX(12px);
    transform: translateX(12px)
}

.video-cta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin-bottom: 40px
}

@media(max-width:767px) {
    .video-cta {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.video-cta--card {
    padding: 40px;
    margin: 56px 0;
    background-color: var(--white);
    border-radius: 4px
}

@media(max-width:1023px) {
    .video-cta--card {
        padding: 32px;
        margin: 40px -32px
    }
}

@media(max-width:767px) {
    .video-cta--card {
        padding: 20px;
        margin-left: 0;
        margin-right: 0
    }
}

.video-cta--card:last-child {
    margin-bottom: 0
}

.video-cta__visual {
    position: relative;
    overflow: hidden;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 545px;
    margin-right: 32px;
    border-radius: 4px;
    background-color: var(--neutral-10)
}

.video-cta__visual:before {
    content: '';
    display: block;
    padding-bottom: 75%
}

@media(max-width:1023px) {
    .video-cta__visual {
        width: 450px
    }
}

@media(max-width:767px) {
    .video-cta__visual {
        width: 100%;
        margin-bottom: 20px
    }
}

.video-cta__image,
.video-cta__video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%
}

.video-cta__image {
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover
}

.video-cta__image--mobile {
    display: none
}

@media(max-width:1023px) {
    .video-cta__image--mobile {
        display: block
    }
}

@media(max-width:1023px) {
    .video-cta__image--desktop {
        display: none
    }
}

.video-cta__content {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 350px
}

@media(min-width:768px) {
    .video-cta--card .video-cta__content {
        -ms-flex-item-align: center;
        align-self: center
    }
}

.video-cta__icon {
    margin-bottom: 24px;
    width: 56px;
    height: 56px;
    background-repeat: no-repeat;
    background-size: contain
}

@media(max-width:767px) {
    .video-cta__icon {
        display: none
    }
}

.video-cta__title {
    font-size: 28px;
    line-height: 30px;
    display: block;
    margin-bottom: 8px
}

.video-cta__description {
    margin-bottom: 16px
}

@-webkit-keyframes fly1 {
    0% {
        -webkit-transform: translateX(-3px) translateY(-3px);
        transform: translateX(-3px) translateY(-3px)
    }

    25% {
        -webkit-transform: translateX(-3px) translateY(3px);
        transform: translateX(-3px) translateY(3px)
    }

    50% {
        -webkit-transform: translateX(3px) translateY(5px);
        transform: translateX(3px) translateY(5px)
    }

    100% {
        -webkit-transform: translateX(-3px) translateY(-3px);
        transform: translateX(-3px) translateY(-3px)
    }
}

@keyframes fly1 {
    0% {
        -webkit-transform: translateX(-3px) translateY(-3px);
        transform: translateX(-3px) translateY(-3px)
    }

    25% {
        -webkit-transform: translateX(-3px) translateY(3px);
        transform: translateX(-3px) translateY(3px)
    }

    50% {
        -webkit-transform: translateX(3px) translateY(5px);
        transform: translateX(3px) translateY(5px)
    }

    100% {
        -webkit-transform: translateX(-3px) translateY(-3px);
        transform: translateX(-3px) translateY(-3px)
    }
}

@-webkit-keyframes fly2 {
    0% {
        -webkit-transform: translateX(0px) translateY(-5px);
        transform: translateX(0px) translateY(-5px)
    }

    33% {
        -webkit-transform: translateX(-7px) translateY(2px);
        transform: translateX(-7px) translateY(2px)
    }

    80% {
        -webkit-transform: translateX(3px) translateY(5px);
        transform: translateX(3px) translateY(5px)
    }

    100% {
        -webkit-transform: translateX(0px) translateY(-5px);
        transform: translateX(0px) translateY(-5px)
    }
}

@keyframes fly2 {
    0% {
        -webkit-transform: translateX(0px) translateY(-5px);
        transform: translateX(0px) translateY(-5px)
    }

    33% {
        -webkit-transform: translateX(-7px) translateY(2px);
        transform: translateX(-7px) translateY(2px)
    }

    80% {
        -webkit-transform: translateX(3px) translateY(5px);
        transform: translateX(3px) translateY(5px)
    }

    100% {
        -webkit-transform: translateX(0px) translateY(-5px);
        transform: translateX(0px) translateY(-5px)
    }
}

@-webkit-keyframes list1 {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    12.5% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    37.5% {
        -webkit-transform: translateX(9%);
        transform: translateX(9%)
    }

    62.5% {
        -webkit-transform: translateX(9%);
        transform: translateX(9%)
    }

    80.75% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes list1 {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    12.5% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    37.5% {
        -webkit-transform: translateX(9%);
        transform: translateX(9%)
    }

    62.5% {
        -webkit-transform: translateX(9%);
        transform: translateX(9%)
    }

    80.75% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@-webkit-keyframes list2 {
    0% {
        -webkit-transform: translateX(0) rotate(9.33deg);
        transform: translateX(0) rotate(9.33deg)
    }

    12.5% {
        -webkit-transform: translateX(0) rotate(9.33deg);
        transform: translateX(0) rotate(9.33deg)
    }

    37.5% {
        -webkit-transform: translateX(-14%) rotate(0);
        transform: translateX(-14%) rotate(0)
    }

    62.5% {
        -webkit-transform: translateX(-14%) rotate(0);
        transform: translateX(-14%) rotate(0)
    }

    80.75% {
        -webkit-transform: translateX(0) rotate(9.33deg);
        transform: translateX(0) rotate(9.33deg)
    }

    100% {
        -webkit-transform: translateX(0) rotate(9.33deg);
        transform: translateX(0) rotate(9.33deg)
    }
}

@keyframes list2 {
    0% {
        -webkit-transform: translateX(0) rotate(9.33deg);
        transform: translateX(0) rotate(9.33deg)
    }

    12.5% {
        -webkit-transform: translateX(0) rotate(9.33deg);
        transform: translateX(0) rotate(9.33deg)
    }

    37.5% {
        -webkit-transform: translateX(-14%) rotate(0);
        transform: translateX(-14%) rotate(0)
    }

    62.5% {
        -webkit-transform: translateX(-14%) rotate(0);
        transform: translateX(-14%) rotate(0)
    }

    80.75% {
        -webkit-transform: translateX(0) rotate(9.33deg);
        transform: translateX(0) rotate(9.33deg)
    }

    100% {
        -webkit-transform: translateX(0) rotate(9.33deg);
        transform: translateX(0) rotate(9.33deg)
    }
}

@-webkit-keyframes list3 {
    0% {
        -webkit-transform: translateX(0) rotate(23.97deg);
        transform: translateX(0) rotate(23.97deg)
    }

    12.5% {
        -webkit-transform: translateX(0) rotate(23.97deg);
        transform: translateX(0) rotate(23.97deg)
    }

    37.5% {
        -webkit-transform: translateX(-50%) rotate(0);
        transform: translateX(-50%) rotate(0)
    }

    62.5% {
        -webkit-transform: translateX(-50%) rotate(0);
        transform: translateX(-50%) rotate(0)
    }

    80.75% {
        -webkit-transform: translateX(0) rotate(23.97deg);
        transform: translateX(0) rotate(23.97deg)
    }

    100% {
        -webkit-transform: translateX(0) rotate(23.97deg);
        transform: translateX(0) rotate(23.97deg)
    }
}

@keyframes list3 {
    0% {
        -webkit-transform: translateX(0) rotate(23.97deg);
        transform: translateX(0) rotate(23.97deg)
    }

    12.5% {
        -webkit-transform: translateX(0) rotate(23.97deg);
        transform: translateX(0) rotate(23.97deg)
    }

    37.5% {
        -webkit-transform: translateX(-50%) rotate(0);
        transform: translateX(-50%) rotate(0)
    }

    62.5% {
        -webkit-transform: translateX(-50%) rotate(0);
        transform: translateX(-50%) rotate(0)
    }

    80.75% {
        -webkit-transform: translateX(0) rotate(23.97deg);
        transform: translateX(0) rotate(23.97deg)
    }

    100% {
        -webkit-transform: translateX(0) rotate(23.97deg);
        transform: translateX(0) rotate(23.97deg)
    }
}

.post-banner-cta {
    position: relative;
    display: block;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 16px
}

.post-banner-cta:first-child {
    margin-top: 0
}

.post-banner-cta:last-child {
    margin-bottom: 0
}

.post-banner-cta:hover .post-banner-cta__button {
    background-color: var(--neutral-100)
}

.post-banner-cta__main {
    min-height: 220px;
    border-radius: 6px 6px 0 0;
    background-color: var(--beige-10);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 12px 0 24px
}

.post-banner-cta__image {
    position: relative;
    top: 0;
    left: 0;
    margin-bottom: 24px;
    width: 100%;
    padding-bottom: 87.5%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 100%
}

.post-banner-cta__image:after {
    content: '';
    display: block;
    top: 100%;
    left: 24px;
    right: 24px;
    position: absolute;
    height: 2px;
    background-color: var(--neutral-90)
}

@media(max-height:655px) {
    .post-banner-cta__image {
        padding-bottom: 50%
    }
}

.post-banner-cta__animation {
    position: relative;
    margin-bottom: 24px;
    width: 100%;
    padding-bottom: 88%;
    overflow: hidden
}

.post-banner-cta__animation-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover
}

.post-banner-cta:hover .post-banner-cta__animation-frame {
    left: 10px
}

.post-banner-cta__animation-frame:nth-child(1) {
    background-image: url(../../assets/media/paper-1df44411a2af51326c9d2.svg);
    -webkit-animation: fly1 5s linear infinite;
    animation: fly1 5s linear infinite;
    -webkit-transition: left .7s ease;
    transition: left .7s ease
}

.post-banner-cta__animation-frame:nth-child(2) {
    background-image: url(../../assets/media/paper-2ddf0177e838c7bc89d07.svg);
    -webkit-animation: fly2 4s linear infinite;
    animation: fly2 4s linear infinite;
    -webkit-transition: left .6s ease;
    transition: left .6s ease
}

.post-banner-cta__animation-frame:nth-child(3) {
    background-image: url(../../assets/media/girl608127cda3a2cd5df1d0.svg);
    -webkit-animation: fly1 3s linear infinite;
    animation: fly1 3s linear infinite;
    -webkit-transition: left .3s ease;
    transition: left .3s ease
}

.post-banner-cta__animation-frame:nth-child(4) {
    background-image: url(../../assets/media/boy82e3ca0dd0703c0e6f3b.svg);
    -webkit-animation: fly2 3s .5s linear infinite;
    animation: fly2 3s .5s linear infinite;
    -webkit-transition: left .4s ease;
    transition: left .4s ease
}

.post-banner-cta__text {
    padding: 0 24px;
    width: 100%;
    text-align: center
}

.post-banner-cta__title {
    font-size: 26px;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 4px
}

.post-banner-cta__caption {
    font-size: 16px;
    line-height: 20px
}

.post-banner-cta__button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 16px 24px;
    border-radius: 0 0 6px 6px;
    background-color: var(--neutral-90);
    color: var(--white);
    font-weight: 600;
    -webkit-transition: background-color .15s;
    transition: background-color .15s
}

.post-banner-cta__button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1
}

.post-banner-cta__title--top {
    display: none;
    text-align: center;
    font-size: 19px;
    line-height: 24px;
    padding: 0 20px
}

.post-banner-cta.post-banner-cta--small .post-banner-cta__title--top {
    display: block
}

.post-banner-cta.post-banner-cta--small .post-banner-cta__text {
    display: none
}

.post-banner-cta.post-banner-cta--small .post-banner-cta__main {
    padding-bottom: 0
}

.post-banner-cta.post-banner-cta--small .post-banner-cta__image,
.post-banner-cta.post-banner-cta--small .post-banner-cta__animation {
    margin-bottom: 0
}

.post-banner-cta.post-banner-cta--small .post-banner-cta__animation {
    padding-bottom: 60%
}

.post-banner-cta.post-banner-cta--small .post-banner-cta__animation-frame:nth-child(1) {
    background-image: url(../../assets/media/paper-1716f069f736c2df8d336.svg)
}

.post-banner-cta.post-banner-cta--small .post-banner-cta__animation-frame:nth-child(2) {
    background-image: url(../../assets/media/paper-26ce34c8404957997408a.svg)
}

.post-banner-cta.post-banner-cta--small .post-banner-cta__animation-frame:nth-child(3) {
    background-image: url(../../assets/media/girlf4d2e9b804eeb023e4b7.svg)
}

.post-banner-cta.post-banner-cta--small .post-banner-cta__animation-frame:nth-child(4) {
    background-image: url(../../assets/media/boyfe16c6de65f920c44812.svg)
}

.post-banner-cta.post-banner-cta--wide {
    width: 100%;
    margin: 24px auto 48px
}

@media(min-width:768px) {
    .post-banner-cta.post-banner-cta--wide {
        margin-top: 40px;
        margin-bottom: 40px
    }

    .post-banner-cta.post-banner-cta--wide .post-banner-cta__main {
        padding-left: 320px;
        padding-right: 32px
    }

    .post-banner-cta.post-banner-cta--wide .post-banner-cta__image {
        position: absolute;
        top: auto;
        bottom: 0;
        left: 40px;
        width: 240px;
        height: 210px;
        padding-bottom: 0;
        margin-bottom: 0
    }

    .post-banner-cta.post-banner-cta--wide .post-banner-cta__image:after {
        display: none
    }

    .post-banner-cta.post-banner-cta--wide .post-banner-cta__animation {
        position: absolute;
        top: auto;
        bottom: 0;
        left: 40px;
        width: 240px;
        height: 210px;
        padding-bottom: 0;
        margin-bottom: 0
    }

    .post-banner-cta.post-banner-cta--wide .post-banner-cta__text {
        padding: 0;
        text-align: left
    }

    .post-banner-cta.post-banner-cta--wide .post-banner-cta__title {
        margin-bottom: 8px
    }

    .post-banner-cta.post-banner-cta--wide .post-banner-cta__caption {
        font-size: 19px;
        line-height: 24px
    }

    .post-banner-cta.post-banner-cta--wide .post-banner-cta__button {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

@media(max-width:1200px) and (min-width:1023px) {
    .post-banner-cta.post-banner-cta--wide .post-banner-cta__main {
        padding: 24px 32px;
        min-height: 140px
    }

    .post-banner-cta.post-banner-cta--wide .post-banner-cta__image,
    .post-banner-cta.post-banner-cta--wide .post-banner-cta__animation {
        display: none
    }
}

@media(max-width:767px) {
    .post-banner-cta.post-banner-cta--wide {
        max-width: 375px
    }
}

.post-banner-cta.post-banner-cta--wide:last-child {
    margin-bottom: 0
}

.post-banner-cta.post-banner-cta--new {
    background-color: var(--indigo-60);
    border-radius: 6px;
    overflow: hidden
}

.post-banner-cta.post-banner-cta--new:hover .post-banner-cta__main:after {
    opacity: 0
}

.post-banner-cta.post-banner-cta--new:hover .post-banner-cta__animation-frame {
    left: 0
}

.post-banner-cta.post-banner-cta--new:hover .post-banner-cta__button {
    background-color: var(--indigo-70)
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__animation-frame {
    background: 0 0;
    height: auto
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__animation-frame-inner {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__animation {
    margin-bottom: 0;
    padding-bottom: 81%
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__animation-frame:nth-child(1) {
    width: 32%;
    top: 17%;
    left: 55%;
    -webkit-transform: rotate(23.97deg);
    transform: rotate(23.97deg);
    -webkit-animation: list3 5s ease-in-out alternate infinite;
    animation: list3 5s ease-in-out alternate infinite
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__animation-frame:nth-child(1) .post-banner-cta__animation-frame-inner {
    padding-top: 135.1%;
    background-image: url(../../assets/media/berlin0debacd5f8397a4d4241.png)
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__animation-frame:nth-child(2) {
    width: 46.5%;
    top: 10%;
    left: 37%;
    -webkit-transform: rotate(9.33deg);
    transform: rotate(9.33deg);
    -webkit-animation: list2 5s ease-in-out alternate infinite;
    animation: list2 5s ease-in-out alternate infinite
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__animation-frame:nth-child(2) .post-banner-cta__animation-frame-inner {
    padding-top: 132%;
    background-image: url(../../assets/media/vancouver9d3120fb871d1b388ba1.png)
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__animation-frame:nth-child(3) {
    width: 69%;
    left: 14%;
    -webkit-animation: list1 5s ease-in-out alternate infinite;
    animation: list1 5s ease-in-out alternate infinite
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__animation-frame:nth-child(3) .post-banner-cta__animation-frame-inner {
    padding-top: 126.7%;
    background-image: url(../../assets/media/vienna4df99d931956e3ddf987.png)
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__main {
    position: relative;
    color: var(--white);
    padding: 16px 0 24px;
    border-radius: 0;
    background-color: transparent;
    -webkit-transition: opacity .15s;
    transition: opacity .15s
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__main:after {
    content: '';
    position: absolute;
    top: 100%;
    height: 1px;
    left: 16px;
    right: 16px;
    background-color: rgba(255, 255, 255, .2)
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__title {
    font-weight: 400;
    margin-bottom: 8px
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__caption {
    color: rgba(255, 255, 255, .6)
}

.post-banner-cta.post-banner-cta--new .post-banner-cta__button {
    border-radius: 0;
    font-weight: 400;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: transparent
}

.subscribe-newsletter {
    position: relative;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    width: 100%
}

.subscribe-newsletter:not(:last-child) {
    border-bottom: 1px solid var(--neutral-15)
}

.subscribe-newsletter__inner {
    position: relative;
    max-width: 600px;
    margin: 0 auto
}

@media(max-width:1023px) {
    .subscribe-newsletter__inner {
        margin: 0;
        max-width: 520px
    }
}

.subscribe-newsletter__illustration {
    position: absolute;
    top: 50%;
    width: 200px;
    height: 200px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background-size: contain
}

@media(max-width:1199px) {
    .subscribe-newsletter__illustration {
        width: 130px;
        height: 130px
    }
}

.subscribe-newsletter__illustration--left {
    right: calc(100% + 65px)
}

@media(max-width:1199px) {
    .subscribe-newsletter__illustration--left {
        right: calc(100% + 25px)
    }
}

@media(max-width:1023px) {
    .subscribe-newsletter__illustration--left {
        display: none
    }
}

.subscribe-newsletter__illustration--right {
    left: calc(100% + 65px)
}

@media(max-width:1199px) {
    .subscribe-newsletter__illustration--right {
        left: calc(100% + 25px)
    }
}

@media(max-width:767px) {
    .subscribe-newsletter__illustration--right {
        display: none
    }
}

.subscribe-newsletter__container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 20px 0
}

@media(max-width:1023px) {
    .subscribe-newsletter__container {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start
    }
}

@media(max-width:767px) {
    .subscribe-newsletter__container {
        padding: 0 0 20px
    }
}

.subscribe-newsletter__container.show-icon .subscribe-newsletter__icon-success path {
    -webkit-animation: subscribeNewsletterDash .5s cubic-bezier(.22, .61, .36, 1) normal forwards;
    animation: subscribeNewsletterDash .5s cubic-bezier(.22, .61, .36, 1) normal forwards
}

.subscribe-newsletter__container--success {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0;
    visibility: hidden
}

.subscribe-newsletter__icon-success {
    width: 56px;
    height: 56px;
    margin-bottom: 3px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: -webkit-transform .35s ease;
    transition: -webkit-transform .35s ease;
    transition: transform .35s ease;
    transition: transform .35s ease, -webkit-transform .35s ease
}

.subscribe-newsletter__icon-success path {
    stroke-dasharray: 28;
    stroke-dashoffset: 28
}

.subscribe-newsletter__title {
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    text-align: center;
    font-weight: 400
}

.subscribe-newsletter__title:not(:last-child) {
    margin-bottom: 12px
}

@media(max-width:1199px) {
    .subscribe-newsletter__title {
        font-size: 32px;
        line-height: 34px
    }
}

@media(max-width:1023px) {
    .subscribe-newsletter__title {
        font-size: 28px;
        line-height: 30px;
        text-align: left
    }

    .subscribe-newsletter__title:not(:last-child) {
        margin-bottom: 8px
    }
}

.subscribe-newsletter__description {
    text-align: center;
    width: 100%
}

.subscribe-newsletter__description:not(:last-child) {
    margin-bottom: 20px
}

@media(max-width:1023px) {
    .subscribe-newsletter__description {
        text-align: left
    }
}

.subscribe-newsletter__description-avatars {
    display: inline-block;
    background-image: url(../../assets/media/avatarsa40aa6fe931b30808558.png);
    background-size: contain;
    width: 61px;
    height: 24px;
    vertical-align: middle;
    margin: 0 2px
}

.subscribe-newsletter__body {
    width: 100%
}

.subscribe-newsletter__form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%
}

.subscribe-newsletter__form:not(:last-child) {
    margin-bottom: 48px
}

@media(max-width:767px) {
    .subscribe-newsletter__form:not(:last-child) {
        margin-bottom: 24px
    }
}

@media(max-width:1023px) {
    .subscribe-newsletter__form {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
    }
}

.subscribe-newsletter__form .field {
    width: 100%;
    max-width: 320px;
    margin-right: 12px;
    margin-bottom: 0
}

.subscribe-newsletter__form-button {
    position: relative
}

.subscribe-newsletter__form-button svg {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

.subscribe-newsletter__form-button svg path {
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: spinnerRotation .5s infinite linear;
    animation: spinnerRotation .5s infinite linear
}

.subscribe-newsletter__form-button--show-spinner {
    pointer-events: none
}

.subscribe-newsletter__form-button--show-spinner span {
    opacity: 0
}

.subscribe-newsletter__form-button--show-spinner svg {
    display: block
}

.subscribe-newsletter__privacy {
    font-size: 14px;
    line-height: 16px;
    color: var(--neutral-40)
}

@media(max-width:767px) {
    .subscribe-newsletter__privacy {
        text-align: center
    }
}

.subscribe-newsletter__privacy .subscribe-newsletter__privacy-link {
    color: var(--neutral-50);
    background: 0 0
}

.subscribe-newsletter__privacy .subscribe-newsletter__privacy-link:hover {
    background: 0 0
}

.subscribe-newsletter__form-inner {
    position: relative
}

.recaptcha-wrapper {
    display: none;
    position: absolute;
    top: calc(100% + 13px);
    left: 0;
    padding: 16px 18px 20px 19px;
    background-color: var(--white);
    border-radius: 20px;
    -webkit-box-shadow: 0 6px 8px -2px rgba(15, 56, 113, .02), 0 16px 64px -8px rgba(15, 56, 113, .18);
    box-shadow: 0 6px 8px -2px rgba(15, 56, 113, .02), 0 16px 64px -8px rgba(15, 56, 113, .18);
    -webkit-transition: -webkit-box-shadow .2s ease;
    transition: -webkit-box-shadow .2s ease;
    transition: box-shadow .2s ease;
    transition: box-shadow .2s ease, -webkit-box-shadow .2s ease;
    z-index: 1
}

@media(max-width:767px) {
    .recaptcha-wrapper {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }
}

.recaptcha-wrapper--error {
    -webkit-box-shadow: 0 6px 8px -2px rgba(113, 15, 15, .084), 0 16px 64px -8px rgba(113, 15, 15, .381);
    box-shadow: 0 6px 8px -2px rgba(113, 15, 15, .084), 0 16px 64px -8px rgba(113, 15, 15, .381)
}

.recaptcha-message {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 4px;
    color: var(--neutral-50)
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-blog .subscribe-newsletter__title {
        font-size: 19px;
        line-height: 24px
    }
}

.subscribe-newsletter--inside-blog .subscribe-newsletter__description {
    color: var(--neutral-60)
}

.subscribe-newsletter--inside-blog .subscribe-newsletter__container--init .subscribe-newsletter__title {
    margin-bottom: 16px
}

.subscribe-newsletter--inside-blog .subscribe-newsletter__container--init .subscribe-newsletter__description {
    color: var(--neutral-60)
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-blog .subscribe-newsletter__container--init .subscribe-newsletter__description {
        display: none
    }
}

@media(max-width:1023px) {
    .subscribe-newsletter--inside-blog .subscribe-newsletter__container--success {
        padding-left: 72px
    }
}

@media(max-width:1023px) {
    .subscribe-newsletter--inside-blog .subscribe-newsletter__icon-success {
        position: absolute;
        top: 20px;
        left: 0
    }
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-blog .subscribe-newsletter__icon-success {
        top: 0
    }
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-blog .recaptcha-wrapper {
        right: 0;
        left: auto;
        -webkit-transform: none;
        transform: none
    }
}

.subscribe-newsletter--inside-post {
    background-color: var(--neutral-5);
    border-radius: 6px;
    margin-top: 36px
}

.subscribe-newsletter--inside-post:not(:last-child) {
    margin-bottom: 36px;
    border-bottom: 0
}

.subscribe-newsletter--inside-post .subscribe-newsletter__top-decor-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    border-radius: 6px 6px 0 0;
    overflow: hidden
}

.subscribe-newsletter--inside-post .subscribe-newsletter__top-decor-line:before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--blue-50)
}

.subscribe-newsletter--inside-post .subscribe-newsletter__inner {
    max-width: none;
    margin: 0
}

.subscribe-newsletter--inside-post .subscribe-newsletter__container {
    max-width: none;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    padding: 24px
}

.subscribe-newsletter--inside-post .subscribe-newsletter__container.subscribe-newsletter__container--success {
    padding-left: 58px;
    padding-bottom: 24px
}

.subscribe-newsletter--inside-post .subscribe-newsletter__icon-success {
    position: absolute;
    top: 24px;
    left: 16px;
    width: 30px;
    height: 30px
}

.subscribe-newsletter--inside-post .subscribe-newsletter__title {
    font-size: 28px;
    line-height: 30px;
    font-weight: 600;
    text-align: left;
    max-width: none
}

.subscribe-newsletter--inside-post .subscribe-newsletter__description {
    text-align: left
}

.subscribe-newsletter--inside-post .subscribe-newsletter__description:not(:last-child) {
    margin-bottom: 26px
}

.subscribe-newsletter--inside-post .subscribe-newsletter__form {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.subscribe-newsletter--inside-post .subscribe-newsletter__form:not(:last-child) {
    margin-bottom: 26px
}

.subscribe-newsletter--inside-post .subscribe-newsletter__form .field {
    max-width: 458px
}

.subscribe-newsletter--inside-post .subscribe-newsletter__form .field__input {
    background-color: rgba(190, 196, 213, .25)
}

.subscribe-newsletter--inside-post.subscribe-newsletter--success {
    -webkit-transition: background-color .9s ease;
    transition: background-color .9s ease;
    background-color: var(--green-10);
    border-color: var(--green-50)
}

.subscribe-newsletter--inside-post.subscribe-newsletter--success:before {
    -webkit-transition: background-color .9s ease;
    transition: background-color .9s ease;
    background-color: var(--green-50)
}

@media(max-width:1023px) {
    .subscribe-newsletter--inside-post .recaptcha-wrapper {
        right: 0;
        left: auto;
        -webkit-transform: none;
        transform: none
    }
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-post .recaptcha-wrapper {
        right: -24px
    }
}

.subscribe-newsletter--inside-category:not(:last-child) {
    margin-bottom: 32px
}

.subscribe-newsletter--inside-category .subscribe-newsletter__container {
    padding: 0 0 32px
}

.subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__inner {
    max-width: none
}

.subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__container {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0;
    overflow: visible
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__container {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__title {
    width: var(--blog-column-6);
    font-size: 68px;
    line-height: 68px;
    text-align: left
}

@media(max-width:1199px) {
    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__title {
        font-weight: 700;
        font-size: 54px;
        line-height: 52px;
        font-weight: 400
    }
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__title {
        width: 100%;
        font-size: 34px;
        line-height: 35px
    }
}

.subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__title:not(:last-child) {
    margin-bottom: 38px
}

@media(max-width:1199px) {
    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__title:not(:last-child) {
        margin-bottom: 32px
    }
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__title:not(:last-child) {
        margin-bottom: 20px
    }
}

.subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__description {
    font-size: 22px;
    line-height: 28px;
    width: var(--blog-column-6);
    padding: 15px var(--blog-column-1) 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: left
}

@media(max-width:1199px) {
    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__description {
        font-size: 19px;
        line-height: 24px
    }
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__description {
        width: 100%;
        font-size: 19px;
        line-height: 22px;
        padding: 0
    }
}

.subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__description:not(:last-child) {
    margin-bottom: 0
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__description:not(:last-child) {
        margin-bottom: 36px
    }
}

.subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__form {
    position: relative;
    width: var(--blog-column-6);
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

@media(max-width:1023px) {
    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__form {
        width: 65%
    }
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__form {
        width: 100%;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.subscribe-newsletter--inside-newsletters_landing_top .field {
    max-width: none
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_top .field {
        margin-bottom: 16px
    }
}

.subscribe-newsletter--inside-newsletters_landing_top .field__input {
    background-color: var(--white);
    border-radius: 4px;
    border-bottom-color: var(--white)
}

.subscribe-newsletter--inside-newsletters_landing_top .field__input:focus {
    border-bottom-color: var(--blue-50)
}

@media(max-width:767px) {

    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__form-inner,
    .subscribe-newsletter--inside-newsletters_landing_top .button {
        width: 100%
    }
}

.subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__icon-success {
    position: absolute;
    top: 50%;
    left: 4px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__container--success {
    display: block;
    top: -8px;
    padding: 16px 8px 16px 64px;
    background-color: var(--neutral-15);
    border-radius: 12px;
    -webkit-transform: scale(1.1);
    transform: scale(1.1)
}

.subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__container--success .subscribe-newsletter__title {
    font-size: 22px;
    line-height: 28px;
    display: block;
    margin-bottom: 0;
    width: auto
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__container--success .subscribe-newsletter__title {
        font-size: 19px;
        line-height: 22px
    }
}

.subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__container--success .subscribe-newsletter__description {
    font-size: 22px;
    line-height: 28px;
    display: block;
    color: var(--neutral-60);
    padding: 0;
    margin: 0;
    width: auto
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_top .subscribe-newsletter__container--success .subscribe-newsletter__description {
        font-size: 19px;
        line-height: 22px
    }
}

.subscribe-newsletter--inside-newsletters_landing_top .show-success .subscribe-newsletter__form {
    -webkit-transform: scale(.9);
    transform: scale(.9);
    -webkit-transition: -webkit-transform .2s ease;
    transition: -webkit-transform .2s ease;
    transition: transform .2s ease;
    transition: transform .2s ease, -webkit-transform .2s ease
}

.subscribe-newsletter--inside-newsletters_landing_top .show-success .field,
.subscribe-newsletter--inside-newsletters_landing_top .show-success .button {
    opacity: 0;
    -webkit-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out
}

.subscribe-newsletter--inside-newsletters_landing_top .show-success .subscribe-newsletter__container--success {
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity .2s ease-in, visibility 0s;
    transition: opacity .2s ease-in, visibility 0s
}

.subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__container {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    padding: 15px 0
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__container {
        padding: 0;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
}

.subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__inner {
    max-width: none
}

.subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__title {
    font-size: 68px;
    line-height: 68px;
    text-align: left
}

@media(max-width:1199px) {
    .subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__title {
        font-weight: 700;
        font-size: 54px;
        line-height: 52px;
        font-weight: 400
    }
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__title {
        font-size: 34px;
        line-height: 35px;
        text-align: center
    }
}

.subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__title:not(:last-child) {
    margin-bottom: 8px
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__title:not(:last-child) {
        margin-bottom: 20px
    }
}

.subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__description {
    font-size: 22px;
    line-height: 28px;
    text-align: left;
    color: var(--neutral-60)
}

@media(max-width:1199px) {
    .subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__description {
        font-size: 19px;
        line-height: 24px
    }
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__description {
        text-align: center
    }
}

.subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__description:not(:last-child) {
    margin-bottom: 40px
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__description:not(:last-child) {
        margin-bottom: 26px
    }
}

.subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__form {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__form {
        display: block
    }
}

.subscribe-newsletter--inside-newsletters_landing_bottom .field {
    max-width: none
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_bottom .field {
        margin-bottom: 16px
    }
}

.subscribe-newsletter--inside-newsletters_landing_bottom .field__input {
    background-color: var(--white);
    border-radius: 4px;
    border-bottom-color: var(--white)
}

.subscribe-newsletter--inside-newsletters_landing_bottom .field__input:focus {
    border-bottom-color: var(--blue-50)
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_bottom .button {
        width: 100%
    }
}

.subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__icon-success {
    position: absolute;
    top: 15px;
    left: 0
}

.subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__container--success {
    padding-left: 72px
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__container--success {
        padding-left: 0
    }
}

@media(max-width:767px) {
    .subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__container--success .subscribe-newsletter__icon-success {
        position: static
    }
}

.subscribe-newsletter--inside-newsletters_landing_bottom .subscribe-newsletter__container--success .subscribe-newsletter__title {
    margin-bottom: 16px
}

@-webkit-keyframes subscribeNewsletterDash {
    from {
        stroke-dashoffset: 28
    }

    to {
        stroke-dashoffset: 0
    }
}

@keyframes subscribeNewsletterDash {
    from {
        stroke-dashoffset: 28
    }

    to {
        stroke-dashoffset: 0
    }
}

.example-preview-cta {
    display: block;
    cursor: pointer
}

.example-preview-cta__rating {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 8px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.example-preview-cta__rating-average {
    font-size: 19px;
    line-height: 24px;
    font-weight: 600;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
    margin-right: 4px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: var(--orange-40)
}

.example-preview-cta__rating-stars {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    position: relative;
    bottom: 1px
}

.example-preview-cta__rating-star {
    width: 24px;
    height: 24px;
    color: var(--orange-40)
}

.example-preview-cta__rating-star.example-preview-cta__rating-star--inactive {
    color: var(--neutral-40)
}

.example-preview-cta__preview {
    width: 100%;
    border-radius: 6px;
    background-color: var(--white);
    background-size: cover;
    background-position: 50% 0;
    -webkit-box-shadow: 0 0 1px rgba(38, 70, 109, .4), 0 6px 14px -4px rgba(38, 70, 109, .1);
    box-shadow: 0 0 1px rgba(38, 70, 109, .4), 0 6px 14px -4px rgba(38, 70, 109, .1);
    margin-bottom: 32px;
    -webkit-transition: -webkit-box-shadow .2s ease;
    transition: -webkit-box-shadow .2s ease;
    transition: box-shadow .2s ease;
    transition: box-shadow .2s ease, -webkit-box-shadow .2s ease
}

.example-preview-cta__preview:hover {
    -webkit-box-shadow: 0 0 1px rgba(38, 70, 109, .4), 0 16px 32px -8px rgba(38, 70, 109, .2);
    box-shadow: 0 0 1px rgba(38, 70, 109, .4), 0 16px 32px -8px rgba(38, 70, 109, .2)
}

.example-preview-cta__preview:before {
    content: '';
    display: block;
    padding-bottom: 141.389%
}

.example-preview-cta__button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.trustpilot-overview {
    padding: 120px 32px;
    background-color: var(--neutral-5);
    overflow: hidden
}

@media(max-width:1023px) {
    .trustpilot-overview {
        padding: 80px 32px
    }
}

@media(max-width:767px) {
    .trustpilot-overview {
        padding: 48px 0
    }

    .trustpilot-overview .slick-list {
        overflow: visible
    }

    .trustpilot-overview .slick-slider {
        overflow: hidden
    }
}

.trustpilot_top {
    border-bottom: 1px solid #d9deeb;
    background-color: #fff
}

.trustpilot-overview__container {
    max-width: var(--container-width);
    margin: 0 auto
}

@media(max-width:767px) {
    .trustpilot-overview__container {
        width: 100%
    }
}

.trustpilot-overview__title {
    font-weight: 700;
    font-size: 46px;
    line-height: 48px;
    font-weight: 700;
    text-align: center;
    max-width: 736px;
    margin: 0 auto 64px
}

@media(max-width:1023px) {
    .trustpilot-overview__title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px
    }
}

@media(max-width:767px) {
    .trustpilot-overview__title {
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 24px;
        padding: 0 20px
    }
}

.trustpilot-overview__wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

@media(max-width:1023px) {
    .trustpilot-overview__wrapper {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

@media(max-width:767px) {
    .trustpilot-overview__wrapper {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
}

.trustpilot-overview__reviews-container {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    min-width: 0;
    max-width: 784px;
    pointer-events: none;
    opacity: 0;
    -webkit-transition: opacity .3s;
    transition: opacity .3s
}

@media(max-width:1023px) {
    .trustpilot-overview__reviews-container {
        max-width: 492px
    }
}

@media(max-width:767px) {
    .trustpilot-overview__reviews-container {
        width: 100%;
        max-width: 100%
    }
}

.trustpilot-overview--ready .trustpilot-overview__reviews-container {
    opacity: 1;
    pointer-events: auto
}

.trustpilot-overview__reviews {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    margin-bottom: 32px
}

@media(max-width:767px) {
    .trustpilot-overview__reviews {
        padding-left: 20px
    }
}

.trustpilot-overview__reviews *:focus {
    outline: 0;
    outline: none
}

.trustpilot-overview__rating-wrapper {
    -ms-flex-negative: 0;
    flex-shrink: 0
}

@media(max-width:767px) {
    .trustpilot-overview__rating-wrapper {
        width: 100%;
        padding: 0 20px
    }
}

.trustpilot-overview__rating-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 230px;
    margin-right: 32px
}

@media(max-width:767px) {
    .trustpilot-overview__rating-container {
        width: 100%;
        border-radius: 4px;
        background-color: var(--white);
        padding: 32px;
        margin: 0 0 32px
    }
}

.trustpilot-overview__review {
    position: relative;
    min-width: 180px;
    max-width: 230px;
    height: 188px;
    margin-right: 48px;
    overflow: hidden
}

@media(max-width:1023px) {
    .trustpilot-overview__review {
        margin-right: 32px
    }
}

.trustpilot-overview__rating {
    font-size: 28px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 8px
}

.trustpilot-overview__stars {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 32px
}

.trustpilot-overview__star--big {
    width: 32px;
    height: 32px;
    background-size: contain
}

.trustpilot-overview__logo {
    width: 98px;
    height: 24px;
    background-size: contain;
    margin-bottom: 8px
}

.trustpilot-overview__rating-label {
    font-size: 14px;
    line-height: 16px;
    color: var(--neutral-60)
}

.trustpilot-overview__review-label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    font-size: 14px;
    line-height: 16px;
    color: var(--neutral-60)
}

.trustpilot-overview__review-label-divider {
    display: inline-block;
    margin: 0 4px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: var(--neutral-50)
}

.trustpilot-overview__star {
    width: 20px;
    height: 20px;
    background-size: contain
}

.trustpilot-overview--ready .trustpilot-overview__star--green {
    background-image: url(../../assets/media/star-green20e9737f3d819bbc6c7b.svg)
}

.trustpilot-overview--ready .trustpilot-overview__star--light-green {
    background-image: url(../../assets/media/star-light-greencd1f34e92050293d91e4.svg)
}

.trustpilot-overview--ready .trustpilot-overview__star--gray {
    background-image: url(../../assets/media/star-gray428ad2c65748c50c0e6b.svg)
}

.trustpilot-overview__review-title {
    font-size: 22px;
    line-height: 28px;
    text-align: left;
    font-weight: 600;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.trustpilot-overview__review-text {
    max-height: 96px;
    text-align: left;
    margin-bottom: 32px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden
}

.trustpilot-overview__review-stars {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 8px;
    margin-left: -2px
}

.trustpilot-overview__reviews-controls {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:767px) {
    .trustpilot-overview__reviews-controls {
        margin-left: 20px;
        padding-right: 20px
    }
}

.trustpilot-overview__reviews-button--left,
.trustpilot-overview__reviews-button--right {
    width: 36px;
    height: 36px;
    background-color: var(--neutral-15);
    color: var(--neutral-50);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 50%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    cursor: pointer;
    -webkit-transition: color .2s ease, background-color .2s ease;
    transition: color .2s ease, background-color .2s ease
}

.trustpilot-overview__reviews-button--left:hover,
.trustpilot-overview__reviews-button--right:hover {
    color: var(--blue-50)
}

.trustpilot-overview__reviews-button--left:active,
.trustpilot-overview__reviews-button--right:active {
    background-color: var(--neutral-20)
}

.trustpilot-overview__reviews-button--left {
    margin-right: 8px
}

.trustpilot-overview__reviews-button--right {
    margin-right: 20px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.trustpilot-overview__reviews-bar {
    position: relative;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    overflow: hidden;
    background-color: var(--neutral-15)
}

.trustpilot-overview__reviews-bar-line {
    position: absolute;
    -webkit-transform-origin: left center;
    transform-origin: left center;
    width: 1px;
    height: 100%;
    background-color: var(--blue-50)
}

.trustpilot-overview__reviews-bar-line-wrapper {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%
}

.website-features__title {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 70px;
    max-width: 736px
}

@media(max-width:1023px) {
    .website-features__title {
        max-width: 544px;
        margin-bottom: 32px
    }
}

@media(max-width:767px) {
    .website-features__title {
        margin-bottom: 24px
    }
}

.website-features__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(296px, 1fr));
    justify-items: center;
    grid-gap: 64px 32px
}

@media(max-width:1023px) {
    .website-features__list {
        grid-row-gap: 48px
    }
}

@media(max-width:767px) {
    .website-features__list {
        grid-row-gap: 24px
    }
}

.website-features__item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

@media(max-width:1023px) {
    .website-features__item {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center
    }
}

@media(max-width:767px) {
    .website-features__item {
        max-width: 296px
    }
}

.website-features__item {
    margin-bottom: 32px
}

@supports(display:grid) {
    .website-features__item {
        margin-bottom: 0
    }
}

.website-features__image {
    width: 56px;
    height: 56px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 56px;
    flex: 0 0 56px;
    margin-right: 8px;
    background-color: var(--neutral-10)
}

.website-features__image.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

@media(max-width:767px) {
    .website-features__image {
        display: block;
        margin: 0 auto 16px
    }
}

.website-features__image--builder {
    background-position: 0 0
}

.website-features__image--cover-letter {
    background-position: -56px 0
}

.website-features__image--grammar {
    background-position: -112px 0
}

.website-features__image--job-tracking {
    background-position: -168px 0
}

.website-features__image--ok-hand {
    background-position: -224px 0
}

.website-features__image--security {
    background-position: -280px 0
}

.website-features__image--templates {
    background-position: -336px 0
}

.website-features__image--word {
    background-position: -392px 0
}

.website-features__image--writing {
    background-position: -448px 0
}

.website-features__label {
    font-size: 22px;
    line-height: 28px;
    color: var(--indigo-80);
    font-weight: 600;
    margin-bottom: 4px
}

@media(max-width:767px) {
    .website-features__label {
        text-align: center
    }
}

@media(max-width:767px) {
    .website-features__text {
        text-align: center
    }
}

.website-stats__container {
    text-align: center
}

.website-stats__title {
    font-size: 72px;
    line-height: 74px;
    font-weight: 700;
    max-width: 680px;
    margin: 0 auto 16px;
    color: var(--blue-50)
}

@media(max-width:1023px) {
    .website-stats__title {
        font-weight: 700;
        font-size: 54px;
        line-height: 52px;
        max-width: 472px
    }
}

@media(max-width:767px) {
    .website-stats__title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px;
        max-width: 350px
    }
}

.website-stats__title mark {
    background: 0 0;
    color: inherit;
    background-repeat: no-repeat;
    background-image: -webkit-gradient(linear, left top, left bottom, from(var(--amber-30)), to(var(--amber-30)));
    background-image: linear-gradient(var(--amber-30), var(--amber-30));
    background-size: 100% .0833em;
    background-position: 0 100%
}

.website-stats__text {
    margin-bottom: 24px
}

.website-stats--indigo {
    background-color: var(--indigo-80);
    color: var(--white)
}

.website-stats--indigo .website-stats__title {
    color: var(--white)
}

.builder-cta {
    background-color: var(--neutral-10)
}

@media(min-width:1024px) {
    .builder-cta {
        padding-top: 80px;
        padding-bottom: 80px
    }
}

@media(min-width:1024px) {
    .builder-cta--features {
        padding-bottom: 120px
    }
}

.builder-cta__main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:767px) {
    .builder-cta__main {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.builder-cta__visual {
    position: relative;
    width: 57%;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.builder-cta__visual:before {
    content: '';
    display: block;
    padding-bottom: 83.59375%
}

@media(max-width:1023px) {
    .builder-cta__visual {
        width: 45%
    }
}

@media(max-width:767px) {
    .builder-cta__visual {
        width: 100%;
        max-width: 375px;
        margin-bottom: 16px
    }
}

.builder-cta__resume {
    position: absolute;
    width: 45.8%;
    border-radius: 6px;
    background: var(--white);
    background-size: cover;
    background-position: 50% 0;
    -webkit-box-shadow: 0 9px 15px rgba(100, 100, 123, .07);
    box-shadow: 0 9px 15px rgba(100, 100, 123, .07)
}

@media(max-width:767px) {
    .builder-cta__resume {
        border-radius: 4px
    }
}

.builder-cta__resume:before {
    content: '';
    display: block;
    padding-bottom: 141.389%
}

.builder-cta__resume--1 {
    left: 16.3%;
    top: 7.3%;
    -webkit-transform: rotate(-22.2deg);
    transform: rotate(-22.2deg)
}

.builder-cta__resume--2 {
    left: 28.3%;
    top: 4.5%;
    -webkit-transform: rotate(-4.51deg);
    transform: rotate(-4.51deg)
}

.builder-cta__resume--3 {
    left: 40.9%;
    top: 15.9%;
    -webkit-transform: rotate(9.87deg);
    transform: rotate(9.87deg)
}

.builder-cta__content {
    text-align: left;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

@media(max-width:767px) {
    .builder-cta__content {
        text-align: center
    }
}

.builder-cta__title {
    max-width: 10em
}

@media(max-width:767px) {
    .builder-cta__title {
        text-align: center;
        margin-left: auto;
        margin-right: auto
    }
}

.builder-cta__text {
    margin-bottom: 24px
}

.builder-cta__buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:767px) {
    .builder-cta__buttons {
        width: 100%;
        max-width: 200px;
        margin: 0 auto;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.builder-cta__cta {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 16px
}

@media(max-width:767px) {
    .builder-cta__cta {
        width: 100%;
        margin-right: 0;
        margin-bottom: 12px
    }

    .builder-cta__cta .button {
        width: 100%
    }
}

.builder-cta__cta:last-child {
    margin: 0
}

@media(min-width:768px) {
    .builder-cta--visual-left .builder-cta__visual {
        margin-right: 32px
    }

    .builder-cta--visual-right .builder-cta__visual {
        margin-left: 32px
    }

    .builder-cta--visual-right .builder-cta__content {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1
    }
}

.builder-cta__features {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 40px -24px 0
}

@media(max-width:1023px) {
    .builder-cta__features {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: 64px 0 0
    }
}

@media(max-width:767px) {
    .builder-cta__features {
        margin-top: 40px
    }
}

.builder-cta__feature {
    width: 33.333%;
    padding: 0 24px
}

@media(max-width:1023px) {
    .builder-cta__feature {
        position: relative;
        width: 100%;
        padding: 0 0 24px 88px;
        margin-bottom: 24px;
        border-bottom: 1px solid var(--neutral-20)
    }
}

@media(max-width:767px) {
    .builder-cta__feature {
        padding: 0;
        margin-bottom: 32px;
        border-bottom: none;
        text-align: center
    }
}

.builder-cta__feature:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none
}

.builder-cta__feature-icon {
    width: 56px;
    height: 56px;
    margin-bottom: 8px;
    background-color: var(--neutral-10);
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%
}

.builder-cta__feature-icon.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

@media(max-width:1023px) {
    .builder-cta__feature-icon {
        position: absolute;
        left: 0;
        top: 2px
    }
}

@media(max-width:767px) {
    .builder-cta__feature-icon {
        position: relative;
        top: 0;
        margin: 0 auto 8px
    }
}

.builder-cta__feature-title {
    display: block;
    margin-bottom: 4px;
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    color: var(--indigo-90)
}

@media(max-width:1023px) {
    .builder-cta__feature-title {
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 12px
    }
}

@media(max-width:767px) {
    .builder-cta__feature-title {
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 4px
    }
}

.resume-templates {
    position: relative;
    padding: 120px 44px 144px;
    background-color: var(--indigo-80);
    overflow: hidden
}

@media(max-width:1023px) {
    .resume-templates {
        padding: 80px 44px
    }
}

@media(max-width:767px) {
    .resume-templates {
        padding: 48px 20px 54px
    }
}

.resume-templates.is-choosing-mode-on {
    -webkit-transition: background-color .3s ease-in;
    transition: background-color .3s ease-in;
    background-color: var(--neutral-100);
    padding: 120px 0
}

.resume-templates__container {
    position: relative;
    max-width: var(--container-width);
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(max-width:1023px) {
    .resume-templates__container {
        max-width: 100%;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.resume-templates__container.is-choosing-mode-on {
    max-width: 100%;
    width: 100%
}

.resume-templates__content {
    position: relative;
    max-width: 384px;
    margin-right: 96px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: opacity .2s ease-in, -webkit-transform .2s ease-in;
    transition: opacity .2s ease-in, -webkit-transform .2s ease-in;
    transition: transform .2s ease-in, opacity .2s ease-in;
    transition: transform .2s ease-in, opacity .2s ease-in, -webkit-transform .2s ease-in
}

@media(max-width:1023px) {
    .resume-templates__content {
        max-width: 100%;
        width: 100%;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0
    }
}

.resume-templates__cta {
    margin-bottom: 142px
}

@media(max-width:1023px) {
    .resume-templates__cta {
        display: none
    }
}

.resume-templates__title {
    font-weight: 700;
    font-size: 46px;
    line-height: 48px;
    color: var(--white);
    margin-bottom: 24px
}

@media(max-width:1023px) {
    .resume-templates__title {
        font-size: 32px;
        line-height: 34px;
        text-align: center;
        margin-bottom: 8px
    }
}

.resume-templates__text {
    color: var(--white);
    margin-bottom: 24px
}

@media(max-width:1023px) {
    .resume-templates__text {
        text-align: center
    }
}

.resume-templates__slider-wrapper {
    position: absolute;
    left: 0;
    top: 86px;
    bottom: 74px;
    opacity: 0;
    pointer-events: none;
    will-change: transform;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

@media(max-width:1023px) {
    .resume-templates__slider-wrapper {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: static;
        opacity: 1;
        pointer-events: auto;
        width: 100%
    }
}

.resume-templates__slider-wrapper.is-visible {
    opacity: 1;
    pointer-events: auto
}

.resume-templates__slider-wrapper.is-choosing-mode-on {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.resume-templates__slider-container {
    position: relative;
    max-width: 1372px
}

.resume-templates__slider-arrow-container {
    position: absolute;
    right: -112px;
    width: 36px;
    height: 24px;
    top: calc(50% - 12px);
    color: var(--white);
    cursor: pointer;
    z-index: 1;
    -webkit-transition: opacity .2s ease, -webkit-transform .2s ease;
    transition: opacity .2s ease, -webkit-transform .2s ease;
    transition: transform .2s ease, opacity .2s ease;
    transition: transform .2s ease, opacity .2s ease, -webkit-transform .2s ease
}

@media(max-width:1023px) {
    .resume-templates__slider-arrow-container {
        display: none
    }
}

@-webkit-keyframes arrowPulse {
    0% {
        opacity: .5
    }

    10% {
        opacity: .5
    }

    50% {
        opacity: 1
    }

    90% {
        opacity: .5
    }

    100% {
        opacity: .5
    }
}

@keyframes arrowPulse {
    0% {
        opacity: .5
    }

    10% {
        opacity: .5
    }

    50% {
        opacity: 1
    }

    90% {
        opacity: .5
    }

    100% {
        opacity: .5
    }
}

.resume-templates__arrow {
    position: absolute;
    left: 0;
    top: 0;
    width: 24px;
    height: 24px;
    -webkit-animation: arrowPulse 1.5s ease infinite;
    animation: arrowPulse 1.5s ease infinite
}

.resume-templates__arrow:first-child {
    -webkit-animation-delay: .3s;
    animation-delay: .3s
}

.resume-templates__arrow:last-child {
    left: 12px
}

.resume-templates__slider-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - 24px);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--blue-50);
    color: var(--white);
    z-index: 2;
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
    cursor: pointer;
    will-change: transform;
    -webkit-transition: opacity .25s ease-in, background-color .15s ease, -webkit-transform .25s ease-in;
    transition: opacity .25s ease-in, background-color .15s ease, -webkit-transform .25s ease-in;
    transition: transform .25s ease-in, opacity .25s ease-in, background-color .15s ease;
    transition: transform .25s ease-in, opacity .25s ease-in, background-color .15s ease, -webkit-transform .25s ease-in
}

.resume-templates__slider-button.is-visible {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1
}

.resume-templates__slider-button:hover {
    background-color: var(--blue-60)
}

.resume-templates__slider-button--left {
    left: 64px
}

.resume-templates__slider-button--right {
    right: 64px
}

.resume-templates__slider-button--right svg {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.resume-templates__slider *:focus {
    outline: 0;
    outline: none
}

.resume-templates__item {
    position: relative;
    width: 356px;
    height: 480px;
    margin: 60px 18px 32px;
    background-color: var(--white);
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border-radius: 4px;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease;
    -webkit-transform-origin: center left;
    transform-origin: center left
}

@media(max-width:1023px) {
    .resume-templates__item {
        margin: 24px 12px
    }
}

@media(max-width:767px) {
    .resume-templates__item {
        width: 242px;
        height: 326px;
        margin: 24px 8px;
        padding-bottom: 16px
    }
}

.resume-templates__item-clickable-area {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    -webkit-transform: scale(1.05);
    transform: scale(1.05)
}

.resume-templates__item-preview {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    border-radius: 4px;
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease
}

@media(max-width:1023px) {
    .resume-templates__trustpilot {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 16px
    }
}

.resume-templates__stars {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 16px;
    margin-left: -2px
}

.resume-templates__star {
    width: 32px;
    height: 32px;
    background-size: contain;
    margin-right: 2px
}

.resume-templates--ready .resume-templates__star {
    background-image: url(../../assets/media/star-green20e9737f3d819bbc6c7b.svg)
}

.resume-templates--ready .resume-templates__star:last-child {
    background-image: url(../../assets/media/star-half-gray174cd38bc0157fbd83d1.svg)
}

.resume-templates__rating {
    color: var(--white)
}

.resume-templates__trustpilot-text {
    font-size: 14px;
    line-height: 16px;
    color: var(--white)
}

.resume-templates__trustpilot-text a {
    text-decoration: underline
}

.resume-templates__item-button {
    position: absolute;
    bottom: 40px;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    opacity: 0;
    pointer-events: none;
    z-index: 3
}

@media(max-width:1023px) {
    .resume-templates__item-button {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        bottom: 32px
    }
}

@media(max-width:767px) {
    .resume-templates__item-button {
        bottom: 24px
    }
}

.slick-current .resume-templates__item-people-count {
    bottom: -44px
}

@media(max-width:1023px) {
    .slick-current .resume-templates__item-button {
        opacity: 1;
        pointer-events: auto
    }
}

.slick-current .resume-templates__item-preview.is-choosing-mode-on {
    -webkit-transform: scale(1.05);
    transform: scale(1.05)
}

@media(max-width:1023px) {
    .slick-current .resume-templates__item-preview {
        -webkit-transform: scale(1.05);
        transform: scale(1.05)
    }
}

.slick-current .resume-templates__item-clickable-area {
    display: block
}

.resume-templates__item-name-container {
    display: none;
    position: absolute;
    width: 100%;
    top: -50px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: default;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s
}

.resume-templates__item-name-container.is-visible {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(max-width:767px) {
    .resume-templates__item-name-container {
        top: -30px
    }
}

.resume-templates__item-name {
    color: var(--neutral-10);
    font-weight: 600
}

.resume-templates__item-usage-number {
    font-size: 14px;
    line-height: 16px;
    color: var(--neutral-50)
}

.slick-current .resume-templates__item-name-container {
    -webkit-transform: translateY(-12px);
    transform: translateY(-12px)
}

.slick-current .resume-templates__item-button--animated {
    -webkit-transition: opacity .2s ease-in, -webkit-transform .2s ease-in;
    transition: opacity .2s ease-in, -webkit-transform .2s ease-in;
    transition: transform .2s ease-in, opacity .2s ease-in;
    transition: transform .2s ease-in, opacity .2s ease-in, -webkit-transform .2s ease-in
}

.slick-current .resume-templates__item-button--visible {
    opacity: 1;
    pointer-events: auto;
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.resume-templates__slider-dot {
    position: absolute;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center
}

@media(max-width:1023px) {
    .resume-templates__slider-dot {
        top: auto;
        bottom: -12px
    }
}

@media(max-width:767px) {
    .resume-templates__slider-dot {
        bottom: -6px
    }
}

.resume-templates__slider-dot li {
    position: relative;
    width: 6px;
    height: 6px;
    margin: 0 4px;
    padding: 0;
    cursor: pointer
}

.resume-templates__slider-dot button {
    position: relative;
    font-size: 0;
    line-height: 0;
    display: block;
    width: 6px;
    height: 6px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: 0 0
}

.resume-templates__slider-dot button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 6px;
    background-color: var(--neutral-60);
    border-radius: 50%
}

.resume-templates__slider-dot li.slick-active button:after {
    background-color: var(--blue-50)
}

.document-examples {
    position: relative;
    overflow: hidden;
    padding: 80px 44px 100px;
    background-color: var(--indigo-90);
    color: var(--white)
}

@media(max-width:1023px) {
    .document-examples {
        padding: 64px 44px 80px
    }
}

@media(max-width:767px) {
    .document-examples {
        padding: 48px 20px 40px
    }
}

.document-examples__container {
    max-width: var(--container-width);
    margin: 0 auto
}

.document-examples__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 80px
}

@media(max-width:1023px) {
    .document-examples__header {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-bottom: 40px
    }
}

@media(max-width:767px) {
    .document-examples__header {
        margin-bottom: 32px
    }
}

.document-examples__title {
    font-weight: 700;
    font-size: 46px;
    line-height: 48px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    max-width: 352px;
    margin-right: 64px
}

@media(max-width:1023px) {
    .document-examples__title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px;
        margin-right: 0;
        margin-bottom: 16px
    }
}

@media(max-width:767px) {
    .document-examples__title {
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 8px
    }
}

[lang=de] .document-examples__title {
    max-width: 432px
}

.document-examples__description {
    padding-top: 8px;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 544px;
    opacity: .5
}

@media(max-width:1023px) {
    .document-examples__description {
        padding-top: 0
    }
}

.document-examples__gallery {
    position: relative;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.document-examples__slider {
    position: relative;
    overflow: hidden;
    margin: 0 -24px;
    padding: 0 12px
}

@media(max-width:1023px) {
    .document-examples__slider {
        margin: 0 -12px;
        padding: 0 8px
    }
}

@media(max-width:767px) {
    .document-examples__slider {
        overflow: visible;
        padding: 0;
        margin: 0 -10px
    }
}

.document-examples__slider {}

.document-examples__slider:before,
.document-examples__slider:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: -1px;
    bottom: -1px;
    width: 24px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    background-image: -webkit-gradient(linear, left top, right top, from(var(--indigo-90)), to(rgba(26, 28, 106, 0)));
    background-image: linear-gradient(to right, var(--indigo-90), rgba(26, 28, 106, 0))
}

@media(max-width:1023px) {

    .document-examples__slider:before,
    .document-examples__slider:after {
        width: 12px
    }
}

@media(max-width:767px) {

    .document-examples__slider:before,
    .document-examples__slider:after {
        display: none
    }
}

.document-examples__slider:before {
    left: 0
}

.document-examples__slider:after {
    right: 0;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1)
}

.document-examples__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    width: 10000%
}

.document-examples__item {
    width: .25%;
    padding: 0 12px;
    -webkit-tap-highlight-color: transparent
}

@media(max-width:1199px) {
    .document-examples__item {
        width: .33333333%
    }
}

@media(max-width:1023px) {
    .document-examples__item {
        padding: 0 10px
    }
}

@media(max-width:767px) {
    .document-examples__item {
        width: 272px
    }
}

.document-examples__item-name {
    -webkit-transition: color .2s;
    transition: color .2s
}

@media(hover) {
    .document-examples__item:hover .document-examples__item-name {
        color: var(--blue-50)
    }
}

.document-examples__item-rating {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 12px
}

.document-examples__item-star {
    width: 20px;
    height: 20px
}

.document-examples__item-star.is-active {
    background-position: 0 -20px
}

.document-examples--ready .document-examples__item-star {
    background-image: url(../../assets/media/star-sprite09aa817894e18816f67a.svg)
}

.document-examples__item-reviews {
    font-size: 16px;
    line-height: 20px;
    margin-left: 8px;
    opacity: .5
}

.document-examples__item-image {
    display: block;
    position: relative;
    border-radius: 3px;
    background-color: var(--white);
    background-position: 50% 0;
    background-size: cover;
    padding-bottom: 141.389%
}

.document-examples__scrollbar {
    position: relative;
    height: 2px;
    margin-top: 20px;
    background-color: var(--indigo-70);
    border-radius: 1px
}

.document-examples__gallery--infinite .document-examples__scrollbar {
    display: none
}

.document-examples__scrollbar-handle {
    height: 2px;
    background-color: var(--orange-40);
    border-radius: 1px
}

.cookiebar {
    display: none;
    position: fixed;
    bottom: 16px;
    width: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 32px;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease;
    z-index: var(--z-cookiebar)
}

@media(max-width:767px) {
    .cookiebar {
        padding: 0;
        bottom: 0;
        padding-bottom: env(safe-area-inset-bottom)
    }
}

.cookiebar.is-open {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.cookiebar__container {
    width: 100%;
    max-width: 768px;
    background-color: var(--white);
    border-radius: 6px;
    padding: 24px 32px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-shadow: 0 2px 14px rgba(23, 68, 130, .15), 0 0 1px rgba(23, 68, 130, .2);
    box-shadow: 0 2px 14px rgba(23, 68, 130, .15), 0 0 1px rgba(23, 68, 130, .2)
}

@media(max-width:767px) {
    .cookiebar__container {
        border-radius: 0;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        padding: 24px 20px
    }
}

.cookiebar__container a {
    color: var(--blue-50)
}

.cookiebar__logo {
    width: 32px;
    height: 32px;
    margin-right: 16px;
    background-image: url(../../assets/media/cookiebarc8c54f424383cc305dca.png);
    background-size: contain;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

@media(max-width:767px) {
    .cookiebar__logo {
        display: none
    }
}

.cookiebar__text {
    font-size: 16px;
    line-height: 20px;
    margin-right: 32px
}

@media(max-width:767px) {
    .cookiebar__text {
        margin-right: 0;
        margin-bottom: 24px
    }
}

.cookiebar__button {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    color: var(--white);
    padding: 8px 14px;
    background-color: var(--blue-50);
    -webkit-transition: background-color .2s ease;
    transition: background-color .2s ease;
    border-radius: 4px;
    cursor: pointer
}

.cookiebar__button:hover {
    background-color: var(--blue-70)
}

.cookie-panel {
    display: none;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0 32px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: var(--white);
    -webkit-box-shadow: 0 0 48px rgba(23, 68, 130, .12);
    box-shadow: 0 0 48px rgba(23, 68, 130, .12);
    z-index: var(--z-cookiebar)
}

@media(max-width:767px) {
    .cookie-panel {
        padding: 0;
        bottom: 0;
        padding-bottom: env(safe-area-inset-bottom)
    }
}

.cookie-panel.is-open {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.cookie-panel__container {
    width: 100%;
    max-width: 768px;
    padding: 26px 35px;
    display: block
}

@media(max-width:767px) {
    .cookie-panel__container {
        border-radius: 0;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        padding: 24px 20px
    }
}

.cookie-panel__container a {
    color: var(--blue-50)
}

.cookie-panel__title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 19px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 12px
}

.cookie-panel__title:after {
    content: '';
    position: relative;
    top: -1px;
    margin-left: 4px;
    display: block;
    vertical-align: baseline;
    background-image: url(../../assets/media/lock68de7ba21f63a2f0c7b2.svg);
    background-size: contain;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px
}

.cookie-panel__text {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: .3px;
    margin-bottom: 24px;
    color: var(--neutral-60)
}

.cookie-panel__buttons_panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.cookie-panel__buttons_panel .button:not(:last-child) {
    margin-right: 12px
}

.modal--cookie-settings-modal .modal__content {
    width: 680px
}

.cookie-settings-modal__container {
    padding: 24px 36px 52px
}

.cookie-settings-modal__container a {
    color: var(--blue-50)
}

.cookie-settings-modal__title {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 19px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 20px
}

.cookie-settings-modal__text {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: .3px;
    margin-bottom: 28px
}

.cookie-settings-modal__text p:not(:last-child) {
    margin-bottom: 16px
}

.cookie-settings-modal__buttons_panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.cookie-settings-modal__buttons_panel:not(:last-child) {
    margin-bottom: 28px
}

.cookie-settings-modal__buttons_panel .button:not(:last-child) {
    margin-right: 12px
}

.cookie-settings-modal__placeholder {
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-50);
    white-space: nowrap
}

.blog-post__content .resources {
    position: relative
}

.blog-post__content .resources:first-child {
    margin-top: 0
}

.blog-post__content .resources:last-child {
    margin-bottom: 0
}

.blog-post__content .resources {
    margin: 40px 0
}

@media(max-width:767px) {
    .blog-post__content .resources {
        margin: 24px 0
    }
}

.blog-post__content .resources {
    border-radius: 6px;
    background-color: var(--beige-10);
    padding: 20px 24px 32px
}

@media(max-width:767px) {
    .blog-post__content .resources {
        margin: 32px 0;
        padding: 16px 16px 24px
    }
}

.blog-post__content .resources *:last-child {
    margin-bottom: 0
}

.blog-post__content .resources--dynamic {
    padding-bottom: 40px
}

.blog-post__content .resources__label {
    position: relative;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    color: var(--beige-60);
    padding-left: 30px;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(119, 109, 89, .15)
}

@media(max-width:767px) {
    .blog-post__content .resources__label {
        padding-bottom: 16px
    }
}

.blog-post__content .resources__label:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 1px;
    width: 20px;
    height: 20px;
    background-image: url(../../assets/media/bookmarkdb91b3711969065c96a0.svg);
    background-size: contain
}

.blog-post__content .resources__content {
    overflow: hidden;
    -webkit-transition: height .3s cubic-bezier(.7, 0, 0, 1);
    transition: height .3s cubic-bezier(.7, 0, 0, 1)
}

.blog-post__content .resources__content a {
    color: var(--neutral-90);
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(30, 37, 50, 0.2)), to(rgba(30, 37, 50, 0.2)));
    background-image: linear-gradient(rgba(30, 37, 50, 0.2), rgba(30, 37, 50, 0.2))
}

.blog-post__content .resources__content a:hover {
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(30, 37, 50, 0.5)), to(rgba(30, 37, 50, 0.5)));
    background-image: linear-gradient(rgba(30, 37, 50, 0.5), rgba(30, 37, 50, 0.5))
}

.blog-post__content .resources__content::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
    opacity: 0;
    pointer-events: none;
    -webkit-transition: opacity .2s ease;
    transition: opacity .2s ease;
    background-image: linear-gradient(to top, var(--beige-10) 40px, rgba(243, 241, 235, 0))
}

.blog-post__content .resources__content ol li::before {
    font-size: 16px;
    line-height: 20px;
    content: counter(ol-counter);
    display: block;
    width: 30px;
    color: var(--neutral-90);
    opacity: .3;
    text-align: center;
    font-weight: 400;
    top: 4px;
    right: calc(100% + 8px)
}

.blog-post__content .resources__content ul li::before {
    background: var(--neutral-90);
    opacity: .3;
    left: -25px
}

.blog-post__content .resources__content ol:first-child,
.blog-post__content .resources__content ul:first-child {
    margin-top: 0
}

.blog-post__content .resources__content ol:last-child,
.blog-post__content .resources__content ul:last-child {
    margin-bottom: 0
}

.blog-post__content .resources__content p {
    padding-left: 10px
}

.blog-post__content .resources--folded .resources__content {
    height: 187px !important
}

.blog-post__content .resources--folded .resources__content::after {
    opacity: 1
}

.blog-post__content .resources__toggle {
    display: none;
    position: absolute;
    left: calc(50% - 16px);
    bottom: -16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--neutral-90);
    z-index: 2;
    border: none;
    cursor: pointer;
    background: var(--neutral-90) url(../../assets/media/chevron-white37fffd77a0fc944897fc.svg) no-repeat center;
    background-size: 20px 20px;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transition: -webkit-transform .2s ease;
    transition: -webkit-transform .2s ease;
    transition: transform .2s ease;
    transition: transform .2s ease, -webkit-transform .2s ease
}

.blog-post__content .resources__toggle:hover,
.blog-post__content .resources__toggle:focus {
    outline: none;
    background-color: var(--neutral-100)
}

@media(max-width:767px) {
    .blog-post__content .resources__toggle {
        width: 42px;
        height: 42px;
        bottom: -21px
    }
}

.blog-post__content .resources__toggle--visible {
    display: block
}

.blog-post__content .resources--folded .resources__toggle {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
}

@-webkit-keyframes zoomIn {
    to {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes zoomIn {
    to {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

.blog-post__content .compare-resumes {
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif
}

.blog-post__content .compare-resumes:first-child {
    margin-top: 0
}

.blog-post__content .compare-resumes:last-child {
    margin-bottom: 0
}

.blog-post__content .compare-resumes {
    margin: 40px 0
}

@media(max-width:767px) {
    .blog-post__content .compare-resumes {
        margin: 24px 0
    }
}

@media(max-width:1023px) {
    .blog-post__content .compare-resumes {
        width: 100%;
        max-width: 100%
    }
}

.blog-post__content .compare-resumes:last-child {
    margin-bottom: 0
}

.blog-post__content .compare-resumes__view {
    position: relative;
    width: 100%;
    height: 640px;
    background-color: var(--neutral-10);
    border-radius: 6px;
    overflow: hidden
}

@media(max-width:1023px) {
    .blog-post__content .compare-resumes__view {
        height: 480px
    }
}

@media(max-width:767px) {
    .blog-post__content .compare-resumes__view {
        height: 260px
    }
}

.blog-post__content .compare-resumes__create-resume {
    color: var(--white);
    position: absolute;
    bottom: 48px;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(150px) scale(1);
    transform: translateX(-50%) translateY(150px) scale(1);
    -webkit-transition: -webkit-transform .2s ease;
    transition: -webkit-transform .2s ease;
    transition: transform .2s ease;
    transition: transform .2s ease, -webkit-transform .2s ease;
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
    z-index: 3;
    pointer-events: none
}

@media(max-width:767px) {
    .blog-post__content .compare-resumes__create-resume {
        bottom: 24px
    }
}

.blog-post__content .compare-resumes__caption {
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-50);
    margin-top: 16px;
    text-align: center
}

.blog-post__content .compare-resumes__caption strong {
    font-size: 16px;
    line-height: 20px
}

.blog-post__content .compare-resumes__resume {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    width: 384px;
    height: 544px;
    margin-left: -196px;
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
    overflow: hidden;
    opacity: 1;
    border-radius: 4px;
    background-color: var(--white);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    -webkit-box-shadow: 0 24px 60px rgba(186, 200, 227, .2), 0 16px 36px rgba(186, 200, 227, .5);
    box-shadow: 0 24px 60px rgba(186, 200, 227, .2), 0 16px 36px rgba(186, 200, 227, .5)
}

@media(max-width:1023px) {
    .blog-post__content .compare-resumes__resume {
        width: 294px;
        height: 416px;
        margin-left: -147px
    }
}

@media(max-width:767px) {
    .blog-post__content .compare-resumes__resume {
        width: 150px;
        height: 212px;
        margin-left: -75px
    }
}

.blog-post__content .compare-resumes__resume--good {
    -webkit-transform: translateX(-252px) translateY(48px);
    transform: translateX(-252px) translateY(48px);
    z-index: 2
}

@media(max-width:1023px) {
    .blog-post__content .compare-resumes__resume--good {
        -webkit-transform: translateX(-167px) translateY(32px);
        transform: translateX(-167px) translateY(32px)
    }
}

@media(max-width:767px) {
    .blog-post__content .compare-resumes__resume--good {
        -webkit-transform: translateX(-85px) translateY(24px);
        transform: translateX(-85px) translateY(24px)
    }
}

.blog-post__content .compare-resumes__resume--bad {
    opacity: 1;
    -webkit-transform: translateX(252px) translateY(48px);
    transform: translateX(252px) translateY(48px);
    background-image: url(../../assets/media/incorrect_resume_preview1ec2477b0a7c2aab2ae6.jpg)
}

@media(max-width:1023px) {
    .blog-post__content .compare-resumes__resume--bad {
        -webkit-transform: translateX(167px) translateY(32px);
        transform: translateX(167px) translateY(32px)
    }
}

@media(max-width:767px) {
    .blog-post__content .compare-resumes__resume--bad {
        -webkit-transform: translateX(85px) translateY(24px);
        transform: translateX(85px) translateY(24px)
    }
}

.blog-post__content {}

.blog-post__content .compare-resumes__mark {
    width: 88px;
    height: 88px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -44px 0 0 -44px;
    color: var(--white);
    opacity: 1;
    -webkit-transition: opacity .2s .4s ease;
    transition: opacity .2s .4s ease
}

.blog-post__content .compare-resumes__mark::before {
    content: '';
    position: absolute;
    width: calc(100% - 24px);
    height: calc(100% - 24px);
    top: 12px;
    left: 12px;
    background: var(--green-50);
    border-radius: 50%;
    z-index: 1;
    -webkit-transform: scale(0);
    transform: scale(0);
    will-change: transform
}

@media(max-width:767px) {
    .blog-post__content .compare-resumes__mark::before {
        width: calc(100% - 16px);
        height: calc(100% - 16px);
        top: 8px;
        left: 8px
    }
}

.blog-post__content .compare-resumes__mark::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--green-50);
    border-radius: 50%;
    opacity: .2;
    -webkit-transform: scale(0);
    transform: scale(0);
    will-change: transform
}

@media(max-width:767px) {
    .blog-post__content .compare-resumes__mark {
        width: 56px;
        height: 56px;
        margin: -28px 0 0 -28px
    }
}

.blog-post__content .compare-resumes__resume--bad .compare-resumes__mark::before,
.blog-post__content .compare-resumes__resume--bad .compare-resumes__mark::after {
    background: var(--red-60)
}

.blog-post__content .compare-resumes__mark-icon {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(../../assets/media/correctb92fde25ac56d76ec420.svg) no-repeat center;
    background-size: 32px;
    top: 0;
    left: 0;
    z-index: 2;
    -webkit-transform: scale(0);
    transform: scale(0);
    will-change: transform
}

@media(max-width:767px) {
    .blog-post__content .compare-resumes__mark-icon {
        background-size: 24px
    }
}

.blog-post__content .compare-resumes__resume--bad .compare-resumes__mark-icon {
    background: url(../../assets/media/incorrect1be926bbb7bcfe6ef30a.svg) no-repeat center
}

@media(max-width:767px) {
    .blog-post__content .compare-resumes__resume--bad .compare-resumes__mark-icon {
        background-size: 32px
    }
}

.blog-post__content {}

.blog-post__content .compare-resumes__view--intro .compare-resumes__mark::after,
.blog-post__content .compare-resumes__view--intro .compare-resumes__mark::before,
.blog-post__content .compare-resumes__view--intro .compare-resumes__mark-icon {
    -webkit-animation: zoomIn .4s .2s cubic-bezier(.33, .12, .02, 1.5) forwards;
    animation: zoomIn .4s .2s cubic-bezier(.33, .12, .02, 1.5) forwards
}

.blog-post__content .compare-resumes__view--intro .compare-resumes__mark::before {
    -webkit-animation-delay: .3s;
    animation-delay: .3s
}

.blog-post__content .compare-resumes__view--intro .compare-resumes__mark-icon {
    -webkit-animation-delay: .4s;
    animation-delay: .4s
}

.blog-post__content .compare-resumes__view--intro .compare-resumes__resume--bad .compare-resumes__mark::before {
    -webkit-animation-delay: .4s;
    animation-delay: .4s
}

.blog-post__content .compare-resumes__view--intro .compare-resumes__resume--bad .compare-resumes__mark::after {
    -webkit-animation-delay: .3s;
    animation-delay: .3s
}

.blog-post__content .compare-resumes__view--intro .compare-resumes__resume--bad .compare-resumes__mark-icon {
    -webkit-animation-delay: .5s;
    animation-delay: .5s
}

.blog-post__content {}

.blog-post__content .compare-resumes__view--ready .compare-resumes__resume {
    -webkit-transition: all .3s ease;
    transition: all .3s ease
}

.blog-post__content .compare-resumes__view--ready.compare-resumes__view--hover .compare-resumes__create-resume {
    -webkit-transform: translateX(-50%) translateY(0px);
    transform: translateX(-50%) translateY(0px);
    -webkit-transition: -webkit-transform .3s .2s ease;
    transition: -webkit-transform .3s .2s ease;
    transition: transform .3s .2s ease;
    transition: transform .3s .2s ease, -webkit-transform .3s .2s ease
}

.blog-post__content .compare-resumes__view--ready.compare-resumes__view--hover .compare-resumes__resume--good {
    border-radius: 3px;
    -webkit-transform: translateX(0) translateY(48px) scale(2);
    transform: translateX(0) translateY(48px) scale(2)
}

@media(max-width:1023px) {
    .blog-post__content .compare-resumes__view--ready.compare-resumes__view--hover .compare-resumes__resume--good {
        -webkit-transform: translateX(0) translateY(32px) scale(2);
        transform: translateX(0) translateY(32px) scale(2)
    }
}

@media(max-width:767px) {
    .blog-post__content .compare-resumes__view--ready.compare-resumes__view--hover .compare-resumes__resume--good {
        -webkit-transform: translateX(0) translateY(24px) scale(2);
        transform: translateX(0) translateY(24px) scale(2)
    }
}

.blog-post__content .compare-resumes__view--ready.compare-resumes__view--hover .compare-resumes__mark {
    opacity: 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}

.blog-post__content .compare-resumes__view--ready.compare-resumes__view--hover .compare-resumes__resume--bad {
    -webkit-transform: translateX(400px) translateY(48px);
    transform: translateX(400px) translateY(48px);
    opacity: 0
}

@media(max-width:1023px) {
    .blog-post__content .compare-resumes__view--ready.compare-resumes__view--hover .compare-resumes__resume--bad {
        -webkit-transform: translateX(300px) translateY(32px);
        transform: translateX(300px) translateY(32px)
    }
}

@media(max-width:767px) {
    .blog-post__content .compare-resumes__view--ready.compare-resumes__view--hover .compare-resumes__resume--bad {
        -webkit-transform: translateX(200px) translateY(24px);
        transform: translateX(200px) translateY(24px)
    }
}

.blog-post__content {}

.partner-banner {
    display: block;
    width: 100%;
    margin: 16px 0 32px
}

.partner-banner:first-child {
    margin-top: 0
}

.partner-banner:last-child {
    margin-bottom: 0
}

.partner-banner__main {
    background: var(--neutral-10);
    border-radius: 6px 6px 0 0;
    padding: 20px 20px 16px;
    text-align: center
}

.partner-banner__logo {
    margin-bottom: 16px
}

.partner-banner__text {
    font-size: 19px;
    line-height: 24px
}

.partner-banner__button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 16px 24px;
    border-radius: 0 0 6px 6px;
    background-color: var(--neutral-90);
    color: var(--white);
    font-weight: 600;
    -webkit-transition: background-color .15s;
    transition: background-color .15s
}

.blog-post__content .related-article {
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif
}

.blog-post__content .related-article:first-child {
    margin-top: 0
}

.blog-post__content .related-article:last-child {
    margin-bottom: 0
}

.blog-post__content .related-article {
    margin: 40px 0;
    border-radius: 6px;
    background-color: var(--neutral-10);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    overflow: hidden;
    position: relative;
    min-height: 212px;
    height: 100%;
    max-height: 236px;
    background-image: none
}

.blog-post__content .related-article:hover {
    background-image: none
}

.blog-post__content .related-article:hover .related-article__title {
    color: var(--blue-50)
}

@media(max-width:1199px) {
    .blog-post__content .related-article {
        max-height: 192px
    }
}

@media(max-width:767px) {
    .blog-post__content .related-article {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        max-height: 100%;
        margin: 32px 0
    }
}

.blog-post__content .related-article--without-image {
    min-height: auto
}

.blog-post__content .related-article__image {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 256px;
    position: relative;
    overflow: hidden
}

.blog-post__content .related-article__image img {
    position: absolute;
    min-width: 1005%;
    min-height: 1005%;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) scale(.1);
    transform: translateX(-50%) translateY(-50%) scale(.1)
}

@media(max-width:767px) {
    .blog-post__content .related-article__image img {
        position: relative;
        top: 0;
        left: 0;
        min-width: 100%;
        min-height: 100%;
        width: 100%;
        height: auto;
        -webkit-transform: none;
        transform: none
    }
}

@media(max-width:1199px) {
    .blog-post__content .related-article__image {
        width: 225px
    }
}

@media(max-width:767px) {
    .blog-post__content .related-article__image {
        width: 100%
    }
}

.blog-post__content .related-article__details {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    padding: 24px 32px 28px;
    overflow: hidden;
    max-height: 236px
}

@media(max-width:1199px) {
    .blog-post__content .related-article__details {
        max-height: 188px
    }
}

@media(max-width:767px) {
    .blog-post__content .related-article__details {
        padding: 16px
    }
}

.blog-post__content .related-article__caption {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--neutral-60);
    margin-bottom: 8px
}

@media(max-width:767px) {
    .blog-post__content .related-article__caption {
        position: absolute;
        top: 16px;
        left: 16px;
        pointer-events: none;
        padding: 2px 6px;
        border-radius: 2px;
        background-color: var(--indigo-90);
        color: var(--white)
    }
}

@media(max-width:767px) {
    .blog-post__content .related-article--without-image .related-article__caption {
        position: relative;
        top: 0;
        left: 0;
        -ms-flex-item-align: start;
        align-self: flex-start
    }
}

.blog-post__content .related-article__title {
    font-size: 22px;
    line-height: 28px;
    color: var(--neutral-90);
    margin-bottom: 8px;
    background: 0 0;
    font-weight: 600;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2
}

@media(max-width:767px) {
    .blog-post__content .related-article__title {
        font-size: 19px;
        line-height: 24px;
        margin-bottom: 0
    }
}

.blog-post__content .related-article__description {
    font-size: 19px;
    line-height: 24px;
    color: var(--neutral-90);
    overflow: hidden;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4
}

@media(max-width:1199px) {
    .blog-post__content .related-article__description {
        max-height: 72px;
        -webkit-line-clamp: 3
    }
}

@media(max-width:767px) {
    .blog-post__content .related-article__description {
        font-size: 16px;
        line-height: 20px;
        max-height: 40px;
        -webkit-line-clamp: 2
    }
}

.blog-post__content .related-example {
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif
}

.blog-post__content .related-example:first-child {
    margin-top: 0
}

.blog-post__content .related-example:last-child {
    margin-bottom: 0
}

.blog-post__content .related-example {
    margin: 40px 0;
    border-radius: 6px;
    background-color: var(--neutral-10);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    position: relative;
    min-height: 252px;
    padding: 32px 32px 32px 352px;
    background-image: none
}

.blog-post__content .related-example:hover {
    background-image: none
}

.blog-post__content .related-example:hover .related-example__title {
    color: var(--blue-50)
}

@media(max-width:1199px) {
    .blog-post__content .related-example {
        padding-left: 272px
    }
}

@media(max-width:767px) {
    .blog-post__content .related-example {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        max-height: 100%;
        margin: 32px 0;
        padding: 32px 40px 0
    }
}

.blog-post__content .related-example__image {
    width: 280px;
    position: absolute;
    left: 40px;
    top: 24px;
    overflow: hidden;
    border-radius: 6px 6px 0 0;
    min-height: 252px;
    -webkit-box-shadow: 0 14px 16px rgba(207, 214, 230, .7), 0 20px 40px rgba(207, 214, 230, .12);
    box-shadow: 0 14px 16px rgba(207, 214, 230, .7), 0 20px 40px rgba(207, 214, 230, .12)
}

.blog-post__content .related-example__image img {
    width: 100%
}

@media(max-width:767px) {
    .blog-post__content .related-example__image img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0
    }
}

@media(max-width:1199px) {
    .blog-post__content .related-example__image {
        width: 200px
    }
}

@media(max-width:767px) {
    .blog-post__content .related-example__image {
        width: auto;
        position: relative;
        top: auto;
        left: auto;
        margin-right: 0;
        padding-bottom: 56%
    }
}

.blog-post__content .related-example__details {
    overflow: hidden;
    max-height: 236px
}

@media(max-width:767px) {
    .blog-post__content .related-example__details {
        margin-bottom: 32px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center
    }
}

.blog-post__content .related-example__caption {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--neutral-60);
    margin-bottom: 8px
}

@media(max-width:767px) {
    .blog-post__content .related-example__caption {
        margin-bottom: 4px
    }
}

.blog-post__content .related-example__title {
    font-size: 22px;
    line-height: 28px;
    color: var(--neutral-90);
    margin-bottom: 8px;
    background: 0 0;
    font-weight: 600;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2
}

@media(max-width:767px) {
    .blog-post__content .related-example__title {
        font-size: 19px;
        line-height: 24px;
        margin-bottom: 0
    }
}

.blog-post__content .related-example__description {
    font-size: 19px;
    line-height: 24px;
    color: var(--neutral-90);
    overflow: hidden;
    margin-bottom: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4
}

.international {
    background-color: var(--white);
    padding: 120px 44px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:1023px) {
    .international {
        padding: 80px 44px
    }
}

@media(max-width:767px) {
    .international {
        padding: 48px 20px
    }
}

.international__header {
    margin-bottom: 48px;
    text-align: center
}

@media(max-width:767px) {
    .international__header {
        margin-bottom: 40px
    }
}

.international__label {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    color: var(--blue-50);
    margin-bottom: 8px;
    font-weight: 600
}

.international__title {
    font-weight: 700;
    font-size: 46px;
    line-height: 48px;
    color: var(--neutral-90);
    margin-bottom: 12px
}

@media(max-width:1023px) {
    .international__title {
        font-size: 32px;
        line-height: 34px;
        margin-bottom: 8px
    }
}

.international__description {
    font-size: 19px;
    line-height: 24px;
    color: var(--neutral-90)
}

.international__list {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    grid-gap: 32px
}

@media(max-width:1023px) {
    .international__list {
        grid-template-columns: 1fr 1fr;
        grid-gap: 24px;
        width: 100%
    }
}

@media(max-width:767px) {
    .international__list {
        grid-template-columns: 1fr;
        grid-gap: 16px
    }
}

.international__country {
    font-size: 19px;
    line-height: 24px;
    border: 1px solid var(--neutral-15);
    border-radius: 4px;
    padding: 16px 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:767px) {
    .international__country {
        width: 100%
    }
}

.international__country-flag {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: var(--neutral-10);
    margin-right: 16px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    --flag-width: 19px;
    --flag-height: 12px
}

.international__country-domain {
    color: var(--blue-50);
    -webkit-transition: color .2s ease;
    transition: color .2s ease
}

.international__country:hover .international__country-domain {
    color: var(--blue-70)
}

.language-select {
    --flag-width: 25px;
    --flag-height: 16px;
    min-width: 200px;
    padding: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid var(--neutral-20);
    margin: 0 auto 32px;
    position: relative;
    cursor: pointer
}

.language-select svg {
    position: absolute;
    right: 12px;
    top: 12px;
    width: 20px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    fill: var(--neutral-50)
}

.language-select select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0
}

.language-select select:focus {
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none
}

@media(max-width:767px) {
    .language-select {
        margin: 0 auto 24px
    }
}

.language-select__language {
    margin-left: 10px
}

.country-flag {
    width: var(--flag-width);
    height: var(--flag-height);
    background-image: url(../../assets/media/flags0643cf08b69881e4ddd3.png);
    background-color: var(--neutral-10);
    background-size: calc(var(--flag-width) * 14) var(--flag-height);
    background-position: var(--flag-width) 0
}

.country-flag--cz {
    background-position: 0 0
}

.country-flag--dk {
    background-position: calc(var(--flag-width) * -1) 0
}

.country-flag--us {
    background-position: calc(var(--flag-width) * -2) 0
}

.country-flag--es {
    background-position: calc(var(--flag-width) * -3) 0
}

.country-flag--fi {
    background-position: calc(var(--flag-width) * -4) 0
}

.country-flag--fr {
    background-position: calc(var(--flag-width) * -5) 0
}

.country-flag--it {
    background-position: calc(var(--flag-width) * -6) 0
}

.country-flag--nl {
    background-position: calc(var(--flag-width) * -7) 0
}

.country-flag--no {
    background-position: calc(var(--flag-width) * -8) 0
}

.country-flag--pl {
    background-position: calc(var(--flag-width) * -9) 0
}

.country-flag--se {
    background-position: calc(var(--flag-width) * -10) 0
}

.country-flag--sg {
    background-position: calc(var(--flag-width) * -11) 0
}

.country-flag--de {
    background-position: calc(var(--flag-width) * -12) 0
}

.country-flag--gb {
    background-position: calc(var(--flag-width) * -13) 0
}

.page-loader {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 40px
}

.page-loader path {
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: spinnerRotation .5s infinite linear;
    animation: spinnerRotation .5s infinite linear
}

.googleOneTapModal {
    position: fixed;
    top: 80px;
    right: 24px;
    max-width: calc(100% - 48px);
    z-index: 1001
}

.googleOneTapModal iframe {
    max-width: 100%
}

.home {
    background-color: var(--white)
}

@media(min-width:1200px) {
    .home__button {
        padding: 20px 30px;
        font-size: 24px;
        line-height: 1
    }
}

.home__hero {
    position: relative;
    background-color: var(--neutral-10);
    overflow: hidden
}

@media(max-width:1199px) {
    .home__hero {
        padding: 0 44px
    }
}

@media(max-width:767px) {
    .home__hero {
        padding: 0 20px
    }
}

.home__hero-container {
    display: block;
    width: var(--container-width);
    margin: 0 auto;
    padding-top: 64px
}

@media(max-width:1199px) {
    .home__hero-container {
        max-width: 100%;
        padding: 32px 0 0;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between
    }
}

@media(max-width:767px) {
    .home__hero-container {
        padding: 48px 0 0
    }
}

.home__hero-main {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.home__hero-main-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    margin-bottom: 26px
}

@media(max-width:1023px) {
    .home__hero-main-content {
        margin-bottom: 32px
    }
}

@media(max-width:767px) {
    .home__hero-main-content {
        margin-bottom: 24px
    }
}

.home__hero-main-title {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    color: var(--indigo-90);
    font-weight: 600;
    margin-bottom: 8px;
    text-align: center;
    max-width: 740px
}

.home__hero-title {
    font-weight: 700;
    font-size: 46px;
    line-height: 48px;
    margin-bottom: 12px;
    text-align: center;
    max-width: 740px
}

@media(max-width:1023px) {
    .home__hero-title {
        margin-bottom: 16px
    }
}

@media(max-width:767px) {
    .home__hero-title {
        font-size: 32px;
        line-height: 34px;
        margin-bottom: 8px
    }
}

.home__hero-subtitle {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 24px;
    text-align: center;
    max-width: 600px
}

@media(max-width:767px) {
    .home__hero-subtitle {
        font-size: 19px;
        line-height: 24px;
        margin-bottom: 24px
    }
}

.home__hero-cta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

@media(max-width:767px) {
    .home__hero-cta {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-flow: column nowrap;
        flex-flow: column nowrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        margin: 0 auto
    }
}

.home__hero-button {
    margin-right: 16px
}

.home__hero-button:last-child {
    margin-right: 0
}

@media(max-width:767px) {
    .home__hero-button {
        margin-right: 0;
        margin-bottom: 8px
    }

    .home__hero-button:last-child {
        margin-bottom: 0
    }

    .home__hero-button .button {
        display: block
    }
}

@-webkit-keyframes pulse {
    0% {
        opacity: 0
    }

    70% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

@keyframes pulse {
    0% {
        opacity: 0
    }

    70% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

.home__hero-counter {
    display: block;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 16px;
    padding-left: 18px;
    position: relative
}

.home__hero-counter::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: var(--green-50);
    -webkit-animation: pulse 1.5s ease infinite;
    animation: pulse 1.5s ease infinite
}

@media(max-width:1023px) {
    .home__hero-counter {
        margin-bottom: 24px
    }
}

@media(max-width:767px) {
    .home__hero-counter {
        margin-bottom: 16px
    }
}

.home__hero-animated-label {
    display: inline-block;
    position: relative;
    -webkit-transition: width .3s ease;
    transition: width .3s ease
}

.home__hero-animated-label .home__hero-counter-number {
    display: inline-block;
    will-change: transform
}

.home__hero-animated-label .home__hero-counter-number.is-out {
    opacity: 0;
    -webkit-transform: translateY(16px);
    transform: translateY(16px);
    -webkit-transition: opacity .2s ease, -webkit-transform .2s ease;
    transition: opacity .2s ease, -webkit-transform .2s ease;
    transition: opacity .2s ease, transform .2s ease;
    transition: opacity .2s ease, transform .2s ease, -webkit-transform .2s ease
}

.home__hero-animated-label .home__hero-counter-number.is-in {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: translateY(-16px);
    transform: translateY(-16px);
    opacity: 0
}

.home__hero-animated-label .home__hero-counter-number.is-in.is-in-active {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
    -webkit-transition: opacity .2s ease, -webkit-transform .25s cubic-bezier(.175, .885, .32, 1.275) .05s;
    transition: opacity .2s ease, -webkit-transform .25s cubic-bezier(.175, .885, .32, 1.275) .05s;
    transition: opacity .2s ease, transform .25s cubic-bezier(.175, .885, .32, 1.275) .05s;
    transition: opacity .2s ease, transform .25s cubic-bezier(.175, .885, .32, 1.275) .05s, -webkit-transform .25s cubic-bezier(.175, .885, .32, 1.275) .05s
}

@-webkit-keyframes heroResumeSlide {
    from {
        -webkit-transform: translateY(335px);
        transform: translateY(335px)
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes heroResumeSlide {
    from {
        -webkit-transform: translateY(335px);
        transform: translateY(335px)
    }

    to {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@-webkit-keyframes heroResumeFade {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes heroResumeFade {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.home__hero-resume {
    display: block;
    position: relative;
    overflow: hidden;
    width: 770px;
    margin: 0 auto
}

@media(max-width:1023px) {
    .home__hero-resume {
        width: 100%;
        max-width: 420px
    }
}

.home__hero-resume:before {
    content: '';
    display: block;
    padding-bottom: 45.4545%
}

.home__hero-resume--loaded {
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-name: heroResumeSlide;
    animation-name: heroResumeSlide;
    -webkit-animation-timing-function: cubic-bezier(0, 1, 0, 1);
    animation-timing-function: cubic-bezier(0, 1, 0, 1)
}

.home__hero-resume-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
    opacity: 0
}

@media(max-width:1023px) {
    .home__hero-resume-image {
        border-radius: 4px 4px 0 0
    }
}

.home__hero-resume--loaded .home__hero-resume-image {
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-duration: .35s;
    animation-duration: .35s;
    -webkit-animation-name: heroResumeFade;
    animation-name: heroResumeFade
}

.indeed-message {
    width: 100%;
    padding: 8px 0;
    background-color: #fcefe5;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.indeed-message__icon {
    width: 24px;
    height: 24px;
    background-image: url(../../assets/media/hand_icondf42374e70e09ffb8e5c.png);
    background-size: contain;
    margin-right: 4px
}

.indeed-message__text {
    font-size: 16px;
    line-height: 20px
}

.indeed-message__text a {
    font-weight: 600;
    color: #5a3e43
}

.indeed-message__text a:hover {
    color: var(--blue-70)
}

.home__faq {
    padding: 120px 32px;
    background-color: var(--white)
}

@media(max-width:1023px) {
    .home__faq {
        padding: 80px 32px
    }
}

@media(max-width:767px) {
    .home__faq {
        padding: 48px 20px
    }
}

.trustpilot_top_home {
    border-bottom: 1px solid #d9deeb
}

.home__faq-container {
    max-width: 926px;
    margin: 0 auto
}

@media(max-width:767px) {
    .home__faq-container {
        width: 100%
    }
}

.home__faq-title {
    font-weight: 700;
    font-size: 46px;
    line-height: 48px;
    max-width: 496px;
    margin: 0 auto 48px;
    font-weight: 700;
    text-align: center
}

@media(max-width:1023px) {
    .home__faq-title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px;
        max-width: 320px;
        margin-bottom: 32px
    }
}

@media(max-width:767px) {
    .home__faq-title {
        font-size: 32px;
        line-height: 34px
    }
}

.home__faq-note {
    margin-top: 24px;
    color: var(--neutral-50);
    font-size: 16px;
    line-height: 20px
}

.home__faq-note a {
    color: var(--blue-50)
}

.home__faq-note a:hover {
    color: var(--blue-70)
}

.home__question {
    position: relative;
    padding: 24px 36px 24px 0;
    border-bottom: 1px solid var(--neutral-20);
    cursor: pointer
}

.home__question:last-child {
    border-bottom: none
}

.home__question:after {
    content: '';
    position: absolute;
    right: 0;
    top: 34px;
    width: 14px;
    height: 8px;
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s;
    transition: transform .2s, -webkit-transform .2s
}

.home__faq--seen .home__question:after {
    background: url(../../assets/media/downb852ede884fd69f486b0.svg) no-repeat
}

.home__question--opened:after {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.home__question-title {
    font-size: 22px;
    line-height: 28px;
    -webkit-transition: color .2s;
    transition: color .2s;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.home__question--opened .home__question-title,
.home__question:hover .home__question-title {
    color: var(--blue-50)
}

.home__question-content {
    display: none;
    opacity: 0
}

.home__question-text {
    max-width: 600px;
    padding-top: 12px
}

.home__question-text a {
    color: var(--blue-50)
}

.home__question-text a:hover {
    color: var(--blue-70)
}

.home__question-learn-more a {
    color: var(--blue-50)
}

.home__question-learn-more a:hover {
    color: var(--blue-70)
}

.home-resume-maker {
    background-color: var(--neutral-10)
}

.home-resume-maker__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

@media(max-width:1023px) {
    .home-resume-maker__header {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        max-width: 504px;
        margin: 0 auto
    }
}

.home-resume-maker__header-visual {
    width: 48.571%;
    background-color: var(--neutral-15);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 20px
}

.home-resume-maker__header-visual.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

@media(max-width:1023px) {
    .home-resume-maker__header-visual {
        width: 100%
    }
}

.home-resume-maker__header-visual:before {
    content: '';
    display: block;
    padding-bottom: 65.4411%
}

.home-resume-maker__header-content {
    width: 40%
}

@media(max-width:1023px) {
    .home-resume-maker__header-content {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
        margin-bottom: 24px;
        width: 100%;
        text-align: center
    }
}

@media(max-width:767px) {
    .home-resume-maker__header-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.home-resume-maker__header-actions {
    margin-top: 24px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:1023px) {
    .home-resume-maker__header-actions {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

@media(max-width:767px) {
    .home-resume-maker__header-actions {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-item-align: center;
        align-self: center;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch
    }
}

.home-resume-maker__watch {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-left: 16px
}

@media(max-width:767px) {
    .home-resume-maker__watch {
        margin-left: 0;
        margin-top: 12px
    }
}

.home-resume-maker__watch-icon {
    margin-right: 12px
}

.home-resume-maker__features {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 80px -16px 0
}

@media(max-width:1023px) {
    .home-resume-maker__features {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: 48px 0 0
    }
}

@media(max-width:767px) {
    .home-resume-maker__features {
        margin-top: 32px
    }
}

.home-resume-maker__feature {
    width: 33.333%;
    padding: 0 16px
}

@media(max-width:1023px) {
    .home-resume-maker__feature {
        position: relative;
        width: 100%;
        padding: 0 0 24px 88px;
        margin-bottom: 24px;
        border-bottom: 1px solid var(--neutral-15)
    }
}

@media(max-width:767px) {
    .home-resume-maker__feature {
        padding: 0;
        margin-bottom: 32px;
        border-bottom: none;
        text-align: center
    }
}

.home-resume-maker__feature:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none
}

.home-resume-maker__feature-description a {
    color: var(--blue-50)
}

.home-resume-maker__feature-description a:hover {
    color: var(--blue-70)
}

.home-resume-maker__feature-icon {
    width: 72px;
    height: 72px;
    margin-bottom: 8px;
    background-color: var(--neutral-10);
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%
}

.home-resume-maker__feature-icon.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

@media(max-width:1023px) {
    .home-resume-maker__feature-icon {
        position: absolute;
        left: 0;
        top: 0
    }
}

@media(max-width:767px) {
    .home-resume-maker__feature-icon {
        position: relative;
        top: 0;
        width: 56px;
        height: 56px;
        margin: 0 auto 8px
    }
}

.home-resume-maker__feature-title {
    display: block;
    margin-bottom: 4px;
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    color: var(--indigo-90)
}

@media(max-width:1023px) {
    .home-resume-maker__feature-title {
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 12px
    }
}

@media(max-width:767px) {
    .home-resume-maker__feature-title {
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 4px
    }
}

.home-resume-maker__lightbox {
    position: fixed;
    z-index: var(--z-home-resume-maker-lightbox);
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: none;
    opacity: 0;
    padding: 44px 160px;
    background-color: rgba(15, 20, 30, .8)
}

@media(max-width:1023px) {
    .home-resume-maker__lightbox {
        padding: 80px 96px
    }
}

@media(max-width:767px) {
    .home-resume-maker__lightbox {
        padding: 80px 20px
    }
}

.home-resume-maker__lightbox--rendered {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.home-resume-maker__lightbox--visible {
    -webkit-transition: opacity .25s;
    transition: opacity .25s;
    opacity: 1
}

.home-resume-maker__lightbox-content {
    position: relative;
    width: 100%;
    max-width: 1120px;
    background-color: var(--neutral-100);
    border-radius: 6px;
    overflow: hidden
}

.home-resume-maker__lightbox-content:before {
    content: '';
    display: block;
    padding-bottom: 56.25%
}

.home-resume-maker__lightbox-content iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%
}

.home-resume-maker__lightbox-close {
    position: absolute;
    width: 64px;
    height: 64px;
    right: 44px;
    top: 44px;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgba(15, 20, 30, .4);
    background-image: url(../../assets/media/closeaba44607250ddbf6c338.svg);
    background-repeat: no-repeat;
    background-size: 40px auto;
    background-position: 50% 50%
}

@media(max-width:1023px) {
    .home-resume-maker__lightbox-close {
        top: 20px;
        right: 20px;
        width: 48px;
        height: 48px;
        background-size: 32px auto
    }
}

@media(max-width:767px) {
    .home-resume-maker__lightbox-close {
        width: 36px;
        height: 36px;
        background-size: 24px auto
    }
}

.home-resume-maker__lightbox-close:hover {
    background-color: rgba(15, 20, 30, .55)
}

.home-letter-maker {
    background-color: var(--white)
}

@media(min-width:1200px) {
    .home-letter-maker {
        padding-top: 160px;
        padding-bottom: 160px
    }
}

.home-letter-maker__main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

@media(max-width:1023px) {
    .home-letter-maker__main {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        max-width: 504px;
        margin: 0 auto
    }
}

.home-letter-maker__visual {
    width: 48.571%;
    background-color: var(--neutral-15);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 20px
}

.home-letter-maker__visual.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

@media(max-width:1023px) {
    .home-letter-maker__visual {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
        width: 100%;
        margin-bottom: 32px
    }
}

.home-letter-maker__visual:before {
    content: '';
    display: block;
    padding-bottom: 73.53%
}

.home-letter-maker__content {
    width: 40%
}

@media(max-width:1023px) {
    .home-letter-maker__content {
        width: 100%;
        text-align: center
    }
}

.home-letter-maker__label {
    margin-bottom: 8px;
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--indigo-70)
}

.home-letter-maker__description {
    margin-bottom: 24px
}

.home-templates {
    padding-bottom: 0;
    background-color: var(--neutral-100);
    color: var(--white)
}

.home-templates__main {
    max-width: 416px;
    margin: 0 auto 64px;
    text-align: center
}

@media(max-width:767px) {
    .home-templates__main {
        margin-bottom: 32px
    }
}

.home-templates__icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 16px;
    background-color: var(--neutral-90);
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%
}

.home-templates__icon.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

.home-templates__description {
    color: var(--neutral-50)
}

.home-templates__headers {
    position: relative;
    margin-bottom: 16px;
    text-align: center
}

@media(max-width:767px) {
    .home-templates__headers {
        margin-bottom: 12px
    }
}

.home-templates__header {
    padding: 0 20px;
    opacity: 0;
    -webkit-transition: opacity .25s;
    transition: opacity .25s;
    pointer-events: none
}

.home-templates__header--active {
    opacity: 1;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    pointer-events: auto
}

.home-templates__header:not(:first-child) {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%
}

.home-templates__header-name {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 22px;
    line-height: 28px;
    font-weight: 600
}

@media(max-width:767px) {
    .home-templates__header-name {
        font-size: 19px;
        line-height: 24px
    }
}

.home-templates__header-badge {
    width: 20px;
    height: 20px;
    margin-left: 6px;
    border-radius: 50%;
    background-color: var(--amber-30)
}

.home-templates--ready .home-templates__header-badge {
    background-image: url(../../assets/media/crown9716f68ed2b78ba411d7.svg)
}

.home-templates__header-usage {
    color: var(--neutral-50);
    font-size: 14px;
    line-height: 16px
}

.home-templates__gallery {
    position: relative;
    overflow: hidden;
    height: 428px;
    -webkit-perspective: 1200px;
    perspective: 1200px;
    opacity: 0;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    pointer-events: none
}

@media(max-width:767px) {
    .home-templates__gallery {
        height: 196px
    }
}

.home-templates__gallery:after {
    content: '';
    z-index: 2;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 48px;
    pointer-events: none;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(15, 20, 30, 0)), to(rgba(15, 20, 30, 0.08)));
    background: linear-gradient(to bottom, rgba(15, 20, 30, 0), rgba(15, 20, 30, 0.08))
}

@media(max-width:767px) {
    .home-templates__gallery:after {
        height: 32px
    }
}

.home-templates--ready .home-templates__gallery {
    opacity: 1;
    pointer-events: auto
}

.home-templates__slider {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 10000%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d
}

.home-templates__item {
    width: 544px
}

@media(max-width:767px) {
    .home-templates__item {
        width: 242px
    }
}

.home-templates__item-image {
    display: block;
    position: relative;
    padding-bottom: 141.389%;
    border-radius: 6px;
    background-color: var(--white);
    background-position: 50% 0;
    background-size: cover;
    -webkit-box-shadow: 0 16px 36px rgba(15, 20, 31, .08), 0 24px 60px rgba(15, 20, 31, .08);
    box-shadow: 0 16px 36px rgba(15, 20, 31, .08), 0 24px 60px rgba(15, 20, 31, .08);
    pointer-events: none
}

.home-templates__item--active .home-templates__item-image {
    pointer-events: auto
}



.home-templates__use-link {
    position: absolute;
    left: 50%;
    bottom: 48px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

@media(max-width:767px) {
    .home-templates__use-link {
        bottom: 32px
    }
}

.home-letters {
    position: relative;
    overflow: hidden;
    background-color: var(--neutral-10)
}

.home-letters:before,
.home-letters:after {
    content: '';
    z-index: 2;
    position: absolute;
    left: 0;
    right: 0;
    height: 160px;
    background: -webkit-gradient(linear, left top, left bottom, from(var(--neutral-10)), to(rgba(239, 242, 249, 0)));
    background: linear-gradient(to bottom, var(--neutral-10), rgba(239, 242, 249, 0));
    pointer-events: none
}

@media(max-width:767px) {

    .home-letters:before,
    .home-letters:after {
        height: 80px
    }
}

.home-letters:before {
    top: 0
}

.home-letters:after {
    bottom: 0;
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1)
}

.home-letters__main {
    position: relative;
    z-index: 2;
    max-width: 544px;
    margin: 0 auto;
    padding: 120px 0;
    text-align: center;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

@media(max-width:767px) {
    .home-letters__main {
        padding: 32px 0
    }
}

.home-letters__description {
    margin-bottom: 24px
}

.home-letters__buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

@media(max-width:767px) {
    .home-letters__buttons {
        width: 100%;
        max-width: 216px;
        margin: 0 auto;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.home-letters__cta {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 16px
}

@media(max-width:767px) {
    .home-letters__cta {
        width: 100%;
        margin-right: 0;
        margin-bottom: 12px
    }

    .home-letters__cta .button {
        width: 100%
    }
}

.home-letters__cta:last-child {
    margin: 0
}

@-webkit-keyframes cardFalling {
    0% {
        -webkit-transform: translate(-50%, -500px);
        transform: translate(-50%, -500px)
    }

    100% {
        -webkit-transform: translate(-50%, 1000px);
        transform: translate(-50%, 1000px)
    }
}

@keyframes cardFalling {
    0% {
        -webkit-transform: translate(-50%, -500px);
        transform: translate(-50%, -500px)
    }

    100% {
        -webkit-transform: translate(-50%, 1000px);
        transform: translate(-50%, 1000px)
    }
}

@-webkit-keyframes cardRotation {
    0% {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg)
    }

    100% {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg)
    }
}

@keyframes cardRotation {
    0% {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg)
    }

    100% {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg)
    }
}

.home-letters__card {
    position: absolute;
    top: 0;
    left: 50%;
    width: 160px;
    -webkit-animation: cardFalling 16s linear infinite;
    animation: cardFalling 16s linear infinite;
    -webkit-perspective: 500px;
    perspective: 500px;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0)
}

@media(max-width:767px) {
    .home-letters__card {
        width: 100px
    }
}

.home-letters__card-main {
    position: relative;
    padding-bottom: 141.389%;
    -webkit-animation: cardRotation 12s linear infinite;
    animation: cardRotation 12s linear infinite;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d
}

.home-letters__card-main:after,
.home-letters__card-main:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 6px
}

.home-letters__card-main:before {
    background-color: var(--white);
    background-image: url(../../assets/media/skeleton-190b2a1e1dbef7a47ffdc.png);
    background-size: cover
}

.home-letters__card-main:after {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    background-color: var(--neutral-15)
}

.home-letters__card--1 {
    margin-left: -550px;
    -webkit-animation-delay: -16s;
    animation-delay: -16s
}

@media(max-width:767px) {
    .home-letters__card--1 {
        margin-left: -350px
    }
}

.home-letters__card--2 {
    margin-left: 550px;
    -webkit-animation-delay: -14.5s;
    animation-delay: -14.5s
}

@media(max-width:767px) {
    .home-letters__card--2 {
        margin-left: 350px
    }
}

.home-letters__card--3 {
    margin-left: -350px;
    -webkit-animation-delay: -14s;
    animation-delay: -14s
}

@media(max-width:767px) {
    .home-letters__card--3 {
        margin-left: -200px
    }
}

.home-letters__card--4 {
    margin-left: 350px;
    -webkit-animation-delay: -12.5s;
    animation-delay: -12.5s
}

@media(max-width:767px) {
    .home-letters__card--4 {
        margin-left: 200px
    }
}

.home-letters__card--5 {
    margin-left: -750px;
    -webkit-animation-delay: -12s;
    animation-delay: -12s
}

@media(max-width:767px) {
    .home-letters__card--5 {
        margin-left: -450px
    }
}

.home-letters__card--6 {
    margin-left: 150px;
    -webkit-animation-delay: -10.5s;
    animation-delay: -10.5s
}

@media(max-width:767px) {
    .home-letters__card--6 {
        margin-left: 50px
    }
}

.home-letters__card--7 {
    margin-left: -450px;
    -webkit-animation-delay: -10s;
    animation-delay: -10s
}

@media(max-width:767px) {
    .home-letters__card--7 {
        margin-left: -250px
    }
}

.home-letters__card--8 {
    margin-left: 450px;
    -webkit-animation-delay: -8.5s;
    animation-delay: -8.5s
}

@media(max-width:767px) {
    .home-letters__card--8 {
        margin-left: 250px
    }
}

.home-letters__card--7 {
    margin-left: -650px;
    -webkit-animation-delay: -8s;
    animation-delay: -8s
}

@media(max-width:767px) {
    .home-letters__card--7 {
        margin-left: -400px
    }
}

.home-letters__card--8 {
    margin-left: 650px;
    -webkit-animation-delay: -6.5s;
    animation-delay: -6.5s
}

@media(max-width:767px) {
    .home-letters__card--8 {
        margin-left: 400px
    }
}

.home-letters__card--9 {
    margin-left: -350px;
    -webkit-animation-delay: -6s;
    animation-delay: -6s
}

@media(max-width:767px) {
    .home-letters__card--9 {
        margin-left: -200px
    }
}

.home-letters__card--10 {
    margin-left: 350px;
    -webkit-animation-delay: -4.5s;
    animation-delay: -4.5s
}

@media(max-width:767px) {
    .home-letters__card--10 {
        margin-left: 200px
    }
}

.home-letters__card--11 {
    margin-left: -600px;
    -webkit-animation-delay: -4s;
    animation-delay: -4s
}

@media(max-width:767px) {
    .home-letters__card--11 {
        margin-left: -375px
    }
}

.home-letters__card--12 {
    margin-left: 600px;
    -webkit-animation-delay: -2.5s;
    animation-delay: -2.5s
}

@media(max-width:767px) {
    .home-letters__card--12 {
        margin-left: 375px
    }
}

.home-letters__card--13 {
    margin-left: -200px;
    -webkit-animation-delay: -2s;
    animation-delay: -2s
}

@media(max-width:767px) {
    .home-letters__card--13 {
        margin-left: -125px
    }
}

.home-letters__card--14 {
    margin-left: 200px;
    -webkit-animation-delay: -.5s;
    animation-delay: -.5s
}

@media(max-width:767px) {
    .home-letters__card--14 {
        margin-left: 125px
    }
}

.home-letters__card:nth-child(3n) .home-letters__card-main {
    -webkit-animation-delay: -4s;
    animation-delay: -4s
}

.home-letters__card:nth-child(3n+1) .home-letters__card-main {
    -webkit-animation-delay: -8s;
    animation-delay: -8s
}

.home-letters__card:nth-child(4n+1) .home-letters__card-main:before {
    background-image: url(../../assets/media/skeleton-2c9df8bede0e880cb1808.png)
}

.home-letters__card:nth-child(4n+2) .home-letters__card-main:before {
    background-image: url(../../assets/media/skeleton-3e3de1e4a53f043e9f188.png)
}

.home-how {
    background-color: var(--neutral-10)
}

.home-how__header {
    max-width: 544px;
    margin: 0 auto 80px;
    text-align: center
}

@media(max-width:767px) {
    .home-how__header {
        margin-bottom: 48px
    }
}

.home-how__icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 16px;
    background-color: var(--neutral-15);
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%
}

.home-how__icon.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

.home-how__description {
    margin-bottom: 24px
}

.home-how__content {
    max-width: 800px;
    margin: 0 auto
}

.home-how__tabs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

@media(max-width:767px) {
    .home-how__tabs {
        position: relative;
        border-radius: 6px 6px 0 0;
        background-color: var(--white)
    }
}

.home-how__tab {
    font-size: 22px;
    line-height: 28px;
    font-weight: 600
}

@media(min-width:768px) {
    .home-how__tab {
        width: calc(33.333% - 5px);
        padding: 16px;
        color: var(--neutral-50);
        background-color: var(--neutral-5);
        border-radius: 6px 6px 0 0;
        -webkit-transition: color .2s, background-color .2s;
        transition: color .2s, background-color .2s;
        cursor: pointer
    }
}

@media(max-width:767px) {
    .home-how__tab {
        width: 100%;
        padding: 16px 20px 0;
        opacity: 0;
        -webkit-transition: opacity .3s;
        transition: opacity .3s;
        pointer-events: none
    }

    .home-how__tab:not(:first-child) {
        position: absolute;
        left: 0;
        top: 0
    }
}

@media(min-width:768px) {
    .home-how__tab--active {
        background-color: var(--white);
        color: var(--neutral-90);
        cursor: default
    }
}

@media(max-width:767px) {
    .home-how__tab--active {
        opacity: 1
    }
}

@-webkit-keyframes tabBarScale {
    0% {
        -webkit-transform: scaleX(0);
        transform: scaleX(0)
    }

    100% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

@keyframes tabBarScale {
    0% {
        -webkit-transform: scaleX(0);
        transform: scaleX(0)
    }

    100% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1)
    }
}

.home-how__tab-bar {
    position: relative;
    overflow: hidden;
    margin-top: 8px;
    border-radius: 2px;
    background-color: var(--neutral-20)
}

.home-how__tab-bar-progress {
    background-color: var(--blue-50);
    height: 3px;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0)
}

.home-how__tab--active .home-how__tab-bar-progress {
    -webkit-animation: tabBarScale 20s linear forwards;
    animation: tabBarScale 20s linear forwards
}

.home-how__panes {
    position: relative;
    overflow: hidden;
    border-radius: 0 0 6px 6px;
    background-color: var(--white)
}

.home-how__panes-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 10000%
}

.home-how__pane {
    width: 1%;
    min-height: 300px;
    padding: 40px 392px 56px 48px;
    background-color: var(--white);
    background-position: 100% 50%;
    background-repeat: no-repeat
}

@media(max-width:1023px) {
    .home-how__pane {
        padding: 40px 328px 48px 40px
    }
}

@media(max-width:767px) {
    .home-how__pane {
        padding: 16px 20px 24px;
        min-height: 0;
        background-image: none !important
    }
}

.home-how__pane-title {
    margin-bottom: 8px;
    font-size: 26px;
    line-height: 28px;
    font-weight: 600;
    color: var(--indigo-80)
}

@media(max-width:767px) {
    .home-how__pane-title {
        margin-bottom: 4px;
        font-size: 22px;
        line-height: 28px
    }
}

.home-how__bullets {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 16px
}

@media(min-width:768px) {
    .home-how__bullets {
        display: none
    }
}

.home-how__bullet {
    width: 8px;
    height: 8px;
    margin: 0 6px;
    background-color: var(--neutral-30);
    border-radius: 50%;
    -webkit-transition: background-color .2s;
    transition: background-color .2s
}

.home-how__bullet--active {
    background-color: var(--blue-50)
}

.home-career {
    background-color: var(--indigo-80);
    color: var(--white)
}

.home-career__main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

@media(max-width:1023px) {
    .home-career__main {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        max-width: 504px;
        margin: 0 auto
    }
}

.home-career__content {
    width: 40%
}

@media(max-width:1023px) {
    .home-career__content {
        width: 100%;
        text-align: center
    }
}

.home-career__label {
    margin-bottom: 8px;
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--amber-30)
}

.home-career__description {
    margin-bottom: 24px
}

.home-career__buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:1023px) {
    .home-career__buttons {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

@media(max-width:767px) {
    .home-career__buttons {
        width: 100%;
        max-width: 200px;
        margin: 0 auto;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.home-career__cta {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 16px
}

@media(max-width:767px) {
    .home-career__cta {
        width: 100%;
        margin-right: 0;
        margin-bottom: 12px
    }

    .home-career__cta .button {
        width: 100%
    }
}

.home-career__cta:last-child {
    margin: 0
}

.home-career__visual {
    position: relative;
    width: 48.571%;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.home-career__visual:before {
    content: '';
    display: block;
    padding-bottom: 95.22%
}

@media(max-width:1023px) {
    .home-career__visual {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
        width: 100%;
        max-width: 375px;
        margin-bottom: 32px
    }
}

.home-career__preview {
    position: absolute;
    width: 51.1%;
    background-color: var(--white);
    background-size: cover;
    background-position: 50% 0;
    border-radius: 4px;
    -webkit-box-shadow: 0 4px 16px rgba(15, 20, 31, .16);
    box-shadow: 0 4px 16px rgba(15, 20, 31, .16)
}

.home-career__preview:before {
    content: '';
    display: block;
    padding-bottom: 141.389%
}

.home-career__preview--1 {
    left: 0;
    top: 0
}

.home-career__preview--2 {
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%)
}

.home-career__preview--3 {
    right: 0;
    bottom: 0
}

.container--contact {
    overflow-x: hidden
}

.contact {
    padding-top: 80px;
    max-width: 736px;
    margin: 0 auto;
    position: relative
}

@media(max-width:1023px) {
    .contact {
        padding: 60px 44px 0;
        max-width: 100%
    }
}

@media(max-width:767px) {
    .contact {
        padding: 40px 20px 0
    }
}

.contact__map {
    height: 325px;
    width: 645px;
    position: absolute;
    top: 0;
    right: -330px;
    background-image: url(../../assets/media/holland-map833c91c97e4a26e25f8a.svg);
    background-size: 645px 540px;
    background-position: 0 100%;
    z-index: -1
}

@media(max-width:1023px) {
    .contact__map {
        right: -260px
    }
}

@media(max-width:767px) {
    .contact__map {
        display: none
    }
}

.contact__map-city {
    position: absolute;
    top: 50px;
    left: 255px;
    padding-left: 34px;
    color: var(--neutral-60)
}

.contact__map-pin {
    position: absolute;
    top: calc(50% - 4px);
    left: 0;
    height: 8px;
    width: 8px;
    border-radius: 4px;
    background-color: var(--neutral-50);
    -webkit-box-shadow: 0 0 0 18px var(--neutral-30);
    box-shadow: 0 0 0 18px var(--neutral-30)
}

.contact__header {}

.contact__header-title {
    color: var(--blue-50);
    font-weight: 700;
    font-size: 54px;
    line-height: 52px;
    margin-bottom: 8px
}

@media(max-width:1023px) {
    .contact__header-title {
        font-weight: 700;
        font-size: 46px;
        line-height: 48px
    }
}

@media(max-width:767px) {
    .contact__header-title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px;
        color: var(--blue-50)
    }
}

.contact__header-subtitle {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 40px
}

@media(max-width:767px) {
    .contact__header-subtitle {
        font-size: 19px;
        line-height: 24px;
        margin-bottom: 32px
    }
}

.contact__form {
    background-color: var(--white);
    margin: 0 -80px;
    padding: 48px 80px;
    border-radius: 6px;
    margin-bottom: 40px;
    position: relative
}

@media(max-width:1023px) {
    .contact__form {
        margin: 0 -36px;
        margin-bottom: 40px;
        padding: 40px 44px
    }
}

@media(max-width:767px) {
    .contact__form {
        margin: 0 -20px;
        margin-bottom: 40px;
        padding: 40px 20px;
        border-radius: 0
    }
}

.contact__form-container {
    -webkit-transition: opacity .3s, visibility .3s;
    transition: opacity .3s, visibility .3s
}

.contact__form-container.is-hidden {
    opacity: 0;
    visibility: hidden
}

.contact__form-success {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--white);
    border-radius: 6px;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    padding: 0 24px;
    -webkit-transition: opacity .3s .1s, visibility .3s .1s;
    transition: opacity .3s .1s, visibility .3s .1s
}

.contact__form-success.contact__form-success--canceled .contact__form-success-text {
    margin-bottom: 48px
}

.contact__form-success.is-visible {
    opacity: 1;
    visibility: visible
}

.contact__form-success-image {
    width: 385px;
    height: 255px;
    background-image: url(../../assets/media/postman7c14f860d645f203607d.svg);
    background-size: 100% 100%;
    background-position: center center;
    margin-bottom: 24px
}

@media(max-width:767px) {
    .contact__form-success-image {
        width: 300px;
        height: 199px
    }
}

.contact__form-success-text {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 12px;
    max-width: 600px
}

.contact__form-title {
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 12px
}

@media(max-width:767px) {
    .contact__form-title {
        font-size: 26px;
        line-height: 28px
    }
}

.contact__faq-tabs {
    width: 100%;
    overflow-y: hidden
}

@media(max-width:767px) {
    .contact__faq-tabs {
        -webkit-user-select: none;
        margin-left: -20px;
        width: calc(100% + 40px)
    }
}

.contact__form-tabs {
    width: 100%;
    margin-bottom: 24px;
    overflow-y: hidden
}

@media(max-width:767px) {
    .contact__form-tabs {
        -webkit-user-select: none;
        margin-left: -20px;
        width: calc(100% + 40px)
    }
}

@media(max-width:767px) {
    .contact__form-tabs-scrollbar {
        margin: 0 0 24px;
        padding-bottom: 30px;
        margin-bottom: -30px;
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch
    }
}

.contact__form-tabs-scroll {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

@media(max-width:767px) {
    .contact__form-tabs-scroll {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        padding: 0 20px
    }
}

.contact__form-tabs-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: 8px;
    margin-bottom: 8px
}

.contact__form-tabs-item:last-child {
    margin-right: 0
}

.contact__form-tabs-item-control {
    font-size: 16px;
    line-height: 20px;
    padding: 6px 12px;
    border-radius: 3px;
    color: var(--neutral-60);
    background-color: var(--neutral-10);
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
    white-space: nowrap
}

.contact__form-tabs-item-control:hover {
    background-color: var(--blue-10);
    color: var(--blue-50)
}

.contact__form-tabs-item-input {
    display: none
}

.contact__form-tabs-item-input:checked+.contact__form-tabs-item-control {
    background-color: var(--blue-50);
    color: var(--white);
    pointer-events: none
}

.contact__cancellation {
    display: none;
    padding: 24px;
    margin-top: -8px;
    margin-bottom: 24px;
    border: 1px solid rgba(190, 196, 213, .5);
    border-radius: 4px
}

@media(max-width:767px) {
    .contact__cancellation {
        font-size: 16px;
        line-height: 20px;
        padding: 16px
    }
}

.contact__cancellation:before {
    content: '';
    margin-right: 20px;
    width: 36px;
    height: 36px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background-image: url(../../assets/media/note90f098a1b47f751108b1.svg);
    background-repeat: no-repeat;
    background-size: contain
}

@media(max-width:767px) {
    .contact__cancellation:before {
        display: none
    }
}

.contact__form--cancel_subscription .contact__cancellation {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.contact__cancellation-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.contact__cancellation-text {
    margin-bottom: 12px
}

.contact__cancellation-link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: var(--blue-50)
}

.contact__cancellation:hover .contact__cancellation-link {
    color: var(--blue-70)
}

.contact__cancel-note {
    display: none;
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-60)
}

.contact__cancel-note a {
    color: var(--blue-50)
}

.contact__cancel-note a:hover {
    color: var(--blue-70)
}

.contact__form--cancel_subscription .contact__cancel-note {
    display: block
}

.contact__form-fields {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    margin-bottom: 32px
}

@media(max-width:767px) {
    .contact__form-fields {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.contact__form--cancel_subscription:not(.contact__form--cancel-form) .contact__form-fields,
.contact__form--cancel_subscription:not(.contact__form--cancel-form) .contact__form-error,
.contact__form--cancel_subscription:not(.contact__form--cancel-form) .contact__form-buttons {
    display: none
}

.contact__form-column {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    margin-right: 32px
}

.contact__form-column:last-child {
    margin-right: 0
}

@media(max-width:767px) {
    .contact__form-column {
        margin-right: 0;
        margin-bottom: 20px
    }

    .contact__form-column:last-child {
        margin-bottom: 0
    }
}

.contact__form-buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:767px) {
    .contact__form-buttons {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        text-align: center
    }
}

.contact__form-buttons-caption {
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-50);
    padding-right: 40px
}

@media(max-width:767px) {
    .contact__form-buttons-caption {
        padding-right: 0;
        margin-bottom: 12px
    }
}

.contact__form-buttons-caption a {
    color: var(--blue-50)
}

.contact__form-error {
    font-size: 16px;
    line-height: 20px;
    display: none;
    padding: 12px 16px;
    margin-bottom: 24px;
    border-radius: 3px;
    background-color: rgba(251, 68, 88, .15);
    color: var(--red-50)
}

.contact__form-buttons-right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.contact__form-cancel-button {
    font-size: 19px;
    line-height: 24px;
    color: var(--neutral-50);
    -webkit-transition: color ease .2s;
    transition: color ease .2s;
    cursor: pointer;
    margin-right: 32px
}

.contact__form-cancel-button:hover {
    color: var(--red-50)
}

.contact__details {
    margin-bottom: 100px
}

.contact__details p {
    margin: 0
}

@media(max-width:1023px) {
    .contact__details {
        margin-bottom: 80px
    }
}

@media(max-width:767px) {
    .contact__details {
        margin-bottom: 60px
    }

    .contact__details br {
        display: none
    }
}

.contact__details-block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    margin-bottom: 24px
}

.contact__details-block:last-child {
    margin-bottom: 0
}

@media(max-width:767px) {
    .contact__details-block {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-bottom: 20px
    }
}

.contact__details-label {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    color: var(--neutral-60);
    width: 160px;
    margin-right: 32px
}

@media(max-width:767px) {
    .contact__details-label {
        width: 100%;
        margin-right: 0;
        margin-bottom: 2px
    }
}

.contact__details-content {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    display: block;
    max-width: 100%
}

.contact__details-text {
    max-width: 384px
}

@media(max-width:767px) {
    .contact__details-text {
        width: 100%
    }
}

.contact__details-phone {
    color: var(--blue-50)
}

.contact__details-phone:hover {
    color: var(--blue-60)
}

.contact__details-document-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row;
    flex-flow: row;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin-top: 20px;
    position: relative;
    left: -4px
}

@media(max-width:767px) {
    .contact__details-document-list {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.contact__details-document {
    padding-left: 44px;
    height: 44px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 32px;
    background-image: url(../../assets/media/file-40x402bbec57cde00011e4a68.svg);
    background-size: 40px 40px;
    background-position: 0 2px
}

.contact__details-document:hover {
    color: var(--blue-70)
}

@media(max-width:767px) {
    .contact__details-document {
        margin-bottom: 12px
    }

    .contact__details-document:last-child {
        margin-bottom: 0
    }
}

.contact__faq {
    background-color: var(--white);
    margin: 0 -80px;
    padding: 48px 80px;
    border-radius: 6px;
    margin-bottom: 40px;
    position: relative
}

@media(max-width:1023px) {
    .contact__faq {
        margin: 0 -36px;
        margin-bottom: 40px;
        padding: 40px 44px
    }
}

@media(max-width:767px) {
    .contact__faq {
        margin: 0 -20px;
        margin-bottom: 40px;
        padding: 40px 20px;
        border-radius: 0
    }
}

.contact__faq-list {
    margin-bottom: 12px
}

.contact__faq-item {
    padding: 20px 0;
    border-bottom: 1px solid var(--neutral-20);
    cursor: pointer
}

.contact__faq-item:last-child {
    border-bottom-width: 0
}

.contact__faq-item:hover .contact__faq-question {
    color: var(--blue-50)
}

.contact__faq-item.is-open .contact__faq-question {
    color: var(--neutral-50)
}

.contact__faq-item.is-open .contact__faq-chevron {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg)
}

.contact__faq-item.is-open .contact__faq-chevron path {
    fill: var(--neutral-30)
}

.contact__faq-item.is-open .contact__faq-answer {
    opacity: 1
}

.contact__faq-question {
    position: relative;
    padding-right: 32px
}

.contact__faq-chevron {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease
}

.contact__faq-chevron path {
    fill: var(--blue-50)
}

.contact__faq-answer {
    height: 0;
    overflow: hidden;
    opacity: 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}

.contact__faq-answer-inner {
    padding-top: 8px
}

.contact__faq-answer--subtitle {
    font-size: 22px;
    line-height: 28px;
    color: var(--neutral-100);
    margin-top: 12px;
    margin-bottom: 4px
}

.contact__faq-support {
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-50)
}

.contact__faq-support a {
    color: var(--blue-50)
}

.grecaptcha-badge {
    visibility: hidden
}

.cancellation {
    padding: 80px 0;
    max-width: 800px;
    margin: 0 auto
}

@media(max-width:1023px) {
    .cancellation {
        max-width: none;
        margin: 0;
        padding: 60px 44px 80px
    }
}

@media(max-width:767px) {
    .cancellation {
        padding: 40px 20px 80px
    }
}

.cancellation__header {
    margin-bottom: 40px
}

@media(max-width:767px) {
    .cancellation__header {
        margin-bottom: 32px
    }
}

.cancellation__header-title {
    font-weight: 700;
    font-size: 54px;
    line-height: 52px;
    color: var(--blue-50);
    margin-bottom: 8px
}

@media(max-width:1023px) {
    .cancellation__header-title {
        font-weight: 700;
        font-size: 46px;
        line-height: 48px
    }
}

@media(max-width:767px) {
    .cancellation__header-title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px;
        color: var(--blue-50)
    }
}

.cancellation__header-text {
    font-size: 22px;
    line-height: 28px;
    max-width: 28em
}

@media(max-width:767px) {
    .cancellation__header-text {
        font-size: 19px;
        line-height: 24px
    }
}

.cancellation__content {
    padding: 56px 64px;
    margin: 0 -64px;
    background-color: var(--white);
    border-radius: 6px
}

@media(max-width:1023px) {
    .cancellation__content {
        margin: 0 -36px;
        padding: 40px 36px
    }
}

@media(max-width:767px) {
    .cancellation__content {
        margin: 0 -20px;
        padding: 40px 20px
    }
}

.cancellation__content-inner {
    max-width: 638px
}

.cancellation__content-icon {
    display: block;
    width: 40px;
    height: 40px;
    margin-bottom: 16px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain
}

.cancellation__content-header {
    margin-bottom: 32px
}

.cancellation__content-icon--free {
    background-image: url(../../assets/media/account_free6399876998060b952f4d.svg)
}

.cancellation__content-icon--premium {
    background-image: url(../../assets/media/account_premiumc9e222b330491f1e6936.svg)
}

.cancellation__content-icon--email,
.cancellation__content-icon--success,
.cancellation__content-icon--error {
    width: 36px;
    height: 36px
}

.cancellation__content-icon--email {
    background-image: url(../../assets/media/email07e5414c7751b475b0d6.svg)
}

.cancellation__content-icon--success {
    background-image: url(../../assets/media/success03480096dd29400f7dd7.svg)
}

.cancellation__content-icon--error {
    background-image: url(../../assets/media/error8e8137bdd260f2725f03.svg)
}

.cancellation__content-title {
    font-size: 28px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 8px
}

.cancellation__content-text {
    color: var(--neutral-100)
}

.cancellation__content-text a {
    color: var(--blue-50)
}

.cancellation__content-text a:hover {
    color: var(--blue-70)
}

.cancellation__form-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

@media(max-width:767px) {
    .cancellation__form-row {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.cancellation__form-row-field {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

@media(max-width:767px) {
    .cancellation__form-row-field {
        width: 100%
    }
}

.cancellation__form-button {
    margin-top: 26px;
    margin-left: 16px
}

@media(max-width:767px) {
    .cancellation__form-button {
        margin-left: 0;
        margin-top: 16px
    }
}

.cancellation__form-captcha {
    margin-top: 24px
}

.cancellation__form-captcha:empty {
    display: none
}

.cancellation__form-error {
    font-size: 16px;
    line-height: 20px;
    padding: 12px 16px;
    margin-bottom: 24px;
    border-radius: 3px;
    background-color: rgba(251, 68, 88, .15);
    color: var(--red-50)
}

.cancellation__note,
.cancellation__content-note {
    font-size: 16px;
    line-height: 20px
}

.cancellation__note a,
.cancellation__content-note a {
    color: var(--blue-50)
}

.cancellation__note a:hover,
.cancellation__content-note a:hover {
    color: var(--blue-70)
}

.cancellation__content-note {
    margin-top: 32px;
    color: var(--neutral-60)
}

.cancellation__note {
    margin-top: 24px;
    margin-bottom: -30px;
    color: var(--neutral-50);
    text-align: center
}

.cancellation__content--state {
    text-align: center
}

.cancellation__content--state .cancellation__content-inner,
.cancellation__content--state .cancellation__content-icon {
    margin-left: auto;
    margin-right: auto
}

.cancellation__content--state .cancellation__content-inner {
    max-width: 542px
}

.cancellation__content--state .cancellation__content-text {
    color: inherit
}

.pricing {
    position: relative
}

.pricing__sailor {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 350px;
    background-image: url(../../assets/media/sailor6b2ccbbd6d5622dafed3.svg);
    background-size: 1796px 350px;
    background-position: center bottom
}

@media(max-width:1199px) {
    .pricing__sailor {
        height: 350px;
        background-size: 1796px 350px;
        background-position: 55% bottom
    }
}

@media(max-width:1023px) {
    .pricing__sailor {
        height: 275px;
        background-size: 1796px 275px;
        background-position: 55% bottom
    }
}

@media(max-width:767px) {
    .pricing__sailor {
        height: 275px;
        background-size: 1796px 275px;
        background-position: 35% center
    }
}

.pricing__container {
    max-width: 1120px;
    margin: 0 auto;
    padding-bottom: 100px;
    position: relative
}

@media(max-width:1199px) {
    .pricing__container {
        max-width: 100%;
        padding: 0 44px 80px
    }
}

@media(max-width:767px) {
    .pricing__container {
        padding: 0 20px 60px
    }
}

.pricing__header {
    height: 348px;
    position: relative
}

@media(max-width:1023px) {
    .pricing__header {
        height: 276px
    }
}

@media(max-width:767px) {
    .pricing__header {
        height: 276px
    }
}

.pricing__h1 {
    font-weight: 700;
    font-size: 54px;
    line-height: 52px;
    color: var(--blue-50);
    position: absolute;
    top: 72px;
    left: 0;
    width: 320px
}

@media(max-width:1023px) {
    .pricing__h1 {
        font-weight: 700;
        font-size: 46px;
        line-height: 48px;
        top: 60px
    }
}

@media(max-width:767px) {
    .pricing__h1 {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px;
        max-width: 220px
    }
}

.pricing__card-list {
    margin: 0 -4px 32px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

@media(max-width:1199px) {
    .pricing__card-list {
        max-width: 700px;
        margin-left: auto;
        margin-right: auto
    }
}

@media(max-width:1199px) {

    .pricing__card-list--count-1,
    .pricing__card-list--count-2,
    .pricing__card-list--count-3,
    .pricing__card-list--count-5 {
        max-width: none;
        margin-left: -4px;
        margin-right: -4px
    }
}

@media(max-width:767px) {
    .pricing__card-list {
        max-width: 400px;
        margin-left: auto;
        margin-right: auto
    }
}

.pricing__card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 25%;
    padding: 0 4px 8px
}

@media(max-width:1199px) {
    .pricing__card {
        width: 50%
    }
}

.pricing__card--count-1,
.pricing__card--count-2,
.pricing__card--count-3,
.pricing__card--count-5 {
    width: 33%
}

@media(max-width:1023px) {

    .pricing__card--count-1,
    .pricing__card--count-2,
    .pricing__card--count-3,
    .pricing__card--count-5 {
        width: 50%
    }
}

@media(max-width:767px) {
    .pricing__card {
        width: 100%;
        padding-left: 0;
        padding-right: 0
    }
}

.pricing__card-inner {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 100%;
    background-color: var(--white);
    border-radius: 6px;
    padding: 40px 24px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:1199px) {
    .pricing__card-inner {
        padding: 40px 32px
    }
}

@media(max-width:767px) {
    .pricing__card-inner {
        padding: 40px 24px
    }
}

.pricing__card-price {
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    font-weight: 600;
    position: relative;
    margin: 0 auto
}

.pricing__card-currency {
    font-size: 28px;
    line-height: 30px;
    position: absolute;
    top: 2px
}

.pricing__card-currency--before {
    right: calc(100% + 4px)
}

.pricing__card-currency--after {
    left: calc(100% + 4px)
}

.pricing__card-caption {
    color: var(--neutral-50);
    margin-bottom: 20px;
    text-transform: lowercase
}

.pricing__card-feature-list {
    margin-bottom: 32px;
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    width: 100%
}

.pricing__card-feature {
    line-height: 24px;
    font-size: 16px;
    line-height: 20px;
    padding-left: 28px;
    margin-bottom: 12px;
    position: relative
}

.pricing__card-feature:last-child {
    margin-bottom: 0
}

.pricing__card-feature.pricing__card-feature--star .pricing__card-feature-icon {
    color: var(--amber-40)
}

.pricing__card-feature-text {
    line-height: 24px
}

.pricing__card-feature-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px
}

.pricing__cta {
    display: inline-block
}

.pricing__payment-icon-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    margin-bottom: 10px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.pricing__payment-icon {
    height: 26px;
    border-radius: 4px;
    margin-right: 20px;
    background-size: 100% 100%
}

.pricing__payment-icon:last-child {
    margin-right: 0
}

.pricing__payment-icon.pricing__payment-icon--visa {
    width: 55px;
    height: 32px;
    background-image: url(../../assets/media/visa92a81a22096dd4168a04.svg)
}

.pricing__payment-icon.pricing__payment-icon--mastercard {
    width: 35px;
    height: 32px;
    background-image: url(../../assets/media/mastercard557e4e99e707ce05037a.svg)
}

.pricing__payment-icon.pricing__payment-icon--amex {
    width: 25px;
    height: 32px;
    background-image: url(../../assets/media/amex53848a7c6a119ff54cd5.svg);
    margin-right: 24px
}

.pricing__payment-icon.pricing__payment-icon--paypal {
    width: 98px;
    height: 32px;
    background-image: url(../../assets/media/paypalc15749173e05702a7282.svg)
}

.pricing__faq {
    position: relative
}

.pricing__faq-title {
    font-size: 28px;
    line-height: 30px;
    font-weight: 600;
    position: absolute;
    top: 0;
    left: 0;
    width: 200px
}

@media(max-width:1199px) {
    .pricing__faq-title {
        font-size: 26px;
        line-height: 28px;
        position: static;
        margin-bottom: 16px;
        margin-left: 32px;
        width: 100%
    }
}

@media(max-width:767px) {
    .pricing__faq-title {
        margin-left: 0
    }
}

.pricing__faq-content {
    width: 490px;
    margin: 0 auto
}

@media(max-width:1199px) {
    .pricing__faq-content {
        width: 100%
    }
}

.pricing__faq-list {
    border-radius: 6px;
    background-color: var(--white);
    margin: 0 -32px;
    margin-bottom: 16px;
    padding: 11px 32px
}

@media(max-width:1199px) {
    .pricing__faq-list {
        margin: 0 0 16px
    }
}

@media(max-width:767px) {
    .pricing__faq-list {
        margin: 0 -20px 16px;
        padding: 11px 20px
    }
}

.pricing__faq-item {
    padding: 21px 0;
    border-bottom: 1px solid var(--neutral-20);
    cursor: pointer
}

.pricing__faq-item:last-child {
    border-bottom-width: 0
}

.pricing__faq-item:hover .pricing__faq-question {
    color: var(--blue-50)
}

.pricing__faq-item.is-open .pricing__faq-question {
    color: var(--neutral-50)
}

.pricing__faq-item.is-open .pricing__faq-chevron {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
    color: var(--neutral-30)
}

.pricing__faq-item.is-open .pricing__faq-answer {
    opacity: 1
}

.pricing__faq-question {
    position: relative;
    padding-right: 32px
}

.pricing__faq-chevron {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease;
    color: var(--blue-50)
}

.pricing__faq-answer {
    overflow: hidden;
    height: 0;
    opacity: 0;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease
}

.pricing__faq-answer-inner {
    padding-top: 8px
}

.pricing__faq-caption {
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-50)
}

@media(max-width:1199px) {
    .pricing__faq-caption {
        max-width: 430px;
        margin-left: 32px
    }
}

@media(max-width:767px) {
    .pricing__faq-caption {
        margin-left: 0
    }
}

.pricing__faq-caption-link {
    color: var(--blue-50)
}

.pricing__faq-caption-link:hover {
    color: var(--blue-70)
}

.pricing__payment-icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: 16px
}

@media(max-width:767px) {
    .pricing__payment-icons {
        margin-bottom: 0
    }
}

.pricing__payment-icon {
    height: 32px;
    margin-right: 16px
}

.pricing__payment-icon:last-child {
    margin: 0
}

@media(max-width:767px) {
    .pricing__payment-icon {
        margin: 0 16px 16px 0
    }

    .pricing__payment-icon:last-child {
        margin: 0 0 16px
    }
}

.pricing__payment-text {
    max-width: 380px;
    margin: 0 auto 48px;
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-50);
    text-align: center
}

@media(max-width:1199px) {
    .pricing__payment-text {
        margin-bottom: 40px
    }
}

.documents {
    width: 100%
}

.documents__header {
    padding-top: 80px
}

@media(max-width:1023px) {
    .documents__header {
        padding-top: 60px
    }
}

@media(max-width:1023px) {
    .documents__header {
        padding-top: 40px
    }
}

.documents__header-content {
    width: 736px;
    margin: 0 auto
}

@media(max-width:1023px) {
    .documents__header-content {
        padding: 0 44px;
        width: 100%
    }
}

@media(max-width:767px) {
    .documents__header-content {
        padding: 0 20px;
        width: 100%
    }
}

.documents__title {
    font-weight: 700;
    font-size: 54px;
    line-height: 52px;
    text-align: center;
    color: var(--blue-50);
    margin-bottom: 8px
}

@media(max-width:1199px) {
    .documents__title {
        font-weight: 700;
        font-size: 46px;
        line-height: 48px;
        margin-bottom: 4px
    }
}

@media(max-width:767px) {
    .documents__title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px
    }
}

.documents__subtitle {
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    margin-bottom: 40px
}

@media(max-width:767px) {
    .documents__subtitle {
        font-size: 19px;
        line-height: 24px;
        margin-bottom: 32px
    }
}

.documents__tab-list {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap
}

@media(max-width:767px) {
    .documents__tab-list {
        display: none
    }
}

.documents__tab-select {
    display: none;
    position: relative
}

@media(max-width:767px) {
    .documents__tab-select {
        display: block
    }
}

.documents__tab-select-icon {
    position: absolute;
    top: 8px;
    right: 10px;
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
    color: var(--blue-50);
    pointer-events: none
}

.documents__tab-select-inner {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    display: block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: var(--white);
    font-weight: 600;
    color: var(--neutral-90);
    border-radius: 0;
    border: none;
    padding: 10px 16px;
    width: 100%;
    text-align: center;
    outline: none
}

.documents__tab {
    font-size: 16px;
    line-height: 20px;
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    text-align: center;
    padding: 10px;
    color: var(--neutral-50)
}

.documents__tab:hover {
    color: var(--blue-50)
}

.documents__tab.active {
    background-color: var(--white);
    color: var(--neutral-90)
}

.documents__container {
    width: 100%;
    background-color: var(--white)
}

.documents__content {
    width: 736px;
    margin: 0 auto;
    padding: 20px 0 100px
}

.documents__content figure.table {
    width: 100%;
    margin: 24px 0;
    overflow: auto
}

.documents__content table {
    font-size: 14px;
    line-height: 16px;
    min-width: 100%;
    overflow: auto
}

.documents__content table th,
.documents__content table td {
    padding: 8px;
    border: 1px solid var(--neutral-15)
}

.documents__content table th {
    background-color: var(--neutral-10);
    font-weight: 600;
    text-align: left
}

@media(max-width:1023px) {
    .documents__content {
        padding: 8px 44px 80px;
        width: 100%
    }
}

@media(max-width:767px) {
    .documents__content {
        padding: 1px 20px 60px
    }
}

.documents__content h3 {
    font-size: 26px;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 40px
}

@media(max-width:767px) {
    .documents__content h3 {
        margin-top: 32px
    }
}

.documents__content h4 {
    font-size: 19px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 24px
}

.documents__content p {
    margin-bottom: 16px;
    margin-top: 0
}

.documents__content a {
    color: var(--blue-50)
}

.documents__content ol {
    margin: 16px 0;
    padding-left: 64px
}

.documents__content li {
    margin-bottom: 12px
}

.documents__bottom {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap
}

@media(max-width:767px) {
    .documents__bottom {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-flow: column;
        flex-flow: column
    }
}

.documents__bottom-address {
    width: 360px;
    margin-right: 120px;
    padding-left: 30px;
    position: relative
}

@media(max-width:1023px) {
    .documents__bottom-address {
        margin-right: 80px
    }
}

@media(max-width:767px) {
    .documents__bottom-address {
        margin: 0;
        margin-bottom: 16px
    }
}

.documents__bottom-pin {
    position: absolute;
    top: 0;
    left: 0
}

.documents__bottom-updated {
    font-size: 16px;
    line-height: 20px;
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    color: var(--neutral-50)
}

.about {
    background-color: var(--white);
    overflow-x: hidden
}

.about__container {
    width: 928px;
    padding-top: 60px;
    margin: 0 auto
}

@media(max-width:1023px) {
    .about__container {
        width: 100%;
        padding: 60px 44px 0
    }
}

@media(max-width:767px) {
    .about__container {
        width: 100%;
        padding: 40px 20px 0
    }
}

.about__title {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--neutral-50)
}

.about__subtitle {
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    font-weight: 400;
    margin-bottom: 48px;
    max-width: 588px
}

@media(max-width:767px) {
    .about__subtitle {
        font-size: 26px;
        line-height: 28px;
        margin-bottom: 32px
    }
}

.about__subtitle p {
    margin: 0;
    padding: 0
}

.about__subtitle strong {
    color: var(--blue-50);
    font-weight: 600
}

.about__hero {
    width: calc(100% + 96px * 2);
    margin: 0 -96px 48px
}

@media(max-width:767px) {
    .about__hero {
        margin-bottom: 32px
    }
}

.about__hero-image {
    width: 50%
}

.about__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    padding-bottom: 100px
}

@media(max-width:1023px) {
    .about__content {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-flow: column nowrap;
        flex-flow: column nowrap;
        padding-bottom: 80px
    }
}

@media(max-width:767px) {
    .about__content {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-flow: column nowrap;
        flex-flow: column nowrap;
        padding-bottom: 60px
    }
}

.about__main {
    max-width: 688px;
    margin-right: 80px
}

@media(max-width:1023px) {
    .about__main {
        margin-right: 0
    }
}

.about__main-title {
    font-size: 32px;
    line-height: 34px;
    font-weight: 600;
    margin-bottom: 8px
}

@media(max-width:767px) {
    .about__main-title {
        font-size: 28px;
        line-height: 30px
    }
}

.about__main-subtitle {
    font-size: 26px;
    line-height: 28px;
    margin-bottom: 24px
}

@media(max-width:767px) {
    .about__main-subtitle {
        font-size: 19px;
        line-height: 24px
    }
}

.about__main-text p {
    margin-bottom: 12px
}

.about__aside {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    padding-top: 38px
}

@media(max-width:1023px) {
    .about__aside {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        padding-top: 12px
    }
}

@media(max-width:767px) {
    .about__aside {
        display: block
    }
}

.about__aside-item {
    margin-bottom: 32px
}

.about__aside-item:last-child {
    margin-bottom: 0
}

@media(max-width:1023px) {
    .about__aside-item {
        margin-bottom: 0;
        margin-right: 68px
    }
}

@media(max-width:767px) {
    .about__aside-item {
        margin-right: 0;
        margin-bottom: 20px
    }
}

.about__aside-number {
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    font-weight: 600
}

a.about__aside-label {
    color: var(--blue-50)
}

a.about__aside-label:hover {
    color: var(--blue-70)
}

.affiliates-signup-body {
    background-color: var(--white)
}

.affiliates-signup__container {
    width: 768px;
    padding: 0 16px 80px;
    margin: 0 auto;
    color: var(--neutral-50)
}

.affiliates-signup__container a {
    color: var(--blue-50)
}

.affiliates-signup__container a:hover {
    color: var(--blue-70)
}

@media(max-width:767px) {
    .affiliates-signup__container {
        width: 100%;
        padding: 0 20px
    }
}

.affiliates-signup__header {
    padding: 24px 0;
    border-bottom: 1px solid var(--neutral-15);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:767px) {
    .affiliates-signup__header {
        padding: 20px 0
    }
}

.affiliates-signup__logo {
    position: relative;
    margin-right: 25px;
    height: 32px
}

.affiliates-signup__logo::after {
    content: '';
    display: block;
    position: absolute;
    top: 8px;
    right: -8px;
    width: 1px;
    height: 16px;
    background-color: var(--neutral-15)
}

.affiliates-signup__logo img {
    height: 100%
}

.affiliates-signup__heading {
    margin: 40px 0
}

@media(max-width:767px) {
    .affiliates-signup__heading {
        margin: 24px 0 32px
    }
}

.affiliates-signup__link-back {
    color: var(--blue-50);
    margin-bottom: 16px;
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.affiliates-signup__link-back svg {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    margin-right: 8px
}

.affiliates-signup__link-back:hover {
    color: var(--blue-70)
}

.affiliates-signup__title {
    font-weight: 700;
    font-size: 46px;
    line-height: 48px;
    font-weight: 700;
    color: var(--neutral-90)
}

@media(max-width:767px) {
    .affiliates-signup__title {
        font-size: 32px;
        line-height: 34px
    }
}

.affiliates-signup__subtitle {
    font-size: 22px;
    line-height: 28px;
    margin-top: 12px;
    color: var(--neutral-90)
}

@media(max-width:767px) {
    .affiliates-signup__subtitle {
        font-size: 19px;
        line-height: 24px;
        margin-top: 8px
    }
}

.affiliates-signup__group {
    margin-bottom: 46px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.affiliates-signup__group-title {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--neutral-15)
}

.affiliates-signup__note {
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px
}

.affiliates-signup__field {
    width: calc(50% - 16px);
    margin-top: 24px
}

.affiliates-signup__field label {
    font-size: 16px;
    line-height: 20px;
    display: block;
    margin-bottom: 6px;
    pointer-events: none
}

.affiliates-signup__field input,
.affiliates-signup__field select,
.affiliates-signup__field textarea {
    font-size: 19px;
    line-height: 24px;
    padding: 12px 16px;
    border-radius: 4px;
    background-color: var(--neutral-10);
    width: 100%;
    border: none;
    color: var(--neutral-90);
    -webkit-transition: color .2s ease;
    transition: color .2s ease
}

.affiliates-signup__field input::-ms-input-placeholder,
.affiliates-signup__field select::-ms-input-placeholder,
.affiliates-signup__field textarea::-ms-input-placeholder {
    color: var(--neutral-50)
}

.affiliates-signup__field input::-webkit-input-placeholder,
.affiliates-signup__field select::-webkit-input-placeholder,
.affiliates-signup__field textarea::-webkit-input-placeholder {
    color: var(--neutral-50)
}

.affiliates-signup__field input:-ms-input-placeholder,
.affiliates-signup__field select:-ms-input-placeholder,
.affiliates-signup__field textarea:-ms-input-placeholder {
    color: var(--neutral-50)
}

.affiliates-signup__field input::placeholder,
.affiliates-signup__field select::placeholder,
.affiliates-signup__field textarea::placeholder {
    color: var(--neutral-50)
}

.affiliates-signup__field input:focus,
.affiliates-signup__field select:focus,
.affiliates-signup__field textarea:focus {
    outline: none
}

@media(max-width:767px) {
    .affiliates-signup__field {
        width: 100%;
        margin-top: 16px
    }
}

.affiliates-signup__field select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color: var(--neutral-90);
    cursor: pointer
}

.affiliates-signup__field--wide {
    width: 100%
}

.affiliates-signup__field--textarea {
    width: 100%;
    margin-top: 16px
}

.affiliates-signup__field--textarea label {
    font-size: 19px;
    line-height: 24px;
    color: var(--neutral-90);
    margin-bottom: 24px
}

.affiliates-signup__field-control {
    position: relative
}

.affiliates-signup__field-control input,
.affiliates-signup__field-control select {
    padding-right: 48px
}

.affiliates-signup__field-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 48px;
    height: 48px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
    cursor: pointer
}

.affiliates-signup__dropdown-icon {
    pointer-events: none;
    color: var(--blue-50)
}

.affiliates-signup__field-control:hover .affiliates-signup__dropdown-icon {
    color: var(--blue-70)
}

.affiliates-signup__password-icon {
    color: var(--blue-50)
}

.affiliates-signup__password-icon:hover {
    color: var(--blue-70)
}

.affiliates-signup__password-icon--disabled {
    color: var(--neutral-50)
}

.affiliates-signup__password-icon--disabled:hover {
    color: var(--neutral-100)
}

.affiliates-signup__check {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    cursor: pointer;
    position: relative;
    margin-top: 24px;
    color: var(--neutral-90)
}

.affiliates-signup__check input[type=checkbox] {
    visibility: hidden;
    position: absolute
}

.affiliates-signup__check input[type=checkbox]:checked+.affiliates-signup__checkbox {
    background-color: var(--blue-50)
}

.affiliates-signup__check input[type=checkbox]:checked+.affiliates-signup__checkbox svg {
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.affiliates-signup__checkbox {
    width: 24px;
    height: 24px;
    border-radius: 4px;
    background-color: var(--white);
    border: 2px solid var(--blue-50);
    -webkit-transition: background-color .2s ease;
    transition: background-color .2s ease;
    margin-right: 12px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    color: var(--white);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden
}

.affiliates-signup__checkbox svg {
    width: 100%;
    height: 100%;
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
    -webkit-transition: -webkit-transform .2s ease;
    transition: -webkit-transform .2s ease;
    transition: transform .2s ease;
    transition: transform .2s ease, -webkit-transform .2s ease
}

.affiliates-signup__radio {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    border: 2px solid var(--blue-50);
    background: var(--white);
    -webkit-box-shadow: 0 0 0 4px inset var(--white);
    box-shadow: 0 0 0 4px inset var(--white);
    margin-right: 8px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-transition: background-color .2s ease, border-color .2s ease;
    transition: background-color .2s ease, border-color .2s ease
}

.affiliates-signup__radio:hover {
    border-color: var(--blue-70)
}

.affiliates-signup__deal {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: var(--neutral-90);
    margin-top: 24px
}

@media(max-width:767px) {
    .affiliates-signup__deal {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }
}

@media(max-width:767px) {
    .affiliates-signup__deal-label {
        font-size: 16px;
        line-height: 20px;
        color: var(--neutral-50);
        width: 100%;
        margin-bottom: 8px
    }
}

.affiliates-signup__deal-select {
    margin-left: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    cursor: pointer
}

.affiliates-signup__deal-select input[type=radio] {
    visibility: hidden;
    position: absolute
}

.affiliates-signup__deal-select input[type=radio]:checked+.affiliates-signup__radio {
    background: var(--blue-50)
}

@media(max-width:767px) {
    .affiliates-signup__deal-select {
        margin-left: 0;
        width: 100%;
        margin-bottom: 8px
    }
}

.affiliates-signup__button {
    width: 100%;
    padding: 13px 16px;
    border: none;
    background-color: var(--blue-50);
    -webkit-transition: background-color .2s ease;
    transition: background-color .2s ease;
    cursor: pointer;
    color: var(--white);
    font-weight: 600;
    border-radius: 4px;
    margin-top: 24px
}

.affiliates-signup__button:focus,
.affiliates-signup__button:hover {
    outline: none;
    background-color: var(--blue-70)
}

.affiliates-signup__button:disabled {
    background-color: var(--neutral-50);
    cursor: not-allowed
}

.affiliates-signup__error {
    color: var(--red-50);
    margin-top: 24px;
    width: 100%
}

.affiliates {
    background-color: var(--white);
    overflow-x: hidden
}

.affiliates__container {
    width: 928px;
    padding-top: 56px;
    margin: 0 auto
}

@media(max-width:1023px) {
    .affiliates__container {
        width: 100%;
        padding: 32px 44px 0
    }
}

@media(max-width:767px) {
    .affiliates__container {
        width: 100%;
        padding: 24px 20px 0
    }
}

.affiliates__title {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--neutral-50)
}

.affiliates__subtitle {
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    font-weight: 400;
    margin-bottom: 20px;
    max-width: 588px
}

@media(max-width:767px) {
    .affiliates__subtitle {
        font-size: 26px;
        line-height: 28px
    }
}

.affiliates__buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 56px
}

@media(max-width:1023px) {
    .affiliates__buttons {
        margin-bottom: 48px
    }
}

@media(max-width:767px) {
    .affiliates__buttons {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-bottom: 24px
    }
}

.affiliates__hero {
    width: calc(100% + 96px * 2);
    margin: 0 -96px 48px
}

@media(max-width:767px) {
    .affiliates__hero {
        margin-bottom: 32px
    }
}

.affiliates__content {
    padding-bottom: 80px
}

@media(max-width:1023px) {
    .affiliates__content {
        padding-bottom: 60px
    }
}

@media(max-width:767px) {
    .affiliates__content {
        padding-bottom: 40px
    }
}

.affiliates__content-title {
    font-size: 28px;
    line-height: 30px;
    max-width: 480px;
    margin-bottom: 28px
}

@media(max-width:1023px) {
    .affiliates__content-title {
        margin-bottom: 24px
    }
}

@media(max-width:767px) {
    .affiliates__content-title {
        font-size: 26px;
        line-height: 28px;
        margin-bottom: 20px
    }
}

.affiliates__feature-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    border-top: 1px solid var(--neutral-20);
    padding-top: 28px
}

@media(max-width:1023px) {
    .affiliates__feature-list {
        padding-top: 24px
    }
}

@media(max-width:767px) {
    .affiliates__feature-list {
        padding-top: 20px
    }
}

.affiliates__feature-item {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-preferred-size: calc(50% - 46px);
    flex-basis: calc(50% - 46px);
    margin-right: 92px;
    padding-left: 20px;
    margin-bottom: 16px;
    position: relative
}

@media(max-width:767px) {
    .affiliates__feature-item {
        -webkit-box-flex: 0;
        -ms-flex-positive: 0;
        flex-grow: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        -ms-flex-preferred-size: calc(100%);
        flex-basis: calc(100%);
        margin-right: 0;
        margin-bottom: 12px
    }
}

.affiliates__feature-item:before {
    content: '';
    width: 7px;
    height: 7px;
    position: absolute;
    top: 10px;
    left: 0;
    border-radius: 3px;
    background-color: var(--blue-50)
}

.affiliates__feature-item:nth-child(2n) {
    margin-right: 0
}

.affiliates__feature-title {
    font-size: 22px;
    line-height: 28px;
    font-weight: 600
}

@media(max-width:1023px) {
    .affiliates__feature-title {
        font-size: 19px;
        line-height: 24px
    }
}

.affiliates__feature-text {}

.affiliates__faq {
    border-top: 1px solid var(--neutral-20);
    padding-top: 28px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin-bottom: 56px
}

@media(max-width:1023px) {
    .affiliates__faq {
        padding-top: 24px;
        margin-bottom: 40px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

@media(max-width:767px) {
    .affiliates__faq {
        padding-top: 20px;
        margin-bottom: 32px
    }
}

.affiliates__faq-column {
    max-width: 432px;
    margin-right: 64px
}

.affiliates__faq-column:last-child {
    margin: 0
}

@media(max-width:1023px) {
    .affiliates__faq-column {
        max-width: 100%;
        margin: 0 0 24px
    }
}

@media(max-width:767px) {
    .affiliates__faq-column {
        margin-bottom: 20px
    }
}

.affiliates__faq-item {
    margin-bottom: 32px
}

.affiliates__faq-item:last-child {
    margin-bottom: 0
}

@media(max-width:1023px) {
    .affiliates__faq-item {
        margin-bottom: 24px
    }
}

@media(max-width:767px) {
    .affiliates__faq-item {
        margin-bottom: 20px
    }
}

.affiliates__faq-title {
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 4px
}

.affiliates__faq-text p {
    margin-bottom: 12px
}

.affiliates__faq-text p:last-child {
    margin: 0
}

.affiliates__join-container {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    background-color: var(--neutral-90);
    padding: 64px 32px
}

@media(max-width:1023px) {
    .affiliates__join-container {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse;
        padding: 48px 24px
    }
}

@media(max-width:767px) {
    .affiliates__join-container {
        padding: 40px 24px
    }
}

.affiliates__join-block {
    text-align: center;
    color: var(--white)
}

@media(max-width:1023px) {
    .affiliates__join-block {
        margin-bottom: 104px
    }

    .affiliates__join-block:first-child {
        margin: 0
    }
}

@media(max-width:767px) {
    .affiliates__join-block {
        margin-bottom: 88px
    }

    .affiliates__join-block:first-child {
        margin: 0
    }
}

.affiliates__join-title {
    font-size: 26px;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 8px
}

@media(max-width:767px) {
    .affiliates__join-title {
        font-size: 22px;
        line-height: 28px
    }
}

.affiliates__join-subtitle {
    max-width: 400px;
    margin-bottom: 24px
}

.affiliates__join-divider {
    position: absolute;
    left: calc(50% - 1px);
    top: 0;
    width: 1px;
    height: 100%;
    background-color: var(--neutral-100)
}

@media(max-width:1023px) {
    .affiliates__join-divider {
        width: 100%;
        height: 1px;
        top: calc(50% - 1px);
        left: 0
    }
}

.affiliates__cta {
    margin-right: 20px
}

@media(max-width:767px) {
    .affiliates__cta {
        width: 100%;
        margin: 0 0 8px
    }
}

.affiliates__cta:last-child {
    margin: 0
}

.page-404 {
    padding-top: 48px;
    padding-bottom: 120px
}

@media(max-width:1023px) {
    .page-404 {
        padding-top: 32px;
        padding-bottom: 64px
    }
}

@media(max-width:767px) {
    .page-404 {
        padding-top: 16px;
        padding-bottom: 48px
    }
}

.page-404__main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:1023px) {
    .page-404__main {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center
    }
}

.page-404__info {
    width: 100%
}

@media(max-width:1199px) {
    .page-404__info {
        max-width: 50%
    }
}

@media(max-width:1023px) {
    .page-404__info {
        max-width: 505px
    }
}

@media(max-width:767px) {
    .page-404__info {
        max-width: 100%
    }
}

.page-404__title {
    font-weight: 700;
    font-size: 54px;
    line-height: 52px
}

@media(max-width:1023px) {
    .page-404__title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px
    }
}

@media(max-width:767px) {
    .page-404__title {
        font-size: 28px;
        line-height: 30px
    }
}

.page-404__subtitle {
    font-size: 22px;
    line-height: 28px;
    margin-top: 20px
}

@media(max-width:767px) {
    .page-404__subtitle {
        font-size: 19px;
        line-height: 24px;
        margin-top: 8px;
        padding: 0 20px
    }
}

.page-404__actions {
    margin-top: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.page-404__actions :first-child {
    margin-right: 20px
}

@media(max-width:1023px) {
    .page-404__actions {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 32px
    }
}

@media(max-width:767px) {
    .page-404__actions {
        margin-top: 24px;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }

    .page-404__actions :first-child {
        margin-right: 0;
        margin-bottom: 12px
    }
}

.page-404__video {
    position: relative;
    width: 640px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-left: 32px
}

.page-404__video::before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: 74.06%
}

.page-404__video {}

.page-404__video::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-box-shadow: 0 0 16px 8px var(--neutral-10) inset;
    box-shadow: 0 0 16px 8px var(--neutral-10) inset
}

.page-404__video video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

@media(max-width:1199px) {
    .page-404__video {
        width: 50%;
        -ms-flex-negative: 1;
        flex-shrink: 1
    }
}

@media(max-width:1023px) {
    .page-404__video {
        width: 352px;
        margin: 0 auto 30px
    }
}

@media(max-width:767px) {
    .page-404__video {
        width: 225px;
        margin-bottom: 22px
    }
}

.page-404__cards {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 48px
}

@media(max-width:1023px) {
    .page-404__cards {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-top: 56px
    }
}

@media(max-width:767px) {
    .page-404__cards {
        max-width: 100%;
        margin-top: 48px
    }
}

.page-404__card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border-radius: 6px;
    width: 50%;
    background: var(--white);
    padding: 24px;
    color: var(--blue-50);
    -webkit-transition: color .2s ease, -webkit-box-shadow .2s ease;
    transition: color .2s ease, -webkit-box-shadow .2s ease;
    transition: color .2s ease, box-shadow .2s ease;
    transition: color .2s ease, box-shadow .2s ease, -webkit-box-shadow .2s ease
}

.page-404__card:hover {
    color: var(--blue-70);
    -webkit-box-shadow: 0 15px 30px rgba(186, 200, 227, .4);
    box-shadow: 0 15px 30px rgba(186, 200, 227, .4)
}

@media(max-width:1023px) {
    .page-404__card {
        width: 100%
    }
}

@media(max-width:767px) {
    .page-404__card {
        padding: 16px
    }
}

.page-404__card:not(:last-child) {
    margin-right: 32px
}

@media(max-width:1023px) {
    .page-404__card:not(:last-child) {
        margin-right: 0;
        margin-bottom: 24px
    }
}

@media(max-width:767px) {
    .page-404__card:not(:last-child) {
        margin-bottom: 20px
    }
}

.page-404__card-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin-bottom: 8px
}

@media(max-width:767px) {
    .page-404__card-header {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: reverse;
        -ms-flex-direction: row-reverse;
        flex-direction: row-reverse;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between
    }
}

.page-404__card-icon {
    height: 32px;
    margin-right: 8px;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

@media(max-width:767px) {
    .page-404__card-icon {
        margin-right: 0;
        margin-left: 8px
    }
}

.page-404__card-title {
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    color: var(--neutral-90);
    padding-top: 2px
}

.page-404__card-text {
    margin-bottom: 24px;
    color: var(--neutral-90)
}

@media(max-width:1023px) {
    .page-404__card-text {
        margin-bottom: 16px
    }
}

@media(max-width:767px) {
    .page-404__card-text {
        margin-bottom: 12px
    }
}

.page-404__card-link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: currentColor;
    font-weight: 600;
    margin-top: auto
}

.page-404__card-arrow {
    width: 24px;
    height: 24px;
    -webkit-transform: translateX(0) rotate(90deg);
    transform: translateX(0) rotate(90deg);
    margin-left: 4px;
    margin-bottom: -2px;
    -webkit-transition: -webkit-transform .2s ease;
    transition: -webkit-transform .2s ease;
    transition: transform .2s ease;
    transition: transform .2s ease, -webkit-transform .2s ease
}

.page-404__card:hover .page-404__card-arrow {
    -webkit-transform: translate(4px) rotate(90deg);
    transform: translate(4px) rotate(90deg)
}

.page-404__contact-link {
    font-size: 16px;
    line-height: 20px;
    margin-top: 48px;
    text-align: center;
    color: var(--neutral-50)
}

@media(max-width:1023px) {
    .page-404__contact-link {
        margin-top: 32px
    }
}

@media(max-width:767px) {
    .page-404__contact-link {
        margin-top: 24px;
        padding: 0 20px
    }
}

.page-404__contact-link a {
    color: var(--blue-50);
    -webkit-transition: color .3s ease;
    transition: color .3s ease
}

.page-404__contact-link a:hover {
    color: var(--blue-70)
}

.unsubscribed {
    padding-top: 80px;
    padding-bottom: 80px;
    max-width: 736px;
    margin: 0 auto
}

@media(max-width:1023px) {
    .unsubscribed {
        padding: 60px 44px 0;
        max-width: 100%
    }
}

@media(max-width:767px) {
    .unsubscribed {
        padding: 40px 20px 0
    }
}

.unsubscribed__header-title {
    color: var(--blue-50);
    font-weight: 700;
    font-size: 54px;
    line-height: 52px;
    margin-bottom: 8px
}

@media(max-width:1023px) {
    .unsubscribed__header-title {
        font-weight: 700;
        font-size: 46px;
        line-height: 48px
    }
}

@media(max-width:767px) {
    .unsubscribed__header-title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px;
        color: var(--blue-50)
    }
}

.unsubscribed__header-subtitle {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 40px
}

@media(max-width:767px) {
    .unsubscribed__header-subtitle {
        font-size: 19px;
        line-height: 24px;
        margin-bottom: 32px
    }
}

.blog-post {
    position: relative;
    background-color: var(--white);
    padding-bottom: 96px
}

@media(max-width:1023px) {
    .blog-post {
        padding-bottom: 60px
    }
}

@media(max-width:767px) {
    .blog-post {
        padding-bottom: 40px
    }
}

@media(max-width:767px) {
    .blog-post.blog-post--example .blog-post__content-aside {
        display: none
    }
}

.blog-post--lazy {
    content-visibility: auto;
    contain-intrinsic-size: 3500px
}

.blog-post__content {
    margin: 0 auto;
    max-width: var(--blog-desktop-container-width);
    width: 100%;
    padding: 0 var(--blog-desktop-gutter)
}

@media(max-width:1199px) {
    .blog-post__content {
        padding: 0 var(--blog-tablet-gutter)
    }
}

@media(max-width:767px) {
    .blog-post__content {
        max-width: 540px;
        padding: 0 var(--blog-phone-gutter)
    }
}

.blog-post__content {
    padding-top: 60px
}

.blog-post__content:not(:last-child) {
    margin-bottom: 60px
}

@media(max-width:1023px) {
    .blog-post__content:not(:last-child) {
        margin-bottom: 40px
    }
}

@media(max-width:1023px) {
    .blog-post__content {
        padding-top: 32px
    }
}

.blog-post--with-single-aside .blog-post__content {
    max-width: 1200px
}

.blog-post--with-single-aside .blog-post__content .blog-post__content-aside {
    width: var(--blog-column-with-gutter-3)
}

@media(max-width:1023px) {
    .blog-post--with-single-aside .blog-post__content .blog-post__content-aside--left {
        width: 100%
    }
}

.blog-post--with-single-aside .blog-post__content .blog-post__content-main-wrapper figure.image.image--large,
.blog-post--with-single-aside .blog-post__content .blog-post__content-main-wrapper .js-wide-element,
.blog-post--with-single-aside .blog-post__content .blog-post__content-main-wrapper .wide-element {
    max-width: 1120px;
    left: 0;
    -webkit-transform: translateX(0);
    transform: translateX(0)
}

@media(max-width:1199px) {

    .blog-post--with-single-aside .blog-post__content .blog-post__content-main-wrapper figure.image.image--large,
    .blog-post--with-single-aside .blog-post__content .blog-post__content-main-wrapper .js-wide-element,
    .blog-post--with-single-aside .blog-post__content .blog-post__content-main-wrapper .wide-element {
        max-width: 1130px
    }
}

@media(max-width:1023px) {
    .blog-post__content--toc {
        padding-top: 12px
    }
}

.blog-post__content-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(max-width:1023px) {
    .blog-post__content-inner {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.blog-post__content-aside {
    width: calc(var(--blog-column-with-gutter-2) + var(--blog-desktop-gutter-step));
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: relative
}

.blog-post__content-aside--left {
    margin-right: var(--blog-column-1)
}

@media(max-width:1023px) {
    .blog-post__content-aside--left {
        width: 100%;
        margin-right: 0
    }
}

.blog-post__content-aside--right {
    margin-left: var(--blog-column-1)
}

@media(max-width:1023px) {
    .blog-post__content-aside--right {
        display: none
    }
}

.blog-post__content-main {
    z-index: 1;
    min-width: 0
}

@media(max-width:767px) {
    .blog-post__content-main {
        font-size: 17px;
        line-height: 24px
    }
}

.blog-post__content-main-wrapper {
    font-size: 19px;
    line-height: 28px;
    font-family: tt tricks, serif
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper {
        font-size: 17px;
        line-height: 24px
    }
}

.blog-post__content-main-wrapper {}

.blog-post__content-main-wrapper .chapter-label {
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase
}

.blog-post__content-main-wrapper .chapter-label:first-child {
    margin-top: 0
}

.blog-post__content-main-wrapper .chapter-label:last-child {
    margin-bottom: 0
}

.blog-post__content-main-wrapper .chapter-label {
    color: var(--neutral-50);
    text-align: center;
    margin-top: 64px;
    margin-bottom: 24px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper .chapter-label {
        margin: 48px auto 16px
    }
}

.blog-post__content-main-wrapper .chapter-label:before,
.blog-post__content-main-wrapper .chapter-label:after {
    content: '';
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    height: 1px;
    background-color: var(--neutral-20);
    display: block
}

.blog-post__content-main-wrapper .chapter-label:before {
    margin-right: 16px
}

.blog-post__content-main-wrapper .chapter-label:after {
    margin-left: 16px
}

.blog-post__content-main-wrapper {}

.blog-post__content-main-wrapper h2 {
    font-size: 32px;
    line-height: 34px;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-weight: 600;
    margin-bottom: 16px;
    margin-top: 48px
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper h2 {
        font-size: 26px;
        line-height: 28px;
        margin-bottom: 12px
    }
}

.blog-post__content-main-wrapper h2:first-child {
    margin-top: 0
}

.blog-post__content-main-wrapper h2.chapter-heading {
    font-family: tt tricks, serif;
    font-weight: 700;
    font-size: 38px;
    line-height: 40px
}

.blog-post__content-main-wrapper h2.chapter-heading:first-child {
    margin-top: 0
}

.blog-post__content-main-wrapper h2.chapter-heading:last-child {
    margin-bottom: 0
}

.blog-post__content-main-wrapper h2.chapter-heading {
    font-weight: 700;
    max-width: 578px;
    margin: 24px auto 40px;
    text-align: center
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper h2.chapter-heading {
        font-size: 28px;
        line-height: 30px;
        margin: 16px auto 24px
    }
}

.blog-post__content-main-wrapper h2 strong {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    line-height: inherit
}

.blog-post__content-main-wrapper h2 i {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    line-height: inherit
}

.blog-post__content-main-wrapper h3 {
    font-size: 28px;
    line-height: 30px;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-weight: 600;
    margin-bottom: 16px;
    margin-top: 32px
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper h3 {
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 8px
    }
}

.blog-post__content-main-wrapper h3:first-child {
    margin-top: 0
}

.blog-post__content-main-wrapper h3 strong {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    line-height: inherit
}

.blog-post__content-main-wrapper h3 i {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    line-height: inherit
}

.blog-post__content-main-wrapper h4 {
    font-size: 26px;
    line-height: 28px;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-weight: 600;
    margin-bottom: 16px;
    margin-top: 32px
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper h4 {
        font-size: 19px;
        line-height: 24px;
        margin-bottom: 8px
    }
}

.blog-post__content-main-wrapper h4:first-child {
    margin-top: 0
}

.blog-post__content-main-wrapper h4 strong {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    line-height: inherit
}

.blog-post__content-main-wrapper h4 i {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    line-height: inherit
}

.blog-post__content-main-wrapper strong {
    font-size: 22px;
    line-height: 28px;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    font-weight: 600
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper strong {
        font-size: 19px;
        line-height: 24px
    }
}

.blog-post__content-main-wrapper p {
    margin-bottom: 16px
}

.blog-post__content-main-wrapper mark {
    background-color: var(--amber-10)
}

.blog-post__content-main-wrapper figure.image:first-child {
    margin-top: 0
}

.blog-post__content-main-wrapper figure.image:last-child {
    margin-bottom: 0
}

.blog-post__content-main-wrapper figure.image {
    max-width: 100%;
    padding: 0;
    margin: 40px auto
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper figure.image {
        margin: 24px auto
    }
}

.blog-post__content-main-wrapper figure.image img {
    max-width: 100%;
    margin: 0 auto;
    border-radius: 6px;
    display: block
}

.blog-post__content-main-wrapper figure.image figcaption {
    font-size: 16px;
    line-height: 20px;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    margin-top: 16px;
    text-align: center;
    color: var(--neutral-50)
}

.blog-post__content-main-wrapper figure.image figcaption strong {
    font-size: 16px;
    line-height: 20px
}

.blog-post__content-main-wrapper .blog-post__video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0
}

.blog-post__content-main-wrapper figure.media {
    max-width: 100%;
    padding: 0;
    margin: 40px auto
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper figure.media {
        margin: 24px auto
    }
}

.blog-post__content-main-wrapper figure.media iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.blog-post__content-main-wrapper figure.image.image--bordered img {
    border: 1px solid var(--neutral-15)
}

.blog-post__content-main-wrapper figure.image.image--large {
    position: relative;
    width: calc((var(--vw) * 100) - 80px);
    max-width: 1400px;
    position: relative;
    z-index: 10
}

@media(min-width:1024px) {
    .blog-post__content-main-wrapper figure.image.image--large {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }
}

@media(max-width:1199px) {
    .blog-post__content-main-wrapper figure.image.image--large {
        width: calc((var(--vw) * 100) - 70px)
    }
}

@media(max-width:1023px) {
    .blog-post__content-main-wrapper figure.image.image--large {
        width: 100%;
        margin: 32px 0
    }
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper figure.image.image--large {
        margin: 24px 0
    }
}

.blog-post__content-main-wrapper figure.image.image--large img {
    width: 100%
}

.blog-post__content-main-wrapper figure.table {
    font-size: 16px;
    line-height: 20px;
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    width: 100%;
    margin: 24px 0;
    overflow: auto
}

.blog-post__content-main-wrapper figure.table table {
    min-width: 100%
}

.blog-post__content-main-wrapper figure.table th,
.blog-post__content-main-wrapper figure.table td {
    padding: 8px;
    border: 1px solid var(--neutral-15)
}

.blog-post__content-main-wrapper figure.table th {
    background-color: var(--neutral-10);
    font-weight: 600;
    text-align: left
}

.blog-post__content-main-wrapper figure.table strong {
    font-size: 16px;
    line-height: 20px
}

.blog-post__content-main-wrapper a {
    color: var(--blue-60);
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(17, 112, 205, 0.2)), to(rgba(17, 112, 205, 0.2)));
    background-image: linear-gradient(rgba(17, 112, 205, 0.2), rgba(17, 112, 205, 0.2));
    background-size: 100% 1px;
    background-position: left 0 bottom 1px
}

.blog-post__content-main-wrapper a:hover {
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(16, 82, 155, 0.5)), to(rgba(16, 82, 155, 0.5)));
    background-image: linear-gradient(rgba(16, 82, 155, 0.5), rgba(16, 82, 155, 0.5))
}

.blog-post__content-main-wrapper blockquote {
    font-size: 19px;
    line-height: 28px;
    font-family: tt tricks, serif
}

.blog-post__content-main-wrapper blockquote:first-child {
    margin-top: 0
}

.blog-post__content-main-wrapper blockquote:last-child {
    margin-bottom: 0
}

.blog-post__content-main-wrapper blockquote {
    margin: 40px 0
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper blockquote {
        margin: 24px 0
    }
}

.blog-post__content-main-wrapper blockquote {
    font-style: italic;
    color: var(--neutral-70);
    background-color: var(--neutral-10);
    border-radius: 6px;
    overflow: hidden;
    padding: 24px 32px;
    position: relative
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper blockquote {
        font-size: 17px;
        line-height: 24px;
        padding: 16px 24px
    }
}

.blog-post__content-main-wrapper blockquote p:last-child {
    margin-bottom: 0
}

.blog-post__content-main-wrapper blockquote:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    bottom: 0;
    background-color: var(--blue-70)
}

.blog-post__content-main-wrapper ul:first-child {
    margin-top: 0
}

.blog-post__content-main-wrapper ul:last-child {
    margin-bottom: 0
}

.blog-post__content-main-wrapper ul {
    margin: 16px 0;
    padding-left: 40px
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper ul {
        padding-left: 32px
    }
}

.blog-post__content-main-wrapper ul li {
    position: relative;
    list-style: none
}

.blog-post__content-main-wrapper ul li:not(:last-child) {
    margin-bottom: 8px
}

.blog-post__content-main-wrapper ul li:before {
    content: '';
    display: block;
    position: absolute;
    width: 6px;
    height: 6px;
    top: 12px;
    left: -22px;
    background-color: var(--blue-60);
    border-radius: 3px
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper ul li:before {
        top: 9px;
        left: -18px
    }
}

.blog-post__content-main-wrapper ol:first-child {
    margin-top: 0
}

.blog-post__content-main-wrapper ol:last-child {
    margin-bottom: 0
}

.blog-post__content-main-wrapper ol {
    margin: 16px 0;
    padding-left: 40px;
    counter-reset: ol-counter
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper ol {
        padding-left: 32px
    }
}

.blog-post__content-main-wrapper ol li {
    position: relative;
    list-style: none
}

.blog-post__content-main-wrapper ol li:not(:last-child) {
    margin-bottom: 8px
}

.blog-post__content-main-wrapper ol li:before {
    counter-increment: ol-counter;
    content: counter(ol-counter) '.';
    display: block;
    position: absolute;
    text-align: left;
    top: 0;
    right: calc(100% + 4px);
    min-width: 20px;
    color: var(--blue-60);
    font-weight: 700
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper ol li:before {
        min-width: 16px
    }
}

.blog-post__content-main-wrapper {}

.blog-post__content-main-wrapper .infographics {
    width: calc(100% + 352px);
    margin: 32px -352px 32px 0;
    height: 2240px;
    border: 0;
    border-radius: 6px;
    overflow-y: auto;
    display: block
}

@media(max-width:1023px) {
    .blog-post__content-main-wrapper .infographics {
        width: 100%;
        margin: 32px 0;
        height: 600px
    }
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper .infographics {
        margin: 24px 0
    }
}

.blog-post__content-main-wrapper .js-wide-element {
    position: relative;
    width: calc((var(--vw) * 100) - 80px);
    max-width: 1400px;
    position: relative;
    z-index: 10
}

@media(min-width:1024px) {
    .blog-post__content-main-wrapper .js-wide-element {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }
}

@media(max-width:1199px) {
    .blog-post__content-main-wrapper .js-wide-element {
        width: calc((var(--vw) * 100) - 70px)
    }
}

.blog-post__content-main-wrapper .wide-element {
    margin: 32px 0;
    position: relative;
    width: calc((var(--vw) * 100) - 80px);
    max-width: 1400px;
    position: relative;
    z-index: 10
}

@media(min-width:1024px) {
    .blog-post__content-main-wrapper .wide-element {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%)
    }
}

@media(max-width:1199px) {
    .blog-post__content-main-wrapper .wide-element {
        width: calc((var(--vw) * 100) - 70px)
    }
}

@media(max-width:1023px) {
    .blog-post__content-main-wrapper .wide-element {
        width: 100%
    }
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper .wide-element {
        margin: 24px 0
    }
}

.blog-post__content-main-wrapper {}

.blog-post__content-main-wrapper .callout:first-child {
    margin-top: 0
}

.blog-post__content-main-wrapper .callout:last-child {
    margin-bottom: 0
}

.blog-post__content-main-wrapper .callout {
    margin: 40px 0
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper .callout {
        margin: 24px 0
    }
}

.blog-post__content-main-wrapper .callout {
    width: 100%;
    border-radius: 6px;
    background-color: var(--neutral-10);
    padding: 24px 32px
}

.blog-post__content-main-wrapper .callout *:last-child {
    margin-bottom: 0
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper .callout {
        padding: 16px
    }
}

.blog-post__content-main-wrapper {}

.blog-post__content-main-wrapper .comparison {
    font-family: tt commons, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif
}

.blog-post__content-main-wrapper .comparison:first-child {
    margin-top: 0
}

.blog-post__content-main-wrapper .comparison:last-child {
    margin-bottom: 0
}

.blog-post__content-main-wrapper .comparison {
    margin: 40px 0
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper .comparison {
        margin: 24px 0
    }
}

.blog-post__content-main-wrapper .comparison {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper .comparison {
        display: block
    }
}

.blog-post__content-main-wrapper .comparison ul {
    margin: 0;
    padding-left: 16px
}

.blog-post__content-main-wrapper .comparison ul li {
    position: relative;
    list-style: none
}

.blog-post__content-main-wrapper .comparison ul li:not(:last-child) {
    margin-bottom: 8px
}

.blog-post__content-main-wrapper .comparison ul li:before {
    content: '';
    display: block;
    position: absolute;
    width: 4px;
    height: 4px;
    top: 9px;
    left: -14px;
    background-color: var(--neutral-70);
    border-radius: 2px
}

.blog-post__content-main-wrapper .comparison__block {
    -webkit-box-flex: 1;
    -ms-flex: 1 0;
    flex: 1 0;
    border-radius: 6px;
    background-color: var(--neutral-10);
    padding: 20px 24px 24px;
    margin-right: 16px
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper .comparison__block {
        margin-right: 0;
        padding: 16px;
        margin-bottom: 8px
    }
}

.blog-post__content-main-wrapper .comparison__block:last-child {
    margin-right: 0
}

@media(max-width:767px) {
    .blog-post__content-main-wrapper .comparison__block:last-child {
        margin-bottom: 0
    }
}

.blog-post__content-main-wrapper .comparison__title {
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    margin-bottom: 12px
}

.blog-post__content-main-wrapper .comparison__title-icon {
    margin-right: 12px;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: rgba(51, 157, 93, .2);
    position: relative
}

.blog-post__content-main-wrapper .comparison__title-icon:before {
    content: '';
    width: 24px;
    height: 24px;
    background-color: var(--green-50);
    display: block;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 12px
}

.blog-post__content-main-wrapper .comparison__title-icon:after {
    content: '';
    width: 20px;
    height: 20px;
    background-image: url(../../assets/media/correct64bf43d2809965eb6188.svg);
    background-size: 20px 20px;
    display: block;
    position: absolute;
    top: 6px;
    left: 6px
}

.blog-post__content-main-wrapper .comparison__title-icon.comparison__title-icon--incorrect {
    background-color: rgba(251, 68, 88, .2)
}

.blog-post__content-main-wrapper .comparison__title-icon.comparison__title-icon--incorrect:before {
    background-color: var(--red-50)
}

.blog-post__content-main-wrapper .comparison__title-icon.comparison__title-icon--incorrect:after {
    background-image: url(../../assets/media/incorrecta3d66e851a8165822123.svg)
}

.blog-post__content-main-wrapper .comparison__content {
    font-size: 19px;
    line-height: 24px;
    color: var(--neutral-70)
}

.blog-post__content-main-wrapper .comparison__content *:last-child {
    margin-bottom: 0
}

:root {
    --blog-desktop-container-width: 1480px;
    --blog-tabet-container-width: 980px;
    --blog-desktop-gutter: 40px;
    --blog-tablet-gutter: 32px;
    --blog-phone-gutter: 20px;
    --blog-desktop-column-step: 5.714%;
    --blog-desktop-gutter-step: 2.857%;
    --blog-tablet-column-step: 7.692%;
    --blog-tablet-gutter-step: 3.846%;
    --blog-column-1: var(--blog-desktop-column-step);
    --blog-column-2: 14.285%;
    --blog-column-3: 22.856%;
    --blog-column-4: 31.427%;
    --blog-column-5: 39.998%;
    --blog-column-6: 48.569%;
    --blog-column-7: 57.14%;
    --blog-column-with-gutter-1: 8.571%;
    --blog-column-with-gutter-2: 17.142%;
    --blog-column-with-gutter-3: 25.713%;
    --blog-column-with-gutter-5: 42.855%;
    --blog-column-1-inside-desktop-column-9: 7.4%;
    --blog-gutter-1-inside-desktop-column-9: 3.7%;
    --blog-column-3-inside-desktop-column-9: 29.63%;
    --blog-column-1-tablet: var(--blog-tablet-column-step);
    --blog-column-2-tablet-with-gutter: 23.076%
}

.blog-main {
    position: relative;
    background-color: var(--white);
    padding-bottom: 80px
}

@media(max-width:767px) {
    .blog-main {
        padding-bottom: 60px
    }
}

.blog-main__container {
    margin: 0 auto;
    max-width: var(--blog-desktop-container-width);
    width: 100%;
    padding: 0 var(--blog-desktop-gutter)
}

@media(max-width:1199px) {
    .blog-main__container {
        padding: 0 var(--blog-tablet-gutter)
    }
}

@media(max-width:767px) {
    .blog-main__container {
        max-width: 540px;
        padding: 0 var(--blog-phone-gutter)
    }
}

.blog-main__container.blog-main__container--show-search-results .subscribe-newsletter,
.blog-main__container.blog-main__container--show-search-results .page-loader,
.blog-main__container.blog-main__container--show-search-results .blog-main__hero,
.blog-main__container.blog-main__container--show-search-results .blog-main__main-post,
.blog-main__container.blog-main__container--show-search-results .blog-main__bottom-box,
.blog-main__container.blog-main__container--show-search-results .blog-main__posts {
    display: none
}

@media(min-width:1024px) {
    .blog-main__container.blog-main__container--show-search-results .blog-main__content {
        width: 0
    }
}

.blog-main__container.blog-main__container--show-search-results .blog-main__search-result {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.blog-main__container.blog-main__container--show-search-results .blog-main__top-box {
    border-bottom: 0
}

.blog-main__container--category {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: unset;
    -ms-flex-align: unset;
    align-items: unset
}

@media(max-width:1023px) {
    .blog-main__container--category {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

@media(min-width:1024px) {
    .blog-main__container--category .blog-main__hero {
        border-bottom: 0
    }

    .blog-main__container--category .blog-main__hero:not(:last-child) {
        margin-bottom: 0
    }
}


.blog-main__main-post:not(:last-child) {
    margin-bottom: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(101, 110, 131, .15)
}

@media(max-width:767px) {
    .blog-main__main-post {
        margin-top: 24px
    }
}

.blog-main__search-result {
    display: none
}

.blog-main__search-result-counter {
    color: var(--neutral-60)
}

.blog-main__search-result-counter:not(:last-child) {
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(101, 110, 131, .15);
    margin-bottom: 40px
}

@media(max-width:767px) {
    .blog-main__search-result-counter:not(:last-child) {
        margin-bottom: 24px
    }
}

.blog-main__search-spinner {
    width: 100%;
    height: 640px;
    display: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: var(--blue-50)
}

.blog-main__search-spinner svg {
    -webkit-animation: spinnerRotation .5s infinite linear;
    animation: spinnerRotation .5s infinite linear
}

@media(max-width:767px) {
    .blog-main__search-spinner {
        height: 50vh
    }
}

.blog-main__search-spinner--visible {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.blog-main__empty-search {
    width: 100%;
    text-align: center;
    padding: 120px 0
}

@media(max-width:767px) {
    .blog-main__empty-search {
        padding: 64px 0
    }
}

.blog-main__empty-search-title {
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    margin-bottom: 8px;
    font-weight: 700
}

.blog-main__hero {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    border-bottom: 1px solid rgba(101, 110, 131, .15)
}

.blog-main__hero:not(:last-child) {
    margin-bottom: 40px
}

@media(max-width:1023px) {
    .blog-main__hero:not(:last-child) {
        margin-bottom: 20px
    }
}

@media(max-width:767px) {
    .blog-main__hero:not(:last-child) {
        margin-bottom: 12px
    }
}

@media(max-width:767px) {
    .blog-main__hero {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center;
        padding-bottom: 0
    }
}

.blog-main__hero-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin: 80px 3.7% 80px 0
}

@media(max-width:1023px) {
    .blog-main__hero-content {
        margin: 36px 3.7% 60px 0
    }
}

@media(max-width:767px) {
    .blog-main__hero-content {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
        margin: 0 0 20px;
        width: 100%;
        max-width: 280px
    }
}

.blog-main__hero-aside {
    width: 312px;
    height: 260px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-item-align: center;
    align-self: center
}

@media(max-width:1023px) {
    .blog-main__hero-aside {
        width: 258px;
        height: 215px
    }
}

@media(max-width:767px) {
    .blog-main__hero-aside {
        width: auto;
        height: auto;
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
        margin-bottom: 8px
    }
}

.blog-main__cover {
    height: 100%
}

@media(max-width:767px) {
    .blog-main__cover {
        height: 150px
    }
}

.blog-main__title {
    font-weight: 700;
    font-size: 54px;
    line-height: 52px;
    font-weight: 400
}

.blog-main__title:not(:last-child) {
    margin-bottom: 20px
}

@media(max-width:1199px) {
    .blog-main__title {
        font-weight: 700;
        font-size: 46px;
        line-height: 48px;
        font-weight: 400
    }

    .blog-main__title:not(:last-child) {
        margin-bottom: 12px
    }
}

@media(max-width:767px) {
    .blog-main__title {
        font-size: 28px;
        line-height: 30px
    }
}

.blog-main__subtitle {
    font-size: 28px;
    line-height: 30px
}

@media(max-width:1199px) {
    .blog-main__subtitle {
        font-size: 26px;
        line-height: 28px
    }
}

@media(max-width:767px) {
    .blog-main__subtitle {
        font-size: 19px;
        line-height: 24px
    }
}

.blog-main__promo {
    width: 100%
}

.blog-main__promo:not(:last-child) {
    margin-bottom: 40px
}

@media(max-width:767px) {
    .blog-main__promo:not(:last-child) {
        margin-bottom: 32px
    }
}

.blog-main__promo-aside {
    width: var(--blog-column-3-inside-desktop-column-9);
    margin-left: var(--blog-column-1-inside-desktop-column-9);
    -ms-flex-negative: 0;
    flex-shrink: 0
}

@media(max-width:1023px) {
    .blog-main__promo-aside {
        display: none
    }
}

.blog-main__promo-aside-content {
    position: -webkit-sticky;
    position: sticky;
    top: 125px;
    left: 0
}

.blog-main__posts {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.blog-main__posts-content {
    width: 100%
}

.blog-main__posts-content-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(max-width:1023px) {
    .blog-main__posts-content-inner {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

.blog-main__posts-feed {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

@media(max-width:1023px) {
    .blog-main__posts-feed {
        max-width: 500px
    }
}

@-webkit-keyframes spinnerRotation {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@keyframes spinnerRotation {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

.sponsorship {
    width: 100%;
    height: 100%;
    padding: 40px 32px 160px
}

@media(max-width:1023px) {
    .sponsorship {
        padding: 32px 32px 80px
    }
}

@media(max-width:767px) {
    .sponsorship {
        padding: 32px 20px 56px
    }
}

.sponsorship__section {
    max-width: 1120px;
    margin: 0 auto 136px
}

.sponsorship__section:last-child {
    margin: 0 auto
}

@media(max-width:1023px) {
    .sponsorship__section {
        margin: 0 auto 72px
    }
}

@media(max-width:767px) {
    .sponsorship__section {
        margin: 0 auto 48px
    }
}

.sponsorship__section-title {
    font-weight: 700;
    font-size: 46px;
    line-height: 48px;
    margin-bottom: 8px;
    text-align: center
}

@media(max-width:1023px) {
    .sponsorship__section-title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px
    }
}

@media(max-width:767px) {
    .sponsorship__section-title {
        margin-bottom: 4px;
        font-size: 28px;
        line-height: 30px
    }
}

.sponsorship__section-subtitle {
    font-size: 22px;
    line-height: 28px;
    color: var(--neutral-50);
    margin-bottom: 48px;
    text-align: center
}

@media(max-width:1023px) {
    .sponsorship__section-subtitle {
        margin-bottom: 32px
    }
}

@media(max-width:767px) {
    .sponsorship__section-subtitle {
        font-size: 19px;
        line-height: 24px;
        margin-bottom: 16px
    }
}

.sponsorship__head {
    position: relative;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

@media(max-width:767px) {
    .sponsorship__head {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse
    }
}

.sponsorship__head-content {
    padding-top: 72px
}

@media(max-width:1023px) {
    .sponsorship__head-content {
        padding: 0;
        min-height: 405px
    }
}

@media(max-width:767px) {
    .sponsorship__head-content {
        padding: 0;
        min-height: auto
    }
}

.sponsorship__head-title {
    font-weight: 700;
    font-size: 54px;
    line-height: 52px;
    color: var(--blue-50);
    max-width: 544px;
    margin-bottom: 16px
}

@media(max-width:1023px) {
    .sponsorship__head-title {
        max-width: 328px;
        font-weight: 700;
        font-size: 38px;
        line-height: 40px
    }
}

@media(max-width:767px) {
    .sponsorship__head-title {
        max-width: 100%;
        font-size: 32px;
        line-height: 34px;
        margin-bottom: 8px
    }
}

.sponsorship__head-subtitile {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--neutral-50);
    margin-bottom: 12px
}

@media(max-width:1023px) {
    .sponsorship__head-subtitile {
        margin-bottom: 8px
    }
}

@media(max-width:767px) {
    .sponsorship__head-subtitile {
        margin-bottom: 4px
    }
}

.sponsorship__head-text {
    max-width: 446px;
    margin-bottom: 32px
}

@media(max-width:1023px) {
    .sponsorship__head-text {
        max-width: 328px
    }
}

@media(max-width:767px) {
    .sponsorship__head-text {
        max-width: 100%;
        margin-bottom: 16px
    }
}

@media(max-width:767px) {
    .sponsorship__head-button {
        width: 100%
    }
}

.sponsorship__head-image {
    width: 576px;
    height: 504px
}

@media(max-width:1023px) {
    .sponsorship__head-image {
        position: absolute;
        width: 462px;
        height: 405px;
        right: 0;
        top: 0;
        z-index: -1
    }
}

@media(max-width:767px) {
    .sponsorship__head-image {
        position: relative;
        width: 100%;
        max-width: 335px;
        max-height: 293px;
        margin: 0 auto
    }
}

.sponsorship__sponsors {
    width: 100%
}

.sponsorship__sponsors-list {}

.sponsorship__sponsors-item {
    display: inline-block;
    width: 352px;
    background-color: var(--white);
    border-radius: 6px;
    padding: 32px;
    margin: 0 32px 32px 0
}

.sponsorship__sponsors-item:nth-child(3n) {
    margin: 0
}

.sponsorship__sponsors-item-head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 24px
}

.sponsorship__sponsors-item-logo {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #000;
    margin-right: 16px
}

.sponsorship__sponsors-item-info {}

.sponsorship__sponsors-item-title {}

.sponsorship__sponsors-item-subtitle {
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-60)
}

.sponsorship__sponsors-item-text {
    margin-bottom: 12px
}

.sponsorship__sponsors-item-link {
    color: var(--blue-50)
}

.sponsorship__clients-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

@media(max-width:1023px) {
    .sponsorship__clients-container {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

@media(max-width:767px) {
    .sponsorship__clients-container {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse
    }
}

.sponsorship__clients-image {
    width: 353px;
    height: 221px;
    margin-right: 32px
}

@media(max-width:1023px) {
    .sponsorship__clients-image {
        display: none
    }
}

@media(max-width:767px) {
    .sponsorship__clients-image {
        display: block;
        margin: 0 auto
    }
}

.sponsorship__clients-column {
    max-width: 332px;
    margin-right: 32px
}

.sponsorship__clients-column:last-child {
    margin: 0
}

@media(max-width:767px) {
    .sponsorship__clients-column {
        max-width: 100%;
        margin: 0 0 32px
    }

    .sponsorship__clients-column:last-child {
        margin: 0 0 32px
    }
}

.sponsorship__clients-column-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 16px
}

@media(max-width:767px) {
    .sponsorship__clients-column-title {
        margin-bottom: 8px
    }
}

.sponsorship__clients-column-title-icon {
    width: 16px;
    height: 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background-color: var(--green-70);
    border-radius: 50%;
    margin-right: 8px;
    background-image: url(../../assets/media/tickef9828423656a7b24283.svg);
    background-position: center center
}

.sponsorship__clients-column-title-text {
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    color: var(--green-70)
}

.sponsorship__clients-column-title--red {
    color: var(--red-50)
}

.sponsorship__clients-column-title-icon--red {
    background-image: url(../../assets/media/cross9b9d2998bb7d9a50f5a6.svg);
    background-color: var(--red-50)
}

.sponsorship__clients-item {
    position: relative;
    margin-bottom: 8px;
    padding-left: 12px
}

.sponsorship__clients-item:last-child {
    margin: 0
}

.sponsorship__clients-item::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: var(--neutral-90);
    position: absolute;
    left: 0;
    top: 8px
}

.sponsorship__apply {
    padding: 72px 32px 104px;
    background-color: var(--white);
    overflow: hidden;
    max-height: 2100px;
    -webkit-transition: max-height .3s ease;
    transition: max-height .3s ease
}

.sponsorship__apply.small-height {
    max-height: 400px;
    padding: 72px 32px
}

@media(max-width:1023px) {
    .sponsorship__apply {
        padding: 48px 32px 72px
    }
}

@media(max-width:767px) {
    .sponsorship__apply {
        padding: 32px 20px 56px
    }
}

@-webkit-keyframes hideForm {
    0% {
        opacity: 1
    }

    90% {
        opacity: 0;
        height: auto
    }

    100% {
        opacity: 0;
        height: 0
    }
}

@keyframes hideForm {
    0% {
        opacity: 1
    }

    90% {
        opacity: 0;
        height: auto
    }

    100% {
        opacity: 0;
        height: 0
    }
}

.sponsorship__apply-form-container {
    opacity: 1
}

.sponsorship__apply-form-container.fade-out {
    -webkit-animation: hideForm .5s forwards;
    animation: hideForm .5s forwards
}

.sponsorship__apply-form {
    width: 100%;
    max-width: 736px;
    margin: 0 auto
}

.sponsorship__apply-form-section {
    margin-bottom: 56px
}

@media(max-width:767px) {
    .sponsorship__apply-form-section {
        margin-bottom: 24px
    }
}

.sponsorship__apply-form-title {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 20px;
    font-weight: 600
}

.sponsorship__apply-form-line {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    margin-bottom: 20px
}

@media(max-width:767px) {
    .sponsorship__apply-form-line {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: 0
    }
}

.sponsorship__textfield {
    width: 100%;
    max-width: 352px
}

.sponsorship__textfield:first-child {
    margin-right: 32px
}

@media(max-width:767px) {
    .sponsorship__textfield {
        max-width: 100%;
        margin: 0 0 16px
    }
}

.sponsorship__textfield-button {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    display: inline-block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    text-align: center;
    color: var(--white);
    background-color: var(--blue-50);
    padding: 12px 24px;
    border-radius: 0 4px 4px 0;
    -webkit-transition: background-color .1s ease;
    transition: background-color .1s ease;
    cursor: pointer;
    border-width: 0;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.sponsorship__textfield-button:hover {
    background-color: var(--blue-60)
}

.sponsorship__textfield-button:active {
    background-color: var(--blue-70)
}

.sponsorship__upload-region {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 38px 24px;
    cursor: pointer;
    font-size: 14px;
    line-height: 16px;
    color: var(--neutral-50);
    border: 3px dashed var(--neutral-30);
    -o-border-image: url(../../assets/media/border-dash-roundedcc65a62b4be73eb7e2d8.svg);
    border-image: url(../../assets/media/border-dash-roundedcc65a62b4be73eb7e2d8.svg);
    border-image-slice: 3;
    border-image-repeat: round
}

.sponsorship__upload-region:after {
    content: '';
    position: absolute;
    left: -3px;
    top: -3px;
    right: -3px;
    bottom: -3px;
    border: 3px dashed var(--blue-50);
    -o-border-image: url(../../assets/media/border-dash-rounded-hover014846788d20e13b6cc6.svg);
    border-image: url(../../assets/media/border-dash-rounded-hover014846788d20e13b6cc6.svg);
    border-image-slice: 3;
    border-image-repeat: round;
    pointer-events: none;
    opacity: 0;
    -webkit-transition: opacity .1s;
    transition: opacity .1s
}

.sponsorship__upload-region.is-hidden {
    display: none
}

.sponsorship__upload-region:hover::after {
    opacity: 1
}

.sponsorship__upload-preview {
    display: none;
    margin-top: 8px
}

.sponsorship__upload-preview.is-visible {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.sponsorship__upload-preview-file {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.sponsorship__upload-preview-image {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid var(--neutral-15);
    margin-right: 8px;
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat
}

.sponsorship__upload-preview-name {
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-60);
    max-width: 156px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.sponsorship__upload-preview-button {
    font-size: 16px;
    line-height: 20px;
    color: var(--blue-50);
    padding: 4px;
    cursor: pointer
}

.sponsorship__upload-input {
    position: absolute;
    height: 0;
    width: 0;
    top: 0;
    left: 0;
    display: block;
    z-index: 1
}

@media(max-width:767px) {
    .sponsorship__apply-form-button {
        width: 100%
    }
}

.sposnorship__apply-result {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    opacity: 0;
    height: 0;
    -webkit-transition: opacity .5s ease;
    transition: opacity .5s ease;
    -webkit-transition-delay: .5s;
    transition-delay: .5s
}

.sposnorship__apply-result.fade-in {
    opacity: 1;
    height: auto
}

.sposnorship__apply-result-image {
    width: 118px;
    height: 100px;
    background-image: url(../../assets/media/email_sentec31e23e12344657e338.svg);
    background-position: center center;
    background-size: contain
}

.billing-faq__content {
    margin: auto;
    max-width: 736px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    text-align: center;
    padding: 48px 0 120px
}

@media(max-width:1023px) {
    .billing-faq__content {
        width: 100%;
        max-width: 100%;
        padding: 32px 44px 80px
    }
}

@media(max-width:767px) {
    .billing-faq__content {
        padding: 32px 20px 48px
    }
}

.billing-faq__image {
    width: 400px;
    margin: 0 auto 20px
}

@media(max-width:1023px) {
    .billing-faq__image {
        width: 240px;
        margin-bottom: 16px
    }
}

.billing-faq__title {
    font-weight: 700;
    font-size: 54px;
    line-height: 52px;
    margin-bottom: 24px
}

@media(max-width:1023px) {
    .billing-faq__title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px;
        margin-bottom: 8px
    }
}

@media(max-width:767px) {
    .billing-faq__title {
        font-size: 32px;
        line-height: 34px
    }
}

.billing-faq__actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin: 48px 0 32px
}

@media(max-width:1023px) {
    .billing-faq__actions {
        grid-gap: 24px;
        margin: 40px 0 24px
    }
}

@media(max-width:767px) {
    .billing-faq__actions {
        grid-template-columns: 1fr;
        grid-gap: 20px;
        margin: 40px 0 20px
    }
}

.billing-faq__action {
    background-color: var(--white);
    border-radius: 6px;
    padding: 24px;
    text-align: left
}

@media(max-width:767px) {
    .billing-faq__action {
        text-align: center
    }
}

.billing-faq__action-title {
    font-size: 22px;
    line-height: 28px;
    font-weight: 700;
    margin-bottom: 8px
}

@media(max-width:767px) {
    .billing-faq__action-title {
        margin-botom: 4px
    }
}

.billing-faq__action-subtitle {
    margin-bottom: 20px
}

@media(max-width:767px) {
    .billing-faq__action-subtitle {
        margin-botom: 16px
    }
}

.billing-faq__questions {
    text-align: left;
    border-radius: 6px;
    background-color: var(--white);
    padding: 8px 32px
}

@media(max-width:767px) {
    .billing-faq__questions {
        padding: 4px 20px
    }
}

.billing-faq__question {
    padding: 24px 40px 24px 0;
    border-bottom: 1px solid var(--neutral-15);
    position: relative;
    cursor: pointer
}

.billing-faq__question:after {
    content: '';
    position: absolute;
    right: 0;
    top: 34px;
    width: 14px;
    height: 8px;
    background: url(../../assets/media/downb852ede884fd69f486b0.svg) no-repeat;
    -webkit-transition: -webkit-transform .2s;
    transition: -webkit-transform .2s;
    transition: transform .2s;
    transition: transform .2s, -webkit-transform .2s
}

@media(max-width:767px) {
    .billing-faq__question {
        padding: 16px 40px 16px 0
    }
}

.billing-faq__question--opened:after {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.billing-faq__question:last-child {
    border-bottom: none
}

.billing-faq__question-title {
    font-size: 22px;
    line-height: 28px
}

@media(max-width:767px) {
    .billing-faq__question-title {
        font-size: 19px;
        line-height: 24px
    }
}

.billing-faq__question-text {
    display: none;
    margin-top: 12px
}

.billing-faq__note {
    font-size: 16px;
    line-height: 20px;
    margin-top: 24px
}

@media(max-width:767px) {
    .billing-faq__note {
        margin-top: 16px
    }
}

.billing-faq__note a {
    color: var(--blue-50)
}

.billing-faq__note a:hover {
    color: var(--blue-70)
}

.newsletters {
    background-color: var(--white);
    padding-bottom: 40px
}

.newsletters__container {
    margin: 0 auto;
    max-width: var(--blog-desktop-container-width);
    width: 100%;
    padding: 0 var(--blog-desktop-gutter)
}

@media(max-width:1199px) {
    .newsletters__container {
        padding: 0 var(--blog-tablet-gutter)
    }
}

@media(max-width:767px) {
    .newsletters__container {
        max-width: 540px;
        padding: 0 var(--blog-phone-gutter)
    }
}

.newsletters__container {
    max-width: 1200px
}

.newsletter-subscriber-top {
    position: relative;
    padding: 100px 0 293px;
    margin-bottom: 80px
}

@media(max-width:1199px) {
    .newsletter-subscriber-top {
        padding: 40px 0 200px;
        margin-bottom: 60px
    }
}

@media(max-width:767px) {
    .newsletter-subscriber-top {
        padding: 36px 8px 120px;
        margin-bottom: 36px
    }
}

.newsletter-subscriber-top:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: calc(var(--vw) * 100 - 64px);
    height: 100%;
    border-radius: 16px;
    background-color: var(--neutral-10);
    background-image: url(../../assets/media/tips_bgf8b168810f7b13f7f1cc.svg);
    background-size: 828px auto;
    background-position: 50% 100%
}

@media(max-width:1199px) {
    .newsletter-subscriber-top:before {
        width: calc(var(--vw) * 100 - 16px);
        background-size: 530px auto
    }
}

@media(max-width:767px) {
    .newsletter-subscriber-top:before {
        background-size: 315px auto
    }
}

.newsletter-subscriber-top__inner {
    position: relative
}

.newsletter-subscriber-bottom {
    position: relative;
    padding: 45px 0
}

@media(max-width:1199px) {
    .newsletter-subscriber-bottom {
        padding: 16px 0
    }
}

@media(max-width:767px) {
    .newsletter-subscriber-bottom {
        padding: 36px 8px 16px
    }
}

.newsletter-subscriber-bottom:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: calc(var(--vw) * 100 - 64px);
    height: 100%;
    border-radius: 24px;
    background-color: var(--neutral-10)
}

@media(max-width:1199px) {
    .newsletter-subscriber-bottom:before {
        width: calc(var(--vw) * 100 - 16px)
    }
}

.newsletter-subscriber-bottom__inner {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:767px) {
    .newsletter-subscriber-bottom__inner {
        display: block
    }
}

.newsletter-subscriber-bottom__content {
    width: var(--blog-column-6)
}

@media(max-width:1023px) {
    .newsletter-subscriber-bottom__content {
        width: var(--blog-column-7)
    }
}

@media(max-width:767px) {
    .newsletter-subscriber-bottom__content {
        width: auto;
        margin-bottom: 40px
    }
}

.newsletter-subscriber-bottom__image {
    width: var(--blog-column-6)
}

@media(max-width:1023px) {
    .newsletter-subscriber-bottom__image {
        width: var(--blog-column-5)
    }
}

@media(max-width:767px) {
    .newsletter-subscriber-bottom__image {
        width: 100%
    }
}

.newsletter-subscriber-bottom__image:after {
    content: '';
    display: block;
    padding-top: 49.9%;
    background-image: url(../../assets/media/subscribe_bg58e33d49cb03bba36e6a.svg);
    background-size: contain;
    background-position: center
}

.subscribe-features {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-bottom: 81px;
    margin-bottom: 60px
}

@media(max-width:1199px) {
    .subscribe-features {
        padding-bottom: 61px
    }
}

@media(max-width:767px) {
    .subscribe-features {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-bottom: 30px;
        margin-bottom: 36px
    }
}

.subscribe-features:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: calc(var(--vw) * 100 - 64px);
    height: 1px;
    background-color: var(--neutral-20)
}

@media(max-width:1199px) {
    .subscribe-features:after {
        width: calc(var(--vw) * 100 - 32px)
    }
}

.subscribe-features__item {
    width: var(--blog-column-3)
}

@media(max-width:767px) {
    .subscribe-features__item {
        width: calc(50% - 8px);
        margin-bottom: 32px
    }
}

.subscribe-features__label {
    font-size: 22px;
    line-height: 28px;
    width: 80%
}

@media(max-width:1199px) {
    .subscribe-features__label {
        font-size: 19px;
        line-height: 24px
    }
}

@media(max-width:767px) {
    .subscribe-features__label {
        width: 100%
    }
}

.subscribe-features__image {
    width: 56px;
    height: 56px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 56px;
    flex: 0 0 56px;
    margin-bottom: 8px;
    background-color: var(--neutral-10)
}

.subscribe-features__image.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

@media(max-width:767px) {
    .subscribe-features__image {
        margin-bottom: 12px
    }
}

.subscribe-features__image--writing {
    background-position: 0 0
}

.subscribe-features__image--checked {
    background-position: -56px 0
}

.subscribe-features__image--summaries {
    background-position: -112px 0
}

.subscribe-features__image--duration {
    background-position: -168px 0
}

.newsletters-subscribe {
    margin-bottom: 60px
}

@media(max-width:767px) {
    .newsletters-subscribe {
        margin-bottom: 40px
    }
}

.newsletters-subscribe__inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

@media(max-width:767px) {
    .newsletters-subscribe__inner {
        display: block
    }
}

.newsletters-subscribe__content {
    width: var(--blog-column-5);
    -ms-flex-negative: 0;
    flex-shrink: 0
}

@media(max-width:767px) {
    .newsletters-subscribe__content {
        width: 100%;
        margin-bottom: 28px
    }
}

.newsletters-subscribe__title {
    font-size: 56px;
    line-height: 56px;
    margin-bottom: 40px
}

@media(max-width:1199px) {
    .newsletters-subscribe__title {
        font-weight: 700;
        font-size: 46px;
        line-height: 48px;
        font-weight: 400;
        margin-bottom: 30px
    }
}

@media(max-width:767px) {
    .newsletters-subscribe__title {
        font-size: 28px;
        line-height: 32px;
        margin-bottom: 16px
    }
}

.newsletters-subscribe__description {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 40px
}

@media(max-width:1199px) {
    .newsletters-subscribe__description {
        font-size: 19px;
        line-height: 24px;
        margin-bottom: 32px
    }
}

@media(max-width:767px) {
    .newsletters-subscribe__description {
        margin-bottom: 0
    }
}

@media(max-width:767px) {
    .newsletters-subscribe__button {
        display: none
    }
}

.newsletters-subscribe__examples {
    width: var(--blog-column-6);
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

@media(max-width:767px) {
    .newsletters-subscribe__examples {
        margin: 0 -12px;
        width: auto
    }
}

.newsletters-subscribe__examples-column {
    width: calc(50% - 6px)
}

.newsletters-subscribe__examples-label {
    font-size: 19px;
    line-height: 28px;
    font-family: tt tricks, serif;
    position: relative;
    top: -22px;
    left: 26px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 250px;
    height: 195px;
    padding: 0 28px 8px 43px;
    margin-bottom: 28px;
    text-align: center;
    background-size: contain;
    background-position: center;
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg)
}

@media(max-width:1199px) {
    .newsletters-subscribe__examples-label {
        left: -8px;
        margin-bottom: 8px
    }
}

@media(max-width:1023px) {
    .newsletters-subscribe__examples-label {
        top: 0;
        margin-top: 26px;
        width: 162px;
        height: 127px;
        padding: 0 0 6px 15px;
        font-size: 17px;
        line-height: 22px;
        margin-bottom: 38px
    }
}

.author {
    position: relative;
    background-color: var(--white)
}

.author__container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1504px;
    width: 100%;
    padding: 0 32px
}

@media(max-width:1504px) {
    .author__container {
        width: 100%
    }
}

@media(max-width:1023px) {
    .author__container {
        max-width: 974px
    }
}

@media(max-width:767px) {
    .author__container {
        padding: 0 20px;
        max-width: 540px
    }
}

.author__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 40px
}

@media(max-width:1023px) {
    .author__content {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

.author__main {
    margin-left: 8.3334%;
    width: 54%;
    max-width: 680px
}

@media(max-width:1023px) {
    .author__main {
        margin-left: 0;
        width: 76.485%
    }
}

@media(max-width:767px) {
    .author__main {
        width: 100%
    }
}

.author__aside {
    margin-right: 8.3334%;
    width: 23.3334%
}

@media(max-width:1023px) {
    .author__aside {
        display: none
    }
}

.author__aside-content {
    position: -webkit-sticky;
    position: sticky;
    top: 96px;
    display: block;
    width: 100%;
    -webkit-transition: opacity .15s ease;
    transition: opacity .15s ease
}

.author__aside-content-item {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    visibility: hidden;
    -webkit-transition: opacity .35s ease, visibility .35s 0s;
    transition: opacity .35s ease, visibility .35s 0s;
    will-change: opacity, visibility
}

.author__aside-content-item.show {
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity .35s ease, visibility 0s;
    transition: opacity .35s ease, visibility 0s
}

.author__pagination {
    width: 100%;
    margin-bottom: 60px
}

.author-hero {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%
}

.author-hero__main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    max-width: 63.889%;
    margin: 0 auto;
    padding-bottom: 40px
}

@media(max-width:1023px) {
    .author-hero__main {
        max-width: 76.485%
    }
}

@media(max-width:767px) {
    .author-hero__main {
        max-width: 100%;
        padding-bottom: 32px
    }
}

.author-hero__photo {
    width: 135px;
    border-radius: 50%;
    background-color: var(--neutral-30);
    overflow: hidden;
    margin-bottom: 16px
}

.author-hero__photo-img {
    width: 100%;
    padding-bottom: 100%;
    overflow: hidden;
    border-radius: inherit;
    background-color: var(--neutral-15);
    position: relative
}

.author-hero__photo-img:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    border: 1px solid hsla(226.1538461538462, 37.1428571429%, 54%, .15);
    border-radius: inherit
}

.author-hero__photo-img-inner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center
}

.author-hero__name {
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    font-weight: 400
}

@media(max-width:767px) {
    .author-hero__name {
        font-size: 32px;
        line-height: 34px
    }
}

.author-hero__name:not(:last-child) {
    margin-bottom: 32px
}

@media(max-width:767px) {
    .author-hero__name:not(:last-child) {
        margin-bottom: 24px
    }
}

.author-hero__description {
    font-size: 19px;
    line-height: 28px;
    font-family: tt tricks, serif
}

@media(max-width:767px) {
    .author-hero__description {
        font-size: 17px;
        line-height: 24px
    }
}

.author-hero__description:not(:last-child) {
    margin-bottom: 32px
}

@media(max-width:767px) {
    .author-hero__description:not(:last-child) {
        margin-bottom: 24px
    }
}

.author-hero__socials {
    color: var(--neutral-40);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.author-hero__socials:not(:last-child) {
    margin-bottom: 40px
}

@media(max-width:767px) {
    .author-hero__socials:not(:last-child) {
        margin-bottom: 32px
    }
}

.author-hero__socials-label:not(:last-child) {
    margin-right: 8px
}

.author-hero__socials-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid var(--neutral-20);
    border-radius: 50%;
    -webkit-transition: background-color .2s ease;
    transition: background-color .2s ease
}

.author-hero__socials-item:not(:last-child) {
    margin-right: 8px
}

.author-hero__socials-item:hover {
    background-color: var(--neutral-10)
}

.author-hero__socials-icon {
    width: 24px;
    height: 24px
}

.author-hero__socials-icon.author-hero__socials-icon--twitter {
    color: var(--twitter-color)
}

.author-hero__socials-icon.author-hero__socials-icon--linkedin {
    color: var(--linkedin-color)
}

.author-hero__socials-icon.author-hero__socials-icon--facebook {
    color: var(--facebook-color)
}

ol.author-breadcrumbs {
    position: absolute;
    top: 0;
    left: 32px;
    color: var(--neutral-50);
    overflow: hidden;
    padding: 0;
    margin: 0 0 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 1
}

@media(max-width:1199px) {
    ol.author-breadcrumbs {
        margin-bottom: 8px
    }
}

@media(max-width:767px) {
    ol.author-breadcrumbs {
        display: none
    }
}

li.author-breadcrumbs__item {
    padding-right: 24px;
    display: block;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

@media(max-width:1199px) {
    li.author-breadcrumbs__item {
        font-size: 16px;
        line-height: 20px
    }
}

li.author-breadcrumbs__item:after {
    content: '';
    position: absolute;
    display: block;
    width: 16px;
    height: 16px;
    top: 4px;
    right: 4px;
    background-image: url(../../assets/media/breadcrumb-chevroncf2a8616496d6a3d8f5b.svg);
    background-size: 16px 16px
}

@media(max-width:1199px) {
    li.author-breadcrumbs__item:after {
        top: 2px
    }
}

li.author-breadcrumbs__item:last-child {
    padding-right: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1
}

li.author-breadcrumbs__item:last-child:after {
    display: none
}

.author-breadcrumbs__link {
    white-space: nowrap;
    text-overflow: ellipsis
}

a.author-breadcrumbs__link:hover {
    color: var(--neutral-90)
}

.author-recent-posts {}

.author-recent-posts__title {
    font-size: 28px;
    line-height: 30px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--neutral-20);
    margin-bottom: 20px
}

.author-recent-post {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--neutral-20)
}

.author-recent-post:not(:last-child) {
    margin-bottom: 28px
}

.author-recent-post__category {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 8px;
    color: var(--neutral-40)
}

.author-recent-post__category a {
    color: var(--neutral-100)
}

.author-recent-post__title {}

.author-aside-post {
    width: 100%
}

.author-aside-post__heading {
    font-size: 28px;
    line-height: 30px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--neutral-20);
    margin-bottom: 24px
}

.author-aside-poss__body {
    position: relative
}

.author-aside-post__author {
    color: var(--neutral-40);
    margin-bottom: 8px
}

.author-aside-post__author-photo {
    border-radius: 50%;
    width: 28px;
    height: 28px;
    margin: 0 7px
}

.author-aside-post__image {
    width: 100%;
    padding-bottom: 87.5%;
    margin-bottom: 32px;
    overflow: hidden;
    border-radius: 6px;
    background-color: var(--neutral-15);
    position: relative
}

.author-aside-post__image:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    border: 1px solid hsla(226.1538461538462, 37.1428571429%, 54%, .15);
    border-radius: inherit
}

@media(max-width:767px) {
    .author-aside-post__image {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 100%;
        flex: 1 0 100%;
        width: 100%;
        padding-bottom: 87.5%;
        margin-right: 0;
        margin-bottom: 16px
    }
}

.author-aside-post__image-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center
}

.author-aside-post__title {
    font-size: 32px;
    line-height: 34px
}

.author-aside-post__title:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1
}

.example-post-hero {
    position: relative;
    background-color: var(--neutral-10)
}

@media(max-width:1023px) {
    .example-post-hero {
        padding: 64px 44px 0
    }
}

@media(max-width:767px) {
    .example-post-hero {
        padding: 48px 20px
    }
}

.example-post-hero__container {
    margin: 0 auto;
    max-width: var(--blog-desktop-container-width);
    width: 100%;
    padding: 0 var(--blog-desktop-gutter)
}

@media(max-width:1199px) {
    .example-post-hero__container {
        padding: 0 var(--blog-tablet-gutter)
    }
}

@media(max-width:767px) {
    .example-post-hero__container {
        max-width: 540px;
        padding: 0 var(--blog-phone-gutter)
    }
}

.example-post-hero__container {
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    padding-top: 48px;
    padding-bottom: 48px
}

@media(max-width:1199px) {
    .example-post-hero__container {
        padding-top: 44px;
        padding-bottom: 44px
    }
}

@media(max-width:1023px) {
    .example-post-hero__container {
        display: block;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-flow: column nowrap;
        flex-flow: column nowrap;
        padding: 0;
        width: 100%
    }
}

.blog-post--with-single-aside .example-post-hero__container {
    max-width: 1200px
}

.example-post-hero__text {
    width: var(--blog-column-6);
    margin-right: var(--blog-column-1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    color: var(--neutral-100)
}

@media(max-width:1199px) {
    .example-post-hero__text {
        width: auto
    }
}

@media(max-width:1023px) {
    .example-post-hero__text {
        margin-right: 0;
        margin-left: 0
    }
}

.example-post-hero__text-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

ol.example-post-hero__breadcrumbs {
    width: 100%;
    color: var(--neutral-50);
    overflow: hidden;
    padding: 0;
    margin: 0 0 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(max-width:1199px) {
    ol.example-post-hero__breadcrumbs {
        margin-bottom: 8px
    }
}

@media(max-width:1023px) {
    ol.example-post-hero__breadcrumbs {
        position: absolute;
        top: 20px;
        left: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 0 32px;
        margin-bottom: 0
    }
}

@media(max-width:767px) {
    ol.example-post-hero__breadcrumbs {
        top: 12px;
        padding: 0 20px
    }
}

li.example-post-hero__breadcrumbs-item {
    display: block;
    position: relative;
    padding-right: 24px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

@media(max-width:1199px) {
    li.example-post-hero__breadcrumbs-item {
        font-size: 16px;
        line-height: 20px
    }
}

li.example-post-hero__breadcrumbs-item:after {
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -3px;
    right: 10px;
    width: 6px;
    height: 6px;
    border-top: 1px solid var(--neutral-50);
    border-right: 1px solid var(--neutral-50);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

li.example-post-hero__breadcrumbs-item:last-child {
    padding-right: 0;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto
}

li.example-post-hero__breadcrumbs-item:last-child:after {
    display: none
}

a.example-post-hero__breadcrumbs-link:hover {
    color: var(--neutral-90)
}

.example-post-hero__breadcrumbs-chevron {
    width: 16px;
    height: 16px;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 16px;
    flex: 0 0 16px;
    margin: 0 4px
}

.example-post-hero__title {
    font-weight: 700;
    font-size: 46px;
    line-height: 48px;
    font-weight: 700;
    margin-bottom: 16px
}

@media(max-width:1199px) {
    .example-post-hero__title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px
    }
}

@media(max-width:1023px) {
    .example-post-hero__title {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        max-width: 600px
    }
}

@media(max-width:767px) {
    .example-post-hero__title {
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 8px
    }
}

.example-post-hero__lead {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 32px
}

@media(max-width:1199px) {
    .example-post-hero__lead {
        font-size: 19px;
        line-height: 24px
    }
}

@media(max-width:1023px) {
    .example-post-hero__lead {
        font-size: 22px;
        line-height: 28px;
        text-align: center;
        margin-bottom: 24px;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto
    }
}

@media(max-width:767px) {
    .example-post-hero__lead {
        font-size: 19px;
        line-height: 24px
    }
}

.example-post-hero__rating {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width:1023px) {
    .example-post-hero__rating {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-bottom: 8px
    }
}

.example-post-hero__image-container {
    display: block;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 544px;
    flex: 0 0 544px;
    width: 544px;
    height: 544px;
    border-radius: 6px 6px 0 0;
    background-color: var(--white);
    margin-bottom: -48px;
    position: relative
}

@media(max-width:1199px) {
    .example-post-hero__image-container {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 448px;
        flex: 0 0 448px;
        width: 448px;
        height: 448px
    }
}

@media(max-width:1023px) {
    .example-post-hero__image-container {
        width: 100%;
        max-width: 420px;
        height: 420px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0
    }
}

@media(max-width:767px) {
    .example-post-hero__image-container {
        height: 240px
    }
}

.example-post-hero__image-container:after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    height: 1px;
    bottom: 0;
    background: var(--neutral-10);
    z-index: 1
}

.example-post-hero__image {
    width: 100%;
    border-radius: 6px 6px 0 0
}

.example-post-hero__image-cta {
    position: absolute;
    bottom: 48px;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 2
}

.examples-rating {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    max-width: 736px;
    margin: 0 auto;
    border-radius: 6px;
    padding: 32px;
    background-color: var(--white);
    margin-bottom: 60px
}

@media(max-width:1023px) {
    .examples-rating {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

.examples-rating__score {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-right: 16px;
    border-radius: 50%;
    background-color: var(--indigo-80);
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    color: var(--white)
}

@media(max-width:1199px) {
    .examples-rating__score {
        font-size: 14px;
        line-height: 16px;
        width: 32px;
        height: 32px;
        margin-right: 12px
    }
}

@media(max-width:1023px) {
    .examples-rating__score {
        font-size: 19px;
        line-height: 24px;
        font-weight: 600;
        padding: 0;
        background-color: transparent;
        width: auto;
        margin-right: 4px;
        color: var(--orange-40)
    }
}

.examples-rating__text {
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1
}

@media(max-width:1023px) {
    .examples-rating__text {
        display: none
    }
}

.examples-rating__title {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 600
}

.examples-rating__subtitle {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-50)
}

.examples-rating__subtitle-number {}

.examples-rating__stars {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.examples-rating__stars:hover {
    color: var(--neutral-30)
}

.examples-rating__star {
    width: 40px;
    height: 40px;
    -webkit-transition: -webkit-transform .2s ease;
    transition: -webkit-transform .2s ease;
    transition: transform .2s ease;
    transition: transform .2s ease, -webkit-transform .2s ease;
    color: var(--orange-40)
}

.examples-rating__star:active {
    -webkit-transform: scale(1.5);
    transform: scale(1.5)
}

@media(max-width:1199px) {
    .examples-rating__star {
        width: 32px;
        height: 32px
    }
}

@media(max-width:1023px) {
    .examples-rating__star {
        margin-right: -6px
    }
}

.examples-rating__star--inactive {
    color: var(--neutral-30)
}

.examples-post {
    padding-top: 772px;
    padding-bottom: 100px
}

@media(max-width:767px) {
    .examples-post {
        padding-top: 212px
    }
}

.examples-post__content {
    max-width: 736px;
    margin: 0 auto 60px
}

@media(max-width:767px) {
    .examples-post__content {
        padding: 0 24px;
        overflow: hidden;
        width: 100%
    }
}

.examples-post__content h2 {
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 48px
}

@media(max-width:767px) {
    .examples-post__content h2 {
        font-size: 28px;
        line-height: 30px
    }
}

.examples-post__content h3 {
    font-size: 32px;
    line-height: 34px;
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 48px
}

@media(max-width:767px) {
    .examples-post__content h3 {
        font-size: 26px;
        line-height: 28px
    }
}

.examples-post__content h4 {
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 32px
}

.examples-post__content p {
    margin-bottom: 16px
}

.examples-post__example {
    background-color: var(--white);
    font-size: 15px;
    line-height: 22px;
    padding: 40px 48px 64px;
    position: relative;
    border-radius: 4px;
    margin-left: -48px;
    margin-right: -48px;
    margin-top: 24px;
    margin-bottom: 48px;
    font-family: sfmono-regular, Consolas, liberation mono, Menlo, Courier, monospace
}

.examples-post__example code {
    font-family: inherit
}

.examples-post__example ul {
    padding-left: 21px
}

.examples-post__example li {
    margin-bottom: 4px
}

.examples-post__example-label {
    color: var(--neutral-50);
    position: absolute;
    bottom: 28px;
    left: 48px;
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.examples-post__example-label:hover {
    color: var(--blue-50)
}

.examples-post__example-label svg {
    width: 20px;
    height: 20px;
    position: relative;
    top: -1px
}

.examples-post__example-label-text {
    display: inline-block
}

.examples-post__cta {
    text-align: center;
    margin-top: 48px
}

.examples__divider {
    width: 100%;
    max-width: 736px;
    margin: 0 auto;
    height: 1px;
    background-color: var(--neutral-20);
    margin-bottom: 48px
}

.examples-related {
    width: 100%;
    background-color: var(--indigo-80);
    padding: 32px;
    border-bottom: 1px solid var(--neutral-100)
}

@media(max-width:767px) {
    .examples-related {
        padding: 24px 20px
    }
}

.examples-related__container {
    max-width: 1120px;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(max-width:767px) {
    .examples-related__container {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start
    }
}

.examples-related__icon {
    width: 56px;
    height: 56px;
    background-size: contain;
    margin-top: 4px;
    margin-right: 24px;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

@media(max-width:767px) {
    .examples-related__icon {
        display: none
    }
}

.examples-related__title {
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    color: var(--orange-40);
    margin-bottom: 12px
}

.examples-related__item {
    display: inline-block;
    color: rgba(255, 255, 255, .5);
    padding: 6px 8px;
    background-color: rgba(255, 255, 255, .05);
    border-radius: 6px;
    margin-bottom: 8px;
    -webkit-transition: background-color .2s ease;
    transition: background-color .2s ease
}

.examples-related__item:hover {
    background-color: rgba(255, 255, 255, .1)
}

.examples-related__item:not(:last-child) {
    margin-right: 8px
}

.inner-cta {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 48px;
    max-width: 832px;
    margin: 0 auto 60px;
    background-color: var(--white);
    border-radius: 10px
}

@media(max-width:767px) {
    .inner-cta {
        border-radius: 0;
        padding: 32px 24px
    }
}

.inner-cta__title {
    max-width: 310px;
    font-size: 28px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 16px;
    text-align: left
}

@media(max-width:767px) {
    .inner-cta__title {
        max-width: 400px;
        margin: 0 auto 16px;
        font-size: 22px;
        line-height: 28px;
        text-align: center
    }
}

.inner-cta__title--highlighted {
    position: relative;
    -webkit-box-shadow: 0 3px 0 0 var(--blue-50);
    box-shadow: 0 3px 0 0 var(--blue-50)
}

@media(max-width:767px) {
    .inner-cta__button {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

.inner-cta__image {
    position: absolute;
    right: 58px;
    bottom: -126px;
    overflow: hidden
}

@media(max-width:767px) {
    .inner-cta__image {
        display: none
    }
}

.inner-cta__circle {
    width: 305px;
    height: 305px;
    background-color: var(--blue-50);
    border-radius: 50%
}

.inner-cta__template--left,
.inner-cta__template--right {
    position: absolute;
    border-radius: 4px;
    background-size: cover;
    background-position: 50% 0
}

.inner-cta__template--left {
    width: 180px;
    height: 245px;
    left: 39px;
    top: 23px;
    background-image: url(../../assets/media/berlin1c59a926dd7c6365eef5.png);
    -webkit-box-shadow: 0 16px 36px 0 rgba(186, 200, 227, .48), 0 20px 60px 0 rgba(186, 200, 227, .2);
    box-shadow: 0 16px 36px 0 rgba(186, 200, 227, .48), 0 20px 60px 0 rgba(186, 200, 227, .2)
}

.inner-cta__template--right {
    width: 156px;
    height: 212px;
    right: 31px;
    top: 72px;
    background-image: url(../../assets/media/new_york44bf5e920af37b529524.png);
    -webkit-box-shadow: 0 16px 36px 0 rgba(186, 200, 227, .48), 0 20px 60px 0 rgba(186, 200, 227, .2);
    box-shadow: 0 16px 36px 0 rgba(186, 200, 227, .48), 0 20px 60px 0 rgba(186, 200, 227, .2)
}

.examples-author {
    max-width: 736px;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin-bottom: 48px;
    padding: 0 24px
}

@media(max-width:767px) {
    .examples-author {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
}

.examples-author__person {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin-right: 56px
}

@media(max-width:767px) {
    .examples-author__person {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 0 0 12px
    }
}

.examples-author__avatar {
    width: 48px;
    height: 48px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border-radius: 50%;
    background-size: cover;
    background-position: center center;
    margin-right: 12px
}

@media(max-width:767px) {
    .examples-author__avatar {
        margin: 0 0 8px
    }
}

@media(max-width:767px) {
    .examples-author__data {
        text-align: center
    }
}

.examples-author__name {
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 8px
}

@media(max-width:767px) {
    .examples-author__name {
        margin-bottom: 4px
    }
}

.examples-author__position {
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-50)
}

.examples-author__description {
    font-size: 19px;
    line-height: 24px
}

.examples-promo {
    padding: 0 44px;
    border-bottom: 1px solid var(--neutral-10)
}

@media(max-width:1199px) {
    .examples-promo {
        border-bottom-color: var(--neutral-20)
    }
}

@media(max-width:1023px) {
    .examples-promo {
        padding: 0 32px
    }
}

@media(max-width:767px) {
    .examples-promo {
        padding: 0 20px
    }
}

.examples-promo__container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 1120px;
    margin: 0 auto;
    padding-top: 80px
}

@media(max-width:1199px) {
    .examples-promo__container {
        padding-top: 64px
    }
}

@media(max-width:1023px) {
    .examples-promo__container {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
}

@media(max-width:767px) {
    .examples-promo__container {
        padding-top: 32px
    }
}

@media(min-width:768px) {
    .examples-promo--has-no-categories {
        border-bottom: none
    }

    .examples-promo--has-no-categories .examples-promo__container {
        border-bottom: 1px solid var(--neutral-20)
    }
}

.examples-promo__content {
    margin-bottom: 64px;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

@media(max-width:1023px) {
    .examples-promo__content {
        max-width: 600px;
        text-align: center
    }
}

@media(max-width:767px) {
    .examples-promo__content {
        margin-bottom: 58px
    }
}

.examples-promo__title {
    font-weight: 700;
    font-size: 46px;
    line-height: 48px;
    margin-bottom: 16px;
    max-width: 500px
}

@media(max-width:1023px) {
    .examples-promo__title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px;
        max-width: none
    }
}

@media(max-width:767px) {
    .examples-promo__title {
        font-size: 32px;
        line-height: 34px;
        margin-bottom: 12px
    }
}

.examples-promo__description {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 32px
}

@media(max-width:1199px) {
    .examples-promo__description {
        margin-bottom: 24px
    }
}

@media(max-width:767px) {
    .examples-promo__description {
        font-size: 19px;
        line-height: 24px;
        margin-bottom: 20px
    }
}

.examples-promo__description a {
    color: var(--blue-50)
}

.examples-promo__description a:hover {
    color: var(--blue-70)
}

.examples-promo__visual {
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-item-align: end;
    align-self: flex-end;
    margin-left: 128px;
    width: 544px
}

@media(max-width:1199px) {
    .examples-promo__visual {
        margin-left: 64px;
        width: 448px
    }
}

@media(max-width:1023px) {
    .examples-promo__visual {
        -ms-flex-item-align: center;
        align-self: center;
        margin-left: 0;
        width: 420px
    }
}

@media(max-width:767px) {
    .examples-promo__visual {
        width: 100%;
        max-width: 420px
    }
}

.examples-promo__visual-crop {
    overflow: hidden;
    border-radius: 4px 4px 0 0;
    background-color: var(--white);
    height: 480px
}

@media(max-width:1199px) {
    .examples-promo__visual-crop {
        height: 390px
    }
}

@media(max-width:1023px) {
    .examples-promo__visual-crop {
        height: 250px
    }
}

@media(max-width:767px) {
    .examples-promo__visual-crop {
        height: 170px
    }
}

.examples-promo__visual-image {
    display: block;
    width: 100%;
    height: auto
}

.examples-promo__decor {
    content: '';
    position: absolute;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: contain
}

.examples-promo__decor:before {
    content: '';
    display: block
}

.examples-promo--resume .examples-promo__decor--left {
    bottom: 20px;
    right: 100%;
    margin-right: -16px;
    width: 227px
}

.examples-promo--resume .examples-promo__decor--left:before {
    padding-bottom: 130.837%
}

@media(max-width:1199px) {
    .examples-promo--resume .examples-promo__decor--left {
        display: none
    }
}

@media(max-width:1023px) {
    .examples-promo--resume .examples-promo__decor--left {
        display: block;
        width: 185px;
        bottom: 16px;
        margin-right: -13px
    }
}

@media(max-width:767px) {
    .examples-promo--resume .examples-promo__decor--left {
        display: none
    }
}

.examples-promo--resume .examples-promo__decor--right {
    right: 72px;
    top: -59px;
    width: 135px
}

.examples-promo--resume .examples-promo__decor--right:before {
    padding-bottom: 48.8888%
}

@media(max-width:1199px) {
    .examples-promo--resume .examples-promo__decor--right {
        right: 59px;
        top: -48px;
        width: 110px
    }
}

@media(max-width:1023px) {
    .examples-promo--resume .examples-promo__decor--right {
        right: 15px
    }
}

@media(max-width:767px) {
    .examples-promo--resume .examples-promo__decor--right {
        right: 48px;
        top: -33px;
        width: 75px
    }
}

.examples-promo--cover-letter .examples-promo__decor--left {
    width: 236px;
    left: -140px;
    bottom: -2px
}

.examples-promo--cover-letter .examples-promo__decor--left:before {
    padding-bottom: 77.4468%
}

@media(max-width:1199px) {
    .examples-promo--cover-letter .examples-promo__decor--left {
        width: 155px;
        left: -92px;
        bottom: 0
    }
}

@media(max-width:1023px) {
    .examples-promo--cover-letter .examples-promo__decor--left {
        width: 145px;
        left: -86px
    }
}

@media(max-width:767px) {
    .examples-promo--cover-letter .examples-promo__decor--left {
        display: none
    }
}

.examples-promo--cover-letter .examples-promo__decor--right {
    width: 234px;
    right: -92px;
    bottom: 0
}

.examples-promo--cover-letter .examples-promo__decor--right:before {
    padding-bottom: 164.1025%
}

@media(max-width:1199px) {
    .examples-promo--cover-letter .examples-promo__decor--right {
        width: 152px;
        right: -38px
    }
}

@media(max-width:1023px) {
    .examples-promo--cover-letter .examples-promo__decor--right {
        width: 144px;
        right: -57px
    }
}

@media(max-width:767px) {
    .examples-promo--cover-letter .examples-promo__decor--right {
        width: 120px;
        right: 12px
    }
}

.examples-root {
    padding: 80px 44px
}

@media(max-width:1199px) {
    .examples-root {
        overflow: hidden
    }
}

@media(max-width:1023px) {
    .examples-root {
        padding-left: 32px;
        padding-right: 32px
    }
}

@media(max-width:767px) {
    .examples-root {
        padding-top: 40px;
        padding-left: 20px;
        padding-right: 20px
    }
}

.examples-root--has-categories {
    padding-top: 40px;
    background-color: var(--white)
}

[data-design=new].examples-root--has-categories {
    padding-top: 80px;
    background-color: var(--white);
    overflow: visible
}

@media(max-width:1199px) {
    [data-design=new].examples-root--has-categories {
        padding-top: 40px
    }
}

.examples-root__container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 1120px;
    margin: 0 auto
}

.examples-root__sidebar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 256px;
    margin-right: 32px
}

@media(max-width:1199px) {
    .examples-root__sidebar {
        display: none
    }
}

.examples-root__sidebar-sticky-area {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.examples-root__sidebar-sticky-content {
    position: -webkit-sticky;
    position: sticky;
    top: 90px;
    left: 0;
    width: 100%
}

.examples-root__content {
    width: 100%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.examples-root__scroll-top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 13px 24px;
    margin-top: -76px;
    margin-bottom: 24px;
    border: 1px solid var(--blue-50);
    border-radius: 4px;
    background-color: transparent;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    color: var(--blue-50);
    -webkit-transition: opacity .2s, visibility .2s;
    transition: opacity .2s, visibility .2s;
    opacity: 0;
    visibility: hidden;
    cursor: pointer
}

.examples-root__scroll-top:hover {
    background-color: rgba(26, 145, 240, .07)
}

.examples-root__scroll-top--visible {
    opacity: 1;
    visibility: visible
}

.examples-root__scroll-top-arrow {
    margin-left: 16px;
    margin-right: -12px
}

.examples-root__divider {
    margin: 40px 0;
    height: 1px;
    background-color: var(--neutral-20)
}

@media(max-width:767px) {
    .examples-root__divider {
        margin: 32px 0
    }
}

.examples-root__divider:last-child {
    display: none
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-root__divider {
        margin: 36px 0
    }
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-root__divider {
        margin: 24px 0
    }
}

.examples-categories-list {
    position: relative;
    z-index: 1;
    padding-top: 8px;
    margin-bottom: 52px;
    font-size: 16px;
    line-height: 20px
}

.examples-categories-list__title {
    margin-bottom: 14px;
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 600
}

.examples-categories-list__group,
.examples-categories-list__item {
    margin: 0;
    padding: 0;
    list-style: none
}

.examples-categories-list__group:not(:last-child):after {
    content: '';
    display: block;
    margin: 18px 0 16px;
    width: 24px;
    height: 1px;
    background-color: var(--neutral-20)
}

.examples-categories-list__item:not(:last-child) {
    margin-bottom: 8px
}

.examples-categories-list__link {
    color: var(--neutral-60)
}

.examples-categories-list__link:hover {
    color: var(--blue-50)
}

.examples-search {
    margin-bottom: 80px
}

@media(max-width:767px) {
    .examples-search {
        margin-bottom: 40px
    }
}

.examples-search--card {
    margin-bottom: 48px;
    padding: 24px 32px;
    border-radius: 4px;
    background-color: var(--neutral-10)
}

@media(max-width:1199px) {
    .examples-search--card {
        margin: -40px -200px 48px;
        padding: 24px 200px;
        border-radius: 0
    }
}

@media(max-width:767px) {
    .examples-search--card {
        margin-bottom: 32px
    }
}

.examples-search--sticky.examples-search--card {
    position: -webkit-sticky;
    position: sticky;
    top: 16px;
    margin: 0 0 68px;
    padding: 0;
    z-index: var(--z-examples-search-sticky-panel)
}

@media(max-width:1023px) {
    .examples-search--sticky.examples-search--card {
        margin: 0 0 40px;
        padding: 0
    }
}

.examples-search--sticky.examples-search--card:before {
    content: '';
    position: absolute;
    top: -16px;
    left: 50%;
    bottom: -16px;
    width: calc(var(--vw) * 100);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background: var(--white)
}

.examples-search--sticky .examples-search__input {
    -webkit-box-shadow: inset 0 0 0 2px var(--blue-50);
    box-shadow: inset 0 0 0 2px var(--blue-50);
    border-radius: 6px
}

.examples-search--sticky .examples-search__dropdown {
    margin-top: 6px;
    -webkit-box-shadow: 0 4px 12px -4px rgba(15, 56, 113, .08), 0 8px 24px -4px rgba(15, 56, 113, .08), 0 0 1px rgba(12, 38, 76, .32);
    box-shadow: 0 4px 12px -4px rgba(15, 56, 113, .08), 0 8px 24px -4px rgba(15, 56, 113, .08), 0 0 1px rgba(12, 38, 76, .32)
}

.examples-search__title {
    font-size: 28px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 24px
}

@media(max-width:767px) {
    .examples-search__title {
        display: none
    }
}

.examples-search__form {
    position: relative
}

.examples-search__icon {
    position: absolute;
    left: 16px;
    top: 50%;
    margin-top: -12px;
    color: var(--blue-50)
}

.examples-search__input {
    display: block;
    width: 100%;
    padding: 12px 16px 12px 52px;
    border: none;
    border-radius: 4px;
    background: var(--white);
    color: var(--neutral-90);
    caret-color: var(--blue-50);
    outline: none
}

@media(max-width:767px) {
    .examples-search__input {
        padding-left: 48px
    }
}

.examples-search__input::-ms-input-placeholder {
    color: var(--neutral-50)
}

.examples-search__input::-webkit-input-placeholder {
    color: var(--neutral-50)
}

.examples-search__input:-ms-input-placeholder {
    color: var(--neutral-50)
}

.examples-search__input::placeholder {
    color: var(--neutral-50)
}

.examples-search__dropdown {
    display: none;
    position: absolute;
    overflow: hidden;
    z-index: 2;
    top: 100%;
    margin-top: 8px;
    width: 100%;
    border-radius: 4px;
    background-color: var(--white);
    -webkit-box-shadow: 0 8px 16px 0 rgba(23, 68, 130, .08);
    box-shadow: 0 8px 16px 0 rgba(23, 68, 130, .08)
}

.examples-search__dropdown.is-active {
    display: block
}

.examples-search__dropdown:after,
.examples-search__dropdown:before {
    content: '';
    position: absolute;
    left: 32px;
    right: 32px;
    height: 22px;
    pointer-events: none;
    background: -webkit-gradient(linear, left top, left bottom, from(var(--white)), to(rgba(255, 255, 255, 0)));
    background: linear-gradient(to bottom, var(--white), rgba(255, 255, 255, 0))
}

@media(max-width:767px) {

    .examples-search__dropdown:after,
    .examples-search__dropdown:before {
        right: 20px
    }
}

.examples-search__dropdown:before {
    top: 0
}

.examples-search__dropdown:after {
    bottom: 0;
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1)
}

.examples-search__content {
    max-height: 250px;
    overflow-y: auto
}

.examples-search__content::-webkit-scrollbar {
    width: 12px;
    background-color: transparent
}

.examples-search__content::-webkit-scrollbar-thumb {
    background-color: var(--neutral-20);
    border: 4px solid var(--white);
    border-radius: 6px
}

.examples-search__content::-webkit-scrollbar-thumb:hover {
    background-color: var(--neutral-30)
}

.examples-search__item {
    padding: 0 52px;
    display: block;
    cursor: pointer
}

@media(max-width:767px) {
    .examples-search__item {
        padding: 0 24px 0 48px
    }
}

.examples-search__item:hover {
    color: var(--blue-50)
}

.examples-search__item:first-child {
    padding-top: 8px
}

.examples-search__item:last-child {
    padding-bottom: 8px
}

.examples-search__item:last-child .examples-search__item-name {
    border-bottom: none
}

.examples-search__item-name {
    display: block;
    padding: 14px 0;
    border-bottom: 1px solid var(--neutral-10)
}

.examples-category-card {}

.examples-category-card--slider {
    overflow: hidden
}

@media(max-width:1199px) {
    .examples-category-card--slider {
        overflow: visible
    }
}

.examples-category-card__header {
    margin-bottom: 28px
}

@media(max-width:767px) {
    .examples-category-card__header {
        margin-bottom: 20px
    }
}

.examples-category-card__headline {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.examples-category-card__title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.examples-category-card__icon {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    margin-right: 12px;
    background-repeat: no-repeat;
    background-size: contain
}

.examples-category-card__name {
    font-size: 28px;
    line-height: 30px;
    font-weight: 600;
    -webkit-transition: color .15s;
    transition: color .15s
}

a.examples-category-card__name:hover {
    color: var(--blue-50)
}

.examples-category-card__show-all {
    margin-left: 24px;
    color: var(--neutral-60);
    -webkit-transition: color .15s;
    transition: color .15s
}

.examples-category-card__show-all:hover {
    color: var(--blue-50)
}

@media(max-width:767px) {
    .examples-category-card__show-all {
        display: none
    }
}

.examples-category-card__description {
    margin-top: 12px;
    max-width: 550px;
    color: var(--neutral-60)
}

.examples-category-card__columns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 -16px
}

@media(max-width:767px) {
    .examples-category-card__columns {
        margin: 0;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.examples-category-card__column {
    width: 33.333%;
    padding: 0 16px
}

@media(max-width:767px) {
    .examples-category-card__column {
        width: 100%;
        padding: 0;
        margin-bottom: 20px
    }

    .examples-category-card__column:last-child {
        margin-bottom: 0
    }
}

.examples-category-card__link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 20px;
    -webkit-transition: color .15s;
    transition: color .15s
}

.examples-category-card__link:hover {
    color: var(--blue-50)
}

.examples-category-card__link:last-child {
    margin-bottom: 0
}

.examples-category-card__link:after {
    content: '';
    width: 24px;
    height: 24px;
    margin-left: 12px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background-image: url(../../assets/media/chevron-spritee16d663a1c50db2a89ee.svg)
}

@media(max-width:767px) {
    .examples-category-card__link:after {
        background-position: 0 -24px
    }
}

.examples-category-card__link:hover:after {
    background-position: 0 -24px
}

.examples-root__content--cards .examples-category-card__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 32px
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__header {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-bottom: 28px
    }
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-category-card__header {
        margin-bottom: 16px
    }
}

.examples-root__content--cards .examples-category-card--slider .examples-category-card__header {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--neutral-15);
    margin-bottom: 24px
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card--slider .examples-category-card__header {
        padding-bottom: 12px;
        margin-bottom: 16px
    }
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-category-card--slider .examples-category-card__header {
        padding-bottom: 0;
        border-bottom: 0
    }
}

.examples-root__content--cards .examples-category-card__title {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 8px;
    margin-right: 120px
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__title {
        margin-bottom: 12px
    }
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-category-card__title {
        margin-bottom: 0
    }
}

.examples-root__content--cards .examples-category-card--slider .examples-category-card__title {
    margin: 0;
    padding: 0
}

.examples-root__content--cards .examples-category-card__icon {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    margin-right: 12px;
    background-repeat: no-repeat;
    background-size: contain
}

.examples-root__content--cards .examples-category-card__name {
    font-weight: 700;
    font-size: 38px;
    line-height: 40px;
    font-weight: 400;
    -webkit-transition: color .15s;
    transition: color .15s
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__name {
        font-size: 28px;
        line-height: 30px
    }
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-category-card__name {
        font-size: 26px;
        line-height: 28px
    }
}

.examples-root__content--cards .examples-category-card__counter {
    position: absolute;
    top: 0;
    left: calc(100% + 11px);
    padding: 4px 12px;
    border-radius: 100px;
    background-color: var(--neutral-10);
    color: var(--neutral-60)
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__counter {
        font-size: 16px;
        line-height: 20px;
        padding: 6px 12px
    }
}

.examples-root__content--cards .examples-category-card__description {
    margin-top: 0;
    padding-top: 20px;
    max-width: 604px;
    color: var(--neutral-60)
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__description {
        padding-top: 0
    }
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-category-card__description {
        display: none
    }
}

.examples-root__content--cards .examples-category-card__collapse--contains-0 {
    display: none
}

.examples-root__content--cards .examples-category-card__collapse--contains-1 {
    display: none
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-category-card__collapse--contains-1 {
        display: block
    }
}

.examples-root__content--cards .examples-category-card__collapse--contains-2 {
    display: none
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__collapse--contains-2 {
        display: block
    }
}

.examples-root__content--cards .examples-category-card__collapse-body {
    margin-bottom: 16px;
    height: 0;
    opacity: 0;
    overflow: hidden
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__collapse-body {
        margin-bottom: 20px
    }
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-category-card__collapse-body {
        margin-bottom: 8px
    }
}

.examples-root__content--cards .examples-category-card__collapse-button {
    color: var(--blue-50);
    cursor: pointer;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.examples-root__content--cards .examples-category-card__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -8px -24px
}

.examples-root__content--cards .examples-category-card__list:not(:last-child) {
    margin-bottom: 0
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__list {
        margin: 0 -4px -16px
    }
}

.examples-root__content--cards .examples-category-card__collapse-body .examples-category-card__list {
    margin-bottom: 0
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__list--first-group .examples-category-card__link:nth-child(4) {
        display: none
    }
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-category-card__list--first-group .examples-category-card__link:nth-child(3) {
        display: none
    }
}

.examples-root__content--cards .examples-category-card__collapse-body .examples-category-card__link:nth-child(1),
.examples-root__content--cards .examples-category-card__collapse-body .examples-category-card__link:nth-child(2) {
    display: none
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__collapse-body .examples-category-card__link:nth-child(2) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-category-card__collapse-body .examples-category-card__link:nth-child(1) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }
}

.examples-root__content--cards .examples-category-card__list .examples-category-card__link {
    width: calc(25% - 16px);
    margin: 0 8px 24px;
    margin-bottom: 20px
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__list .examples-category-card__link {
        margin: 0 4px 16px;
        width: calc(33.3334% - 8px)
    }
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-category-card__list .examples-category-card__link {
        width: calc(50% - 8px)
    }
}

.examples-root__content--cards .examples-category-card__slider .examples-category-card__link {
    height: 100%
}

.examples-root__content--cards .examples-category-card__link {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-transition: background-color .125s;
    transition: background-color .125s;
    padding: 16px 20px 20px;
    border-radius: 6px;
    background-color: var(--neutral-5)
}

.examples-root__content--cards .examples-category-card__link:hover {
    background-color: var(--neutral-10)
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__link {
        padding: 12px 16px 16px
    }
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-category-card__link {
        padding: 12px 8px 8px
    }
}

.examples-root__content--cards .examples-category-card__link:after {
    display: none
}

.examples-root__content--cards .examples-category-card__link-name {
    font-size: 22px;
    line-height: 22px;
    color: var(--neutral-100);
    min-height: 44px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 12px
}

@media(max-width:1023px) {
    .examples-root__content--cards .examples-category-card__link-name {
        font-size: 19px;
        line-height: 24px
    }
}

@media(max-width:767px) {
    .examples-root__content--cards .examples-category-card__link-name {
        padding: 0 4px
    }
}

.examples-root__content--cards .examples-category-card__link-image {
    display: block;
    position: relative;
    width: 100%;
    border-radius: 3px;
    background-color: var(--white);
    background-position: 50% 0;
    background-size: cover;
    padding-bottom: 141.389%;
    -webkit-box-shadow: 0 30px 50px rgba(24, 43, 132, .05);
    box-shadow: 0 30px 50px rgba(24, 43, 132, .05)
}

.examples-root__content--cards .examples-category-card__link-image:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    -webkit-box-shadow: 0 8px 22px rgba(207, 214, 230, .6), 0 20px 40px rgba(207, 214, 230, .12);
    box-shadow: 0 8px 22px rgba(207, 214, 230, .6), 0 20px 40px rgba(207, 214, 230, .12);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: visibility .2s, opacity .2s;
    transition: visibility .2s, opacity .2s
}

.examples-root__content--cards .examples-category-card__collapse.is-open .examples-category-card__collapse-arrow {
    -webkit-transform: scaleY(-1);
    transform: scaleY(-1)
}

.examples-category-card__slider {
    position: relative;
    left: 50%;
    width: calc(var(--vw) * 100);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    padding: 0 44px;
    overflow: hidden
}

@media(max-width:1023px) {
    .examples-category-card__slider {
        padding: 0 32px
    }
}

@media(max-width:767px) {
    .examples-category-card__slider {
        padding: 0 20px
    }
}

.examples-category-card__slider-container {
    position: relative;
    max-width: 1120px;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-transition: opacity .3s ease;
    transition: opacity .3s ease;
    opacity: 0
}

.examples-category-card__slider-container.swiper-container-initialized {
    opacity: 1
}

.examples-category-card__slider-inner {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 1000%;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
    margin-bottom: 40px
}

@media(max-width:1023px) {
    .examples-category-card__slider-inner {
        margin-bottom: 32px
    }
}

@media(max-width:767px) {
    .examples-category-card__slider-inner {
        margin-bottom: 24px
    }
}

.examples-category-card__slider-item {
    border-radius: 6px;
    overflow: hidden;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-tap-highlight-color: transparent
}

@media(max-width:1199px) {
    .examples-category-card__slider-item {
        width: 25vw
    }

    .examples-category-card__slider-item:not(:last-child) {
        margin-right: 20px
    }
}

@media(max-width:1023px) {
    .examples-category-card__slider-item {
        width: 32vw
    }

    .examples-category-card__slider-item:not(:last-child) {
        margin-right: 12px
    }
}

@media(max-width:767px) {
    .examples-category-card__slider-item {
        width: 30vw
    }

    .examples-category-card__slider-item:not(:last-child) {
        margin-right: 8px
    }
}

@media(max-width:560px) {
    .examples-category-card__slider-item {
        width: 40vw
    }
}


.examples-category-card__slider-pagination {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 60px;
    min-height: 7px
}

@media(max-width:1023px) {
    .examples-category-card__slider-pagination {
        margin-bottom: 40px
    }
}

@media(max-width:767px) {
    .examples-category-card__slider-pagination {
        margin-bottom: 32px
    }
}

.examples-category-card__slider-pagination .swiper-pagination-bullet {
    position: relative;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: var(--neutral-20);
    -webkit-transition: background-color .2s ease;
    transition: background-color .2s ease;
    cursor: pointer
}

.examples-category-card__slider-pagination .swiper-pagination-bullet:not(:last-child) {
    margin-right: 12px
}

@media(max-width:767px) {
    .examples-category-card__slider-pagination .swiper-pagination-bullet:not(:last-child) {
        margin-right: 8px
    }
}

.examples-category-card__slider-pagination .swiper-pagination-bullet:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250%;
    height: 250%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

@media(max-width:767px) {
    .examples-category-card__slider-pagination .swiper-pagination-bullet:after {
        width: 200%;
        height: 200%
    }
}

.examples-category-card__slider-pagination .swiper-pagination-bullet-active {
    background-color: var(--blue-50);
    cursor: default
}

.examples-roll__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    margin: 0 -16px -56px
}

@media(max-width:1023px) {
    .examples-roll__list {
        margin-bottom: -40px
    }
}

@media(max-width:767px) {
    .examples-roll__list {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

.examples-roll__item {
    display: inline-block;
    width: 25%;
    padding: 0 16px;
    margin-bottom: 56px
}

@media(max-width:1023px) {
    .examples-roll__item {
        width: 33.33%;
        margin-bottom: 40px
    }
}

@media(max-width:767px) {
    .examples-roll__item {
        width: 50%;
        min-width: 312px
    }
}

.examples-roll__item-name {
    -webkit-transition: color .2s;
    transition: color .2s
}

.examples-roll__item:hover .examples-roll__item-name {
    color: var(--blue-50)
}

.examples-roll__item-rating {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 12px
}

.examples-roll__item-star {
    color: var(--neutral-20)
}

.examples-roll__item-star--selected {
    color: var(--orange-40)
}

.examples-roll__item-image {
    display: block;
    position: relative;
    border-radius: 3px;
    background-color: var(--white);
    background-position: 50% 0;
    background-size: cover;
    padding-bottom: 141.389%
}

.examples-roll__item-image:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    -webkit-box-shadow: 0 8px 22px rgba(207, 214, 230, .6), 0 20px 40px rgba(207, 214, 230, .12);
    box-shadow: 0 8px 22px rgba(207, 214, 230, .6), 0 20px 40px rgba(207, 214, 230, .12);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: visibility .2s, opacity .2s;
    transition: visibility .2s, opacity .2s
}

.examples-roll__item:hover .examples-roll__item-image:after {
    visibility: visible;
    opacity: 1
}

.examples-category-root {
    position: relative;
    overflow: hidden;
    padding: 64px 44px 60px
}

@media(max-width:1023px) {
    .examples-category-root {
        padding-left: 32px;
        padding-right: 32px
    }
}

@media(max-width:767px) {
    .examples-category-root {
        padding: 44px 20px
    }
}

.examples-category-root__container {
    max-width: 1120px;
    margin: 0 auto
}

.examples-category-root__header {
    margin-bottom: 60px;
    text-align: center
}

@media(max-width:767px) {
    .examples-category-root__header {
        margin-bottom: 32px
    }
}

.examples-category-root__icon {
    width: 40px;
    height: 40px;
    margin: 0 auto 2px;
    background-repeat: no-repeat;
    background-size: contain
}

.examples-category-root__icon+.examples-category-root__title {
    padding-top: 0
}

.examples-category-root__title {
    font-weight: 700;
    font-size: 54px;
    line-height: 52px;
    max-width: 17em;
    margin: 0 auto;
    padding-top: 40px
}

@media(max-width:767px) {
    .examples-category-root__title {
        font-size: 32px;
        line-height: 34px;
        padding-top: 20px
    }
}

.examples-category-root__subtitle {
    max-width: 38em;
    margin: 8px auto 0
}

.examples-category-root__breadcrumbs,
.examples-category-root__breadcrumbs-item {
    margin: 0;
    padding: 0;
    list-style: none
}

.examples-category-root__breadcrumbs {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    padding: 0 32px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

@media(max-width:767px) {
    .examples-category-root__breadcrumbs {
        top: 12px;
        padding: 0 20px
    }
}

.examples-category-root__breadcrumbs-item {
    display: inline-block;
    position: relative;
    color: var(--neutral-50);
    margin-right: 24px
}

@media(max-width:1199px) {
    .examples-category-root__breadcrumbs-item {
        font-size: 16px;
        line-height: 20px
    }
}

.examples-category-root__breadcrumbs-item:after {
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -3px;
    right: -15px;
    width: 6px;
    height: 6px;
    border-top: 1px solid var(--neutral-50);
    border-right: 1px solid var(--neutral-50);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.examples-category-root__breadcrumbs-item:last-child {
    margin-right: 0
}

.examples-category-root__breadcrumbs-item:last-child:after {
    display: none
}

.examples-category-root__breadcrumbs-link {
    color: inherit;
    -webkit-transition: color .2s;
    transition: color .2s
}

.examples-category-root__breadcrumbs-link:hover {
    color: var(--blue-50)
}

.templates-root__container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 24px 44px
}

@media(max-width:1023px) {
    .templates-root__container {
        padding-top: 16px;
        padding-bottom: 16px
    }
}

@media(max-width:767px) {
    .templates-root__container {
        padding-left: 20px;
        padding-right: 20px
    }
}

.templates-root__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    min-height: 262px;
    max-width: 670px;
    margin: 0 auto 48px;
    text-align: center
}

@media(max-width:1199px) {
    .templates-root__header {
        min-height: 234px;
        margin-bottom: 40px
    }
}

@media(max-width:1023px) {
    .templates-root__header {
        margin-bottom: 32px
    }
}

@media(max-width:767px) {
    .templates-root__header {
        min-height: 164px
    }
}

.templates-root__header--without-create-resume-button {
    min-height: 0
}

.templates-root__header-title {
    font-weight: 700;
    font-size: 54px;
    line-height: 52px;
    margin-bottom: 12px
}

@media(max-width:1199px) {
    .templates-root__header-title {
        font-weight: 700;
        font-size: 38px;
        line-height: 40px;
        margin-bottom: 8px
    }
}

@media(max-width:767px) {
    .templates-root__header-title {
        font-size: 28px;
        line-height: 30px
    }
}

.templates-root__header-action {
    margin-top: 24px
}

@media(max-width:767px) {
    .templates-root__header-action {
        display: none
    }
}

.templates-root__grids {
    position: relative;
    overflow: hidden
}

.templates-root .trustpilot-overview {
    background-color: var(--neutral-10)
}

@media(max-width:1023px) {
    .templates-root .blog-post__content-aside {
        display: none
    }
}

.templates-filter {
    overflow: hidden;
    margin-bottom: 32px
}

@media(max-width:1199px) {
    .templates-filter {
        margin-bottom: 20px
    }
}

@media(max-width:767px) {
    .templates-filter {
        margin-right: -20px;
        margin-left: -20px
    }
}

.templates-filter__container {
    border-bottom: 1px solid var(--neutral-20)
}

.templates-filter__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

@media(max-width:767px) {
    .templates-filter__content {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        padding-bottom: 30px;
        margin-bottom: -30px;
        padding-left: 20px;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch
    }
}

.templates-filter__tabs {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(max-width:767px) {
    .templates-filter__tabs {
        padding-right: 20px
    }
}

.templates-filter__tab-icon {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    color: var(--neutral-50);
    pointer-events: none
}

@media(max-width:1023px) {
    .templates-filter__tab-icon {
        display: none
    }
}

.templates-filter__tabs-selector {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100px;
    height: 2px;
    background-color: var(--blue-50);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s
}

.templates-filter__tabs-selector--hidden {
    display: none
}

.templates-filter__tab {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 20px;
    margin-right: 64px;
    font-weight: 600;
    text-transform: none;
    letter-spacing: normal;
    white-space: nowrap;
    color: var(--neutral-50);
    -webkit-transition: color .15s;
    transition: color .15s
}

@media(max-width:1023px) {
    .templates-filter__tab {
        margin-right: 20px;
        padding-bottom: 12px;
        font-size: 14px;
        letter-spacing: 1.8px;
        line-height: 20px;
        text-transform: uppercase;
        color: var(--neutral-90)
    }
}

.templates-filter__tab:last-child {
    margin-right: 0
}

.templates-filter__tab:hover,
.templates-filter__tab--active {
    color: var(--neutral-90)
}

@media(max-width:1023px) {

    .templates-filter__tab:hover,
    .templates-filter__tab--active {
        color: var(--blue-50)
    }
}

.templates-filter__tab:hover .templates-filter__tab-icon,
.templates-filter__tab--active .templates-filter__tab-icon {
    color: var(--blue-50)
}

.templates-filter__tab--active {
    pointer-events: none
}

.templates-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: -8px;
    margin-right: -8px;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: opacity .35s, -webkit-transform .35s;
    transition: opacity .35s, -webkit-transform .35s;
    transition: opacity .35s, transform .35s;
    transition: opacity .35s, transform .35s, -webkit-transform .35s;
    will-change: transform
}

.templates-grid--hidden {
    opacity: 0;
    pointer-events: none;
    -webkit-transform: translateY(35px);
    transform: translateY(35px);
    -webkit-transition: opacity .2s, -webkit-transform .05s .2s;
    transition: opacity .2s, -webkit-transform .05s .2s;
    transition: opacity .2s, transform .05s .2s;
    transition: opacity .2s, transform .05s .2s, -webkit-transform .05s .2s
}

.templates-grid__cell {
    width: 33.333333%;
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 32px
}

@media(max-width:1023px) {
    .templates-grid__cell {
        width: 50%
    }
}

@media(max-width:767px) {
    .templates-grid__cell {
        width: 100%;
        margin-bottom: 40px
    }
}

.templates-grid__cell--hidden {
    display: none
}

.templates-card {
    display: block;
    padding-bottom: 16px
}

@media(max-width:767px) {
    .templates-card {
        padding-bottom: 0
    }
}

.templates-card__body {
    padding: 32px;
    background-color: var(--neutral-10)
}

@media(max-width:767px) {
    .templates-card__body {
        padding: 20px
    }
}

.templates-card__content {
    max-width: 448px;
    margin: 0 auto;
    text-align: center
}

.templates-card__preview {
    position: relative;
    padding-bottom: 141.389%;
    border-radius: 4px
}

@media(max-width:767px) {
    .templates-card__preview {
        border-radius: 4px
    }
}

.templates-card__preview {}

.templates-card__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    -webkit-box-shadow: 0 8px 36px rgba(152, 180, 234, .19), 0 11px 33px rgba(122, 152, 210, .12);
    box-shadow: 0 8px 36px rgba(152, 180, 234, .19), 0 11px 33px rgba(122, 152, 210, .12);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: visibility .2s, opacity .2s;
    transition: visibility .2s, opacity .2s
}

@media(max-width:1023px) {
    .templates-card__preview:before {
        display: none
    }
}

.templates-card:hover .templates-card__preview:before {
    visibility: visible;
    opacity: 1
}

.templates-card__preview-image {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity .3s, visibility .3s;
    transition: opacity .3s, visibility .3s
}

.templates-card__preview-image--default {
    z-index: 0;
    background-color: var(--white)
}

.templates-card__preview-image--active,
.templates-card__preview-image--default {
    opacity: 1;
    visibility: visible
}

.templates-card__action {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    bottom: 50%;
    margin-bottom: -25px;
    opacity: 0;
    -webkit-transform: translateY(15px);
    transform: translateY(15px);
    -webkit-transition: opacity .2s, -webkit-transform .2s .2s;
    transition: opacity .2s, -webkit-transform .2s .2s;
    transition: opacity .2s, transform .2s .2s;
    transition: opacity .2s, transform .2s .2s, -webkit-transform .2s .2s
}

@media(max-width:1023px) {
    .templates-card__action {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
        bottom: 48px;
        margin-bottom: 0
    }
}

.templates-card:hover .templates-card__action {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: opacity .2s, -webkit-transform .2s;
    transition: opacity .2s, -webkit-transform .2s;
    transition: opacity .2s, transform .2s;
    transition: opacity .2s, transform .2s, -webkit-transform .2s
}

.templates-card__options {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 4px;
    margin-top: 20px
}

@media(max-width:767px) {
    .templates-card__options {
        margin-top: 16px
    }
}

.templates-card__mono,
.templates-card__colors,
.templates-card__badges {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.templates-card__colors-item {
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    margin-right: 12px;
    border: 1px solid rgba(0, 0, 0, .1);
    -webkit-box-shadow: inset 0 0 0 4px transparent;
    box-shadow: inset 0 0 0 4px transparent;
    border-radius: 50%;
    -webkit-transition: -webkit-transform .2s, -webkit-box-shadow .2s;
    transition: -webkit-transform .2s, -webkit-box-shadow .2s;
    transition: transform .2s, box-shadow .2s;
    transition: transform .2s, box-shadow .2s, -webkit-transform .2s, -webkit-box-shadow .2s
}

.templates-card__colors-item:before {
    content: '';
    position: absolute;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    background-color: var(--white);
    border-radius: 50%;
    opacity: 0;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transition: opacity .2s, -webkit-transform .2s;
    transition: opacity .2s, -webkit-transform .2s;
    transition: opacity .2s, transform .2s;
    transition: opacity .2s, transform .2s, -webkit-transform .2s
}

.templates-card__colors-item:after {
    content: '';
    position: absolute;
    right: -6px;
    left: -6px;
    top: -12px;
    bottom: -12px
}

@media(hover) {
    .templates-card__colors-item--active {
        -webkit-transform: scale(1.125);
        transform: scale(1.125);
        -webkit-box-shadow: inset 0 0 0 4px rgba(0, 0, 0, .1);
        box-shadow: inset 0 0 0 4px rgba(0, 0, 0, .1)
    }

    .templates-card__colors-item--active:before {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

.templates-card__badge {
    display: inline-block;
    margin-left: 6px;
    padding: 2px 4px;
    border-radius: 2px;
    background-color: var(--neutral-40);
    color: var(--white);
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1;
    letter-spacing: .3px;
    font-weight: 600
}

.templates-card__badge--free {
    position: absolute;
    z-index: 2;
    right: 12px;
    top: 12px;
    background-color: var(--indigo-60)
}

.templates-card__mono-icon {
    margin-right: 8px;
    width: 16px;
    height: 16px;
    padding: 2px;
    border: 2px solid var(--neutral-90);
    border-radius: 50%
}

.templates-card__mono-icon:after {
    content: '';
    display: block;
    width: 4px;
    height: 8px;
    background-color: var(--neutral-90);
    border-radius: 4px 0 0 4px
}

.templates-card__mono-text {
    font-size: 14px;
    line-height: 16px;
    color: var(--neutral-50)
}

.templates-card__footer {
    margin-top: 12px
}

.templates-card__name {
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    -webkit-transition: color .2s;
    transition: color .2s
}

@media(max-width:767px) {
    .templates-card__name {
        font-size: 19px;
        line-height: 24px
    }
}

.templates-card:hover .templates-card__name {
    color: var(--blue-50)
}

.templates-card__caption {
    font-size: 16px;
    line-height: 20px;
    color: var(--neutral-50)
}

.builder-hero {
    position: relative;
    overflow: hidden;
    background-color: var(--neutral-10);
    border-top: 1px solid var(--neutral-10);
    border-bottom: 1px solid var(--neutral-10);
    margin-bottom: -1px
}

.builder-hero__container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

@media(max-width:767px) {
    .builder-hero__container {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.builder-hero__content {
    width: 42.857%;
    padding-top: 104px;
    padding-bottom: 120px
}

@media(max-width:1023px) {
    .builder-hero__content {
        width: auto;
        max-width: 480px;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        margin-right: 96px;
        padding-top: 64px;
        padding-bottom: 64px
    }
}

@media(max-width:767px) {
    .builder-hero__content {
        margin: 0 auto;
        padding-top: 32px;
        padding-bottom: 40px;
        text-align: center
    }
}

.builder-hero__title {
    max-width: 8.5em;
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 54px;
    line-height: 52px
}

@media(max-width:1023px) {
    .builder-hero__title {
        margin-bottom: 8px;
        font-weight: 700;
        font-size: 38px;
        line-height: 40px
    }
}

@media(max-width:767px) {
    .builder-hero__title {
        margin-left: auto;
        margin-right: auto;
        font-size: 32px;
        line-height: 34px
    }
}

.builder-hero__description {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 24px
}

@media(max-width:1023px) {
    .builder-hero__description {
        font-size: 19px;
        line-height: 24px
    }
}

@media(min-width:1024px) {
    .builder-hero__button {
        font-size: 22px;
        line-height: 28px;
        padding: 18px 40px
    }
}

.builder-hero__visual {
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 48.571%
}

@media(max-width:1023px) {
    .builder-hero__visual {
        width: 38%
    }
}

@media(max-width:767px) {
    .builder-hero__visual {
        width: 100%;
        height: 140px
    }
}

.builder-hero__visual--cover-letter {
    margin-top: 104px
}

@media(max-width:1023px) {
    .builder-hero__visual--cover-letter {
        margin-top: 64px
    }
}

@media(max-width:767px) {
    .builder-hero__visual--cover-letter {
        margin: 24px auto 0;
        max-width: 420px;
        height: 180px
    }
}

.builder-hero__resumes {
    position: absolute;
    top: -48px;
    left: 0;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

@media(max-width:1023px) {
    .builder-hero__resumes {
        top: -200px
    }
}

@media(max-width:767px) {
    .builder-hero__resumes {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        top: 0;
        left: -100%;
        right: -100%
    }
}

@-webkit-keyframes movePreviews {
    0% {
        -webkit-transform: translateY(0%);
        transform: translateY(0%)
    }

    100% {
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%)
    }
}

@keyframes movePreviews {
    0% {
        -webkit-transform: translateY(0%);
        transform: translateY(0%)
    }

    100% {
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%)
    }
}

.builder-hero__resumes-list {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: calc(50% - 16px);
    will-change: transform;
    -webkit-animation: movePreviews 55s linear infinite;
    animation: movePreviews 55s linear infinite
}

@media(max-width:1023px) {
    .builder-hero__resumes-list {
        width: 100%
    }
}

@media(max-width:767px) {
    .builder-hero__resumes-list {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-animation: none;
        animation: none
    }
}

.builder-hero__resumes-list--2 {
    top: -88px;
    -webkit-animation-duration: 52s;
    animation-duration: 52s
}

@media(max-width:1023px) {
    .builder-hero__resumes-list--2 {
        display: none
    }
}

.builder-hero__resume {
    display: block;
    position: relative;
    width: 100%;
    margin-bottom: 32px;
    border-radius: 4px
}

@media(max-width:1023px) {
    .builder-hero__resume {
        margin-bottom: 16px
    }
}

@media(max-width:767px) {
    .builder-hero__resume {
        width: 180px;
        margin: 0 10px;
        display: none
    }

    .builder-hero__resume:nth-child(1),
    .builder-hero__resume:nth-child(2),
    .builder-hero__resume:nth-child(3) {
        display: block
    }

    .builder-hero__resume:nth-child(1),
    .builder-hero__resume:nth-child(3) {
        top: 20px
    }
}

.builder-hero__resume:before {
    content: '';
    display: block;
    padding-bottom: 141.389%;
    border-radius: inherit;
    background-color: var(--neutral-15);
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    will-change: opacity;
    -webkit-transition-delay: inherit;
    transition-delay: inherit
}

.builder-hero__resumes--loaded .builder-hero__resume:before {
    opacity: 0
}

.builder-hero__resume-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    opacity: 0;
    -webkit-transform: scale(.95) translateZ(0);
    transform: scale(.95) translateZ(0);
    -webkit-transition: opacity .4s, -webkit-transform .5s;
    transition: opacity .4s, -webkit-transform .5s;
    transition: opacity .4s, transform .5s;
    transition: opacity .4s, transform .5s, -webkit-transform .5s
}

.builder-hero__resumes--loaded .builder-hero__resume-image {
    opacity: 1;
    -webkit-transform: scale(1) translateZ(0);
    transform: scale(1) translateZ(0)
}

.builder-hero__cover-letter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 4px;
    background-color: var(--white);
    background-size: cover;
    background-position: 50% 0
}

.builder-hero__cover-letter:before {
    content: '';
    display: block;
    padding-bottom: 141.389%
}

.builder-hero__cover-letter-decor {
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain
}

.builder-hero__cover-letter-decor:before {
    content: '';
    display: block
}

.builder-hero__cover-letter-decor--left {
    width: 48.713%;
    left: -21.5%;
    bottom: 0;
    -webkit-transform: translateY(3.263%);
    transform: translateY(3.263%)
}

@media(max-width:767px) {
    .builder-hero__cover-letter-decor--left {
        display: none
    }
}

.builder-hero__cover-letter-decor--left:before {
    padding-bottom: 98.116%
}

.builder-hero__cover-letter-decor--right {
    width: 44.853%;
    right: 4.411%;
    top: 0;
    -webkit-transform: translateY(-40%);
    transform: translateY(-40%)
}

@media(max-width:767px) {
    .builder-hero__cover-letter-decor--right {
        right: 11%;
        width: 35.82%
    }
}

.builder-hero__cover-letter-decor--right:before {
    padding-bottom: 75%
}

.builder-promo {
    background-color: var(--white)
}

.builder-promo__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

@media(max-width:1023px) {
    .builder-promo__header {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        max-width: 504px;
        margin: 0 auto
    }
}

.builder-promo__header-visual {
    width: 48.571%;
    background-color: var(--neutral-10);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 20px
}

.builder-promo__header-visual.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

@media(max-width:1023px) {
    .builder-promo__header-visual {
        width: 100%
    }
}

.builder-promo__header-visual:before {
    content: '';
    display: block;
    padding-bottom: 65.4411%
}

.builder-promo__header-content {
    width: 40%
}

@media(max-width:1023px) {
    .builder-promo__header-content {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
        margin-bottom: 24px;
        width: 100%;
        text-align: center
    }
}

.builder-promo__header-description {
    margin-bottom: 24px
}

.builder-promo__features {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 80px -16px 0
}

@media(max-width:1023px) {
    .builder-promo__features {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: 48px 0 0
    }
}

@media(max-width:767px) {
    .builder-promo__features {
        margin-top: 32px
    }
}

.builder-promo__feature {
    width: 33.333%;
    padding: 0 16px
}

@media(max-width:1023px) {
    .builder-promo__feature {
        position: relative;
        width: 100%;
        padding: 0 0 24px 88px;
        margin-bottom: 24px;
        border-bottom: 1px solid var(--neutral-15)
    }
}

@media(max-width:767px) {
    .builder-promo__feature {
        padding: 0;
        margin-bottom: 32px;
        border-bottom: none;
        text-align: center
    }
}

.builder-promo__feature:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none
}

.builder-promo__header-description a,
.builder-promo__feature-description a {
    color: var(--blue-50)
}

.builder-promo__header-description a:hover,
.builder-promo__feature-description a:hover {
    color: var(--blue-70)
}

.builder-promo__feature-icon {
    width: 56px;
    height: 56px;
    margin-bottom: 8px;
    background-color: var(--neutral-10);
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%
}

.builder-promo__feature-icon.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

@media(max-width:1023px) {
    .builder-promo__feature-icon {
        position: absolute;
        left: 0;
        top: 2px
    }
}

@media(max-width:767px) {
    .builder-promo__feature-icon {
        position: relative;
        top: 0;
        margin: 0 auto 8px
    }
}

.builder-promo__feature-title {
    display: block;
    margin-bottom: 4px;
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    color: var(--indigo-90)
}

@media(max-width:1023px) {
    .builder-promo__feature-title {
        font-size: 28px;
        line-height: 30px;
        margin-bottom: 12px
    }
}

@media(max-width:767px) {
    .builder-promo__feature-title {
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 4px
    }
}

.builder-benefits {
    background-color: var(--white)
}

.builder-benefits__header {
    max-width: 550px;
    margin: 0 auto;
    text-align: center
}

.builder-benefits__header-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 16px;
    background-color: var(--neutral-10);
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%
}

.builder-benefits__header-icon.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

@media(max-width:1023px) {
    .builder-benefits__header-icon {
        margin-bottom: 12px
    }
}

.builder-benefits__header-title {
    max-width: 11.5em;
    margin-left: auto;
    margin-right: auto
}

.builder-benefits__header-description {
    margin-bottom: 24px
}

.builder-benefits__item {
    margin-top: 120px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

@media(max-width:1023px) {
    .builder-benefits__item {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-top: 64px
    }
}

@media(max-width:1023px) {
    .builder-benefits__item {
        margin-top: 56px
    }
}

.builder-benefits__item-content {
    position: relative;
    width: 40%;
    padding-left: 80px;
    margin-top: 48px
}

@media(max-width:1023px) {
    .builder-benefits__item-content {
        width: 100%;
        margin-top: 32px
    }
}

@media(max-width:767px) {
    .builder-benefits__item-content {
        margin-top: 24px;
        padding-left: 0;
        padding-top: 64px
    }
}

@media(min-width:1024px) {
    .builder-benefits__item:nth-child(odd) .builder-benefits__item-content {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1
    }
}

.builder-benefits__item-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 56px;
    height: 56px;
    background-color: var(--neutral-10);
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%
}

.builder-benefits__item-icon.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

.builder-benefits__item-title {
    display: block;
    margin-bottom: 12px;
    font-size: 28px;
    line-height: 30px;
    font-weight: 600;
    color: var(--indigo-90)
}

@media(max-width:767px) {
    .builder-benefits__item-title {
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 8px
    }
}

.builder-benefits__item-description a {
    color: var(--blue-50)
}

.builder-benefits__item-description a:hover {
    color: var(--blue-70)
}

.builder-benefits__item-visual {
    position: relative;
    overflow: hidden;
    width: 51.428%;
    border-radius: 6px;
    background-color: #f7f7fb;
    border: 1px solid #f7f7fb
}

@media(max-width:1023px) {
    .builder-benefits__item-visual {
        width: 100%;
        max-height: 480px
    }
}

@media(max-width:767px) {
    .builder-benefits__item-visual {
        max-height: 320px
    }
}

.builder-benefits__item-visual:before {
    content: '';
    display: block;
    padding-bottom: 75%
}

.builder-benefits__item-video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-transition: opacity .2s;
    transition: opacity .2s
}

.builder-benefits__item-video--ready {
    opacity: 1
}

.builder-animation {
    position: relative;
    width: 384px;
    height: 562px;
    pointer-events: none;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.builder-animation__document {
    position: absolute;
    width: 100%;
    height: 536px;
    -webkit-transform: scale(.4583);
    transform: scale(.4583)
}

.builder-animation__document-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: var(--white);
    -webkit-box-shadow: 0 16px 36px rgba(186, 200, 227, .25), 0 24px 60px rgba(186, 200, 227, .2);
    box-shadow: 0 16px 36px rgba(186, 200, 227, .25), 0 24px 60px rgba(186, 200, 227, .2);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%
}

.builder-animation__document--1 {
    left: 0;
    top: 40px;
    z-index: 2;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0
}

.builder-animation__document--back {
    left: 0;
    top: 12px;
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0
}

.builder-animation__document--2 {
    right: 0;
    top: 0;
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0
}

.builder-animation__document--3 {
    left: 0;
    bottom: 0;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%
}

.builder-animation__document--4 {
    right: 0;
    bottom: 40px;
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%
}

.builder-animation__preview,
.builder-animation__placeholder,
.builder-animation__highlight {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit
}

.builder-animation__placeholder,
.builder-animation__preview {
    background-color: var(--white);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 0
}

.builder-animation__preview {
    background-size: cover;
    opacity: 0
}

.builder-animation__highlight {
    border: 6px solid var(--indigo-60);
    opacity: 0
}

.builder-animation__mark {
    position: absolute;
    top: calc(50% - 52px);
    left: calc(50% - 52px);
    width: 104px;
    height: 104px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--indigo-60);
    color: var(--white);
    opacity: 0
}

.builder-animation__format {
    position: absolute;
    width: 96px;
    height: 120px;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0
}

.builder-animation__format--pdf {
    top: 64px;
    right: -48px
}

.builder-animation__format--doc {
    bottom: 64px;
    left: -48px
}

.builder-how {
    background-color: var(--white)
}

@media(max-width:767px) {
    .builder-how {
        overflow: hidden
    }
}

.builder-how__header {
    max-width: 540px;
    margin: 0 auto 120px;
    text-align: center
}

@media(max-width:1023px) {
    .builder-how__header {
        margin-bottom: 80px
    }
}

@media(max-width:767px) {
    .builder-how__header {
        margin-bottom: 40px
    }
}

.builder-how__header-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 16px;
    background-color: var(--neutral-10);
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%
}

.builder-how__header-icon.is-image-loaded {
    border-radius: 0;
    background-color: transparent
}

@media(max-width:1023px) {
    .builder-how__header-icon {
        margin-bottom: 12px
    }
}

.builder-how__header-description {
    margin-bottom: 24px
}

.builder-how__header-description a {
    color: var(--blue-50)
}

.builder-how__header-description a:hover {
    color: var(--blue-70)
}

.builder-how__content {
    padding: 0 64px 0 96px
}

@media(min-width:768px) {
    .builder-how__content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between
    }
}

@media(max-width:1023px) {
    .builder-how__content {
        padding: 0 0 0 32px
    }
}

@media(max-width:767px) {
    .builder-how__content {
        padding: 0
    }
}

.builder-how__visual {
    position: relative;
    width: 32.25806452%
}

@media(max-width:767px) {
    .builder-how__visual {
        width: 160px;
        margin: 0 auto 40px
    }
}

.builder-how__visual-inner {
    position: absolute;
    position: -webkit-sticky;
    position: sticky;
    top: calc(50% - 260px);
    left: 0;
    width: 100%
}

.builder-how__visual-inner:before {
    content: '';
    display: block;
    padding-bottom: 146.354%
}

@media(max-width:767px) {
    .builder-how__visual-inner {
        position: relative;
        top: 0 !important
    }
}

.builder-how__animation {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    opacity: 0
}

.builder-how__animation--ready {
    opacity: 1
}

.builder-how__steps {
    position: relative;
    width: 51.612%;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

@media(max-width:1023px) {
    .builder-how__steps {
        width: 55%
    }
}

@media(max-width:767px) {
    .builder-how__steps {
        position: relative;
        overflow: hidden;
        width: auto;
        margin: 0 -20px
    }
}

@media(max-width:767px) {
    .builder-how__steps-list {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 10000%
    }
}

.builder-how__step {
    position: relative;
    padding-top: 5px;
    padding-left: 64px;
    margin-bottom: 96px
}

@media(max-width:1023px) {
    .builder-how__step {
        padding-top: 0;
        padding-left: 0;
        margin-bottom: 64px
    }
}

@media(max-width:767px) {
    .builder-how__step {
        width: 1%;
        margin: 0;
        padding: 0 20px
    }
}

.builder-how__step:last-child {
    margin-bottom: 0
}

.builder-how__step-title {
    margin-bottom: 12px;
    font-size: 28px;
    line-height: 30px;
    font-weight: 600;
    color: var(--indigo-90)
}

@media(max-width:1023px) {
    .builder-how__step-title {
        margin-bottom: 4px;
        font-size: 22px;
        line-height: 28px
    }
}

@media(min-width:1024px) {
    .builder-how__step-index {
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        padding-top: 2px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-radius: 50%;
        background-color: var(--indigo-10);
        font-size: 22px;
        line-height: 28px
    }
}

@media(max-width:1023px) {
    .builder-how__step-index:after {
        content: '. '
    }
}

.builder-how__step-description strong {
    padding: 0 2px;
    font-weight: inherit;
    background-color: rgba(255, 242, 204, .64);
    border-radius: 2px
}

.builder-how__step-description a {
    color: var(--blue-50)
}

.builder-how__step-description a:hover {
    color: var(--blue-70)
}

.builder-how__step-note {
    position: relative;
    margin-top: 32px;
    padding: 12px 12px 12px 40px;
    border-radius: 6px;
    background-color: var(--beige-10);
    font-size: 16px;
    line-height: 20px
}

@media(max-width:1023px) {
    .builder-how__step-note {
        margin-top: 24px
    }
}

.builder-how__step-note-icon {
    position: absolute;
    top: 12px;
    left: 12px;
    color: var(--amber-40)
}

.builder-how__step-note--protection {
    background-color: var(--indigo-10)
}

.builder-how__step-note--protection .builder-how__step-note-icon {
    color: var(--indigo-70)
}

.builder-how__bullets {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 32px
}

@media(min-width:768px) {
    .builder-how__bullets {
        display: none
    }
}

.builder-how__bullet {
    width: 8px;
    height: 8px;
    margin: 0 6px;
    background-color: var(--neutral-20);
    border-radius: 50%;
    -webkit-transition: background-color .2s;
    transition: background-color .2s
}

.builder-how__bullet--active {
    background-color: var(--blue-50)
}

.builder-resources {
    position: relative;
    padding-bottom: 0;
    background-color: var(--white)
}

@media(max-width:767px) {
    .builder-resources {
        padding-bottom: 48px
    }
}

.builder-resources:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background-color: var(--indigo-80)
}

@media(max-width:1023px) {
    .builder-resources:before {
        height: 80px
    }
}

@media(max-width:767px) {
    .builder-resources:before {
        display: none
    }
}

.builder-resources__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    max-width: 540px;
    margin: 0 auto 80px;
    text-align: center
}

@media(max-width:1023px) {
    .builder-resources__header {
        margin-bottom: 48px
    }
}

@media(max-width:767px) {
    .builder-resources__header {
        margin-bottom: 40px
    }
}

.builder-resources__header-description {
    margin-bottom: 24px
}

.builder-resources__header-action {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: var(--blue-50);
    -webkit-transition: color .15s;
    transition: color .15s
}

.builder-resources__header-action:hover {
    color: var(--blue-70)
}

.builder-resources__guides {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    max-width: 960px;
    margin: 0 auto
}

@media(max-width:1023px) {
    .builder-resources__guides {
        max-width: none;
        margin: 0 -12px
    }
}

@media(max-width:767px) {
    .builder-resources__guides {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: 0
    }
}

.builder-resources__guide {
    position: relative;
    overflow: hidden;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 0 16px;
    width: 50%;
    min-height: 392px;
    padding: 32px;
    border-radius: 12px;
    background-color: #493995;
    color: var(--white);
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

@media(max-width:1023px) {
    .builder-resources__guide {
        padding: 20px;
        margin: 0 12px
    }
}

@media(max-width:767px) {
    .builder-resources__guide {
        width: 100%;
        min-height: 294px;
        margin: 0 0 24px
    }

    .builder-resources__guide:last-child {
        margin-bottom: 0
    }
}

.builder-resources__guide-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    will-change: opacity
}

.builder-resources__guide-image:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(28%, #493995), color-stop(80%, rgba(73, 57, 149, 0)));
    background-image: linear-gradient(to top, #493995 28%, rgba(73, 57, 149, 0) 80%)
}

.builder-resources__guide-label {
    position: relative;
    display: inline-block;
    margin-bottom: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    background-color: var(--orange-40);
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase;
    font-weight: 600
}

.builder-resources__guide-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    position: relative;
    width: 100%;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: transform .3s cubic-bezier(.645, .045, .355, 1);
    transition: transform .3s cubic-bezier(.645, .045, .355, 1), -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);
    will-change: transform
}

.builder-resources__guide-title {
    display: block;
    margin-bottom: 16px;
    font-size: 28px;
    line-height: 30px;
    font-weight: 600
}

@media(max-width:1023px) {
    .builder-resources__guide-title {
        margin-bottom: 4px;
        font-size: 22px;
        line-height: 28px
    }
}

.builder-resources__guide-note {
    opacity: .64;
    font-size: 14px;
    letter-spacing: 1.8px;
    line-height: 20px;
    text-transform: uppercase
}

@media(max-width:1023px) {
    .builder-resources__guide-note {
        font-weight: 600
    }
}

.builder-resources__guide-secondary {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    will-change: opacity
}

.builder-resources__guide--ready .builder-resources__guide-secondary {
    opacity: 0
}

.builder-resources__guide-description {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 100%;
    padding-top: 16px
}

@media(max-width:767px) {
    .builder-resources__guide-description {
        display: none
    }
}

.builder-resources__guide-action {
    margin-top: 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(hover) {
    .builder-resources__guide:hover .builder-resources__guide-image {
        opacity: 0
    }

    .builder-resources__guide:hover .builder-resources__guide-secondary {
        opacity: 1
    }

    .builder-resources__guide:hover {}

    .builder-resources__guide:hover .builder-resources__guide-content {
        -webkit-transform: translateY(0) !important;
        transform: translateY(0) !important
    }
}

.builder-resources__guide--cover-letter {
    background-color: #338699
}

.builder-resources__guide--cover-letter .builder-resources__guide-image:after {
    background-image: -webkit-gradient(linear, left bottom, left top, color-stop(28%, #338699), color-stop(80%, rgba(51, 134, 153, 0)));
    background-image: linear-gradient(to top, #338699 28%, rgba(51, 134, 153, 0) 80%)
}

.builder-resources__guide--cover-letter .builder-resources__guide-label {
    background-color: var(--blue-50)
}
</style>
