define("~fastboot/app-factory",["ember-octane-vs-classic-cheat-sheet/app","ember-octane-vs-classic-cheat-sheet/config/environment"],(function(e,t){return e=e.default,t=t.default,{default:function(){return e.create(t.APP)}}})),define("ember-octane-vs-classic-cheat-sheet/components/guide-section.css",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={"title-container":"_title-container_9xtt8y",title:"_title_9xtt8y",permalink:"_permalink_9xtt8y","subsection-container":"_subsection-container_9xtt8y"}})),define("ember-octane-vs-classic-cheat-sheet/components/guide-section/subsection.css",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={"title-container":"_title-container_11tjec",title:"_title_11tjec",permalink:"_permalink_11tjec",description:"_description_11tjec","code-examples-container":"_code-examples-container_11tjec","ember-classic":"_ember-classic_11tjec","ember-octane":"_ember-octane_11tjec","edit-link-container":"_edit-link-container_11tjec"}})),define("ember-octane-vs-classic-cheat-sheet/components/locale-menu.css",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={container:"_container_zppc7u",select:"_select_zppc7u"}})),define("ember-octane-vs-classic-cheat-sheet/initializers/ajax",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.get,o=function(e){var o=t(this,"fastboot.request.protocol")
if(/^\/\//.test(e.url))e.url=o+e.url
else if(!/^https?:\/\//.test(e.url))try{e.url=o+"//"+t(this,"fastboot.request.host")+e.url}catch(n){throw new Error("You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: "+n.message)}if(!najax)throw new Error("najax does not seem to be defined in your app. Did you override it via `addOrOverrideSandboxGlobals` in the fastboot server?")
najax(e)},n={name:"ajax-service",initialize:function(e){e.register("ajax:node",o,{instantiate:!1}),e.inject("adapter","_ajaxRequest","ajax:node"),e.inject("adapter","fastboot","service:fastboot")}}
e.default=n})),define("ember-octane-vs-classic-cheat-sheet/initializers/error-handler",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"error-handler",initialize:function(){Ember.onerror||(Ember.onerror=function(e){var t="There was an error running your app in fastboot. More info about the error: \n ".concat(e.stack||e)
console.error(t)})}}
e.default=t})),define("ember-octane-vs-classic-cheat-sheet/instance-initializers/setup-fetch",["exports","fetch"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o={name:"fetch",initialize:function(e){var o=e.lookup("service:fastboot");(0,t.setupFastboot)(o.get("request"))}}
e.default=o})),define("ember-octane-vs-classic-cheat-sheet/styles/app",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={}})),define("ember-octane-vs-classic-cheat-sheet/styles/application",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={header:"_header_9no6ge",main:"_main_9no6ge",logo:"_logo_9no6ge","locale-menu-container":"_locale-menu-container_9no6ge","guide-section-container":"_guide-section-container_9no6ge"}}))
