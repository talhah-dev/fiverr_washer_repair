function Replace-InFile {
  param([string]$Path,[array]$Pairs)
  if (!(Test-Path -LiteralPath $Path)) { return }
  $content = Get-Content -LiteralPath $Path -Raw
  foreach ($pair in $Pairs) { $content = $content.Replace($pair[0], $pair[1]) }
  Set-Content -LiteralPath $Path -Value $content -NoNewline
}

Replace-InFile 'index.html' @(
  @("Trusted water heater repair &#8226; <span class=""italic text-[#fff]/50"">See common water heater issues</span>","Trusted water heater repair &#8226; <span class=""italic text-[#fff]/50"">See common water heater issues</span>"),
  @("Water Heater acting up at home?","No hot water at home?"),
  @("Quick help that lasts.","Fast, dependable water heater repair."),
  @("From no-heat problems and sparking to shutdowns, keypad faults, and water heaters that will not start, we","From no hot water and active leaks to loud tank noises, ignition trouble, and water heaters that will not turn on, we"),
  @("inspect the water heater carefully, explain the repair clearly, and help you get back to fast, reliable kitchen use.","inspect the system carefully, explain the repair clearly, and help restore reliable hot water without the guesswork."),
  @("Countertop, built-in &amp; over-the-range water heater service","Tank, tankless &amp; hybrid water heater service"),
  @("Water Heater not heating","No hot water"),
  @("Water Heater sparking","Water heater leaking"),
  @("Water Heater won't start","Water heater won't turn on"),
  @("Water Heater shuts off","Water heater making noise"),
  @("Why is my water heater not heating?","Why is my water heater not making hot water?"),
  @("Why is my water heater shutting off?","Why is my water heater leaking?"),
  @("Microwave runs but food stays cold, heats weakly, or takes too long to warm items.","Little to no hot water, temperature drops, or water that never gets hot enough."),
  @("placeholder=""Example: water heater is not heating, sparking, shutting off, or will not start...""","placeholder=""Example: no hot water, tank is leaking, water heater is making noise, or it will not turn on..."""),
  @("Our water heater stopped cooling halfway through the week. They found the issue fast, explained","Our water heater stopped producing hot water. They found the issue fast, explained"),
  @("Get your water heater working again <span class=""text-[#4a3c77]"">today</span>","Get your hot water back <span class=""text-[#4a3c77]"">today</span>"),
  @("Call Now for Water Heater Repair","Call Now for Water Heater Repair"),
  @("value=""water-heater-no-hot-water"">Water Heater not heating","value=""water-heater-no-hot-water"">No hot water"),
  @("value=""water-heater-leaking"">Water Heater sparking</option>","value=""water-heater-leaking"">Water heater leaking</option>"),
  @("value=""water-heater-wont-turn-on"">Water Heater won't start</option>","value=""water-heater-wont-turn-on"">Water heater won't turn on</option>"),
  @("value=""water-heater-making-noise"">Water Heater shuts off</option>","value=""water-heater-making-noise"">Water heater making noise</option>")
)

Replace-InFile 'about.html' @(
  @("restore clean, reliable water heater performance with careful testing, professional handling, and a premium customer","restore reliable water heater performance with careful testing, professional handling, and a premium customer"),
  @("repair it cleanly, and confirm reliable water heater performance before we leave.","repair it cleanly, and confirm reliable hot water performance before we leave."),
  @("We verify the repair and overall water heater performance before closing out.","We verify the repair and overall hot water performance before closing out."),
  @("Verified water heater performance","Verified hot water performance"),
  @("Serving Dallas and nearby areas with premium water heater service.","Serving nearby areas with premium water heater service."),
  @("Brand-specific water heater diagnostics","Tank and tankless water heater diagnostics"),
  @("If your water heater is not heating, taking too long, starting, or making unusual noise, we will keep it straightforward: what is","If your water heater has no hot water, is leaking, will not turn on, or is making unusual noise, we will keep it straightforward: what is")
)

Replace-InFile 'contact.html' @(
  @("Let's fix your water heater  -  <span class=""text-[#fff]"">fast</span>","Let's fix your water heater <span class=""text-[#fff]"">fast</span>"),
  @("Whether the water heater is not heating, sparking, shutting off, or not starting, share what you are","Whether there is no hot water, the tank is leaking, the unit is making noise, or it will not turn on, share what you are"),
  @("value=""water-heater-no-hot-water"">Water Heater not heating</option>","value=""water-heater-no-hot-water"">No hot water</option>"),
  @("value=""water-heater-leaking"">Water Heater sparking</option>","value=""water-heater-leaking"">Water heater leaking</option>"),
  @("value=""water-heater-wont-turn-on"">Water Heater won't start</option>","value=""water-heater-wont-turn-on"">Water heater won't turn on</option>"),
  @("value=""noisy-water-heater"">Water Heater smells like gas</option>","value=""noisy-water-heater"">Water heater making noise</option>"),
  @("placeholder=""Example: water heater is not heating, sparking, shutting off, or won't start""","placeholder=""Example: no hot water, tank leaking, rumbling noise, or water heater won't turn on"""),
  @("Why is my water heater not heating  -  what causes this?","Why is my water heater not making hot water  -  what causes this?"),
  @("My water heater is smells like gas  -  what is usually","My water heater is leaking  -  what is usually"),
  @("Leaks can come from the tank, a pressure valve issue, loose fittings, or water connections that need attention.","Leaks can come from the tank, a pressure valve issue, loose fittings, or water connections that need attention.")
)

Replace-InFile 'faq.html' @(
  @("Browse by category or search a symptom like no heat, sparking, shutting off, or","Browse by category or search a symptom like no hot water, leaking, making noise, or"),
  @("placeholder=""Search: not heating, sparking, shutting off, keypad issue, water heater won't start...""","placeholder=""Search: no hot water, leaking tank, water heater making noise, pilot issue, water heater won't turn on..."""),
  @("Water Heater not heating","No hot water"),
  @("Water Heater sparking","Water heater leaking"),
  @("Share the symptom, when it started, whether it sparks, loses heat, shuts off, or shows an error code, and the water heater brand or model if you have it.","Share the symptom, when it started, whether there is no hot water, a leak, unusual noise, or an error code, and the water heater brand or model if you have it."),
  @("Why does my water heater run but not cool?","Why is my water heater not making hot water?"),
  @("Dirty coils, poor airflow, a thermostat issue, or a failing cooling part can stop the water heater from cooling properly.","A failed heating element, thermostat issue, ignition problem, or sediment buildup can stop a water heater from producing hot water properly."),
  @("Why is my water heater smells like gas?","Why is my water heater leaking?"),
  @("Fan-motor issues, compressor vibration, or loose internal parts can cause unusual water heater noise.","Sediment buildup, pressure changes, or worn internal parts can cause popping, rumbling, or other unusual water heater noise."),
  @("Do I need to empty the water heater before service?","Do I need to clear space around the water heater before service?"),
  @("Is it safe to keep using a water heater that is overheating or not heating properly?","Is it safe to keep using a water heater that is leaking or overheating?"),
  @("Turn off and unplug the water heater immediately if it is safe to do so, keep the area clear, and contact a professional.","Shut the unit down if it is safe to do so, keep the area clear, and contact a professional if you see smoke, smell burning, or suspect a serious fault.")
)

Replace-InFile 'docs/javascript/Footer.js' @(
  @("Water Heater not heating","No hot water"),
  @("Water Heater sparking","Water heater leaking"),
  @("Water Heater won't start","Water heater won't turn on"),
  @("Water Heater smells like gas","Water heater making noise"),
  @("Simple maintenance updates to help keep your water heater heating evenly and working reliably.","Simple maintenance updates to help keep your water heater running safely and delivering reliable hot water.")
)

Replace-InFile 'docs/javascript/Navbar.js' @(
  @("Water Heater not heating","No hot water"),
  @("Water Heater won't start","Water heater won't turn on"),
  @("Choose a service or book a repair visit.","Choose a water heater service or book a repair visit."),
  @("Tank, thermostat, and heating checks","Tank, thermostat, and heating checks")
)

Replace-InFile 'water-heater-no-hot-water.html' @(
  @("Water Heater not heating?","No hot water?"),
  @("Water Heater not heating repair","No hot water repair"),
  @("Heating problems can come from a failed magnetron, bad diode, door-switch issue, or","No-hot-water problems can come from a failed heating element, thermostat issue, ignition fault, or"),
  @("Faulty diode or switch","Failed heating element or thermostat"),
  @("A weak diode, failing magnetron, or bad switch can leave the water heater running without heating properly","A weak heating element, failing thermostat, or ignition issue can leave the water heater running without producing enough hot water"),
  @("Let us know if the water heater runs without heating, warms food very slowly, or","Let us know if the water turns lukewarm, runs cold quickly, or"),
  @("clicks when starting, how long it runs before stopping, and whether the problem happens every cycle. That helps us narrow the likely fault","whether the problem happens every time, how long hot water lasts, and if the unit tries to restart. That helps us narrow the likely fault")
)

Replace-InFile 'water-heater-leaking.html' @(
  @("Water Heater sparking?","Water heater leaking?"),
  @("stop the sparks and restore safe operation.","find the leak and restore safe, reliable operation."),
  @("If your water heater sparks during use, flashes inside the cavity, or makes sharp popping sounds, we inspect the waveguide cover, interior, rack parts, and high-voltage components to find the real issue.","If your water heater is leaking from the tank, fittings, pressure valve, or supply connections, we inspect the source carefully and repair the real issue."),
  @("sparks during use","starts leaking"),
  @("Water Heater sparking repair service","Water heater leak repair service"),
  @("Waveguide cover and interior hardware","Tank fittings and valve connections"),
  @("If the waveguide cover, rack support, or interior coating is damaged, the water heater can start sparking during operation.","If a valve, fitting, or the tank itself fails, the water heater can start leaking during normal operation."),
  @("Interior safety parts and high-voltage checks","Pressure relief valve and water connections"),
  @("Damaged interior parts or electrical faults can create unsafe sparking conditions.","Loose fittings, valve trouble, or tank wear can create active leaks that should be checked quickly."),
  @("Interior condition and electrical safety","Drain line and surrounding water paths"),
  @("Metal damage, food buildup, or failed parts can trigger sparks and arcing inside the water heater.","We check the drain line, surrounding water paths, and connected fittings to find where the leak begins."),
  @("Main control and power delivery","Thermostat and safety control checks"),
  @("Tell us whether the sparks appear near the side wall, waveguide cover, rack area, or after food splatters build up. That helps us narrow the likely cause quickly.","Tell us where you notice the leak, whether it is steady or intermittent, and if it starts when the unit heats. That helps us narrow the likely cause quickly."),
  @("Damaged waveguide cover","Failed valve or loose fitting"),
  @("A damaged waveguide cover or interior surface can trigger sparks while the water heater is running.","A failed valve, loose fitting, or worn tank section can lead to leaking while the water heater is running."),
  @("Can a damaged waveguide cover cause sparking?","Can a pressure valve cause a water heater leak?"),
  @("Yes. A damaged waveguide cover or interior surface can create arcing and visible sparks during operation.","Yes. A failing pressure valve can release water and make it look like the whole unit is leaking.")
)

Replace-InFile 'water-heater-wont-turn-on.html' @(
  @("Water Heater won't start?","Water heater won't turn on?"),
  @("start problem","turn-on problem"),
  @("start repair","turn-on repair")
)

Replace-InFile 'water-heater-making-noise.html' @(
  @("Water Heater shuts off?","Water heater making noise?"),
  @("door-switch faults, airflow problems, thermal cutoffs, and control issues","sediment buildup, heating issues, pressure changes, and component wear"),
  @("shutdown repair","noise repair"),
  @("If your water heater runs for a short time and then shuts off, we inspect the door switches, cooling airflow, thermal cutoffs, and control system to find the real source fast.","If your water heater is popping, rumbling, hissing, or making other unusual sounds, we inspect the tank, heating components, and pressure controls to find the real source fast."),
  @("when the water heater shuts off, whether it happens after a few seconds, mid-cycle, or while the water heater is running.","when the noise starts, whether it happens while heating, and if the sound is constant or occasional."),
  @("Door switches and thermal cutoffs","Tank condition and pressure controls"),
  @("A weak door switch or overheating protection part can stop the water heater during use.","Sediment buildup, pressure changes, or worn parts can cause the water heater to make unusual noise."),
  @("without unexpected shutdowns.","without the unusual noise."),
  @("Overheating or safety cutoff","Sediment buildup or pressure issue"),
  @("An overheating water heater can trip safety parts and shut down before the cycle finishes.","Sediment or pressure issues can cause rumbling, knocking, or popping inside the tank.")
)

Replace-InFile 'local-water-heater-repair.html' @(
  @("Local water heater repair with fast diagnosis, clear estimates, and clean in-home service for no-heat issues, sparking, shutdowns, startup faults, and control problems.","Local water heater repair with fast diagnosis, clear estimates, and clean in-home service for no hot water, leaks, noise issues, startup faults, and control problems."),
  @("including no heat, sparking, unexpected shutdowns, control faults, and water heaters that will not start.","including no hot water, leaks, unusual noise, control faults, and water heaters that will not turn on."),
  @("Water Heater not heating","No hot water"),
  @("Water Heater sparking","Water heater leaking"),
  @("Water Heater won't start","Water heater won't turn on"),
  @("Water Heater shuts off","Water heater making noise"),
  @("Water Heater runs but food stays cold, heats weakly, or takes too long to warm items.","Little to no hot water, short hot-water cycles, or water that never reaches the right temperature."),
  @("Tell us the main symptom, whether it sparks or shuts off, and if the water heater runs without heating. That helps us prepare for the visit.","Tell us the main symptom, whether there is a leak or unusual noise, and if the water heater still makes any hot water. That helps us prepare for the visit.")
)